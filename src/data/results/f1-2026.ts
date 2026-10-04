import type { EventResults } from './types'

// F1 2026 results — verified from formula1.com, skysports.com
export const f1Results2026: Record<string, EventResults> = {
  'f1-2026-monaco': {
    qualifying: {
      overall: { driverIds: ['antonelli'], teamId: 'mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['antonelli'], teamId: 'mercedes' },
          { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['hamilton'], teamId: 'ferrari' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['antonelli'], teamId: 'mercedes' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['antonelli'], teamId: 'mercedes' },
          { position: 2, driverIds: ['hamilton'], teamId: 'ferrari' },
          { position: 3, driverIds: ['gasly'], teamId: 'alpine' },
        ],
      }],
      fastestLapDriverId: 'antonelli',
    },
  },
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
  'f1-2026-miami': {
    sprint_qualifying: {
      overall: { driverIds: ['norris'], teamId: 'mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 2, driverIds: ['antonelli'], teamId: 'mercedes' },
          { position: 3, driverIds: ['piastri'], teamId: 'mclaren' },
        ],
      }],
    },
    sprint: {
      overall: { driverIds: ['norris'], teamId: 'mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 2, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 3, driverIds: ['leclerc'], teamId: 'ferrari' },
        ],
      }],
    },
    qualifying: {
      overall: { driverIds: ['antonelli'], teamId: 'mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['antonelli'], teamId: 'mercedes' },
          { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['leclerc'], teamId: 'ferrari' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['antonelli'], teamId: 'mercedes' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['antonelli'], teamId: 'mercedes' },
          { position: 2, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 3, driverIds: ['piastri'], teamId: 'mclaren' },
        ],
      }],
      fastestLapDriverId: 'norris',
    },
  },
  'f1-2026-canada': {
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
    sprint: {
      overall: { driverIds: ['russell'], teamId: 'mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 2, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 3, driverIds: ['antonelli'], teamId: 'mercedes' },
        ],
      }],
    },
    qualifying: {
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
          { position: 2, driverIds: ['hamilton'], teamId: 'ferrari' },
          { position: 3, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        ],
      }],
      fastestLapDriverId: 'antonelli',
    },
  },
  'f1-2026-spain-barcelona': {
    qualifying: {
      overall: { driverIds: ['russell'], teamId: 'mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 2, driverIds: ['hamilton'], teamId: 'ferrari' },
          { position: 3, driverIds: ['antonelli'], teamId: 'mercedes' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['hamilton'], teamId: 'ferrari' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['hamilton'], teamId: 'ferrari' },
          { position: 2, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 3, driverIds: ['norris'], teamId: 'mclaren' },
        ],
      }],
      fastestLapDriverId: 'hamilton',
    },
  },
  'f1-2026-austria': {
    qualifying: {
      overall: { driverIds: ['russell'], teamId: 'mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 2, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 3, driverIds: ['hamilton'], teamId: 'ferrari' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['russell'], teamId: 'mercedes' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['antonelli'], teamId: 'mercedes' },
        ],
      }],
      fastestLapDriverId: 'antonelli',
    },
  },
  'f1-2026-great-britain': {
    sprint_qualifying: {
      overall: { driverIds: ['hamilton'], teamId: 'ferrari' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hamilton'], teamId: 'ferrari' },
          { position: 2, driverIds: ['antonelli'], teamId: 'mercedes' },
          { position: 3, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        ],
      }],
    },
    qualifying: {
      overall: { driverIds: ['antonelli'], teamId: 'mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['antonelli'], teamId: 'mercedes' },
          { position: 2, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 3, driverIds: ['hamilton'], teamId: 'ferrari' },
        ],
      }],
    },
    sprint: {
      overall: { driverIds: ['antonelli'], teamId: 'mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['antonelli'], teamId: 'mercedes' },
          { position: 2, driverIds: ['hamilton'], teamId: 'ferrari' },
          { position: 3, driverIds: ['norris'], teamId: 'mclaren' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['leclerc'], teamId: 'ferrari' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 2, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 3, driverIds: ['hamilton'], teamId: 'ferrari' },
        ],
      }],
      fastestLapDriverId: 'antonelli',
    },
  },
  'f1-2026-belgium': {
    qualifying: {
      overall: { driverIds: ['antonelli'], teamId: 'mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['antonelli'], teamId: 'mercedes' },
          { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
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
          { position: 2, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 3, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        ],
      }],
      fastestLapDriverId: 'norris',
    },
  },
  'f1-2026-hungary': {
    qualifying: {
      overall: { driverIds: ['norris'], teamId: 'mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 2, driverIds: ['hamilton'], teamId: 'ferrari' },
          { position: 3, driverIds: ['leclerc'], teamId: 'ferrari' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['norris'], teamId: 'mclaren' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['antonelli'], teamId: 'mercedes' },
        ],
      }],
      fastestLapDriverId: 'leclerc',
    },
  },
  'f1-2026-netherlands': {
    sprint_qualifying: {
      overall: { driverIds: ['russell'], teamId: 'mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 2, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 3, driverIds: ['leclerc'], teamId: 'ferrari' },
        ],
      }],
    },
    qualifying: {
      overall: { driverIds: ['norris'], teamId: 'mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 2, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 3, driverIds: ['antonelli'], teamId: 'mercedes' },
        ],
      }],
    },
    sprint: {
      overall: { driverIds: ['russell'], teamId: 'mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 2, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 3, driverIds: ['norris'], teamId: 'mclaren' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['norris'], teamId: 'mclaren' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 2, driverIds: ['antonelli'], teamId: 'mercedes' },
          { position: 3, driverIds: ['russell'], teamId: 'mercedes' },
        ],
      }],
      fastestLapDriverId: 'leclerc',
    },
  },
  'f1-2026-italy': {
    qualifying: {
      overall: { driverIds: ['gasly'], teamId: 'alpine' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gasly'], teamId: 'alpine' },
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
          { position: 2, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 3, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        ],
      }],
      fastestLapDriverId: 'antonelli',
    },
  },
  'f1-2026-spain-madrid': {
    qualifying: {
      overall: { driverIds: ['norris'], teamId: 'mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 2, driverIds: ['antonelli'], teamId: 'mercedes' },
          { position: 3, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['antonelli'], teamId: 'mercedes' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['antonelli'], teamId: 'mercedes' },
          { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['norris'], teamId: 'mclaren' },
        ],
      }],
      fastestLapDriverId: 'russell',
    },
  },
  'f1-2026-azerbaijan': {
    qualifying: {
      overall: { driverIds: ['russell'], teamId: 'mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 2, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 3, driverIds: ['piastri'], teamId: 'mclaren' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['russell'], teamId: 'mercedes' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['hadjar'], teamId: 'red-bull-racing' },
        ],
      }],
      fastestLapDriverId: 'russell',
    },
  },
  'f1-2026-bahrain': {
    qualifying: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['hamilton'], teamId: 'ferrari' },
          { position: 3, driverIds: ['hadjar'], teamId: 'red-bull-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['antonelli'], teamId: 'mercedes' },
          { position: 3, driverIds: ['hamilton'], teamId: 'ferrari' },
        ],
      }],
      fastestLapDriverId: 'verstappen',
    },
  },
}
