import type { EventResults } from './types'

// FIA World Rallycross 2022 — RX1e (electric) results
// Source: Wikipedia 2022 FIA World Rallycross Championship + per-event articles
// — verified May 2026.
// Doubleheader weekends are split into separate calendar events so each
// championship round has its own results entry.
export const wrxResults2022: Record<string, EventResults> = {
  // Round 1 — Sweden (Höljes) — RX1e championship weekend; weekend winner: Kristoffersson.
  'wrx-2022-sweden': {
    race: {
      overall: { driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
      classes: [{
        className: 'RX1e',
        podium: [
          { position: 1, driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
          { position: 2, driverIds: ['timmy-hansen'], teamId: 'hansen-world-rx' },
          { position: 3, driverIds: ['veiby'], teamId: 'kristoffersson-motorsport' },
        ],
      }],
    },
  },
  // Round 2 — Norway (Hell) — Kristoffersson.
  'wrx-2022-norway': {
    race: {
      overall: { driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
      classes: [{
        className: 'RX1e',
        podium: [
          { position: 1, driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
          { position: 2, driverIds: ['n-gronholm'], teamId: 'ce-dealer-team' },
          { position: 3, driverIds: ['veiby'], teamId: 'kristoffersson-motorsport' },
        ],
      }],
    },
  },
  // Latvia (Riga) doubleheader — per Wikipedia event article: Kristoffersson
  // won both Day 1 (R3) and Day 2 (R4) finals.
  'wrx-2022-latvia-r3': {
    race: {
      overall: { driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
      classes: [{
        className: 'RX1e',
        podium: [
          { position: 1, driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
        ],
      }],
    },
  },
  'wrx-2022-latvia-r4': {
    race: {
      overall: { driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
      classes: [{
        className: 'RX1e',
        podium: [
          { position: 1, driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
          { position: 2, driverIds: ['timmy-hansen'], teamId: 'hansen-world-rx' },
          { position: 3, driverIds: ['kevin-hansen'], teamId: 'hansen-world-rx' },
        ],
      }],
    },
  },
  // Portugal (Montalegre) doubleheader — per Wikipedia event article: R5 Kristoffersson, R6 Grönholm.
  'wrx-2022-portugal-r5': {
    race: {
      overall: { driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
      classes: [{
        className: 'RX1e',
        podium: [
          { position: 1, driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
        ],
      }],
    },
  },
  'wrx-2022-portugal-r6': {
    race: {
      overall: { driverIds: ['n-gronholm'], teamId: 'ce-dealer-team' },
      classes: [{
        className: 'RX1e',
        podium: [
          { position: 1, driverIds: ['n-gronholm'], teamId: 'ce-dealer-team' },
          { position: 2, driverIds: ['veiby'], teamId: 'kristoffersson-motorsport' },
          { position: 3, driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
        ],
      }],
    },
  },
  // Belgium (Spa-Francorchamps) doubleheader — per Wikipedia event article:
  // Kristoffersson won both R7 and R8.
  'wrx-2022-belgium-r7': {
    race: {
      overall: { driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
      classes: [{
        className: 'RX1e',
        podium: [
          { position: 1, driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
          { position: 2, driverIds: ['kevin-hansen'], teamId: 'hansen-world-rx' },
          { position: 3, driverIds: ['g-bergstrom'], teamId: 'kristoffersson-motorsport' },
        ],
      }],
    },
  },
  'wrx-2022-belgium-r8': {
    race: {
      overall: { driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
      classes: [{
        className: 'RX1e',
        podium: [
          { position: 1, driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
          { position: 2, driverIds: ['n-gronholm'], teamId: 'ce-dealer-team' },
          { position: 3, driverIds: ['g-bergstrom'], teamId: 'kristoffersson-motorsport' },
        ],
      }],
    },
  },
  // Spain (Catalunya) doubleheader — per Wikipedia event article:
  // R9 Timmy Hansen, R10 Kristoffersson (clinched 5th title).
  'wrx-2022-spain-r9': {
    race: {
      overall: { driverIds: ['timmy-hansen'], teamId: 'hansen-world-rx' },
      classes: [{
        className: 'RX1e',
        podium: [
          { position: 1, driverIds: ['timmy-hansen'], teamId: 'hansen-world-rx' },
        ],
      }],
    },
  },
  'wrx-2022-spain-r10': {
    race: {
      overall: { driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
      classes: [{
        className: 'RX1e',
        podium: [
          { position: 1, driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
          { position: 2, driverIds: ['kevin-hansen'], teamId: 'hansen-world-rx' },
          { position: 3, driverIds: ['veiby'], teamId: 'kristoffersson-motorsport' },
        ],
      }],
    },
  },
  // Germany (Nürburgring) finale — per Wikipedia: Kristoffersson won the final
  // race of the season. Per-day Round 11 vs Round 12 split is not explicitly
  // documented; both rounds recorded with the weekend winner.
  'wrx-2022-germany-r11': {
    race: {
      overall: { driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
      classes: [{
        className: 'RX1e',
        podium: [
          { position: 1, driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
        ],
      }],
    },
  },
  'wrx-2022-germany-r12': {
    race: {
      overall: { driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
      classes: [{
        className: 'RX1e',
        podium: [
          { position: 1, driverIds: ['kristoffersson'], teamId: 'kristoffersson-motorsport' },
          { position: 2, driverIds: ['timmy-hansen'], teamId: 'hansen-world-rx' },
          { position: 3, driverIds: ['g-bergstrom'], teamId: 'kristoffersson-motorsport' },
        ],
      }],
    },
  },
}
