import { EventResults } from './types'

// GTWC Europe 2025 results — verified from gt-world-challenge-europe.com, sportscar365.com, motorsport.com
export const gtwcResults2025: Record<string, EventResults> = {
  'gtwc-2025-paul-ricard': {
    qualifying: {
      overall: { drivers: ['Auer', 'Cairoli', 'Engel'], team: 'Mercedes-AMG Team Mann-Filter #48' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Auer', 'Cairoli', 'Engel'], team: 'Mercedes-AMG Team Mann-Filter #48' }] }],
    },
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
    qualifying: {
      overall: { drivers: ['Lulham', 'Vermeulen'], team: 'Emil Frey Racing #69' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Lulham', 'Vermeulen'], team: 'Emil Frey Racing #69' }] }],
    },
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
    qualifying: {
      overall: { drivers: ['Buus', 'Mardini'], team: 'Lionspeed GP #89' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Buus', 'Mardini'], team: 'Lionspeed GP #89' }] }],
    },
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
    qualifying: {
      overall: { drivers: ['Stolz', 'Gounon', 'Schiller'], team: 'Mercedes-AMG Team GetSpeed #17' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Stolz', 'Gounon', 'Schiller'], team: 'Mercedes-AMG Team GetSpeed #17' }] }],
    },
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
    qualifying: {
      overall: { drivers: ['Kirchhöfer'], team: 'Garage 59 McLaren #59' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Kirchhöfer'], team: 'Garage 59 McLaren #59' }] }],
    },
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
    qualifying: {
      overall: { drivers: ['Abril', 'Rovera'], team: 'AF Corse #51' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Abril', 'Rovera'], team: 'AF Corse #51' }] }],
    },
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
    qualifying: {
      overall: { drivers: ['Engstler', 'Pepper'], team: 'Grasser Racing Lamborghini #63' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Engstler', 'Pepper'], team: 'Grasser Racing Lamborghini #63' }] }],
    },
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
    qualifying: {
      overall: { drivers: ['Farfus', 'Krohn', 'Marciello'], team: 'ROWE Racing BMW #98' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Farfus', 'Krohn', 'Marciello'], team: 'ROWE Racing BMW #98' }] }],
    },
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
    qualifying: {
      overall: { drivers: ['Blattner', 'Marschall'], team: 'Kessel Racing #74' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Blattner', 'Marschall'], team: 'Kessel Racing #74' }] }],
    },
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
    qualifying: {
      overall: { drivers: ['Smalley', 'Prette', 'MacDonald'], team: 'Garage 59 McLaren #58' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Smalley', 'Prette', 'MacDonald'], team: 'Garage 59 McLaren #58' }] }],
    },
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
