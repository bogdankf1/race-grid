import { EventResults } from './types'

// IGTC 2025 results — verified from intercontinentalgtchallenge.com, sportscar365.com, motorsport.com
export const igtcResults2025: Record<string, EventResults> = {
  'igtc-2025-bathurst': {
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
