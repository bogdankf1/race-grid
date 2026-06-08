import { RaceEvent } from '@/lib/types'

// NASCAR Craftsman Truck Series 2024 — 23 points races
// Sources: en.wikipedia.org/wiki/2024_NASCAR_Craftsman_Truck_Series, nascar.com/nascar-craftsman-truck-series/2024/schedule,
// jayski.com/truck-series/2024-nascar-craftsman-truck-series-schedule, individual race wiki pages,
// cupscene.com/2024-nascar-truck-series-schedule, frontstretch.com, draftkings.com.
// Verified 2026-06-07.
// Times converted from ET to UTC (ET = UTC-5 before Mar 10 2024 DST start; UTC-4 from Mar 10 through Nov 3 2024).
// Qualifying placed ~2-3 hours before race start where it occurred; for Pocono (R14) qualifying was rained out
// and grid set via competition-based formula; the Wright Brand 250 (R10) was suspended May 18 and completed May 19.
export const nascarTruck2024: RaceEvent[] = [
  {
    id: 'nascar-truck-2024-daytona',
    round: 1,
    name: 'Fresh From Florida 250',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-02-16T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Fresh From Florida 250', startUtc: '2024-02-17T00:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2024-atlanta',
    round: 2,
    name: 'Fr8 208',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-02-23T20:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Fr8 208', startUtc: '2024-02-24T19:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2024-las-vegas',
    round: 3,
    name: "Victoria's Voice Foundation 200",
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-01T22:30:00Z', durationMinutes: 60 },
      { type: 'race', label: "Victoria's Voice Foundation 200", startUtc: '2024-03-02T02:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2024-bristol',
    round: 4,
    name: 'Weather Guard Truck Race',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      // DST in effect from Mar 10 — ET = UTC-4
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-16T19:40:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Weather Guard Truck Race', startUtc: '2024-03-17T00:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2024-cota',
    round: 5,
    name: 'XPEL 225',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-22T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'XPEL 225', startUtc: '2024-03-23T17:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2024-martinsville',
    round: 6,
    name: "Long John Silver's 200",
    circuitId: 'martinsville-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-05T19:40:00Z', durationMinutes: 60 },
      { type: 'race', label: "Long John Silver's 200", startUtc: '2024-04-05T23:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2024-texas',
    round: 7,
    name: 'SpeedyCash.com 250',
    circuitId: 'texas-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-12T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'SpeedyCash.com 250', startUtc: '2024-04-13T00:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2024-kansas',
    round: 8,
    name: 'Heart of America 200',
    circuitId: 'kansas-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-04T16:35:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Heart of America 200', startUtc: '2024-05-05T00:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2024-darlington',
    round: 9,
    name: 'Buckle Up South Carolina 200',
    circuitId: 'darlington-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-10T19:35:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Buckle Up South Carolina 200', startUtc: '2024-05-10T23:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2024-north-wilkesboro',
    round: 10,
    name: 'Wright Brand 250',
    circuitId: 'north-wilkesboro-speedway',
    sessions: [
      // Race began Saturday May 18 then was halted by rain; resumed Sunday May 19 at 11:30 AM ET
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-18T15:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Wright Brand 250', startUtc: '2024-05-18T17:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2024-charlotte',
    round: 11,
    name: 'North Carolina Education Lottery 200',
    circuitId: 'charlotte-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-24T18:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'North Carolina Education Lottery 200', startUtc: '2024-05-25T00:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2024-gateway',
    round: 12,
    name: 'Toyota 200',
    circuitId: 'world-wide-technology-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-31T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Toyota 200', startUtc: '2024-06-01T17:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2024-nashville',
    round: 13,
    name: 'Rackley Roofing 200',
    circuitId: 'nashville-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-28T21:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Rackley Roofing 200', startUtc: '2024-06-29T00:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2024-pocono',
    round: 14,
    name: 'CRC Brakleen 175',
    circuitId: 'pocono-raceway',
    sessions: [
      // Qualifying rained out; grid set via competition-based formula (Christian Eckes awarded pole)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-12T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'CRC Brakleen 175', startUtc: '2024-07-12T21:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2024-irp',
    round: 15,
    name: 'TSport 200',
    circuitId: 'lucas-oil-indianapolis-raceway-park',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-19T20:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'TSport 200', startUtc: '2024-07-20T00:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2024-richmond',
    round: 16,
    name: 'Clean Harbors 250',
    circuitId: 'richmond-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-10T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Clean Harbors 250', startUtc: '2024-08-10T23:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2024-milwaukee',
    round: 17,
    name: 'LiUNA! 175',
    circuitId: 'milwaukee-mile',
    sessions: [
      // Qualifying held Saturday Aug 24 at 4:00 PM ET; race Sunday Aug 25 at 4:00 PM ET
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-24T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'LiUNA! 175', startUtc: '2024-08-25T20:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2024-bristol-night',
    round: 18,
    name: 'UNOH 200',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-19T19:35:00Z', durationMinutes: 60 },
      { type: 'race', label: 'UNOH 200', startUtc: '2024-09-20T00:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2024-kansas-2',
    round: 19,
    name: 'Kubota Tractor 200',
    circuitId: 'kansas-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-27T18:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Kubota Tractor 200', startUtc: '2024-09-28T00:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2024-talladega',
    round: 20,
    name: "Love's RV Stop 225",
    circuitId: 'talladega-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-10-04T17:30:00Z', durationMinutes: 60 },
      { type: 'race', label: "Love's RV Stop 225", startUtc: '2024-10-04T20:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2024-homestead',
    round: 21,
    name: 'Baptist Health 200',
    circuitId: 'homestead-miami-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-10-26T13:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Baptist Health 200', startUtc: '2024-10-26T16:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2024-martinsville-2',
    round: 22,
    name: 'Zip Buy Now, Pay Later 200',
    circuitId: 'martinsville-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-11-01T18:10:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Zip Buy Now, Pay Later 200', startUtc: '2024-11-01T22:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2024-phoenix-championship',
    round: 23,
    name: 'NASCAR Craftsman Truck Series Championship Race',
    circuitId: 'phoenix-raceway',
    sessions: [
      // DST ended Nov 3 — ET = UTC-5
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-11-08T22:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Championship Race', startUtc: '2024-11-09T01:00:00Z', durationMinutes: 150 },
    ],
  },
]
