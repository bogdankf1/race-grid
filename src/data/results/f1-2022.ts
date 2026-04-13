import type { EventResults } from './types'

// F1 2022 results — verified from formula1.com
// Verstappen 15 wins, Leclerc 3, Pérez 2, Sainz 1, Russell 1
export const f1Results2022: Record<string, EventResults> = {
  // Round 1 — Bahrain Grand Prix (20 Mar 2022)
  'f1-2022-bahrain': {
    race: {
      overall: { driverIds: ['leclerc'], teamId: 'ferrari' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 2, driverIds: ['sainz'], teamId: 'ferrari' },
          { position: 3, driverIds: ['hamilton'], teamId: 'mercedes' },
        ],
      }],
    },
  },

  // Round 2 — Saudi Arabian Grand Prix (27 Mar 2022)
  'f1-2022-saudi-arabia': {
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 3, driverIds: ['sainz'], teamId: 'ferrari' },
        ],
      }],
    },
  },

  // Round 3 — Australian Grand Prix (10 Apr 2022)
  'f1-2022-australia': {
    race: {
      overall: { driverIds: ['leclerc'], teamId: 'ferrari' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 2, driverIds: ['perez'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['russell'], teamId: 'mercedes' },
        ],
      }],
    },
  },

  // Round 4 — Emilia Romagna Grand Prix (24 Apr 2022) — Sprint weekend
  'f1-2022-emilia-romagna': {
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
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['perez'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['norris'], teamId: 'mclaren' },
        ],
      }],
    },
  },

  // Round 5 — Miami Grand Prix (8 May 2022)
  'f1-2022-miami': {
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 3, driverIds: ['sainz'], teamId: 'ferrari' },
        ],
      }],
    },
  },

  // Round 6 — Spanish Grand Prix (22 May 2022)
  'f1-2022-spain': {
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['perez'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['russell'], teamId: 'mercedes' },
        ],
      }],
    },
  },

  // Round 7 — Monaco Grand Prix (29 May 2022)
  'f1-2022-monaco': {
    race: {
      overall: { driverIds: ['perez'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['perez'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['sainz'], teamId: 'ferrari' },
          { position: 3, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        ],
      }],
    },
  },

  // Round 8 — Azerbaijan Grand Prix (12 Jun 2022)
  'f1-2022-azerbaijan': {
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['perez'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['russell'], teamId: 'mercedes' },
        ],
      }],
    },
  },

  // Round 9 — Canadian Grand Prix (19 Jun 2022)
  'f1-2022-canada': {
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['sainz'], teamId: 'ferrari' },
          { position: 3, driverIds: ['hamilton'], teamId: 'mercedes' },
        ],
      }],
    },
  },

  // Round 10 — British Grand Prix (3 Jul 2022)
  'f1-2022-great-britain': {
    race: {
      overall: { driverIds: ['sainz'], teamId: 'ferrari' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['sainz'], teamId: 'ferrari' },
          { position: 2, driverIds: ['perez'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['hamilton'], teamId: 'mercedes' },
        ],
      }],
    },
  },

  // Round 11 — Austrian Grand Prix (10 Jul 2022) — Sprint weekend
  'f1-2022-austria': {
    sprint: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['leclerc'], teamId: 'ferrari' },
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
          { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['hamilton'], teamId: 'mercedes' },
        ],
      }],
    },
  },

  // Round 12 — French Grand Prix (24 Jul 2022)
  'f1-2022-france': {
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

  // Round 13 — Hungarian Grand Prix (31 Jul 2022)
  'f1-2022-hungary': {
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

  // Round 14 — Belgian Grand Prix (28 Aug 2022)
  'f1-2022-belgium': {
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

  // Round 15 — Dutch Grand Prix (4 Sep 2022)
  'f1-2022-netherlands': {
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 3, driverIds: ['leclerc'], teamId: 'ferrari' },
        ],
      }],
    },
  },

  // Round 16 — Italian Grand Prix (11 Sep 2022)
  'f1-2022-italy': {
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

  // Round 17 — Singapore Grand Prix (2 Oct 2022)
  'f1-2022-singapore': {
    race: {
      overall: { driverIds: ['perez'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['perez'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 3, driverIds: ['sainz'], teamId: 'ferrari' },
        ],
      }],
    },
  },

  // Round 18 — Japanese Grand Prix (9 Oct 2022)
  'f1-2022-japan': {
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

  // Round 19 — United States Grand Prix (23 Oct 2022)
  'f1-2022-united-states': {
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

  // Round 20 — Mexico City Grand Prix (30 Oct 2022)
  'f1-2022-mexico': {
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['hamilton'], teamId: 'mercedes' },
          { position: 3, driverIds: ['perez'], teamId: 'red-bull-racing' },
        ],
      }],
    },
  },

  // Round 21 — São Paulo Grand Prix (13 Nov 2022) — Sprint weekend
  'f1-2022-brazil': {
    sprint: {
      overall: { driverIds: ['russell'], teamId: 'mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 2, driverIds: ['sainz'], teamId: 'ferrari' },
          { position: 3, driverIds: ['hamilton'], teamId: 'mercedes' },
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
    },
  },

  // Round 22 — Abu Dhabi Grand Prix (20 Nov 2022)
  'f1-2022-abu-dhabi': {
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
}
