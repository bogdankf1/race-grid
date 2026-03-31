import type { EventResults } from './types'

// NASCAR Cup Series 2025 results — verified from nascar.com, jayski.com, wikipedia
export const nascarResults2025: Record<string, EventResults> = {
  // Round 1 — Daytona 500 (Feb 16)
  'nascar-2025-daytona-500': {
    qualifying: {
      overall: { driverIds: ['briscoe'], teamId: 'joe-gibbs-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['briscoe'], teamId: 'joe-gibbs-racing' }] }],
    },
    race: {
      overall: { driverIds: ['byron'], teamId: 'hendrick-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['byron'], teamId: 'hendrick-motorsports' },
          { position: 2, driverIds: ['reddick'], teamId: '23xi-racing' },
          { position: 3, driverIds: ['johnson'], teamId: 'legacy-motor-club' },
        ],
      }],
    },
  },
  // Round 2 — Ambetter Health 400 at Atlanta (Feb 23)
  'nascar-2025-atlanta': {
    qualifying: {
      overall: { driverIds: ['blaney'], teamId: 'team-penske' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['blaney'], teamId: 'team-penske' }] }],
    },
    race: {
      overall: { driverIds: ['bell'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bell'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['hocevar'], teamId: 'spire-motorsports' },
          { position: 3, driverIds: ['larson'], teamId: 'hendrick-motorsports' },
        ],
      }],
    },
  },
  // Round 3 — EchoPark Automotive Grand Prix at COTA (Mar 2)
  'nascar-2025-cota': {
    qualifying: {
      overall: { driverIds: ['reddick'], teamId: '23xi-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['reddick'], teamId: '23xi-racing' }] }],
    },
    race: {
      overall: { driverIds: ['bell'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bell'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['byron'], teamId: 'hendrick-motorsports' },
          { position: 3, driverIds: ['reddick'], teamId: '23xi-racing' },
        ],
      }],
    },
  },
  // Round 4 — Shriners Children's 500 at Phoenix (Mar 9)
  'nascar-2025-phoenix': {
    qualifying: {
      overall: { driverIds: ['byron'], teamId: 'hendrick-motorsports' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['byron'], teamId: 'hendrick-motorsports' }] }],
    },
    race: {
      overall: { driverIds: ['bell'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bell'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['larson'], teamId: 'hendrick-motorsports' },
        ],
      }],
    },
  },
  // Round 5 — Pennzoil 400 at Las Vegas (Mar 16)
  'nascar-2025-las-vegas': {
    qualifying: {
      overall: { driverIds: ['mcdowell'], teamId: 'front-row-motorsports' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['mcdowell'], teamId: 'front-row-motorsports' }] }],
    },
    race: {
      overall: { driverIds: ['berry'], teamId: 'wood-brothers-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['berry'], teamId: 'wood-brothers-racing' },
          { position: 2, driverIds: ['suarez'], teamId: 'trackhouse-racing' },
          { position: 3, driverIds: ['preece'], teamId: 'rfk-racing' },
        ],
      }],
    },
  },
  // Round 6 — Straight Talk Wireless 400 at Homestead-Miami (Mar 23)
  'nascar-2025-homestead': {
    qualifying: {
      overall: { driverIds: ['bowman'], teamId: 'hendrick-motorsports' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['bowman'], teamId: 'hendrick-motorsports' }] }],
    },
    race: {
      overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['larson'], teamId: 'hendrick-motorsports' },
          { position: 2, driverIds: ['bowman'], teamId: 'hendrick-motorsports' },
          { position: 3, driverIds: ['wallace'], teamId: '23xi-racing' },
        ],
      }],
    },
  },
  // Round 7 — Cook Out 400 at Martinsville (Mar 30)
  'nascar-2025-martinsville': {
    qualifying: {
      overall: { driverIds: ['bell'], teamId: 'joe-gibbs-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['bell'], teamId: 'joe-gibbs-racing' }] }],
    },
    race: {
      overall: { driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['bell'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['wallace'], teamId: '23xi-racing' },
        ],
      }],
    },
  },
  // Round 8 — Goodyear 400 at Darlington (Apr 6)
  'nascar-2025-darlington': {
    qualifying: {
      overall: { driverIds: ['byron'], teamId: 'hendrick-motorsports' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['byron'], teamId: 'hendrick-motorsports' }] }],
    },
    race: {
      overall: { driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['byron'], teamId: 'hendrick-motorsports' },
          { position: 3, driverIds: ['bell'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  // Round 9 — Food City 500 at Bristol (Apr 13)
  'nascar-2025-bristol': {
    qualifying: {
      overall: { driverIds: ['bowman'], teamId: 'hendrick-motorsports' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['bowman'], teamId: 'hendrick-motorsports' }] }],
    },
    race: {
      overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['larson'], teamId: 'hendrick-motorsports' },
          { position: 2, driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  // Round 10 — Jack Link's 500 at Talladega (Apr 27) — official results after DQs
  'nascar-2025-talladega': {
    qualifying: {
      overall: { driverIds: ['smith'], teamId: 'spire-motorsports' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['smith'], teamId: 'spire-motorsports' }] }],
    },
    race: {
      overall: { driverIds: ['cindric'], teamId: 'team-penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['cindric'], teamId: 'team-penske' },
          { position: 2, driverIds: ['larson'], teamId: 'hendrick-motorsports' },
          { position: 3, driverIds: ['byron'], teamId: 'hendrick-motorsports' },
        ],
      }],
    },
  },
  // Round 11 — Würth 400 at Texas (May 4)
  'nascar-2025-texas': {
    qualifying: {
      overall: { driverIds: ['hocevar'], teamId: 'spire-motorsports' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['hocevar'], teamId: 'spire-motorsports' }] }],
    },
    race: {
      overall: { driverIds: ['logano'], teamId: 'team-penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['logano'], teamId: 'team-penske' },
          { position: 2, driverIds: ['chastain'], teamId: 'trackhouse-racing' },
          { position: 3, driverIds: ['blaney'], teamId: 'team-penske' },
        ],
      }],
    },
  },
  // Round 12 — AdventHealth 400 at Kansas (May 11)
  'nascar-2025-kansas': {
    qualifying: {
      overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['larson'], teamId: 'hendrick-motorsports' }] }],
    },
    race: {
      overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['larson'], teamId: 'hendrick-motorsports' },
          { position: 2, driverIds: ['bell'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['blaney'], teamId: 'team-penske' },
        ],
      }],
    },
  },
  // Round 13 — Coca-Cola 600 at Charlotte (May 25)
  'nascar-2025-coca-cola-600': {
    qualifying: {
      overall: { driverIds: ['briscoe'], teamId: 'joe-gibbs-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['briscoe'], teamId: 'joe-gibbs-racing' }] }],
    },
    race: {
      overall: { driverIds: ['chastain'], teamId: 'trackhouse-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['chastain'], teamId: 'trackhouse-racing' },
          { position: 2, driverIds: ['byron'], teamId: 'hendrick-motorsports' },
          { position: 3, driverIds: ['briscoe'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  // Round 14 — Cracker Barrel 400 at Nashville (Jun 1)
  'nascar-2025-nashville': {
    qualifying: {
      overall: { driverIds: ['briscoe'], teamId: 'joe-gibbs-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['briscoe'], teamId: 'joe-gibbs-racing' }] }],
    },
    race: {
      overall: { driverIds: ['blaney'], teamId: 'team-penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['blaney'], teamId: 'team-penske' },
          { position: 2, driverIds: ['hocevar'], teamId: 'spire-motorsports' },
          { position: 3, driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  // Round 15 — FireKeepers Casino 400 at Michigan (Jun 8)
  'nascar-2025-michigan': {
    qualifying: {
      overall: { driverIds: ['briscoe'], teamId: 'joe-gibbs-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['briscoe'], teamId: 'joe-gibbs-racing' }] }],
    },
    race: {
      overall: { driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['buescher'], teamId: 'rfk-racing' },
          { position: 3, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  // Round 16 — Viva México 250 at Mexico City (Jun 15)
  'nascar-2025-mexico': {
    qualifying: {
      overall: { driverIds: ['van-gisbergen'], teamId: 'trackhouse-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['van-gisbergen'], teamId: 'trackhouse-racing' }] }],
    },
    race: {
      overall: { driverIds: ['van-gisbergen'], teamId: 'trackhouse-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['van-gisbergen'], teamId: 'trackhouse-racing' },
          { position: 2, driverIds: ['bell'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['elliott'], teamId: 'hendrick-motorsports' },
        ],
      }],
    },
  },
  // Round 17 — The Great American Getaway 400 at Pocono (Jun 22)
  'nascar-2025-pocono': {
    qualifying: {
      overall: { driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' }] }],
    },
    race: {
      overall: { driverIds: ['briscoe'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['briscoe'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['blaney'], teamId: 'team-penske' },
        ],
      }],
    },
  },
  // Round 18 — Quaker State 400 at Atlanta (Jun 28)
  'nascar-2025-atlanta-2': {
    qualifying: {
      overall: { driverIds: ['logano'], teamId: 'team-penske' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['logano'], teamId: 'team-penske' }] }],
    },
    race: {
      overall: { driverIds: ['elliott'], teamId: 'hendrick-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['elliott'], teamId: 'hendrick-motorsports' },
          { position: 2, driverIds: ['keselowski'], teamId: 'rfk-racing' },
          { position: 3, driverIds: ['bowman'], teamId: 'hendrick-motorsports' },
        ],
      }],
    },
  },
  // Round 19 — Grant Park 165 at Chicago Street Course (Jul 6)
  'nascar-2025-chicago': {
    qualifying: {
      overall: { driverIds: ['van-gisbergen'], teamId: 'trackhouse-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['van-gisbergen'], teamId: 'trackhouse-racing' }] }],
    },
    race: {
      overall: { driverIds: ['van-gisbergen'], teamId: 'trackhouse-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['van-gisbergen'], teamId: 'trackhouse-racing' },
          { position: 2, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['reddick'], teamId: '23xi-racing' },
        ],
      }],
    },
  },
  // Round 20 — Toyota/Save Mart 350 at Sonoma (Jul 13)
  'nascar-2025-sonoma': {
    qualifying: {
      overall: { driverIds: ['van-gisbergen'], teamId: 'trackhouse-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['van-gisbergen'], teamId: 'trackhouse-racing' }] }],
    },
    race: {
      overall: { driverIds: ['van-gisbergen'], teamId: 'trackhouse-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['van-gisbergen'], teamId: 'trackhouse-racing' },
          { position: 2, driverIds: ['briscoe'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['elliott'], teamId: 'hendrick-motorsports' },
        ],
      }],
    },
  },
  // Round 21 — Autotrader EchoPark Automotive 400 at Dover (Jul 20)
  'nascar-2025-dover': {
    qualifying: {
      overall: { driverIds: ['elliott'], teamId: 'hendrick-motorsports' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['elliott'], teamId: 'hendrick-motorsports' }] }],
    },
    race: {
      overall: { driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['briscoe'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['bowman'], teamId: 'hendrick-motorsports' },
        ],
      }],
    },
  },
  // Round 22 — Brickyard 400 at Indianapolis (Jul 27)
  'nascar-2025-indianapolis': {
    qualifying: {
      overall: { driverIds: ['briscoe'], teamId: 'joe-gibbs-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['briscoe'], teamId: 'joe-gibbs-racing' }] }],
    },
    race: {
      overall: { driverIds: ['wallace'], teamId: '23xi-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['wallace'], teamId: '23xi-racing' },
          { position: 2, driverIds: ['larson'], teamId: 'hendrick-motorsports' },
          { position: 3, driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  // Round 23 — Iowa Corn 350 at Iowa (Aug 3)
  'nascar-2025-iowa': {
    qualifying: {
      overall: { driverIds: ['briscoe'], teamId: 'joe-gibbs-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['briscoe'], teamId: 'joe-gibbs-racing' }] }],
    },
    race: {
      overall: { driverIds: ['byron'], teamId: 'hendrick-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['byron'], teamId: 'hendrick-motorsports' },
          { position: 2, driverIds: ['briscoe'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['keselowski'], teamId: 'rfk-racing' },
        ],
      }],
    },
  },
  // Round 24 — Go Bowling at The Glen at Watkins Glen (Aug 10)
  'nascar-2025-watkins-glen': {
    qualifying: {
      overall: { driverIds: ['blaney'], teamId: 'team-penske' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['blaney'], teamId: 'team-penske' }] }],
    },
    race: {
      overall: { driverIds: ['van-gisbergen'], teamId: 'trackhouse-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['van-gisbergen'], teamId: 'trackhouse-racing' },
          { position: 2, driverIds: ['bell'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['buescher'], teamId: 'rfk-racing' },
        ],
      }],
    },
  },
  // Round 25 — Cook Out 400 at Richmond (Aug 16)
  'nascar-2025-richmond': {
    qualifying: {
      overall: { driverIds: ['preece'], teamId: 'rfk-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['preece'], teamId: 'rfk-racing' }] }],
    },
    race: {
      overall: { driverIds: ['dillon'], teamId: 'richard-childress-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['dillon'], teamId: 'richard-childress-racing' },
          { position: 2, driverIds: ['bowman'], teamId: 'hendrick-motorsports' },
          { position: 3, driverIds: ['blaney'], teamId: 'team-penske' },
        ],
      }],
    },
  },
  // Round 26 — Coke Zero Sugar 400 at Daytona (Aug 23)
  'nascar-2025-daytona-2': {
    qualifying: {
      overall: { driverIds: ['blaney'], teamId: 'team-penske' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['blaney'], teamId: 'team-penske' }] }],
    },
    race: {
      overall: { driverIds: ['blaney'], teamId: 'team-penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['blaney'], teamId: 'team-penske' },
          { position: 2, driverIds: ['suarez'], teamId: 'trackhouse-racing' },
          { position: 3, driverIds: ['haley'], teamId: 'spire-motorsports' },
        ],
      }],
    },
  },
  // Round 27 — Cook Out Southern 500 at Darlington (Aug 31)
  'nascar-2025-darlington-2': {
    qualifying: {
      overall: { driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' }] }],
    },
    race: {
      overall: { driverIds: ['briscoe'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['briscoe'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['reddick'], teamId: '23xi-racing' },
          { position: 3, driverIds: ['jones'], teamId: 'legacy-motor-club' },
        ],
      }],
    },
  },
  // Round 28 — Enjoy Illinois 300 at WWT Raceway (Sep 7)
  'nascar-2025-wwtr': {
    qualifying: {
      overall: { driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' }] }],
    },
    race: {
      overall: { driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['briscoe'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['elliott'], teamId: 'hendrick-motorsports' },
        ],
      }],
    },
  },
  // Round 29 — Bass Pro Shops Night Race at Bristol (Sep 13)
  'nascar-2025-bristol-night': {
    qualifying: {
      overall: { driverIds: ['allmendinger'], teamId: 'kaulig-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['allmendinger'], teamId: 'kaulig-racing' }] }],
    },
    race: {
      overall: { driverIds: ['bell'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bell'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['keselowski'], teamId: 'rfk-racing' },
          { position: 3, driverIds: ['smith'], teamId: 'front-row-motorsports' },
        ],
      }],
    },
  },
  // Round 30 — Mobil 1 301 at New Hampshire (Sep 21)
  'nascar-2025-new-hampshire': {
    qualifying: {
      overall: { driverIds: ['logano'], teamId: 'team-penske' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['logano'], teamId: 'team-penske' }] }],
    },
    race: {
      overall: { driverIds: ['blaney'], teamId: 'team-penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['blaney'], teamId: 'team-penske' },
          { position: 2, driverIds: ['berry'], teamId: 'wood-brothers-racing' },
          { position: 3, driverIds: ['byron'], teamId: 'hendrick-motorsports' },
        ],
      }],
    },
  },
  // Round 31 — Hollywood Casino 400 at Kansas (Sep 28)
  'nascar-2025-kansas-2': {
    qualifying: {
      overall: { driverIds: ['briscoe'], teamId: 'joe-gibbs-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['briscoe'], teamId: 'joe-gibbs-racing' }] }],
    },
    race: {
      overall: { driverIds: ['elliott'], teamId: 'hendrick-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['elliott'], teamId: 'hendrick-motorsports' },
          { position: 2, driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['bell'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  // Round 32 — Bank of America ROVAL 400 at Charlotte (Oct 5)
  'nascar-2025-charlotte-roval': {
    qualifying: {
      overall: { driverIds: ['reddick'], teamId: '23xi-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['reddick'], teamId: '23xi-racing' }] }],
    },
    race: {
      overall: { driverIds: ['van-gisbergen'], teamId: 'trackhouse-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['van-gisbergen'], teamId: 'trackhouse-racing' },
          { position: 2, driverIds: ['larson'], teamId: 'hendrick-motorsports' },
          { position: 3, driverIds: ['bell'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  // Round 33 — South Point 400 at Las Vegas (Oct 12)
  'nascar-2025-las-vegas-2': {
    qualifying: {
      overall: { driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' }] }],
    },
    race: {
      overall: { driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['larson'], teamId: 'hendrick-motorsports' },
          { position: 3, driverIds: ['bell'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  // Round 34 — YellaWood 500 at Talladega (Oct 19)
  'nascar-2025-talladega-2': {
    qualifying: {
      overall: { driverIds: ['mcdowell'], teamId: 'spire-motorsports' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['mcdowell'], teamId: 'spire-motorsports' }] }],
    },
    race: {
      overall: { driverIds: ['briscoe'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['briscoe'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['gilliland'], teamId: 'front-row-motorsports' },
          { position: 3, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  // Round 35 — Xfinity 500 at Martinsville (Oct 26)
  'nascar-2025-martinsville-2': {
    qualifying: {
      overall: { driverIds: ['byron'], teamId: 'hendrick-motorsports' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['byron'], teamId: 'hendrick-motorsports' }] }],
    },
    race: {
      overall: { driverIds: ['byron'], teamId: 'hendrick-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['byron'], teamId: 'hendrick-motorsports' },
          { position: 2, driverIds: ['blaney'], teamId: 'team-penske' },
          { position: 3, driverIds: ['elliott'], teamId: 'hendrick-motorsports' },
        ],
      }],
    },
  },
  // Round 36 — Championship Race at Phoenix (Nov 2)
  'nascar-2025-phoenix-championship': {
    qualifying: {
      overall: { driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' }] }],
    },
    race: {
      overall: { driverIds: ['blaney'], teamId: 'team-penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['blaney'], teamId: 'team-penske' },
          { position: 2, driverIds: ['keselowski'], teamId: 'rfk-racing' },
          { position: 3, driverIds: ['larson'], teamId: 'hendrick-motorsports' },
        ],
      }],
    },
  },
}
