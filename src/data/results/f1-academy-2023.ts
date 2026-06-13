import type { EventResults } from './types'

// F1 Academy 2023 results — inaugural season. Top-3 podium for each race
// verified from official F1 Academy race reports
// (https://www.f1academy.com/Latest/), Formula Scout round reports and
// Wikipedia's "2023 F1 Academy season" results table.
//
// Session encoding (matches the 2023 calendar file):
//   - sprint_qualifying = Qualifying 1 (sets Race 1 grid)
//   - qualifying        = Qualifying 2 (sets Race 3 grid)
//   - sprint            = Race 1
//   - race              = Race 3 (feature)
//   - reverse-grid Race 2 is its own event under the `-extra` suffix
//
// At Round 1 (Spielberg) Abbi Pulling was fastest in both qualifying sessions
// but the Rodin Carlin cars were disqualified from qualifying for a technical
// infringement, handing both poles to Marta García. The qualifying podiums
// below reflect the official post-DSQ result.
//
// At Round 5 (Monza) Race 3, Amna Al Qubaisi crossed the line third but was
// demoted to fourth for a track-limits infringement, promoting Marta García
// to the podium.
export const f1AcademyResults2023: Record<string, EventResults> = {
  'f1-academy-2023-spielberg': {
    sprint_qualifying: {
      // Qualifying 1 — sets Race 1 grid (post-Rodin Carlin DSQ)
      overall: { driverIds: ['garcia-marta'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['garcia-marta'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['bustamante'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['marti-n'], teamId: 'campos-racing' },
        ],
      }],
    },
    qualifying: {
      // Qualifying 2 — sets Race 3 grid (post-Rodin Carlin DSQ)
      overall: { driverIds: ['garcia-marta'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['garcia-marta'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['bustamante'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['marti-n'], teamId: 'campos-racing' },
        ],
      }],
    },
    sprint: {
      // Race 1
      overall: { driverIds: ['garcia-marta'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['garcia-marta'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['marti-n'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['bustamante'], teamId: 'prema-racing' },
        ],
      }],
    },
    race: {
      // Race 3 — feature
      overall: { driverIds: ['garcia-marta'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['garcia-marta'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['al-qubaisi-h'], teamId: 'mp-motorsport' },
          { position: 3, driverIds: ['al-qubaisi-a'], teamId: 'mp-motorsport' },
        ],
      }],
    },
  },
  'f1-academy-2023-spielberg-extra': {
    race: {
      // Race 2 — reverse-grid
      overall: { driverIds: ['al-qubaisi-a'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['al-qubaisi-a'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['buhler-l'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['lovinfosse'], teamId: 'campos-racing' },
        ],
      }],
    },
  },
  'f1-academy-2023-valencia': {
    sprint_qualifying: {
      // Qualifying 1 — sets Race 1 grid
      overall: { driverIds: ['marti-n'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['marti-n'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['al-qubaisi-h'], teamId: 'mp-motorsport' },
          { position: 3, driverIds: ['buhler-l'], teamId: 'art-grand-prix' },
        ],
      }],
    },
    qualifying: {
      // Qualifying 2 — sets Race 3 grid
      overall: { driverIds: ['garcia-marta'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['garcia-marta'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['marti-n'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['al-qubaisi-h'], teamId: 'mp-motorsport' },
        ],
      }],
    },
    sprint: {
      // Race 1
      overall: { driverIds: ['al-qubaisi-h'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['al-qubaisi-h'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['marti-n'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['buhler-l'], teamId: 'art-grand-prix' },
        ],
      }],
    },
    race: {
      // Race 3 — feature
      overall: { driverIds: ['garcia-marta'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['garcia-marta'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['marti-n'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['pulling'], teamId: 'rodin-carlin' },
        ],
      }],
    },
  },
  'f1-academy-2023-valencia-extra': {
    race: {
      // Race 2 — reverse-grid
      overall: { driverIds: ['bustamante'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bustamante'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['buhler-l'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['al-qubaisi-h'], teamId: 'mp-motorsport' },
        ],
      }],
    },
  },
  'f1-academy-2023-barcelona': {
    sprint_qualifying: {
      // Qualifying 1 — sets Race 1 grid
      overall: { driverIds: ['de-heus'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['de-heus'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['pulling'], teamId: 'rodin-carlin' },
          { position: 3, driverIds: ['garcia-marta'], teamId: 'prema-racing' },
        ],
      }],
    },
    qualifying: {
      // Qualifying 2 — sets Race 3 grid
      overall: { driverIds: ['buhler-l'], teamId: 'art-grand-prix' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['buhler-l'], teamId: 'art-grand-prix' },
          { position: 2, driverIds: ['al-qubaisi-h'], teamId: 'mp-motorsport' },
          { position: 3, driverIds: ['garcia-marta'], teamId: 'prema-racing' },
        ],
      }],
    },
    sprint: {
      // Race 1
      overall: { driverIds: ['de-heus'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['de-heus'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['pulling'], teamId: 'rodin-carlin' },
          { position: 3, driverIds: ['garcia-marta'], teamId: 'prema-racing' },
        ],
      }],
    },
    race: {
      // Race 3 — feature
      overall: { driverIds: ['buhler-l'], teamId: 'art-grand-prix' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['buhler-l'], teamId: 'art-grand-prix' },
          { position: 2, driverIds: ['al-qubaisi-h'], teamId: 'mp-motorsport' },
          { position: 3, driverIds: ['garcia-marta'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
  'f1-academy-2023-barcelona-extra': {
    race: {
      // Race 2 — reverse-grid
      overall: { driverIds: ['al-qubaisi-a'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['al-qubaisi-a'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['garcia-marta'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['pulling'], teamId: 'rodin-carlin' },
        ],
      }],
    },
  },
  'f1-academy-2023-zandvoort': {
    sprint_qualifying: {
      // Qualifying 1 — sets Race 1 grid
      overall: { driverIds: ['al-qubaisi-h'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['al-qubaisi-h'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['pulling'], teamId: 'rodin-carlin' },
          { position: 3, driverIds: ['buhler-l'], teamId: 'art-grand-prix' },
        ],
      }],
    },
    qualifying: {
      // Qualifying 2 — sets Race 3 grid
      overall: { driverIds: ['al-qubaisi-h'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['al-qubaisi-h'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['marti-n'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['buhler-l'], teamId: 'art-grand-prix' },
        ],
      }],
    },
    sprint: {
      // Race 1
      overall: { driverIds: ['al-qubaisi-h'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['al-qubaisi-h'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['buhler-l'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['marti-n'], teamId: 'campos-racing' },
        ],
      }],
    },
    race: {
      // Race 3 — feature
      overall: { driverIds: ['al-qubaisi-h'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['al-qubaisi-h'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['de-heus'], teamId: 'mp-motorsport' },
          { position: 3, driverIds: ['buhler-l'], teamId: 'art-grand-prix' },
        ],
      }],
    },
  },
  'f1-academy-2023-zandvoort-extra': {
    race: {
      // Race 2 — reverse-grid
      overall: { driverIds: ['schreiner'], teamId: 'art-grand-prix' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['schreiner'], teamId: 'art-grand-prix' },
          { position: 2, driverIds: ['garcia-marta'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['buhler-l'], teamId: 'art-grand-prix' },
        ],
      }],
    },
  },
  'f1-academy-2023-monza': {
    sprint_qualifying: {
      // Qualifying 1 — sets Race 1 grid
      overall: { driverIds: ['garcia-marta'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['garcia-marta'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['buhler-l'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['edgar-j'], teamId: 'rodin-carlin' },
        ],
      }],
    },
    qualifying: {
      // Qualifying 2 — sets Race 3 grid
      overall: { driverIds: ['pulling'], teamId: 'rodin-carlin' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pulling'], teamId: 'rodin-carlin' },
          { position: 2, driverIds: ['bustamante'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['garcia-marta'], teamId: 'prema-racing' },
        ],
      }],
    },
    sprint: {
      // Race 1 — Garcia won by 0.009s after a photo finish
      overall: { driverIds: ['garcia-marta'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['garcia-marta'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['buhler-l'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['edgar-j'], teamId: 'rodin-carlin' },
        ],
      }],
    },
    race: {
      // Race 3 — feature (Amna Al Qubaisi initially 3rd, demoted to 4th
      // for track-limits infringement; García promoted to the podium)
      overall: { driverIds: ['bustamante'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bustamante'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['pulling'], teamId: 'rodin-carlin' },
          { position: 3, driverIds: ['garcia-marta'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
  'f1-academy-2023-monza-extra': {
    race: {
      // Race 2 — reverse-grid
      overall: { driverIds: ['buhler-l'], teamId: 'art-grand-prix' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['buhler-l'], teamId: 'art-grand-prix' },
          { position: 2, driverIds: ['bustamante'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['pulling'], teamId: 'rodin-carlin' },
        ],
      }],
    },
  },
  'f1-academy-2023-paul-ricard': {
    sprint_qualifying: {
      // Qualifying 1 — sets Race 1 grid
      overall: { driverIds: ['pulling'], teamId: 'rodin-carlin' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pulling'], teamId: 'rodin-carlin' },
          { position: 2, driverIds: ['marti-n'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['garcia-marta'], teamId: 'prema-racing' },
        ],
      }],
    },
    qualifying: {
      // Qualifying 2 — sets Race 3 grid
      overall: { driverIds: ['buhler-l'], teamId: 'art-grand-prix' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['buhler-l'], teamId: 'art-grand-prix' },
          { position: 2, driverIds: ['garcia-marta'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['marti-n'], teamId: 'campos-racing' },
        ],
      }],
    },
    sprint: {
      // Race 1 — Martí's first F1 Academy win
      overall: { driverIds: ['marti-n'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['marti-n'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['pulling'], teamId: 'rodin-carlin' },
          { position: 3, driverIds: ['lovinfosse'], teamId: 'campos-racing' },
        ],
      }],
    },
    race: {
      // Race 3 — feature
      overall: { driverIds: ['garcia-marta'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['garcia-marta'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['buhler-l'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['lovinfosse'], teamId: 'campos-racing' },
        ],
      }],
    },
  },
  'f1-academy-2023-paul-ricard-extra': {
    race: {
      // Race 2 — reverse-grid
      overall: { driverIds: ['garcia-marta'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['garcia-marta'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['buhler-l'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['al-qubaisi-a'], teamId: 'mp-motorsport' },
        ],
      }],
    },
  },
  'f1-academy-2023-austin': {
    sprint_qualifying: {
      // Qualifying 1 — sets Race 1 grid
      overall: { driverIds: ['garcia-marta'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['garcia-marta'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['pulling'], teamId: 'rodin-carlin' },
          { position: 3, driverIds: ['al-qubaisi-h'], teamId: 'mp-motorsport' },
        ],
      }],
    },
    qualifying: {
      // Qualifying 2 — sets Race 3 grid
      overall: { driverIds: ['edgar-j'], teamId: 'rodin-carlin' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['edgar-j'], teamId: 'rodin-carlin' },
          { position: 2, driverIds: ['garcia-marta'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['al-qubaisi-h'], teamId: 'mp-motorsport' },
        ],
      }],
    },
    sprint: {
      // Race 1 — Marta García clinched the inaugural title with this win
      overall: { driverIds: ['garcia-marta'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['garcia-marta'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['pulling'], teamId: 'rodin-carlin' },
          { position: 3, driverIds: ['marti-n'], teamId: 'campos-racing' },
        ],
      }],
    },
    race: {
      // Race 3 — feature; Jess Edgar's maiden F1 Academy win
      overall: { driverIds: ['edgar-j'], teamId: 'rodin-carlin' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['edgar-j'], teamId: 'rodin-carlin' },
          { position: 2, driverIds: ['marti-n'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['garcia-marta'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
  'f1-academy-2023-austin-extra': {
    race: {
      // Race 2 — reverse-grid
      overall: { driverIds: ['al-qubaisi-h'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['al-qubaisi-h'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['buhler-l'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['lovinfosse'], teamId: 'campos-racing' },
        ],
      }],
    },
  },
}
