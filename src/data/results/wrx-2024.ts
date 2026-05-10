import type { EventResults } from './types'

// FIA World Rallycross 2024 — mixed RX1 (ICE) and RX1e (EV) results
// Source: Wikipedia 2024 FIA World Rallycross Championship — verified May 2026
// All five weekends in 2024 were doubleheaders; each is split into two events
// (one per championship round) so each scoring round has its own result.
export const wrxResults2024: Record<string, EventResults> = {
  // Sweden — R1 Kristoffersson, R2 Kristoffersson
  'wrx-2024-sweden-r1': {
    race: {
      overall: { driverIds: ['kristoffersson'], teamId: 'kms-horse-powertrain' },
      classes: [{
        className: 'RX1',
        podium: [
          { position: 1, driverIds: ['kristoffersson'], teamId: 'kms-horse-powertrain' },
        ],
      }],
    },
  },
  'wrx-2024-sweden-r2': {
    race: {
      overall: { driverIds: ['kristoffersson'], teamId: 'kms-horse-powertrain' },
      classes: [{
        className: 'RX1',
        podium: [
          { position: 1, driverIds: ['kristoffersson'], teamId: 'kms-horse-powertrain' },
        ],
      }],
    },
  },
  // Hungary — R3 Grönholm, R4 Kristoffersson
  'wrx-2024-hungary-r3': {
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
  'wrx-2024-hungary-r4': {
    race: {
      overall: { driverIds: ['kristoffersson'], teamId: 'kms-horse-powertrain' },
      classes: [{
        className: 'RX1',
        podium: [
          { position: 1, driverIds: ['kristoffersson'], teamId: 'kms-horse-powertrain' },
        ],
      }],
    },
  },
  // Benelux (Mettet) — R5 Timmy Hansen, R6 Kristoffersson
  'wrx-2024-benelux-r5': {
    race: {
      overall: { driverIds: ['timmy-hansen'], teamId: 'hansen-world-rx' },
      classes: [{
        className: 'RX1',
        podium: [
          { position: 1, driverIds: ['timmy-hansen'], teamId: 'hansen-world-rx' },
        ],
      }],
    },
  },
  'wrx-2024-benelux-r6': {
    race: {
      overall: { driverIds: ['kristoffersson'], teamId: 'kms-horse-powertrain' },
      classes: [{
        className: 'RX1',
        podium: [
          { position: 1, driverIds: ['kristoffersson'], teamId: 'kms-horse-powertrain' },
        ],
      }],
    },
  },
  // Portugal (Montalegre) — R7 Kristoffersson, R8 Kevin Hansen
  'wrx-2024-portugal-r7': {
    race: {
      overall: { driverIds: ['kristoffersson'], teamId: 'kms-horse-powertrain' },
      classes: [{
        className: 'RX1',
        podium: [
          { position: 1, driverIds: ['kristoffersson'], teamId: 'kms-horse-powertrain' },
        ],
      }],
    },
  },
  'wrx-2024-portugal-r8': {
    race: {
      overall: { driverIds: ['kevin-hansen'], teamId: 'hansen-world-rx' },
      classes: [{
        className: 'RX1',
        podium: [
          { position: 1, driverIds: ['kevin-hansen'], teamId: 'hansen-world-rx' },
        ],
      }],
    },
  },
  // Turkey (Istanbul) finale — R9 Veiby, R10 Rytkönen
  'wrx-2024-turkey-r9': {
    race: {
      overall: { driverIds: ['veiby'], teamId: 'kms-horse-powertrain' },
      classes: [{
        className: 'RX1',
        podium: [
          { position: 1, driverIds: ['veiby'], teamId: 'kms-horse-powertrain' },
        ],
      }],
    },
  },
  'wrx-2024-turkey-r10': {
    race: {
      overall: { driverIds: ['j-rytkonen'], teamId: 'pgrx' },
      classes: [{
        className: 'RX1',
        podium: [
          { position: 1, driverIds: ['j-rytkonen'], teamId: 'pgrx' },
        ],
      }],
    },
  },
}
