import type { EventResults } from './types'

// Super Formula Motegi has two rounds (Rd 1 & Rd 2) — storing Rd 2 results (latest)
export const superformulaResults2026: Record<string, EventResults> = {
  'sf-2026-motegi': {
    qualifying: {
      overall: { driverIds: ['ohta'], teamId: 'docomo-dandelion' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['ohta'], teamId: 'docomo-dandelion' }] }],
    },
    race: {
      overall: { driverIds: ['ohta'], teamId: 'docomo-dandelion' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ohta'], teamId: 'docomo-dandelion' },
          { position: 2, driverIds: ['sakaguchi'], teamId: 'inging' },
          { position: 3, driverIds: ['fukuzumi'], teamId: 'rookie-racing' },
        ],
      }],
    },
  },
}
