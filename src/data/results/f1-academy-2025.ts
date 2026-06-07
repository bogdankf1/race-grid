import type { EventResults } from './types'

// F1 Academy 2025 results — verified from Wikipedia "2025 F1 Academy season",
// f1academy.com results pages, and motorsport.com.
// Sessions are encoded as: qualifying, sprint = Race 1 (reverse-grid),
// race = Race 2 (feature). Montreal opener race is its own event for the
// rescheduled Miami Race 2 (run with Miami's qualifying grid).
export const f1AcademyResults2025: Record<string, EventResults> = {
  'f1-academy-2025-shanghai': {
    qualifying: {
      overall: { driverIds: ['weug'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['weug'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['pin'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['hurup-larsen'], teamId: 'mp-motorsport' },
        ],
      }],
    },
    sprint: {
      // Race 1 — Reverse-grid race
      overall: { driverIds: ['palmowski'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['palmowski'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['chambers'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['weug'], teamId: 'mp-motorsport' },
        ],
      }],
    },
    race: {
      // Race 2 — Feature race
      overall: { driverIds: ['pin'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pin'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['weug'], teamId: 'mp-motorsport' },
          { position: 3, driverIds: ['chambers'], teamId: 'campos-racing' },
        ],
      }],
    },
  },
  'f1-academy-2025-jeddah': {
    qualifying: {
      overall: { driverIds: ['chambers'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['chambers'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['pin'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['weug'], teamId: 'mp-motorsport' },
        ],
      }],
    },
    sprint: {
      // Race 1 — Reverse-grid race
      overall: { driverIds: ['lloyd-e'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lloyd-e'], teamId: 'rodin-motorsport' },
          { position: 2, driverIds: ['palmowski'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['weug'], teamId: 'mp-motorsport' },
        ],
      }],
    },
    race: {
      // Race 2 — Feature race
      overall: { driverIds: ['weug'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['weug'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['chambers'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['pin'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
  'f1-academy-2025-miami': {
    qualifying: {
      overall: { driverIds: ['chambers'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['chambers'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['palmowski'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['pin'], teamId: 'prema-racing' },
        ],
      }],
    },
    sprint: {
      // Race 1 — Reverse-grid race
      overall: { driverIds: ['pin'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pin'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['palmowski'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['chambers'], teamId: 'campos-racing' },
        ],
      }],
    },
    // Race 2 cancelled due to torrential rain — rescheduled to Montreal opener
  },
  'f1-academy-2025-montreal-opener': {
    race: {
      // Rescheduled Miami Race 2 — run at Montreal with Miami's qualifying grid
      overall: { driverIds: ['pin'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pin'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['lloyd-e'], teamId: 'rodin-motorsport' },
          { position: 3, driverIds: ['gademan'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
  'f1-academy-2025-montreal': {
    qualifying: {
      overall: { driverIds: ['chambers'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['chambers'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['palmowski'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['pin'], teamId: 'prema-racing' },
        ],
      }],
    },
    sprint: {
      // Race 2 — Reverse-grid race (encoded as sprint per series convention)
      overall: { driverIds: ['felbermayr'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['felbermayr'], teamId: 'rodin-motorsport' },
          { position: 2, driverIds: ['lloyd-e'], teamId: 'rodin-motorsport' },
          { position: 3, driverIds: ['gademan'], teamId: 'prema-racing' },
        ],
      }],
    },
    race: {
      // Race 3 — Feature race (grid set by Montreal qualifying)
      overall: { driverIds: ['chambers'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['chambers'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['lloyd-e'], teamId: 'rodin-motorsport' },
          { position: 3, driverIds: ['pin'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
  'f1-academy-2025-zandvoort': {
    qualifying: {
      overall: { driverIds: ['weug'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['weug'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['palmowski'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['lloyd-e'], teamId: 'rodin-motorsport' },
        ],
      }],
    },
    sprint: {
      // Race 1 — Reverse-grid race
      overall: { driverIds: ['gademan'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gademan'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['block-l'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['weug'], teamId: 'mp-motorsport' },
        ],
      }],
    },
    race: {
      // Race 2 — Feature race
      overall: { driverIds: ['weug'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['weug'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['palmowski'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['pin'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
  'f1-academy-2025-singapore': {
    qualifying: {
      overall: { driverIds: ['weug'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['weug'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['pin'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['chambers'], teamId: 'campos-racing' },
        ],
      }],
    },
    sprint: {
      // Race 1 — Reverse-grid race
      overall: { driverIds: ['block-l'], teamId: 'art-grand-prix' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['block-l'], teamId: 'art-grand-prix' },
          { position: 2, driverIds: ['weug'], teamId: 'mp-motorsport' },
          { position: 3, driverIds: ['chambers'], teamId: 'campos-racing' },
        ],
      }],
    },
    race: {
      // Race 2 — Feature race
      overall: { driverIds: ['weug'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['weug'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['pin'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['lloyd-e'], teamId: 'rodin-motorsport' },
        ],
      }],
    },
  },
  'f1-academy-2025-las-vegas': {
    qualifying: {
      overall: { driverIds: ['chambers'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['chambers'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['palmowski'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['hurup-larsen'], teamId: 'mp-motorsport' },
        ],
      }],
    },
    sprint: {
      // Race 1 — Reverse-grid race
      overall: { driverIds: ['pin'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pin'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['gademan'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['nobels'], teamId: 'art-grand-prix' },
        ],
      }],
    },
    race: {
      // Race 2 — Feature race
      overall: { driverIds: ['chambers'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['chambers'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['palmowski'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['weug'], teamId: 'mp-motorsport' },
        ],
      }],
    },
  },
}
