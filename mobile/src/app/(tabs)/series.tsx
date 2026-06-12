// Series tab: toggle which series you follow, grouped exactly like the web
// filter dropdown (SERIES_GROUPS + group.* i18n labels).

import { useMemo } from 'react'
import { Pressable, SectionList, Switch, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { SERIES_GROUPS } from '@/data/series-registry'
import { t } from '@/lib/i18n'
import type { SeriesConfig } from '@/lib/types'
import { SeriesChip } from '~/components/SeriesChip'
import { useData } from '~/state/data'
import { useSettings } from '~/state/settings'
import { useTheme } from '~/state/theme'

export default function SeriesScreen() {
  const { seriesList } = useData()
  const { followedSeriesIds, setFollowedSeriesIds, toggleFollowedSeries, locale } = useSettings()
  const { c } = useTheme()

  const followed = useMemo(() => new Set(followedSeriesIds), [followedSeriesIds])

  const sections = useMemo(() => {
    const byId = new Map(seriesList.map((s) => [s.id, s]))
    const grouped = SERIES_GROUPS.map((group) => ({
      title: t(group.labelKey, locale),
      data: group.ids.map((id) => byId.get(id)).filter((s): s is SeriesConfig => Boolean(s)),
    })).filter((section) => section.data.length > 0)
    const groupedIds = new Set(SERIES_GROUPS.flatMap((g) => g.ids))
    const ungrouped = seriesList.filter((s) => !groupedIds.has(s.id))
    if (ungrouped.length > 0) grouped.push({ title: '—', data: ungrouped })
    return grouped
  }, [seriesList, locale])

  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-rg-bg">
      <View className="flex-row items-center gap-2 px-4 pb-2 pt-3">
        <Text className="flex-1 text-xl font-extrabold tracking-widest text-rg-text">
          {t('filter.title', locale)}
        </Text>
        <Text className="text-xs text-rg-text3">
          {followedSeriesIds.length}/{seriesList.length}
        </Text>
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
        renderSectionHeader={({ section }) => (
          <Text className="mb-2 mt-4 text-xs font-bold uppercase tracking-widest text-rg-text3">
            {section.title}
          </Text>
        )}
        renderItem={({ item }) => {
          const active = followed.has(item.id)
          return (
            <Pressable
              onPress={() => toggleFollowedSeries(item.id)}
              accessibilityRole="switch"
              accessibilityState={{ checked: active }}
              className="mb-1.5 flex-row items-center gap-3 rounded-xl border border-rg-card-border bg-rg-surface px-3 py-2.5"
              style={{ opacity: active ? 1 : 0.55 }}
            >
              <SeriesChip
                shortName={item.shortName}
                color={item.color}
                textColor={item.textColor}
                active={active}
              />
              <Text className="flex-1 text-sm text-rg-text" numberOfLines={1}>
                {item.name}
              </Text>
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
