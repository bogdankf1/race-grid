import { EventResults } from './types'

// F1 2026 results — verified from formula1.com, skysports.com
export const f1Results2026: Record<string, EventResults> = {
  'f1-2026-australia': {
    qualifying: {
      overall: { drivers: ['Russell'], team: 'Mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Russell'], team: 'Mercedes' },
          { position: 2, drivers: ['Antonelli'], team: 'Mercedes' },
          { position: 3, drivers: ['Hadjar'], team: 'Red Bull Racing' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Russell'], team: 'Mercedes' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, drivers: ['Russell'], team: 'Mercedes' },
          { position: 2, drivers: ['Antonelli'], team: 'Mercedes' },
          { position: 3, drivers: ['Leclerc'], team: 'Ferrari' },
        ],
      }],
      fastestLap: 'Russell',
    },
  },
  'f1-2026-china': {
    sprint_qualifying: {
      overall: { drivers: ['Russell'], team: 'Mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Russell'], team: 'Mercedes' },
          { position: 2, drivers: ['Antonelli'], team: 'Mercedes' },
          { position: 3, drivers: ['Norris'], team: 'McLaren' },
        ],
      }],
    },
    qualifying: {
      overall: { drivers: ['Antonelli'], team: 'Mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Antonelli'], team: 'Mercedes' },
          { position: 2, drivers: ['Russell'], team: 'Mercedes' },
          { position: 3, drivers: ['Hamilton'], team: 'Ferrari' },
        ],
      }],
    },
    sprint: {
      overall: { drivers: ['Russell'], team: 'Mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Russell'], team: 'Mercedes' },
          { position: 2, drivers: ['Antonelli'], team: 'Mercedes' },
          { position: 3, drivers: ['Norris'], team: 'McLaren' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Antonelli'], team: 'Mercedes' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, drivers: ['Antonelli'], team: 'Mercedes' },
          { position: 2, drivers: ['Russell'], team: 'Mercedes' },
          { position: 3, drivers: ['Hamilton'], team: 'Ferrari' },
        ],
      }],
    },
  },
  'f1-2026-japan': {
    qualifying: {
      overall: { drivers: ['Antonelli'], team: 'Mercedes' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Antonelli'], team: 'Mercedes' },
          { position: 2, drivers: ['Russell'], team: 'Mercedes' },
          { position: 3, drivers: ['Piastri'], team: 'McLaren' },
        ],
      }],
    },
  },
}
