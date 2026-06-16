import type { EventResults } from './types'

// NASCAR Xfinity (NASCAR O'Reilly Auto Parts Series) 2026 results
// Sources: ESPN xfinity series results, Wikipedia "2026 NASCAR O'Reilly Auto Parts Series"
// Cup-series drivers (van-gisbergen, larson, chastain) made selected starts in Xfinity equipment;
// teamId reflects the Xfinity entry, not the Cup organization.
export const nascarXfinityResults2026: Record<string, EventResults> = {
  'nascar-xfinity-2026-daytona': {
    qualifying: {
      overall: { driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2026-atlanta': {
    qualifying: {
      overall: { driverIds: ['mayer-sam'], teamId: 'haas-factory-team' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mayer-sam'], teamId: 'haas-factory-team' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['creed'], teamId: 'haas-factory-team' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['creed'], teamId: 'haas-factory-team' },
        ],
      }],
    },
  },
  'nascar-xfinity-2026-cota': {
    qualifying: {
      overall: { driverIds: ['zilisch'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['zilisch'], teamId: 'jr-motorsports' },
        ],
      }],
    },
    race: {
      // Cup star van Gisbergen ran a JR Motorsports Xfinity entry
      overall: { driverIds: ['van-gisbergen'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['van-gisbergen'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2026-phoenix': {
    qualifying: {
      overall: { driverIds: ['gray-taylor'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gray-taylor'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2026-las-vegas': {
    qualifying: {
      overall: { driverIds: ['mayer-sam'], teamId: 'haas-factory-team' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mayer-sam'], teamId: 'haas-factory-team' },
        ],
      }],
    },
    race: {
      // Larson piloted the JR Motorsports #88 Xfinity entry
      overall: { driverIds: ['larson'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['larson'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2026-darlington': {
    qualifying: {
      overall: { driverIds: ['larson'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['larson'], teamId: 'jr-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2026-martinsville': {
    qualifying: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2026-rockingham': {
    qualifying: {
      overall: { driverIds: ['corey-day'], teamId: 'hendrick-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['corey-day'], teamId: 'hendrick-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['sawalich'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sawalich'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2026-bristol': {
    qualifying: {
      overall: { driverIds: ['sawalich'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sawalich'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['zilisch'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['zilisch'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2026-kansas': {
    qualifying: {
      overall: { driverIds: ['kvapil'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['kvapil'], teamId: 'jr-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['gray-taylor'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gray-taylor'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2026-talladega': {
    qualifying: {
      overall: { driverIds: ['jesse-love'], teamId: 'richard-childress-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['jesse-love'], teamId: 'richard-childress-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['corey-day'], teamId: 'hendrick-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['corey-day'], teamId: 'hendrick-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2026-texas': {
    qualifying: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['larson'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['larson'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2026-watkins-glen': {
    qualifying: {
      overall: { driverIds: ['caruth'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['caruth'], teamId: 'jr-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['zilisch'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['zilisch'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2026-dover': {
    qualifying: {
      overall: { driverIds: ['chastain'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['chastain'], teamId: 'jr-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['corey-day'], teamId: 'hendrick-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['corey-day'], teamId: 'hendrick-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2026-charlotte': {
    qualifying: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['chastain'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['chastain'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2026-nashville': {
    qualifying: {
      overall: { driverIds: ['jesse-love'], teamId: 'richard-childress-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['jesse-love'], teamId: 'richard-childress-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2026-pocono': {
    qualifying: {
      overall: { driverIds: ['jones-brandon'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['jones-brandon'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['gray-taylor'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['byron'], teamId: 'jr-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['crews-brent'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['byron'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
}
