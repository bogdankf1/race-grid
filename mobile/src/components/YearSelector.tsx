// Year picker as a horizontal chip row (mobile-friendly take on the web's
// <select> YearSelector).

import { Pressable, ScrollView, Text } from 'react-native'

interface YearSelectorProps {
  year: number
  years: readonly number[]
  onChange: (year: number) => void
  isYearEnabled?: (year: number) => boolean
}

export function YearSelector({ year, years, onChange, isYearEnabled }: YearSelectorProps) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 6 }}>
      {[...years]
        .sort((a, b) => b - a)
        .map((y) => {
          const enabled = isYearEnabled ? isYearEnabled(y) : true
          const active = y === year
          return (
            <Pressable
              key={y}
              disabled={!enabled}
              onPress={() => onChange(y)}
              accessibilityRole="button"
              className={
                active
                  ? 'rounded-lg bg-rg-elevated border border-rg-border px-3 py-1.5'
                  : 'rounded-lg border border-rg-border px-3 py-1.5'
              }
              style={{ opacity: enabled ? 1 : 0.35 }}
            >
              <Text
                className={
                  active ? 'text-sm font-bold text-rg-text' : 'text-sm font-semibold text-rg-text3'
                }
              >
                {y}
              </Text>
            </Pressable>
          )
        })}
    </ScrollView>
  )
}
