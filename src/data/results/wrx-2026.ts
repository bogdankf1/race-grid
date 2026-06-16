import type { EventResults } from './types'

// FIA European Rallycross Championship 2026 — Euro RX results
// Source: fiaworldrallycross.com, fia.com — verified May 2026
export const wrxResults2026: Record<string, EventResults> = {
  // Round 1 — Euro RX of Latvia (Biķernieki)
  'wrx-2026-latvia': {
    qualifying: {
      // Top Qualifier classification after the qualifying heats
      overall: { driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
      classes: [{
        className: 'RX1',
        podium: [
          { position: 1, driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
          { position: 2, driverIds: ['j-rytkonen'], teamId: 'set-promotion' },
          { position: 3, driverIds: ['bakkerud'], teamId: 'set-promotion' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
      classes: [{
        className: 'RX1',
        podium: [
          { position: 1, driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
          { position: 2, driverIds: ['veiby'], teamId: 'kristoffersson-motorsport' },
          { position: 3, driverIds: ['turpeinen'], teamId: 'set-promotion' },
        ],
      }],
    },
  },
  // Round 2 — Kárai Trans Euro RX of Hungary (Nyirád)
  'wrx-2026-hungary': {
    qualifying: {
      // Top Qualifier classification after the qualifying heats
      overall: { driverIds: ['bakkerud'], teamId: 'set-promotion' },
      classes: [{
        className: 'RX1',
        podium: [
          { position: 1, driverIds: ['bakkerud'], teamId: 'set-promotion' },
          { position: 2, driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
          { position: 3, driverIds: ['turpeinen'], teamId: 'set-promotion' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['bakkerud'], teamId: 'set-promotion' },
      classes: [{
        className: 'RX1',
        podium: [
          { position: 1, driverIds: ['bakkerud'], teamId: 'set-promotion' },
          { position: 2, driverIds: ['j-rytkonen'], teamId: 'set-promotion' },
          { position: 3, driverIds: ['turpeinen'], teamId: 'set-promotion' },
        ],
      }],
    },
  },
}
