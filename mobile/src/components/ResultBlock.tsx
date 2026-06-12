// Port of the web RaceResult component: collapsed "Results" disclosure that
// expands to podiums (per class for endurance) and the fastest lap.

import { useState } from 'react'
import { Pressable, Text, View } from 'react-native'

import { t, type Locale } from '@/lib/i18n'
import type { SessionResultPair } from '~/lib/data'

const MEDAL = ['🥇', '🥈', '🥉']

function PodiumRow({
  position,
  drivers,
  team,
}: {
  position: number
  drivers: string[]
  team: string
}) {
  return (
    <View className="flex-row flex-wrap items-baseline gap-1.5">
      <Text className="w-5 text-center text-[13px]">{MEDAL[position - 1] ?? `${position}.`}</Text>
      <Text className="text-[13px] font-semibold text-rg-text">{drivers.join(', ')}</Text>
      <Text className="text-xs text-rg-text3">— {team}</Text>
    </View>
  )
}

export function ResultBlock({ results, locale }: { results: SessionResultPair[]; locale: Locale }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <View className="mt-3 rounded-xl border border-rg-card-border bg-rg-surface px-4 py-3.5">
      <Pressable
        className="flex-row items-center gap-2"
        onPress={() => setExpanded((e) => !e)}
        accessibilityRole="button"
      >
        <Text className="text-xs">🏁</Text>
        <Text className="flex-1 text-xs font-semibold uppercase tracking-widest text-rg-text3">
          {t('result.title', locale)}
        </Text>
        <Text className="text-xs text-rg-text3">{expanded ? '▲' : '▼'}</Text>
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
                          />
                        ))}
                      </View>
                    </View>
                  ))}
                </View>
              ) : (
                <View className="flex-row flex-wrap items-baseline gap-1.5">
                  <Text className="w-5 text-center text-[13px]">🏆</Text>
                  <Text className="text-[13px] font-semibold text-rg-text">
                    {result.overall.drivers.join(', ')}
                  </Text>
                  <Text className="text-xs text-rg-text3">— {result.overall.team}</Text>
                </View>
              )}

              {result.fastestLap && (
                <Text className="mt-1.5 text-xs text-rg-text3">
                  ⏱ {t('result.fastestLap', locale)}: {result.fastestLap}
                </Text>
              )}
            </View>
          ))}
        </View>
      )}
    </View>
  )
}
