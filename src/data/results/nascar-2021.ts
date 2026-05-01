import type { EventResults } from './types'

// NASCAR Cup Series 2021 results — race winners only
// Source: Wikipedia "2021 NASCAR Cup Series" race results table
// Champion: Kyle Larson (Hendrick Motorsports) — 10 wins
export const nascarResults2021: Record<string, EventResults> = {
  // Round 1 — Daytona 500
  'nascar-2021-daytona-500': {
    race: { overall: { driverIds: ['mcdowell'], teamId: 'front-row-motorsports' } },
  },
  // Round 2 — O'Reilly Auto Parts 253 (Daytona Road Course)
  'nascar-2021-daytona-rc': {
    race: { overall: { driverIds: ['bell'], teamId: 'joe-gibbs-racing' } },
  },
  // Round 3 — Dixie Vodka 400 (Homestead-Miami)
  'nascar-2021-homestead': {
    race: { overall: { driverIds: ['byron'], teamId: 'hendrick-motorsports' } },
  },
  // Round 4 — Pennzoil 400 (Las Vegas)
  'nascar-2021-las-vegas': {
    race: { overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' } },
  },
  // Round 5 — Instacart 500 (Phoenix)
  'nascar-2021-phoenix': {
    race: { overall: { driverIds: ['truex-jr'], teamId: 'joe-gibbs-racing' } },
  },
  // Round 6 — Folds of Honor QuikTrip 500 (Atlanta)
  'nascar-2021-atlanta': {
    race: { overall: { driverIds: ['blaney'], teamId: 'team-penske' } },
  },
  // Round 7 — Food City Dirt Race (Bristol Dirt)
  'nascar-2021-bristol-dirt': {
    race: { overall: { driverIds: ['logano'], teamId: 'team-penske' } },
  },
  // Round 8 — Blue-Emu Maximum Pain Relief 500 (Martinsville)
  'nascar-2021-martinsville': {
    race: { overall: { driverIds: ['truex-jr'], teamId: 'joe-gibbs-racing' } },
  },
  // Round 9 — Toyota Owners 400 (Richmond)
  'nascar-2021-richmond': {
    race: { overall: { driverIds: ['bowman'], teamId: 'hendrick-motorsports' } },
  },
  // Round 10 — GEICO 500 (Talladega)
  'nascar-2021-talladega': {
    race: { overall: { driverIds: ['keselowski'], teamId: 'team-penske' } },
  },
  // Round 11 — Buschy McBusch Race 400 (Kansas)
  'nascar-2021-kansas': {
    race: { overall: { driverIds: ['busch'], teamId: 'joe-gibbs-racing' } },
  },
  // Round 12 — Goodyear 400 (Darlington)
  'nascar-2021-darlington': {
    race: { overall: { driverIds: ['truex-jr'], teamId: 'joe-gibbs-racing' } },
  },
  // Round 13 — Drydene 400 (Dover)
  'nascar-2021-dover': {
    race: { overall: { driverIds: ['bowman'], teamId: 'hendrick-motorsports' } },
  },
  // Round 14 — EchoPark Texas Grand Prix (COTA)
  'nascar-2021-cota': {
    race: { overall: { driverIds: ['elliott'], teamId: 'hendrick-motorsports' } },
  },
  // Round 15 — Coca-Cola 600 (Charlotte)
  'nascar-2021-coca-cola-600': {
    race: { overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' } },
  },
  // Round 16 — Toyota/Save Mart 350 (Sonoma)
  'nascar-2021-sonoma': {
    race: { overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' } },
  },
  // Round 17 — Ally 400 (Nashville)
  'nascar-2021-nashville': {
    race: { overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' } },
  },
  // Round 18 — Pocono Organics CBD 325 (Pocono 1)
  'nascar-2021-pocono-1': {
    race: { overall: { driverIds: ['bowman'], teamId: 'hendrick-motorsports' } },
  },
  // Round 19 — Explore the Pocono Mountains 350 (Pocono 2)
  'nascar-2021-pocono-2': {
    race: { overall: { driverIds: ['busch'], teamId: 'joe-gibbs-racing' } },
  },
  // Round 20 — Jockey Made in America 250 (Road America)
  'nascar-2021-road-america': {
    race: { overall: { driverIds: ['elliott'], teamId: 'hendrick-motorsports' } },
  },
  // Round 21 — Quaker State 400 (Atlanta 2)
  'nascar-2021-atlanta-2': {
    race: { overall: { driverIds: ['k-busch'], teamId: 'chip-ganassi-racing' } },
  },
  // Round 22 — Foxwoods Resort Casino 301 (New Hampshire)
  'nascar-2021-new-hampshire': {
    race: { overall: { driverIds: ['almirola'], teamId: 'stewart-haas-racing' } },
  },
  // Round 23 — Go Bowling at The Glen (Watkins Glen)
  'nascar-2021-watkins-glen': {
    race: { overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' } },
  },
  // Round 24 — Verizon 200 at the Brickyard (Indianapolis Road Course)
  'nascar-2021-indianapolis': {
    race: { overall: { driverIds: ['allmendinger'], teamId: 'kaulig-racing' } },
  },
  // Round 25 — FireKeepers Casino 400 (Michigan)
  'nascar-2021-michigan': {
    race: { overall: { driverIds: ['blaney'], teamId: 'team-penske' } },
  },
  // Round 26 — Coke Zero Sugar 400 (Daytona 2)
  'nascar-2021-daytona-2': {
    race: { overall: { driverIds: ['blaney'], teamId: 'team-penske' } },
  },
  // Round 27 — Cook Out Southern 500 (Darlington 2) — Playoffs Round of 16
  'nascar-2021-darlington-2': {
    race: { overall: { driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' } },
  },
  // Round 28 — Federated Auto Parts 400 (Richmond 2)
  'nascar-2021-richmond-2': {
    race: { overall: { driverIds: ['truex-jr'], teamId: 'joe-gibbs-racing' } },
  },
  // Round 29 — Bass Pro Shops Night Race (Bristol Night)
  'nascar-2021-bristol-night': {
    race: { overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' } },
  },
  // Round 30 — South Point 400 (Las Vegas 2) — Playoffs Round of 12
  'nascar-2021-las-vegas-2': {
    race: { overall: { driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' } },
  },
  // Round 31 — YellaWood 500 (Talladega 2)
  'nascar-2021-talladega-2': {
    race: { overall: { driverIds: ['wallace'], teamId: '23xi-racing' } },
  },
  // Round 32 — Bank of America Roval 400 (Charlotte Roval)
  'nascar-2021-charlotte-roval': {
    race: { overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' } },
  },
  // Round 33 — Autotrader EchoPark Automotive 500 (Texas) — Playoffs Round of 8
  'nascar-2021-texas': {
    race: { overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' } },
  },
  // Round 34 — Hollywood Casino 400 (Kansas 2)
  'nascar-2021-kansas-2': {
    race: { overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' } },
  },
  // Round 35 — Xfinity 500 (Martinsville 2)
  'nascar-2021-martinsville-2': {
    race: { overall: { driverIds: ['bowman'], teamId: 'hendrick-motorsports' } },
  },
  // Round 36 — NASCAR Cup Series Championship Race (Phoenix)
  'nascar-2021-phoenix-championship': {
    race: { overall: { driverIds: ['larson'], teamId: 'hendrick-motorsports' } },
  },
}
