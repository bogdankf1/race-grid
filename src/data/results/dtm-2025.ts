import { EventResults } from './types'

// DTM 2025 results — verified from motorsport.com, autosport.com, gt-report.com, racer.com
// Race 1 + Race 2 per weekend, stored under the event ID
export const dtmResults2025: Record<string, EventResults> = {
  'dtm-2025-oschersleben': {
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
