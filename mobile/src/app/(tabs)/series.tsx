// Series tab — port of the web /series page: search, grouped list with real
// logos and season progress, follow toggles, rows open the series detail.

import { useRouter } from 'expo-router'
import { Search } from 'lucide-react-native'
import { useMemo, useState } from 'react'
import { Pressable, SectionList, Switch, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { SERIES_GROUPS } from '@/data/series-registry'
import { t } from '@/lib/i18n'
import type { SeriesConfig } from '@/lib/types'
import { sessionEndMs } from '~/lib/data'
import { SeriesLogo } from '~/components/SeriesLogo'
import { useData } from '~/state/data'
import { useSettings } from '~/state/settings'
import { useTheme } from '~/state/theme'

function seasonProgress(series: SeriesConfig, now: number): { done: number; total: number } {
  let done = 0
  for (const event of series.events) {
    if (event.sessions.length > 0 && event.sessions.every((s) => now >= sessionEndMs(s))) done++
  }
  return { done, total: series.events.length }
}

export default function SeriesScreen() {
  const { seriesList } = useData()
  const { followedSeriesIds, setFollowedSeriesIds, toggleFollowedSeries, locale } = useSettings()
  const { c } = useTheme()
  const router = useRouter()
  const [query, setQuery] = useState('')
  const now = Date.now()

  const followed = useMemo(() => new Set(followedSeriesIds), [followedSeriesIds])

  const sections = useMemo(() => {
    const q = query.trim().toLowerCase()
    const byId = new Map(seriesList.map((s) => [s.id, s]))
    const matches = (s: SeriesConfig) =>
      !q || s.name.toLowerCase().includes(q) || s.shortName.toLowerCase().includes(q)
    const grouped = SERIES_GROUPS.map((group) => ({
      title: t(group.labelKey, locale),
      data: group.ids
        .map((id) => byId.get(id))
        .filter((s): s is SeriesConfig => Boolean(s && matches(s))),
    })).filter((section) => section.data.length > 0)
    const groupedIds = new Set(SERIES_GROUPS.flatMap((g) => g.ids))
    const ungrouped = seriesList.filter((s) => !groupedIds.has(s.id) && matches(s))
    if (ungrouped.length > 0) grouped.push({ title: '—', data: ungrouped })
    return grouped
  }, [seriesList, locale, query])

  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-rg-bg">
      <View className="flex-row items-center gap-2 px-4 pb-2 pt-3">
        <Text className="flex-1 text-xl font-extrabold tracking-widest text-rg-text">
          {t('nav.series', locale)}
        </Text>
        <Text className="text-xs text-rg-text3">
          {followedSeriesIds.length}/{seriesList.length}
        </Text>
      </View>

      <View className="mx-4 mb-2 flex-row items-center gap-2 rounded-xl border border-rg-border bg-rg-surface px-3">
        <Search size={14} color={c('text3')} />
        <TextInput
          className="flex-1 py-2 text-sm text-rg-text"
          placeholder={t('search.series', locale)}
          placeholderTextColor={c('text3')}
          value={query}
          onChangeText={setQuery}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <View className="flex-row gap-2 px-4 pb-2">
        <Pressable
          onPress={() => setFollowedSeriesIds(seriesList.map((s) => s.id))}
          accessibilityRole="button"
          className="rounded-lg border border-rg-border bg-rg-btn-bg px-3 py-1.5"
        >
          <Text className="text-xs font-semibold text-rg-text2">{t('filter.selectAll', locale)}</Text>
        </Pressable>
        <Pressable
          onPress={() => setFollowedSeriesIds([])}
          accessibilityRole="button"
          className="rounded-lg border border-rg-border bg-rg-btn-bg px-3 py-1.5"
        >
          <Text className="text-xs font-semibold text-rg-text2">
            {t('filter.deselectAll', locale)}
          </Text>
        </Pressable>
      </View>

      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
        ListEmptyComponent={
          <Text className="pt-16 text-center text-sm text-rg-text3">
            {t('search.noResults', locale)}
          </Text>
        }
        renderSectionHeader={({ section }) => (
          <Text className="mb-2 mt-4 text-xs font-bold uppercase tracking-widest text-rg-text3">
            {section.title}
          </Text>
        )}
        renderItem={({ item }) => {
          const active = followed.has(item.id)
          const progress = seasonProgress(item, now)
          return (
            <Pressable
              onPress={() => router.push(`/series/${item.id}`)}
              accessibilityRole="button"
              className="mb-1.5 flex-row items-center gap-3 rounded-xl border border-rg-card-border bg-rg-surface px-3 py-2.5"
              style={{
                opacity: active ? 1 : 0.55,
                borderLeftWidth: 4,
                borderLeftColor: item.color,
              }}
            >
              <View className="w-14 items-center">
                <SeriesLogo seriesId={item.id} height={22} />
              </View>
              <View className="flex-1">
                <Text className="text-sm font-semibold text-rg-text" numberOfLines={1}>
                  {item.name}
                </Text>
                <View className="mt-1 flex-row items-center gap-2">
                  <View className="h-1 flex-1 overflow-hidden rounded-full bg-rg-elevated">
                    <View
                      className="h-1 rounded-full"
                      style={{
                        width: `${progress.total ? Math.round((progress.done / progress.total) * 100) : 0}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </View>
                  <Text className="text-[10px] text-rg-text3">
                    {progress.done}/{progress.total}
                  </Text>
                </View>
              </View>
              <Switch
                value={active}
                onValueChange={() => toggleFollowedSeries(item.id)}
                trackColor={{ true: item.color, false: c('border') }}
                thumbColor="#fff"
              />
            </Pressable>
          )
        }}
      />
    </SafeAreaView>
  )
}
