import type { EventResults } from './types'

// NASCAR Camping World Truck Series 2022 results
// Sources: en.wikipedia.org/wiki/2022_NASCAR_Camping_World_Truck_Series, nascar.com race pages,
// individual race wiki pages, racing-reference.info, driveraverages.com.
// Verified 2026-06-07.
// Notes:
// - R2 Las Vegas: Zane Smith was disqualified post-race for lug nut violations from his original 2nd place;
//   Kyle Busch (KBM #51 guest) was elevated to 2nd.
// - R5 Martinsville: William Byron drove the Spire Motorsports #7 Chevrolet.
// - R6 Bristol Dirt: Joey Logano drove the David Gilliland Racing #25 Ford.
// - R10 Charlotte: Ross Chastain drove the Niece Motorsports #41 Chevrolet (guest entry).
// - R12 Sonoma: Kyle Busch drove the KBM #51 Toyota.
// - R15 Mid-Ohio: Parker Kligerman drove the Henderson Motorsports #75 Chevrolet (part-time entry).
// - R16 Pocono: practice/qualifying cancelled — Zane Smith awarded pole via competition-based formula.
// - R20 Bristol night: Parker Kligerman drove the Henderson Motorsports #75 Toyota.
// - R21 Talladega: Matt DiBenedetto won after final-lap caution. Bret Holmes finished 3rd for Bret Holmes Racing.
// - R22 Homestead: Ryan Preece awarded pole via competition-based formula.
// - GMS Racing rebranded mid-season to "Petty GMS Motorsports" for Cup — Truck operations remained "GMS Racing".
export const nascarTruckResults2022: Record<string, EventResults> = {
  'nascar-truck-2022-daytona': {
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
      overall: { driverIds: ['smith'], teamId: 'front-row-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['smith'], teamId: 'front-row-motorsports' },
          { position: 2, driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
          // Christian Eckes drove ThorSport entry
          { position: 3, driverIds: ['eckes'], teamId: 'thorsport-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2022-las-vegas': {
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
      overall: { driverIds: ['chandler-smith'], teamId: 'kyle-busch-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['chandler-smith'], teamId: 'kyle-busch-motorsports' },
          // Kyle Busch drove the KBM #51 Toyota; Zane Smith DQ'd from original 2nd
          { position: 2, driverIds: ['busch'], teamId: 'kyle-busch-motorsports' },
          { position: 3, driverIds: ['friesen'], teamId: 'halmar-friesen-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2022-atlanta': {
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
      overall: { driverIds: ['heim'], teamId: 'kyle-busch-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['heim'], teamId: 'kyle-busch-motorsports' },
          { position: 2, driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
          { position: 3, driverIds: ['majeski'], teamId: 'thorsport-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2022-cota': {
    qualifying: {
      // Sheldon Creed drove the Young's Motorsports #20 Chevrolet
      overall: { driverIds: ['creed'], teamId: 'youngs-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['creed'], teamId: 'youngs-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['smith'], teamId: 'front-row-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['smith'], teamId: 'front-row-motorsports' },
          { position: 2, driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
          // Kyle Busch drove the KBM #51 Toyota
          { position: 3, driverIds: ['busch'], teamId: 'kyle-busch-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2022-martinsville': {
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
      // William Byron drove the Spire Motorsports #7 Chevrolet
      overall: { driverIds: ['byron'], teamId: 'spire-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['byron'], teamId: 'spire-motorsports' },
          { position: 2, driverIds: ['sauter'], teamId: 'thorsport-racing' },
          // Kyle Busch drove the KBM #51 Toyota
          { position: 3, driverIds: ['busch'], teamId: 'kyle-busch-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2022-bristol-dirt': {
    qualifying: {
      // Joey Logano drove the David Gilliland Racing #25 Ford
      overall: { driverIds: ['logano'], teamId: 'david-gilliland-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['logano'], teamId: 'david-gilliland-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
          { position: 2, driverIds: ['hocevar'], teamId: 'niece-motorsports' },
          { position: 3, driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2022-darlington': {
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
          { position: 2, driverIds: ['hocevar'], teamId: 'niece-motorsports' },
          { position: 3, driverIds: ['enfinger'], teamId: 'gms-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2022-kansas': {
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
      overall: { driverIds: ['smith'], teamId: 'front-row-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['smith'], teamId: 'front-row-motorsports' },
          { position: 2, driverIds: ['majeski'], teamId: 'thorsport-racing' },
          { position: 3, driverIds: ['enfinger'], teamId: 'gms-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2022-texas': {
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
      overall: { driverIds: ['friesen'], teamId: 'halmar-friesen-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['friesen'], teamId: 'halmar-friesen-racing' },
          // Christian Eckes drove the ThorSport Racing #98 Toyota
          { position: 2, driverIds: ['eckes'], teamId: 'thorsport-racing' },
          // Ryan Preece drove the David Gilliland Racing #17 Ford
          { position: 3, driverIds: ['preece'], teamId: 'david-gilliland-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2022-charlotte': {
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
      // Ross Chastain drove the Niece Motorsports #41 Chevrolet
      overall: { driverIds: ['chastain'], teamId: 'niece-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['chastain'], teamId: 'niece-motorsports' },
          { position: 2, driverIds: ['enfinger'], teamId: 'gms-racing' },
          { position: 3, driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2022-gateway': {
    qualifying: {
      overall: { driverIds: ['heim'], teamId: 'kyle-busch-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['heim'], teamId: 'kyle-busch-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['heim'], teamId: 'kyle-busch-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['heim'], teamId: 'kyle-busch-motorsports' },
          { position: 2, driverIds: ['smith'], teamId: 'front-row-motorsports' },
          { position: 3, driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2022-sonoma': {
    qualifying: {
      overall: { driverIds: ['hocevar'], teamId: 'niece-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hocevar'], teamId: 'niece-motorsports' },
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
          { position: 2, driverIds: ['smith'], teamId: 'front-row-motorsports' },
          { position: 3, driverIds: ['majeski'], teamId: 'thorsport-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2022-knoxville': {
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
      // Todd Gilliland drove the David Gilliland Racing #17 Ford
      overall: { driverIds: ['gilliland'], teamId: 'david-gilliland-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gilliland'], teamId: 'david-gilliland-racing' },
          { position: 2, driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
          { position: 3, driverIds: ['smith'], teamId: 'front-row-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2022-nashville': {
    qualifying: {
      // Ryan Preece drove the David Gilliland Racing #17 Ford
      overall: { driverIds: ['preece'], teamId: 'david-gilliland-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['preece'], teamId: 'david-gilliland-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['preece'], teamId: 'david-gilliland-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['preece'], teamId: 'david-gilliland-racing' },
          { position: 2, driverIds: ['smith'], teamId: 'front-row-motorsports' },
          { position: 3, driverIds: ['hocevar'], teamId: 'niece-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2022-mid-ohio': {
    qualifying: {
      overall: { driverIds: ['heim'], teamId: 'kyle-busch-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['heim'], teamId: 'kyle-busch-motorsports' },
        ],
      }],
    },
    race: {
      // Parker Kligerman drove the Henderson Motorsports #75 Chevrolet
      overall: { driverIds: ['kligerman'], teamId: 'henderson-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['kligerman'], teamId: 'henderson-motorsports' },
          { position: 2, driverIds: ['smith'], teamId: 'front-row-motorsports' },
          { position: 3, driverIds: ['hocevar'], teamId: 'niece-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2022-pocono': {
    qualifying: {
      // Practice/qualifying cancelled — Zane Smith awarded pole via competition-based formula
      overall: { driverIds: ['smith'], teamId: 'front-row-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['smith'], teamId: 'front-row-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['chandler-smith'], teamId: 'kyle-busch-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['chandler-smith'], teamId: 'kyle-busch-motorsports' },
          // Ryan Preece drove the David Gilliland Racing #17 Ford
          { position: 2, driverIds: ['preece'], teamId: 'david-gilliland-racing' },
          { position: 3, driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2022-irp': {
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
      overall: { driverIds: ['enfinger'], teamId: 'gms-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['enfinger'], teamId: 'gms-racing' },
          { position: 2, driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
          { position: 3, driverIds: ['smith'], teamId: 'front-row-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2022-richmond': {
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
      overall: { driverIds: ['chandler-smith'], teamId: 'kyle-busch-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['chandler-smith'], teamId: 'kyle-busch-motorsports' },
          { position: 2, driverIds: ['nemechek'], teamId: 'kyle-busch-motorsports' },
          { position: 3, driverIds: ['majeski'], teamId: 'thorsport-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2022-kansas-2': {
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
          { position: 2, driverIds: ['hocevar'], teamId: 'niece-motorsports' },
          // Ryan Preece drove the David Gilliland Racing #17 Ford
          { position: 3, driverIds: ['preece'], teamId: 'david-gilliland-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2022-bristol-night': {
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
      overall: { driverIds: ['majeski'], teamId: 'thorsport-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['majeski'], teamId: 'thorsport-racing' },
          { position: 2, driverIds: ['smith'], teamId: 'front-row-motorsports' },
          // Parker Kligerman drove the Henderson Motorsports #75 Toyota
          { position: 3, driverIds: ['kligerman'], teamId: 'henderson-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2022-talladega': {
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
      // Matt DiBenedetto drove the Rackley W.A.R. #25 Chevrolet
      overall: { driverIds: ['dibenedetto'], teamId: 'rackley-war' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['dibenedetto'], teamId: 'rackley-war' },
          { position: 2, driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
          // Bret Holmes drove for Bret Holmes Racing #32
          { position: 3, driverIds: ['holmes-bret'], teamId: 'bret-holmes-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2022-homestead': {
    qualifying: {
      // Qualifying cancelled — Ryan Preece awarded pole via competition-based formula
      overall: { driverIds: ['preece'], teamId: 'david-gilliland-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['preece'], teamId: 'david-gilliland-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['majeski'], teamId: 'thorsport-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['majeski'], teamId: 'thorsport-racing' },
          { position: 2, driverIds: ['smith'], teamId: 'front-row-motorsports' },
          { position: 3, driverIds: ['friesen'], teamId: 'halmar-friesen-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2022-phoenix-championship': {
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
      overall: { driverIds: ['smith'], teamId: 'front-row-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['smith'], teamId: 'front-row-motorsports' },
          { position: 2, driverIds: ['rhodes-b'], teamId: 'thorsport-racing' },
          { position: 3, driverIds: ['chandler-smith'], teamId: 'kyle-busch-motorsports' },
        ],
      }],
    },
  },
}
