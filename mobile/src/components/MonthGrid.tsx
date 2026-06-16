// Compact month-grid view for the Schedule tab — a mobile take on the web
// CalendarGrid: Mon-start 6×7 grid, series color dots per day, today border,
// tapping a day lists its events below the grid.

import { ChevronLeft, ChevronRight } from 'lucide-react-native'
import { useMemo } from 'react'
import { Pressable, Text, View } from 'react-native'

import { t, type Locale } from '@/lib/i18n'
import { monthCells, shiftMonth, type DayInfo } from '~/lib/month'
import { useTheme } from '~/state/theme'

export { buildMonthIndex } from '~/lib/month'

const WEEKDAY_KEYS = [
  'weekday.mon',
  'weekday.tue',
  'weekday.wed',
  'weekday.thu',
  'weekday.fri',
  'weekday.sat',
  'weekday.sun',
]

interface MonthGridProps {
  month: string
  onMonthChange: (month: string) => void
  index: Map<string, DayInfo>
  today: string
  selectedDate: string | null
  onSelectDate: (date: string | null) => void
  locale: Locale
}

export function MonthGrid({
  month,
  onMonthChange,
  index,
  today,
  selectedDate,
  onSelectDate,
  locale,
}: MonthGridProps) {
  const { c } = useTheme()
  const cells = useMemo(() => monthCells(month), [month])
  const monthLabel = useMemo(() => {
    const label = new Date(month + '-01T12:00:00Z').toLocaleDateString(
      locale === 'uk' ? 'uk-UA' : 'en-US',
      { month: 'long', year: 'numeric', timeZone: 'UTC' },
    )
    return label.charAt(0).toUpperCase() + label.slice(1)
  }, [month, locale])

  return (
    <View>
      <View className="mb-2 flex-row items-center gap-2">
        <Pressable
          onPress={() => onMonthChange(shiftMonth(month, -1))}
          accessibilityRole="button"
          className="rounded-lg border border-rg-border bg-rg-btn-bg p-1.5"
        >
          <ChevronLeft size={16} color={c('text2')} />
        </Pressable>
        <Text className="flex-1 text-center text-sm font-bold text-rg-text">{monthLabel}</Text>
        <Pressable
          onPress={() => onMonthChange(shiftMonth(month, 1))}
          accessibilityRole="button"
          className="rounded-lg border border-rg-border bg-rg-btn-bg p-1.5"
        >
          <ChevronRight size={16} color={c('text2')} />
        </Pressable>
        <Pressable
          onPress={() => {
            onMonthChange(today.slice(0, 7))
            onSelectDate(today)
          }}
          accessibilityRole="button"
          className="rounded-lg border border-rg-border bg-rg-btn-bg px-2.5 py-1.5"
        >
          <Text className="text-xs font-semibold text-rg-text2">{t('nav.today', locale)}</Text>
        </Pressable>
      </View>

      <View className="flex-row">
        {WEEKDAY_KEYS.map((key) => (
          <Text
            key={key}
            className="flex-1 pb-1 text-center text-[10px] font-bold uppercase text-rg-text3"
          >
            {t(key, locale)}
          </Text>
        ))}
      </View>

      <View className="flex-row flex-wrap">
        {cells.map(({ date, inMonth }) => {
          const info = index.get(date)
          const isToday = date === today
          const isSelected = date === selectedDate
          return (
            <Pressable
              key={date}
              onPress={() => onSelectDate(isSelected ? null : date)}
              accessibilityRole="button"
              style={{ width: `${100 / 7}%` }}
              className="p-0.5"
            >
              <View
                className="items-center rounded-lg py-1.5"
                style={{
                  opacity: inMonth ? (date < today ? 0.55 : 1) : 0.25,
                  backgroundColor: isSelected
                    ? c('elevated')
                    : info
                      ? c('surface')
                      : 'transparent',
                  borderWidth: isToday || isSelected ? 1.5 : 1,
                  borderColor: isToday
                    ? c('today-border')
                    : isSelected
                      ? c('link')
                      : info
                        ? c('card-border')
                        : 'transparent',
                }}
              >
                <Text
                  className={
                    isToday
                      ? 'text-[13px] font-bold text-rg-text'
                      : 'text-[13px] font-medium text-rg-text2'
                  }
                >
                  {parseInt(date.slice(8), 10)}
                </Text>
                <View className="mt-1 h-1.5 flex-row items-center gap-0.5">
                  {(info?.colors ?? []).slice(0, 4).map((color, i) => (
                    <View
                      key={`${color}-${i}`}
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: 3,
                        backgroundColor: color,
                      }}
                    />
                  ))}
                </View>
              </View>
            </Pressable>
          )
        })}
      </View>
    </View>
  )
}
