'use client'

import { useMemo } from 'react'
import { SeriesConfig } from '@/lib/types'
import { getLocalDate } from '@/lib/timezone'
import { ALL_SERIES } from '@/data/series-registry'

export interface DaySeriesInfo {
  series: SeriesConfig
  eventNames: string[]
}

export function useCalendarEvents(
  selectedSeriesIds: string[],
  timezone: string,
  month: string // "YYYY-MM"
): Map<string, DaySeriesInfo[]> {
  return useMemo(() => {
    const map = new Map<string, DaySeriesInfo[]>()
    const [yearStr, monthStr] = month.split('-')
    const year = parseInt(yearStr)
    const monthNum = parseInt(monthStr)

    const selectedSeries = ALL_SERIES.filter(s => selectedSeriesIds.includes(s.id))

    for (const series of selectedSeries) {
      for (const event of series.events) {
        const seriesDateEvents = new Map<string, string>()

        for (const session of event.sessions) {
          const localDate = getLocalDate(session.startUtc, timezone)
          const [y, m] = localDate.split('-').map(Number)
          if (y === year && m === monthNum) {
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
  }, [selectedSeriesIds, timezone, month])
}
