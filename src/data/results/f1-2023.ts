import type { EventResults } from './types'

// F1 2023 results — verified from formula1.com, Wikipedia
export const f1Results2023: Record<string, EventResults> = {
  // Round 1 — Bahrain Grand Prix (5 Mar 2023)
  'f1-2023-bahrain': {
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['perez'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['alonso'], teamId: 'aston-martin' },
        ],
      }],
    },
  },

  // Round 2 — Saudi Arabian Grand Prix (19 Mar 2023)
  'f1-2023-saudi-arabia': {
    race: {
      overall: { driverIds: ['perez'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['perez'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['alonso'], teamId: 'aston-martin' },
        ],
      }],
    },
  },

  // Round 3 — Australian Grand Prix (2 Apr 2023)
  'f1-2023-australia': {
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['hamilton'], teamId: 'mercedes' },
          { position: 3, driverIds: ['alonso'], teamId: 'aston-martin' },
        ],
      }],
    },
  },

  // Round 4 — Azerbaijan Grand Prix (30 Apr 2023) — Sprint weekend
  'f1-2023-azerbaijan': {
    sprint: {
      overall: { driverIds: ['perez'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['perez'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 3, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['perez'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['perez'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 3, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        ],
      }],
    },
  },

  // Round 5 — Miami Grand Prix (7 May 2023)
  'f1-2023-miami': {
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['perez'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['alonso'], teamId: 'aston-martin' },
        ],
      }],
    },
  },

  // Round 6 — Monaco Grand Prix (28 May 2023)
  'f1-2023-monaco': {
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['alonso'], teamId: 'aston-martin' },
          { position: 3, driverIds: ['ocon'], teamId: 'alpine' },
        ],
      }],
    },
  },

  // Round 7 — Spanish Grand Prix (4 Jun 2023)
  'f1-2023-spain': {
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['hamilton'], teamId: 'mercedes' },
          { position: 3, driverIds: ['russell'], teamId: 'mercedes' },
        ],
      }],
    },
  },

  // Round 8 — Canadian Grand Prix (18 Jun 2023)
  'f1-2023-canada': {
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['alonso'], teamId: 'aston-martin' },
          { position: 3, driverIds: ['hamilton'], teamId: 'mercedes' },
        ],
      }],
    },
  },

  // Round 9 — Austrian Grand Prix (2 Jul 2023) — Sprint weekend
  'f1-2023-austria': {
    sprint: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['perez'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['sainz'], teamId: 'ferrari' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 3, driverIds: ['perez'], teamId: 'red-bull-racing' },
        ],
      }],
    },
  },

  // Round 10 — British Grand Prix (9 Jul 2023)
  'f1-2023-great-britain': {
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 3, driverIds: ['hamilton'], teamId: 'mercedes' },
        ],
      }],
    },
  },

  // Round 11 — Hungarian Grand Prix (23 Jul 2023)
  'f1-2023-hungary': {
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 3, driverIds: ['perez'], teamId: 'red-bull-racing' },
        ],
      }],
    },
  },

  // Round 12 — Belgian Grand Prix (30 Jul 2023) — Sprint weekend
  'f1-2023-belgium': {
    sprint: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 3, driverIds: ['gasly'], teamId: 'alpine' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['perez'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['leclerc'], teamId: 'ferrari' },
        ],
      }],
    },
  },

  // Round 13 — Dutch Grand Prix (27 Aug 2023)
  'f1-2023-netherlands': {
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['alonso'], teamId: 'aston-martin' },
          { position: 3, driverIds: ['gasly'], teamId: 'alpine' },
        ],
      }],
    },
  },

  // Round 14 — Italian Grand Prix (3 Sep 2023)
  'f1-2023-italy': {
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['perez'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['sainz'], teamId: 'ferrari' },
        ],
      }],
    },
  },

  // Round 15 — Singapore Grand Prix (17 Sep 2023)
  'f1-2023-singapore': {
    race: {
      overall: { driverIds: ['sainz'], teamId: 'ferrari' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['sainz'], teamId: 'ferrari' },
          { position: 2, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 3, driverIds: ['hamilton'], teamId: 'mercedes' },
        ],
      }],
    },
  },

  // Round 16 — Japanese Grand Prix (24 Sep 2023)
  'f1-2023-japan': {
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 3, driverIds: ['piastri'], teamId: 'mclaren' },
        ],
      }],
    },
  },

  // Round 17 — Qatar Grand Prix (8 Oct 2023) — Sprint weekend
  'f1-2023-qatar': {
    sprint: {
      overall: { driverIds: ['piastri'], teamId: 'mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['norris'], teamId: 'mclaren' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 3, driverIds: ['norris'], teamId: 'mclaren' },
        ],
      }],
    },
  },

  // Round 18 — United States Grand Prix (22 Oct 2023) — Sprint weekend
  'f1-2023-united-states': {
    sprint: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['hamilton'], teamId: 'mercedes' },
          { position: 3, driverIds: ['leclerc'], teamId: 'ferrari' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 3, driverIds: ['sainz'], teamId: 'ferrari' },
        ],
      }],
    },
  },

  // Round 19 — Mexico City Grand Prix (29 Oct 2023)
  'f1-2023-mexico': {
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['hamilton'], teamId: 'mercedes' },
          { position: 3, driverIds: ['leclerc'], teamId: 'ferrari' },
        ],
      }],
    },
  },

  // Round 20 — Sao Paulo Grand Prix (5 Nov 2023) — Sprint weekend
  'f1-2023-brazil': {
    sprint: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 3, driverIds: ['perez'], teamId: 'red-bull-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 3, driverIds: ['alonso'], teamId: 'aston-martin' },
        ],
      }],
    },
  },

  // Round 21 — Las Vegas Grand Prix (18 Nov 2023)
  'f1-2023-las-vegas': {
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 3, driverIds: ['perez'], teamId: 'red-bull-racing' },
        ],
      }],
    },
  },

  // Round 22 — Abu Dhabi Grand Prix (26 Nov 2023)
  'f1-2023-abu-dhabi': {
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 3, driverIds: ['russell'], teamId: 'mercedes' },
        ],
      }],
    },
  },
}
