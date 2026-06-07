import type { EventResults } from './types'

// NASCAR Xfinity Series 2025 results — all 33 rounds
// Sources: en.wikipedia.org/wiki/2025_NASCAR_Xfinity_Series, nascar.com race recaps, jayski.com race pages
// Note: Cup-series guest drivers ran Xfinity equipment for select rounds:
// - larson at JR Motorsports #88 (Texas) and Hendrick Motorsports #17 (Bristol)
// - byron at Hendrick Motorsports #17 (Charlotte)
// - almirola at Joe Gibbs Racing #19 (Phoenix, Bristol Night, Las Vegas-2)
// - bell at Joe Gibbs Racing #19 (Darlington pole)
// - bowman at Haas Factory Team #00 (Phoenix pole)
// - van-gisbergen at JR Motorsports (Chicago, Sonoma)
// - suarez at JR Motorsports #9 (Mexico City)
// - elliott at Hendrick Motorsports (Pocono pole)
// - chastain at JR Motorsports (Iowa runner-up)
// Rockingham (round 10): Jesse Love crossed line first but was disqualified post-race;
// Sammy Smith credited with the win.
export const nascarXfinityResults2025: Record<string, EventResults> = {
  'nascar-xfinity-2025-daytona': {
    qualifying: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['jesse-love'], teamId: 'richard-childress-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['jesse-love'], teamId: 'richard-childress-racing' },
          { position: 2, driverIds: ['zilisch'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-atlanta': {
    qualifying: {
      overall: { driverIds: ['jesse-love'], teamId: 'richard-childress-racing' },
    },
    race: {
      overall: { driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
          { position: 2, driverIds: ['jesse-love'], teamId: 'richard-childress-racing' },
          { position: 3, driverIds: ['zilisch'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-cota': {
    qualifying: {
      overall: { driverIds: ['zilisch'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['zilisch'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['zilisch'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['byron'], teamId: 'hendrick-motorsports' },
          { position: 3, driverIds: ['burton-h'], teamId: 'am-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-phoenix': {
    qualifying: {
      overall: { driverIds: ['bowman'], teamId: 'haas-factory-team' },
    },
    race: {
      overall: { driverIds: ['almirola'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['almirola'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['bowman'], teamId: 'haas-factory-team' },
          { position: 3, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-las-vegas': {
    qualifying: {
      overall: { driverIds: ['smith-sammy'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['almirola'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['mayer-sam'], teamId: 'haas-factory-team' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-homestead': {
    qualifying: {
      overall: { driverIds: ['gray-taylor'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['mayer-sam'], teamId: 'haas-factory-team' },
          { position: 3, driverIds: ['larson'], teamId: 'hendrick-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-martinsville': {
    qualifying: {
      overall: { driverIds: ['zilisch'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
          { position: 2, driverIds: ['gray-taylor'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['smith-sammy'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-darlington': {
    qualifying: {
      overall: { driverIds: ['bell'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['jones-brandon'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['jones-brandon'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['gray-taylor'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-bristol': {
    qualifying: {
      overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' },
    },
    race: {
      overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['larson'], teamId: 'hendrick-motorsports' },
          { position: 2, driverIds: ['mayer-sam'], teamId: 'haas-factory-team' },
          { position: 3, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-rockingham': {
    qualifying: {
      overall: { driverIds: ['zilisch'], teamId: 'jr-motorsports' },
    },
    race: {
      // Jesse Love disqualified post-race; Sammy Smith credited with the win
      overall: { driverIds: ['smith-sammy'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['smith-sammy'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['sieg-r'], teamId: 'rss-racing' },
          { position: 3, driverIds: ['sanchez-n'], teamId: 'big-machine-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-talladega': {
    qualifying: {
      overall: { driverIds: ['jesse-love'], teamId: 'richard-childress-racing' },
    },
    race: {
      overall: { driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
          { position: 2, driverIds: ['jesse-love'], teamId: 'richard-childress-racing' },
          { position: 3, driverIds: ['burton-jeb'], teamId: 'jordan-anderson-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-texas': {
    qualifying: {
      overall: { driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
    },
    race: {
      // Larson substituted for Zilisch in JR Motorsports #88
      overall: { driverIds: ['larson'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['larson'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-charlotte': {
    qualifying: {
      overall: { driverIds: ['gray-taylor'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['byron'], teamId: 'hendrick-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['byron'], teamId: 'hendrick-motorsports' },
          { position: 2, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['gray-taylor'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-nashville': {
    qualifying: {
      overall: { driverIds: ['sawalich'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['zilisch'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['sawalich'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-mexico': {
    qualifying: {
      overall: { driverIds: ['zilisch'], teamId: 'jr-motorsports' },
    },
    race: {
      // Suárez ran a fifth JR Motorsports entry (#9)
      overall: { driverIds: ['suarez'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['suarez'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['gray-taylor'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-pocono': {
    qualifying: {
      overall: { driverIds: ['elliott'], teamId: 'hendrick-motorsports' },
    },
    race: {
      overall: { driverIds: ['zilisch'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['zilisch'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['elliott'], teamId: 'hendrick-motorsports' },
          { position: 3, driverIds: ['jones-brandon'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-atlanta-2': {
    qualifying: {
      overall: { driverIds: ['creed'], teamId: 'haas-factory-team' },
    },
    race: {
      overall: { driverIds: ['sanchez-n'], teamId: 'big-machine-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sanchez-n'], teamId: 'big-machine-racing' },
          { position: 2, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
          { position: 3, driverIds: ['almirola'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-chicago': {
    qualifying: {
      overall: { driverIds: ['van-gisbergen'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['van-gisbergen'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['van-gisbergen'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['creed'], teamId: 'haas-factory-team' },
          { position: 3, driverIds: ['zilisch'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-sonoma': {
    qualifying: {
      overall: { driverIds: ['van-gisbergen'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['zilisch'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['zilisch'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['van-gisbergen'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['jones-brandon'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-dover': {
    qualifying: {
      overall: { driverIds: ['gray-taylor'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['zilisch'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['zilisch'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['jones-brandon'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['gray-taylor'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-indianapolis': {
    qualifying: {
      overall: { driverIds: ['mayer-sam'], teamId: 'haas-factory-team' },
    },
    race: {
      overall: { driverIds: ['zilisch'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['zilisch'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['mayer-sam'], teamId: 'haas-factory-team' },
          { position: 3, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-iowa': {
    qualifying: {
      overall: { driverIds: ['jesse-love'], teamId: 'richard-childress-racing' },
    },
    race: {
      overall: { driverIds: ['mayer-sam'], teamId: 'haas-factory-team' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mayer-sam'], teamId: 'haas-factory-team' },
          { position: 2, driverIds: ['chastain'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['zilisch'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-watkins-glen': {
    qualifying: {
      overall: { driverIds: ['zilisch'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['zilisch'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['zilisch'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-daytona-2': {
    qualifying: {
      overall: { driverIds: ['zilisch'], teamId: 'jr-motorsports' },
    },
    race: {
      // Record book credits Zilisch with the win; Kligerman drove the car in relief
      overall: { driverIds: ['zilisch'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['zilisch'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['smith-sammy'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-portland': {
    qualifying: {
      overall: { driverIds: ['zilisch'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['zilisch'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['zilisch'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['van-gisbergen'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['jones-brandon'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-wwtr': {
    qualifying: {
      overall: { driverIds: ['zilisch'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['zilisch'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['zilisch'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['kvapil'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-bristol-night': {
    qualifying: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['almirola'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['almirola'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['zilisch'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['mayer-sam'], teamId: 'haas-factory-team' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-kansas': {
    qualifying: {
      overall: { driverIds: ['jones-brandon'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['jones-brandon'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['jones-brandon'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['kvapil'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-charlotte-roval': {
    qualifying: {
      overall: { driverIds: ['zilisch'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['zilisch'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['zilisch'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['jesse-love'], teamId: 'richard-childress-racing' },
          { position: 3, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-las-vegas-2': {
    qualifying: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['almirola'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['almirola'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['zilisch'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-talladega-2': {
    qualifying: {
      overall: { driverIds: ['jesse-love'], teamId: 'richard-childress-racing' },
    },
    race: {
      overall: { driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
          { position: 2, driverIds: ['jesse-love'], teamId: 'richard-childress-racing' },
          { position: 3, driverIds: ['williams-josh'], teamId: 'kaulig-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-martinsville-2': {
    qualifying: {
      overall: { driverIds: ['burton-h'], teamId: 'am-racing' },
    },
    race: {
      overall: { driverIds: ['gray-taylor'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gray-taylor'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['smith-sammy'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2025-phoenix-championship': {
    qualifying: {
      overall: { driverIds: ['jones-brandon'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['jesse-love'], teamId: 'richard-childress-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['jesse-love'], teamId: 'richard-childress-racing' },
          { position: 2, driverIds: ['almirola'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['zilisch'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
}
