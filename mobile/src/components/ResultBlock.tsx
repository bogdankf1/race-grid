// Port of the web RaceResult component: collapsed "Results" disclosure that
// expands to podiums (per class for endurance) and the fastest lap.

import { ChevronDown, ChevronUp, Flag, Timer } from 'lucide-react-native'
import { useState } from 'react'
import { Pressable, Text, View } from 'react-native'

import { t, type Locale } from '@/lib/i18n'
import type { SessionResultPair } from '~/lib/data'
import { MEDAL_COLORS } from '~/lib/format'
import { useTheme } from '~/state/theme'

function PodiumRow({
  position,
  drivers,
  team,
  textColor,
}: {
  position: number
  drivers: string[]
  team: string
  textColor: string
}) {
  const medal = position >= 1 && position <= 3 ? MEDAL_COLORS[position - 1] : null
  return (
    <View className="flex-row flex-wrap items-baseline gap-1.5">
      <Text
        className="w-6 text-center text-[13px] font-bold"
        style={{ color: medal ?? textColor }}
      >
        P{position}
      </Text>
      <Text className="text-[13px] font-semibold text-rg-text">{drivers.join(', ')}</Text>
      <Text className="text-xs text-rg-text3">— {team}</Text>
    </View>
  )
}

export function ResultBlock({ results, locale }: { results: SessionResultPair[]; locale: Locale }) {
  const { c } = useTheme()
  const [expanded, setExpanded] = useState(false)
  const Chevron = expanded ? ChevronUp : ChevronDown

  return (
    <View className="mt-3 rounded-xl border border-rg-card-border bg-rg-surface px-4 py-3.5">
      <Pressable
        className="flex-row items-center gap-2"
        onPress={() => setExpanded((e) => !e)}
        accessibilityRole="button"
      >
        <Flag size={13} color={c('text3')} />
        <Text className="flex-1 text-xs font-semibold uppercase tracking-widest text-rg-text3">
          {t('result.title', locale)}
        </Text>
        <Chevron size={14} color={c('text3')} />
      </Pressable>

      {expanded && (
        <View className="mt-3 gap-4">
          {results.map(({ session, result }) => (
            <View key={`${session.type}-${session.startUtc}`}>
              {results.length > 1 && (
                <Text className="mb-2 text-[11px] font-bold uppercase tracking-wider text-rg-text3">
                  {session.label}
                </Text>
              )}

              {result.classes && result.classes.length > 0 ? (
                <View className="gap-3">
                  {result.classes.map((cls) => (
                    <View key={cls.className}>
                      {result.classes!.length > 1 && (
                        <Text className="mb-1 text-[10px] font-bold uppercase tracking-wider text-rg-text3">
                          {cls.className}
                        </Text>
                      )}
                      <View className="gap-1">
                        {cls.podium.map((entry) => (
                          <PodiumRow
                            key={entry.position}
                            position={entry.position}
                            drivers={entry.drivers}
                            team={entry.team}
                            textColor={c('text3')}
                          />
                        ))}
                      </View>
                    </View>
                  ))}
                </View>
              ) : (
                <PodiumRow
                  position={1}
                  drivers={result.overall.drivers}
                  team={result.overall.team}
                  textColor={c('text3')}
                />
              )}

              {result.fastestLap && (
                <View className="mt-1.5 flex-row items-center gap-1.5">
                  <Timer size={12} color={c('text3')} />
                  <Text className="text-xs text-rg-text3">
                    {t('result.fastestLap', locale)}: {result.fastestLap}
                  </Text>
                </View>
              )}
            </View>
          ))}
        </View>
      )}
    </View>
  )
}
