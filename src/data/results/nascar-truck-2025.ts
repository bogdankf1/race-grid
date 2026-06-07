import type { EventResults } from './types'

// NASCAR Craftsman Truck Series 2025 results
// Sources: en.wikipedia.org/wiki/2025_NASCAR_Craftsman_Truck_Series, nascar.com race pages, individual
// race wiki pages, jayski.com 2025 Truck race pages.
// Notes:
// - Practice and qualifying were cancelled at Bristol (R6), Texas (R8), and North Wilkesboro (R10);
//   the recorded "pole" was the provisional pole awarded via NASCAR's metric formula.
// - Cup-series guest drivers competed for the Truck team's entry (e.g. Busch / Larson / Hocevar in
//   Spire #7 & #07; Bell in Halmar Friesen Racing; Day in Spire #7); teamId reflects the Truck team.
export const nascarTruckResults2025: Record<string, EventResults> = {
  'nascar-truck-2025-daytona': {
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
      overall: { driverIds: ['heim'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['heim'], teamId: 'tricon-garage' },
        ],
      }],
    },
  },
  'nascar-truck-2025-atlanta': {
    qualifying: {
      overall: { driverIds: ['mosack'], teamId: 'mcanally-hilgemann-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mosack'], teamId: 'mcanally-hilgemann-racing' },
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
        ],
      }],
    },
  },
  'nascar-truck-2025-las-vegas': {
    qualifying: {
      // Corey Day drove the Spire Motorsports #7 Chevrolet
      overall: { driverIds: ['corey-day'], teamId: 'spire-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['corey-day'], teamId: 'spire-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['heim'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['heim'], teamId: 'tricon-garage' },
        ],
      }],
    },
  },
  'nascar-truck-2025-homestead': {
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
      // Kyle Larson drove the Spire Motorsports #07 HendrickCars.com Chevrolet
      overall: { driverIds: ['larson'], teamId: 'spire-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['larson'], teamId: 'spire-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2025-martinsville': {
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
      overall: { driverIds: ['hemric'], teamId: 'mcanally-hilgemann-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hemric'], teamId: 'mcanally-hilgemann-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2025-bristol': {
    qualifying: {
      // Practice and qualifying cancelled — Daniel Hemric awarded provisional pole
      overall: { driverIds: ['hemric'], teamId: 'mcanally-hilgemann-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hemric'], teamId: 'mcanally-hilgemann-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['chandler-smith'], teamId: 'front-row-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['chandler-smith'], teamId: 'front-row-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2025-rockingham': {
    qualifying: {
      overall: { driverIds: ['garcia-jake'], teamId: 'thorsport-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['garcia-jake'], teamId: 'thorsport-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['ankrum'], teamId: 'mcanally-hilgemann-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ankrum'], teamId: 'mcanally-hilgemann-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2025-texas': {
    qualifying: {
      // Practice and qualifying cancelled — Tyler Ankrum awarded provisional pole
      overall: { driverIds: ['ankrum'], teamId: 'mcanally-hilgemann-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ankrum'], teamId: 'mcanally-hilgemann-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['heim'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['heim'], teamId: 'tricon-garage' },
        ],
      }],
    },
  },
  'nascar-truck-2025-kansas': {
    qualifying: {
      overall: { driverIds: ['garcia-jake'], teamId: 'thorsport-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['garcia-jake'], teamId: 'thorsport-racing' },
        ],
      }],
    },
    race: {
      // Carson Hocevar drove the Spire Motorsports #7 Chevrolet
      overall: { driverIds: ['hocevar'], teamId: 'spire-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hocevar'], teamId: 'spire-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2025-north-wilkesboro': {
    qualifying: {
      // Practice and qualifying cancelled — Corey Heim awarded provisional pole
      overall: { driverIds: ['heim'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['heim'], teamId: 'tricon-garage' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['chandler-smith'], teamId: 'front-row-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['chandler-smith'], teamId: 'front-row-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2025-charlotte': {
    qualifying: {
      overall: { driverIds: ['ruggiero'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ruggiero'], teamId: 'tricon-garage' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['heim'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['heim'], teamId: 'tricon-garage' },
        ],
      }],
    },
  },
  'nascar-truck-2025-nashville': {
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
      overall: { driverIds: ['caruth'], teamId: 'spire-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['caruth'], teamId: 'spire-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2025-michigan': {
    qualifying: {
      // Luke Fenhaus drove a ThorSport Racing Ford
      overall: { driverIds: ['fenhaus'], teamId: 'thorsport-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fenhaus'], teamId: 'thorsport-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['friesen'], teamId: 'halmar-friesen-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['friesen'], teamId: 'halmar-friesen-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2025-pocono': {
    qualifying: {
      overall: { driverIds: ['layne-riggs'], teamId: 'front-row-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['layne-riggs'], teamId: 'front-row-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['layne-riggs'], teamId: 'front-row-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['layne-riggs'], teamId: 'front-row-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2025-lime-rock': {
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
        ],
      }],
    },
  },
  'nascar-truck-2025-irp': {
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
      overall: { driverIds: ['layne-riggs'], teamId: 'front-row-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['layne-riggs'], teamId: 'front-row-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2025-watkins-glen': {
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
        ],
      }],
    },
  },
  'nascar-truck-2025-richmond': {
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
        ],
      }],
    },
  },
  'nascar-truck-2025-darlington': {
    qualifying: {
      overall: { driverIds: ['layne-riggs'], teamId: 'front-row-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['layne-riggs'], teamId: 'front-row-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['heim'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['heim'], teamId: 'tricon-garage' },
        ],
      }],
    },
  },
  'nascar-truck-2025-bristol-night': {
    qualifying: {
      overall: { driverIds: ['garcia-jake'], teamId: 'thorsport-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['garcia-jake'], teamId: 'thorsport-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['layne-riggs'], teamId: 'front-row-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['layne-riggs'], teamId: 'front-row-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2025-new-hampshire': {
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
        ],
      }],
    },
  },
  'nascar-truck-2025-charlotte-roval': {
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
        ],
      }],
    },
  },
  'nascar-truck-2025-talladega': {
    qualifying: {
      overall: { driverIds: ['ruggiero'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ruggiero'], teamId: 'tricon-garage' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['ruggiero'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ruggiero'], teamId: 'tricon-garage' },
        ],
      }],
    },
  },
  'nascar-truck-2025-martinsville-2': {
    qualifying: {
      overall: { driverIds: ['layne-riggs'], teamId: 'front-row-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['layne-riggs'], teamId: 'front-row-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['heim'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['heim'], teamId: 'tricon-garage' },
        ],
      }],
    },
  },
  'nascar-truck-2025-phoenix-championship': {
    qualifying: {
      overall: { driverIds: ['layne-riggs'], teamId: 'front-row-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['layne-riggs'], teamId: 'front-row-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['heim'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['heim'], teamId: 'tricon-garage' },
          { position: 2, driverIds: ['majeski'], teamId: 'thorsport-racing' },
          { position: 3, driverIds: ['kaden-honeycutt'], teamId: 'niece-motorsports' },
        ],
      }],
    },
  },
}
