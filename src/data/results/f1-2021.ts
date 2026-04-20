import type { EventResults } from './types'

// F1 2021 results — verified from formula1.com, gpracingstats.com, Wikipedia
// Champion: Max Verstappen (Red Bull) — 395.5 pts, 10 wins
export const f1Results2021: Record<string, EventResults> = {
  'f1-2021-bahrain': {
    qualifying: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['hamilton'], teamId: 'mercedes' },
          { position: 3, driverIds: ['bottas'], teamId: 'mercedes' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['hamilton'], teamId: 'mercedes' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['hamilton'], teamId: 'mercedes' },
          { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['bottas'], teamId: 'mercedes' },
        ],
      }],
      fastestLapDriverId: 'bottas',
    },
  },
  'f1-2021-emilia-romagna': {
    qualifying: {
      overall: { driverIds: ['hamilton'], teamId: 'mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hamilton'], teamId: 'mercedes' },
          { position: 2, driverIds: ['perez'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['hamilton'], teamId: 'mercedes' },
          { position: 3, driverIds: ['norris'], teamId: 'mclaren' },
        ],
      }],
      fastestLapDriverId: 'hamilton',
    },
  },
  'f1-2021-portugal': {
    qualifying: {
      overall: { driverIds: ['bottas'], teamId: 'mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bottas'], teamId: 'mercedes' },
          { position: 2, driverIds: ['hamilton'], teamId: 'mercedes' },
          { position: 3, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['hamilton'], teamId: 'mercedes' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['hamilton'], teamId: 'mercedes' },
          { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['bottas'], teamId: 'mercedes' },
        ],
      }],
      fastestLapDriverId: 'bottas',
    },
  },
  'f1-2021-spain': {
    qualifying: {
      overall: { driverIds: ['hamilton'], teamId: 'mercedes' },
      classes: [{ className: 'Top 3', podium: [
        { position: 1, driverIds: ['hamilton'], teamId: 'mercedes' },
        { position: 2, driverIds: ['bottas'], teamId: 'mercedes' },
        { position: 3, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      ] }],
    },
    race: {
      overall: { driverIds: ['hamilton'], teamId: 'mercedes' },
      classes: [{ className: 'Classification', podium: [
        { position: 1, driverIds: ['hamilton'], teamId: 'mercedes' },
        { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        { position: 3, driverIds: ['bottas'], teamId: 'mercedes' },
      ] }],
    },
  },
  'f1-2021-monaco': {
    qualifying: {
      overall: { driverIds: ['leclerc'], teamId: 'ferrari' },
      classes: [{ className: 'Top 3', podium: [
        { position: 1, driverIds: ['leclerc'], teamId: 'ferrari' },
        { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        { position: 3, driverIds: ['bottas'], teamId: 'mercedes' },
      ] }],
    },
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{ className: 'Classification', podium: [
        { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        { position: 2, driverIds: ['sainz'], teamId: 'ferrari' },
        { position: 3, driverIds: ['norris'], teamId: 'mclaren' },
      ] }],
    },
  },
  'f1-2021-azerbaijan': {
    qualifying: {
      overall: { driverIds: ['leclerc'], teamId: 'ferrari' },
      classes: [{ className: 'Top 3', podium: [
        { position: 1, driverIds: ['leclerc'], teamId: 'ferrari' },
        { position: 2, driverIds: ['hamilton'], teamId: 'mercedes' },
        { position: 3, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      ] }],
    },
    race: {
      overall: { driverIds: ['perez'], teamId: 'red-bull-racing' },
      classes: [{ className: 'Classification', podium: [
        { position: 1, driverIds: ['perez'], teamId: 'red-bull-racing' },
        { position: 2, driverIds: ['vettel'], teamId: 'aston-martin' },
        { position: 3, driverIds: ['gasly'], teamId: 'alphatauri' },
      ] }],
    },
  },
  'f1-2021-france': {
    qualifying: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{ className: 'Top 3', podium: [
        { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        { position: 2, driverIds: ['hamilton'], teamId: 'mercedes' },
        { position: 3, driverIds: ['bottas'], teamId: 'mercedes' },
      ] }],
    },
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{ className: 'Classification', podium: [
        { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        { position: 2, driverIds: ['hamilton'], teamId: 'mercedes' },
        { position: 3, driverIds: ['perez'], teamId: 'red-bull-racing' },
      ] }],
      fastestLapDriverId: 'bottas',
    },
  },
  'f1-2021-styria': {
    qualifying: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{ className: 'Top 3', podium: [
        { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        { position: 2, driverIds: ['hamilton'], teamId: 'mercedes' },
        { position: 3, driverIds: ['bottas'], teamId: 'mercedes' },
      ] }],
    },
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{ className: 'Classification', podium: [
        { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        { position: 2, driverIds: ['hamilton'], teamId: 'mercedes' },
        { position: 3, driverIds: ['bottas'], teamId: 'mercedes' },
      ] }],
      fastestLapDriverId: 'verstappen',
    },
  },
  'f1-2021-austria': {
    qualifying: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{ className: 'Top 3', podium: [
        { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        { position: 2, driverIds: ['norris'], teamId: 'mclaren' },
        { position: 3, driverIds: ['perez'], teamId: 'red-bull-racing' },
      ] }],
    },
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{ className: 'Classification', podium: [
        { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        { position: 2, driverIds: ['bottas'], teamId: 'mercedes' },
        { position: 3, driverIds: ['norris'], teamId: 'mclaren' },
      ] }],
      fastestLapDriverId: 'verstappen',
    },
  },
  'f1-2021-great-britain': {
    qualifying: {
      overall: { driverIds: ['hamilton'], teamId: 'mercedes' },
      classes: [{ className: 'Top 3', podium: [
        { position: 1, driverIds: ['hamilton'], teamId: 'mercedes' },
        { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        { position: 3, driverIds: ['bottas'], teamId: 'mercedes' },
      ] }],
    },
    sprint: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{ className: 'Top 3', podium: [
        { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        { position: 2, driverIds: ['hamilton'], teamId: 'mercedes' },
        { position: 3, driverIds: ['bottas'], teamId: 'mercedes' },
      ] }],
    },
    race: {
      overall: { driverIds: ['hamilton'], teamId: 'mercedes' },
      classes: [{ className: 'Classification', podium: [
        { position: 1, driverIds: ['hamilton'], teamId: 'mercedes' },
        { position: 2, driverIds: ['leclerc'], teamId: 'ferrari' },
        { position: 3, driverIds: ['bottas'], teamId: 'mercedes' },
      ] }],
    },
  },
  'f1-2021-hungary': {
    qualifying: {
      overall: { driverIds: ['hamilton'], teamId: 'mercedes' },
      classes: [{ className: 'Top 3', podium: [
        { position: 1, driverIds: ['hamilton'], teamId: 'mercedes' },
        { position: 2, driverIds: ['bottas'], teamId: 'mercedes' },
        { position: 3, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      ] }],
    },
    race: {
      overall: { driverIds: ['ocon'], teamId: 'alpine' },
      classes: [{ className: 'Classification', podium: [
        { position: 1, driverIds: ['ocon'], teamId: 'alpine' },
        { position: 2, driverIds: ['hamilton'], teamId: 'mercedes' },
        { position: 3, driverIds: ['sainz'], teamId: 'ferrari' },
      ] }],
    },
  },
  'f1-2021-belgium': {
    qualifying: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{ className: 'Top 3', podium: [
        { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        { position: 2, driverIds: ['russell'], teamId: 'williams' },
        { position: 3, driverIds: ['hamilton'], teamId: 'mercedes' },
      ] }],
    },
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{ className: 'Classification', podium: [
        { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        { position: 2, driverIds: ['russell'], teamId: 'williams' },
        { position: 3, driverIds: ['hamilton'], teamId: 'mercedes' },
      ] }],
    },
  },
  'f1-2021-netherlands': {
    qualifying: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{ className: 'Top 3', podium: [
        { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        { position: 2, driverIds: ['hamilton'], teamId: 'mercedes' },
        { position: 3, driverIds: ['bottas'], teamId: 'mercedes' },
      ] }],
    },
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{ className: 'Classification', podium: [
        { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        { position: 2, driverIds: ['hamilton'], teamId: 'mercedes' },
        { position: 3, driverIds: ['bottas'], teamId: 'mercedes' },
      ] }],
      fastestLapDriverId: 'hamilton',
    },
  },
  'f1-2021-italy': {
    qualifying: {
      overall: { driverIds: ['bottas'], teamId: 'mercedes' },
      classes: [{ className: 'Top 3', podium: [
        { position: 1, driverIds: ['bottas'], teamId: 'mercedes' },
        { position: 2, driverIds: ['hamilton'], teamId: 'mercedes' },
        { position: 3, driverIds: ['norris'], teamId: 'mclaren' },
      ] }],
    },
    sprint: {
      overall: { driverIds: ['bottas'], teamId: 'mercedes' },
      classes: [{ className: 'Top 3', podium: [
        { position: 1, driverIds: ['bottas'], teamId: 'mercedes' },
        { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        { position: 3, driverIds: ['ricciardo'], teamId: 'mclaren' },
      ] }],
    },
    race: {
      overall: { driverIds: ['ricciardo'], teamId: 'mclaren' },
      classes: [{ className: 'Classification', podium: [
        { position: 1, driverIds: ['ricciardo'], teamId: 'mclaren' },
        { position: 2, driverIds: ['norris'], teamId: 'mclaren' },
        { position: 3, driverIds: ['bottas'], teamId: 'mercedes' },
      ] }],
      fastestLapDriverId: 'ricciardo',
    },
  },
  'f1-2021-russia': {
    qualifying: {
      overall: { driverIds: ['norris'], teamId: 'mclaren' },
      classes: [{ className: 'Top 3', podium: [
        { position: 1, driverIds: ['norris'], teamId: 'mclaren' },
        { position: 2, driverIds: ['sainz'], teamId: 'ferrari' },
        { position: 3, driverIds: ['russell'], teamId: 'williams' },
      ] }],
    },
    race: {
      overall: { driverIds: ['hamilton'], teamId: 'mercedes' },
      classes: [{ className: 'Classification', podium: [
        { position: 1, driverIds: ['hamilton'], teamId: 'mercedes' },
        { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        { position: 3, driverIds: ['sainz'], teamId: 'ferrari' },
      ] }],
      fastestLapDriverId: 'norris',
    },
  },
  'f1-2021-turkey': {
    qualifying: {
      overall: { driverIds: ['bottas'], teamId: 'mercedes' },
      classes: [{ className: 'Top 3', podium: [
        { position: 1, driverIds: ['bottas'], teamId: 'mercedes' },
        { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        { position: 3, driverIds: ['leclerc'], teamId: 'ferrari' },
      ] }],
    },
    race: {
      overall: { driverIds: ['bottas'], teamId: 'mercedes' },
      classes: [{ className: 'Classification', podium: [
        { position: 1, driverIds: ['bottas'], teamId: 'mercedes' },
        { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        { position: 3, driverIds: ['perez'], teamId: 'red-bull-racing' },
      ] }],
      fastestLapDriverId: 'bottas',
    },
  },
  'f1-2021-united-states': {
    qualifying: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{ className: 'Top 3', podium: [
        { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        { position: 2, driverIds: ['hamilton'], teamId: 'mercedes' },
        { position: 3, driverIds: ['perez'], teamId: 'red-bull-racing' },
      ] }],
    },
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{ className: 'Classification', podium: [
        { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        { position: 2, driverIds: ['hamilton'], teamId: 'mercedes' },
        { position: 3, driverIds: ['perez'], teamId: 'red-bull-racing' },
      ] }],
      fastestLapDriverId: 'hamilton',
    },
  },
  'f1-2021-mexico': {
    qualifying: {
      overall: { driverIds: ['bottas'], teamId: 'mercedes' },
      classes: [{ className: 'Top 3', podium: [
        { position: 1, driverIds: ['bottas'], teamId: 'mercedes' },
        { position: 2, driverIds: ['hamilton'], teamId: 'mercedes' },
        { position: 3, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      ] }],
    },
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{ className: 'Classification', podium: [
        { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        { position: 2, driverIds: ['hamilton'], teamId: 'mercedes' },
        { position: 3, driverIds: ['perez'], teamId: 'red-bull-racing' },
      ] }],
      fastestLapDriverId: 'bottas',
    },
  },
  'f1-2021-sao-paulo': {
    qualifying: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{ className: 'Top 3', podium: [
        { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        { position: 2, driverIds: ['bottas'], teamId: 'mercedes' },
        { position: 3, driverIds: ['perez'], teamId: 'red-bull-racing' },
      ] }],
    },
    sprint: {
      overall: { driverIds: ['bottas'], teamId: 'mercedes' },
      classes: [{ className: 'Top 3', podium: [
        { position: 1, driverIds: ['bottas'], teamId: 'mercedes' },
        { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        { position: 3, driverIds: ['sainz'], teamId: 'ferrari' },
      ] }],
    },
    race: {
      overall: { driverIds: ['hamilton'], teamId: 'mercedes' },
      classes: [{ className: 'Classification', podium: [
        { position: 1, driverIds: ['hamilton'], teamId: 'mercedes' },
        { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        { position: 3, driverIds: ['bottas'], teamId: 'mercedes' },
      ] }],
      fastestLapDriverId: 'perez',
    },
  },
  'f1-2021-qatar': {
    qualifying: {
      overall: { driverIds: ['hamilton'], teamId: 'mercedes' },
      classes: [{ className: 'Top 3', podium: [
        { position: 1, driverIds: ['hamilton'], teamId: 'mercedes' },
        { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        { position: 3, driverIds: ['bottas'], teamId: 'mercedes' },
      ] }],
    },
    race: {
      overall: { driverIds: ['hamilton'], teamId: 'mercedes' },
      classes: [{ className: 'Classification', podium: [
        { position: 1, driverIds: ['hamilton'], teamId: 'mercedes' },
        { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        { position: 3, driverIds: ['alonso'], teamId: 'alpine' },
      ] }],
      fastestLapDriverId: 'verstappen',
    },
  },
  'f1-2021-saudi-arabia': {
    qualifying: {
      overall: { driverIds: ['hamilton'], teamId: 'mercedes' },
      classes: [{ className: 'Top 3', podium: [
        { position: 1, driverIds: ['hamilton'], teamId: 'mercedes' },
        { position: 2, driverIds: ['bottas'], teamId: 'mercedes' },
        { position: 3, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      ] }],
    },
    race: {
      overall: { driverIds: ['hamilton'], teamId: 'mercedes' },
      classes: [{ className: 'Classification', podium: [
        { position: 1, driverIds: ['hamilton'], teamId: 'mercedes' },
        { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        { position: 3, driverIds: ['bottas'], teamId: 'mercedes' },
      ] }],
    },
  },
  'f1-2021-abu-dhabi': {
    qualifying: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{ className: 'Top 3', podium: [
        { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        { position: 2, driverIds: ['hamilton'], teamId: 'mercedes' },
        { position: 3, driverIds: ['norris'], teamId: 'mclaren' },
      ] }],
    },
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{ className: 'Classification', podium: [
        { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        { position: 2, driverIds: ['hamilton'], teamId: 'mercedes' },
        { position: 3, driverIds: ['sainz'], teamId: 'ferrari' },
      ] }],
    },
  },
}
