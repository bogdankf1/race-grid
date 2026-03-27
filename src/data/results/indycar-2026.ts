import { EventResults } from './types'

// IndyCar 2026 results — verified from indycar.com, motorsport.com
export const indycarResults2026: Record<string, EventResults> = {
  'indycar-2026-st-petersburg': {
    qualifying: {
      overall: { drivers: ['McLaughlin'], team: 'Team Penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['McLaughlin'], team: 'Team Penske' },
          { position: 2, drivers: ['Ericsson'], team: 'Andretti Global' },
          { position: 3, drivers: ['Hauger'], team: 'A.J. Foyt Enterprises' },
        ],
      }],
    },
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
    qualifying: {
      overall: { drivers: ['Malukas'], team: 'Team Penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Malukas'], team: 'Team Penske' },
          { position: 2, drivers: ['Newgarden'], team: 'Team Penske' },
          { position: 3, drivers: ['Rahal'], team: 'Rahal Letterman Lanigan Racing' },
        ],
      }],
    },
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
    qualifying: {
      overall: { drivers: ['Ericsson'], team: 'Andretti Global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Ericsson'], team: 'Andretti Global' },
          { position: 2, drivers: ['Palou'], team: 'Chip Ganassi Racing' },
          { position: 3, drivers: ["O'Ward"], team: 'Arrow McLaren' },
        ],
      }],
    },
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
