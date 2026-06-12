// Driver/team career summaries scan every season, so all historical years
// must be loaded into the registry cache before computing them.

import { useEffect, useState } from 'react'

import { AVAILABLE_YEARS, isYearLoaded, loadYear } from '@/data/series-registry'

export function useAllYearsLoaded(): boolean {
  const [loaded, setLoaded] = useState(() => AVAILABLE_YEARS.every(isYearLoaded))

  useEffect(() => {
    if (loaded) return
    let cancelled = false
    Promise.all(AVAILABLE_YEARS.map((y) => loadYear(y))).then(() => {
      if (!cancelled) setLoaded(true)
    })
    return () => {
      cancelled = true
    }
  }, [loaded])

  return loaded
}
