import { EventResults } from './types'

// Supercars 2026 results — verified from supercars.com, v8sleuth.com.au
// Note: Supercars have multiple races per event. We store the main/last race result.
export const supercarsResults2026: Record<string, EventResults> = {
  'sc-2026-sydney': {
    race: {
      // Race 1: Feeney, Race 2: De Pasquale, Race 3: Feeney
      overall: { drivers: ['Feeney'], team: 'Triple Eight Race Engineering' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, drivers: ['Feeney'], team: 'Triple Eight Race Engineering' },
          { position: 2, drivers: ['De Pasquale'], team: 'Dick Johnson Racing' },
          { position: 3, drivers: ['Kostecki'], team: 'Dick Johnson Racing' },
        ],
      }],
    },
  },
  'sc-2026-melbourne': {
    race: {
      // Final race winner: Kostecki
      overall: { drivers: ['Kostecki'], team: 'Dick Johnson Racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, drivers: ['Kostecki'], team: 'Dick Johnson Racing' },
          { position: 2, drivers: ['Brown'], team: 'Triple Eight Race Engineering' },
          { position: 3, drivers: ['Randle'], team: 'Tickford Racing' },
        ],
      }],
    },
  },
}
