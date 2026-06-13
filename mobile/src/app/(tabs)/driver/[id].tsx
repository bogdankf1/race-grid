// Driver detail — port of the web /drivers/[id]: nationality header, series
// chips, year selector, season-by-season podium results (gold/silver/bronze
// accents), rows open the race detail.

import { useLocalSearchParams, useRouter } from 'expo-router'
import { Trophy } from 'lucide-react-native'
import { useMemo, useState } from 'react'
import { ActivityIndicator, FlatList, Pressable, Text, View } from 'react-native'

import { getDriver } from '@/data/drivers'
import { getDriverResults } from '@/data/driver-results'
import { getSeriesMeta } from '@/data/series-registry'
import { getTeam } from '@/data/teams'
import { t } from '@/lib/i18n'
import { useAllYearsLoaded } from '~/lib/all-years'
import { countryFlag, countryName, MEDAL_COLORS } from '~/lib/format'
import { useScreenTitle } from '~/lib/use-screen-title'
import { SeriesChip } from '~/components/SeriesChip'
import { YearSelector } from '~/components/YearSelector'
import { useSettings } from '~/state/settings'
import { useTheme } from '~/state/theme'

export default function DriverDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const router = useRouter()
  const { locale } = useSettings()
  const { c } = useTheme()
  const yearsLoaded = useAllYearsLoaded()

  const driver = id ? getDriver(id) : null
  const allSeasons = useMemo(
    () => (id && yearsLoaded ? getDriverResults(id) : []),
    [id, yearsLoaded],
  )

  const years = useMemo(
    () => [...new Set(allSeasons.map((s) => s.year))].sort((a, b) => b - a),
    [allSeasons],
  )
  const [pickedYear, setPickedYear] = useState<number | null>(null)
  const year = pickedYear ?? years[0] ?? null
  const seasons = allSeasons.filter((s) => s.year === year)
  const seriesIds = [...new Set(allSeasons.map((s) => s.seriesId))]

  useScreenTitle(driver?.shortName ?? '')

  if (!driver) {
    return (
      <View className="flex-1 items-center justify-center bg-rg-bg">
        <Text className="text-base text-rg-text2">{t('error.notFound', locale)}</Text>
      </View>
    )
  }

  return (
    <View className="flex-1 bg-rg-bg">
      <FlatList
        data={seasons}
        keyExtractor={(s) => `${s.seriesId}-${s.year}`}
        contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
        ListHeaderComponent={
          <View className="mb-3">
            <Text className="text-xl font-bold tracking-wide text-rg-text">{driver.name}</Text>
            {driver.nationality ? (
              <Text className="mt-0.5 text-sm text-rg-text2">
                {countryFlag(driver.nationality)} {countryName(driver.nationality, locale)}
              </Text>
            ) : null}

            {seriesIds.length > 0 && (
              <View className="mt-3 flex-row flex-wrap gap-2">
                {seriesIds.map((sid) => {
                  const meta = getSeriesMeta(sid)
                  if (!meta) return null
                  return (
                    <SeriesChip
                      key={sid}
                      shortName={meta.shortName}
                      color={meta.color}
                      textColor={meta.textColor}
                      onPress={() => router.push(`/series/${sid}`)}
                    />
                  )
                })}
              </View>
            )}

            {years.length > 0 && year != null && (
              <View className="mt-3">
                <YearSelector year={year} years={years} onChange={setPickedYear} />
              </View>
            )}
          </View>
        }
        ListEmptyComponent={
          !yearsLoaded ? (
            <ActivityIndicator className="pt-10" color={c('text3')} />
          ) : (
            <Text className="pt-10 text-center text-sm text-rg-text3">
              {t('error.noData', locale)}
            </Text>
          )
        }
        renderItem={({ item: season }) => (
          <View className="mb-5">
            <View className="mb-2 flex-row items-center gap-2.5">
              <SeriesChip
                shortName={season.seriesShortName}
                color={season.seriesColor}
                textColor={season.seriesTextColor}
              />
              <Text className="text-[15px] font-bold text-rg-text">{season.year}</Text>
              <Pressable
                onPress={() => router.push(`/team/${season.teamId}`)}
                accessibilityRole="link"
                className="flex-1"
              >
                <Text className="text-[13px] text-rg-text3" numberOfLines={1}>
                  {getTeam(season.teamId)?.name ?? season.teamName}
                </Text>
              </Pressable>
              {season.wins > 0 && (
                <View className="flex-row items-center gap-1">
                  <Trophy size={11} color={c('text3')} />
                  <Text className="text-xs text-rg-text3">{season.wins}</Text>
                </View>
              )}
            </View>

            {season.results.length > 0 ? (
              <View className="gap-1">
                {season.results.map((r, idx) => {
                  const pos = r.position ?? 0
                  const medal = pos >= 1 && pos <= 3 ? MEDAL_COLORS[pos - 1] : null
                  return (
                  <Pressable
                    key={`${r.eventId}-${r.sessionType}-${idx}`}
                    onPress={() => router.push(`/race/${r.eventId}`)}
                    accessibilityRole="button"
                    className="flex-row items-center gap-2.5 rounded-lg border border-rg-card-border bg-rg-surface px-3.5 py-2"
                    style={{
                      borderLeftWidth: medal ? 3 : 1,
                      borderLeftColor: medal ?? c('card-border'),
                    }}
                  >
                    <Text
                      className="w-7 text-center text-[13px] font-bold"
                      style={{ color: medal ?? c('text3') }}
                    >
                      {pos > 0 ? `P${pos}` : '—'}
                    </Text>
                    <Text className="flex-1 text-[13px] font-medium text-rg-text" numberOfLines={1}>
                      {r.eventName}
                    </Text>
                    <Text className="text-xs text-rg-text3">
                      {new Date(r.raceDate + 'T00:00:00Z').toLocaleDateString(
                        locale === 'uk' ? 'uk-UA' : 'en-US',
                        { month: 'short', day: 'numeric', timeZone: 'UTC' },
                      )}
                    </Text>
                  </Pressable>
                  )
                })}
              </View>
            ) : (
              <Text className="py-1 text-[13px] text-rg-text3">{t('error.noData', locale)}</Text>
            )}
          </View>
        )}
      />
    </View>
  )
}
