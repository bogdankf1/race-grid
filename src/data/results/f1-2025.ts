import type { EventResults } from './types'

// F1 2025 results — verified from formula1.com, skysports.com, motorsport.com
export const f1Results2025: Record<string, EventResults> = {
  // Round 1 — Australian Grand Prix (16 Mar 2025)
  'f1-2025-australia': {
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
      overall: { driverIds: ['norris'], teamId: 'mclaren' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['russell'], teamId: 'mercedes' },
        ],
      }],
      fastestLapDriverId: 'norris',
    },
  },

  // Round 2 — Chinese Grand Prix (23 Mar 2025) — Sprint weekend
  'f1-2025-china': {
    sprint_qualifying: {
      overall: { driverIds: ['hamilton'], teamId: 'ferrari' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hamilton'], teamId: 'ferrari' },
          { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['piastri'], teamId: 'mclaren' },
        ],
      }],
    },
    sprint: {
      overall: { driverIds: ['hamilton'], teamId: 'ferrari' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hamilton'], teamId: 'ferrari' },
          { position: 2, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 3, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        ],
      }],
    },
    qualifying: {
      overall: { driverIds: ['piastri'], teamId: 'mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 2, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 3, driverIds: ['norris'], teamId: 'mclaren' },
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
          { position: 3, driverIds: ['russell'], teamId: 'mercedes' },
        ],
      }],
      fastestLapDriverId: 'norris',
    },
  },

  // Round 3 — Japanese Grand Prix (6 Apr 2025)
  'f1-2025-japan': {
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
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 3, driverIds: ['piastri'], teamId: 'mclaren' },
        ],
      }],
      fastestLapDriverId: 'antonelli',
    },
  },

  // Round 4 — Bahrain Grand Prix (13 Apr 2025)
  'f1-2025-bahrain': {
    qualifying: {
      overall: { driverIds: ['piastri'], teamId: 'mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 2, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 3, driverIds: ['leclerc'], teamId: 'ferrari' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['piastri'], teamId: 'mclaren' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 2, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 3, driverIds: ['norris'], teamId: 'mclaren' },
        ],
      }],
      fastestLapDriverId: 'piastri',
    },
  },

  // Round 5 — Saudi Arabian Grand Prix (20 Apr 2025)
  'f1-2025-saudi-arabia': {
    qualifying: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 3, driverIds: ['russell'], teamId: 'mercedes' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['piastri'], teamId: 'mclaren' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['leclerc'], teamId: 'ferrari' },
        ],
      }],
      fastestLapDriverId: 'norris',
    },
  },

  // Round 6 — Miami Grand Prix (4 May 2025) — Sprint weekend
  'f1-2025-miami': {
    sprint_qualifying: {
      overall: { driverIds: ['antonelli'], teamId: 'mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['antonelli'], teamId: 'mercedes' },
          { position: 2, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 3, driverIds: ['norris'], teamId: 'mclaren' },
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
          { position: 3, driverIds: ['hamilton'], teamId: 'ferrari' },
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
          { position: 3, driverIds: ['antonelli'], teamId: 'mercedes' },
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
          { position: 3, driverIds: ['russell'], teamId: 'mercedes' },
        ],
      }],
      fastestLapDriverId: 'norris',
    },
  },

  // Round 7 — Emilia Romagna Grand Prix (18 May 2025)
  'f1-2025-emilia-romagna': {
    qualifying: {
      overall: { driverIds: ['piastri'], teamId: 'mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
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
          { position: 2, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 3, driverIds: ['piastri'], teamId: 'mclaren' },
        ],
      }],
      fastestLapDriverId: 'verstappen',
    },
  },

  // Round 8 — Monaco Grand Prix (25 May 2025)
  'f1-2025-monaco': {
    qualifying: {
      overall: { driverIds: ['norris'], teamId: 'mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 2, driverIds: ['leclerc'], teamId: 'ferrari' },
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
          { position: 2, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 3, driverIds: ['piastri'], teamId: 'mclaren' },
        ],
      }],
      fastestLapDriverId: 'norris',
    },
  },

  // Round 9 — Spanish Grand Prix (1 Jun 2025)
  'f1-2025-spain': {
    qualifying: {
      overall: { driverIds: ['piastri'], teamId: 'mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 2, driverIds: ['norris'], teamId: 'mclaren' },
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
          { position: 3, driverIds: ['leclerc'], teamId: 'ferrari' },
        ],
      }],
      fastestLapDriverId: 'piastri',
    },
  },

  // Round 10 — Canadian Grand Prix (15 Jun 2025)
  'f1-2025-canada': {
    qualifying: {
      overall: { driverIds: ['russell'], teamId: 'mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
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
          { position: 3, driverIds: ['antonelli'], teamId: 'mercedes' },
        ],
      }],
      fastestLapDriverId: 'russell',
    },
  },

  // Round 11 — Austrian Grand Prix (29 Jun 2025)
  'f1-2025-austria': {
    qualifying: {
      overall: { driverIds: ['norris'], teamId: 'mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 2, driverIds: ['leclerc'], teamId: 'ferrari' },
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
          { position: 2, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 3, driverIds: ['leclerc'], teamId: 'ferrari' },
        ],
      }],
      fastestLapDriverId: 'piastri',
    },
  },

  // Round 12 — British Grand Prix (6 Jul 2025)
  'f1-2025-great-britain': {
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
      overall: { driverIds: ['norris'], teamId: 'mclaren' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 2, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 3, driverIds: ['hulkenberg'], teamId: 'sauber' },
        ],
      }],
      fastestLapDriverId: 'piastri',
    },
  },

  // Round 13 — Belgian Grand Prix (27 Jul 2025) — Sprint weekend
  'f1-2025-belgium': {
    sprint_qualifying: {
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
    race: {
      overall: { driverIds: ['piastri'], teamId: 'mclaren' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 2, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 3, driverIds: ['leclerc'], teamId: 'ferrari' },
        ],
      }],
      fastestLapDriverId: 'antonelli',
    },
  },

  // Round 14 — Hungarian Grand Prix (3 Aug 2025)
  'f1-2025-hungary': {
    qualifying: {
      overall: { driverIds: ['leclerc'], teamId: 'ferrari' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 2, driverIds: ['piastri'], teamId: 'mclaren' },
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
          { position: 2, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 3, driverIds: ['russell'], teamId: 'mercedes' },
        ],
      }],
      fastestLapDriverId: 'russell',
    },
  },

  // Round 15 — Dutch Grand Prix (31 Aug 2025)
  'f1-2025-netherlands': {
    qualifying: {
      overall: { driverIds: ['piastri'], teamId: 'mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 2, driverIds: ['norris'], teamId: 'mclaren' },
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
          { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['hadjar'], teamId: 'racing-bulls' },
        ],
      }],
      fastestLapDriverId: 'piastri',
    },
  },

  // Round 16 — Italian Grand Prix (7 Sep 2025)
  'f1-2025-italy': {
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
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 3, driverIds: ['piastri'], teamId: 'mclaren' },
        ],
      }],
      fastestLapDriverId: 'norris',
    },
  },

  // Round 17 — Azerbaijan Grand Prix (21 Sep 2025)
  'f1-2025-azerbaijan': {
    qualifying: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['sainz'], teamId: 'williams' },
          { position: 3, driverIds: ['lawson'], teamId: 'racing-bulls' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 3, driverIds: ['sainz'], teamId: 'williams' },
        ],
      }],
      fastestLapDriverId: 'verstappen',
    },
  },

  // Round 18 — Singapore Grand Prix (5 Oct 2025)
  'f1-2025-singapore': {
    qualifying: {
      overall: { driverIds: ['russell'], teamId: 'mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
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
          { position: 3, driverIds: ['norris'], teamId: 'mclaren' },
        ],
      }],
      fastestLapDriverId: 'hamilton',
    },
  },

  // Round 19 — United States Grand Prix (19 Oct 2025) — Sprint weekend
  'f1-2025-united-states': {
    sprint_qualifying: {
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
    sprint: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 3, driverIds: ['sainz'], teamId: 'williams' },
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
          { position: 3, driverIds: ['leclerc'], teamId: 'ferrari' },
        ],
      }],
      fastestLapDriverId: 'antonelli',
    },
  },

  // Round 20 — Mexico City Grand Prix (26 Oct 2025)
  'f1-2025-mexico': {
    qualifying: {
      overall: { driverIds: ['norris'], teamId: 'mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 2, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 3, driverIds: ['hamilton'], teamId: 'ferrari' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['norris'], teamId: 'mclaren' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 2, driverIds: ['leclerc'], teamId: 'ferrari' },
          { position: 3, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        ],
      }],
      fastestLapDriverId: 'russell',
    },
  },

  // Round 21 — Brazilian Grand Prix (9 Nov 2025) — Sprint weekend
  'f1-2025-brazil': {
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
          { position: 2, driverIds: ['antonelli'], teamId: 'mercedes' },
          { position: 3, driverIds: ['russell'], teamId: 'mercedes' },
        ],
      }],
    },
    qualifying: {
      overall: { driverIds: ['norris'], teamId: 'mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 2, driverIds: ['antonelli'], teamId: 'mercedes' },
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
          { position: 2, driverIds: ['antonelli'], teamId: 'mercedes' },
          { position: 3, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
        ],
      }],
      fastestLapDriverId: 'albon',
    },
  },

  // Round 22 — Las Vegas Grand Prix (23 Nov 2025)
  'f1-2025-las-vegas': {
    qualifying: {
      overall: { driverIds: ['norris'], teamId: 'mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['norris'], teamId: 'mclaren' },
          { position: 2, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 3, driverIds: ['sainz'], teamId: 'williams' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 3, driverIds: ['antonelli'], teamId: 'mercedes' },
        ],
      }],
      fastestLapDriverId: 'verstappen',
    },
  },

  // Round 23 — Qatar Grand Prix (30 Nov 2025) — Sprint weekend
  'f1-2025-qatar': {
    sprint_qualifying: {
      overall: { driverIds: ['piastri'], teamId: 'mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 2, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 3, driverIds: ['norris'], teamId: 'mclaren' },
        ],
      }],
    },
    sprint: {
      overall: { driverIds: ['piastri'], teamId: 'mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 2, driverIds: ['russell'], teamId: 'mercedes' },
          { position: 3, driverIds: ['norris'], teamId: 'mclaren' },
        ],
      }],
    },
    qualifying: {
      overall: { driverIds: ['piastri'], teamId: 'mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 2, driverIds: ['norris'], teamId: 'mclaren' },
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
          { position: 2, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 3, driverIds: ['sainz'], teamId: 'williams' },
        ],
      }],
      fastestLapDriverId: 'piastri',
    },
  },

  // Round 24 — Abu Dhabi Grand Prix (7 Dec 2025)
  'f1-2025-abu-dhabi': {
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
      overall: { driverIds: ['verstappen'], teamId: 'red-bull-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['verstappen'], teamId: 'red-bull-racing' },
          { position: 2, driverIds: ['piastri'], teamId: 'mclaren' },
          { position: 3, driverIds: ['norris'], teamId: 'mclaren' },
        ],
      }],
      fastestLapDriverId: 'leclerc',
    },
  },
}
