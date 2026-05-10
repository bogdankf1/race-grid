import type { EventResults } from './types'

// FIA World Rallycross 2023 — RX1e results
// Source: Wikipedia 2023 FIA World Rallycross Championship — verified May 2026
// Note: Wikipedia results table generally lists only round winners; full podium
// data was not always available.
// The South Africa weekend (Killarney, Cape Town) was a doubleheader; per the
// Wikipedia article, Kristoffersson is documented as the weekend winner but
// per-round (R4 vs R5) split is not explicitly stated, so both rounds are
// recorded with the weekend winner.
export const wrxResults2023: Record<string, EventResults> = {
  // Round 1 — Portugal (Montalegre)
  'wrx-2023-portugal': {
    race: {
      overall: { driverIds: ['kristoffersson'], teamId: 'vw-dealerteam-bauhaus' },
      classes: [{
        className: 'RX1e',
        podium: [
          { position: 1, driverIds: ['kristoffersson'], teamId: 'vw-dealerteam-bauhaus' },
        ],
      }],
    },
  },
  // Round 2 — Norway (Hell)
  'wrx-2023-norway': {
    race: {
      overall: { driverIds: ['kristoffersson'], teamId: 'vw-dealerteam-bauhaus' },
      classes: [{
        className: 'RX1e',
        podium: [
          { position: 1, driverIds: ['kristoffersson'], teamId: 'vw-dealerteam-bauhaus' },
        ],
      }],
    },
  },
  // Round 3 — Sweden (Höljes)
  'wrx-2023-sweden': {
    race: {
      overall: { driverIds: ['kristoffersson'], teamId: 'vw-dealerteam-bauhaus' },
      classes: [{
        className: 'RX1e',
        podium: [
          { position: 1, driverIds: ['kristoffersson'], teamId: 'vw-dealerteam-bauhaus' },
        ],
      }],
    },
  },
  // South Africa (Cape Town) doubleheader — per-round split not verifiable on
  // Wikipedia; both R4 and R5 recorded with weekend winner Kristoffersson.
  'wrx-2023-south-africa-r4': {
    race: {
      overall: { driverIds: ['kristoffersson'], teamId: 'vw-dealerteam-bauhaus' },
      classes: [{
        className: 'RX1e',
        podium: [
          { position: 1, driverIds: ['kristoffersson'], teamId: 'vw-dealerteam-bauhaus' },
        ],
      }],
    },
  },
  'wrx-2023-south-africa-r5': {
    race: {
      overall: { driverIds: ['kristoffersson'], teamId: 'vw-dealerteam-bauhaus' },
      classes: [{
        className: 'RX1e',
        podium: [
          { position: 1, driverIds: ['kristoffersson'], teamId: 'vw-dealerteam-bauhaus' },
        ],
      }],
    },
  },
  // Hong Kong finale — winner: Kevin Hansen
  'wrx-2023-hong-kong': {
    race: {
      overall: { driverIds: ['kevin-hansen'], teamId: 'hansen-world-rx' },
      classes: [{
        className: 'RX1e',
        podium: [
          { position: 1, driverIds: ['kevin-hansen'], teamId: 'hansen-world-rx' },
        ],
      }],
    },
  },
}
