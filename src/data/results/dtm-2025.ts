import type { EventResults } from './types'

// DTM 2025 results — verified from motorsport.com, autosport.com, gt-report.com, racer.com
// Race 1 + Race 2 per weekend, stored under the event ID
export const dtmResults2025: Record<string, EventResults> = {
  'dtm-2025-oschersleben': {
    qualifying: {
      overall: { driverIds: ['auer'], teamId: 'mercedes-amg-team-landgraf' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['auer'], teamId: 'mercedes-amg-team-landgraf' },
          { position: 2, driverIds: ['gounon'], teamId: 'winward-racing' },
        ],
      }],
    },
    // Race 1: Auer (Mercedes-AMG), Race 2: Güven (Porsche)
    race: {
      overall: { driverIds: ['auer'], teamId: 'mercedes-amg-team-landgraf' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['auer'], teamId: 'mercedes-amg-team-landgraf' },
          { position: 2, driverIds: ['guven'], teamId: 'manthey' },
        ],
      }],
    },
  },
  'dtm-2025-lausitzring': {
    qualifying: {
      overall: { driverIds: ['auer'], teamId: 'mercedes-amg-team-landgraf' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['auer'], teamId: 'mercedes-amg-team-landgraf' },
          { position: 2, driverIds: ['aitken'], teamId: 'emil-frey-racing' },
        ],
      }],
    },
    // Race 1: Auer (Mercedes-AMG), Race 2: Aitken (Ferrari)
    race: {
      overall: { driverIds: ['auer'], teamId: 'mercedes-amg-team-landgraf' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['auer'], teamId: 'mercedes-amg-team-landgraf' },
          { position: 2, driverIds: ['aitken'], teamId: 'emil-frey-racing' },
        ],
      }],
    },
  },
  'dtm-2025-zandvoort': {
    qualifying: {
      overall: { driverIds: ['pepper'], teamId: 'grasser-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pepper'], teamId: 'grasser-racing' },
          { position: 2, driverIds: ['rast'], teamId: 'schubert-motorsport' },
        ],
      }],
    },
    // Race 1: Rast (BMW), Race 2: Güven (Porsche)
    race: {
      overall: { driverIds: ['rast'], teamId: 'schubert-motorsport' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['rast'], teamId: 'schubert-motorsport' },
          { position: 2, driverIds: ['guven'], teamId: 'manthey' },
        ],
      }],
    },
  },
  'dtm-2025-norisring': {
    qualifying: {
      overall: { driverIds: ['pepper'], teamId: 'grasser-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pepper'], teamId: 'grasser-racing' },
          { position: 2, driverIds: ['vermeulen'], teamId: 'emil-frey-racing' },
        ],
      }],
    },
    // Race 1: Pepper (Lamborghini), Race 2: Preining (Porsche)
    race: {
      overall: { driverIds: ['pepper'], teamId: 'grasser-racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['pepper'], teamId: 'grasser-racing' },
          { position: 2, driverIds: ['preining'], teamId: 'manthey' },
        ],
      }],
    },
  },
  'dtm-2025-nurburgring': {
    qualifying: {
      overall: { driverIds: ['aitken'], teamId: 'emil-frey-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['aitken'], teamId: 'emil-frey-racing' },
          { position: 2, driverIds: ['dorr'], teamId: 'dorr-motorsport' },
        ],
      }],
    },
    // Race 1: Aitken (Ferrari), Race 2: Rast (BMW)
    race: {
      overall: { driverIds: ['aitken'], teamId: 'emil-frey-racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['aitken'], teamId: 'emil-frey-racing' },
          { position: 2, driverIds: ['rast'], teamId: 'schubert-motorsport' },
        ],
      }],
    },
  },
  'dtm-2025-sachsenring': {
    qualifying: {
      overall: { driverIds: ['pepper'], teamId: 'grasser-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pepper'], teamId: 'grasser-racing' },
          { position: 2, driverIds: ['aitken'], teamId: 'emil-frey-racing' },
        ],
      }],
    },
    // Race 1: Güven (Porsche), Race 2: Güven (Porsche) — double win
    race: {
      overall: { driverIds: ['guven'], teamId: 'manthey' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['guven'], teamId: 'manthey' },
        ],
      }],
    },
  },
  'dtm-2025-red-bull-ring': {
    qualifying: {
      overall: { driverIds: ['wittmann'], teamId: 'schubert-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['wittmann'], teamId: 'schubert-motorsport' },
          { position: 2, driverIds: ['vermeulen'], teamId: 'emil-frey-racing' },
        ],
      }],
    },
    // Race 1: Rast (BMW), Race 2: Feller (Audi)
    race: {
      overall: { driverIds: ['rast'], teamId: 'schubert-motorsport' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['rast'], teamId: 'schubert-motorsport' },
          { position: 2, driverIds: ['feller'], teamId: 'land-motorsport' },
        ],
      }],
    },
  },
  'dtm-2025-hockenheimring': {
    qualifying: {
      overall: { driverIds: ['green'], teamId: 'emil-frey-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['green'], teamId: 'emil-frey-racing' },
          { position: 2, driverIds: ['magnus'], teamId: 'comtoyou-racing' },
        ],
      }],
    },
    // Race 1: Preining (Porsche), Race 2: Güven (Porsche) — champion
    race: {
      overall: { driverIds: ['guven'], teamId: 'manthey' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['preining'], teamId: 'manthey' },
          { position: 2, driverIds: ['guven'], teamId: 'manthey' },
        ],
      }],
    },
  },
}
