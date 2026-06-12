// Find an event by id across seasons. The current season comes from the
// DataProvider index (with MCP overlay); historical events lazy-load their
// year first (event ids embed the year: `<series>-<year>-<slug>`).

import { useEffect, useState } from 'react'

import { getSeriesForYear, isYearLoaded, loadYear } from '@/data/series-registry'
import type { EventRef } from '~/lib/data'
import { useData } from '~/state/data'

function findInYear(eventId: string, year: number): EventRef | null {
  for (const series of getSeriesForYear(year)) {
    const event = series.events.find((e) => e.id === eventId)
    if (event) return { series, event }
  }
  return null
}

export function useEventRef(eventId: string | undefined): {
  ref: EventRef | null
  loading: boolean
} {
  const { eventIndex } = useData()
  const current = eventId ? (eventIndex.get(eventId) ?? null) : null

  const year = eventId ? Number(eventId.match(/-(\d{4})-/)?.[1]) : NaN
  const needsHistorical = !current && Number.isFinite(year)

  const [historical, setHistorical] = useState<EventRef | null>(null)
  const [loading, setLoading] = useState(needsHistorical && !isYearLoaded(year))

  useEffect(() => {
    if (!eventId || !needsHistorical) return
    let cancelled = false
    if (isYearLoaded(year)) {
      setHistorical(findInYear(eventId, year))
      setLoading(false)
      return
    }
    setLoading(true)
    loadYear(year).then(() => {
      if (cancelled) return
      setHistorical(findInYear(eventId, year))
      setLoading(false)
    })
    return () => {
      cancelled = true
    }
  }, [eventId, needsHistorical, year])

  return { ref: current ?? historical, loading: !current && loading }
}
