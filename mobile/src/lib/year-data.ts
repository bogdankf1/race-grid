// Port of the web useYearData hook: the current season is available
// instantly, historical years lazy-load then re-render.

import { useCallback, useEffect, useState } from 'react'

import { getSeriesForYear, isYearLoaded, loadYear } from '@/data/series-registry'
import type { SeriesConfig } from '@/lib/types'

export function useYearData(year: number): SeriesConfig[] {
  const [, setTick] = useState(0)
  const forceUpdate = useCallback(() => setTick((t) => t + 1), [])

  useEffect(() => {
    if (isYearLoaded(year)) return
    loadYear(year).then(forceUpdate)
  }, [year, forceUpdate])

  return getSeriesForYear(year)
}
