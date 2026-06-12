// Schedule tab: the season agenda, grouped by race week in the user's
// timezone, color-coded per series, filtered to followed series.

import { useRouter } from 'expo-router'
import { useEffect, useMemo, useState } from 'react'
import { Pressable, RefreshControl, SectionList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { t } from '@/lib/i18n'
import { getLocalDate } from '@/lib/timezone'
import { buildAgenda, weekKeyOf, type AgendaEvent } from '~/lib/agenda'
import { SEASON } from '~/lib/data'
import { formatWeekLabel } from '~/lib/format'
import { tm } from '~/lib/strings'
import { AgendaCard } from '~/components/AgendaCard'
import { useData } from '~/state/data'
import { useSettings } from '~/state/settings'
import { useTheme } from '~/state/theme'

export default function ScheduleScreen() {
  const { seriesList, refresh, refreshing, refreshError, lastSync } = useData()
  const { followedSeriesIds, timezone, locale } = useSettings()
  const { c } = useTheme()
  const router = useRouter()

  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 60_000)
    return () => clearInterval(id)
  }, [])

  const [showEarlier, setShowEarlier] = useState(false)

  const agenda = useMemo(
    () => buildAgenda(seriesList, followedSeriesIds, timezone, now),
    [seriesList, followedSeriesIds, timezone, now],
  )

  const thisWeekKey = useMemo(
    () => weekKeyOf(getLocalDate(new Date(now).toISOString(), timezone)),
    [now, timezone],
  )

  const sections = useMemo(() => {
    const groups = showEarlier ? [...agenda.past, ...agenda.current] : agenda.current
    return groups.map((g) => ({ title: g.weekKey, data: g.events }))
  }, [agenda, showEarlier])

  const empty = followedSeriesIds.length === 0

  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-rg-bg">
      <View className="flex-row items-baseline gap-2 px-4 pb-2 pt-3">
        <Text className="text-xl font-extrabold tracking-widest text-rg-text">
          {t('app.title', locale)}
        </Text>
        <Text className="text-sm font-semibold text-rg-text3">{SEASON}</Text>
        <View className="flex-1" />
        {refreshError && (
          <Text className="text-[10px] text-rg-text3">{tm('agenda.updateFailed', locale)}</Text>
        )}
      </View>

      {empty ? (
        <View className="flex-1 items-center justify-center px-8">
          <Text className="text-4xl">🏎</Text>
          <Text className="mt-4 text-lg text-rg-text2">{tm('agenda.empty', locale)}</Text>
          <Pressable onPress={() => router.push('/series')} accessibilityRole="button">
            <Text className="mt-1.5 text-center text-sm text-rg-link">
              {tm('agenda.emptyHint', locale)}
            </Text>
          </Pressable>
        </View>
      ) : (
        <SectionList
          sections={sections}
          keyExtractor={(item: AgendaEvent) => item.key}
          stickySectionHeadersEnabled={false}
          contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                refresh().catch(() => {})
              }}
              tintColor={c('text3')}
            />
          }
          ListHeaderComponent={
            agenda.past.length > 0 ? (
              <Pressable
                onPress={() => setShowEarlier((v) => !v)}
                accessibilityRole="button"
                className="mb-3 items-center rounded-xl border border-rg-border bg-rg-btn-bg px-3 py-2"
              >
                <Text className="text-xs font-semibold text-rg-text2">
                  {showEarlier ? tm('agenda.hideEarlier', locale) : tm('agenda.showEarlier', locale)}{' '}
                  ({agenda.past.reduce((n, g) => n + g.events.length, 0)})
                </Text>
              </Pressable>
            ) : null
          }
          renderSectionHeader={({ section }) => (
            <View className="mb-2 mt-3 flex-row items-center gap-2">
              <Text className="text-xs font-bold uppercase tracking-widest text-rg-text3">
                {formatWeekLabel(section.title, locale)}
              </Text>
              {section.title === thisWeekKey && (
                <View className="rounded-md bg-rg-elevated px-2 py-0.5">
                  <Text className="text-[10px] font-bold uppercase text-rg-text2">
                    {tm('agenda.thisWeek', locale)}
                  </Text>
                </View>
              )}
            </View>
          )}
          renderItem={({ item }) => (
            <AgendaCard item={item} timezone={timezone} locale={locale} now={now} />
          )}
          ListEmptyComponent={
            <View className="items-center px-8 pt-20">
              <Text className="text-4xl">🏎</Text>
              <Text className="mt-4 text-base text-rg-text2">{t('week.noRaces', locale)}</Text>
            </View>
          }
          ListFooterComponent={
            lastSync ? (
              <Text className="mt-4 text-center text-[10px] text-rg-text3">
                {tm('settings.lastSync', locale)}:{' '}
                {new Date(lastSync).toLocaleString(locale === 'uk' ? 'uk-UA' : 'en-US')}
              </Text>
            ) : null
          }
        />
      )}
    </SafeAreaView>
  )
}
