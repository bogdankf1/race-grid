import type { EventResults } from './types'

// NASCAR Cup Series 2022 results — race winners only
// Source: Wikipedia "2022 NASCAR Cup Series" race results table
// Champion: Joey Logano (Team Penske)
export const nascarResults2022: Record<string, EventResults> = {
  // Round 1 — Daytona 500
  'nascar-2022-daytona-500': {
    race: { overall: { driverIds: ['cindric'], teamId: 'team-penske' } },
  },
  // Round 2 — WISE Power 400 (Auto Club)
  'nascar-2022-auto-club': {
    race: { overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' } },
  },
  // Round 3 — Pennzoil 400 (Las Vegas)
  'nascar-2022-las-vegas': {
    race: { overall: { driverIds: ['bowman'], teamId: 'hendrick-motorsports' } },
  },
  // Round 4 — Ruoff Mortgage 500 (Phoenix)
  'nascar-2022-phoenix': {
    race: { overall: { driverIds: ['briscoe'], teamId: 'stewart-haas-racing' } },
  },
  // Round 5 — Folds of Honor QuikTrip 500 (Atlanta)
  'nascar-2022-atlanta': {
    race: { overall: { driverIds: ['byron'], teamId: 'hendrick-motorsports' } },
  },
  // Round 6 — EchoPark Texas Grand Prix (COTA)
  'nascar-2022-cota': {
    race: { overall: { driverIds: ['chastain'], teamId: 'trackhouse-racing' } },
  },
  // Round 7 — Toyota Owners 400 (Richmond)
  'nascar-2022-richmond': {
    race: { overall: { driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' } },
  },
  // Round 8 — Blue-Emu Maximum Pain Relief 400 (Martinsville)
  'nascar-2022-martinsville': {
    race: { overall: { driverIds: ['byron'], teamId: 'hendrick-motorsports' } },
  },
  // Round 9 — Food City Dirt Race (Bristol Dirt)
  'nascar-2022-bristol-dirt': {
    race: { overall: { driverIds: ['busch'], teamId: 'joe-gibbs-racing' } },
  },
  // Round 10 — GEICO 500 (Talladega)
  'nascar-2022-talladega': {
    race: { overall: { driverIds: ['chastain'], teamId: 'trackhouse-racing' } },
  },
  // Round 11 — DuraMAX Drydene 400 (Dover)
  'nascar-2022-dover': {
    race: { overall: { driverIds: ['elliott'], teamId: 'hendrick-motorsports' } },
  },
  // Round 12 — Goodyear 400 (Darlington)
  'nascar-2022-darlington': {
    race: { overall: { driverIds: ['logano'], teamId: 'team-penske' } },
  },
  // Round 13 — AdventHealth 400 (Kansas)
  'nascar-2022-kansas': {
    race: { overall: { driverIds: ['k-busch'], teamId: '23xi-racing' } },
  },
  // Round 14 — Coca-Cola 600 (Charlotte)
  'nascar-2022-coca-cola-600': {
    race: { overall: { driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' } },
  },
  // Round 15 — Enjoy Illinois 300 (WWT Raceway)
  'nascar-2022-wwtr': {
    race: { overall: { driverIds: ['logano'], teamId: 'team-penske' } },
  },
  // Round 16 — Toyota/Save Mart 350 (Sonoma)
  'nascar-2022-sonoma': {
    race: { overall: { driverIds: ['suarez'], teamId: 'trackhouse-racing' } },
  },
  // Round 17 — Ally 400 (Nashville)
  'nascar-2022-nashville': {
    race: { overall: { driverIds: ['elliott'], teamId: 'hendrick-motorsports' } },
  },
  // Round 18 — Kwik Trip 250 (Road America)
  'nascar-2022-road-america': {
    race: { overall: { driverIds: ['reddick'], teamId: 'richard-childress-racing' } },
  },
  // Round 19 — Quaker State 400 (Atlanta 2)
  'nascar-2022-atlanta-2': {
    race: { overall: { driverIds: ['elliott'], teamId: 'hendrick-motorsports' } },
  },
  // Round 20 — Ambetter 301 (New Hampshire)
  'nascar-2022-new-hampshire': {
    race: { overall: { driverIds: ['bell'], teamId: 'joe-gibbs-racing' } },
  },
  // Round 21 — M&M's Fan Appreciation 400 (Pocono)
  'nascar-2022-pocono': {
    race: { overall: { driverIds: ['elliott'], teamId: 'hendrick-motorsports' } },
  },
  // Round 22 — Verizon 200 at the Brickyard (Indianapolis)
  'nascar-2022-indianapolis': {
    race: { overall: { driverIds: ['reddick'], teamId: 'richard-childress-racing' } },
  },
  // Round 23 — FireKeepers Casino 400 (Michigan)
  'nascar-2022-michigan': {
    race: { overall: { driverIds: ['harvick'], teamId: 'stewart-haas-racing' } },
  },
  // Round 24 — Federated Auto Parts 400 (Richmond 2)
  'nascar-2022-richmond-2': {
    race: { overall: { driverIds: ['harvick'], teamId: 'stewart-haas-racing' } },
  },
  // Round 25 — Go Bowling at The Glen (Watkins Glen)
  'nascar-2022-watkins-glen': {
    race: { overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' } },
  },
  // Round 26 — Coke Zero Sugar 400 (Daytona 2)
  'nascar-2022-daytona-2': {
    race: { overall: { driverIds: ['dillon'], teamId: 'richard-childress-racing' } },
  },
  // Round 27 — Cook Out Southern 500 (Darlington 2) — Playoffs Round of 16
  'nascar-2022-darlington-2': {
    race: { overall: { driverIds: ['jones'], teamId: 'legacy-motor-club' } },
  },
  // Round 28 — Hollywood Casino 400 (Kansas 2)
  'nascar-2022-kansas-2': {
    race: { overall: { driverIds: ['wallace'], teamId: '23xi-racing' } },
  },
  // Round 29 — Bass Pro Shops Night Race (Bristol Night)
  'nascar-2022-bristol-night': {
    race: { overall: { driverIds: ['buescher'], teamId: 'rfk-racing' } },
  },
  // Round 30 — Autotrader EchoPark Automotive 500 (Texas)
  'nascar-2022-texas': {
    race: { overall: { driverIds: ['reddick'], teamId: 'richard-childress-racing' } },
  },
  // Round 31 — YellaWood 500 (Talladega 2)
  'nascar-2022-talladega-2': {
    race: { overall: { driverIds: ['elliott'], teamId: 'hendrick-motorsports' } },
  },
  // Round 32 — Bank of America Roval 400 (Charlotte Roval)
  'nascar-2022-charlotte-roval': {
    race: { overall: { driverIds: ['bell'], teamId: 'joe-gibbs-racing' } },
  },
  // Round 33 — South Point 400 (Las Vegas 2) — Playoffs Round of 8
  'nascar-2022-las-vegas-2': {
    race: { overall: { driverIds: ['logano'], teamId: 'team-penske' } },
  },
  // Round 34 — Dixie Vodka 400 (Homestead)
  'nascar-2022-homestead': {
    race: { overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' } },
  },
  // Round 35 — Xfinity 500 (Martinsville 2)
  'nascar-2022-martinsville-2': {
    race: { overall: { driverIds: ['bell'], teamId: 'joe-gibbs-racing' } },
  },
  // Round 36 — NASCAR Cup Series Championship Race (Phoenix)
  'nascar-2022-phoenix-championship': {
    race: { overall: { driverIds: ['logano'], teamId: 'team-penske' } },
  },
}
