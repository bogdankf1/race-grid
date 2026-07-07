import type { SeriesConfig } from './types'

export function countryFlag(countryCode: string): string {
  if (!countryCode) return ''
  return countryCode.toUpperCase().split('').map(c => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65)).join('')
}

export function getTotalRounds(series: SeriesConfig): number {
  return Math.max(series.events.length, ...series.events.map(e => e.round ?? 0))
}
