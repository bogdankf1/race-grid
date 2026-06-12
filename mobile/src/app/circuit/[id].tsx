// Circuit detail — port of the web /circuits/[slug]: stats header, Wikipedia
// link, series that race here, and the events held at this circuit per year.

import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { ExternalLink } from 'lucide-react-native'
import { useMemo } from 'react'
import { FlatList, Linking, Pressable, Text, View } from 'react-native'

import { getCircuit, getCircuitTypeLabel } from '@/data/circuits'
import { AVAILABLE_YEARS } from '@/data/series-registry'
import { t } from '@/lib/i18n'
import { getLocalDate } from '@/lib/timezone'
import type { RaceEvent, SeriesConfig } from '@/lib/types'
import { SEASON } from '~/lib/data'
import { countryFlag, formatDateRange } from '~/lib/format'
import { usePersistedState } from '~/lib/persisted'
import { tm } from '~/lib/strings'
import { useYearData } from '~/lib/year-data'
import { SeriesChip } from '~/components/SeriesChip'
import { YearSelector } from '~/components/YearSelector'
import { useData } from '~/state/data'
import { useSettings } from '~/state/settings'
import { useTheme } from '~/state/theme'

interface CircuitEvent {
  series: SeriesConfig
  event: RaceEvent
  startUtc: string
}

export default function CircuitDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const router = useRouter()
  const { locale, timezone } = useSettings()
  const { c } = useTheme()
  const { seriesList } = useData()
  const [year, setYear] = usePersistedState<number>('race-grid:circuit-year', SEASON)

  const circuit = id ? getCircuit(id) : null
  const yearSeries = useYearData(year)
  const activeList = year === SEASON ? seriesList : yearSeries

  const events = useMemo<CircuitEvent[]>(() => {
    if (!circuit) return []
    const out: CircuitEvent[] = []
    for (const series of activeList) {
      for (const event of series.events) {
        if (event.circuitId !== circuit.id || event.sessions.length === 0) continue
        const startUtc = [...event.sessions].sort(
          (a, b) => new Date(a.startUtc).getTime() - new Date(b.startUtc).getTime(),
        )[0].startUtc
        out.push({ series, event, startUtc })
      }
    }
    return out.sort((a, b) => new Date(a.startUtc).getTime() - new Date(b.startUtc).getTime())
  }, [circuit, activeList])

  const seriesHere = useMemo(() => {
    const seen = new Map<string, SeriesConfig>()
    for (const e of events) seen.set(e.series.id, e.series)
    return [...seen.values()]
  }, [events])

  if (!circuit) {
    return (
      <View className="flex-1 items-center justify-center bg-rg-bg">
        <Stack.Screen options={{ title: '' }} />
        <Text className="text-base text-rg-text2">{t('error.notFound', locale)}</Text>
      </View>
    )
  }

  return (
    <View className="flex-1 bg-rg-bg">
      <Stack.Screen options={{ title: circuit.name }} />
      <FlatList
        data={events}
        keyExtractor={(e) => `${e.series.id}-${e.event.id}`}
        contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
        ListHeaderComponent={
          <View className="mb-3">
            <Text className="text-xl font-bold tracking-wide text-rg-text">
              {countryFlag(circuit.countryCode)} {circuit.name}
            </Text>
            <Text className="mt-0.5 text-sm text-rg-text2">{circuit.country}</Text>
            <Text className="mt-1 text-xs text-rg-text3">
              {circuit.length} · {circuit.turns} {tm('circuit.turns', locale)} ·{' '}
              {getCircuitTypeLabel(circuit.type, locale)}
            </Text>
            {circuit.lapRecord && (
              <Text className="mt-1 text-xs text-rg-text3">
                {tm('detail.lapRecord', locale)}: {circuit.lapRecord}
              </Text>
            )}
            {circuit.wikipedia && (
              <Pressable
                onPress={() => {
                  Linking.openURL(`https://en.wikipedia.org/wiki/${circuit.wikipedia}`).catch(
                    () => {},
                  )
                }}
                accessibilityRole="link"
                className="mt-2 flex-row items-center gap-1.5"
              >
                <ExternalLink size={12} color={c('link')} />
                <Text className="text-xs text-rg-link">{t('circuit.wikipedia', locale)}</Text>
              </Pressable>
            )}

            {seriesHere.length > 0 && (
              <View className="mt-3 flex-row flex-wrap gap-2">
                {seriesHere.map((s) => (
                  <SeriesChip
                    key={s.id}
                    shortName={s.shortName}
                    color={s.color}
                    textColor={s.textColor}
                    onPress={() => router.push(`/series/${s.id}`)}
                  />
                ))}
              </View>
            )}

            <View className="mt-3">
              <YearSelector year={year} years={AVAILABLE_YEARS} onChange={setYear} />
            </View>

            <Text className="mt-4 text-xs font-bold uppercase tracking-widest text-rg-text3">
              {tm('circuits.eventsHere', locale)}
            </Text>
          </View>
        }
        ListEmptyComponent={
          <Text className="pt-10 text-center text-sm text-rg-text3">
            {t('error.noData', locale)}
          </Text>
        }
        renderItem={({ item }) => {
          const sorted = [...item.event.sessions].sort(
            (a, b) => new Date(a.startUtc).getTime() - new Date(b.startUtc).getTime(),
          )
          const start = getLocalDate(sorted[0].startUtc, timezone)
          const end = getLocalDate(sorted[sorted.length - 1].startUtc, timezone)
          return (
            <Pressable
              onPress={() => router.push(`/race/${item.event.id}`)}
              accessibilityRole="button"
              className="mb-1.5 flex-row items-center gap-3 rounded-xl border border-rg-card-border bg-rg-surface px-3 py-2.5"
              style={{ borderLeftWidth: 4, borderLeftColor: item.series.color }}
            >
              <SeriesChip
                shortName={item.series.shortName}
                color={item.series.color}
                textColor={item.series.textColor}
              />
              <Text className="flex-1 text-sm font-semibold text-rg-text" numberOfLines={1}>
                {item.event.name}
              </Text>
              <Text className="text-xs font-semibold text-rg-text2">
                {formatDateRange(start, end, locale)}
              </Text>
            </Pressable>
          )
        }}
      />
    </View>
  )
}
