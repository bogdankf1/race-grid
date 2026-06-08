import type { EventResults } from './types'

// Porsche Mobil 1 Supercup 2026 results
// Source: racing.porsche.com/mobil-1-supercup/results-season-2026, newsroom.porsche.com, Wikipedia
export const porscheSupercupResults2026: Record<string, EventResults> = {
  'porsche-supercup-2026-monaco': {
    qualifying: {
      overall: { driverIds: ['oeverhaus'], teamId: 'martinet-by-almeras' },
    },
    race: {
      overall: { driverIds: ['oeverhaus'], teamId: 'martinet-by-almeras' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['oeverhaus'], teamId: 'martinet-by-almeras' },
          { position: 2, driverIds: ['bristot'], teamId: 'dinamic-motorsport' },
          { position: 3, driverIds: ['burton'], teamId: 'gp-elite' },
        ],
      }],
    },
  },
}
