import type { EventResults } from './types'

// NASCAR Xfinity Series 2023 results — all 33 rounds
// Sources: en.wikipedia.org/wiki/2023_NASCAR_Xfinity_Series, per-race Wikipedia entries, racing-reference.info,
// nascar.com race recaps, tobychristie.com, jayski.com.
// Note: Cup-series & part-time guest drivers ran Xfinity equipment for select rounds:
// - larson (Kyle Larson) at Kaulig Racing #17 (Darlington-1 win) and Hendrick #17 (Sonoma podium)
// - elliott (Chase Elliott) at Hendrick Motorsports #17 (Pocono podium)
// - byron (William Byron) at Hendrick Motorsports #17 (COTA podium)
// - busch (Kyle Busch) at Kaulig Racing
// - hamlin (Denny Hamlin) at Joe Gibbs Racing #18/#19 (Darlington-2 win)
// - almirola (Aric Almirola) at RSS Racing #28 (Sonoma win)
// - truex-r (Ryan Truex) at Joe Gibbs Racing #19 (Dover win, Phoenix-1 podium)
// - allmendinger (AJ Allmendinger) ran Cup full-time but kept select Xfinity starts at Kaulig (COTA win, Nashville win, Indy RC podium)
// Where qualifying was rained out (Daytona, Fontana, Atlanta-1, Richmond, Dover), the credited pole below is the
// driver listed on top of the published starting lineup (set by NASCAR performance-metric formula).
// Chicago street race (round 16) was called after 25 laps due to flash flooding — Custer credited the win as leader.
// Charlotte (round 12) was postponed from Sat May 27 to Mon May 29 by rain.
// Verification date: 2026-06-08.
export const nascarXfinityResults2023: Record<string, EventResults> = {
  'nascar-xfinity-2023-daytona': {
    qualifying: {
      // Qualifying rained out; Austin Hill credited with pole by formula
      overall: { driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
    },
    race: {
      overall: { driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
          { position: 2, driverIds: ['mayer-sam'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-fontana': {
    qualifying: {
      // Qualifying cancelled by weather; Austin Hill credited with pole by formula
      overall: { driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
    },
    race: {
      overall: { driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['mayer-sam'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-las-vegas': {
    qualifying: {
      overall: { driverIds: ['chandler-smith'], teamId: 'kaulig-racing' },
    },
    race: {
      overall: { driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
          { position: 2, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['chandler-smith'], teamId: 'kaulig-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-phoenix': {
    qualifying: {
      overall: { driverIds: ['custer'], teamId: 'stewart-haas-racing' },
    },
    race: {
      overall: { driverIds: ['smith-sammy'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['smith-sammy'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['truex-r'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['creed'], teamId: 'richard-childress-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-atlanta': {
    qualifying: {
      // Qualifying cancelled by rain; Sammy Smith credited with pole by formula
      overall: { driverIds: ['smith-sammy'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
          { position: 2, driverIds: ['hemric'], teamId: 'kaulig-racing' },
          { position: 3, driverIds: ['truex-r'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-cota': {
    qualifying: {
      overall: { driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
    },
    race: {
      overall: { driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
          { position: 2, driverIds: ['byron'], teamId: 'hendrick-motorsports' },
          { position: 3, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-richmond': {
    qualifying: {
      // Qualifying cancelled by rain; Allgaier credited with pole by formula
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['chandler-smith'], teamId: 'kaulig-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['chandler-smith'], teamId: 'kaulig-racing' },
          { position: 2, driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['berry'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-martinsville': {
    qualifying: {
      overall: { driverIds: ['custer'], teamId: 'stewart-haas-racing' },
    },
    race: {
      overall: { driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['smith-sammy'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['custer'], teamId: 'stewart-haas-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-talladega': {
    qualifying: {
      overall: { driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
    },
    race: {
      overall: { driverIds: ['burton-jeb'], teamId: 'jordan-anderson-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['burton-jeb'], teamId: 'jordan-anderson-racing' },
          { position: 2, driverIds: ['creed'], teamId: 'richard-childress-racing' },
          { position: 3, driverIds: ['kligerman'], teamId: 'big-machine-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-dover': {
    qualifying: {
      // Qualifying cancelled by rain; Kligerman credited with pole by formula
      overall: { driverIds: ['kligerman'], teamId: 'big-machine-racing' },
    },
    race: {
      // Ryan Truex driving the JGR #19
      overall: { driverIds: ['truex-r'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['truex-r'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['berry'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-darlington': {
    qualifying: {
      overall: { driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      // Kyle Larson driving the Kaulig Racing #17
      overall: { driverIds: ['larson'], teamId: 'kaulig-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['larson'], teamId: 'kaulig-racing' },
          { position: 2, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['custer'], teamId: 'stewart-haas-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-charlotte': {
    qualifying: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['custer'], teamId: 'stewart-haas-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-portland': {
    qualifying: {
      overall: { driverIds: ['creed'], teamId: 'richard-childress-racing' },
    },
    race: {
      overall: { driverIds: ['custer'], teamId: 'stewart-haas-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['custer'], teamId: 'stewart-haas-racing' },
          { position: 2, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['mayer-sam'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-sonoma': {
    qualifying: {
      overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' },
    },
    race: {
      // Almirola driving the RSS Racing #28
      overall: { driverIds: ['almirola'], teamId: 'rss-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['almirola'], teamId: 'rss-racing' },
          { position: 2, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
          { position: 3, driverIds: ['larson'], teamId: 'hendrick-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-nashville': {
    qualifying: {
      overall: { driverIds: ['custer'], teamId: 'stewart-haas-racing' },
    },
    race: {
      overall: { driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
          { position: 2, driverIds: ['herbst'], teamId: 'stewart-haas-racing' },
          { position: 3, driverIds: ['mayer-sam'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-chicago': {
    qualifying: {
      overall: { driverIds: ['custer'], teamId: 'stewart-haas-racing' },
    },
    race: {
      // Race called after 25 laps due to flash flood; Custer credited as leader
      overall: { driverIds: ['custer'], teamId: 'stewart-haas-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['custer'], teamId: 'stewart-haas-racing' },
          { position: 2, driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-atlanta-2': {
    qualifying: {
      overall: { driverIds: ['chandler-smith'], teamId: 'kaulig-racing' },
    },
    race: {
      overall: { driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['hemric'], teamId: 'kaulig-racing' },
          { position: 3, driverIds: ['custer'], teamId: 'stewart-haas-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-new-hampshire': {
    qualifying: {
      overall: { driverIds: ['chandler-smith'], teamId: 'kaulig-racing' },
    },
    race: {
      overall: { driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['chandler-smith'], teamId: 'kaulig-racing' },
          { position: 3, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-pocono': {
    qualifying: {
      overall: { driverIds: ['berry'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
          { position: 2, driverIds: ['mayer-sam'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['elliott'], teamId: 'hendrick-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-road-america': {
    qualifying: {
      overall: { driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
    },
    race: {
      overall: { driverIds: ['mayer-sam'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mayer-sam'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['kligerman'], teamId: 'big-machine-racing' },
          { position: 3, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-michigan': {
    qualifying: {
      overall: { driverIds: ['berry'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['berry'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['jones-brandon'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-indianapolis-rc': {
    qualifying: {
      overall: { driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
    },
    race: {
      overall: { driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['mayer-sam'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-watkins-glen': {
    qualifying: {
      overall: { driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['mayer-sam'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mayer-sam'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['creed'], teamId: 'richard-childress-racing' },
          { position: 3, driverIds: ['kligerman'], teamId: 'big-machine-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-daytona-2': {
    qualifying: {
      overall: { driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
    },
    race: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['creed'], teamId: 'richard-childress-racing' },
          { position: 3, driverIds: ['hemric'], teamId: 'kaulig-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-darlington-2': {
    qualifying: {
      overall: { driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      // Denny Hamlin driving the JGR #18
      overall: { driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
          { position: 3, driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-kansas': {
    qualifying: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['jones-brandon'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['creed'], teamId: 'richard-childress-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-bristol': {
    qualifying: {
      overall: { driverIds: ['custer'], teamId: 'stewart-haas-racing' },
    },
    race: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['hemric'], teamId: 'kaulig-racing' },
          { position: 3, driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-texas': {
    qualifying: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['kligerman'], teamId: 'big-machine-racing' },
          { position: 3, driverIds: ['smith-sammy'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-charlotte-roval': {
    qualifying: {
      overall: { driverIds: ['mayer-sam'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['mayer-sam'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mayer-sam'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['custer'], teamId: 'stewart-haas-racing' },
          { position: 3, driverIds: ['berry'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-las-vegas-2': {
    qualifying: {
      overall: { driverIds: ['berry'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['herbst'], teamId: 'stewart-haas-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['herbst'], teamId: 'stewart-haas-racing' },
          { position: 2, driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['custer'], teamId: 'stewart-haas-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-homestead': {
    qualifying: {
      overall: { driverIds: ['custer'], teamId: 'stewart-haas-racing' },
    },
    race: {
      overall: { driverIds: ['mayer-sam'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mayer-sam'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['herbst'], teamId: 'stewart-haas-racing' },
          { position: 3, driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-martinsville-2': {
    qualifying: {
      overall: { driverIds: ['smith-sammy'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['creed'], teamId: 'richard-childress-racing' },
          { position: 3, driverIds: ['smith-sammy'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2023-phoenix-championship': {
    qualifying: {
      overall: { driverIds: ['smith-sammy'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['custer'], teamId: 'stewart-haas-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['custer'], teamId: 'stewart-haas-racing' },
          { position: 2, driverIds: ['creed'], teamId: 'richard-childress-racing' },
          { position: 3, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
}
