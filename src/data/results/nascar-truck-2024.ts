import type { EventResults } from './types'

// NASCAR Craftsman Truck Series 2024 results
// Sources: en.wikipedia.org/wiki/2024_NASCAR_Craftsman_Truck_Series, nascar.com race pages, individual
// race wiki pages, jayski.com 2024 Truck race pages, foxsports.com final leaderboards.
// Verified 2026-06-07.
// Notes:
// - Charlotte (R11): Corey Heim originally finished 2nd but was disqualified post-race for unsecured lug
//   nuts, moving Friesen and Enfinger up to 2nd/3rd respectively.
// - Pocono (R14): Qualifying was rained out — pole awarded via competition-based formula to Christian Eckes.
// - North Wilkesboro (R10): Race was suspended Saturday May 18 and completed Sunday May 19 after rain.
// - Cup-series guest drivers competed for the Truck team's entry (Kyle Busch / Ross Chastain / Zane Smith /
//   Connor Zilisch / Connor Mosack); teamId reflects the Truck team they drove for.
export const nascarTruckResults2024: Record<string, EventResults> = {
  'nascar-truck-2024-daytona': {
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
      overall: { driverIds: ['sanchez-n'], teamId: 'rev-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sanchez-n'], teamId: 'rev-racing' },
          { position: 2, driverIds: ['heim'], teamId: 'tricon-garage' },
          { position: 3, driverIds: ['caruth'], teamId: 'spire-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2024-atlanta': {
    qualifying: {
      overall: { driverIds: ['dye-d'], teamId: 'mcanally-hilgemann-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['dye-d'], teamId: 'mcanally-hilgemann-racing' },
        ],
      }],
    },
    race: {
      // Kyle Busch drove the Spire Motorsports #7 Chevrolet
      overall: { driverIds: ['busch'], teamId: 'spire-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['busch'], teamId: 'spire-motorsports' },
          { position: 2, driverIds: ['majeski'], teamId: 'thorsport-racing' },
          { position: 3, driverIds: ['heim'], teamId: 'tricon-garage' },
        ],
      }],
    },
  },
  'nascar-truck-2024-las-vegas': {
    qualifying: {
      overall: { driverIds: ['caruth'], teamId: 'spire-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['caruth'], teamId: 'spire-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['caruth'], teamId: 'spire-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['caruth'], teamId: 'spire-motorsports' },
          { position: 2, driverIds: ['ankrum'], teamId: 'mcanally-hilgemann-racing' },
          { position: 3, driverIds: ['heim'], teamId: 'tricon-garage' },
        ],
      }],
    },
  },
  'nascar-truck-2024-bristol': {
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
      overall: { driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
          // Kyle Busch drove the Spire Motorsports #7 Chevrolet
          { position: 2, driverIds: ['busch'], teamId: 'spire-motorsports' },
          // Zane Smith drove the McAnally-Hilgemann Racing #91 Chevrolet
          { position: 3, driverIds: ['smith'], teamId: 'mcanally-hilgemann-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2024-cota': {
    qualifying: {
      // Connor Zilisch drove Spire Motorsports — series debut, set pole
      overall: { driverIds: ['zilisch'], teamId: 'spire-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['zilisch'], teamId: 'spire-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['heim'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['heim'], teamId: 'tricon-garage' },
          { position: 2, driverIds: ['gray-taylor'], teamId: 'tricon-garage' },
          { position: 3, driverIds: ['majeski'], teamId: 'thorsport-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2024-martinsville': {
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
      overall: { driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
          { position: 2, driverIds: ['majeski'], teamId: 'thorsport-racing' },
          { position: 3, driverIds: ['purdy'], teamId: 'spire-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2024-texas': {
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
      // Kyle Busch drove the Spire Motorsports #7 Chevrolet
      overall: { driverIds: ['busch'], teamId: 'spire-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['busch'], teamId: 'spire-motorsports' },
          { position: 2, driverIds: ['heim'], teamId: 'tricon-garage' },
          { position: 3, driverIds: ['sanchez-n'], teamId: 'rev-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2024-kansas': {
    qualifying: {
      overall: { driverIds: ['purdy'], teamId: 'spire-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['purdy'], teamId: 'spire-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['heim'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['heim'], teamId: 'tricon-garage' },
          // Zane Smith drove the McAnally-Hilgemann Racing #91 Chevrolet
          { position: 2, driverIds: ['smith'], teamId: 'mcanally-hilgemann-racing' },
          { position: 3, driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2024-darlington': {
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
      // Ross Chastain drove the Niece Motorsports #45 Chevrolet
      overall: { driverIds: ['chastain'], teamId: 'niece-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['chastain'], teamId: 'niece-motorsports' },
          { position: 2, driverIds: ['sanchez-n'], teamId: 'rev-racing' },
          { position: 3, driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2024-north-wilkesboro': {
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
          { position: 2, driverIds: ['enfinger'], teamId: 'cr7-motorsports' },
          { position: 3, driverIds: ['layne-riggs'], teamId: 'front-row-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2024-charlotte': {
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
      // Corey Heim originally finished 2nd but was DQ'd post-race for unsecured lug nuts
      overall: { driverIds: ['sanchez-n'], teamId: 'rev-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sanchez-n'], teamId: 'rev-racing' },
          { position: 2, driverIds: ['friesen'], teamId: 'halmar-friesen-racing' },
          { position: 3, driverIds: ['enfinger'], teamId: 'cr7-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2024-gateway': {
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
      overall: { driverIds: ['heim'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['heim'], teamId: 'tricon-garage' },
          { position: 2, driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
          { position: 3, driverIds: ['sanchez-n'], teamId: 'rev-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2024-nashville': {
    qualifying: {
      overall: { driverIds: ['friesen'], teamId: 'halmar-friesen-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['friesen'], teamId: 'halmar-friesen-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
          { position: 2, driverIds: ['dye-d'], teamId: 'mcanally-hilgemann-racing' },
          { position: 3, driverIds: ['heim'], teamId: 'tricon-garage' },
        ],
      }],
    },
  },
  'nascar-truck-2024-pocono': {
    qualifying: {
      // Qualifying rained out — Christian Eckes awarded pole via competition-based formula
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
          { position: 2, driverIds: ['enfinger'], teamId: 'cr7-motorsports' },
          { position: 3, driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2024-irp': {
    qualifying: {
      overall: { driverIds: ['caruth'], teamId: 'spire-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['caruth'], teamId: 'spire-motorsports' },
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
          { position: 3, driverIds: ['enfinger'], teamId: 'cr7-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2024-richmond': {
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
          { position: 3, driverIds: ['gray-taylor'], teamId: 'tricon-garage' },
        ],
      }],
    },
  },
  'nascar-truck-2024-milwaukee': {
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
      overall: { driverIds: ['layne-riggs'], teamId: 'front-row-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['layne-riggs'], teamId: 'front-row-motorsports' },
          { position: 2, driverIds: ['majeski'], teamId: 'thorsport-racing' },
          { position: 3, driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2024-bristol-night': {
    qualifying: {
      // Connor Zilisch drove the Spire Motorsports entry
      overall: { driverIds: ['zilisch'], teamId: 'spire-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['zilisch'], teamId: 'spire-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['layne-riggs'], teamId: 'front-row-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['layne-riggs'], teamId: 'front-row-motorsports' },
          { position: 2, driverIds: ['heim'], teamId: 'tricon-garage' },
          { position: 3, driverIds: ['caruth'], teamId: 'spire-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2024-kansas-2': {
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
      overall: { driverIds: ['heim'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['heim'], teamId: 'tricon-garage' },
          { position: 2, driverIds: ['layne-riggs'], teamId: 'front-row-motorsports' },
          { position: 3, driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2024-talladega': {
    qualifying: {
      overall: { driverIds: ['sawalich'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sawalich'], teamId: 'tricon-garage' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['enfinger'], teamId: 'cr7-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['enfinger'], teamId: 'cr7-motorsports' },
          { position: 2, driverIds: ['gray-taylor'], teamId: 'tricon-garage' },
          { position: 3, driverIds: ['dye-d'], teamId: 'mcanally-hilgemann-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2024-homestead': {
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
      overall: { driverIds: ['enfinger'], teamId: 'cr7-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['enfinger'], teamId: 'cr7-motorsports' },
          { position: 2, driverIds: ['majeski'], teamId: 'thorsport-racing' },
          // Connor Mosack drove the Spire Motorsports #7 Chevrolet
          { position: 3, driverIds: ['mosack'], teamId: 'spire-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2024-martinsville-2': {
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
      overall: { driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
          { position: 2, driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
          { position: 3, driverIds: ['purdy'], teamId: 'spire-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2024-phoenix-championship': {
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
      overall: { driverIds: ['majeski'], teamId: 'thorsport-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['majeski'], teamId: 'thorsport-racing' },
          { position: 2, driverIds: ['heim'], teamId: 'tricon-garage' },
          { position: 3, driverIds: ['eckes'], teamId: 'mcanally-hilgemann-racing' },
        ],
      }],
    },
  },
}
