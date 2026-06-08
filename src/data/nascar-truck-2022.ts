import { RaceEvent } from '@/lib/types'

// NASCAR Camping World Truck Series 2022 — 23 points races
// Sources: en.wikipedia.org/wiki/2022_NASCAR_Camping_World_Truck_Series, jayski.com 2022 schedule,
// individual race wiki pages, racing-reference.info, driveraverages.com, nascar.com archives.
// Verified 2026-06-07.
// Times converted from ET to UTC (ET = UTC-5 before Mar 13 2022 DST start; UTC-4 from Mar 13 through Nov 6 2022).
// Notes:
// - R12 Sonoma: first Truck race at Sonoma since 1998.
// - R15 Mid-Ohio: inaugural Truck race at Mid-Ohio.
// - R17 IRP: first Truck race at Lucas Oil Indianapolis Raceway Park since 2011.
// - R16 Pocono: practice and qualifying cancelled — Zane Smith awarded provisional pole.
// - R22 Homestead: qualifying cancelled due to weather — Ryan Preece awarded pole via competition-based formula.
// - Final season of Camping World as title sponsor; Craftsman took over for 2023.
export const nascarTruck2022: RaceEvent[] = [
  {
    id: 'nascar-truck-2022-daytona',
    round: 1,
    name: 'NextEra Energy 250',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-02-18T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'NextEra Energy 250', startUtc: '2022-02-19T00:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2022-las-vegas',
    round: 2,
    name: "Victoria's Voice Foundation 200",
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      // ET = UTC-5 (pre-DST). Qualifying at 2:00 PM PT = 22:00 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-03-04T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: "Victoria's Voice Foundation 200", startUtc: '2022-03-05T01:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2022-atlanta',
    round: 3,
    name: 'Fr8 208',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      // DST in effect from Mar 13 — ET = UTC-4
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-03-19T18:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Fr8 208', startUtc: '2022-03-19T22:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2022-cota',
    round: 4,
    name: 'XPEL 225',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-03-26T19:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'XPEL 225', startUtc: '2022-03-26T22:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2022-martinsville',
    round: 5,
    name: 'Blue-Emu Maximum Pain Relief 200',
    circuitId: 'martinsville-speedway',
    sessions: [
      // Thursday night race ahead of Cup weekend
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-07T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Blue-Emu Maximum Pain Relief 200', startUtc: '2022-04-08T00:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2022-bristol-dirt',
    round: 6,
    name: "Pinty's Truck Race on Dirt",
    circuitId: 'bristol-motor-speedway-dirt',
    sessions: [
      // Saturday — qualifying at 4:30 PM ET = 20:30 UTC
      { type: 'qualifying', label: 'Heat Races', startUtc: '2022-04-16T20:30:00Z', durationMinutes: 60 },
      { type: 'race', label: "Pinty's Truck Race on Dirt", startUtc: '2022-04-17T00:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2022-darlington',
    round: 7,
    name: 'Dead On Tools 200',
    circuitId: 'darlington-raceway',
    sessions: [
      // Friday — qualifying at 3:30 PM ET
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-06T19:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Dead On Tools 200', startUtc: '2022-05-07T00:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2022-kansas',
    round: 8,
    name: 'Heart of America 200',
    circuitId: 'kansas-speedway',
    sessions: [
      // Saturday — qualifying at 11:30 AM CT = 16:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-14T16:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Heart of America 200', startUtc: '2022-05-14T20:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2022-texas',
    round: 9,
    name: 'SpeedyCash.com 220',
    circuitId: 'texas-motor-speedway',
    sessions: [
      // Friday — qualifying at 3:30 PM CT = 20:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-20T20:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'SpeedyCash.com 220', startUtc: '2022-05-21T00:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2022-charlotte',
    round: 10,
    name: 'North Carolina Education Lottery 200',
    circuitId: 'charlotte-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-27T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'North Carolina Education Lottery 200', startUtc: '2022-05-27T22:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2022-gateway',
    round: 11,
    name: 'Toyota 200 presented by CK Power',
    circuitId: 'world-wide-technology-raceway',
    sessions: [
      // First Truck race at Gateway since 2010
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-04T19:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Toyota 200', startUtc: '2022-06-04T23:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2022-sonoma',
    round: 12,
    name: 'DoorDash 250',
    circuitId: 'sonoma-raceway',
    sessions: [
      // First Truck race at Sonoma since 1998. Qualifying at 10:05 AM PT = 17:05 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-11T17:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'DoorDash 250', startUtc: '2022-06-11T20:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2022-knoxville',
    round: 13,
    name: 'Clean Harbors 150',
    circuitId: 'knoxville-raceway',
    sessions: [
      // Saturday night dirt feature
      { type: 'qualifying', label: 'Heat Races', startUtc: '2022-06-18T23:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Clean Harbors 150', startUtc: '2022-06-19T01:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2022-nashville',
    round: 14,
    name: 'Rackley Roofing 200',
    circuitId: 'nashville-superspeedway',
    sessions: [
      // Friday night — qualifying at 3:30 PM CT = 20:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-24T20:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Rackley Roofing 200', startUtc: '2022-06-25T00:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2022-mid-ohio',
    round: 15,
    name: "O'Reilly Auto Parts 150 at Mid-Ohio",
    circuitId: 'mid-ohio-sports-car-course',
    sessions: [
      // Inaugural Truck race at Mid-Ohio
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-09T15:00:00Z', durationMinutes: 60 },
      { type: 'race', label: "O'Reilly Auto Parts 150 at Mid-Ohio", startUtc: '2022-07-09T17:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2022-pocono',
    round: 16,
    name: 'CRC Brakleen 150',
    circuitId: 'pocono-raceway',
    sessions: [
      // Practice and qualifying cancelled by weather — Zane Smith awarded provisional pole
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-23T16:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'CRC Brakleen 150', startUtc: '2022-07-23T18:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2022-irp',
    round: 17,
    name: 'TSport 200',
    circuitId: 'lucas-oil-indianapolis-raceway-park',
    sessions: [
      // Friday night — first Truck race at IRP since 2011. Qualifying at 5:05 PM ET = 21:05 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-29T21:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'TSport 200', startUtc: '2022-07-30T00:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2022-richmond',
    round: 18,
    name: 'Worldwide Express 250 for Carrier Appreciation',
    circuitId: 'richmond-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-08-13T18:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Worldwide Express 250', startUtc: '2022-08-13T22:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2022-kansas-2',
    round: 19,
    name: 'Kansas Lottery 200',
    circuitId: 'kansas-speedway',
    sessions: [
      // Friday — qualifying at 2:30 PM CT
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-09T19:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Kansas Lottery 200', startUtc: '2022-09-09T23:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2022-bristol-night',
    round: 20,
    name: 'UNOH 200',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      // Thursday night
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-15T21:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'UNOH 200', startUtc: '2022-09-16T00:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2022-talladega',
    round: 21,
    name: 'Chevrolet Silverado 250',
    circuitId: 'talladega-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-01T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Chevrolet Silverado 250', startUtc: '2022-10-01T20:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2022-homestead',
    round: 22,
    name: 'Baptist Health 200',
    circuitId: 'homestead-miami-speedway',
    sessions: [
      // Qualifying cancelled by weather — Ryan Preece awarded pole via competition-based formula
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-22T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Baptist Health 200', startUtc: '2022-10-22T20:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2022-phoenix-championship',
    round: 23,
    name: 'Lucas Oil 150',
    circuitId: 'phoenix-raceway',
    sessions: [
      // Friday — qualifying ended in EDT (ET = UTC-4) before DST end Nov 6
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-11-04T20:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Lucas Oil 150', startUtc: '2022-11-04T23:30:00Z', durationMinutes: 150 },
    ],
  },
]
