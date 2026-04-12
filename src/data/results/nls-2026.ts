import type { EventResults } from './types'

// NLS 2026 results — verified from motorsport.com, gpfans.com
// NLS1 was cancelled due to weather conditions
// NLS2: Verstappen/Gounon/Juncadella won on track but were DSQ'd post-race for tyre rule breach
export const nlsResults2026: Record<string, EventResults> = {
  'nls-2026-2': {
    qualifying: {
      overall: { driverIds: ['verstappen'], teamId: 'mercedes-amg-team-verstappen' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'mercedes-amg-team-verstappen' },
          { position: 2, driverIds: ['haase'], teamId: 'audi-sport' },
          { position: 3, driverIds: ['marciello'], teamId: 'rowe-racing' },
        ],
      }],
    },
    endurance: {
      overall: { driverIds: ['verstappen', 'gounon', 'juncadella'], teamId: 'mercedes-amg-team-verstappen' },
    },
  },
  'nls-2026-3': {
    qualifying: {
      overall: { driverIds: ['pittard'], teamId: 'kcmg' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['pittard'], teamId: 'kcmg' }] }],
    },
    endurance: {
      overall: { driverIds: ['frijns', 'eng', 'wittmann'], teamId: 'schubert-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['frijns', 'eng', 'wittmann'], teamId: 'schubert-motorsport' },
          { position: 2, driverIds: ['guven', 'campbell'], teamId: 'manthey' },
          { position: 3, driverIds: ['p-kolb', 'olsen', 'vervisch'], teamId: 'haupt-racing' },
        ],
      }],
    },
  },
}
