'use client'

import { useState, useEffect, useCallback } from 'react'
import { loadYear, getSeriesForYear, isYearLoaded } from '@/data/series-registry'
import type { SeriesConfig } from '@/lib/types'

/**
 * Loads a year's event data on demand and returns the series for that year.
 * 2026 is always available instantly. Historical years load async then re-render.
 */
export function useYearData(year: number): SeriesConfig[] {
  const [, setTick] = useState(0)
  const forceUpdate = useCallback(() => setTick(t => t + 1), [])

  useEffect(() => {
    if (isYearLoaded(year)) return
    loadYear(year).then(forceUpdate)
  }, [year, forceUpdate])

  return getSeriesForYear(year)
}
