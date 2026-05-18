import type { EventResults } from './types'

// FIA European Rallycross Championship 2026 — Euro RX results
// Source: fiaworldrallycross.com, fia.com — verified May 2026
export const wrxResults2026: Record<string, EventResults> = {
  // Round 1 — Euro RX of Latvia (Biķernieki)
  'wrx-2026-latvia': {
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
}
