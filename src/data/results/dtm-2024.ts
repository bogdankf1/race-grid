import type { EventResults } from './types'

// DTM 2024 results — verified from Wikipedia, motorsport.com
// Champion: Kelvin van der Linde (Abt Sportsline, Audi)
export const dtmResults2024: Record<string, EventResults> = {
  'dtm-2024-oschersleben': {
    // Race 1: Aitken (Ferrari), Race 2: Bortolotti (Lamborghini)
    race: {
      overall: { driverIds: ['aitken'], teamId: 'emil-frey-racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['aitken'], teamId: 'emil-frey-racing' },
          { position: 2, driverIds: ['bortolotti'], teamId: 'ssr-performance' },
        ],
      }],
    },
  },
  'dtm-2024-lausitzring': {
    // Race 1: K. van der Linde (Audi), Race 2: Preining (Porsche)
    race: {
      overall: { driverIds: ['k-van-der-linde'], teamId: 'abt-sportsline' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['k-van-der-linde'], teamId: 'abt-sportsline' },
          { position: 2, driverIds: ['preining'], teamId: 'manthey' },
        ],
      }],
    },
  },
  'dtm-2024-zandvoort': {
    // Race 1: Aitken (Ferrari), Race 2: Wittmann (BMW)
    race: {
      overall: { driverIds: ['aitken'], teamId: 'emil-frey-racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['aitken'], teamId: 'emil-frey-racing' },
          { position: 2, driverIds: ['wittmann'], teamId: 'schubert-motorsport' },
        ],
      }],
    },
  },
  'dtm-2024-norisring': {
    // Race 1: Rast (BMW), Race 2: Thiim (Lamborghini)
    race: {
      overall: { driverIds: ['rast'], teamId: 'schubert-motorsport' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['rast'], teamId: 'schubert-motorsport' },
          { position: 2, driverIds: ['thiim'], teamId: 'ssr-performance' },
        ],
      }],
    },
  },
  'dtm-2024-nurburgring': {
    // Race 1: K. van der Linde (Audi), Race 2: S. van der Linde (BMW)
    race: {
      overall: { driverIds: ['k-van-der-linde'], teamId: 'abt-sportsline' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['k-van-der-linde'], teamId: 'abt-sportsline' },
          { position: 2, driverIds: ['s-van-der-linde'], teamId: 'schubert-motorsport' },
        ],
      }],
    },
  },
  'dtm-2024-sachsenring': {
    // Race 1: Aitken (Ferrari), Race 2: Stolz (Mercedes-AMG)
    race: {
      overall: { driverIds: ['aitken'], teamId: 'emil-frey-racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['aitken'], teamId: 'emil-frey-racing' },
          { position: 2, driverIds: ['stolz'], teamId: 'haupt-racing' },
        ],
      }],
    },
  },
  'dtm-2024-red-bull-ring': {
    // Race 1: Bortolotti (Lamborghini), Race 2: Rast (BMW)
    race: {
      overall: { driverIds: ['bortolotti'], teamId: 'ssr-performance' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['bortolotti'], teamId: 'ssr-performance' },
          { position: 2, driverIds: ['rast'], teamId: 'schubert-motorsport' },
        ],
      }],
    },
  },
  'dtm-2024-hockenheimring': {
    // Race 1: K. van der Linde (Audi), Race 2: Engstler (Lamborghini)
    race: {
      overall: { driverIds: ['k-van-der-linde'], teamId: 'abt-sportsline' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['k-van-der-linde'], teamId: 'abt-sportsline' },
          { position: 2, driverIds: ['engstler'], teamId: 'grasser-racing' },
        ],
      }],
    },
  },
}
