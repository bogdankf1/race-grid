import { EventResults } from './types'

// GTWC Europe 2025 results — verified from gt-world-challenge-europe.com, sportscar365.com, motorsport.com
export const gtwcResults2025: Record<string, EventResults> = {
  'gtwc-2025-paul-ricard': {
    endurance: {
      overall: { drivers: ['Weerts', 'De Wilde', 'K. van der Linde'], team: 'Team WRT BMW' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, drivers: ['Weerts', 'De Wilde', 'K. van der Linde'], team: 'Team WRT BMW' },
        ],
      }],
    },
  },
  'gtwc-2025-brands-hatch': {
    // Sprint: Race 1: Rovera/Abril (Ferrari), Race 2: Kirchhöfer/Goethe (McLaren)
    race: {
      overall: { drivers: ['Rovera', 'Abril'], team: 'AF Corse Ferrari' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, drivers: ['Rovera', 'Abril'], team: 'AF Corse Ferrari' },
          { position: 2, drivers: ['Kirchhöfer', 'Goethe'], team: 'Garage 59 McLaren' },
        ],
      }],
    },
  },
  'gtwc-2025-zandvoort': {
    // Sprint: Race 1: Niederhauser/Müller (Porsche), Race 2: K. van der Linde/Weerts (BMW)
    race: {
      overall: { drivers: ['Niederhauser', 'Müller'], team: 'Rutronik Racing Porsche' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, drivers: ['Niederhauser', 'Müller'], team: 'Rutronik Racing Porsche' },
          { position: 2, drivers: ['K. van der Linde', 'Weerts'], team: 'Team WRT BMW' },
        ],
      }],
    },
  },
  'gtwc-2025-monza': {
    endurance: {
      overall: { drivers: ['Cairoli', 'Engel', 'Auer'], team: 'Mercedes-AMG Team Mann-Filter' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, drivers: ['Cairoli', 'Engel', 'Auer'], team: 'Mercedes-AMG Team Mann-Filter' },
        ],
      }],
    },
  },
  'gtwc-2025-spa-24h': {
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
  'gtwc-2025-misano': {
    // Sprint: Race 1: Rossi/Marciello (BMW), Race 2: Kirchhöfer/Goethe (McLaren)
    race: {
      overall: { drivers: ['Rossi', 'Marciello'], team: 'Team WRT BMW' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, drivers: ['Rossi', 'Marciello'], team: 'Team WRT BMW' },
          { position: 2, drivers: ['Kirchhöfer', 'Goethe'], team: 'Garage 59 McLaren' },
        ],
      }],
    },
  },
  'gtwc-2025-magny-cours': {
    // Sprint: Race 1: Engstler/Pepper (Lamborghini), Race 2: Kirchhöfer/Goethe (McLaren)
    race: {
      overall: { drivers: ['Engstler', 'Pepper'], team: 'Grasser Racing Lamborghini' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, drivers: ['Engstler', 'Pepper'], team: 'Grasser Racing Lamborghini' },
          { position: 2, drivers: ['Kirchhöfer', 'Goethe'], team: 'Garage 59 McLaren' },
        ],
      }],
    },
  },
  'gtwc-2025-nurburgring': {
    endurance: {
      overall: { drivers: ['Farfus', 'Krohn', 'Marciello'], team: 'ROWE Racing BMW' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, drivers: ['Farfus', 'Krohn', 'Marciello'], team: 'ROWE Racing BMW' },
        ],
      }],
    },
  },
  'gtwc-2025-valencia': {
    // Sprint: Race 1: Pepper/Engstler (Lamborghini), Race 2: K. van der Linde/Weerts (BMW)
    race: {
      overall: { drivers: ['Pepper', 'Engstler'], team: 'Grasser Racing Lamborghini' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, drivers: ['Pepper', 'Engstler'], team: 'Grasser Racing Lamborghini' },
          { position: 2, drivers: ['K. van der Linde', 'Weerts'], team: 'Team WRT BMW' },
        ],
      }],
    },
  },
  'gtwc-2025-barcelona': {
    endurance: {
      overall: { drivers: ['Prette', 'Smalley', 'MacDonald'], team: 'Garage 59 McLaren' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, drivers: ['Prette', 'Smalley', 'MacDonald'], team: 'Garage 59 McLaren' },
        ],
      }],
    },
  },
}
