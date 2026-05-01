import type { EventResults } from './types'

// DTM 2022 results — verified from Wikipedia, motorsport.com
// Champion: Sheldon van der Linde (Schubert Motorsport, BMW)
export const dtmResults2022: Record<string, EventResults> = {
  'dtm-2022-portimao': {
    // Race 1: Auer (Mercedes-AMG), Race 2: N. Müller (Audi)
    race: {
      overall: { driverIds: ['auer'], teamId: 'winward-racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['auer'], teamId: 'winward-racing' },
          { position: 2, driverIds: ['n-muller'], teamId: 'team-rosberg' },
        ],
      }],
    },
  },
  'dtm-2022-lausitzring': {
    // Race 1: S. van der Linde (BMW), Race 2: S. van der Linde (BMW) — double win
    race: {
      overall: { driverIds: ['s-van-der-linde'], teamId: 'schubert-motorsport' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['s-van-der-linde'], teamId: 'schubert-motorsport' },
        ],
      }],
    },
  },
  'dtm-2022-imola': {
    // Race 1: Rast (Audi), Race 2: Feller (Audi)
    race: {
      overall: { driverIds: ['rast'], teamId: 'abt-sportsline' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['rast'], teamId: 'abt-sportsline' },
          { position: 2, driverIds: ['feller'], teamId: 'abt-sportsline' },
        ],
      }],
    },
  },
  'dtm-2022-norisring': {
    // Race 1: Preining (Porsche), Race 2: F. Fraga (Ferrari)
    race: {
      overall: { driverIds: ['preining'], teamId: 'manthey' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['preining'], teamId: 'manthey' },
          { position: 2, driverIds: ['f-fraga'], teamId: 'af-corse' },
        ],
      }],
    },
  },
  'dtm-2022-nurburgring': {
    // Race 1: S. van der Linde (BMW), Race 2: Stolz (Mercedes-AMG)
    race: {
      overall: { driverIds: ['s-van-der-linde'], teamId: 'schubert-motorsport' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['s-van-der-linde'], teamId: 'schubert-motorsport' },
          { position: 2, driverIds: ['stolz'], teamId: 'haupt-racing' },
        ],
      }],
    },
  },
  'dtm-2022-spa-francorchamps': {
    // Race 1: Olsen (Porsche), Race 2: N. Cassidy (Ferrari)
    race: {
      overall: { driverIds: ['olsen'], teamId: 'ssr-performance' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['olsen'], teamId: 'ssr-performance' },
          { position: 2, driverIds: ['n-cassidy'], teamId: 'af-corse' },
        ],
      }],
    },
  },
  'dtm-2022-red-bull-ring': {
    // Race 1: N. Cassidy (Ferrari), Race 2: Preining (Porsche)
    race: {
      overall: { driverIds: ['n-cassidy'], teamId: 'af-corse' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['n-cassidy'], teamId: 'af-corse' },
          { position: 2, driverIds: ['preining'], teamId: 'manthey' },
        ],
      }],
    },
  },
  'dtm-2022-hockenheimring': {
    // Race 1: Auer (Mercedes-AMG), Race 2: Wittmann (BMW)
    race: {
      overall: { driverIds: ['auer'], teamId: 'winward-racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['auer'], teamId: 'winward-racing' },
          { position: 2, driverIds: ['wittmann'], teamId: 'walkenhorst' },
        ],
      }],
    },
  },
}
