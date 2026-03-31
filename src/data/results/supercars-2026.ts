import type { EventResults } from './types'

// Supercars 2026 results — verified from supercars.com, v8sleuth.com.au
// Note: Supercars have multiple races per event. We store the main/last race result.
export const supercarsResults2026: Record<string, EventResults> = {
  'sc-2026-sydney': {
    race: {
      // Race 1: Feeney, Race 2: De Pasquale, Race 3: Feeney
      overall: { driverIds: ['feeney'], teamId: 'triple-eight' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['feeney'], teamId: 'triple-eight' },
          { position: 2, driverIds: ['de-pasquale'], teamId: 'dick-johnson-racing' },
          { position: 3, driverIds: ['kostecki'], teamId: 'dick-johnson-racing' },
        ],
      }],
    },
  },
  'sc-2026-melbourne': {
    race: {
      // Final race winner: Kostecki
      overall: { driverIds: ['kostecki'], teamId: 'dick-johnson-racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['kostecki'], teamId: 'dick-johnson-racing' },
          { position: 2, driverIds: ['brown'], teamId: 'triple-eight' },
          { position: 3, driverIds: ['randle'], teamId: 'tickford-racing' },
        ],
      }],
    },
  },
}
