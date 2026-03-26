import { EventResults } from './types'

// IndyCar 2026 results — verified from indycar.com, motorsport.com
export const indycarResults2026: Record<string, EventResults> = {
  'indycar-2026-st-petersburg': {
    race: {
      overall: { drivers: ['Palou'], team: 'Chip Ganassi Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Palou'], team: 'Chip Ganassi Racing' },
          { position: 2, drivers: ['McLaughlin'], team: 'Team Penske' },
          { position: 3, drivers: ['Lundgaard'], team: 'Rahal Letterman Lanigan Racing' },
        ],
      }],
    },
  },
  'indycar-2026-phoenix': {
    race: {
      overall: { drivers: ['Newgarden'], team: 'Team Penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Newgarden'], team: 'Team Penske' },
          { position: 2, drivers: ['Kirkwood'], team: 'Andretti Global' },
          { position: 3, drivers: ['Malukas'], team: 'Meyer Shank Racing' },
        ],
      }],
    },
  },
  'indycar-2026-arlington': {
    race: {
      overall: { drivers: ['Kirkwood'], team: 'Andretti Global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Kirkwood'], team: 'Andretti Global' },
          { position: 2, drivers: ['Palou'], team: 'Chip Ganassi Racing' },
          { position: 3, drivers: ['Power'], team: 'Team Penske' },
        ],
      }],
    },
  },
}
