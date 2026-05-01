import type { EventResults } from './types'

// NASCAR Cup Series 2024 results — race winners only
// Source: Wikipedia "2024 NASCAR Cup Series" race results table
// Champion: Joey Logano (Team Penske)
export const nascarResults2024: Record<string, EventResults> = {
  // Round 1 — Daytona 500
  'nascar-2024-daytona-500': {
    race: { overall: { driverIds: ['byron'], teamId: 'hendrick-motorsports' } },
  },
  // Round 2 — Ambetter Health 400 (Atlanta)
  'nascar-2024-atlanta': {
    race: { overall: { driverIds: ['suarez'], teamId: 'trackhouse-racing' } },
  },
  // Round 3 — Pennzoil 400 (Las Vegas)
  'nascar-2024-las-vegas': {
    race: { overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' } },
  },
  // Round 4 — Shriners Children's 500 (Phoenix)
  'nascar-2024-phoenix': {
    race: { overall: { driverIds: ['bell'], teamId: 'joe-gibbs-racing' } },
  },
  // Round 5 — Food City 500 (Bristol)
  'nascar-2024-bristol': {
    race: { overall: { driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' } },
  },
  // Round 6 — EchoPark Automotive Grand Prix (COTA)
  'nascar-2024-cota': {
    race: { overall: { driverIds: ['byron'], teamId: 'hendrick-motorsports' } },
  },
  // Round 7 — Toyota Owners 400 (Richmond)
  'nascar-2024-richmond': {
    race: { overall: { driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' } },
  },
  // Round 8 — Cook Out 400 (Martinsville)
  'nascar-2024-martinsville': {
    race: { overall: { driverIds: ['byron'], teamId: 'hendrick-motorsports' } },
  },
  // Round 9 — Autotrader EchoPark Automotive 400 (Texas)
  'nascar-2024-texas': {
    race: { overall: { driverIds: ['elliott'], teamId: 'hendrick-motorsports' } },
  },
  // Round 10 — GEICO 500 (Talladega)
  'nascar-2024-talladega': {
    race: { overall: { driverIds: ['reddick'], teamId: '23xi-racing' } },
  },
  // Round 11 — Wurth 400 (Dover)
  'nascar-2024-dover': {
    race: { overall: { driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' } },
  },
  // Round 12 — AdventHealth 400 (Kansas)
  'nascar-2024-kansas': {
    race: { overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' } },
  },
  // Round 13 — Goodyear 400 (Darlington)
  'nascar-2024-darlington': {
    race: { overall: { driverIds: ['keselowski'], teamId: 'rfk-racing' } },
  },
  // Round 14 — Coca-Cola 600 (Charlotte)
  'nascar-2024-coca-cola-600': {
    race: { overall: { driverIds: ['bell'], teamId: 'joe-gibbs-racing' } },
  },
  // Round 15 — Enjoy Illinois 300 (WWT Raceway)
  'nascar-2024-wwtr': {
    race: { overall: { driverIds: ['cindric'], teamId: 'team-penske' } },
  },
  // Round 16 — Toyota/Save Mart 350 (Sonoma)
  'nascar-2024-sonoma': {
    race: { overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' } },
  },
  // Round 17 — Iowa Corn 350 (Iowa)
  'nascar-2024-iowa': {
    race: { overall: { driverIds: ['blaney'], teamId: 'team-penske' } },
  },
  // Round 18 — USA Today 301 (New Hampshire)
  'nascar-2024-new-hampshire': {
    race: { overall: { driverIds: ['bell'], teamId: 'joe-gibbs-racing' } },
  },
  // Round 19 — Ally 400 (Nashville)
  'nascar-2024-nashville': {
    race: { overall: { driverIds: ['logano'], teamId: 'team-penske' } },
  },
  // Round 20 — Grant Park 165 (Chicago)
  'nascar-2024-chicago': {
    race: { overall: { driverIds: ['bowman'], teamId: 'hendrick-motorsports' } },
  },
  // Round 21 — The Great American Getaway 400 (Pocono)
  'nascar-2024-pocono': {
    race: { overall: { driverIds: ['blaney'], teamId: 'team-penske' } },
  },
  // Round 22 — Brickyard 400 (Indianapolis)
  'nascar-2024-indianapolis': {
    race: { overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' } },
  },
  // Round 23 — Cook Out 400 (Richmond 2)
  'nascar-2024-richmond-2': {
    race: { overall: { driverIds: ['dillon'], teamId: 'richard-childress-racing' } },
  },
  // Round 24 — FireKeepers Casino 400 (Michigan)
  'nascar-2024-michigan': {
    race: { overall: { driverIds: ['reddick'], teamId: '23xi-racing' } },
  },
  // Round 25 — Coke Zero Sugar 400 (Daytona 2)
  'nascar-2024-daytona-2': {
    race: { overall: { driverIds: ['burton-h'], teamId: 'wood-brothers-racing' } },
  },
  // Round 26 — Cook Out Southern 500 (Darlington 2) — Playoffs Round of 16
  'nascar-2024-darlington-2': {
    race: { overall: { driverIds: ['briscoe'], teamId: 'stewart-haas-racing' } },
  },
  // Round 27 — Quaker State 400 (Atlanta 2)
  'nascar-2024-atlanta-2': {
    race: { overall: { driverIds: ['logano'], teamId: 'team-penske' } },
  },
  // Round 28 — Go Bowling at The Glen (Watkins Glen)
  'nascar-2024-watkins-glen': {
    race: { overall: { driverIds: ['buescher'], teamId: 'rfk-racing' } },
  },
  // Round 29 — Bass Pro Shops Night Race (Bristol Night)
  'nascar-2024-bristol-night': {
    race: { overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' } },
  },
  // Round 30 — Hollywood Casino 400 (Kansas 2)
  'nascar-2024-kansas-2': {
    race: { overall: { driverIds: ['chastain'], teamId: 'trackhouse-racing' } },
  },
  // Round 31 — YellaWood 500 (Talladega 2)
  'nascar-2024-talladega-2': {
    race: { overall: { driverIds: ['stenhouse-jr'], teamId: 'jtg-daugherty-racing' } },
  },
  // Round 32 — Bank of America Roval 400 (Charlotte Roval)
  'nascar-2024-charlotte-roval': {
    race: { overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' } },
  },
  // Round 33 — South Point 400 (Las Vegas 2) — Playoffs Round of 8
  'nascar-2024-las-vegas-2': {
    race: { overall: { driverIds: ['logano'], teamId: 'team-penske' } },
  },
  // Round 34 — Straight Talk Wireless 400 (Homestead)
  'nascar-2024-homestead': {
    race: { overall: { driverIds: ['reddick'], teamId: '23xi-racing' } },
  },
  // Round 35 — Xfinity 500 (Martinsville 2)
  'nascar-2024-martinsville-2': {
    race: { overall: { driverIds: ['blaney'], teamId: 'team-penske' } },
  },
  // Round 36 — NASCAR Cup Series Championship Race (Phoenix)
  'nascar-2024-phoenix-championship': {
    race: { overall: { driverIds: ['logano'], teamId: 'team-penske' } },
  },
}
