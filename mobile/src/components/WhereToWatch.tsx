// Port of the web WhereToWatchPopover: detects the user's country from their
// timezone and lists that country's broadcasters for the series.

import { ChevronDown, ChevronUp, Tv } from 'lucide-react-native'
import { useState } from 'react'
import { Linking, Pressable, Text, View } from 'react-native'

import { COUNTRY_LABELS, detectCountry, getBroadcasts } from '@/data/broadcasts'
import { t, type Locale } from '@/lib/i18n'
import { useTheme } from '~/state/theme'

interface WhereToWatchProps {
  seriesId: string
  seriesColor: string
  timezone: string
  locale: Locale
}

export function WhereToWatch({ seriesId, seriesColor, timezone, locale }: WhereToWatchProps) {
  const { c } = useTheme()
  const [expanded, setExpanded] = useState(false)
  const country = detectCountry(timezone)
  const broadcasts = country ? getBroadcasts(seriesId, country) : []

  return (
    <View
      className="mt-3 rounded-xl border border-rg-card-border bg-rg-surface px-4 py-3.5"
      style={{ borderLeftWidth: 3, borderLeftColor: seriesColor }}
    >
      <Pressable
        className="flex-row items-center gap-2"
        onPress={() => setExpanded((e) => !e)}
        accessibilityRole="button"
      >
        <Tv size={14} color={c('text3')} />
        <Text className="flex-1 text-xs font-semibold uppercase tracking-widest text-rg-text3">
          {t('watch.title', locale)}
          {country ? `  ·  ${COUNTRY_LABELS[country]}` : ''}
        </Text>
        {expanded ? (
          <ChevronUp size={14} color={c('text3')} />
        ) : (
          <ChevronDown size={14} color={c('text3')} />
        )}
      </Pressable>

      {expanded && (
        <View className="mt-3 gap-2">
          {broadcasts.length === 0 ? (
            <Text className="text-xs text-rg-text3">{t('watch.fallback', locale)}</Text>
          ) : (
            broadcasts.map((b) => (
              <Pressable
                key={b.name}
                disabled={!b.url}
                onPress={() => {
                  if (b.url) Linking.openURL(b.url).catch(() => {})
                }}
                accessibilityRole={b.url ? 'link' : 'text'}
              >
                <Text
                  className="text-[13px] font-semibold"
                  style={{ color: b.url ? c('link') : c('text') }}
                >
                  {b.name}
                </Text>
                {b.note ? <Text className="text-xs text-rg-text3">{b.note}</Text> : null}
              </Pressable>
            ))
          )}
        </View>
      )}
    </View>
  )
}
