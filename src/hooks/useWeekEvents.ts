'use client'

import { useMemo } from 'react'
import { getLocalDate } from '@/lib/timezone'
import { ALL_SERIES } from '@/data/series-registry'
import { DaySeriesInfo } from './useCalendarEvents'
import { format, addDays } from 'date-fns'

/**
 * Returns calendar events for a 7-day window starting at weekStart (Monday).
 */
export function useWeekEvents(
  selectedSeriesIds: string[],
  timezone: string,
  weekStart: string // "YYYY-MM-DD" (Monday)
): Map<string, DaySeriesInfo[]> {
  return useMemo(() => {
    const map = new Map<string, DaySeriesInfo[]>()
    const start = new Date(weekStart + 'T00:00:00')
    const dates = new Set<string>()
    for (let i = 0; i < 7; i++) {
      dates.add(format(addDays(start, i), 'yyyy-MM-dd'))
    }

    const selectedSeries = ALL_SERIES.filter(s => selectedSeriesIds.includes(s.id))

    for (const series of selectedSeries) {
      for (const event of series.events) {
        const seriesDateEvents = new Map<string, string>()

        for (const session of event.sessions) {
          const localDate = getLocalDate(session.startUtc, timezone)
          if (dates.has(localDate)) {
            if (!seriesDateEvents.has(localDate)) {
              seriesDateEvents.set(localDate, event.name)
            }
          }
        }

        for (const [date, eventName] of seriesDateEvents) {
          const existing = map.get(date) || []
          const seriesEntry = existing.find(e => e.series.id === series.id)
          if (seriesEntry) {
            if (!seriesEntry.eventNames.includes(eventName)) {
              seriesEntry.eventNames.push(eventName)
            }
          } else {
            existing.push({ series, eventNames: [eventName] })
            map.set(date, existing)
          }
        }
      }
    }

    return map
  }, [selectedSeriesIds, timezone, weekStart])
}
