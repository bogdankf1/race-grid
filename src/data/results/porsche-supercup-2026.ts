import type { EventResults } from './types'

// Porsche Mobil 1 Supercup 2026 results
// Source: racing.porsche.com/mobil-1-supercup/results-season-2026, Wikipedia
// As of 2026-06-07: Monaco qualifying complete (pole: Theo Oeverhaus). Race results
// for Monaco not yet final at time of authoring; will be added in next results update.
export const porscheSupercupResults2026: Record<string, EventResults> = {
  'porsche-supercup-2026-monaco': {
    qualifying: {
      overall: { driverIds: ['oeverhaus'], teamId: 'martinet-by-almeras' },
    },
  },
}
