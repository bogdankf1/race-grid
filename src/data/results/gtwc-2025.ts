import type { EventResults } from './types'

// GTWC Europe 2025 results — verified from gt-world-challenge-europe.com, sportscar365.com, motorsport.com
export const gtwcResults2025: Record<string, EventResults> = {
  'gtwc-2025-paul-ricard': {
    qualifying: {
      overall: { driverIds: ['auer', 'cairoli', 'engel'], teamId: 'mann-filter' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['auer', 'cairoli', 'engel'], teamId: 'mann-filter' }] }],
    },
    endurance: {
      overall: { driverIds: ['weerts', 'de-wilde', 'k-van-der-linde'], teamId: 'team-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['weerts', 'de-wilde', 'k-van-der-linde'], teamId: 'team-wrt' },
        ],
      }],
    },
  },
  'gtwc-2025-brands-hatch': {
    qualifying: {
      overall: { driverIds: ['lulham', 'vermeulen'], teamId: 'emil-frey-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['lulham', 'vermeulen'], teamId: 'emil-frey-racing' }] }],
    },
    // Sprint: Race 1: Rovera/Abril (Ferrari), Race 2: Kirchhöfer/Goethe (McLaren)
    race: {
      overall: { driverIds: ['rovera', 'abril'], teamId: 'ferrari-af-corse' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['rovera', 'abril'], teamId: 'ferrari-af-corse' },
          { position: 2, driverIds: ['kirchhofer', 'goethe'], teamId: 'garage-59' },
        ],
      }],
    },
  },
  'gtwc-2025-zandvoort': {
    qualifying: {
      overall: { driverIds: ['buus', 'mardini'], teamId: 'lionspeed' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['buus', 'mardini'], teamId: 'lionspeed' }] }],
    },
    // Sprint: Race 1: Niederhauser/Müller (Porsche), Race 2: K. van der Linde/Weerts (BMW)
    race: {
      overall: { driverIds: ['niederhauser', 'muller'], teamId: 'rutronik-racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['niederhauser', 'muller'], teamId: 'rutronik-racing' },
          { position: 2, driverIds: ['k-van-der-linde', 'weerts'], teamId: 'team-wrt' },
        ],
      }],
    },
  },
  'gtwc-2025-monza': {
    qualifying: {
      overall: { driverIds: ['stolz', 'gounon', 'schiller'], teamId: 'getspeed' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['stolz', 'gounon', 'schiller'], teamId: 'getspeed' }] }],
    },
    endurance: {
      overall: { driverIds: ['cairoli', 'engel', 'auer'], teamId: 'mann-filter' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['cairoli', 'engel', 'auer'], teamId: 'mann-filter' },
        ],
      }],
    },
  },
  'gtwc-2025-spa-24h': {
    qualifying: {
      overall: { driverIds: ['kirchhofer'], teamId: 'garage-59' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['kirchhofer'], teamId: 'garage-59' }] }],
    },
    endurance: {
      overall: { driverIds: ['bortolotti', 'pepper', 'engstler'], teamId: 'grasser-racing' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['bortolotti', 'pepper', 'engstler'], teamId: 'grasser-racing' },
        ],
      }],
    },
  },
  'gtwc-2025-misano': {
    qualifying: {
      overall: { driverIds: ['abril', 'rovera'], teamId: 'ferrari-af-corse' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['abril', 'rovera'], teamId: 'ferrari-af-corse' }] }],
    },
    // Sprint: Race 1: Rossi/Marciello (BMW), Race 2: Kirchhöfer/Goethe (McLaren)
    race: {
      overall: { driverIds: ['rossi', 'marciello'], teamId: 'team-wrt' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['rossi', 'marciello'], teamId: 'team-wrt' },
          { position: 2, driverIds: ['kirchhofer', 'goethe'], teamId: 'garage-59' },
        ],
      }],
    },
  },
  'gtwc-2025-magny-cours': {
    qualifying: {
      overall: { driverIds: ['engstler', 'pepper'], teamId: 'grasser-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['engstler', 'pepper'], teamId: 'grasser-racing' }] }],
    },
    // Sprint: Race 1: Engstler/Pepper (Lamborghini), Race 2: Kirchhöfer/Goethe (McLaren)
    race: {
      overall: { driverIds: ['engstler', 'pepper'], teamId: 'grasser-racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['engstler', 'pepper'], teamId: 'grasser-racing' },
          { position: 2, driverIds: ['kirchhofer', 'goethe'], teamId: 'garage-59' },
        ],
      }],
    },
  },
  'gtwc-2025-nurburgring': {
    qualifying: {
      overall: { driverIds: ['farfus', 'krohn', 'marciello'], teamId: 'rowe-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['farfus', 'krohn', 'marciello'], teamId: 'rowe-racing' }] }],
    },
    endurance: {
      overall: { driverIds: ['farfus', 'krohn', 'marciello'], teamId: 'rowe-racing' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['farfus', 'krohn', 'marciello'], teamId: 'rowe-racing' },
        ],
      }],
    },
  },
  'gtwc-2025-valencia': {
    qualifying: {
      overall: { driverIds: ['blattner', 'marschall'], teamId: 'kessel-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['blattner', 'marschall'], teamId: 'kessel-racing' }] }],
    },
    // Sprint: Race 1: Pepper/Engstler (Lamborghini), Race 2: K. van der Linde/Weerts (BMW)
    race: {
      overall: { driverIds: ['pepper', 'engstler'], teamId: 'grasser-racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['pepper', 'engstler'], teamId: 'grasser-racing' },
          { position: 2, driverIds: ['k-van-der-linde', 'weerts'], teamId: 'team-wrt' },
        ],
      }],
    },
  },
  'gtwc-2025-barcelona': {
    qualifying: {
      overall: { driverIds: ['smalley', 'prette', 'macdonald'], teamId: 'garage-59' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['smalley', 'prette', 'macdonald'], teamId: 'garage-59' }] }],
    },
    endurance: {
      overall: { driverIds: ['prette', 'smalley', 'macdonald'], teamId: 'garage-59' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['prette', 'smalley', 'macdonald'], teamId: 'garage-59' },
        ],
      }],
    },
  },
}
