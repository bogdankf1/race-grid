// Data provider: serves the season's series list. Opens instantly from the
// bundled snapshot, overlays the last MCP-refreshed calendar from AsyncStorage,
// and refreshes in the background when the cache is stale.

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'

import type { RaceEvent, SeriesConfig } from '@/lib/types'
import { isStale, readCache, writeCache } from '~/lib/cache'
import { buildEventIndex, buildSeriesList, entriesToEvents, SEASON, type EventRef } from '~/lib/data'
import { fetchYearCalendar } from '~/lib/mcp'

const CALENDAR_CACHE_KEY = `calendar:${SEASON}`
const CALENDAR_MAX_AGE_MS = 12 * 60 * 60 * 1000 // refresh twice a day at most

interface DataContextValue {
  seriesList: SeriesConfig[]
  eventIndex: Map<string, EventRef>
  lastSync: number | null
  refreshing: boolean
  refreshError: boolean
  refresh: () => Promise<void>
}

const DataContext = createContext<DataContextValue | null>(null)

export function DataProvider({ children }: { children: ReactNode }) {
  const [overlay, setOverlay] = useState<Record<string, RaceEvent[]> | null>(null)
  const [lastSync, setLastSync] = useState<number | null>(null)
  const [refreshing, setRefreshing] = useState(false)
  const [refreshError, setRefreshError] = useState(false)
  const refreshInFlight = useRef(false)

  const refresh = useCallback(async () => {
    if (refreshInFlight.current) return
    refreshInFlight.current = true
    setRefreshing(true)
    setRefreshError(false)
    try {
      const entries = await fetchYearCalendar(SEASON)
      // Guard against a broken/empty payload wiping out the schedule.
      if (entries.length > 0) {
        setOverlay(entriesToEvents(entries))
        setLastSync(Date.now())
        await writeCache(CALENDAR_CACHE_KEY, entries)
      }
    } catch {
      setRefreshError(true)
    } finally {
      refreshInFlight.current = false
      setRefreshing(false)
    }
  }, [])

  useEffect(() => {
    let cancelled = false
    readCache<Parameters<typeof entriesToEvents>[0]>(CALENDAR_CACHE_KEY).then((cached) => {
      if (cancelled) return
      if (cached && Array.isArray(cached.value) && cached.value.length > 0) {
        setOverlay(entriesToEvents(cached.value))
        setLastSync(cached.savedAt)
      }
      if (isStale(cached, CALENDAR_MAX_AGE_MS)) {
        refresh().catch(() => {})
      }
    })
    return () => {
      cancelled = true
    }
  }, [refresh])

  const value = useMemo<DataContextValue>(() => {
    const seriesList = buildSeriesList(overlay)
    return {
      seriesList,
      eventIndex: buildEventIndex(seriesList),
      lastSync,
      refreshing,
      refreshError,
      refresh,
    }
  }, [overlay, lastSync, refreshing, refreshError, refresh])

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export function useData(): DataContextValue {
  const ctx = useContext(DataContext)
  if (!ctx) throw new Error('useData must be used within DataProvider')
  return ctx
}
