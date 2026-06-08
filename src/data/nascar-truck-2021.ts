import { RaceEvent } from '@/lib/types'

// NASCAR Camping World Truck Series 2021 — 22 points races
// Sources: en.wikipedia.org/wiki/2021_NASCAR_Camping_World_Truck_Series, jayski.com/truck-series/2021-ncwts-schedule,
// individual race wiki pages, racing-reference.info, driveraverages.com, nascar.com archives.
// Verified 2026-06-07.
// Times converted from ET to UTC (ET = UTC-5 before Mar 14 2021 DST start; UTC-4 from Mar 14 through Nov 7 2021).
// Notes:
// - R5 Bristol Dirt: originally scheduled Sat Mar 27, postponed by rain to Mon Mar 29.
// - R15 Watkins Glen: race shortened to 61 laps from scheduled 72 due to lightning.
// - R17 Darlington In It To Win It 200: held Sunday Sep 5 (Labor Day weekend).
// - R20 Talladega: caution on final lap; finished under yellow with Tate Fogleman upset winner.
// - R22 Phoenix: Chandler Smith won and Ben Rhodes clinched the title finishing third.
export const nascarTruck2021: RaceEvent[] = [
  {
    id: 'nascar-truck-2021-daytona',
    round: 1,
    name: 'NextEra Energy 250',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-02-12T20:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'NextEra Energy 250', startUtc: '2021-02-13T00:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2021-daytona-rc',
    round: 2,
    name: 'BrakeBest Brake Pads 159',
    circuitId: 'daytona-international-speedway-road-course',
    sessions: [
      // Qualifying cancelled; grid set via competition-based formula
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-02-19T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'BrakeBest Brake Pads 159', startUtc: '2021-02-19T19:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2021-las-vegas',
    round: 3,
    name: 'Bucked Up 200',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      // Qualifying cancelled; grid set via competition-based formula. ET = UTC-5 (pre-DST)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-03-05T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Bucked Up 200', startUtc: '2021-03-06T00:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2021-atlanta',
    round: 4,
    name: 'Fr8Auctions 200',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      // DST in effect from Mar 14 — ET = UTC-4
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-03-20T18:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Fr8Auctions 200', startUtc: '2021-03-20T22:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2021-bristol-dirt',
    round: 5,
    name: "Pinty's Dirt Truck Race",
    circuitId: 'bristol-motor-speedway-dirt',
    sessions: [
      // Originally Sat Mar 27 — postponed by rain to Mon Mar 29
      { type: 'qualifying', label: 'Heat Races', startUtc: '2021-03-29T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: "Pinty's Dirt Truck Race", startUtc: '2021-03-30T00:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2021-richmond',
    round: 6,
    name: 'ToyotaCare 250',
    circuitId: 'richmond-raceway',
    sessions: [
      // Qualifying via competition-based formula
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-04-17T18:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'ToyotaCare 250', startUtc: '2021-04-17T22:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2021-kansas',
    round: 7,
    name: 'WISE Power 200',
    circuitId: 'kansas-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-01T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'WISE Power 200', startUtc: '2021-05-01T21:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2021-darlington',
    round: 8,
    name: 'LiftKits4Less.com 200',
    circuitId: 'darlington-raceway',
    sessions: [
      // Friday night race
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-07T20:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'LiftKits4Less.com 200', startUtc: '2021-05-08T00:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2021-cota',
    round: 9,
    name: 'Toyota Tundra 225',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      // Saturday race — qualifying under heavy rain at 10:06 AM CT (15:06 UTC)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-22T15:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Toyota Tundra 225', startUtc: '2021-05-22T18:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2021-charlotte',
    round: 10,
    name: 'North Carolina Education Lottery 200',
    circuitId: 'charlotte-motor-speedway',
    sessions: [
      // Friday night Coca-Cola 600 weekend
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-28T20:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'North Carolina Education Lottery 200', startUtc: '2021-05-29T00:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2021-texas',
    round: 11,
    name: 'SpeedyCash.com 220',
    circuitId: 'texas-motor-speedway',
    sessions: [
      // Saturday night race
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-12T20:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'SpeedyCash.com 220', startUtc: '2021-06-13T00:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2021-nashville',
    round: 12,
    name: 'Rackley Roofing 200',
    circuitId: 'nashville-superspeedway',
    sessions: [
      // Friday night race
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-18T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Rackley Roofing 200', startUtc: '2021-06-19T00:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2021-pocono',
    round: 13,
    name: 'CRC Brakleen 150',
    circuitId: 'pocono-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-26T15:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'CRC Brakleen 150', startUtc: '2021-06-26T17:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2021-knoxville',
    round: 14,
    name: 'Corn Belt 150',
    circuitId: 'knoxville-raceway',
    sessions: [
      // Inaugural Truck race at Knoxville — Friday night dirt feature
      { type: 'qualifying', label: 'Heat Races', startUtc: '2021-07-09T23:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Corn Belt 150', startUtc: '2021-07-10T01:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2021-watkins-glen',
    round: 15,
    name: 'United Rentals 176 at The Glen',
    circuitId: 'watkins-glen-international',
    sessions: [
      // Saturday — race shortened to 61 of 72 laps due to lightning
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-07T15:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'United Rentals 176 at The Glen', startUtc: '2021-08-07T17:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2021-gateway',
    round: 16,
    name: 'Toyota 200',
    circuitId: 'world-wide-technology-raceway',
    sessions: [
      // Friday night — first race of Round of 10 playoffs
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-20T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Toyota 200', startUtc: '2021-08-21T00:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2021-darlington-2',
    round: 17,
    name: 'In It To Win It 200',
    circuitId: 'darlington-raceway',
    sessions: [
      // Sunday afternoon — Labor Day weekend
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-05T15:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'In It To Win It 200', startUtc: '2021-09-05T17:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2021-bristol',
    round: 18,
    name: 'UNOH 200',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      // Thursday night race
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-16T22:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'UNOH 200', startUtc: '2021-09-17T01:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2021-las-vegas-2',
    round: 19,
    name: "Victoria's Voice Foundation 200",
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      // Friday night race
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-24T23:00:00Z', durationMinutes: 60 },
      { type: 'race', label: "Victoria's Voice Foundation 200", startUtc: '2021-09-25T01:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2021-talladega',
    round: 20,
    name: 'Chevrolet Silverado 250',
    circuitId: 'talladega-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-02T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Chevrolet Silverado 250', startUtc: '2021-10-02T20:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2021-martinsville',
    round: 21,
    name: 'United Rentals 200',
    circuitId: 'martinsville-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-30T18:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'United Rentals 200', startUtc: '2021-10-30T21:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2021-phoenix-championship',
    round: 22,
    name: 'Lucas Oil 150',
    circuitId: 'phoenix-raceway',
    sessions: [
      // DST ended Nov 7 — race on Nov 5 still in EDT (ET = UTC-4)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-11-05T20:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Lucas Oil 150', startUtc: '2021-11-05T23:30:00Z', durationMinutes: 150 },
    ],
  },
]
