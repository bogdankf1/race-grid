'use client'

import { useLocalStorage } from './useLocalStorage'
import { getVisibleSeries } from '@/data/series-registry'

export function useSelectedSeries(): [string[], (val: string[]) => void] {
  return useLocalStorage<string[]>('race-grid:series', getVisibleSeries().map(s => s.id))
}
