import { EventResults } from './types'

// IGTC 2025 results — verified from intercontinentalgtchallenge.com, sportscar365.com, motorsport.com
export const igtcResults2025: Record<string, EventResults> = {
  'igtc-2025-bathurst': {
    qualifying: {
      overall: { drivers: ['Auer', 'Goetz', 'Ojeda'], team: 'Craft-Bamboo Racing Mercedes-AMG #77' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Auer', 'Goetz', 'Ojeda'], team: 'Craft-Bamboo Racing Mercedes-AMG #77' }] }],
    },
    endurance: {
      overall: { drivers: ['K. van der Linde', 'S. van der Linde', 'Farfus'], team: 'Team WRT BMW' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, drivers: ['K. van der Linde', 'S. van der Linde', 'Farfus'], team: 'Team WRT BMW' },
          { position: 2, drivers: ['Marciello'], team: 'Team WRT BMW' },
          { position: 3, drivers: ['Gounon'], team: 'SunEnergy1 Racing Mercedes-AMG' },
        ],
      }],
    },
  },
  'igtc-2025-nurburgring': {
    qualifying: {
      overall: { drivers: ['Estre', 'Preining', 'Güven'], team: 'Manthey EMA Porsche #911' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Estre', 'Preining', 'Güven'], team: 'Manthey EMA Porsche #911' }] }],
    },
    // N24 — ROWE Racing BMW won after Manthey Porsche post-race penalty
    endurance: {
      overall: { drivers: ['Farfus', 'Krohn', 'Marciello', 'K. van der Linde'], team: 'ROWE Racing BMW' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, drivers: ['Farfus', 'Krohn', 'Marciello', 'K. van der Linde'], team: 'ROWE Racing BMW' },
        ],
      }],
    },
  },
  'igtc-2025-spa': {
    qualifying: {
      overall: { drivers: ['Kirchhöfer'], team: 'Garage 59 McLaren #59' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Kirchhöfer'], team: 'Garage 59 McLaren #59' }] }],
    },
    // 24 Hours of Spa — also counts as GTWC Endurance
    endurance: {
      overall: { drivers: ['Bortolotti', 'Pepper', 'Engstler'], team: 'Grasser Racing Lamborghini' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, drivers: ['Bortolotti', 'Pepper', 'Engstler'], team: 'Grasser Racing Lamborghini' },
        ],
      }],
    },
  },
  'igtc-2025-suzuka': {
    qualifying: {
      overall: { drivers: ['K. van der Linde', 'Marciello', 'Weerts'], team: 'Team WRT BMW #32' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['K. van der Linde', 'Marciello', 'Weerts'], team: 'Team WRT BMW #32' }] }],
    },
    endurance: {
      overall: { drivers: ['K. van der Linde', 'Marciello', 'Weerts'], team: 'Team WRT BMW' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, drivers: ['K. van der Linde', 'Marciello', 'Weerts'], team: 'Team WRT BMW' },
        ],
      }],
    },
  },
  'igtc-2025-indianapolis': {
    qualifying: {
      overall: { drivers: ['Gounon', 'Martin', 'Hodenius'], team: 'Lone Star Racing Mercedes-AMG #80' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Gounon', 'Martin', 'Hodenius'], team: 'Lone Star Racing Mercedes-AMG #80' }] }],
    },
    endurance: {
      overall: { drivers: ['K. van der Linde', 'Rossi', 'Weerts'], team: 'Team WRT BMW' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, drivers: ['K. van der Linde', 'Rossi', 'Weerts'], team: 'Team WRT BMW' },
        ],
      }],
    },
  },
}
