import type { EventResults } from './types'

// MotoGP 2026 results — Rounds 1-3 completed
// Standings: Bezzecchi 81, Martín 77, Acosta 60, Di Giannantonio 50, Márquez 45
export const motogpResults2026: Record<string, EventResults> = {
  'motogp-2026-thailand': {
    qualifying: {
      overall: { driverIds: ['martin-j'], teamId: 'aprilia-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['martin-j'], teamId: 'aprilia-racing' },
          { position: 2, driverIds: ['bezzecchi'], teamId: 'aprilia-racing' },
          { position: 3, driverIds: ['acosta'], teamId: 'red-bull-ktm' },
        ],
      }],
    },
    sprint: {
      overall: { driverIds: ['bezzecchi'], teamId: 'aprilia-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bezzecchi'], teamId: 'aprilia-racing' },
          { position: 2, driverIds: ['martin-j'], teamId: 'aprilia-racing' },
          { position: 3, driverIds: ['acosta'], teamId: 'red-bull-ktm' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['bezzecchi'], teamId: 'aprilia-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['bezzecchi'], teamId: 'aprilia-racing' },
          { position: 2, driverIds: ['martin-j'], teamId: 'aprilia-racing' },
          { position: 3, driverIds: ['di-giannantonio'], teamId: 'vr46-racing' },
        ],
      }],
      fastestLapDriverId: 'bezzecchi',
    },
  },
  'motogp-2026-brazil': {
    qualifying: {
      overall: { driverIds: ['bezzecchi'], teamId: 'aprilia-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bezzecchi'], teamId: 'aprilia-racing' },
          { position: 2, driverIds: ['acosta'], teamId: 'red-bull-ktm' },
          { position: 3, driverIds: ['marquez-m'], teamId: 'ducati-lenovo' },
        ],
      }],
    },
    sprint: {
      overall: { driverIds: ['martin-j'], teamId: 'aprilia-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['martin-j'], teamId: 'aprilia-racing' },
          { position: 2, driverIds: ['bezzecchi'], teamId: 'aprilia-racing' },
          { position: 3, driverIds: ['marquez-m'], teamId: 'ducati-lenovo' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['martin-j'], teamId: 'aprilia-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['martin-j'], teamId: 'aprilia-racing' },
          { position: 2, driverIds: ['acosta'], teamId: 'red-bull-ktm' },
          { position: 3, driverIds: ['di-giannantonio'], teamId: 'vr46-racing' },
        ],
      }],
      fastestLapDriverId: 'martin-j',
    },
  },
  'motogp-2026-spain': {
    qualifying: {
      overall: { driverIds: ['marquez-m'], teamId: 'ducati-lenovo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['marquez-m'], teamId: 'ducati-lenovo' },
          { position: 2, driverIds: ['zarco'], teamId: 'lcr-honda' },
          { position: 3, driverIds: ['di-giannantonio'], teamId: 'vr46-racing' },
        ],
      }],
    },
    sprint: {
      overall: { driverIds: ['marquez-m'], teamId: 'ducati-lenovo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['marquez-m'], teamId: 'ducati-lenovo' },
          { position: 2, driverIds: ['bezzecchi'], teamId: 'aprilia-racing' },
          { position: 3, driverIds: ['morbidelli'], teamId: 'aprilia-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['marquez-a'], teamId: 'gresini-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['marquez-a'], teamId: 'gresini-racing' },
          { position: 2, driverIds: ['bezzecchi'], teamId: 'aprilia-racing' },
          { position: 3, driverIds: ['di-giannantonio'], teamId: 'vr46-racing' },
        ],
      }],
    },
  },
  'motogp-2026-usa': {
    qualifying: {
      overall: { driverIds: ['acosta'], teamId: 'red-bull-ktm' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['acosta'], teamId: 'red-bull-ktm' },
          { position: 2, driverIds: ['marquez-m'], teamId: 'ducati-lenovo' },
          { position: 3, driverIds: ['bezzecchi'], teamId: 'aprilia-racing' },
        ],
      }],
    },
    sprint: {
      overall: { driverIds: ['bezzecchi'], teamId: 'aprilia-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bezzecchi'], teamId: 'aprilia-racing' },
          { position: 2, driverIds: ['marquez-m'], teamId: 'ducati-lenovo' },
          { position: 3, driverIds: ['fernandez-r'], teamId: 'trackhouse-motogp' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['bezzecchi'], teamId: 'aprilia-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['bezzecchi'], teamId: 'aprilia-racing' },
          { position: 2, driverIds: ['martin-j'], teamId: 'aprilia-racing' },
          { position: 3, driverIds: ['marquez-m'], teamId: 'ducati-lenovo' },
        ],
      }],
      fastestLapDriverId: 'acosta',
    },
  },
  'motogp-2026-france': {
    qualifying: {
      overall: { driverIds: ['bagnaia'], teamId: 'ducati-lenovo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bagnaia'], teamId: 'ducati-lenovo' },
          { position: 2, driverIds: ['marquez-m'], teamId: 'ducati-lenovo' },
          { position: 3, driverIds: ['bezzecchi'], teamId: 'aprilia-racing' },
        ],
      }],
    },
    sprint: {
      overall: { driverIds: ['martin-j'], teamId: 'aprilia-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['martin-j'], teamId: 'aprilia-racing' },
          { position: 2, driverIds: ['bagnaia'], teamId: 'ducati-lenovo' },
          { position: 3, driverIds: ['bezzecchi'], teamId: 'aprilia-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['martin-j'], teamId: 'aprilia-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['martin-j'], teamId: 'aprilia-racing' },
          { position: 2, driverIds: ['bezzecchi'], teamId: 'aprilia-racing' },
          { position: 3, driverIds: ['ogura'], teamId: 'trackhouse-motogp' },
        ],
      }],
    },
  },
  'motogp-2026-catalunya': {
    qualifying: {
      overall: { driverIds: ['acosta'], teamId: 'red-bull-ktm' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['acosta'], teamId: 'red-bull-ktm' },
          { position: 2, driverIds: ['morbidelli'], teamId: 'vr46-racing' },
          { position: 3, driverIds: ['marquez-a'], teamId: 'gresini-racing' },
        ],
      }],
    },
    sprint: {
      overall: { driverIds: ['marquez-a'], teamId: 'gresini-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['marquez-a'], teamId: 'gresini-racing' },
          { position: 2, driverIds: ['acosta'], teamId: 'red-bull-ktm' },
          { position: 3, driverIds: ['di-giannantonio'], teamId: 'vr46-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['di-giannantonio'], teamId: 'vr46-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['di-giannantonio'], teamId: 'vr46-racing' },
          { position: 2, driverIds: ['aldeguer'], teamId: 'gresini-racing' },
          { position: 3, driverIds: ['bagnaia'], teamId: 'ducati-lenovo' },
        ],
      }],
    },
  },
}
