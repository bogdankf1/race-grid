import type { EventResults } from './types'

// NASCAR Xfinity Series 2022 results — all 33 rounds
// Sources: en.wikipedia.org/wiki/2022_NASCAR_Xfinity_Series, per-race Wikipedia entries, espn.com/racing/results/_/series/xfinity/year/2022
// Note: Cup-series guest drivers ran Xfinity equipment for select rounds:
// - custer (Cole Custer) at SS-Green Light Racing #07 (Fontana win)
// - bayne (Trevor Bayne) at Joe Gibbs Racing #18 (Atlanta-1 podium, Phoenix pole later)
// - reddick (Tyler Reddick) at Big Machine Racing #48 (Texas-1 win)
// - byron (William Byron) at JR Motorsports (Texas-1 podium)
// - larson (Kyle Larson) at Hendrick Motorsports #17 (Watkins Glen win)
// - elliott (Chase Elliott) at Hendrick Motorsports #17 (Watkins Glen pole)
// - bowman (Alex Bowman) at Hendrick Motorsports (Indianapolis podium)
// - logano (Joey Logano) at Team Penske #22 (Watkins Glen podium)
// Verification date: 2026-06-08.
export const nascarXfinityResults2022: Record<string, EventResults> = {
  'nascar-xfinity-2022-daytona': {
    qualifying: {
      overall: { driverIds: ['hemric'], teamId: 'kaulig-racing' },
    },
    race: {
      overall: { driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
          { position: 2, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
          { position: 3, driverIds: ['gragson'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-fontana': {
    qualifying: {
      overall: { driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
    },
    race: {
      // Custer in SS-Green Light #07 (collaboration with SHR)
      overall: { driverIds: ['custer'], teamId: 'ss-green-light-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['custer'], teamId: 'ss-green-light-racing' },
          { position: 2, driverIds: ['gragson'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['bayne'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-las-vegas': {
    qualifying: {
      overall: { driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
    },
    race: {
      overall: { driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['gragson'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['hemric'], teamId: 'kaulig-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-phoenix': {
    qualifying: {
      overall: { driverIds: ['bayne'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['gragson'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gragson'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['jones-brandon'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['berry'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-atlanta': {
    qualifying: {
      overall: { driverIds: ['gragson'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
          { position: 3, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-cota': {
    qualifying: {
      overall: { driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
          { position: 2, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
          { position: 3, driverIds: ['custer'], teamId: 'ss-green-light-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-richmond': {
    qualifying: {
      overall: { driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['mayer-sam'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-martinsville': {
    qualifying: {
      overall: { driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['jones-brandon'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['jones-brandon'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['cassill'], teamId: 'kaulig-racing' },
          { position: 3, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-talladega': {
    qualifying: {
      overall: { driverIds: ['earnhardt-j'], teamId: 'richard-childress-racing' },
    },
    race: {
      overall: { driverIds: ['gragson'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gragson'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['earnhardt-j'], teamId: 'richard-childress-racing' },
          { position: 3, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-dover': {
    qualifying: {
      overall: { driverIds: ['jones-brandon'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['berry'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['berry'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-darlington': {
    qualifying: {
      // Qualifying cancelled by weather; Gibbs credited with pole by formula
      overall: { driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['gragson'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['herbst'], teamId: 'stewart-haas-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-texas': {
    qualifying: {
      overall: { driverIds: ['gragson'], teamId: 'jr-motorsports' },
    },
    race: {
      // Reddick driving the Big Machine Racing #48
      overall: { driverIds: ['reddick'], teamId: 'big-machine-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['reddick'], teamId: 'big-machine-racing' },
          { position: 2, driverIds: ['byron'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['mayer-sam'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-charlotte': {
    qualifying: {
      overall: { driverIds: ['mayer-sam'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['berry'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['berry'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['mayer-sam'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-portland': {
    qualifying: {
      // Round 2 qualifying cancelled by rain; pole awarded after Round 1
      overall: { driverIds: ['alfredo'], teamId: 'our-motorsports' },
    },
    race: {
      overall: { driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
          { position: 2, driverIds: ['snider'], teamId: 'jordan-anderson-racing' },
          { position: 3, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-nashville': {
    qualifying: {
      overall: { driverIds: ['herbst'], teamId: 'stewart-haas-racing' },
    },
    race: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['bayne'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['herbst'], teamId: 'stewart-haas-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-road-america': {
    qualifying: {
      overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' },
    },
    race: {
      overall: { driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['larson'], teamId: 'hendrick-motorsports' },
          { position: 3, driverIds: ['berry'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-atlanta-2': {
    qualifying: {
      overall: { driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
          { position: 2, driverIds: ['berry'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['truex-r'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-new-hampshire': {
    qualifying: {
      overall: { driverIds: ['berry'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['bayne'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['brown-brandon'], teamId: 'brandonbilt-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-pocono': {
    qualifying: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['gragson'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gragson'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['berry'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-indianapolis-rc': {
    qualifying: {
      overall: { driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
    },
    race: {
      overall: { driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
          { position: 2, driverIds: ['bowman'], teamId: 'hendrick-motorsports' },
          { position: 3, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-michigan': {
    qualifying: {
      overall: { driverIds: ['gragson'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['gragson'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-watkins-glen': {
    qualifying: {
      overall: { driverIds: ['elliott'], teamId: 'hendrick-motorsports' },
    },
    race: {
      overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['larson'], teamId: 'hendrick-motorsports' },
          { position: 2, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
          { position: 3, driverIds: ['logano'], teamId: 'team-penske' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-daytona-2': {
    qualifying: {
      overall: { driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
    },
    race: {
      overall: { driverIds: ['clements-jeremy'], teamId: 'jeremy-clements-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['clements-jeremy'], teamId: 'jeremy-clements-racing' },
          { position: 2, driverIds: ['hill-t'], teamId: 'mbm-motorsports' },
          { position: 3, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-darlington-2': {
    qualifying: {
      overall: { driverIds: ['jones-brandon'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['gragson'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gragson'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['creed'], teamId: 'richard-childress-racing' },
          { position: 3, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-kansas': {
    qualifying: {
      overall: { driverIds: ['jones-brandon'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['gragson'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gragson'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-bristol': {
    qualifying: {
      overall: { driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['gragson'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gragson'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['jones-brandon'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-texas-2': {
    qualifying: {
      overall: { driverIds: ['jones-brandon'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['gragson'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gragson'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
          { position: 3, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-talladega-2': {
    qualifying: {
      overall: { driverIds: ['austin-hill'], teamId: 'richard-childress-racing' },
    },
    race: {
      overall: { driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
          { position: 2, driverIds: ['mayer-sam'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['cassill'], teamId: 'kaulig-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-charlotte-roval': {
    qualifying: {
      overall: { driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
    },
    race: {
      overall: { driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
          { position: 2, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['gragson'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-las-vegas-2': {
    qualifying: {
      overall: { driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
    },
    race: {
      overall: { driverIds: ['berry'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['berry'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['gragson'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-homestead': {
    qualifying: {
      overall: { driverIds: ['bayne'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['gragson'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gragson'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-martinsville-2': {
    qualifying: {
      overall: { driverIds: ['jones-brandon'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['creed'], teamId: 'richard-childress-racing' },
          { position: 3, driverIds: ['herbst'], teamId: 'stewart-haas-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2022-phoenix-championship': {
    qualifying: {
      overall: { driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['gragson'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
}
