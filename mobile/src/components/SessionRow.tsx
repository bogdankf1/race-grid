// One session inside the race detail screen. Mirrors the web DayDetail row:
// icon, label, local-tz time | duration | LIVE / Finished / countdown.

import { Text, View } from 'react-native'

import { t, type Locale } from '@/lib/i18n'
import { formatDuration, formatInTimezone } from '@/lib/timezone'
import type { Session } from '@/lib/types'
import { isTba, sessionEndMs } from '~/lib/data'
import { formatCountdown } from '~/lib/format'
import { LiveBadge } from '~/components/AgendaCard'
import { SessionIcon } from '~/components/SessionIcon'
import { useTheme } from '~/state/theme'

interface SessionRowProps {
  session: Session
  timezone: string
  locale: Locale
  now: number
}

export function SessionRow({ session, timezone, locale, now }: SessionRowProps) {
  const { c } = useTheme()
  const startMs = new Date(session.startUtc).getTime()
  const endMs = sessionEndMs(session)
  const live = now >= startMs && now < endMs
  const finished = now >= endMs
  const tba = isTba(session)

  return (
    <View
      className="flex-row items-center gap-3 rounded-xl bg-rg-elevated px-3.5 py-2.5"
      style={{
        opacity: finished ? 0.5 : 1,
        borderLeftWidth: live ? 3 : 0,
        borderLeftColor: '#dc2626',
      }}
    >
      <View className="w-6 items-center">
        <SessionIcon type={session.type} size={15} color={c('text2')} />
      </View>
      <Text className="flex-1 text-sm font-semibold text-rg-text" numberOfLines={1}>
        {session.label}
      </Text>
      {tba ? (
        <Text className="text-[13px] font-semibold italic text-rg-text3">TBA</Text>
      ) : (
        <View className="flex-row items-center gap-2">
          <Text className="text-sm font-semibold text-rg-text">
            {formatInTimezone(session.startUtc, timezone, 'time', locale)}
          </Text>
          {session.durationMinutes ? (
            <Text className="text-xs text-rg-text3">{formatDuration(session.durationMinutes)}</Text>
          ) : null}
          {live ? (
            <LiveBadge locale={locale} />
          ) : finished ? (
            <Text className="text-xs font-semibold text-rg-text3">
              {t('session.finished', locale)}
            </Text>
          ) : (
            <Text className="text-xs font-semibold text-rg-link">
              {formatCountdown(session.startUtc, now, locale)}
            </Text>
          )}
        </View>
      )}
    </View>
  )
}
