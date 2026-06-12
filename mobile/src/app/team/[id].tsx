// Team detail — port of the web /teams/[id]: country header, series chips,
// year selector, total wins, Drivers/Results tabs.

import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { Trophy } from 'lucide-react-native'
import { useMemo, useState } from 'react'
import { ActivityIndicator, FlatList, Pressable, Text, View } from 'react-native'

import { getDriver } from '@/data/drivers'
import { getTeamResults } from '@/data/driver-results'
import { getSeriesMeta } from '@/data/series-registry'
import { getStandings } from '@/data/standings'
import { getTeam } from '@/data/teams'
import { t } from '@/lib/i18n'
import { useAllYearsLoaded } from '~/lib/all-years'
import { countryFlag, countryName, MEDAL_COLORS } from '~/lib/format'
import { tm } from '~/lib/strings'
import { SeriesChip } from '~/components/SeriesChip'
import { YearSelector } from '~/components/YearSelector'
import { useSettings } from '~/state/settings'
import { useTheme } from '~/state/theme'

export default function TeamDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const router = useRouter()
  const { locale } = useSettings()
  const { c } = useTheme()
  const yearsLoaded = useAllYearsLoaded()
  const [tab, setTab] = useState<'drivers' | 'results'>('drivers')

  const team = id ? getTeam(id) : null
  const allSeasons = useMemo(() => (id && yearsLoaded ? getTeamResults(id) : []), [id, yearsLoaded])

  const years = useMemo(
    () => [...new Set(allSeasons.map((s) => s.year))].sort((a, b) => b - a),
    [allSeasons],
  )
  const [pickedYear, setPickedYear] = useState<number | null>(null)
  const year = pickedYear ?? years[0] ?? null
  const seasons = allSeasons.filter((s) => s.year === year)
  const seriesIds = [...new Set(allSeasons.map((s) => s.seriesId))]
  const totalWins = seasons.reduce((sum, s) => sum + s.wins, 0)

  // Roster: full grid from standings, plus anyone who reached a podium.
  const rosterIds = useMemo(() => {
    if (!id || year == null) return []
    const seen = new Set<string>()
    for (const season of seasons) {
      const standings = getStandings(season.seriesId, year)
      for (const d of standings?.drivers ?? []) {
        if (d.teamId === id) seen.add(d.driverId)
      }
      for (const driverId of season.driverIds) seen.add(driverId)
    }
    return [...seen]
  }, [id, year, seasons])

  const results = seasons.flatMap((s) =>
    s.results.map((r) => ({ ...r, season: s })),
  )

  if (!team) {
    return (
      <View className="flex-1 items-center justify-center bg-rg-bg">
        <Stack.Screen options={{ title: '' }} />
        <Text className="text-base text-rg-text2">{t('error.notFound', locale)}</Text>
      </View>
    )
  }

  const header = (
    <View className="mb-3">
      <Text className="text-xl font-bold tracking-wide text-rg-text">{team.name}</Text>
      {team.country ? (
        <Text className="mt-0.5 text-sm text-rg-text2">
          {countryFlag(team.country)} {countryName(team.country, locale)}
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

      {totalWins > 0 && (
        <View className="mt-3 flex-row items-center gap-1.5">
          <Trophy size={13} color={MEDAL_COLORS[0]} />
          <Text className="text-sm font-semibold text-rg-text">
            {totalWins} {tm('standings.wins', locale).toLowerCase()}
          </Text>
        </View>
      )}

      <View className="mt-3 flex-row overflow-hidden rounded-lg border border-rg-border">
        {(['drivers', 'results'] as const).map((tabKey) => (
          <Pressable
            key={tabKey}
            onPress={() => setTab(tabKey)}
            accessibilityRole="button"
            className={
              tab === tabKey ? 'flex-1 items-center bg-rg-elevated py-2' : 'flex-1 items-center py-2'
            }
          >
            <Text
              className={
                tab === tabKey
                  ? 'text-xs font-bold text-rg-text'
                  : 'text-xs font-semibold text-rg-text3'
              }
            >
              {tabKey === 'drivers' ? tm('standings.drivers', locale) : t('result.title', locale)}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  )

  return (
    <View className="flex-1 bg-rg-bg">
      <Stack.Screen options={{ title: team.name }} />
      {tab === 'drivers' ? (
        <FlatList
          data={rosterIds}
          keyExtractor={(driverId) => driverId}
          contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
          ListHeaderComponent={header}
          ListEmptyComponent={
            !yearsLoaded ? (
              <ActivityIndicator className="pt-10" color={c('text3')} />
            ) : (
              <Text className="pt-10 text-center text-sm text-rg-text3">
                {t('error.noData', locale)}
              </Text>
            )
          }
          renderItem={({ item: driverId }) => {
            const driver = getDriver(driverId)
            return (
              <Pressable
                onPress={() => router.push(`/driver/${driverId}`)}
                accessibilityRole="button"
                className="mb-1 flex-row items-center gap-2.5 rounded-lg border border-rg-card-border bg-rg-surface px-3.5 py-2.5"
              >
                <Text className="flex-1 text-sm font-semibold text-rg-text" numberOfLines={1}>
                  {driver?.nationality ? `${countryFlag(driver.nationality)} ` : ''}
                  {driver?.name ?? driverId}
                </Text>
                <Text className="text-xs text-rg-text3">›</Text>
              </Pressable>
            )
          }}
        />
      ) : (
        <FlatList
          data={results}
          keyExtractor={(r, i) => `${r.eventId}-${r.sessionType}-${i}`}
          contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
          ListHeaderComponent={header}
          ListEmptyComponent={
            <Text className="pt-10 text-center text-sm text-rg-text3">
              {t('error.noData', locale)}
            </Text>
          }
          renderItem={({ item: r }) => (
            <Pressable
              onPress={() => router.push(`/race/${r.eventId}`)}
              accessibilityRole="button"
              className="mb-1 flex-row items-center gap-2.5 rounded-lg border border-rg-card-border bg-rg-surface px-3.5 py-2"
              style={{
                borderLeftWidth: r.position <= 3 ? 3 : 1,
                borderLeftColor: r.position <= 3 ? MEDAL_COLORS[r.position - 1] : c('card-border'),
              }}
            >
              <Text
                className="w-7 text-center text-[13px] font-bold"
                style={{ color: r.position <= 3 ? MEDAL_COLORS[r.position - 1] : c('text3') }}
              >
                P{r.position}
              </Text>
              <View className="flex-1">
                <Text className="text-[13px] font-medium text-rg-text" numberOfLines={1}>
                  {r.eventName}
                </Text>
                <Text className="text-xs text-rg-text3" numberOfLines={1}>
                  {r.winnerDrivers}
                </Text>
              </View>
              <Text className="text-xs text-rg-text3">
                {new Date(r.raceDate + 'T00:00:00Z').toLocaleDateString(
                  locale === 'uk' ? 'uk-UA' : 'en-US',
                  { month: 'short', day: 'numeric', timeZone: 'UTC' },
                )}
              </Text>
            </Pressable>
          )}
        />
      )}
    </View>
  )
}
