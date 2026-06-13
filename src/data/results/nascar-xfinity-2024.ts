import type { EventResults } from './types'

// NASCAR Xfinity Series 2024 results — all 33 rounds
// Sources: en.wikipedia.org/wiki/2024_NASCAR_Xfinity_Series, per-race Wikipedia entries, nascar.com race recaps
// Note: Cup-series guest drivers ran Xfinity equipment for select rounds:
// - larson at Hendrick Motorsports #17 (COTA win) and on pole at COTA
// - elliott at Hendrick Motorsports #17 (Charlotte win)
// - byron at Hendrick Motorsports #17 (Pocono podium)
// - bell at Joe Gibbs Racing #20 (New Hampshire win, Darlington-2 win)
// - almirola at Joe Gibbs Racing #20 (Martinsville win, Kansas win, Martinsville-2 win; Indianapolis & Homestead podiums)
// - truex-r at Joe Gibbs Racing #20 (Dover win, Daytona-2 win)
// - nemechek at JGR #20 was full-season driver but Tennessee win recorded with the #20 ride
// Where qualifying was rained out (Darlington-1, Iowa, New Hampshire), the credited pole below is the
// driver listed on top of the published starting lineup (set by NASCAR formula).
export const nascarXfinityResults2024: Record<string, EventResults> = {
  'nascar-xfinity-2024-daytona': {
    qualifying: {
      overall: { driverIds: ['jesse-love'], teamId: 'richard-childress-racing' },
    },
    race: {
      overall: { driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
          { position: 2, driverIds: ['creed'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['retzlaff'], teamId: 'jordan-anderson-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-atlanta': {
    qualifying: {
      overall: { driverIds: ['jesse-love'], teamId: 'richard-childress-racing' },
    },
    race: {
      overall: { driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
          { position: 2, driverIds: ['chandler-smith'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['van-gisbergen'], teamId: 'kaulig-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-las-vegas': {
    qualifying: {
      overall: { driverIds: ['custer'], teamId: 'stewart-haas-racing' },
    },
    race: {
      overall: { driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['custer'], teamId: 'stewart-haas-racing' },
          { position: 3, driverIds: ['chandler-smith'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-phoenix': {
    qualifying: {
      overall: { driverIds: ['custer'], teamId: 'stewart-haas-racing' },
    },
    race: {
      overall: { driverIds: ['chandler-smith'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['chandler-smith'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['jesse-love'], teamId: 'richard-childress-racing' },
          { position: 3, driverIds: ['creed'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-cota': {
    qualifying: {
      overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' },
    },
    race: {
      overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['larson'], teamId: 'hendrick-motorsports' },
          { position: 2, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
          { position: 3, driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-richmond': {
    qualifying: {
      overall: { driverIds: ['retzlaff'], teamId: 'jordan-anderson-racing' },
    },
    race: {
      overall: { driverIds: ['chandler-smith'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['chandler-smith'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['almirola'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['gray-taylor'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-martinsville': {
    qualifying: {
      overall: { driverIds: ['jones-brandon'], teamId: 'jr-motorsports' },
    },
    race: {
      // Almirola substituted in the JGR #20
      overall: { driverIds: ['almirola'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['almirola'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['mayer-sam'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['chandler-smith'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-texas': {
    qualifying: {
      overall: { driverIds: ['jesse-love'], teamId: 'richard-childress-racing' },
    },
    race: {
      overall: { driverIds: ['mayer-sam'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mayer-sam'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['sieg-r'], teamId: 'rss-racing' },
          { position: 3, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-talladega': {
    qualifying: {
      overall: { driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
    },
    race: {
      overall: { driverIds: ['jesse-love'], teamId: 'richard-childress-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['jesse-love'], teamId: 'richard-childress-racing' },
          { position: 2, driverIds: ['herbst'], teamId: 'stewart-haas-racing' },
          { position: 3, driverIds: ['alfredo'], teamId: 'our-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-dover': {
    qualifying: {
      overall: { driverIds: ['jones-brandon'], teamId: 'jr-motorsports' },
    },
    race: {
      // Truex substituted in JGR #20
      overall: { driverIds: ['truex-r'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['truex-r'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['kvapil'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['mayer-sam'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-darlington': {
    qualifying: {
      // Qualifying rained out; Custer credited with pole by formula
      overall: { driverIds: ['custer'], teamId: 'stewart-haas-racing' },
    },
    race: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
          { position: 3, driverIds: ['custer'], teamId: 'stewart-haas-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-charlotte': {
    qualifying: {
      overall: { driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['elliott'], teamId: 'hendrick-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['elliott'], teamId: 'hendrick-motorsports' },
          { position: 2, driverIds: ['jones-brandon'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['smith-sammy'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-portland': {
    qualifying: {
      overall: { driverIds: ['mayer-sam'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['van-gisbergen'], teamId: 'kaulig-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['van-gisbergen'], teamId: 'kaulig-racing' },
          { position: 2, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['smith-sammy'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-sonoma': {
    qualifying: {
      overall: { driverIds: ['van-gisbergen'], teamId: 'kaulig-racing' },
    },
    race: {
      overall: { driverIds: ['van-gisbergen'], teamId: 'kaulig-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['van-gisbergen'], teamId: 'kaulig-racing' },
          { position: 2, driverIds: ['creed'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['mayer-sam'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-iowa': {
    qualifying: {
      // Qualifying cancelled by weather; Hill credited with pole by formula
      overall: { driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
    },
    race: {
      overall: { driverIds: ['mayer-sam'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mayer-sam'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['herbst'], teamId: 'stewart-haas-racing' },
          { position: 3, driverIds: ['heim'], teamId: 'sam-hunt-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-new-hampshire': {
    qualifying: {
      // Qualifying cancelled by weather; Custer credited with pole by formula
      overall: { driverIds: ['custer'], teamId: 'stewart-haas-racing' },
    },
    race: {
      // Bell substituted in JGR #20
      overall: { driverIds: ['bell'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bell'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['creed'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['custer'], teamId: 'stewart-haas-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-nashville': {
    qualifying: {
      overall: { driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['chandler-smith'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['jesse-love'], teamId: 'richard-childress-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-chicago': {
    qualifying: {
      overall: { driverIds: ['van-gisbergen'], teamId: 'kaulig-racing' },
    },
    race: {
      overall: { driverIds: ['van-gisbergen'], teamId: 'kaulig-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['van-gisbergen'], teamId: 'kaulig-racing' },
          { position: 2, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['larson'], teamId: 'hendrick-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-pocono': {
    qualifying: {
      overall: { driverIds: ['creed'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['custer'], teamId: 'stewart-haas-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['custer'], teamId: 'stewart-haas-racing' },
          { position: 2, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['byron'], teamId: 'hendrick-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-indianapolis': {
    qualifying: {
      overall: { driverIds: ['custer'], teamId: 'stewart-haas-racing' },
    },
    race: {
      overall: { driverIds: ['herbst'], teamId: 'stewart-haas-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['herbst'], teamId: 'stewart-haas-racing' },
          { position: 2, driverIds: ['custer'], teamId: 'stewart-haas-racing' },
          { position: 3, driverIds: ['almirola'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-michigan': {
    qualifying: {
      overall: { driverIds: ['creed'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['creed'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-daytona-2': {
    qualifying: {
      overall: { driverIds: ['chandler-smith'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      // Truex substituted in JGR #20
      overall: { driverIds: ['truex-r'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['truex-r'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['chandler-smith'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['kligerman'], teamId: 'big-machine-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-darlington-2': {
    qualifying: {
      overall: { driverIds: ['bell'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      // Bell substituted in JGR #20
      overall: { driverIds: ['bell'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bell'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['custer'], teamId: 'stewart-haas-racing' },
          { position: 3, driverIds: ['creed'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-atlanta-2': {
    qualifying: {
      overall: { driverIds: ['jesse-love'], teamId: 'richard-childress-racing' },
    },
    race: {
      overall: { driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
          { position: 2, driverIds: ['kligerman'], teamId: 'big-machine-racing' },
          { position: 3, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-watkins-glen': {
    qualifying: {
      // Zilisch made his series debut at JR Motorsports #88
      overall: { driverIds: ['zilisch'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['zilisch'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['zilisch'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['creed'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-bristol': {
    qualifying: {
      overall: { driverIds: ['chandler-smith'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['custer'], teamId: 'stewart-haas-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['custer'], teamId: 'stewart-haas-racing' },
          { position: 2, driverIds: ['creed'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['chandler-smith'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-kansas': {
    qualifying: {
      overall: { driverIds: ['jones-brandon'], teamId: 'jr-motorsports' },
    },
    race: {
      // Almirola substituted in JGR #20
      overall: { driverIds: ['almirola'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['almirola'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['custer'], teamId: 'stewart-haas-racing' },
          { position: 3, driverIds: ['chandler-smith'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-talladega-2': {
    qualifying: {
      overall: { driverIds: ['jesse-love'], teamId: 'richard-childress-racing' },
    },
    race: {
      overall: { driverIds: ['smith-sammy'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['smith-sammy'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['sieg-r'], teamId: 'rss-racing' },
          { position: 3, driverIds: ['herbst'], teamId: 'stewart-haas-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-charlotte-roval': {
    qualifying: {
      overall: { driverIds: ['van-gisbergen'], teamId: 'kaulig-racing' },
    },
    race: {
      overall: { driverIds: ['mayer-sam'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mayer-sam'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
          { position: 3, driverIds: ['van-gisbergen'], teamId: 'kaulig-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-las-vegas-2': {
    qualifying: {
      overall: { driverIds: ['jones-brandon'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
          { position: 2, driverIds: ['sieg-r'], teamId: 'rss-racing' },
          { position: 3, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-homestead': {
    qualifying: {
      overall: { driverIds: ['chandler-smith'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
          { position: 2, driverIds: ['custer'], teamId: 'stewart-haas-racing' },
          { position: 3, driverIds: ['almirola'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-martinsville-2': {
    qualifying: {
      overall: { driverIds: ['retzlaff'], teamId: 'jordan-anderson-racing' },
    },
    race: {
      // Almirola substituted in JGR #20
      overall: { driverIds: ['almirola'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['almirola'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['smith-sammy'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['chandler-smith'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2024-phoenix-championship': {
    qualifying: {
      overall: { driverIds: ['sawalich'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['herbst'], teamId: 'stewart-haas-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['herbst'], teamId: 'stewart-haas-racing' },
          { position: 2, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['almirola'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
}
