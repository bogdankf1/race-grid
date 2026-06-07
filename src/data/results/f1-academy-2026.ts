import type { EventResults } from './types'

// F1 Academy 2026 results — verified from f1academy.com, Wikipedia, motorsport.com
// As of 2026-06-07: Rounds 1 (Shanghai) and 2 (Montreal) complete. Rounds 3-6 upcoming.
// Sessions are encoded as: qualifying, sprint = Race 1 (reverse-grid),
// race = Race 2 (feature). Montreal opener race is its own event.
export const f1AcademyResults2026: Record<string, EventResults> = {
  'f1-academy-2026-shanghai': {
    qualifying: {
      overall: { driverIds: ['palmowski'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['palmowski'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['felbermayr'], teamId: 'rodin-motorsport' },
          { position: 3, driverIds: ['paatz'], teamId: 'prema-racing' },
        ],
      }],
    },
    sprint: {
      // Race 1 — Reverse-grid race (pole: Hurup Larsen via reverse grid)
      overall: { driverIds: ['gademan'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gademan'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['granada'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['felbermayr'], teamId: 'rodin-motorsport' },
        ],
      }],
    },
    race: {
      // Race 2 — Feature race (pole: Palmowski)
      overall: { driverIds: ['felbermayr'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['felbermayr'], teamId: 'rodin-motorsport' },
          { position: 2, driverIds: ['palmowski'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['westcott'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
  'f1-academy-2026-montreal-opener': {
    race: {
      // Opening Race (added for Jeddah cancellation) — pole-to-flag win for Palmowski
      overall: { driverIds: ['palmowski'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['palmowski'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['bruce-m'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['paatz'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
  'f1-academy-2026-montreal': {
    qualifying: {
      overall: { driverIds: ['palmowski'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['palmowski'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['felbermayr'], teamId: 'rodin-motorsport' },
          { position: 3, driverIds: ['lloyd-e'], teamId: 'rodin-motorsport' },
        ],
      }],
    },
    sprint: {
      // Reverse-Grid Race (pole: Ella Lloyd via reverse grid)
      overall: { driverIds: ['paatz'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['paatz'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['countryman'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['westcott'], teamId: 'prema-racing' },
        ],
      }],
    },
    race: {
      // Feature Race (pole: Palmowski) — lights-to-flag win
      overall: { driverIds: ['palmowski'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['palmowski'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['felbermayr'], teamId: 'rodin-motorsport' },
          { position: 3, driverIds: ['bruce-m'], teamId: 'campos-racing' },
        ],
      }],
    },
  },
}
