import type { EventResults } from './types'

// DTM 2023 results — verified from Wikipedia, motorsport.com
// Champion: Thomas Preining (Manthey EMA, Porsche)
export const dtmResults2023: Record<string, EventResults> = {
  'dtm-2023-oschersleben': {
    // Race 1: Perera (Lamborghini), Race 2: Engelhart (Lamborghini)
    race: {
      overall: { driverIds: ['perera'], teamId: 'ssr-performance' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['perera'], teamId: 'ssr-performance' },
          { position: 2, driverIds: ['engelhart'], teamId: 'grasser-racing' },
        ],
      }],
    },
  },
  'dtm-2023-zandvoort': {
    // Race 1: Engel (Mercedes-AMG), Race 2: Feller (Audi)
    race: {
      overall: { driverIds: ['engel'], teamId: 'mercedes-amg-team-landgraf' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['engel'], teamId: 'mercedes-amg-team-landgraf' },
          { position: 2, driverIds: ['feller'], teamId: 'abt-sportsline' },
        ],
      }],
    },
  },
  'dtm-2023-norisring': {
    // Race 1: S. van der Linde (BMW), Race 2: Preining (Porsche)
    race: {
      overall: { driverIds: ['s-van-der-linde'], teamId: 'schubert-motorsport' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['s-van-der-linde'], teamId: 'schubert-motorsport' },
          { position: 2, driverIds: ['preining'], teamId: 'manthey' },
        ],
      }],
    },
  },
  'dtm-2023-nurburgring': {
    // Race 1: Bortolotti (Lamborghini), Race 2: Maximilian Paul (Lamborghini)
    race: {
      overall: { driverIds: ['bortolotti'], teamId: 'ssr-performance' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['bortolotti'], teamId: 'ssr-performance' },
          { position: 2, driverIds: ['maximilian-paul'], teamId: 'grasser-racing' },
        ],
      }],
    },
  },
  'dtm-2023-lausitzring': {
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
  'dtm-2023-sachsenring': {
    // Race 1: Stolz (Mercedes-AMG), Race 2: Bortolotti (Lamborghini)
    race: {
      overall: { driverIds: ['stolz'], teamId: 'haupt-racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['stolz'], teamId: 'haupt-racing' },
          { position: 2, driverIds: ['bortolotti'], teamId: 'ssr-performance' },
        ],
      }],
    },
  },
  'dtm-2023-red-bull-ring': {
    // Race 1: K. van der Linde (Audi), Race 2: Rast (BMW)
    race: {
      overall: { driverIds: ['k-van-der-linde'], teamId: 'abt-sportsline' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['k-van-der-linde'], teamId: 'abt-sportsline' },
          { position: 2, driverIds: ['rast'], teamId: 'schubert-motorsport' },
        ],
      }],
    },
  },
  'dtm-2023-hockenheimring': {
    // Race 1: Preining (Porsche), Race 2: Preining (Porsche) — title clincher
    race: {
      overall: { driverIds: ['preining'], teamId: 'manthey' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['preining'], teamId: 'manthey' },
        ],
      }],
    },
  },
}
