import { EventResults } from './types'

// NASCAR Cup Series 2025 results — verified from nascar.com, jayski.com, wikipedia
export const nascarResults2025: Record<string, EventResults> = {
  // Round 1 — Daytona 500 (Feb 16)
  'nascar-2025-daytona-500': {
    qualifying: {
      overall: { drivers: ['Briscoe'], team: 'Joe Gibbs Racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Briscoe'], team: 'Joe Gibbs Racing' }] }],
    },
    race: {
      overall: { drivers: ['Byron'], team: 'Hendrick Motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Byron'], team: 'Hendrick Motorsports' },
          { position: 2, drivers: ['Reddick'], team: '23XI Racing' },
          { position: 3, drivers: ['Johnson'], team: 'Legacy Motor Club' },
        ],
      }],
    },
  },
  // Round 2 — Ambetter Health 400 at Atlanta (Feb 23)
  'nascar-2025-atlanta': {
    qualifying: {
      overall: { drivers: ['Blaney'], team: 'Team Penske' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Blaney'], team: 'Team Penske' }] }],
    },
    race: {
      overall: { drivers: ['Bell'], team: 'Joe Gibbs Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Bell'], team: 'Joe Gibbs Racing' },
          { position: 2, drivers: ['Hocevar'], team: 'Spire Motorsports' },
          { position: 3, drivers: ['Larson'], team: 'Hendrick Motorsports' },
        ],
      }],
    },
  },
  // Round 3 — EchoPark Automotive Grand Prix at COTA (Mar 2)
  'nascar-2025-cota': {
    qualifying: {
      overall: { drivers: ['Reddick'], team: '23XI Racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Reddick'], team: '23XI Racing' }] }],
    },
    race: {
      overall: { drivers: ['Bell'], team: 'Joe Gibbs Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Bell'], team: 'Joe Gibbs Racing' },
          { position: 2, drivers: ['Byron'], team: 'Hendrick Motorsports' },
          { position: 3, drivers: ['Reddick'], team: '23XI Racing' },
        ],
      }],
    },
  },
  // Round 4 — Shriners Children's 500 at Phoenix (Mar 9)
  'nascar-2025-phoenix': {
    qualifying: {
      overall: { drivers: ['Byron'], team: 'Hendrick Motorsports' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Byron'], team: 'Hendrick Motorsports' }] }],
    },
    race: {
      overall: { drivers: ['Bell'], team: 'Joe Gibbs Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Bell'], team: 'Joe Gibbs Racing' },
          { position: 2, drivers: ['Hamlin'], team: 'Joe Gibbs Racing' },
          { position: 3, drivers: ['Larson'], team: 'Hendrick Motorsports' },
        ],
      }],
    },
  },
  // Round 5 — Pennzoil 400 at Las Vegas (Mar 16)
  'nascar-2025-las-vegas': {
    qualifying: {
      overall: { drivers: ['McDowell'], team: 'Front Row Motorsports' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['McDowell'], team: 'Front Row Motorsports' }] }],
    },
    race: {
      overall: { drivers: ['Berry'], team: 'Wood Brothers Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Berry'], team: 'Wood Brothers Racing' },
          { position: 2, drivers: ['Suárez'], team: 'Trackhouse Racing' },
          { position: 3, drivers: ['Preece'], team: 'RFK Racing' },
        ],
      }],
    },
  },
  // Round 6 — Straight Talk Wireless 400 at Homestead-Miami (Mar 23)
  'nascar-2025-homestead': {
    qualifying: {
      overall: { drivers: ['Bowman'], team: 'Hendrick Motorsports' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Bowman'], team: 'Hendrick Motorsports' }] }],
    },
    race: {
      overall: { drivers: ['Larson'], team: 'Hendrick Motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Larson'], team: 'Hendrick Motorsports' },
          { position: 2, drivers: ['Bowman'], team: 'Hendrick Motorsports' },
          { position: 3, drivers: ['Wallace'], team: '23XI Racing' },
        ],
      }],
    },
  },
  // Round 7 — Cook Out 400 at Martinsville (Mar 30)
  'nascar-2025-martinsville': {
    qualifying: {
      overall: { drivers: ['Bell'], team: 'Joe Gibbs Racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Bell'], team: 'Joe Gibbs Racing' }] }],
    },
    race: {
      overall: { drivers: ['Hamlin'], team: 'Joe Gibbs Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Hamlin'], team: 'Joe Gibbs Racing' },
          { position: 2, drivers: ['Bell'], team: 'Joe Gibbs Racing' },
          { position: 3, drivers: ['Wallace'], team: '23XI Racing' },
        ],
      }],
    },
  },
  // Round 8 — Goodyear 400 at Darlington (Apr 6)
  'nascar-2025-darlington': {
    qualifying: {
      overall: { drivers: ['Byron'], team: 'Hendrick Motorsports' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Byron'], team: 'Hendrick Motorsports' }] }],
    },
    race: {
      overall: { drivers: ['Hamlin'], team: 'Joe Gibbs Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Hamlin'], team: 'Joe Gibbs Racing' },
          { position: 2, drivers: ['Byron'], team: 'Hendrick Motorsports' },
          { position: 3, drivers: ['Bell'], team: 'Joe Gibbs Racing' },
        ],
      }],
    },
  },
  // Round 9 — Food City 500 at Bristol (Apr 13)
  'nascar-2025-bristol': {
    qualifying: {
      overall: { drivers: ['Bowman'], team: 'Hendrick Motorsports' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Bowman'], team: 'Hendrick Motorsports' }] }],
    },
    race: {
      overall: { drivers: ['Larson'], team: 'Hendrick Motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Larson'], team: 'Hendrick Motorsports' },
          { position: 2, drivers: ['Hamlin'], team: 'Joe Gibbs Racing' },
          { position: 3, drivers: ['Gibbs'], team: 'Joe Gibbs Racing' },
        ],
      }],
    },
  },
  // Round 10 — Jack Link's 500 at Talladega (Apr 27) — official results after DQs
  'nascar-2025-talladega': {
    qualifying: {
      overall: { drivers: ['Smith'], team: 'Spire Motorsports' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Smith'], team: 'Spire Motorsports' }] }],
    },
    race: {
      overall: { drivers: ['Cindric'], team: 'Team Penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Cindric'], team: 'Team Penske' },
          { position: 2, drivers: ['Larson'], team: 'Hendrick Motorsports' },
          { position: 3, drivers: ['Byron'], team: 'Hendrick Motorsports' },
        ],
      }],
    },
  },
  // Round 11 — Würth 400 at Texas (May 4)
  'nascar-2025-texas': {
    qualifying: {
      overall: { drivers: ['Hocevar'], team: 'Spire Motorsports' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Hocevar'], team: 'Spire Motorsports' }] }],
    },
    race: {
      overall: { drivers: ['Logano'], team: 'Team Penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Logano'], team: 'Team Penske' },
          { position: 2, drivers: ['Chastain'], team: 'Trackhouse Racing' },
          { position: 3, drivers: ['Blaney'], team: 'Team Penske' },
        ],
      }],
    },
  },
  // Round 12 — AdventHealth 400 at Kansas (May 11)
  'nascar-2025-kansas': {
    qualifying: {
      overall: { drivers: ['Larson'], team: 'Hendrick Motorsports' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Larson'], team: 'Hendrick Motorsports' }] }],
    },
    race: {
      overall: { drivers: ['Larson'], team: 'Hendrick Motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Larson'], team: 'Hendrick Motorsports' },
          { position: 2, drivers: ['Bell'], team: 'Joe Gibbs Racing' },
          { position: 3, drivers: ['Blaney'], team: 'Team Penske' },
        ],
      }],
    },
  },
  // Round 13 — Coca-Cola 600 at Charlotte (May 25)
  'nascar-2025-coca-cola-600': {
    qualifying: {
      overall: { drivers: ['Briscoe'], team: 'Joe Gibbs Racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Briscoe'], team: 'Joe Gibbs Racing' }] }],
    },
    race: {
      overall: { drivers: ['Chastain'], team: 'Trackhouse Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Chastain'], team: 'Trackhouse Racing' },
          { position: 2, drivers: ['Byron'], team: 'Hendrick Motorsports' },
          { position: 3, drivers: ['Briscoe'], team: 'Joe Gibbs Racing' },
        ],
      }],
    },
  },
  // Round 14 — Cracker Barrel 400 at Nashville (Jun 1)
  'nascar-2025-nashville': {
    qualifying: {
      overall: { drivers: ['Briscoe'], team: 'Joe Gibbs Racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Briscoe'], team: 'Joe Gibbs Racing' }] }],
    },
    race: {
      overall: { drivers: ['Blaney'], team: 'Team Penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Blaney'], team: 'Team Penske' },
          { position: 2, drivers: ['Hocevar'], team: 'Spire Motorsports' },
          { position: 3, drivers: ['Hamlin'], team: 'Joe Gibbs Racing' },
        ],
      }],
    },
  },
  // Round 15 — FireKeepers Casino 400 at Michigan (Jun 8)
  'nascar-2025-michigan': {
    qualifying: {
      overall: { drivers: ['Briscoe'], team: 'Joe Gibbs Racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Briscoe'], team: 'Joe Gibbs Racing' }] }],
    },
    race: {
      overall: { drivers: ['Hamlin'], team: 'Joe Gibbs Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Hamlin'], team: 'Joe Gibbs Racing' },
          { position: 2, drivers: ['Buescher'], team: 'RFK Racing' },
          { position: 3, drivers: ['Gibbs'], team: 'Joe Gibbs Racing' },
        ],
      }],
    },
  },
  // Round 16 — Viva México 250 at Mexico City (Jun 15)
  'nascar-2025-mexico': {
    qualifying: {
      overall: { drivers: ['van Gisbergen'], team: 'Trackhouse Racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['van Gisbergen'], team: 'Trackhouse Racing' }] }],
    },
    race: {
      overall: { drivers: ['van Gisbergen'], team: 'Trackhouse Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['van Gisbergen'], team: 'Trackhouse Racing' },
          { position: 2, drivers: ['Bell'], team: 'Joe Gibbs Racing' },
          { position: 3, drivers: ['Elliott'], team: 'Hendrick Motorsports' },
        ],
      }],
    },
  },
  // Round 17 — The Great American Getaway 400 at Pocono (Jun 22)
  'nascar-2025-pocono': {
    qualifying: {
      overall: { drivers: ['Hamlin'], team: 'Joe Gibbs Racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Hamlin'], team: 'Joe Gibbs Racing' }] }],
    },
    race: {
      overall: { drivers: ['Briscoe'], team: 'Joe Gibbs Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Briscoe'], team: 'Joe Gibbs Racing' },
          { position: 2, drivers: ['Hamlin'], team: 'Joe Gibbs Racing' },
          { position: 3, drivers: ['Blaney'], team: 'Team Penske' },
        ],
      }],
    },
  },
  // Round 18 — Quaker State 400 at Atlanta (Jun 28)
  'nascar-2025-atlanta-2': {
    qualifying: {
      overall: { drivers: ['Logano'], team: 'Team Penske' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Logano'], team: 'Team Penske' }] }],
    },
    race: {
      overall: { drivers: ['Elliott'], team: 'Hendrick Motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Elliott'], team: 'Hendrick Motorsports' },
          { position: 2, drivers: ['Keselowski'], team: 'RFK Racing' },
          { position: 3, drivers: ['Bowman'], team: 'Hendrick Motorsports' },
        ],
      }],
    },
  },
  // Round 19 — Grant Park 165 at Chicago Street Course (Jul 6)
  'nascar-2025-chicago': {
    qualifying: {
      overall: { drivers: ['van Gisbergen'], team: 'Trackhouse Racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['van Gisbergen'], team: 'Trackhouse Racing' }] }],
    },
    race: {
      overall: { drivers: ['van Gisbergen'], team: 'Trackhouse Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['van Gisbergen'], team: 'Trackhouse Racing' },
          { position: 2, drivers: ['Gibbs'], team: 'Joe Gibbs Racing' },
          { position: 3, drivers: ['Reddick'], team: '23XI Racing' },
        ],
      }],
    },
  },
  // Round 20 — Toyota/Save Mart 350 at Sonoma (Jul 13)
  'nascar-2025-sonoma': {
    qualifying: {
      overall: { drivers: ['van Gisbergen'], team: 'Trackhouse Racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['van Gisbergen'], team: 'Trackhouse Racing' }] }],
    },
    race: {
      overall: { drivers: ['van Gisbergen'], team: 'Trackhouse Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['van Gisbergen'], team: 'Trackhouse Racing' },
          { position: 2, drivers: ['Briscoe'], team: 'Joe Gibbs Racing' },
          { position: 3, drivers: ['Elliott'], team: 'Hendrick Motorsports' },
        ],
      }],
    },
  },
  // Round 21 — Autotrader EchoPark Automotive 400 at Dover (Jul 20)
  'nascar-2025-dover': {
    qualifying: {
      overall: { drivers: ['Elliott'], team: 'Hendrick Motorsports' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Elliott'], team: 'Hendrick Motorsports' }] }],
    },
    race: {
      overall: { drivers: ['Hamlin'], team: 'Joe Gibbs Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Hamlin'], team: 'Joe Gibbs Racing' },
          { position: 2, drivers: ['Briscoe'], team: 'Joe Gibbs Racing' },
          { position: 3, drivers: ['Bowman'], team: 'Hendrick Motorsports' },
        ],
      }],
    },
  },
  // Round 22 — Brickyard 400 at Indianapolis (Jul 27)
  'nascar-2025-indianapolis': {
    qualifying: {
      overall: { drivers: ['Briscoe'], team: 'Joe Gibbs Racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Briscoe'], team: 'Joe Gibbs Racing' }] }],
    },
    race: {
      overall: { drivers: ['Wallace'], team: '23XI Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Wallace'], team: '23XI Racing' },
          { position: 2, drivers: ['Larson'], team: 'Hendrick Motorsports' },
          { position: 3, drivers: ['Hamlin'], team: 'Joe Gibbs Racing' },
        ],
      }],
    },
  },
  // Round 23 — Iowa Corn 350 at Iowa (Aug 3)
  'nascar-2025-iowa': {
    qualifying: {
      overall: { drivers: ['Briscoe'], team: 'Joe Gibbs Racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Briscoe'], team: 'Joe Gibbs Racing' }] }],
    },
    race: {
      overall: { drivers: ['Byron'], team: 'Hendrick Motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Byron'], team: 'Hendrick Motorsports' },
          { position: 2, drivers: ['Briscoe'], team: 'Joe Gibbs Racing' },
          { position: 3, drivers: ['Keselowski'], team: 'RFK Racing' },
        ],
      }],
    },
  },
  // Round 24 — Go Bowling at The Glen at Watkins Glen (Aug 10)
  'nascar-2025-watkins-glen': {
    qualifying: {
      overall: { drivers: ['Blaney'], team: 'Team Penske' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Blaney'], team: 'Team Penske' }] }],
    },
    race: {
      overall: { drivers: ['van Gisbergen'], team: 'Trackhouse Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['van Gisbergen'], team: 'Trackhouse Racing' },
          { position: 2, drivers: ['Bell'], team: 'Joe Gibbs Racing' },
          { position: 3, drivers: ['Buescher'], team: 'RFK Racing' },
        ],
      }],
    },
  },
  // Round 25 — Cook Out 400 at Richmond (Aug 16)
  'nascar-2025-richmond': {
    qualifying: {
      overall: { drivers: ['Preece'], team: 'RFK Racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Preece'], team: 'RFK Racing' }] }],
    },
    race: {
      overall: { drivers: ['Dillon'], team: 'Richard Childress Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Dillon'], team: 'Richard Childress Racing' },
          { position: 2, drivers: ['Bowman'], team: 'Hendrick Motorsports' },
          { position: 3, drivers: ['Blaney'], team: 'Team Penske' },
        ],
      }],
    },
  },
  // Round 26 — Coke Zero Sugar 400 at Daytona (Aug 23)
  'nascar-2025-daytona-2': {
    qualifying: {
      overall: { drivers: ['Blaney'], team: 'Team Penske' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Blaney'], team: 'Team Penske' }] }],
    },
    race: {
      overall: { drivers: ['Blaney'], team: 'Team Penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Blaney'], team: 'Team Penske' },
          { position: 2, drivers: ['Suárez'], team: 'Trackhouse Racing' },
          { position: 3, drivers: ['Haley'], team: 'Spire Motorsports' },
        ],
      }],
    },
  },
  // Round 27 — Cook Out Southern 500 at Darlington (Aug 31)
  'nascar-2025-darlington-2': {
    qualifying: {
      overall: { drivers: ['Hamlin'], team: 'Joe Gibbs Racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Hamlin'], team: 'Joe Gibbs Racing' }] }],
    },
    race: {
      overall: { drivers: ['Briscoe'], team: 'Joe Gibbs Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Briscoe'], team: 'Joe Gibbs Racing' },
          { position: 2, drivers: ['Reddick'], team: '23XI Racing' },
          { position: 3, drivers: ['Jones'], team: 'Legacy Motor Club' },
        ],
      }],
    },
  },
  // Round 28 — Enjoy Illinois 300 at WWT Raceway (Sep 7)
  'nascar-2025-wwtr': {
    qualifying: {
      overall: { drivers: ['Hamlin'], team: 'Joe Gibbs Racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Hamlin'], team: 'Joe Gibbs Racing' }] }],
    },
    race: {
      overall: { drivers: ['Hamlin'], team: 'Joe Gibbs Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Hamlin'], team: 'Joe Gibbs Racing' },
          { position: 2, drivers: ['Briscoe'], team: 'Joe Gibbs Racing' },
          { position: 3, drivers: ['Elliott'], team: 'Hendrick Motorsports' },
        ],
      }],
    },
  },
  // Round 29 — Bass Pro Shops Night Race at Bristol (Sep 13)
  'nascar-2025-bristol-night': {
    qualifying: {
      overall: { drivers: ['Allmendinger'], team: 'Kaulig Racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Allmendinger'], team: 'Kaulig Racing' }] }],
    },
    race: {
      overall: { drivers: ['Bell'], team: 'Joe Gibbs Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Bell'], team: 'Joe Gibbs Racing' },
          { position: 2, drivers: ['Keselowski'], team: 'RFK Racing' },
          { position: 3, drivers: ['Smith'], team: 'Front Row Motorsports' },
        ],
      }],
    },
  },
  // Round 30 — Mobil 1 301 at New Hampshire (Sep 21)
  'nascar-2025-new-hampshire': {
    qualifying: {
      overall: { drivers: ['Logano'], team: 'Team Penske' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Logano'], team: 'Team Penske' }] }],
    },
    race: {
      overall: { drivers: ['Blaney'], team: 'Team Penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Blaney'], team: 'Team Penske' },
          { position: 2, drivers: ['Berry'], team: 'Wood Brothers Racing' },
          { position: 3, drivers: ['Byron'], team: 'Hendrick Motorsports' },
        ],
      }],
    },
  },
  // Round 31 — Hollywood Casino 400 at Kansas (Sep 28)
  'nascar-2025-kansas-2': {
    qualifying: {
      overall: { drivers: ['Briscoe'], team: 'Joe Gibbs Racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Briscoe'], team: 'Joe Gibbs Racing' }] }],
    },
    race: {
      overall: { drivers: ['Elliott'], team: 'Hendrick Motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Elliott'], team: 'Hendrick Motorsports' },
          { position: 2, drivers: ['Hamlin'], team: 'Joe Gibbs Racing' },
          { position: 3, drivers: ['Bell'], team: 'Joe Gibbs Racing' },
        ],
      }],
    },
  },
  // Round 32 — Bank of America ROVAL 400 at Charlotte (Oct 5)
  'nascar-2025-charlotte-roval': {
    qualifying: {
      overall: { drivers: ['Reddick'], team: '23XI Racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Reddick'], team: '23XI Racing' }] }],
    },
    race: {
      overall: { drivers: ['van Gisbergen'], team: 'Trackhouse Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['van Gisbergen'], team: 'Trackhouse Racing' },
          { position: 2, drivers: ['Larson'], team: 'Hendrick Motorsports' },
          { position: 3, drivers: ['Bell'], team: 'Joe Gibbs Racing' },
        ],
      }],
    },
  },
  // Round 33 — South Point 400 at Las Vegas (Oct 12)
  'nascar-2025-las-vegas-2': {
    qualifying: {
      overall: { drivers: ['Hamlin'], team: 'Joe Gibbs Racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Hamlin'], team: 'Joe Gibbs Racing' }] }],
    },
    race: {
      overall: { drivers: ['Hamlin'], team: 'Joe Gibbs Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Hamlin'], team: 'Joe Gibbs Racing' },
          { position: 2, drivers: ['Larson'], team: 'Hendrick Motorsports' },
          { position: 3, drivers: ['Bell'], team: 'Joe Gibbs Racing' },
        ],
      }],
    },
  },
  // Round 34 — YellaWood 500 at Talladega (Oct 19)
  'nascar-2025-talladega-2': {
    qualifying: {
      overall: { drivers: ['McDowell'], team: 'Spire Motorsports' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['McDowell'], team: 'Spire Motorsports' }] }],
    },
    race: {
      overall: { drivers: ['Briscoe'], team: 'Joe Gibbs Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Briscoe'], team: 'Joe Gibbs Racing' },
          { position: 2, drivers: ['Gilliland'], team: 'Front Row Motorsports' },
          { position: 3, drivers: ['Gibbs'], team: 'Joe Gibbs Racing' },
        ],
      }],
    },
  },
  // Round 35 — Xfinity 500 at Martinsville (Oct 26)
  'nascar-2025-martinsville-2': {
    qualifying: {
      overall: { drivers: ['Byron'], team: 'Hendrick Motorsports' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Byron'], team: 'Hendrick Motorsports' }] }],
    },
    race: {
      overall: { drivers: ['Byron'], team: 'Hendrick Motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Byron'], team: 'Hendrick Motorsports' },
          { position: 2, drivers: ['Blaney'], team: 'Team Penske' },
          { position: 3, drivers: ['Elliott'], team: 'Hendrick Motorsports' },
        ],
      }],
    },
  },
  // Round 36 — Championship Race at Phoenix (Nov 2)
  'nascar-2025-phoenix-championship': {
    qualifying: {
      overall: { drivers: ['Hamlin'], team: 'Joe Gibbs Racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Hamlin'], team: 'Joe Gibbs Racing' }] }],
    },
    race: {
      overall: { drivers: ['Blaney'], team: 'Team Penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Blaney'], team: 'Team Penske' },
          { position: 2, drivers: ['Keselowski'], team: 'RFK Racing' },
          { position: 3, drivers: ['Larson'], team: 'Hendrick Motorsports' },
        ],
      }],
    },
  },
}
