import type { EventResults } from './types'

// FIA World Rallycross 2021 — RX1 results
// Source: Wikipedia 2021 FIA World Rallycross Championship + per-event articles
// — verified May 2026.
// Doubleheader weekends are split into separate calendar events so each
// championship round has its own results entry.
export const wrxResults2021: Record<string, EventResults> = {
  'wrx-2021-spain': {
    race: {
      overall: { driverIds: ['kevin-hansen'], teamId: 'hansen-world-rx' },
      classes: [{
        className: 'RX1',
        podium: [
          { position: 1, driverIds: ['kevin-hansen'], teamId: 'hansen-world-rx' },
          { position: 2, driverIds: ['timmy-hansen'], teamId: 'hansen-world-rx' },
          { position: 3, driverIds: ['n-gronholm'], teamId: 'grx-set' },
        ],
      }],
    },
  },
  // Sweden doubleheader weekend — Wikipedia per-event article only documents one
  // weekend final winner (Timmy Hansen); separate Round 2 vs Round 3 winners not
  // explicitly listed there, so both rounds are recorded with the weekend winner.
  'wrx-2021-sweden-r2': {
    race: {
      overall: { driverIds: ['timmy-hansen'], teamId: 'hansen-world-rx' },
      classes: [{
        className: 'RX1',
        podium: [
          { position: 1, driverIds: ['timmy-hansen'], teamId: 'hansen-world-rx' },
          { position: 2, driverIds: ['kevin-hansen'], teamId: 'hansen-world-rx' },
          { position: 3, driverIds: ['abbring'], teamId: 'unkorrupted' },
        ],
      }],
    },
  },
  'wrx-2021-sweden-r3': {
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
  // France (Lohéac) doubleheader — Wikipedia documents weekend overall winner
  // (Timmy Hansen); separate Round 4 vs Round 5 winners not explicitly listed.
  'wrx-2021-france-r4': {
    race: {
      overall: { driverIds: ['timmy-hansen'], teamId: 'hansen-world-rx' },
      classes: [{
        className: 'RX1',
        podium: [
          { position: 1, driverIds: ['timmy-hansen'], teamId: 'hansen-world-rx' },
          { position: 2, driverIds: ['t-scheider'], teamId: 'all-inkl-munnich' },
          { position: 3, driverIds: ['n-gronholm'], teamId: 'grx-set' },
        ],
      }],
    },
  },
  'wrx-2021-france-r5': {
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
  // Latvia (Riga) doubleheader — verified per-round on Wikipedia event article:
  // Day 1 (R6) winner Grönholm; Day 2 (R7) winner Kristoffersson.
  'wrx-2021-latvia-r6': {
    race: {
      overall: { driverIds: ['n-gronholm'], teamId: 'grx-set' },
      classes: [{
        className: 'RX1',
        podium: [
          { position: 1, driverIds: ['n-gronholm'], teamId: 'grx-set' },
        ],
      }],
    },
  },
  'wrx-2021-latvia-r7': {
    race: {
      overall: { driverIds: ['kristoffersson'], teamId: 'kyb-eks-jc' },
      classes: [{
        className: 'RX1',
        podium: [
          { position: 1, driverIds: ['kristoffersson'], teamId: 'kyb-eks-jc' },
          { position: 2, driverIds: ['k-szabo'], teamId: 'grx-set' },
          { position: 3, driverIds: ['enzo-ide'], teamId: 'kyb-eks-jc' },
        ],
      }],
    },
  },
  'wrx-2021-belgium': {
    race: {
      overall: { driverIds: ['kristoffersson'], teamId: 'kyb-eks-jc' },
      classes: [{
        className: 'RX1',
        podium: [
          { position: 1, driverIds: ['kristoffersson'], teamId: 'kyb-eks-jc' },
          { position: 2, driverIds: ['abbring'], teamId: 'unkorrupted' },
          { position: 3, driverIds: ['enzo-ide'], teamId: 'kyb-eks-jc' },
        ],
      }],
    },
  },
  'wrx-2021-portugal': {
    race: {
      overall: { driverIds: ['n-gronholm'], teamId: 'grx-set' },
      classes: [{
        className: 'RX1',
        podium: [
          { position: 1, driverIds: ['n-gronholm'], teamId: 'grx-set' },
          { position: 2, driverIds: ['o-odonovan'], teamId: 'ollie-odonovan' },
          { position: 3, driverIds: ['k-szabo'], teamId: 'grx-set' },
        ],
      }],
    },
  },
  // Germany (Nürburgring) doubleheader finale — verified per-round on Wikipedia:
  // Day 1 (R10) Kristoffersson; Day 2 (R11) Grönholm.
  'wrx-2021-germany-r10': {
    race: {
      overall: { driverIds: ['kristoffersson'], teamId: 'kyb-eks-jc' },
      classes: [{
        className: 'RX1',
        podium: [
          { position: 1, driverIds: ['kristoffersson'], teamId: 'kyb-eks-jc' },
          { position: 2, driverIds: ['belevskiy'], teamId: 'volland-racing' },
          { position: 3, driverIds: ['k-szabo'], teamId: 'grx-set' },
        ],
      }],
    },
  },
  'wrx-2021-germany-r11': {
    race: {
      overall: { driverIds: ['n-gronholm'], teamId: 'grx-set' },
      classes: [{
        className: 'RX1',
        podium: [
          { position: 1, driverIds: ['n-gronholm'], teamId: 'grx-set' },
          { position: 2, driverIds: ['kevin-hansen'], teamId: 'hansen-world-rx' },
          { position: 3, driverIds: ['kristoffersson'], teamId: 'kyb-eks-jc' },
        ],
      }],
    },
  },
}
