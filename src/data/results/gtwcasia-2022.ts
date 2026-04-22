import type { EventResults } from './types'

// GT World Challenge Asia 2022 results
export const gtwcasiaResults2022: Record<string, EventResults> = {
  'gtwcasia-2022-sepang': {
    race: {
      overall: { driverIds: ['bamber', 'd-silva'], teamId: 'ebm-giga-racing' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['bamber', 'd-silva'], teamId: 'ebm-giga-racing' },
        ],
      }],
    },
  },
  'gtwcasia-2022-suzuka': {
    race: {
      overall: { driverIds: ['tsujiko', 'yamasaki'], teamId: 'comet-racing' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['tsujiko', 'yamasaki'], teamId: 'comet-racing' },
        ],
      }],
    },
  },
  'gtwcasia-2022-fuji': {
    race: {
      overall: { driverIds: ['jefri-ibrahim', 'foster-n'], teamId: 'triple-eight-jmr' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['jefri-ibrahim', 'foster-n'], teamId: 'triple-eight-jmr' },
        ],
      }],
    },
  },
  'gtwcasia-2022-sugo': {
    race: {
      overall: { driverIds: ['fujii', 'hoshino'], teamId: 'd-station-racing' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['fujii', 'hoshino'], teamId: 'd-station-racing' },
        ],
      }],
    },
  },
  'gtwcasia-2022-okayama': {
    race: {
      overall: { driverIds: ['fujii', 'hoshino'], teamId: 'd-station-racing' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['fujii', 'hoshino'], teamId: 'd-station-racing' },
        ],
      }],
    },
  },
}
