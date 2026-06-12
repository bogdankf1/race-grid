// Series detail — port of the web /series/[id]: logo header, year selector,
// season progress, family (related series) chips, full season calendar.

import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { ExternalLink } from 'lucide-react-native'
import { useMemo } from 'react'
import { FlatList, Linking, Pressable, Text, View } from 'react-native'

import { getCircuit } from '@/data/circuits'
import {
  AVAILABLE_YEARS,
  getFamilyForSeries,
  getSeriesMeta,
  isSeriesVisible,
} from '@/data/series-registry'
import { t } from '@/lib/i18n'
import { getLocalDate } from '@/lib/timezone'
import { eventStatus } from '~/lib/agenda'
import { SEASON, sessionEndMs } from '~/lib/data'
import { countryFlag, formatDateRange } from '~/lib/format'
import { usePersistedState } from '~/lib/persisted'
import { tm } from '~/lib/strings'
import { useYearData } from '~/lib/year-data'
import { LiveBadge } from '~/components/AgendaCard'
import { SeriesChip } from '~/components/SeriesChip'
import { SeriesLogo } from '~/components/SeriesLogo'
import { YearSelector } from '~/components/YearSelector'
import { useData } from '~/state/data'
import { useSettings } from '~/state/settings'
import { useTheme } from '~/state/theme'

export default function SeriesDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const router = useRouter()
  const { locale, timezone } = useSettings()
  const { c } = useTheme()
  const { seriesList } = useData()
  const [year, setYear] = usePersistedState<number>('race-grid:series-detail-year', SEASON)

  const meta = id ? getSeriesMeta(id) : null
  const yearSeries = useYearData(year)

  // Current season uses the MCP-refreshed list; historical years the bundled data.
  const series = useMemo(() => {
    if (!id) return null
    if (year === SEASON) return seriesList.find((s) => s.id === id) ?? null
    return yearSeries.find((s) => s.id === id) ?? null
  }, [id, year, seriesList, yearSeries])

  const family = id ? getFamilyForSeries(id) : null
  const relatives = (family?.memberSeriesIds ?? [])
    .filter((sid) => sid !== id && isSeriesVisible(sid))
    .map((sid) => getSeriesMeta(sid)!)

  const now = Date.now()
  const events = series?.events ?? []
  const done = events.filter(
    (e) => e.sessions.length > 0 && e.sessions.every((s) => now >= sessionEndMs(s)),
  ).length

  if (!meta) {
    return (
      <View className="flex-1 items-center justify-center bg-rg-bg">
        <Stack.Screen options={{ title: '' }} />
        <Text className="text-base text-rg-text2">{t('error.notFound', locale)}</Text>
      </View>
    )
  }

  return (
    <View className="flex-1 bg-rg-bg">
      <Stack.Screen options={{ title: meta.shortName }} />
      <FlatList
        data={events}
        keyExtractor={(e) => e.id}
        contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
        ListHeaderComponent={
          <View className="mb-3">
            <View className="flex-row items-center gap-3">
              <SeriesLogo seriesId={meta.id} height={34} />
              <View className="flex-1">
                <Text className="text-xl font-bold tracking-wide text-rg-text">{meta.name}</Text>
                <Text className="mt-0.5 text-xs text-rg-text3">
                  {done}/{events.length} {tm('series.progress', locale)}
                </Text>
              </View>
            </View>

            {meta.wikipedia && (
              <Pressable
                onPress={() => {
                  Linking.openURL(`https://en.wikipedia.org/wiki/${meta.wikipedia}`).catch(() => {})
                }}
                accessibilityRole="link"
                className="mt-2 flex-row items-center gap-1.5"
              >
                <ExternalLink size={12} color={c('link')} />
                <Text className="text-xs text-rg-link">{t('series.wikipedia', locale)}</Text>
              </Pressable>
            )}

            {relatives.length > 0 && (
              <View className="mt-3">
                <Text className="mb-1.5 text-xs font-bold uppercase tracking-widest text-rg-text3">
                  {tm('series.family', locale)}
                </Text>
                <View className="flex-row flex-wrap gap-2">
                  {relatives.map((rel) => (
                    <SeriesChip
                      key={rel.id}
                      shortName={rel.shortName}
                      color={rel.color}
                      textColor={rel.textColor}
                      onPress={() => router.push(`/series/${rel.id}`)}
                    />
                  ))}
                </View>
              </View>
            )}

            <View className="mt-3">
              <YearSelector year={year} years={AVAILABLE_YEARS} onChange={setYear} />
            </View>

            <Text className="mt-4 text-xs font-bold uppercase tracking-widest text-rg-text3">
              {tm('series.calendar', locale)}
            </Text>
          </View>
        }
        ListEmptyComponent={
          <Text className="pt-10 text-center text-sm text-rg-text3">
            {t('error.noData', locale)}
          </Text>
        }
        renderItem={({ item }) => {
          const circuit = getCircuit(item.circuitId)
          const sorted = [...item.sessions].sort(
            (a, b) => new Date(a.startUtc).getTime() - new Date(b.startUtc).getTime(),
          )
          const status = eventStatus(item, now)
          const start = sorted[0] ? getLocalDate(sorted[0].startUtc, timezone) : null
          const end = sorted.length
            ? getLocalDate(sorted[sorted.length - 1].startUtc, timezone)
            : null
          return (
            <Pressable
              onPress={() => router.push(`/race/${item.id}`)}
              accessibilityRole="button"
              className="mb-1.5 flex-row items-center gap-3 rounded-xl border border-rg-card-border bg-rg-surface px-3 py-2.5"
              style={{
                borderLeftWidth: 4,
                borderLeftColor: meta.color,
                opacity: status === 'finished' ? 0.6 : 1,
              }}
            >
              <Text className="w-7 text-center text-xs font-bold text-rg-text3">
                {item.round ?? '–'}
              </Text>
              <View className="flex-1">
                <Text className="text-sm font-semibold text-rg-text" numberOfLines={1}>
                  {item.name}
                </Text>
                {circuit && (
                  <Text className="text-xs text-rg-text3" numberOfLines={1}>
                    {countryFlag(circuit.countryCode)} {circuit.name}
                  </Text>
                )}
              </View>
              <View className="items-end">
                {status === 'live' ? (
                  <LiveBadge locale={locale} />
                ) : start && end ? (
                  <Text className="text-xs font-semibold text-rg-text2">
                    {formatDateRange(start, end, locale)}
                  </Text>
                ) : null}
                {status === 'finished' && (
                  <Text className="text-[10px] text-rg-text3">{t('session.finished', locale)}</Text>
                )}
              </View>
            </Pressable>
          )
        }}
      />
    </View>
  )
}
