import type { EventResults } from './types'

// MotoGP 2025 results — Rounds 1-4 completed
// Standings: Marquez leads
export const motogpResults2025: Record<string, EventResults> = {
  'motogp-2025-thailand': {
    race: {
      overall: { driverIds: ['marquez-m'], teamId: 'ducati-lenovo' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['marquez-m'], teamId: 'ducati-lenovo' },
        ],
      }],
    },
  },
  'motogp-2025-argentina': {
    race: {
      overall: { driverIds: ['marquez-m'], teamId: 'ducati-lenovo' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['marquez-m'], teamId: 'ducati-lenovo' },
        ],
      }],
    },
  },
  'motogp-2025-usa': {
    race: {
      overall: { driverIds: ['bagnaia'], teamId: 'ducati-lenovo' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['bagnaia'], teamId: 'ducati-lenovo' },
        ],
      }],
    },
  },
  'motogp-2025-qatar': {
    race: {
      overall: { driverIds: ['marquez-m'], teamId: 'ducati-lenovo' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['marquez-m'], teamId: 'ducati-lenovo' },
        ],
      }],
    },
  },
}
