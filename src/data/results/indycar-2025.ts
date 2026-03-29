import { EventResults } from './types'

// IndyCar 2025 results — verified from indycar.com, en.wikipedia.org, motorsport.com
export const indycarResults2025: Record<string, EventResults> = {
  'indycar-2025-st-petersburg': {
    qualifying: {
      overall: { drivers: ['McLaughlin'], team: 'Team Penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['McLaughlin'], team: 'Team Penske' },
          { position: 2, drivers: ['Dixon'], team: 'Chip Ganassi Racing' },
          { position: 3, drivers: ['Newgarden'], team: 'Team Penske' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Palou'], team: 'Chip Ganassi Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Palou'], team: 'Chip Ganassi Racing' },
          { position: 2, drivers: ['Dixon'], team: 'Chip Ganassi Racing' },
          { position: 3, drivers: ['Newgarden'], team: 'Team Penske' },
        ],
      }],
    },
  },
  'indycar-2025-thermal': {
    qualifying: {
      overall: { drivers: ["O'Ward"], team: 'Arrow McLaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ["O'Ward"], team: 'Arrow McLaren' },
          { position: 2, drivers: ['Palou'], team: 'Chip Ganassi Racing' },
          { position: 3, drivers: ['Lundgaard'], team: 'Arrow McLaren' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Palou'], team: 'Chip Ganassi Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Palou'], team: 'Chip Ganassi Racing' },
          { position: 2, drivers: ["O'Ward"], team: 'Arrow McLaren' },
          { position: 3, drivers: ['Lundgaard'], team: 'Arrow McLaren' },
        ],
      }],
    },
  },
  'indycar-2025-long-beach': {
    qualifying: {
      overall: { drivers: ['Kirkwood'], team: 'Andretti Global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Kirkwood'], team: 'Andretti Global' },
          { position: 2, drivers: ['Palou'], team: 'Chip Ganassi Racing' },
          { position: 3, drivers: ['Lundgaard'], team: 'Arrow McLaren' },
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
          { position: 3, drivers: ['Lundgaard'], team: 'Arrow McLaren' },
        ],
      }],
    },
  },
  'indycar-2025-barber': {
    qualifying: {
      overall: { drivers: ['Palou'], team: 'Chip Ganassi Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Palou'], team: 'Chip Ganassi Racing' },
          { position: 2, drivers: ['McLaughlin'], team: 'Team Penske' },
          { position: 3, drivers: ['Lundgaard'], team: 'Arrow McLaren' },
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
          { position: 3, drivers: ['Lundgaard'], team: 'Arrow McLaren' },
        ],
      }],
    },
  },
  'indycar-2025-indianapolis-gp': {
    qualifying: {
      overall: { drivers: ['Palou'], team: 'Chip Ganassi Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Palou'], team: 'Chip Ganassi Racing' },
          { position: 2, drivers: ["O'Ward"], team: 'Arrow McLaren' },
          { position: 3, drivers: ['Power'], team: 'Team Penske' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Palou'], team: 'Chip Ganassi Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Palou'], team: 'Chip Ganassi Racing' },
          { position: 2, drivers: ["O'Ward"], team: 'Arrow McLaren' },
          { position: 3, drivers: ['Power'], team: 'Team Penske' },
        ],
      }],
    },
  },
  'indycar-2025-indy500': {
    qualifying: {
      overall: { drivers: ['Shwartzman'], team: 'PREMA Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Shwartzman'], team: 'PREMA Racing' },
          { position: 2, drivers: ['Palou'], team: 'Chip Ganassi Racing' },
          { position: 3, drivers: ["O'Ward"], team: 'Arrow McLaren' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Palou'], team: 'Chip Ganassi Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Palou'], team: 'Chip Ganassi Racing' },
          { position: 2, drivers: ['Malukas'], team: 'A.J. Foyt Enterprises' },
          { position: 3, drivers: ["O'Ward"], team: 'Arrow McLaren' },
        ],
      }],
    },
  },
  'indycar-2025-detroit': {
    qualifying: {
      overall: { drivers: ['Herta'], team: 'Andretti Global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Herta'], team: 'Andretti Global' },
          { position: 2, drivers: ['Kirkwood'], team: 'Andretti Global' },
          { position: 3, drivers: ['Ferrucci'], team: 'A.J. Foyt Enterprises' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Kirkwood'], team: 'Andretti Global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Kirkwood'], team: 'Andretti Global' },
          { position: 2, drivers: ['Ferrucci'], team: 'A.J. Foyt Enterprises' },
          { position: 3, drivers: ['Herta'], team: 'Andretti Global' },
        ],
      }],
    },
  },
  'indycar-2025-wwtr': {
    qualifying: {
      overall: { drivers: ['Power'], team: 'Team Penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Power'], team: 'Team Penske' },
          { position: 2, drivers: ["O'Ward"], team: 'Arrow McLaren' },
          { position: 3, drivers: ['Kirkwood'], team: 'Andretti Global' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Kirkwood'], team: 'Andretti Global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Kirkwood'], team: 'Andretti Global' },
          { position: 2, drivers: ["O'Ward"], team: 'Arrow McLaren' },
          { position: 3, drivers: ['Rasmussen'], team: 'Ed Carpenter Racing' },
        ],
      }],
    },
  },
  'indycar-2025-road-america': {
    qualifying: {
      overall: { drivers: ['Foster'], team: 'Rahal Letterman Lanigan Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Foster'], team: 'Rahal Letterman Lanigan Racing' },
          { position: 2, drivers: ['Palou'], team: 'Chip Ganassi Racing' },
          { position: 3, drivers: ['Rosenqvist'], team: 'Meyer Shank Racing' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Palou'], team: 'Chip Ganassi Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Palou'], team: 'Chip Ganassi Racing' },
          { position: 2, drivers: ['Rosenqvist'], team: 'Meyer Shank Racing' },
          { position: 3, drivers: ['Ferrucci'], team: 'A.J. Foyt Enterprises' },
        ],
      }],
    },
  },
  'indycar-2025-mid-ohio': {
    qualifying: {
      overall: { drivers: ['Palou'], team: 'Chip Ganassi Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Palou'], team: 'Chip Ganassi Racing' },
          { position: 2, drivers: ['Dixon'], team: 'Chip Ganassi Racing' },
          { position: 3, drivers: ['Lundgaard'], team: 'Arrow McLaren' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Dixon'], team: 'Chip Ganassi Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Dixon'], team: 'Chip Ganassi Racing' },
          { position: 2, drivers: ['Lundgaard'], team: 'Arrow McLaren' },
          { position: 3, drivers: ['Herta'], team: 'Andretti Global' },
        ],
      }],
    },
  },
  'indycar-2025-iowa-1': {
    qualifying: {
      overall: { drivers: ['Newgarden'], team: 'Team Penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Newgarden'], team: 'Team Penske' },
          { position: 2, drivers: ["O'Ward"], team: 'Arrow McLaren' },
          { position: 3, drivers: ['Power'], team: 'Team Penske' },
        ],
      }],
    },
    race: {
      overall: { drivers: ["O'Ward"], team: 'Arrow McLaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ["O'Ward"], team: 'Arrow McLaren' },
          { position: 2, drivers: ['Newgarden'], team: 'Team Penske' },
          { position: 3, drivers: ['Power'], team: 'Team Penske' },
        ],
      }],
    },
  },
  'indycar-2025-iowa-2': {
    qualifying: {
      overall: { drivers: ['Palou'], team: 'Chip Ganassi Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Palou'], team: 'Chip Ganassi Racing' },
          { position: 2, drivers: ['Dixon'], team: 'Chip Ganassi Racing' },
          { position: 3, drivers: ['Armstrong'], team: 'Meyer Shank Racing' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Palou'], team: 'Chip Ganassi Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Palou'], team: 'Chip Ganassi Racing' },
          { position: 2, drivers: ['Dixon'], team: 'Chip Ganassi Racing' },
          { position: 3, drivers: ['Armstrong'], team: 'Meyer Shank Racing' },
        ],
      }],
    },
  },
  'indycar-2025-toronto': {
    qualifying: {
      overall: { drivers: ['Herta'], team: 'Andretti Global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Herta'], team: 'Andretti Global' },
          { position: 2, drivers: ["O'Ward"], team: 'Arrow McLaren' },
          { position: 3, drivers: ['VeeKay'], team: 'Dale Coyne Racing' },
        ],
      }],
    },
    race: {
      overall: { drivers: ["O'Ward"], team: 'Arrow McLaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ["O'Ward"], team: 'Arrow McLaren' },
          { position: 2, drivers: ['VeeKay'], team: 'Dale Coyne Racing' },
          { position: 3, drivers: ['Simpson'], team: 'Chip Ganassi Racing' },
        ],
      }],
    },
  },
  'indycar-2025-laguna-seca': {
    qualifying: {
      overall: { drivers: ['Palou'], team: 'Chip Ganassi Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Palou'], team: 'Chip Ganassi Racing' },
          { position: 2, drivers: ['Lundgaard'], team: 'Arrow McLaren' },
          { position: 3, drivers: ['Herta'], team: 'Andretti Global' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Palou'], team: 'Chip Ganassi Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Palou'], team: 'Chip Ganassi Racing' },
          { position: 2, drivers: ['Lundgaard'], team: 'Arrow McLaren' },
          { position: 3, drivers: ['Herta'], team: 'Andretti Global' },
        ],
      }],
    },
  },
  'indycar-2025-portland': {
    qualifying: {
      overall: { drivers: ['Lundgaard'], team: 'Arrow McLaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Lundgaard'], team: 'Arrow McLaren' },
          { position: 2, drivers: ["O'Ward"], team: 'Arrow McLaren' },
          { position: 3, drivers: ['Palou'], team: 'Chip Ganassi Racing' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Power'], team: 'Team Penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Power'], team: 'Team Penske' },
          { position: 2, drivers: ['Lundgaard'], team: 'Arrow McLaren' },
          { position: 3, drivers: ['Palou'], team: 'Chip Ganassi Racing' },
        ],
      }],
    },
  },
  'indycar-2025-milwaukee': {
    qualifying: {
      overall: { drivers: ['Palou'], team: 'Chip Ganassi Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Palou'], team: 'Chip Ganassi Racing' },
          { position: 2, drivers: ['Rasmussen'], team: 'Ed Carpenter Racing' },
          { position: 3, drivers: ['Newgarden'], team: 'Team Penske' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Rasmussen'], team: 'Ed Carpenter Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Rasmussen'], team: 'Ed Carpenter Racing' },
          { position: 2, drivers: ['Palou'], team: 'Chip Ganassi Racing' },
          { position: 3, drivers: ['Newgarden'], team: 'Team Penske' },
        ],
      }],
    },
  },
  'indycar-2025-nashville': {
    qualifying: {
      overall: { drivers: ["O'Ward"], team: 'Arrow McLaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ["O'Ward"], team: 'Arrow McLaren' },
          { position: 2, drivers: ['Palou'], team: 'Chip Ganassi Racing' },
          { position: 3, drivers: ['McLaughlin'], team: 'Team Penske' },
        ],
      }],
    },
    race: {
      overall: { drivers: ['Newgarden'], team: 'Team Penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Newgarden'], team: 'Team Penske' },
          { position: 2, drivers: ['Palou'], team: 'Chip Ganassi Racing' },
          { position: 3, drivers: ['McLaughlin'], team: 'Team Penske' },
        ],
      }],
    },
  },
}
