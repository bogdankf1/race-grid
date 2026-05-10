import type { EventResults } from './types'

// FIA World Rallycross 2025 — final World RX season — results
// Source: Wikipedia 2025 FIA World Rallycross Championship — verified May 2026
// The Turkey finale (Istanbul) was a doubleheader, split into two events.
export const wrxResults2025: Record<string, EventResults> = {
  // Round 1 — Portugal (Lousada)
  'wrx-2025-portugal': {
    race: {
      overall: { driverIds: ['n-gronholm'], teamId: 'ce-dealer-team' },
      classes: [{
        className: 'RX1',
        podium: [
          { position: 1, driverIds: ['n-gronholm'], teamId: 'ce-dealer-team' },
        ],
      }],
    },
  },
  // Round 2 — Sweden (Höljes)
  'wrx-2025-sweden': {
    race: {
      overall: { driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
      classes: [{
        className: 'RX1',
        podium: [
          { position: 1, driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
        ],
      }],
    },
  },
  // Round 3 — Hungary (Nyirád)
  'wrx-2025-hungary': {
    race: {
      overall: { driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
      classes: [{
        className: 'RX1',
        podium: [
          { position: 1, driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
        ],
      }],
    },
  },
  // Round 4 — Finland (KymiRing)
  'wrx-2025-finland': {
    race: {
      overall: { driverIds: ['veiby'], teamId: 'kristoffersson-motorsport' },
      classes: [{
        className: 'RX1',
        podium: [
          { position: 1, driverIds: ['veiby'], teamId: 'kristoffersson-motorsport' },
        ],
      }],
    },
  },
  // Turkey doubleheader finale — R5 Kristoffersson, R6 Veiby (per Wikipedia event article)
  'wrx-2025-turkey-r5': {
    race: {
      overall: { driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
      classes: [{
        className: 'RX1',
        podium: [
          { position: 1, driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
        ],
      }],
    },
  },
  'wrx-2025-turkey-r6': {
    race: {
      overall: { driverIds: ['veiby'], teamId: 'kristoffersson-motorsport' },
      classes: [{
        className: 'RX1',
        podium: [
          { position: 1, driverIds: ['veiby'], teamId: 'kristoffersson-motorsport' },
        ],
      }],
    },
  },
}
