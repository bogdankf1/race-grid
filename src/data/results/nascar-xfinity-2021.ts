import type { EventResults } from './types'

// NASCAR Xfinity Series 2021 results — all 33 rounds
// Sources: en.wikipedia.org/wiki/2021_NASCAR_Xfinity_Series, per-race Wikipedia entries, espn.com/racing/results/_/series/xfinity/year/2021
// Note: many 2021 races had qualifying cancelled due to COVID protocols; pole sitters credited by NASCAR formula.
// Cup-series guest drivers ran Xfinity entries for select rounds:
// - busch (Kyle Busch) at Joe Gibbs Racing #54 (COTA, Texas, Nashville, Road America, Atlanta-2 wins)
// - bell (Christopher Bell) at Joe Gibbs Racing #54 (New Hampshire win)
// - truex-m (Martin Truex Jr.) at Joe Gibbs Racing #54 (Atlanta-1 podium 2nd)
// - earnhardt-jr (Dale Earnhardt Jr.) made a one-off appearance at JR Motorsports (Richmond)
// Verification date: 2026-06-07.
export const nascarXfinityResults2021: Record<string, EventResults> = {
  'nascar-xfinity-2021-daytona': {
    qualifying: {
      overall: { driverIds: ['cindric'], teamId: 'team-penske' },
    },
    race: {
      overall: { driverIds: ['cindric'], teamId: 'team-penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['cindric'], teamId: 'team-penske' },
          { position: 2, driverIds: ['moffitt'], teamId: 'our-motorsports' },
          { position: 3, driverIds: ['burton-h'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-daytona-rc': {
    qualifying: {
      overall: { driverIds: ['moffitt'], teamId: 'our-motorsports' },
    },
    race: {
      // Ty Gibbs made his Xfinity debut at JGR #54
      overall: { driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['cindric'], teamId: 'team-penske' },
          { position: 3, driverIds: ['hemric'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-homestead': {
    qualifying: {
      overall: { driverIds: ['cindric'], teamId: 'team-penske' },
    },
    race: {
      overall: { driverIds: ['snider'], teamId: 'richard-childress-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['snider'], teamId: 'richard-childress-racing' },
          { position: 2, driverIds: ['jones-brandon'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['hemric'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-las-vegas': {
    qualifying: {
      overall: { driverIds: ['snider'], teamId: 'richard-childress-racing' },
    },
    race: {
      overall: { driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
          { position: 2, driverIds: ['hemric'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['jones-brandon'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-phoenix': {
    qualifying: {
      overall: { driverIds: ['hemric'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['cindric'], teamId: 'team-penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['cindric'], teamId: 'team-penske' },
          { position: 2, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['brown-brandon'], teamId: 'brandonbilt-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-atlanta': {
    qualifying: {
      overall: { driverIds: ['cindric'], teamId: 'team-penske' },
    },
    race: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['truex-jr'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['burton-h'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-martinsville': {
    qualifying: {
      overall: { driverIds: ['burton-h'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['berry'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['berry'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['gragson'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['hemric'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-talladega': {
    qualifying: {
      overall: { driverIds: ['cindric'], teamId: 'team-penske' },
    },
    race: {
      overall: { driverIds: ['burton-jeb'], teamId: 'kaulig-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['burton-jeb'], teamId: 'kaulig-racing' },
          { position: 2, driverIds: ['cindric'], teamId: 'team-penske' },
          { position: 3, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-darlington': {
    qualifying: {
      overall: { driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
    },
    race: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['berry'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['jones-brandon'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-dover': {
    qualifying: {
      overall: { driverIds: ['hemric'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['cindric'], teamId: 'team-penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['cindric'], teamId: 'team-penske' },
          { position: 2, driverIds: ['berry'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-cota': {
    qualifying: {
      // Kyle Busch made guest start at JGR #54
      overall: { driverIds: ['busch'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['busch'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['busch'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
          { position: 3, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-charlotte': {
    qualifying: {
      overall: { driverIds: ['herbst'], teamId: 'stewart-haas-racing' },
    },
    race: {
      overall: { driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['cindric'], teamId: 'team-penske' },
          { position: 3, driverIds: ['burton-h'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-mid-ohio': {
    qualifying: {
      overall: { driverIds: ['cindric'], teamId: 'team-penske' },
    },
    race: {
      overall: { driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
          { position: 2, driverIds: ['haley'], teamId: 'kaulig-racing' },
          { position: 3, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-texas': {
    qualifying: {
      overall: { driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
    },
    race: {
      // Kyle Busch substituted at JGR #54
      overall: { driverIds: ['busch'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['busch'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['cindric'], teamId: 'team-penske' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-nashville': {
    qualifying: {
      // Kyle Busch substituted at JGR #54
      overall: { driverIds: ['busch'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['busch'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['busch'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['burton-h'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-pocono': {
    qualifying: {
      overall: { driverIds: ['burton-h'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['cindric'], teamId: 'team-penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['cindric'], teamId: 'team-penske' },
          { position: 2, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-road-america': {
    qualifying: {
      overall: { driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      // Kyle Busch substituted at JGR #54
      overall: { driverIds: ['busch'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['busch'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['hemric'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['annett'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-atlanta-2': {
    qualifying: {
      overall: { driverIds: ['busch'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      // Kyle Busch substituted at JGR #54
      overall: { driverIds: ['busch'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['busch'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['burton-jeb'], teamId: 'kaulig-racing' },
          { position: 3, driverIds: ['gragson'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-new-hampshire': {
    qualifying: {
      overall: { driverIds: ['burton-jeb'], teamId: 'kaulig-racing' },
    },
    race: {
      // Christopher Bell substituted at JGR #54
      overall: { driverIds: ['bell'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bell'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['hemric'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-watkins-glen': {
    qualifying: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
          { position: 3, driverIds: ['cindric'], teamId: 'team-penske' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-indianapolis-rc': {
    qualifying: {
      overall: { driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
    },
    race: {
      overall: { driverIds: ['cindric'], teamId: 'team-penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['cindric'], teamId: 'team-penske' },
          { position: 2, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
          { position: 3, driverIds: ['haley'], teamId: 'kaulig-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-michigan': {
    qualifying: {
      overall: { driverIds: ['cindric'], teamId: 'team-penske' },
    },
    race: {
      overall: { driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
          { position: 2, driverIds: ['jones-brandon'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['gragson'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-daytona-2': {
    qualifying: {
      overall: { driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
    },
    race: {
      overall: { driverIds: ['haley'], teamId: 'kaulig-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['haley'], teamId: 'kaulig-racing' },
          { position: 2, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
          { position: 3, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-darlington-2': {
    qualifying: {
      overall: { driverIds: ['hemric'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['gragson'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gragson'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['burton-h'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['cindric'], teamId: 'team-penske' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-richmond': {
    qualifying: {
      overall: { driverIds: ['cindric'], teamId: 'team-penske' },
    },
    race: {
      overall: { driverIds: ['gragson'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gragson'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['haley'], teamId: 'kaulig-racing' },
          { position: 3, driverIds: ['nemechek'], teamId: 'sam-hunt-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-bristol': {
    qualifying: {
      overall: { driverIds: ['gragson'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
          { position: 2, driverIds: ['cindric'], teamId: 'team-penske' },
          { position: 3, driverIds: ['herbst'], teamId: 'stewart-haas-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-las-vegas-2': {
    qualifying: {
      overall: { driverIds: ['cindric'], teamId: 'team-penske' },
    },
    race: {
      overall: { driverIds: ['berry'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['berry'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
          { position: 3, driverIds: ['gragson'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-talladega-2': {
    qualifying: {
      overall: { driverIds: ['allgaier'], teamId: 'jr-motorsports' },
    },
    race: {
      overall: { driverIds: ['brown-brandon'], teamId: 'brandonbilt-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['brown-brandon'], teamId: 'brandonbilt-motorsports' },
          { position: 2, driverIds: ['jones-brandon'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['allgaier'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-charlotte-roval': {
    qualifying: {
      overall: { driverIds: ['cindric'], teamId: 'team-penske' },
    },
    race: {
      overall: { driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
          { position: 2, driverIds: ['cindric'], teamId: 'team-penske' },
          { position: 3, driverIds: ['hemric'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-texas-2': {
    qualifying: {
      overall: { driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
    },
    race: {
      // John Hunter Nemechek in JGR #54
      overall: { driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nemechek'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['hemric'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['gragson'], teamId: 'jr-motorsports' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-kansas': {
    qualifying: {
      overall: { driverIds: ['hemric'], teamId: 'joe-gibbs-racing' },
    },
    race: {
      overall: { driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['cindric'], teamId: 'team-penske' },
          { position: 3, driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-martinsville-2': {
    qualifying: {
      overall: { driverIds: ['cindric'], teamId: 'team-penske' },
    },
    race: {
      overall: { driverIds: ['gragson'], teamId: 'jr-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gragson'], teamId: 'jr-motorsports' },
          { position: 2, driverIds: ['cindric'], teamId: 'team-penske' },
          { position: 3, driverIds: ['hemric'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-xfinity-2021-phoenix-championship': {
    qualifying: {
      overall: { driverIds: ['cindric'], teamId: 'team-penske' },
    },
    race: {
      overall: { driverIds: ['hemric'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hemric'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['cindric'], teamId: 'team-penske' },
          { position: 3, driverIds: ['burton-h'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
}
