// Race detail: every session of the weekend in the user's timezone, circuit
// info, and (spoiler-guarded) results once sessions have finished.

import { Stack, useLocalSearchParams } from 'expo-router'
import { useEffect, useMemo, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'

import { getCircuit, getCircuitTypeLabel } from '@/data/circuits'
import { t } from '@/lib/i18n'
import { formatInTimezone, getLocalDate } from '@/lib/timezone'
import type { Session } from '@/lib/types'
import { isStale, readCache, writeCache } from '~/lib/cache'
import { collectEventResults, hasFinishedResultSession } from '~/lib/data'
import { useEventRef } from '~/lib/event-ref'
import { countryFlag } from '~/lib/format'
import { fetchEventResults, type RemoteSessionResult } from '~/lib/mcp'
import { tm } from '~/lib/strings'
import { AddToCalendar } from '~/components/AddToCalendar'
import { ResultBlock } from '~/components/ResultBlock'
import { SeriesChip } from '~/components/SeriesChip'
import { SessionRow } from '~/components/SessionRow'
import { SpoilerGuard } from '~/components/SpoilerGuard'
import { WhereToWatch } from '~/components/WhereToWatch'
import { useSettings } from '~/state/settings'

const RESULTS_MAX_AGE_MS = 6 * 60 * 60 * 1000

export default function RaceDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const { timezone, locale, spoilerFree, visibleSessionTypes } = useSettings()

  const { ref, loading } = useEventRef(id)

  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const tick = setInterval(() => setNow(Date.now()), 30_000)
    return () => clearInterval(tick)
  }, [])

  // Results newer than the bundled snapshot, fetched once per event and cached.
  const [remoteResults, setRemoteResults] = useState<RemoteSessionResult[] | null>(null)
  useEffect(() => {
    if (!ref || !hasFinishedResultSession(ref.event, Date.now())) return
    let cancelled = false
    const cacheKey = `results:${ref.event.id}`
    readCache<RemoteSessionResult[]>(cacheKey).then(async (cached) => {
      if (cancelled) return
      if (cached) setRemoteResults(cached.value)
      if (isStale(cached, RESULTS_MAX_AGE_MS)) {
        try {
          const fresh = await fetchEventResults(ref.event.id)
          if (!cancelled && fresh.length > 0) {
            setRemoteResults(fresh)
            await writeCache(cacheKey, fresh)
          }
        } catch {
          // Offline — bundled results (if any) still render.
        }
      }
    })
    return () => {
      cancelled = true
    }
  }, [ref])

  const sessionsByDay = useMemo(() => {
    if (!ref) return []
    const sorted = ref.event.sessions
      .filter((s) => visibleSessionTypes.includes(s.type))
      .sort((a, b) => new Date(a.startUtc).getTime() - new Date(b.startUtc).getTime())
    const days = new Map<string, Session[]>()
    for (const session of sorted) {
      const day = getLocalDate(session.startUtc, timezone)
      const list = days.get(day)
      if (list) list.push(session)
      else days.set(day, [session])
    }
    return [...days.entries()]
  }, [ref, timezone, visibleSessionTypes])

  if (!ref) {
    return (
      <View className="flex-1 items-center justify-center bg-rg-bg px-8">
        <Stack.Screen options={{ title: '' }} />
        {!loading && (
          <Text className="text-base text-rg-text2">{tm('detail.notFound', locale)}</Text>
        )}
      </View>
    )
  }

  const { series, event } = ref
  const circuit = getCircuit(event.circuitId)
  const maxRound = Math.max(series.events.length, ...series.events.map((e) => e.round ?? 0))
  const resultPairs = collectEventResults(event, now, remoteResults)

  return (
    <ScrollView
      className="flex-1 bg-rg-bg"
      contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
    >
      <Stack.Screen options={{ title: series.shortName }} />

      <View className="flex-row items-center gap-3">
        <SeriesChip
          shortName={series.shortName}
          color={series.color}
          textColor={series.textColor}
          size="md"
        />
        {event.round != null && (
          <View className="rounded-md border border-rg-border bg-rg-elevated px-2.5 py-1">
            <Text className="text-[11px] font-semibold text-rg-text3">
              {t('progress.roundFull', locale)} {event.round}/{maxRound}
            </Text>
          </View>
        )}
      </View>

      <Text className="mt-3 text-xl font-bold tracking-wide text-rg-text">{event.name}</Text>

      {circuit && (
        <View className="mt-3 rounded-2xl border border-rg-card-border bg-rg-surface p-4">
          <Text className="mb-1 text-xs font-bold uppercase tracking-widest text-rg-text3">
            {tm('detail.circuit', locale)}
          </Text>
          <Text className="text-sm font-semibold text-rg-text">
            {countryFlag(circuit.countryCode)} {circuit.name}, {circuit.country}
          </Text>
          <Text className="mt-1 text-xs text-rg-text3">
            {circuit.length} · {circuit.turns} {tm('circuit.turns', locale)} ·{' '}
            {getCircuitTypeLabel(circuit.type, locale)}
          </Text>
          {circuit.lapRecord && (
            <Text className="mt-1 text-xs text-rg-text3">
              {tm('detail.lapRecord', locale)}: {circuit.lapRecord}
            </Text>
          )}
        </View>
      )}

      <Text className="mb-2 mt-5 text-xs font-bold uppercase tracking-widest text-rg-text3">
        {tm('detail.sessions', locale)}
      </Text>
      <View className="gap-3">
        {sessionsByDay.map(([day, sessions]) => (
          <View key={day}>
            <Text className="mb-1.5 text-xs font-semibold text-rg-text2">
              {formatInTimezone(sessions[0].startUtc, timezone, 'date', locale)}
            </Text>
            <View className="gap-1.5">
              {sessions.map((session) => (
                <SessionRow
                  key={`${session.type}-${session.startUtc}-${session.label}`}
                  session={session}
                  timezone={timezone}
                  locale={locale}
                  now={now}
                />
              ))}
            </View>
          </View>
        ))}
      </View>

      <WhereToWatch
        seriesId={series.id}
        seriesColor={series.color}
        timezone={timezone}
        locale={locale}
      />
      <AddToCalendar
        event={event}
        sessions={sessionsByDay.flatMap(([, sessions]) => sessions)}
        seriesId={series.id}
        seriesName={series.name}
        seriesEvents={series.events}
        locale={locale}
      />

      {resultPairs.length > 0 &&
        (spoilerFree ? (
          <SpoilerGuard results={resultPairs} locale={locale} />
        ) : (
          <ResultBlock results={resultPairs} locale={locale} />
        ))}
    </ScrollView>
  )
}
