import type { EventResults } from './types'

// F1 2024 results — verified from formula1.com
export const f1Results2024: Record<string, EventResults> = {
  // Round 1 — Bahrain Grand Prix (2 Mar 2024)
  'f1-2024-bahrain': {
    qualifying: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 3, driverIds: ['russell'], teamId: 'mercedes' },
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
          { position: 3, driverIds: ['sainz'], teamId: 'ferrari' },
        ],
      }],
      fastestLapDriverId: 'verstappen',
    },
  },

  // Round 2 — Saudi Arabian Grand Prix (9 Mar 2024)
  'f1-2024-saudi-arabia': {
    qualifying: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['leclerc'], teamId: 'ferrari' },
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
          { position: 2, driverIds: ['perez'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['leclerc'], teamId: 'ferrari' },
        ],
      }],
      fastestLapDriverId: 'leclerc',
    },
  },

  // Round 3 — Australian Grand Prix (24 Mar 2024)
  'f1-2024-australia': {
    qualifying: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['sainz'], teamId: 'ferrari' },
          { position: 3, driverIds: ['norris'], teamId: 'mclaren' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['sainz'], teamId: 'ferrari' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['sainz'], teamId: 'ferrari' },
          { position: 2, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 3, driverIds: ['norris'], teamId: 'mclaren' },
        ],
      }],
      fastestLapDriverId: 'leclerc',
    },
  },

  // Round 4 — Japanese Grand Prix (7 Apr 2024)
  'f1-2024-japan': {
    qualifying: {
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
          { position: 2, driverIds: ['perez'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['sainz'], teamId: 'ferrari' },
        ],
      }],
      fastestLapDriverId: 'verstappen',
    },
  },

  // Round 5 — Chinese Grand Prix (21 Apr 2024) — Sprint
  'f1-2024-china': {
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
    qualifying: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['perez'], teamId: 'red-bull-racing' },
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
          { position: 2, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 3, driverIds: ['perez'], teamId: 'red-bull-racing' },
        ],
      }],
      fastestLapDriverId: 'sainz',
    },
  },

  // Round 6 — Miami Grand Prix (5 May 2024) — Sprint
  'f1-2024-miami': {
    sprint: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 3, driverIds: ['perez'], teamId: 'red-bull-racing' },
        ],
      }],
    },
    qualifying: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
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
          { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['leclerc'], teamId: 'ferrari' },
        ],
      }],
      fastestLapDriverId: 'piastri',
    },
  },

  // Round 7 — Emilia Romagna Grand Prix (19 May 2024)
  'f1-2024-emilia-romagna': {
    qualifying: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['piastri'], teamId: 'mclaren' },
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
          { position: 2, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 3, driverIds: ['leclerc'], teamId: 'ferrari' },
        ],
      }],
      fastestLapDriverId: 'verstappen',
    },
  },

  // Round 8 — Monaco Grand Prix (26 May 2024)
  'f1-2024-monaco': {
    qualifying: {
      overall: { driverIds: ['leclerc'], teamId: 'ferrari' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 2, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 3, driverIds: ['sainz'], teamId: 'ferrari' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['leclerc'], teamId: 'ferrari' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 2, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 3, driverIds: ['sainz'], teamId: 'ferrari' },
        ],
      }],
      fastestLapDriverId: 'hamilton',
    },
  },

  // Round 9 — Canadian Grand Prix (9 Jun 2024)
  'f1-2024-canada': {
    qualifying: {
      overall: { driverIds: ['russell'], teamId: 'mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['russell'], teamId: 'mercedes' },
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
          { position: 2, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 3, driverIds: ['russell'], teamId: 'mercedes' },
        ],
      }],
      fastestLapDriverId: 'hamilton',
    },
  },

  // Round 10 — Spanish Grand Prix (23 Jun 2024)
  'f1-2024-spain': {
    qualifying: {
      overall: { driverIds: ['norris'], teamId: 'mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['hamilton'], teamId: 'mercedes' },
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
          { position: 3, driverIds: ['hamilton'], teamId: 'mercedes' },
        ],
      }],
      fastestLapDriverId: 'norris',
    },
  },

  // Round 11 — Austrian Grand Prix (30 Jun 2024) — Sprint
  'f1-2024-austria': {
    sprint: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 3, driverIds: ['norris'], teamId: 'mclaren' },
        ],
      }],
    },
    qualifying: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['norris'], teamId: 'mclaren' },
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
          { position: 2, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 3, driverIds: ['sainz'], teamId: 'ferrari' },
        ],
      }],
      fastestLapDriverId: 'piastri',
    },
  },

  // Round 12 — British Grand Prix (7 Jul 2024)
  'f1-2024-great-britain': {
    qualifying: {
      overall: { driverIds: ['russell'], teamId: 'mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 2, driverIds: ['hamilton'], teamId: 'mercedes' },
          { position: 3, driverIds: ['norris'], teamId: 'mclaren' },
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
          { position: 3, driverIds: ['norris'], teamId: 'mclaren' },
        ],
      }],
      fastestLapDriverId: 'piastri',
    },
  },

  // Round 13 — Hungarian Grand Prix (21 Jul 2024)
  'f1-2024-hungary': {
    qualifying: {
      overall: { driverIds: ['norris'], teamId: 'mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 2, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 3, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['piastri'], teamId: 'mclaren' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 2, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 3, driverIds: ['hamilton'], teamId: 'mercedes' },
        ],
      }],
      fastestLapDriverId: 'norris',
    },
  },

  // Round 14 — Belgian Grand Prix (28 Jul 2024)
  'f1-2024-belgium': {
    qualifying: {
      overall: { driverIds: ['leclerc'], teamId: 'ferrari' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 2, driverIds: ['perez'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['hamilton'], teamId: 'mercedes' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['hamilton'], teamId: 'mercedes' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['hamilton'], teamId: 'mercedes' },
          { position: 2, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 3, driverIds: ['leclerc'], teamId: 'ferrari' },
        ],
      }],
      fastestLapDriverId: 'norris',
    },
  },

  // Round 15 — Dutch Grand Prix (25 Aug 2024)
  'f1-2024-netherlands': {
    qualifying: {
      overall: { driverIds: ['norris'], teamId: 'mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['piastri'], teamId: 'mclaren' },
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
          { position: 3, driverIds: ['leclerc'], teamId: 'ferrari' },
        ],
      }],
      fastestLapDriverId: 'norris',
    },
  },

  // Round 16 — Italian Grand Prix (1 Sep 2024)
  'f1-2024-italy': {
    qualifying: {
      overall: { driverIds: ['norris'], teamId: 'mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 2, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 3, driverIds: ['russell'], teamId: 'mercedes' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['leclerc'], teamId: 'ferrari' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 2, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 3, driverIds: ['norris'], teamId: 'mclaren' },
        ],
      }],
      fastestLapDriverId: 'norris',
    },
  },

  // Round 17 — Azerbaijan Grand Prix (15 Sep 2024)
  'f1-2024-azerbaijan': {
    qualifying: {
      overall: { driverIds: ['leclerc'], teamId: 'ferrari' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 2, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 3, driverIds: ['sainz'], teamId: 'ferrari' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['piastri'], teamId: 'mclaren' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 2, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 3, driverIds: ['russell'], teamId: 'mercedes' },
        ],
      }],
      fastestLapDriverId: 'norris',
    },
  },

  // Round 18 — Singapore Grand Prix (22 Sep 2024)
  'f1-2024-singapore': {
    qualifying: {
      overall: { driverIds: ['norris'], teamId: 'mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['hamilton'], teamId: 'mercedes' },
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
          { position: 3, driverIds: ['piastri'], teamId: 'mclaren' },
        ],
      }],
      fastestLapDriverId: 'ricciardo',
    },
  },

  // Round 19 — United States Grand Prix (20 Oct 2024) — Sprint
  'f1-2024-united-states': {
    sprint: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['sainz'], teamId: 'ferrari' },
          { position: 3, driverIds: ['norris'], teamId: 'mclaren' },
        ],
      }],
    },
    qualifying: {
      overall: { driverIds: ['norris'], teamId: 'mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['sainz'], teamId: 'ferrari' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['leclerc'], teamId: 'ferrari' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 2, driverIds: ['sainz'], teamId: 'ferrari' },
          { position: 3, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        ],
      }],
      fastestLapDriverId: 'norris',
    },
  },

  // Round 20 — Mexico City Grand Prix (27 Oct 2024)
  'f1-2024-mexico': {
    qualifying: {
      overall: { driverIds: ['sainz'], teamId: 'ferrari' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sainz'], teamId: 'ferrari' },
          { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['norris'], teamId: 'mclaren' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['sainz'], teamId: 'ferrari' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['sainz'], teamId: 'ferrari' },
          { position: 2, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 3, driverIds: ['leclerc'], teamId: 'ferrari' },
        ],
      }],
      fastestLapDriverId: 'norris',
    },
  },

  // Round 21 — São Paulo Grand Prix (3 Nov 2024) — Sprint
  'f1-2024-brazil': {
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
      overall: { driverIds: ['norris'], teamId: 'mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 2, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 3, driverIds: ['tsunoda'], teamId: 'racing-bulls' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['ocon'], teamId: 'alpine' },
          { position: 3, driverIds: ['gasly'], teamId: 'alpine' },
        ],
      }],
      fastestLapDriverId: 'norris',
    },
  },

  // Round 22 — Las Vegas Grand Prix (24 Nov 2024)
  'f1-2024-las-vegas': {
    qualifying: {
      overall: { driverIds: ['russell'], teamId: 'mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 2, driverIds: ['sainz'], teamId: 'ferrari' },
          { position: 3, driverIds: ['gasly'], teamId: 'alpine' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['russell'], teamId: 'mercedes' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 2, driverIds: ['hamilton'], teamId: 'mercedes' },
          { position: 3, driverIds: ['sainz'], teamId: 'ferrari' },
        ],
      }],
      fastestLapDriverId: 'norris',
    },
  },

  // Round 23 — Qatar Grand Prix (1 Dec 2024) — Sprint
  'f1-2024-qatar': {
    sprint: {
      overall: { driverIds: ['norris'], teamId: 'mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 2, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 3, driverIds: ['russell'], teamId: 'mercedes' },
        ],
      }],
    },
    qualifying: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['russell'], teamId: 'mercedes' },
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
          { position: 2, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 3, driverIds: ['piastri'], teamId: 'mclaren' },
        ],
      }],
      fastestLapDriverId: 'norris',
    },
  },

  // Round 24 — Abu Dhabi Grand Prix (8 Dec 2024)
  'f1-2024-abu-dhabi': {
    qualifying: {
      overall: { driverIds: ['norris'], teamId: 'mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 2, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 3, driverIds: ['sainz'], teamId: 'ferrari' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['norris'], teamId: 'mclaren' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 2, driverIds: ['sainz'], teamId: 'ferrari' },
          { position: 3, driverIds: ['leclerc'], teamId: 'ferrari' },
        ],
      }],
      fastestLapDriverId: 'piastri',
    },
  },
}
