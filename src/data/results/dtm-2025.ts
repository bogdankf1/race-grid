import { EventResults } from './types'

// DTM 2025 results — verified from motorsport.com, autosport.com, gt-report.com, racer.com
// Race 1 + Race 2 per weekend, stored under the event ID
export const dtmResults2025: Record<string, EventResults> = {
  'dtm-2025-oschersleben': {
    qualifying: {
      overall: { drivers: ['Auer'], team: 'Mercedes-AMG Team Landgraf' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Auer'], team: 'Mercedes-AMG Team Landgraf' },
          { position: 2, drivers: ['Gounon'], team: 'Mercedes-AMG Team Winward' },
        ],
      }],
    },
    // Race 1: Auer (Mercedes-AMG), Race 2: Güven (Porsche)
    race: {
      overall: { drivers: ['Auer'], team: 'Mercedes-AMG Team Landgraf' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, drivers: ['Auer'], team: 'Mercedes-AMG Team Landgraf' },
          { position: 2, drivers: ['Güven'], team: 'Manthey EMA Porsche' },
        ],
      }],
    },
  },
  'dtm-2025-lausitzring': {
    qualifying: {
      overall: { drivers: ['Auer'], team: 'Mercedes-AMG Team Landgraf' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Auer'], team: 'Mercedes-AMG Team Landgraf' },
          { position: 2, drivers: ['Aitken'], team: 'Emil Frey Racing Ferrari' },
        ],
      }],
    },
    // Race 1: Auer (Mercedes-AMG), Race 2: Aitken (Ferrari)
    race: {
      overall: { drivers: ['Auer'], team: 'Mercedes-AMG Team Landgraf' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, drivers: ['Auer'], team: 'Mercedes-AMG Team Landgraf' },
          { position: 2, drivers: ['Aitken'], team: 'Emil Frey Racing Ferrari' },
        ],
      }],
    },
  },
  'dtm-2025-zandvoort': {
    qualifying: {
      overall: { drivers: ['Pepper'], team: 'Grasser Racing Lamborghini' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Pepper'], team: 'Grasser Racing Lamborghini' },
          { position: 2, drivers: ['Rast'], team: 'Schubert Motorsport BMW' },
        ],
      }],
    },
    // Race 1: Rast (BMW), Race 2: Güven (Porsche)
    race: {
      overall: { drivers: ['Rast'], team: 'Schubert Motorsport BMW' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, drivers: ['Rast'], team: 'Schubert Motorsport BMW' },
          { position: 2, drivers: ['Güven'], team: 'Manthey EMA Porsche' },
        ],
      }],
    },
  },
  'dtm-2025-norisring': {
    qualifying: {
      overall: { drivers: ['Pepper'], team: 'Grasser Racing Lamborghini' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Pepper'], team: 'Grasser Racing Lamborghini' },
          { position: 2, drivers: ['Vermeulen'], team: 'Emil Frey Racing Ferrari' },
        ],
      }],
    },
    // Race 1: Pepper (Lamborghini), Race 2: Preining (Porsche)
    race: {
      overall: { drivers: ['Pepper'], team: 'Grasser Racing Lamborghini' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, drivers: ['Pepper'], team: 'Grasser Racing Lamborghini' },
          { position: 2, drivers: ['Preining'], team: 'Manthey EMA Porsche' },
        ],
      }],
    },
  },
  'dtm-2025-nurburgring': {
    qualifying: {
      overall: { drivers: ['Aitken'], team: 'Emil Frey Racing Ferrari' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Aitken'], team: 'Emil Frey Racing Ferrari' },
          { position: 2, drivers: ['Dörr'], team: 'Dörr Motorsport' },
        ],
      }],
    },
    // Race 1: Aitken (Ferrari), Race 2: Rast (BMW)
    race: {
      overall: { drivers: ['Aitken'], team: 'Emil Frey Racing Ferrari' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, drivers: ['Aitken'], team: 'Emil Frey Racing Ferrari' },
          { position: 2, drivers: ['Rast'], team: 'Schubert Motorsport BMW' },
        ],
      }],
    },
  },
  'dtm-2025-sachsenring': {
    qualifying: {
      overall: { drivers: ['Pepper'], team: 'Grasser Racing Lamborghini' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Pepper'], team: 'Grasser Racing Lamborghini' },
          { position: 2, drivers: ['Aitken'], team: 'Emil Frey Racing Ferrari' },
        ],
      }],
    },
    // Race 1: Güven (Porsche), Race 2: Güven (Porsche) — double win
    race: {
      overall: { drivers: ['Güven'], team: 'Manthey EMA Porsche' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, drivers: ['Güven'], team: 'Manthey EMA Porsche' },
        ],
      }],
    },
  },
  'dtm-2025-red-bull-ring': {
    qualifying: {
      overall: { drivers: ['Wittmann'], team: 'Schubert Motorsport BMW' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Wittmann'], team: 'Schubert Motorsport BMW' },
          { position: 2, drivers: ['Vermeulen'], team: 'Emil Frey Racing Ferrari' },
        ],
      }],
    },
    // Race 1: Rast (BMW), Race 2: Feller (Audi)
    race: {
      overall: { drivers: ['Rast'], team: 'Schubert Motorsport BMW' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, drivers: ['Rast'], team: 'Schubert Motorsport BMW' },
          { position: 2, drivers: ['Feller'], team: 'Land Motorsport Audi' },
        ],
      }],
    },
  },
  'dtm-2025-hockenheimring': {
    qualifying: {
      overall: { drivers: ['Green'], team: 'Emil Frey Racing Ferrari' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Green'], team: 'Emil Frey Racing Ferrari' },
          { position: 2, drivers: ['Magnus'], team: 'Comtoyou Racing' },
        ],
      }],
    },
    // Race 1: Preining (Porsche), Race 2: Güven (Porsche) — champion
    race: {
      overall: { drivers: ['Güven'], team: 'Manthey EMA Porsche' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, drivers: ['Preining'], team: 'Manthey EMA Porsche' },
          { position: 2, drivers: ['Güven'], team: 'Manthey EMA Porsche' },
        ],
      }],
    },
  },
}
