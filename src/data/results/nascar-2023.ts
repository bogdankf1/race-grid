import type { EventResults } from './types'

// NASCAR Cup Series 2023 results — race winners only
// Source: Wikipedia "2023 NASCAR Cup Series" race results table
// Champion: Ryan Blaney (Team Penske)
export const nascarResults2023: Record<string, EventResults> = {
  // Round 1 — Daytona 500
  'nascar-2023-daytona-500': {
    race: { overall: { driverIds: ['stenhouse-jr'], teamId: 'jtg-daugherty-racing' } },
  },
  // Round 2 — Pala Casino 400 (Auto Club)
  'nascar-2023-auto-club': {
    race: { overall: { driverIds: ['busch'], teamId: 'richard-childress-racing' } },
  },
  // Round 3 — Pennzoil 400 (Las Vegas)
  'nascar-2023-las-vegas': {
    race: { overall: { driverIds: ['byron'], teamId: 'hendrick-motorsports' } },
  },
  // Round 4 — United Rentals Work United 500 (Phoenix)
  'nascar-2023-phoenix': {
    race: { overall: { driverIds: ['byron'], teamId: 'hendrick-motorsports' } },
  },
  // Round 5 — Ambetter Health 400 (Atlanta)
  'nascar-2023-atlanta': {
    race: { overall: { driverIds: ['logano'], teamId: 'team-penske' } },
  },
  // Round 6 — EchoPark Automotive Grand Prix (COTA)
  'nascar-2023-cota': {
    race: { overall: { driverIds: ['reddick'], teamId: '23xi-racing' } },
  },
  // Round 7 — Toyota Owners 400 (Richmond)
  'nascar-2023-richmond': {
    race: { overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' } },
  },
  // Round 8 — Food City Dirt Race (Bristol Dirt)
  'nascar-2023-bristol-dirt': {
    race: { overall: { driverIds: ['bell'], teamId: 'joe-gibbs-racing' } },
  },
  // Round 9 — NOCO 400 (Martinsville)
  'nascar-2023-martinsville': {
    race: { overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' } },
  },
  // Round 10 — GEICO 500 (Talladega)
  'nascar-2023-talladega': {
    race: { overall: { driverIds: ['busch'], teamId: 'richard-childress-racing' } },
  },
  // Round 11 — Wurth 400 (Dover)
  'nascar-2023-dover': {
    race: { overall: { driverIds: ['truex-jr'], teamId: 'joe-gibbs-racing' } },
  },
  // Round 12 — AdventHealth 400 (Kansas)
  'nascar-2023-kansas': {
    race: { overall: { driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' } },
  },
  // Round 13 — Goodyear 400 (Darlington)
  'nascar-2023-darlington': {
    race: { overall: { driverIds: ['byron'], teamId: 'hendrick-motorsports' } },
  },
  // Round 14 — Coca-Cola 600 (Charlotte)
  'nascar-2023-coca-cola-600': {
    race: { overall: { driverIds: ['blaney'], teamId: 'team-penske' } },
  },
  // Round 15 — Enjoy Illinois 300 (WWT Raceway)
  'nascar-2023-wwtr': {
    race: { overall: { driverIds: ['busch'], teamId: 'richard-childress-racing' } },
  },
  // Round 16 — Toyota/Save Mart 350 (Sonoma)
  'nascar-2023-sonoma': {
    race: { overall: { driverIds: ['truex-jr'], teamId: 'joe-gibbs-racing' } },
  },
  // Round 17 — Ally 400 (Nashville)
  'nascar-2023-nashville': {
    race: { overall: { driverIds: ['chastain'], teamId: 'trackhouse-racing' } },
  },
  // Round 18 — Grant Park 220 (Chicago Street Course)
  'nascar-2023-chicago': {
    race: { overall: { driverIds: ['van-gisbergen'], teamId: 'trackhouse-racing' } },
  },
  // Round 19 — Quaker State 400 (Atlanta 2)
  'nascar-2023-atlanta-2': {
    race: { overall: { driverIds: ['byron'], teamId: 'hendrick-motorsports' } },
  },
  // Round 20 — Crayon 301 (New Hampshire)
  'nascar-2023-new-hampshire': {
    race: { overall: { driverIds: ['truex-jr'], teamId: 'joe-gibbs-racing' } },
  },
  // Round 21 — HighPoint.com 400 (Pocono)
  'nascar-2023-pocono': {
    race: { overall: { driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' } },
  },
  // Round 22 — Cook Out 400 (Richmond 2)
  'nascar-2023-richmond-2': {
    race: { overall: { driverIds: ['buescher'], teamId: 'rfk-racing' } },
  },
  // Round 23 — FireKeepers Casino 400 (Michigan)
  'nascar-2023-michigan': {
    race: { overall: { driverIds: ['buescher'], teamId: 'rfk-racing' } },
  },
  // Round 24 — Verizon 200 at the Brickyard (Indianapolis)
  'nascar-2023-indianapolis': {
    race: { overall: { driverIds: ['mcdowell'], teamId: 'front-row-motorsports' } },
  },
  // Round 25 — Go Bowling at The Glen (Watkins Glen)
  'nascar-2023-watkins-glen': {
    race: { overall: { driverIds: ['byron'], teamId: 'hendrick-motorsports' } },
  },
  // Round 26 — Coke Zero Sugar 400 (Daytona 2)
  'nascar-2023-daytona-2': {
    race: { overall: { driverIds: ['buescher'], teamId: 'rfk-racing' } },
  },
  // Round 27 — Cook Out Southern 500 (Darlington 2) — Playoffs Round of 16
  'nascar-2023-darlington-2': {
    race: { overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' } },
  },
  // Round 28 — Hollywood Casino 400 (Kansas 2)
  'nascar-2023-kansas-2': {
    race: { overall: { driverIds: ['reddick'], teamId: '23xi-racing' } },
  },
  // Round 29 — Bass Pro Shops Night Race (Bristol Night)
  'nascar-2023-bristol-night': {
    race: { overall: { driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' } },
  },
  // Round 30 — Autotrader EchoPark Automotive 400 (Texas)
  'nascar-2023-texas': {
    race: { overall: { driverIds: ['byron'], teamId: 'hendrick-motorsports' } },
  },
  // Round 31 — YellaWood 500 (Talladega 2)
  'nascar-2023-talladega-2': {
    race: { overall: { driverIds: ['blaney'], teamId: 'team-penske' } },
  },
  // Round 32 — Bank of America Roval 400 (Charlotte Roval)
  'nascar-2023-charlotte-roval': {
    race: { overall: { driverIds: ['allmendinger'], teamId: 'kaulig-racing' } },
  },
  // Round 33 — South Point 400 (Las Vegas 2) — Playoffs Round of 8
  'nascar-2023-las-vegas-2': {
    race: { overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' } },
  },
  // Round 34 — 4EVER 400 (Homestead)
  'nascar-2023-homestead': {
    race: { overall: { driverIds: ['bell'], teamId: 'joe-gibbs-racing' } },
  },
  // Round 35 — Xfinity 500 (Martinsville 2)
  'nascar-2023-martinsville-2': {
    race: { overall: { driverIds: ['blaney'], teamId: 'team-penske' } },
  },
  // Round 36 — NASCAR Cup Series Championship Race (Phoenix)
  'nascar-2023-phoenix-championship': {
    race: { overall: { driverIds: ['chastain'], teamId: 'trackhouse-racing' } },
  },
}
