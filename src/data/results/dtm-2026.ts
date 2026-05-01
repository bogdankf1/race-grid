import type { EventResults } from './types'

export const dtmResults2026: Record<string, EventResults> = {
  'dtm-2026-red-bull-ring': {
    qualifying: {
      overall: { driverIds: ['engel'], teamId: 'winward-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['engel'], teamId: 'winward-racing' },
          { position: 2, driverIds: ['dorr'], teamId: 'dorr-motorsport' },
          { position: 3, driverIds: ['preining'], teamId: 'manthey' },
        ],
      }],
    },
    // Race 1: Preining (Manthey Porsche), Race 2: Engel (Winward Mercedes-AMG)
    race: {
      overall: { driverIds: ['preining'], teamId: 'manthey' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['preining'], teamId: 'manthey' },
          { position: 2, driverIds: ['engel'], teamId: 'winward-racing' },
        ],
      }],
    },
  },
}
