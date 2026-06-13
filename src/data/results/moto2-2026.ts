import type { EventResults } from './types'

// Moto2 2026 results — Rounds 1-7 completed (Thailand through Italy at Mugello)
// Sources: crash.net, motomatters.com, motorsport.com, motogp.com
export const moto2Results2026: Record<string, EventResults> = {
  'moto2-2026-hungary': {
    qualifying: {
      overall: { driverIds: ['guevara'], teamId: 'pramac-yamaha-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['guevara'], teamId: 'pramac-yamaha-moto2' },
          { position: 2, driverIds: ['salac'], teamId: 'american-racing-moto2' },
          { position: 3, driverIds: ['agius'], teamId: 'intact-gp' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
          { position: 2, driverIds: ['salac'], teamId: 'american-racing-moto2' },
          { position: 3, driverIds: ['agius'], teamId: 'intact-gp' },
        ],
      }],
    },
  },
  'moto2-2026-thailand': {
    qualifying: {
      // Top 3 within 0.049s — Agius debut pole
      overall: { driverIds: ['agius'], teamId: 'intact-gp' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['agius'], teamId: 'intact-gp' },
          { position: 2, driverIds: ['guevara'], teamId: 'pramac-yamaha-moto2' },
          { position: 3, driverIds: ['holgado'], teamId: 'aspar-moto2' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
          { position: 2, driverIds: ['guevara'], teamId: 'pramac-yamaha-moto2' },
          { position: 3, driverIds: ['holgado'], teamId: 'aspar-moto2' },
        ],
      }],
    },
  },
  'moto2-2026-brazil': {
    qualifying: {
      // Sunday qualifying after Saturday sinkhole; Holgado lap record
      overall: { driverIds: ['holgado'], teamId: 'aspar-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['holgado'], teamId: 'aspar-moto2' },
          { position: 2, driverIds: ['alonso-d'], teamId: 'aspar-moto2' },
          { position: 3, driverIds: ['escrig'], teamId: 'klint-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['holgado'], teamId: 'aspar-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['holgado'], teamId: 'aspar-moto2' },
          { position: 2, driverIds: ['munoz-d'], teamId: 'italtrans-racing' },
          { position: 3, driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
        ],
      }],
    },
  },
  'moto2-2026-usa': {
    qualifying: {
      // Baltus inherited pole after Alonso tyre pressure penalty
      overall: { driverIds: ['baltus'], teamId: 'fantic-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['baltus'], teamId: 'fantic-racing' },
          { position: 2, driverIds: ['alonso-d'], teamId: 'aspar-moto2' },
          { position: 3, driverIds: ['lopez-a'], teamId: 'gresini-moto2' },
        ],
      }],
    },
    race: {
      // Red-flagged race, restarted at 10 laps
      overall: { driverIds: ['agius'], teamId: 'intact-gp' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['agius'], teamId: 'intact-gp' },
          { position: 2, driverIds: ['vietti'], teamId: 'speedrs-team' },
          { position: 3, driverIds: ['guevara'], teamId: 'pramac-yamaha-moto2' },
        ],
      }],
    },
  },
  'moto2-2026-spain': {
    qualifying: {
      // Veijer first Moto2 pole — first Dutch intermediate pole since 1991
      overall: { driverIds: ['veijer'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['veijer'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['escrig'], teamId: 'klint-racing' },
          { position: 3, driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['agius'], teamId: 'intact-gp' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['agius'], teamId: 'intact-gp' },
          { position: 2, driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
          { position: 3, driverIds: ['veijer'], teamId: 'red-bull-ktm-ajo' },
        ],
      }],
    },
  },
  'moto2-2026-france': {
    qualifying: {
      // Guevara debut Moto2 pole and all-time lap record
      overall: { driverIds: ['guevara'], teamId: 'pramac-yamaha-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['guevara'], teamId: 'pramac-yamaha-moto2' },
          { position: 2, driverIds: ['holgado'], teamId: 'aspar-moto2' },
          { position: 3, driverIds: ['salac'], teamId: 'american-racing-moto2' },
        ],
      }],
    },
    race: {
      // Red flag shortened race to 9 laps
      overall: { driverIds: ['guevara'], teamId: 'pramac-yamaha-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['guevara'], teamId: 'pramac-yamaha-moto2' },
          { position: 2, driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
          { position: 3, driverIds: ['ortola'], teamId: 'qjmotor-msi' },
        ],
      }],
    },
  },
  'moto2-2026-catalunya': {
    qualifying: {
      // Vietti all-time lap record 1:41.076 — first pole since 2024 Austria
      overall: { driverIds: ['vietti'], teamId: 'speedrs-team' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vietti'], teamId: 'speedrs-team' },
          { position: 2, driverIds: ['veijer'], teamId: 'red-bull-ktm-ajo' },
          { position: 3, driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
          { position: 2, driverIds: ['vietti'], teamId: 'speedrs-team' },
          { position: 3, driverIds: ['guevara'], teamId: 'pramac-yamaha-moto2' },
        ],
      }],
    },
  },
  'moto2-2026-italy': {
    qualifying: {
      // González took pole with all-time lap record
      overall: { driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
          { position: 2, driverIds: ['salac'], teamId: 'american-racing-moto2' },
          { position: 3, driverIds: ['escrig'], teamId: 'klint-racing' },
        ],
      }],
    },
    race: {
      // González dominated; Vietti recovered from 16th to 2nd; Holgado pipped Agius on final lap
      overall: { driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
          { position: 2, driverIds: ['vietti'], teamId: 'speedrs-team' },
          { position: 3, driverIds: ['holgado'], teamId: 'aspar-moto2' },
        ],
      }],
    },
  },
}
