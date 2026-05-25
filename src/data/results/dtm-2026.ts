import type { EventResults } from './types'

export const dtmResults2026: Record<string, EventResults> = {
  // Zandvoort: Q1 pole Cairoli (Ferrari), Q2 pole K. van der Linde (BMW).
  // Race 1: Cairoli win (Emil Frey Ferrari), Auer 2nd (Winward Mercedes), Vermeulen 3rd (Emil Frey Ferrari).
  // Race 2: K. van der Linde win (ABT BMW), Dorr 2nd (Dorr McLaren), Wittmann 3rd (Schubert BMW).
  'dtm-2026-zandvoort': {
    qualifying: {
      overall: { driverIds: ['cairoli'], teamId: 'emil-frey-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['cairoli'], teamId: 'emil-frey-racing' },
          { position: 2, driverIds: ['vermeulen'], teamId: 'emil-frey-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['cairoli'], teamId: 'emil-frey-racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['cairoli'], teamId: 'emil-frey-racing' },
          { position: 2, driverIds: ['k-van-der-linde'], teamId: 'abt-sportsline' },
        ],
      }],
    },
  },
  'dtm-2026-red-bull-ring': {
    qualifying: {
      overall: { driverIds: ['engel'], teamId: 'winward-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['engel'], teamId: 'winward-racing' },
          { position: 2, driverIds: ['dorr'], teamId: 'dorr-motorsport' },
          { position: 3, driverIds: ['preining'], teamId: 'manthey' },
        ],
      }],
    },
    // Race 1: Preining (Manthey Porsche), Race 2: Engel (Winward Mercedes-AMG)
    race: {
      overall: { driverIds: ['preining'], teamId: 'manthey' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['preining'], teamId: 'manthey' },
          { position: 2, driverIds: ['engel'], teamId: 'winward-racing' },
        ],
      }],
    },
  },
}
