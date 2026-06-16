// Standings tab — port of the web /standings page: year + series pickers,
// class tabs for multi-class series, Drivers/Constructors toggle, search.

import { useLocalSearchParams, useRouter, type Href } from 'expo-router'
import { Search } from 'lucide-react-native'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { FlatList, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { getDriver } from '@/data/drivers'
import { AVAILABLE_YEARS, getSeriesMeta, getVisibleSeries } from '@/data/series-registry'
import { getStandings, hasStandings } from '@/data/standings'
import type { ClassStandings } from '@/data/standings/types'
import { getTeam } from '@/data/teams'
import { t, type Locale } from '@/lib/i18n'
import { countryCode } from '~/lib/format'
import { usePersistedState } from '~/lib/persisted'
import { SEASON } from '~/lib/data'
import { tm } from '~/lib/strings'
import { CountryCode } from '~/components/CountryCode'
import { SeriesChip } from '~/components/SeriesChip'
import { YearSelector } from '~/components/YearSelector'
import { useIsTablet } from '~/lib/use-is-tablet'
import { useSettings } from '~/state/settings'
import { useTheme } from '~/state/theme'

const MEDAL_BG = ['rgba(255,215,0,0.12)', 'rgba(192,192,192,0.10)', 'rgba(205,127,50,0.10)']

interface Row {
  position: number
  name: string
  code: string
  team: string
  points: number
  wins: number
  /** Route target: driver page for driver rows, team page for constructors. */
  href: string
}

function StandingsColumn({
  rows,
  activeTab,
  meta,
  locale,
  c,
  query,
  onOpen,
}: {
  rows: Row[]
  activeTab: 'drivers' | 'constructors'
  meta: ReturnType<typeof getSeriesMeta>
  locale: Locale
  c: ReturnType<typeof useTheme>['c']
  query: string
  onOpen: (href: string) => void
}) {
  return (
    <FlatList
      data={rows}
      keyExtractor={(r) => `${activeTab}-${r.position}-${r.name}`}
      contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
      ListEmptyComponent={
        <Text className="pt-16 text-center text-sm text-rg-text3">
          {t(query ? 'search.noResults' : 'error.noData', locale)}
        </Text>
      }
      renderItem={({ item }) => (
        <Pressable
          onPress={() => onOpen(item.href)}
          accessibilityRole="button"
          className="mb-1 flex-row items-center gap-3 rounded-xl border border-rg-card-border bg-rg-surface px-3 py-2.5"
          style={{
            backgroundColor: item.position <= 3 ? MEDAL_BG[item.position - 1] : undefined,
            borderLeftWidth: 3,
            borderLeftColor: meta?.color ?? c('border'),
          }}
        >
          <Text className="w-7 text-center text-sm font-bold text-rg-text2">{item.position}</Text>
          <View className="flex-1">
            <View className="flex-row items-center gap-1.5">
              {item.code ? <CountryCode code={item.code} /> : null}
              <Text className="flex-1 text-sm font-semibold text-rg-text" numberOfLines={1}>
                {item.name}
              </Text>
            </View>
            {item.team ? (
              <Text className="mt-0.5 text-xs text-rg-text3" numberOfLines={1}>
                {item.team}
              </Text>
            ) : null}
          </View>
          <View className="items-end">
            <Text className="text-sm font-bold text-rg-text">{item.points}</Text>
            <Text className="text-[10px] text-rg-text3">
              {tm('standings.wins', locale)}: {item.wins}
            </Text>
          </View>
        </Pressable>
      )}
    />
  )
}

export default function StandingsScreen() {
  const { locale } = useSettings()
  const { c } = useTheme()
  const router = useRouter()
  const params = useLocalSearchParams<{ series?: string; year?: string; tab?: string }>()
  const [year, setYear] = usePersistedState<number>('race-grid:standings-year', SEASON)
  const [seriesId, setSeriesId] = usePersistedState<string>('race-grid:standings-series', 'f1')
  const [tab, setTab] = useState<'drivers' | 'constructors'>('drivers')
  const [classIndex, setClassIndex] = useState(0)
  const [query, setQuery] = useState('')

  // Honor deep-link params (e.g. opened from a series detail page).
  useEffect(() => {
    if (params.series) setSeriesId(params.series)
    if (params.year) setYear(Number(params.year))
    if (params.tab === 'drivers' || params.tab === 'constructors') setTab(params.tab)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.series, params.year, params.tab])

  const seriesWithStandings = useMemo(
    () => getVisibleSeries().filter((s) => hasStandings(s.id, year)),
    [year],
  )

  // Keep the selection valid when the year changes.
  const activeSeriesId = seriesWithStandings.some((s) => s.id === seriesId)
    ? seriesId
    : (seriesWithStandings[0]?.id ?? seriesId)

  const standings = useMemo(() => getStandings(activeSeriesId, year), [activeSeriesId, year])

  // Primary class first, then the other classes (web class tabs).
  const classes = useMemo<ClassStandings[]>(() => {
    if (!standings) return []
    return [
      {
        className: standings.className ?? '',
        drivers: standings.drivers,
        constructors: standings.constructors,
      },
      ...(standings.otherClasses ?? []),
    ]
  }, [standings])

  const activeClass = classes[Math.min(classIndex, classes.length - 1)] ?? null
  const hasConstructors = (activeClass?.constructors.length ?? 0) > 0
  const activeTab = tab === 'constructors' && !hasConstructors ? 'drivers' : tab

  const buildRows = useCallback((which: 'drivers' | 'constructors'): Row[] => {
    if (!activeClass) return []
    const q = query.trim().toLowerCase()
    const list: Row[] =
      which === 'drivers'
        ? activeClass.drivers.map((d) => {
            const driver = getDriver(d.driverId)
            return {
              position: d.position,
              name: driver?.shortName ?? d.driverId,
              code: driver?.nationality ? countryCode(driver.nationality) : '',
              team: getTeam(d.teamId)?.name ?? d.teamId,
              points: d.points,
              wins: d.wins,
              href: `/driver/${d.driverId}`,
            }
          })
        : activeClass.constructors.map((cRow) => ({
            position: cRow.position,
            name: getTeam(cRow.teamId)?.name ?? cRow.teamId,
            code: '',
            team: '',
            points: cRow.points,
            wins: cRow.wins,
            href: `/team/${cRow.teamId}`,
          }))
    if (!q) return list
    return list.filter(
      (r) => r.name.toLowerCase().includes(q) || r.team.toLowerCase().includes(q),
    )
  }, [activeClass, query])

  const isTablet = useIsTablet()
  const showBoth = isTablet && hasConstructors

  const driverRows = useMemo(() => buildRows('drivers'), [buildRows])
  const constructorRows = useMemo(() => buildRows('constructors'), [buildRows])
  const activeRows = activeTab === 'drivers' ? driverRows : constructorRows

  const handleOpen = useCallback((href: string) => router.push(href as Href), [router])

  const meta = getSeriesMeta(activeSeriesId)

  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-rg-bg">
      <Text className="px-4 pb-2 pt-3 text-xl font-extrabold tracking-widest text-rg-text">
        {t('nav.standings', locale)}
      </Text>

      <View className="px-4 pb-2">
        <YearSelector
          year={year}
          years={AVAILABLE_YEARS}
          onChange={(y) => {
            setYear(y)
            setClassIndex(0)
          }}
        />
      </View>

      <View className="flex-row flex-wrap gap-2 px-4 pb-2">
        {seriesWithStandings.map((s) => (
          <SeriesChip
            key={s.id}
            shortName={s.shortName}
            color={s.color}
            textColor={s.textColor}
            active={s.id === activeSeriesId}
            onPress={() => {
              setSeriesId(s.id)
              setClassIndex(0)
            }}
          />
        ))}
      </View>

      <View className="mx-4 mb-2 flex-row items-center gap-2 rounded-xl border border-rg-border bg-rg-surface px-3">
        <Search size={14} color={c('text3')} />
        <TextInput
          className="flex-1 py-2 text-sm text-rg-text"
          placeholder={t('search.standings', locale)}
          placeholderTextColor={c('text3')}
          value={query}
          onChangeText={setQuery}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      {classes.length > 1 && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="grow-0"
          contentContainerStyle={{ gap: 6, paddingHorizontal: 16, paddingBottom: 8 }}
        >
          {classes.map((cls, i) => (
            <Pressable
              key={cls.className || i}
              onPress={() => setClassIndex(i)}
              accessibilityRole="button"
              className={
                i === classIndex
                  ? 'rounded-lg bg-rg-elevated border border-rg-border px-3 py-1.5'
                  : 'rounded-lg border border-rg-border px-3 py-1.5'
              }
            >
              <Text
                className={
                  i === classIndex
                    ? 'text-xs font-bold text-rg-text'
                    : 'text-xs font-semibold text-rg-text3'
                }
              >
                {cls.className || t('result.title', locale)}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      )}

      {!showBoth && (
        <View className="mx-4 mb-2 flex-row overflow-hidden rounded-lg border border-rg-border">
          {(['drivers', 'constructors'] as const).map((tabKey) => (
            <Pressable
              key={tabKey}
              disabled={tabKey === 'constructors' && !hasConstructors}
              onPress={() => setTab(tabKey)}
              accessibilityRole="button"
              className={activeTab === tabKey ? 'flex-1 items-center bg-rg-elevated py-2' : 'flex-1 items-center py-2'}
              style={{ opacity: tabKey === 'constructors' && !hasConstructors ? 0.35 : 1 }}
            >
              <Text
                className={
                  activeTab === tabKey
                    ? 'text-xs font-bold text-rg-text'
                    : 'text-xs font-semibold text-rg-text3'
                }
              >
                {tm(`standings.${tabKey}`, locale)}
              </Text>
            </Pressable>
          ))}
        </View>
      )}

      {showBoth ? (
        <View className="flex-1 flex-row">
          <View className="flex-1">
            <Text className="px-4 pb-1 text-xs font-bold uppercase tracking-widest text-rg-text3">
              {tm('standings.drivers', locale)}
            </Text>
            <StandingsColumn
              rows={driverRows}
              activeTab="drivers"
              meta={meta}
              locale={locale}
              c={c}
              query={query}
              onOpen={handleOpen}
            />
          </View>
          <View className="flex-1 border-l border-rg-border">
            <Text className="px-4 pb-1 text-xs font-bold uppercase tracking-widest text-rg-text3">
              {tm('standings.constructors', locale)}
            </Text>
            <StandingsColumn
              rows={constructorRows}
              activeTab="constructors"
              meta={meta}
              locale={locale}
              c={c}
              query={query}
              onOpen={handleOpen}
            />
          </View>
        </View>
      ) : (
        <StandingsColumn
          rows={activeRows}
          activeTab={activeTab}
          meta={meta}
          locale={locale}
          c={c}
          query={query}
          onOpen={handleOpen}
        />
      )}
    </SafeAreaView>
  )
}
