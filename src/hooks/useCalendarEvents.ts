'use client'

import { useMemo } from 'react'
import { SeriesConfig } from '@/lib/types'
import { getLocalDate } from '@/lib/timezone'
import { ALL_SERIES } from '@/data/series-registry'

export interface DaySeriesInfo {
  series: SeriesConfig
  eventNames: string[]
}

export function buildEventMap(
  selectedSeriesIds: string[],
  timezone: string,
  dateFilter: (date: string) => boolean,
  seriesList: SeriesConfig[] = ALL_SERIES
): Map<string, DaySeriesInfo[]> {
  const map = new Map<string, DaySeriesInfo[]>()
  const selectedSeries = seriesList.filter(s => selectedSeriesIds.includes(s.id))

  for (const series of selectedSeries) {
    for (const event of series.events) {
      const seriesDateEvents = new Map<string, string>()

      for (const session of event.sessions) {
        const localDate = getLocalDate(session.startUtc, timezone)
        if (dateFilter(localDate)) {
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
}

/**
 * Unified hook — only computes events for the active view mode.
 */
export function useViewEvents(
  selectedSeriesIds: string[],
  timezone: string,
  viewMode: 'month' | 'week',
  month: string,
  weekStart: string,
  seriesList: SeriesConfig[] = ALL_SERIES
): Map<string, DaySeriesInfo[]> {
  return useMemo(() => {
    if (viewMode === 'week') {
      const start = new Date(weekStart + 'T00:00:00')
      const dates = new Set<string>()
      for (let i = 0; i < 7; i++) {
        const d = new Date(start)
        d.setDate(d.getDate() + i)
        dates.add(d.toISOString().slice(0, 10))
      }
      return buildEventMap(selectedSeriesIds, timezone, (date) => dates.has(date), seriesList)
    }

    const [yearStr, monthStr] = month.split('-')
    const year = parseInt(yearStr)
    const monthNum = parseInt(monthStr)
    return buildEventMap(selectedSeriesIds, timezone, (date) => {
      const [y, m] = date.split('-').map(Number)
      return y === year && m === monthNum
    }, seriesList)
  }, [selectedSeriesIds, timezone, viewMode, month, weekStart, seriesList])
}
