import type { EventResults } from './types'

// NASCAR Craftsman Truck Series 2026 results
// Sources: en.wikipedia.org/wiki/2026_NASCAR_Craftsman_Truck_Series, jayski.com, nascar.com race pages
// Cup-series drivers (busch, bell, mcdowell, hocevar) made select Truck starts; teamId reflects the
// Truck entry the driver competed for, not the Cup organization. Tricon Garage's rotational #1 was
// piloted by Corey Heim and Brent Crews for the races shown below.
export const nascarTruckResults2026: Record<string, EventResults> = {
  'nascar-truck-2026-daytona': {
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
      overall: { driverIds: ['chandler-smith'], teamId: 'front-row-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['chandler-smith'], teamId: 'front-row-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2026-atlanta': {
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
      overall: { driverIds: ['busch'], teamId: 'spire-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['busch'], teamId: 'spire-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2026-st-petersburg': {
    qualifying: {
      // Rain canceled qualifying — Mosack awarded pole via metric formula (Spire #7)
      overall: { driverIds: ['mosack'], teamId: 'spire-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mosack'], teamId: 'spire-motorsports' },
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
  'nascar-truck-2026-darlington': {
    qualifying: {
      overall: { driverIds: ['kaden-honeycutt'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['kaden-honeycutt'], teamId: 'tricon-garage' },
        ],
      }],
    },
    race: {
      // Corey Heim drove the Tricon Garage #5 Toyota
      overall: { driverIds: ['heim'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['heim'], teamId: 'tricon-garage' },
        ],
      }],
    },
  },
  'nascar-truck-2026-rockingham': {
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
      // Corey Heim drove the Tricon Garage #1 Toyota
      overall: { driverIds: ['heim'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['heim'], teamId: 'tricon-garage' },
        ],
      }],
    },
  },
  'nascar-truck-2026-bristol': {
    qualifying: {
      overall: { driverIds: ['kaden-honeycutt'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['kaden-honeycutt'], teamId: 'tricon-garage' },
        ],
      }],
    },
    race: {
      // Cup star Christopher Bell drove the Halmar Friesen Racing #62 Toyota
      overall: { driverIds: ['bell'], teamId: 'halmar-friesen-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bell'], teamId: 'halmar-friesen-racing' },
        ],
      }],
    },
  },
  'nascar-truck-2026-texas': {
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
      overall: { driverIds: ['hocevar'], teamId: 'spire-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hocevar'], teamId: 'spire-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2026-watkins-glen': {
    qualifying: {
      // Brent Crews drove the Tricon Garage #1 Toyota
      overall: { driverIds: ['crews-brent'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['crews-brent'], teamId: 'tricon-garage' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['kaden-honeycutt'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['kaden-honeycutt'], teamId: 'tricon-garage' },
        ],
      }],
    },
  },
  'nascar-truck-2026-dover': {
    qualifying: {
      overall: { driverIds: ['busch'], teamId: 'spire-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['busch'], teamId: 'spire-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['busch'], teamId: 'spire-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['busch'], teamId: 'spire-motorsports' },
        ],
      }],
    },
  },
  'nascar-truck-2026-charlotte': {
    qualifying: {
      // Rain canceled qualifying — Corey Day awarded pole (Spire #7)
      overall: { driverIds: ['corey-day'], teamId: 'spire-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['corey-day'], teamId: 'spire-motorsports' },
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
  'nascar-truck-2026-nashville': {
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
  'nascar-truck-2026-michigan': {
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
      // Corey Heim drove the Tricon Garage #1 Toyota
      overall: { driverIds: ['heim'], teamId: 'tricon-garage' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['heim'], teamId: 'tricon-garage' },
        ],
      }],
    },
  },
}
