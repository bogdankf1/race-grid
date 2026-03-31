import type { EventResults } from './types'

// F1 2026 results — verified from formula1.com, skysports.com
export const f1Results2026: Record<string, EventResults> = {
  'f1-2026-australia': {
    qualifying: {
      overall: { driverIds: ['russell'], teamId: 'mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 2, driverIds: ['antonelli'], teamId: 'mercedes' },
          { position: 3, driverIds: ['hadjar'], teamId: 'red-bull-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['russell'], teamId: 'mercedes' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 2, driverIds: ['antonelli'], teamId: 'mercedes' },
          { position: 3, driverIds: ['leclerc'], teamId: 'ferrari' },
        ],
      }],
      fastestLapDriverId: 'russell',
    },
  },
  'f1-2026-china': {
    sprint_qualifying: {
      overall: { driverIds: ['russell'], teamId: 'mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 2, driverIds: ['antonelli'], teamId: 'mercedes' },
          { position: 3, driverIds: ['norris'], teamId: 'mclaren' },
        ],
      }],
    },
    qualifying: {
      overall: { driverIds: ['antonelli'], teamId: 'mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['antonelli'], teamId: 'mercedes' },
          { position: 2, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 3, driverIds: ['hamilton'], teamId: 'ferrari' },
        ],
      }],
    },
    sprint: {
      overall: { driverIds: ['russell'], teamId: 'mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 2, driverIds: ['antonelli'], teamId: 'mercedes' },
          { position: 3, driverIds: ['norris'], teamId: 'mclaren' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['antonelli'], teamId: 'mercedes' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['antonelli'], teamId: 'mercedes' },
          { position: 2, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 3, driverIds: ['hamilton'], teamId: 'ferrari' },
        ],
      }],
    },
  },
  'f1-2026-japan': {
    qualifying: {
      overall: { driverIds: ['antonelli'], teamId: 'mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['antonelli'], teamId: 'mercedes' },
          { position: 2, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 3, driverIds: ['piastri'], teamId: 'mclaren' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['antonelli'], teamId: 'mercedes' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['antonelli'], teamId: 'mercedes' },
          { position: 2, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 3, driverIds: ['leclerc'], teamId: 'ferrari' },
        ],
      }],
      fastestLapDriverId: 'antonelli',
    },
  },
}
