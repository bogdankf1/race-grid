import type { EventResults } from './types'

// F1 Academy 2024 results — verified from Wikipedia "2024 F1 Academy season",
// f1academy.com results pages, and motorsport.com.
// Sessions are encoded as: qualifying, sprint = Race 1, race = Race 2.
// In 2024, both races counted equally (no reverse-grid race) — Race 1 grid was
// set by drivers' fastest qualifying lap, Race 2 grid by their second-fastest.
// Lusail Race 2 was cancelled (no result captured); the Abu Dhabi Race 3
// replacement is its own event under `f1-academy-2024-abu-dhabi-extra`.
export const f1AcademyResults2024: Record<string, EventResults> = {
  'f1-academy-2024-jeddah': {
    qualifying: {
      overall: { driverIds: ['pin'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pin'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['pulling'], teamId: 'rodin-motorsport' },
          { position: 3, driverIds: ['weug'], teamId: 'prema-racing' },
        ],
      }],
    },
    sprint: {
      // Race 1 — Grid set by fastest qualifying lap
      overall: { driverIds: ['pin'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pin'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['pulling'], teamId: 'rodin-motorsport' },
          { position: 3, driverIds: ['weug'], teamId: 'prema-racing' },
        ],
      }],
    },
    race: {
      // Race 2 — Grid set by second-fastest qualifying lap
      overall: { driverIds: ['pulling'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pulling'], teamId: 'rodin-motorsport' },
          { position: 2, driverIds: ['weug'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['marti-n'], teamId: 'campos-racing' },
        ],
      }],
    },
  },
  'f1-academy-2024-miami': {
    qualifying: {
      overall: { driverIds: ['pulling'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pulling'], teamId: 'rodin-motorsport' },
          { position: 2, driverIds: ['pin'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['chambers'], teamId: 'campos-racing' },
        ],
      }],
    },
    sprint: {
      // Race 1 — Grid set by fastest qualifying lap
      overall: { driverIds: ['pulling'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pulling'], teamId: 'rodin-motorsport' },
          { position: 2, driverIds: ['pin'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['chambers'], teamId: 'campos-racing' },
        ],
      }],
    },
    race: {
      // Race 2 — Grid set by second-fastest qualifying lap
      overall: { driverIds: ['pulling'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pulling'], teamId: 'rodin-motorsport' },
          { position: 2, driverIds: ['bustamante'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['pin'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
  'f1-academy-2024-barcelona': {
    qualifying: {
      overall: { driverIds: ['pulling'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pulling'], teamId: 'rodin-motorsport' },
          { position: 2, driverIds: ['marti-n'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['chambers'], teamId: 'campos-racing' },
        ],
      }],
    },
    sprint: {
      // Race 1 — Grid set by fastest qualifying lap
      overall: { driverIds: ['pulling'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pulling'], teamId: 'rodin-motorsport' },
          { position: 2, driverIds: ['marti-n'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['chambers'], teamId: 'campos-racing' },
        ],
      }],
    },
    race: {
      // Race 2 — Grid set by second-fastest qualifying lap
      overall: { driverIds: ['chambers'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['chambers'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['pulling'], teamId: 'rodin-motorsport' },
          { position: 3, driverIds: ['weug'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
  'f1-academy-2024-zandvoort': {
    qualifying: {
      overall: { driverIds: ['pulling'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pulling'], teamId: 'rodin-motorsport' },
          { position: 2, driverIds: ['pin'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['marti-n'], teamId: 'campos-racing' },
        ],
      }],
    },
    sprint: {
      // Race 1 — Grid set by fastest qualifying lap
      overall: { driverIds: ['pulling'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pulling'], teamId: 'rodin-motorsport' },
          { position: 2, driverIds: ['marti-n'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['weug'], teamId: 'prema-racing' },
        ],
      }],
    },
    race: {
      // Race 2 — Grid set by second-fastest qualifying lap
      overall: { driverIds: ['pin'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pin'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['weug'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['pulling'], teamId: 'rodin-motorsport' },
        ],
      }],
    },
  },
  'f1-academy-2024-singapore': {
    qualifying: {
      overall: { driverIds: ['pulling'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pulling'], teamId: 'rodin-motorsport' },
          { position: 2, driverIds: ['weug'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['pin'], teamId: 'prema-racing' },
        ],
      }],
    },
    sprint: {
      // Race 1 — Grid set by fastest qualifying lap
      overall: { driverIds: ['pulling'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pulling'], teamId: 'rodin-motorsport' },
          { position: 2, driverIds: ['weug'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['pin'], teamId: 'prema-racing' },
        ],
      }],
    },
    race: {
      // Race 2 — Grid set by second-fastest qualifying lap
      overall: { driverIds: ['pulling'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pulling'], teamId: 'rodin-motorsport' },
          { position: 2, driverIds: ['weug'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['pin'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
  'f1-academy-2024-lusail': {
    qualifying: {
      overall: { driverIds: ['pin'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pin'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['pulling'], teamId: 'rodin-motorsport' },
          { position: 3, driverIds: ['weug'], teamId: 'prema-racing' },
        ],
      }],
    },
    sprint: {
      // Race 1 — Grid set by fastest qualifying lap
      overall: { driverIds: ['pin'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pin'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['pulling'], teamId: 'rodin-motorsport' },
          { position: 3, driverIds: ['weug'], teamId: 'prema-racing' },
        ],
      }],
    },
    // Race 2 cancelled due to barrier damage — rescheduled as Race 3 at Abu Dhabi.
  },
  'f1-academy-2024-abu-dhabi': {
    qualifying: {
      overall: { driverIds: ['pulling'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pulling'], teamId: 'rodin-motorsport' },
          { position: 2, driverIds: ['al-qubaisi-h'], teamId: 'mp-motorsport' },
          { position: 3, driverIds: ['pin'], teamId: 'prema-racing' },
        ],
      }],
    },
    sprint: {
      // Race 1 — Pulling clinched the title with this win
      overall: { driverIds: ['pulling'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pulling'], teamId: 'rodin-motorsport' },
          { position: 2, driverIds: ['al-qubaisi-h'], teamId: 'mp-motorsport' },
          { position: 3, driverIds: ['pin'], teamId: 'prema-racing' },
        ],
      }],
    },
    race: {
      // Race 2 — Grid set by second-fastest qualifying lap
      overall: { driverIds: ['pulling'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pulling'], teamId: 'rodin-motorsport' },
          { position: 2, driverIds: ['chambers'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['al-qubaisi-h'], teamId: 'mp-motorsport' },
        ],
      }],
    },
  },
  'f1-academy-2024-abu-dhabi-extra': {
    race: {
      // Race 3 — Replacement for cancelled Lusail Race 2.
      // Grid set by drivers' third-fastest qualifying time.
      overall: { driverIds: ['weug'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['weug'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['pulling'], teamId: 'rodin-motorsport' },
          { position: 3, driverIds: ['marti-n'], teamId: 'campos-racing' },
        ],
      }],
    },
  },
}
