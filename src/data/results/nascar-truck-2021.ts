import type { EventResults } from './types'

// NASCAR Camping World Truck Series 2021 results
// Sources: en.wikipedia.org/wiki/2021_NASCAR_Camping_World_Truck_Series, nascar.com race pages,
// individual race wiki pages, jayski.com 2021 Truck race pages, racing-reference.info.
// Verified 2026-06-07.
// Notes:
// - Daytona Road Course (R2): qualifying cancelled — Ben Rhodes awarded pole via competition-based formula.
// - Bristol Dirt (R5): Martin Truex Jr. drove the Kyle Busch Motorsports #51 Toyota.
// - Atlanta (R4) and several others: Kyle Busch / Martin Truex Jr. / Christian Eckes / Chase Elliott
//   drove guest entries; teamId reflects the Truck team they drove for.
// - Watkins Glen (R15): race shortened to 61 of 72 laps due to lightning.
// - Talladega (R20): Tate Fogleman scored upset win after final-lap caution; Tyler Hill ran for Hill Motorsports.
// - Phoenix finale (R22): Chandler Smith won; Ben Rhodes clinched the championship finishing third.
export const nascarTruckResults2021: Record<string, EventResults> = {
  'nascar-truck-2021-daytona': {
    qualifying: {
      overall: { driverIds: ['sauter'], teamId: 'thorsport-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sauter'], teamId: 'thorsport-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
          { position: 2, driverIds: ['anderson-j'], teamId: 'jordan-anderson-racing' },
          { position: 3, driverIds: ['roper-c'], teamId: 'roper-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2021-daytona-rc': {
    qualifying: {
      // Pole via competition-based formula
      overall: { driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
          { position: 2, driverIds: ['creed'], teamId: 'gms-racing' },
          { position: 3, driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2021-las-vegas': {
    qualifying: {
      overall: { driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
          // Kyle Busch drove the KBM #51 Toyota
          { position: 2, driverIds: ['busch'], teamId: 'kyle-busch-motorsports' },
          { position: 3, driverIds: ['austin-hill'], teamId: 'hattori-racing-enterprises' },
        ],
      }],
    },
  },
  'nascar-truck-2021-atlanta': {
    qualifying: {
      overall: { driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
        ],
      }],
    },
    race: {
      // Kyle Busch drove the KBM #51 Toyota
      overall: { driverIds: ['busch'], teamId: 'kyle-busch-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['busch'], teamId: 'kyle-busch-motorsports' },
          { position: 2, driverIds: ['austin-hill'], teamId: 'hattori-racing-enterprises' },
          { position: 3, driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2021-bristol-dirt': {
    qualifying: {
      overall: { driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
        ],
      }],
    },
    race: {
      // Martin Truex Jr. drove the KBM #51 Toyota
      overall: { driverIds: ['truex-jr'], teamId: 'kyle-busch-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['truex-jr'], teamId: 'kyle-busch-motorsports' },
          { position: 2, driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
          { position: 3, driverIds: ['lessard'], teamId: 'gms-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2021-richmond': {
    qualifying: {
      // Via competition-based formula
      overall: { driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
          // Kyle Busch drove the KBM #51 Toyota
          { position: 2, driverIds: ['busch'], teamId: 'kyle-busch-motorsports' },
          { position: 3, driverIds: ['ankrum'], teamId: 'gms-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2021-kansas': {
    qualifying: {
      overall: { driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
        ],
      }],
    },
    race: {
      // Kyle Busch drove the KBM #51 Toyota
      overall: { driverIds: ['busch'], teamId: 'kyle-busch-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['busch'], teamId: 'kyle-busch-motorsports' },
          // Ross Chastain drove the Niece Motorsports #45 Chevrolet
          { position: 2, driverIds: ['chastain'], teamId: 'niece-motorsports' },
          { position: 3, driverIds: ['austin-hill'], teamId: 'hattori-racing-enterprises' },
        ],
      }],
    },
  },
  'nascar-truck-2021-darlington': {
    qualifying: {
      overall: { driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['creed'], teamId: 'gms-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['creed'], teamId: 'gms-racing' },
          { position: 2, driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
          { position: 3, driverIds: ['hocevar'], teamId: 'niece-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2021-cota': {
    qualifying: {
      overall: { driverIds: ['ankrum'], teamId: 'gms-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ankrum'], teamId: 'gms-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['gilliland'], teamId: 'front-row-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gilliland'], teamId: 'front-row-motorsports' },
          { position: 2, driverIds: ['grala'], teamId: 'youngs-motorsports' },
          { position: 3, driverIds: ['ankrum'], teamId: 'gms-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2021-charlotte': {
    qualifying: {
      overall: { driverIds: ['gilliland'], teamId: 'front-row-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gilliland'], teamId: 'front-row-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
          { position: 2, driverIds: ['hocevar'], teamId: 'niece-motorsports' },
          { position: 3, driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2021-texas': {
    qualifying: {
      overall: { driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
          // Chase Elliott drove the GMS Racing #24 Chevrolet
          { position: 2, driverIds: ['elliott'], teamId: 'gms-racing' },
          { position: 3, driverIds: ['enfinger'], teamId: 'thorsport-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2021-nashville': {
    qualifying: {
      overall: { driverIds: ['kraus'], teamId: 'mcanally-hilgemann-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['kraus'], teamId: 'mcanally-hilgemann-racing' },
        ],
      }],
    },
    race: {
      // Ryan Preece drove the David Gilliland Racing #17 Ford in his Truck debut
      overall: { driverIds: ['preece'], teamId: 'david-gilliland-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['preece'], teamId: 'david-gilliland-racing' },
          { position: 2, driverIds: ['gilliland'], teamId: 'front-row-motorsports' },
          { position: 3, driverIds: ['enfinger'], teamId: 'thorsport-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2021-pocono': {
    qualifying: {
      overall: { driverIds: ['gilliland'], teamId: 'front-row-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gilliland'], teamId: 'front-row-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
          // Kyle Busch drove the KBM #51 Toyota
          { position: 2, driverIds: ['busch'], teamId: 'kyle-busch-motorsports' },
          { position: 3, driverIds: ['creed'], teamId: 'gms-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2021-knoxville': {
    qualifying: {
      overall: { driverIds: ['kraus'], teamId: 'mcanally-hilgemann-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['kraus'], teamId: 'mcanally-hilgemann-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['austin-hill'], teamId: 'hattori-racing-enterprises' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['austin-hill'], teamId: 'hattori-racing-enterprises' },
          { position: 2, driverIds: ['chandler-smith'], teamId: 'kyle-busch-motorsports' },
          { position: 3, driverIds: ['enfinger'], teamId: 'thorsport-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2021-watkins-glen': {
    qualifying: {
      overall: { driverIds: ['austin-hill'], teamId: 'hattori-racing-enterprises' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['austin-hill'], teamId: 'hattori-racing-enterprises' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['austin-hill'], teamId: 'hattori-racing-enterprises' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['austin-hill'], teamId: 'hattori-racing-enterprises' },
          { position: 2, driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
          { position: 3, driverIds: ['creed'], teamId: 'gms-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2021-gateway': {
    qualifying: {
      overall: { driverIds: ['austin-hill'], teamId: 'hattori-racing-enterprises' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['austin-hill'], teamId: 'hattori-racing-enterprises' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['creed'], teamId: 'gms-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['creed'], teamId: 'gms-racing' },
          { position: 2, driverIds: ['matt-crafton'], teamId: 'thorsport-racing' },
          { position: 3, driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2021-darlington-2': {
    qualifying: {
      overall: { driverIds: ['creed'], teamId: 'gms-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['creed'], teamId: 'gms-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['creed'], teamId: 'gms-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['creed'], teamId: 'gms-racing' },
          { position: 2, driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
          { position: 3, driverIds: ['friesen'], teamId: 'halmar-friesen-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2021-bristol': {
    qualifying: {
      overall: { driverIds: ['creed'], teamId: 'gms-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['creed'], teamId: 'gms-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['chandler-smith'], teamId: 'kyle-busch-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['chandler-smith'], teamId: 'kyle-busch-motorsports' },
          { position: 2, driverIds: ['enfinger'], teamId: 'thorsport-racing' },
          { position: 3, driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2021-las-vegas-2': {
    qualifying: {
      overall: { driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
        ],
      }],
    },
    race: {
      // Christian Eckes drove the ThorSport Racing #98 Toyota
      overall: { driverIds: ['eckes'], teamId: 'thorsport-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['eckes'], teamId: 'thorsport-racing' },
          { position: 2, driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
          { position: 3, driverIds: ['matt-crafton'], teamId: 'thorsport-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2021-talladega': {
    qualifying: {
      overall: { driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['fogleman'], teamId: 'youngs-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fogleman'], teamId: 'youngs-motorsports' },
          // Tyler Hill drove the Hill Motorsports #56 Chevrolet
          { position: 2, driverIds: ['hill-tyler'], teamId: 'hill-motorsports' },
          { position: 3, driverIds: ['gilliland'], teamId: 'front-row-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2021-martinsville': {
    qualifying: {
      overall: { driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['smith'], teamId: 'gms-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['smith'], teamId: 'gms-racing' },
          { position: 2, driverIds: ['austin-hill'], teamId: 'hattori-racing-enterprises' },
          { position: 3, driverIds: ['gray-tanner'], teamId: 'david-gilliland-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2021-phoenix-championship': {
    qualifying: {
      overall: { driverIds: ['chandler-smith'], teamId: 'kyle-busch-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['chandler-smith'], teamId: 'kyle-busch-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['chandler-smith'], teamId: 'kyle-busch-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['chandler-smith'], teamId: 'kyle-busch-motorsports' },
          { position: 2, driverIds: ['friesen'], teamId: 'halmar-friesen-racing' },
          { position: 3, driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
        ],
      }],
    },
  },
}
