// Pure month-grid helpers — no React/RN imports so the smoke test can run
// them under Node.

import { getLocalDate } from '@/lib/timezone'
import type { SeriesConfig, SessionType } from '@/lib/types'

export interface DayInfo {
  /** Series colors racing this day (deduped). */
  colors: string[]
  eventCount: number
}

/** localDate (yyyy-MM-dd) -> day info for followed series in the user's tz. */
export function buildMonthIndex(
  seriesList: SeriesConfig[],
  followedIds: string[],
  timezone: string,
  visibleTypes: SessionType[],
): Map<string, DayInfo> {
  const followed = new Set(followedIds)
  const map = new Map<string, { colors: Set<string>; events: Set<string> }>()
  for (const series of seriesList) {
    if (!followed.has(series.id)) continue
    for (const event of series.events) {
      for (const session of event.sessions) {
        if (!visibleTypes.includes(session.type)) continue
        const day = getLocalDate(session.startUtc, timezone)
        const entry = map.get(day) ?? { colors: new Set(), events: new Set() }
        entry.colors.add(series.color)
        entry.events.add(event.id)
        map.set(day, entry)
      }
    }
  }
  return new Map(
    [...map.entries()].map(([day, e]) => [
      day,
      { colors: [...e.colors], eventCount: e.events.size },
    ]),
  )
}

/** 42 cells (6 weeks, Monday start) for the given month. */
export function monthCells(month: string): Array<{ date: string; inMonth: boolean }> {
  const first = new Date(month + '-01T12:00:00Z')
  const start = new Date(first)
  start.setUTCDate(start.getUTCDate() - ((first.getUTCDay() + 6) % 7))
  return Array.from({ length: 42 }, (_, i) => {
    const d = new Date(start)
    d.setUTCDate(start.getUTCDate() + i)
    const date = d.toISOString().slice(0, 10)
    return { date, inMonth: date.slice(0, 7) === month }
  })
}

export function shiftMonth(month: string, delta: number): string {
  const d = new Date(month + '-01T12:00:00Z')
  d.setUTCMonth(d.getUTCMonth() + delta)
  return d.toISOString().slice(0, 7)
}
