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
  // NLS4 (24h Qualifier Race 1) cancelled after fatal multi-car crash — qualifying completed
  'nls-2026-24h-quali-1': {
    qualifying: {
      overall: { driverIds: ['jahn'], teamId: 'gamota' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['jahn'], teamId: 'gamota' },
        ],
      }],
    },
  },
  'nls-2026-24h-quali-2': {
    qualifying: {
      overall: { driverIds: ['vermeulen'], teamId: 'kondo-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vermeulen'], teamId: 'kondo-racing' },
        ],
      }],
    },
    endurance: {
      overall: { driverIds: ['haase', 'b-green', 'sims'], teamId: 'scherer-sport-phx' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['haase', 'b-green', 'sims'], teamId: 'scherer-sport-phx' },
          { position: 2, driverIds: ['engstler', 'bortolotti', 'niederhauser'], teamId: 'abt-sportsline' },
          { position: 3, driverIds: ['preining'], teamId: 'manthey' },
        ],
      }],
    },
  },
}
