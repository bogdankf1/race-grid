'use client'

import { useMemo } from 'react'
import { format, addDays } from 'date-fns'
import { buildEventMap, DaySeriesInfo } from './useCalendarEvents'

export function useWeekEvents(
  selectedSeriesIds: string[],
  timezone: string,
  weekStart: string
): Map<string, DaySeriesInfo[]> {
  return useMemo(() => {
    const start = new Date(weekStart + 'T00:00:00')
    const dates = new Set<string>()
    for (let i = 0; i < 7; i++) {
      dates.add(format(addDays(start, i), 'yyyy-MM-dd'))
    }

    return buildEventMap(selectedSeriesIds, timezone, (date) => dates.has(date))
  }, [selectedSeriesIds, timezone, weekStart])
}
