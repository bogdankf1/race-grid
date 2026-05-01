import type { EventResults } from './types'

// DTM 2021 results — verified from Wikipedia, motorsport.com
// Champion: Maximilian Götz (Mercedes-AMG Team HRT) — first GT3 era season
export const dtmResults2021: Record<string, EventResults> = {
  'dtm-2021-monza': {
    // Race 1: Lawson (Ferrari), Race 2: K. van der Linde (Audi)
    race: {
      overall: { driverIds: ['lawson'], teamId: 'af-corse' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['lawson'], teamId: 'af-corse' },
          { position: 2, driverIds: ['k-van-der-linde'], teamId: 'abt-sportsline' },
        ],
      }],
    },
  },
  'dtm-2021-lausitzring': {
    // Race 1: Ellis (Mercedes-AMG), Race 2: Götz (Mercedes-AMG)
    race: {
      overall: { driverIds: ['ellis-p'], teamId: 'winward-racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['ellis-p'], teamId: 'winward-racing' },
          { position: 2, driverIds: ['gotz'], teamId: 'haupt-racing' },
        ],
      }],
    },
  },
  'dtm-2021-zolder': {
    // Race 1: K. van der Linde (Audi), Race 2: Wittmann (BMW)
    race: {
      overall: { driverIds: ['k-van-der-linde'], teamId: 'abt-sportsline' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['k-van-der-linde'], teamId: 'abt-sportsline' },
          { position: 2, driverIds: ['wittmann'], teamId: 'walkenhorst' },
        ],
      }],
    },
  },
  'dtm-2021-nurburgring': {
    // Race 1: K. van der Linde (Audi), Race 2: Albon (Ferrari)
    race: {
      overall: { driverIds: ['k-van-der-linde'], teamId: 'abt-sportsline' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['k-van-der-linde'], teamId: 'abt-sportsline' },
          { position: 2, driverIds: ['albon'], teamId: 'af-corse' },
        ],
      }],
    },
  },
  'dtm-2021-red-bull-ring': {
    // Race 1: Lawson (Ferrari), Race 2: Lawson (Ferrari) — double win
    race: {
      overall: { driverIds: ['lawson'], teamId: 'af-corse' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['lawson'], teamId: 'af-corse' },
        ],
      }],
    },
  },
  'dtm-2021-assen': {
    // Race 1: Wittmann (BMW), Race 2: Auer (Mercedes-AMG)
    race: {
      overall: { driverIds: ['wittmann'], teamId: 'walkenhorst' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['wittmann'], teamId: 'walkenhorst' },
          { position: 2, driverIds: ['auer'], teamId: 'winward-racing' },
        ],
      }],
    },
  },
  'dtm-2021-hockenheimring': {
    // Race 1: K. van der Linde (Audi), Race 2: Auer (Mercedes-AMG)
    race: {
      overall: { driverIds: ['k-van-der-linde'], teamId: 'abt-sportsline' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['k-van-der-linde'], teamId: 'abt-sportsline' },
          { position: 2, driverIds: ['auer'], teamId: 'winward-racing' },
        ],
      }],
    },
  },
  'dtm-2021-norisring': {
    // Race 1: Götz (Mercedes-AMG), Race 2: Götz (Mercedes-AMG) — title decider
    race: {
      overall: { driverIds: ['gotz'], teamId: 'haupt-racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['gotz'], teamId: 'haupt-racing' },
        ],
      }],
    },
  },
}
