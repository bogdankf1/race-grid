import type { EventResults } from './types'

// NASCAR Craftsman Truck Series 2023 results
// Sources: en.wikipedia.org/wiki/2023_NASCAR_Craftsman_Truck_Series, individual race wiki pages,
// nascar.com race recaps, racing-reference.info, tobychristie.com 2023 race recap pages.
// Verified 2026-06-08.
// Notes:
// - R1 Daytona: race shortened to 79 of 100 laps due to rain.
// - R6 Bristol Dirt: Joey Logano drove the ThorSport Racing entry (different from 2022 — Logano was in DGR #25 in 2022).
// - R7 Martinsville: race shortened to 124 of 200 laps by rain; Kyle Busch finished 2nd in KBM #51.
// - R10 North Wilkesboro Tyson 250: Kyle Larson drove the Spire Motorsports #7 Chevrolet — inaugural Truck race
//   at North Wilkesboro since 1996.
// - R18 Milwaukee Mile: first Truck race at Milwaukee since 2009.
// - R21 Talladega Love's RV Stop 250: Brett Moffitt drove for Front Row Motorsports as a part-time guest entry.
// - R22 Homestead: Zane Smith finished 2nd on track but was disqualified post-race for a windshield violation,
//   elevating Ben Rhodes and Corey Heim in the final standings.
// - R23 Phoenix finale: Christian Eckes won; Ben Rhodes clinched second career championship finishing 5th.
export const nascarTruckResults2023: Record<string, EventResults> = {
  'nascar-truck-2023-daytona': {
    qualifying: {
      overall: { driverIds: ['sanchez-n'], teamId: 'rev-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sanchez-n'], teamId: 'rev-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['smith'], teamId: 'front-row-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['smith'], teamId: 'front-row-motorsports' },
          { position: 2, driverIds: ['gray-tanner'], teamId: 'tricon-garage' },
          { position: 3, driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2023-las-vegas': {
    qualifying: {
      // Kyle Busch drove the KBM #51 Chevrolet
      overall: { driverIds: ['busch'], teamId: 'kyle-busch-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['busch'], teamId: 'kyle-busch-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['busch'], teamId: 'kyle-busch-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['busch'], teamId: 'kyle-busch-motorsports' },
          { position: 2, driverIds: ['smith'], teamId: 'front-row-motorsports' },
          { position: 3, driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2023-atlanta': {
    qualifying: {
      overall: { driverIds: ['smith'], teamId: 'front-row-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['smith'], teamId: 'front-row-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
          { position: 2, driverIds: ['sanchez-n'], teamId: 'rev-racing' },
          { position: 3, driverIds: ['nemechek'], teamId: 'tricon-garage' },
        ],
      }],
    },
  },
  'nascar-truck-2023-cota': {
    qualifying: {
      // Ross Chastain drove the Niece Motorsports #41 Chevrolet
      overall: { driverIds: ['chastain'], teamId: 'niece-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['chastain'], teamId: 'niece-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['smith'], teamId: 'front-row-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['smith'], teamId: 'front-row-motorsports' },
          // Kyle Busch drove the KBM #51 Chevrolet
          { position: 2, driverIds: ['busch'], teamId: 'kyle-busch-motorsports' },
          { position: 3, driverIds: ['majeski'], teamId: 'thorsport-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2023-texas': {
    qualifying: {
      overall: { driverIds: ['sanchez-n'], teamId: 'rev-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sanchez-n'], teamId: 'rev-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['hocevar'], teamId: 'niece-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hocevar'], teamId: 'niece-motorsports' },
          { position: 2, driverIds: ['purdy'], teamId: 'kyle-busch-motorsports' },
          { position: 3, driverIds: ['friesen'], teamId: 'halmar-friesen-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2023-bristol-dirt': {
    qualifying: {
      overall: { driverIds: ['smith'], teamId: 'front-row-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['smith'], teamId: 'front-row-motorsports' },
        ],
      }],
    },
    race: {
      // Joey Logano drove the ThorSport Racing entry
      overall: { driverIds: ['logano'], teamId: 'thorsport-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['logano'], teamId: 'thorsport-racing' },
          { position: 2, driverIds: ['majeski'], teamId: 'thorsport-racing' },
          // William Byron drove the KBM #51 Chevrolet
          { position: 3, driverIds: ['byron'], teamId: 'kyle-busch-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2023-martinsville': {
    qualifying: {
      overall: { driverIds: ['smith'], teamId: 'front-row-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['smith'], teamId: 'front-row-motorsports' },
        ],
      }],
    },
    race: {
      // Race shortened to 124 of 200 laps by rain
      overall: { driverIds: ['heim'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['heim'], teamId: 'tricon-garage' },
          // Kyle Busch drove the KBM #51 Chevrolet
          { position: 2, driverIds: ['busch'], teamId: 'kyle-busch-motorsports' },
          { position: 3, driverIds: ['smith'], teamId: 'front-row-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2023-kansas': {
    qualifying: {
      overall: { driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['enfinger'], teamId: 'gms-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['enfinger'], teamId: 'gms-racing' },
          { position: 2, driverIds: ['heim'], teamId: 'tricon-garage' },
          { position: 3, driverIds: ['smith'], teamId: 'front-row-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2023-darlington': {
    qualifying: {
      overall: { driverIds: ['heim'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['heim'], teamId: 'tricon-garage' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
          { position: 2, driverIds: ['friesen'], teamId: 'halmar-friesen-racing' },
          { position: 3, driverIds: ['gray-tanner'], teamId: 'tricon-garage' },
        ],
      }],
    },
  },
  'nascar-truck-2023-north-wilkesboro': {
    qualifying: {
      overall: { driverIds: ['heim'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['heim'], teamId: 'tricon-garage' },
        ],
      }],
    },
    race: {
      // Kyle Larson drove the Spire Motorsports #7 Chevrolet
      overall: { driverIds: ['larson'], teamId: 'spire-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['larson'], teamId: 'spire-motorsports' },
          { position: 2, driverIds: ['majeski'], teamId: 'thorsport-racing' },
          { position: 3, driverIds: ['dibenedetto'], teamId: 'rackley-war' },
        ],
      }],
    },
  },
  'nascar-truck-2023-charlotte': {
    qualifying: {
      overall: { driverIds: ['gray-tanner'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gray-tanner'], teamId: 'tricon-garage' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
          { position: 2, driverIds: ['heim'], teamId: 'tricon-garage' },
          { position: 3, driverIds: ['thompson-d'], teamId: 'tricon-garage' },
        ],
      }],
    },
  },
  'nascar-truck-2023-gateway': {
    qualifying: {
      overall: { driverIds: ['majeski'], teamId: 'thorsport-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['majeski'], teamId: 'thorsport-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['enfinger'], teamId: 'gms-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['enfinger'], teamId: 'gms-racing' },
          { position: 2, driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
          { position: 3, driverIds: ['friesen'], teamId: 'halmar-friesen-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2023-nashville': {
    qualifying: {
      overall: { driverIds: ['sanchez-n'], teamId: 'rev-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sanchez-n'], teamId: 'rev-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['hocevar'], teamId: 'niece-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hocevar'], teamId: 'niece-motorsports' },
          { position: 2, driverIds: ['smith'], teamId: 'front-row-motorsports' },
          { position: 3, driverIds: ['sanchez-n'], teamId: 'rev-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2023-mid-ohio': {
    qualifying: {
      overall: { driverIds: ['heim'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['heim'], teamId: 'tricon-garage' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['heim'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['heim'], teamId: 'tricon-garage' },
          { position: 2, driverIds: ['smith'], teamId: 'front-row-motorsports' },
          { position: 3, driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2023-pocono': {
    qualifying: {
      overall: { driverIds: ['sanchez-n'], teamId: 'rev-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sanchez-n'], teamId: 'rev-racing' },
        ],
      }],
    },
    race: {
      // Kyle Busch drove the KBM #51 Chevrolet — KBM's 100th NASCAR win
      overall: { driverIds: ['busch'], teamId: 'kyle-busch-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['busch'], teamId: 'kyle-busch-motorsports' },
          { position: 2, driverIds: ['heim'], teamId: 'tricon-garage' },
          // Taylor Gray drove the Tricon Garage #17 Toyota as a part-time entry
          { position: 3, driverIds: ['gray-taylor'], teamId: 'tricon-garage' },
        ],
      }],
    },
  },
  'nascar-truck-2023-richmond': {
    qualifying: {
      overall: { driverIds: ['majeski'], teamId: 'thorsport-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['majeski'], teamId: 'thorsport-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['hocevar'], teamId: 'niece-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hocevar'], teamId: 'niece-motorsports' },
          { position: 2, driverIds: ['majeski'], teamId: 'thorsport-racing' },
          { position: 3, driverIds: ['smith'], teamId: 'front-row-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2023-irp': {
    qualifying: {
      overall: { driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['majeski'], teamId: 'thorsport-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['majeski'], teamId: 'thorsport-racing' },
          { position: 2, driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
          { position: 3, driverIds: ['layne-riggs'], teamId: 'spire-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2023-milwaukee': {
    qualifying: {
      overall: { driverIds: ['enfinger'], teamId: 'gms-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['enfinger'], teamId: 'gms-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['enfinger'], teamId: 'gms-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['enfinger'], teamId: 'gms-racing' },
          { position: 2, driverIds: ['hocevar'], teamId: 'niece-motorsports' },
          { position: 3, driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2023-kansas-2': {
    qualifying: {
      overall: { driverIds: ['purdy'], teamId: 'kyle-busch-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['purdy'], teamId: 'kyle-busch-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
          // Taylor Gray drove the Tricon Garage entry as a part-time driver
          { position: 2, driverIds: ['gray-taylor'], teamId: 'tricon-garage' },
          { position: 3, driverIds: ['dibenedetto'], teamId: 'rackley-war' },
        ],
      }],
    },
  },
  'nascar-truck-2023-bristol-night': {
    qualifying: {
      overall: { driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['heim'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['heim'], teamId: 'tricon-garage' },
          { position: 2, driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
          { position: 3, driverIds: ['enfinger'], teamId: 'gms-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2023-talladega': {
    qualifying: {
      overall: { driverIds: ['purdy'], teamId: 'kyle-busch-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['purdy'], teamId: 'kyle-busch-motorsports' },
        ],
      }],
    },
    race: {
      // Brett Moffitt drove the Front Row Motorsports #34 Ford as a part-time guest
      overall: { driverIds: ['moffitt'], teamId: 'front-row-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['moffitt'], teamId: 'front-row-motorsports' },
          { position: 2, driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
          { position: 3, driverIds: ['thompson-d'], teamId: 'tricon-garage' },
        ],
      }],
    },
  },
  'nascar-truck-2023-homestead': {
    qualifying: {
      overall: { driverIds: ['sanchez-n'], teamId: 'rev-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sanchez-n'], teamId: 'rev-racing' },
        ],
      }],
    },
    race: {
      // Zane Smith originally finished 2nd but was disqualified for a windshield violation
      overall: { driverIds: ['hocevar'], teamId: 'niece-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hocevar'], teamId: 'niece-motorsports' },
          { position: 2, driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
          { position: 3, driverIds: ['heim'], teamId: 'tricon-garage' },
        ],
      }],
    },
  },
  'nascar-truck-2023-phoenix-championship': {
    qualifying: {
      overall: { driverIds: ['heim'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['heim'], teamId: 'tricon-garage' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
          { position: 2, driverIds: ['garcia-jake'], teamId: 'mcanally-hilgemann-racing' },
          { position: 3, driverIds: ['purdy'], teamId: 'kyle-busch-motorsports' },
        ],
      }],
    },
  },
}
