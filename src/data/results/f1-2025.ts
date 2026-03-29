import { EventResults } from './types'

// F1 2025 results — verified from formula1.com, skysports.com, motorsport.com
export const f1Results2025: Record<string, EventResults> = {
  // Round 1 — Australian Grand Prix (16 Mar 2025)
  'f1-2025-australia': {
    qualifying: {
      overall: { drivers: ['Norris'], team: 'McLaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Norris'], team: 'McLaren' },
          { position: 2, drivers: ['Piastri'], team: 'McLaren' },
          { position: 3, drivers: ['Verstappen'], team: 'Red Bull Racing' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Norris'], team: 'McLaren' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, drivers: ['Norris'], team: 'McLaren' },
          { position: 2, drivers: ['Verstappen'], team: 'Red Bull Racing' },
          { position: 3, drivers: ['Russell'], team: 'Mercedes' },
        ],
      }],
      fastestLap: 'Norris',
    },
  },

  // Round 2 — Chinese Grand Prix (23 Mar 2025) — Sprint weekend
  'f1-2025-china': {
    sprint_qualifying: {
      overall: { drivers: ['Hamilton'], team: 'Ferrari' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Hamilton'], team: 'Ferrari' },
          { position: 2, drivers: ['Verstappen'], team: 'Red Bull Racing' },
          { position: 3, drivers: ['Piastri'], team: 'McLaren' },
        ],
      }],
    },
    sprint: {
      overall: { drivers: ['Hamilton'], team: 'Ferrari' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Hamilton'], team: 'Ferrari' },
          { position: 2, drivers: ['Piastri'], team: 'McLaren' },
          { position: 3, drivers: ['Verstappen'], team: 'Red Bull Racing' },
        ],
      }],
    },
    qualifying: {
      overall: { drivers: ['Piastri'], team: 'McLaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Piastri'], team: 'McLaren' },
          { position: 2, drivers: ['Russell'], team: 'Mercedes' },
          { position: 3, drivers: ['Norris'], team: 'McLaren' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Piastri'], team: 'McLaren' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, drivers: ['Piastri'], team: 'McLaren' },
          { position: 2, drivers: ['Norris'], team: 'McLaren' },
          { position: 3, drivers: ['Russell'], team: 'Mercedes' },
        ],
      }],
      fastestLap: 'Norris',
    },
  },

  // Round 3 — Japanese Grand Prix (6 Apr 2025)
  'f1-2025-japan': {
    qualifying: {
      overall: { drivers: ['Verstappen'], team: 'Red Bull Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Verstappen'], team: 'Red Bull Racing' },
          { position: 2, drivers: ['Norris'], team: 'McLaren' },
          { position: 3, drivers: ['Piastri'], team: 'McLaren' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Verstappen'], team: 'Red Bull Racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, drivers: ['Verstappen'], team: 'Red Bull Racing' },
          { position: 2, drivers: ['Norris'], team: 'McLaren' },
          { position: 3, drivers: ['Piastri'], team: 'McLaren' },
        ],
      }],
      fastestLap: 'Antonelli',
    },
  },

  // Round 4 — Bahrain Grand Prix (13 Apr 2025)
  'f1-2025-bahrain': {
    qualifying: {
      overall: { drivers: ['Piastri'], team: 'McLaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Piastri'], team: 'McLaren' },
          { position: 2, drivers: ['Russell'], team: 'Mercedes' },
          { position: 3, drivers: ['Leclerc'], team: 'Ferrari' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Piastri'], team: 'McLaren' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, drivers: ['Piastri'], team: 'McLaren' },
          { position: 2, drivers: ['Russell'], team: 'Mercedes' },
          { position: 3, drivers: ['Norris'], team: 'McLaren' },
        ],
      }],
      fastestLap: 'Piastri',
    },
  },

  // Round 5 — Saudi Arabian Grand Prix (20 Apr 2025)
  'f1-2025-saudi-arabia': {
    qualifying: {
      overall: { drivers: ['Verstappen'], team: 'Red Bull Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Verstappen'], team: 'Red Bull Racing' },
          { position: 2, drivers: ['Piastri'], team: 'McLaren' },
          { position: 3, drivers: ['Russell'], team: 'Mercedes' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Piastri'], team: 'McLaren' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, drivers: ['Piastri'], team: 'McLaren' },
          { position: 2, drivers: ['Verstappen'], team: 'Red Bull Racing' },
          { position: 3, drivers: ['Leclerc'], team: 'Ferrari' },
        ],
      }],
      fastestLap: 'Norris',
    },
  },

  // Round 6 — Miami Grand Prix (4 May 2025) — Sprint weekend
  'f1-2025-miami': {
    sprint_qualifying: {
      overall: { drivers: ['Antonelli'], team: 'Mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Antonelli'], team: 'Mercedes' },
          { position: 2, drivers: ['Piastri'], team: 'McLaren' },
          { position: 3, drivers: ['Norris'], team: 'McLaren' },
        ],
      }],
    },
    sprint: {
      overall: { drivers: ['Norris'], team: 'McLaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Norris'], team: 'McLaren' },
          { position: 2, drivers: ['Piastri'], team: 'McLaren' },
          { position: 3, drivers: ['Hamilton'], team: 'Ferrari' },
        ],
      }],
    },
    qualifying: {
      overall: { drivers: ['Verstappen'], team: 'Red Bull Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Verstappen'], team: 'Red Bull Racing' },
          { position: 2, drivers: ['Norris'], team: 'McLaren' },
          { position: 3, drivers: ['Antonelli'], team: 'Mercedes' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Piastri'], team: 'McLaren' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, drivers: ['Piastri'], team: 'McLaren' },
          { position: 2, drivers: ['Norris'], team: 'McLaren' },
          { position: 3, drivers: ['Russell'], team: 'Mercedes' },
        ],
      }],
      fastestLap: 'Norris',
    },
  },

  // Round 7 — Emilia Romagna Grand Prix (18 May 2025)
  'f1-2025-emilia-romagna': {
    qualifying: {
      overall: { drivers: ['Piastri'], team: 'McLaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Piastri'], team: 'McLaren' },
          { position: 2, drivers: ['Verstappen'], team: 'Red Bull Racing' },
          { position: 3, drivers: ['Russell'], team: 'Mercedes' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Verstappen'], team: 'Red Bull Racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, drivers: ['Verstappen'], team: 'Red Bull Racing' },
          { position: 2, drivers: ['Norris'], team: 'McLaren' },
          { position: 3, drivers: ['Piastri'], team: 'McLaren' },
        ],
      }],
      fastestLap: 'Verstappen',
    },
  },

  // Round 8 — Monaco Grand Prix (25 May 2025)
  'f1-2025-monaco': {
    qualifying: {
      overall: { drivers: ['Norris'], team: 'McLaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Norris'], team: 'McLaren' },
          { position: 2, drivers: ['Leclerc'], team: 'Ferrari' },
          { position: 3, drivers: ['Piastri'], team: 'McLaren' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Norris'], team: 'McLaren' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, drivers: ['Norris'], team: 'McLaren' },
          { position: 2, drivers: ['Leclerc'], team: 'Ferrari' },
          { position: 3, drivers: ['Piastri'], team: 'McLaren' },
        ],
      }],
      fastestLap: 'Norris',
    },
  },

  // Round 9 — Spanish Grand Prix (1 Jun 2025)
  'f1-2025-spain': {
    qualifying: {
      overall: { drivers: ['Piastri'], team: 'McLaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Piastri'], team: 'McLaren' },
          { position: 2, drivers: ['Norris'], team: 'McLaren' },
          { position: 3, drivers: ['Verstappen'], team: 'Red Bull Racing' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Piastri'], team: 'McLaren' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, drivers: ['Piastri'], team: 'McLaren' },
          { position: 2, drivers: ['Norris'], team: 'McLaren' },
          { position: 3, drivers: ['Leclerc'], team: 'Ferrari' },
        ],
      }],
      fastestLap: 'Piastri',
    },
  },

  // Round 10 — Canadian Grand Prix (15 Jun 2025)
  'f1-2025-canada': {
    qualifying: {
      overall: { drivers: ['Russell'], team: 'Mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Russell'], team: 'Mercedes' },
          { position: 2, drivers: ['Verstappen'], team: 'Red Bull Racing' },
          { position: 3, drivers: ['Piastri'], team: 'McLaren' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Russell'], team: 'Mercedes' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, drivers: ['Russell'], team: 'Mercedes' },
          { position: 2, drivers: ['Verstappen'], team: 'Red Bull Racing' },
          { position: 3, drivers: ['Antonelli'], team: 'Mercedes' },
        ],
      }],
      fastestLap: 'Russell',
    },
  },

  // Round 11 — Austrian Grand Prix (29 Jun 2025)
  'f1-2025-austria': {
    qualifying: {
      overall: { drivers: ['Norris'], team: 'McLaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Norris'], team: 'McLaren' },
          { position: 2, drivers: ['Leclerc'], team: 'Ferrari' },
          { position: 3, drivers: ['Piastri'], team: 'McLaren' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Norris'], team: 'McLaren' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, drivers: ['Norris'], team: 'McLaren' },
          { position: 2, drivers: ['Piastri'], team: 'McLaren' },
          { position: 3, drivers: ['Leclerc'], team: 'Ferrari' },
        ],
      }],
      fastestLap: 'Piastri',
    },
  },

  // Round 12 — British Grand Prix (6 Jul 2025)
  'f1-2025-great-britain': {
    qualifying: {
      overall: { drivers: ['Verstappen'], team: 'Red Bull Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Verstappen'], team: 'Red Bull Racing' },
          { position: 2, drivers: ['Piastri'], team: 'McLaren' },
          { position: 3, drivers: ['Norris'], team: 'McLaren' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Norris'], team: 'McLaren' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, drivers: ['Norris'], team: 'McLaren' },
          { position: 2, drivers: ['Piastri'], team: 'McLaren' },
          { position: 3, drivers: ['Hülkenberg'], team: 'Sauber' },
        ],
      }],
      fastestLap: 'Piastri',
    },
  },

  // Round 13 — Belgian Grand Prix (27 Jul 2025) — Sprint weekend
  'f1-2025-belgium': {
    sprint_qualifying: {
      overall: { drivers: ['Piastri'], team: 'McLaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Piastri'], team: 'McLaren' },
          { position: 2, drivers: ['Verstappen'], team: 'Red Bull Racing' },
          { position: 3, drivers: ['Norris'], team: 'McLaren' },
        ],
      }],
    },
    sprint: {
      overall: { drivers: ['Verstappen'], team: 'Red Bull Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Verstappen'], team: 'Red Bull Racing' },
          { position: 2, drivers: ['Piastri'], team: 'McLaren' },
          { position: 3, drivers: ['Norris'], team: 'McLaren' },
        ],
      }],
    },
    qualifying: {
      overall: { drivers: ['Norris'], team: 'McLaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Norris'], team: 'McLaren' },
          { position: 2, drivers: ['Piastri'], team: 'McLaren' },
          { position: 3, drivers: ['Leclerc'], team: 'Ferrari' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Piastri'], team: 'McLaren' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, drivers: ['Piastri'], team: 'McLaren' },
          { position: 2, drivers: ['Norris'], team: 'McLaren' },
          { position: 3, drivers: ['Leclerc'], team: 'Ferrari' },
        ],
      }],
      fastestLap: 'Antonelli',
    },
  },

  // Round 14 — Hungarian Grand Prix (3 Aug 2025)
  'f1-2025-hungary': {
    qualifying: {
      overall: { drivers: ['Leclerc'], team: 'Ferrari' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Leclerc'], team: 'Ferrari' },
          { position: 2, drivers: ['Piastri'], team: 'McLaren' },
          { position: 3, drivers: ['Norris'], team: 'McLaren' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Norris'], team: 'McLaren' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, drivers: ['Norris'], team: 'McLaren' },
          { position: 2, drivers: ['Piastri'], team: 'McLaren' },
          { position: 3, drivers: ['Russell'], team: 'Mercedes' },
        ],
      }],
      fastestLap: 'Russell',
    },
  },

  // Round 15 — Dutch Grand Prix (31 Aug 2025)
  'f1-2025-netherlands': {
    qualifying: {
      overall: { drivers: ['Piastri'], team: 'McLaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Piastri'], team: 'McLaren' },
          { position: 2, drivers: ['Norris'], team: 'McLaren' },
          { position: 3, drivers: ['Verstappen'], team: 'Red Bull Racing' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Piastri'], team: 'McLaren' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, drivers: ['Piastri'], team: 'McLaren' },
          { position: 2, drivers: ['Verstappen'], team: 'Red Bull Racing' },
          { position: 3, drivers: ['Hadjar'], team: 'Racing Bulls' },
        ],
      }],
      fastestLap: 'Piastri',
    },
  },

  // Round 16 — Italian Grand Prix (7 Sep 2025)
  'f1-2025-italy': {
    qualifying: {
      overall: { drivers: ['Verstappen'], team: 'Red Bull Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Verstappen'], team: 'Red Bull Racing' },
          { position: 2, drivers: ['Norris'], team: 'McLaren' },
          { position: 3, drivers: ['Piastri'], team: 'McLaren' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Verstappen'], team: 'Red Bull Racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, drivers: ['Verstappen'], team: 'Red Bull Racing' },
          { position: 2, drivers: ['Norris'], team: 'McLaren' },
          { position: 3, drivers: ['Piastri'], team: 'McLaren' },
        ],
      }],
      fastestLap: 'Norris',
    },
  },

  // Round 17 — Azerbaijan Grand Prix (21 Sep 2025)
  'f1-2025-azerbaijan': {
    qualifying: {
      overall: { drivers: ['Verstappen'], team: 'Red Bull Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Verstappen'], team: 'Red Bull Racing' },
          { position: 2, drivers: ['Sainz'], team: 'Williams' },
          { position: 3, drivers: ['Lawson'], team: 'Racing Bulls' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Verstappen'], team: 'Red Bull Racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, drivers: ['Verstappen'], team: 'Red Bull Racing' },
          { position: 2, drivers: ['Russell'], team: 'Mercedes' },
          { position: 3, drivers: ['Sainz'], team: 'Williams' },
        ],
      }],
      fastestLap: 'Verstappen',
    },
  },

  // Round 18 — Singapore Grand Prix (5 Oct 2025)
  'f1-2025-singapore': {
    qualifying: {
      overall: { drivers: ['Russell'], team: 'Mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Russell'], team: 'Mercedes' },
          { position: 2, drivers: ['Verstappen'], team: 'Red Bull Racing' },
          { position: 3, drivers: ['Piastri'], team: 'McLaren' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Russell'], team: 'Mercedes' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, drivers: ['Russell'], team: 'Mercedes' },
          { position: 2, drivers: ['Verstappen'], team: 'Red Bull Racing' },
          { position: 3, drivers: ['Norris'], team: 'McLaren' },
        ],
      }],
      fastestLap: 'Hamilton',
    },
  },

  // Round 19 — United States Grand Prix (19 Oct 2025) — Sprint weekend
  'f1-2025-united-states': {
    sprint_qualifying: {
      overall: { drivers: ['Verstappen'], team: 'Red Bull Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Verstappen'], team: 'Red Bull Racing' },
          { position: 2, drivers: ['Norris'], team: 'McLaren' },
          { position: 3, drivers: ['Piastri'], team: 'McLaren' },
        ],
      }],
    },
    sprint: {
      overall: { drivers: ['Verstappen'], team: 'Red Bull Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Verstappen'], team: 'Red Bull Racing' },
          { position: 2, drivers: ['Russell'], team: 'Mercedes' },
          { position: 3, drivers: ['Sainz'], team: 'Williams' },
        ],
      }],
    },
    qualifying: {
      overall: { drivers: ['Verstappen'], team: 'Red Bull Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Verstappen'], team: 'Red Bull Racing' },
          { position: 2, drivers: ['Norris'], team: 'McLaren' },
          { position: 3, drivers: ['Leclerc'], team: 'Ferrari' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Verstappen'], team: 'Red Bull Racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, drivers: ['Verstappen'], team: 'Red Bull Racing' },
          { position: 2, drivers: ['Norris'], team: 'McLaren' },
          { position: 3, drivers: ['Leclerc'], team: 'Ferrari' },
        ],
      }],
      fastestLap: 'Antonelli',
    },
  },

  // Round 20 — Mexico City Grand Prix (26 Oct 2025)
  'f1-2025-mexico': {
    qualifying: {
      overall: { drivers: ['Norris'], team: 'McLaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Norris'], team: 'McLaren' },
          { position: 2, drivers: ['Leclerc'], team: 'Ferrari' },
          { position: 3, drivers: ['Hamilton'], team: 'Ferrari' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Norris'], team: 'McLaren' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, drivers: ['Norris'], team: 'McLaren' },
          { position: 2, drivers: ['Leclerc'], team: 'Ferrari' },
          { position: 3, drivers: ['Verstappen'], team: 'Red Bull Racing' },
        ],
      }],
      fastestLap: 'Russell',
    },
  },

  // Round 21 — Brazilian Grand Prix (9 Nov 2025) — Sprint weekend
  'f1-2025-brazil': {
    sprint_qualifying: {
      overall: { drivers: ['Norris'], team: 'McLaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Norris'], team: 'McLaren' },
          { position: 2, drivers: ['Antonelli'], team: 'Mercedes' },
          { position: 3, drivers: ['Piastri'], team: 'McLaren' },
        ],
      }],
    },
    sprint: {
      overall: { drivers: ['Norris'], team: 'McLaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Norris'], team: 'McLaren' },
          { position: 2, drivers: ['Antonelli'], team: 'Mercedes' },
          { position: 3, drivers: ['Russell'], team: 'Mercedes' },
        ],
      }],
    },
    qualifying: {
      overall: { drivers: ['Norris'], team: 'McLaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Norris'], team: 'McLaren' },
          { position: 2, drivers: ['Antonelli'], team: 'Mercedes' },
          { position: 3, drivers: ['Leclerc'], team: 'Ferrari' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Norris'], team: 'McLaren' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, drivers: ['Norris'], team: 'McLaren' },
          { position: 2, drivers: ['Antonelli'], team: 'Mercedes' },
          { position: 3, drivers: ['Verstappen'], team: 'Red Bull Racing' },
        ],
      }],
      fastestLap: 'Albon',
    },
  },

  // Round 22 — Las Vegas Grand Prix (23 Nov 2025)
  'f1-2025-las-vegas': {
    qualifying: {
      overall: { drivers: ['Norris'], team: 'McLaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Norris'], team: 'McLaren' },
          { position: 2, drivers: ['Verstappen'], team: 'Red Bull Racing' },
          { position: 3, drivers: ['Sainz'], team: 'Williams' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Verstappen'], team: 'Red Bull Racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, drivers: ['Verstappen'], team: 'Red Bull Racing' },
          { position: 2, drivers: ['Russell'], team: 'Mercedes' },
          { position: 3, drivers: ['Antonelli'], team: 'Mercedes' },
        ],
      }],
      fastestLap: 'Verstappen',
    },
  },

  // Round 23 — Qatar Grand Prix (30 Nov 2025) — Sprint weekend
  'f1-2025-qatar': {
    sprint_qualifying: {
      overall: { drivers: ['Piastri'], team: 'McLaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Piastri'], team: 'McLaren' },
          { position: 2, drivers: ['Russell'], team: 'Mercedes' },
          { position: 3, drivers: ['Norris'], team: 'McLaren' },
        ],
      }],
    },
    sprint: {
      overall: { drivers: ['Piastri'], team: 'McLaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Piastri'], team: 'McLaren' },
          { position: 2, drivers: ['Russell'], team: 'Mercedes' },
          { position: 3, drivers: ['Norris'], team: 'McLaren' },
        ],
      }],
    },
    qualifying: {
      overall: { drivers: ['Piastri'], team: 'McLaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Piastri'], team: 'McLaren' },
          { position: 2, drivers: ['Norris'], team: 'McLaren' },
          { position: 3, drivers: ['Verstappen'], team: 'Red Bull Racing' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Verstappen'], team: 'Red Bull Racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, drivers: ['Verstappen'], team: 'Red Bull Racing' },
          { position: 2, drivers: ['Piastri'], team: 'McLaren' },
          { position: 3, drivers: ['Sainz'], team: 'Williams' },
        ],
      }],
      fastestLap: 'Piastri',
    },
  },

  // Round 24 — Abu Dhabi Grand Prix (7 Dec 2025)
  'f1-2025-abu-dhabi': {
    qualifying: {
      overall: { drivers: ['Verstappen'], team: 'Red Bull Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Verstappen'], team: 'Red Bull Racing' },
          { position: 2, drivers: ['Norris'], team: 'McLaren' },
          { position: 3, drivers: ['Piastri'], team: 'McLaren' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Verstappen'], team: 'Red Bull Racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, drivers: ['Verstappen'], team: 'Red Bull Racing' },
          { position: 2, drivers: ['Piastri'], team: 'McLaren' },
          { position: 3, drivers: ['Norris'], team: 'McLaren' },
        ],
      }],
      fastestLap: 'Leclerc',
    },
  },
}
