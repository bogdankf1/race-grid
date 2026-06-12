// One race weekend in the schedule list. Visual conventions follow the web
// DayDetail event card: 4px series-color left border, surface card, dimmed
// when finished, red LIVE badge.

import { useRouter } from 'expo-router'
import { Pressable, Text, View } from 'react-native'

import { t, type Locale } from '@/lib/i18n'
import { formatInTimezone } from '@/lib/timezone'
import type { AgendaEvent } from '~/lib/agenda'
import { isTba } from '~/lib/data'
import { countryFlag, formatCountdown, formatDateRange, SESSION_ICONS } from '~/lib/format'
import { SeriesChip } from '~/components/SeriesChip'

export function LiveBadge({ locale }: { locale: Locale }) {
  return (
    <View className="rounded bg-[#dc2626] px-1.5 py-0.5">
      <Text className="text-[10px] font-bold text-white">{t('session.live', locale)}</Text>
    </View>
  )
}

interface AgendaCardProps {
  item: AgendaEvent
  timezone: string
  locale: Locale
  now: number
}

export function AgendaCard({ item, timezone, locale, now }: AgendaCardProps) {
  const router = useRouter()
  const finished = item.status === 'finished'
  const main = item.mainSession

  return (
    <Pressable
      onPress={() => router.push(`/race/${item.event.id}`)}
      accessibilityRole="button"
      className="mb-2.5 rounded-2xl border border-rg-card-border bg-rg-surface p-3"
      style={{ borderLeftWidth: 4, borderLeftColor: item.seriesColor, opacity: finished ? 0.6 : 1 }}
    >
      <View className="flex-row items-center gap-2.5">
        <SeriesChip
          shortName={item.seriesShortName}
          color={item.seriesColor}
          textColor={item.seriesTextColor}
        />
        {item.event.round != null && (
          <Text className="text-[11px] font-semibold text-rg-text3">
            {t('progress.round', locale)} {item.event.round}
          </Text>
        )}
        <View className="flex-1" />
        {item.status === 'live' ? (
          <LiveBadge locale={locale} />
        ) : finished ? (
          <Text className="text-xs font-semibold text-rg-text3">
            {t('session.finished', locale)}
          </Text>
        ) : main && !isTba(main) ? (
          <Text className="text-xs font-semibold text-rg-link">
            {formatCountdown(main.startUtc, now, locale)}
          </Text>
        ) : null}
      </View>

      <Text className="mt-2 text-[15px] font-semibold text-rg-text" numberOfLines={1}>
        {item.event.name}
      </Text>
      <Text className="mt-0.5 text-xs text-rg-text3" numberOfLines={1}>
        {countryFlag(item.countryCode)} {item.circuitName}
        {'  ·  '}
        {formatDateRange(item.startDate, item.endDate, locale)}
      </Text>

      {main && (
        <Text className="mt-1.5 text-xs text-rg-text2" numberOfLines={1}>
          {SESSION_ICONS[main.type]} {main.label}
          {' — '}
          {isTba(main) ? 'TBA' : formatInTimezone(main.startUtc, timezone, 'datetime', locale)}
        </Text>
      )}
    </Pressable>
  )
}
