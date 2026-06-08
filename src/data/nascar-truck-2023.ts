import { RaceEvent } from '@/lib/types'

// NASCAR Craftsman Truck Series 2023 — 23 points races
// First season under the new "Craftsman" title sponsorship (Camping World ended after 2022).
// Sources: en.wikipedia.org/wiki/2023_NASCAR_Craftsman_Truck_Series, individual race wiki pages,
// jayski.com/truck-series/2023-nascar-craftsman-truck-series-schedule, nascar.com archives,
// racing-reference.info, tobychristie.com 2023 results pages.
// Verified 2026-06-08.
// Times converted from ET to UTC (ET = UTC-5 before Mar 12 2023 DST start; UTC-4 from Mar 12 through Nov 5 2023).
// Notes:
// - R1 Daytona: race shortened to 79 of 100 laps due to rain.
// - R7 Martinsville: race shortened to 124 of 200 laps due to constant rain.
// - R10 North Wilkesboro: inaugural Truck race at North Wilkesboro since 1996 (Tyson 250).
// - R18 Milwaukee: first Truck race at Milwaukee Mile since 2009 (Clean Harbors 175).
// - R22 Homestead: Zane Smith finished 2nd on track but was disqualified post-race for a windshield violation.
// - R23 Phoenix: race extended to 179 laps due to numerous NASCAR overtime restarts; Ben Rhodes
//   clinched his second career championship by finishing 5th.
export const nascarTruck2023: RaceEvent[] = [
  {
    id: 'nascar-truck-2023-daytona',
    round: 1,
    name: 'NextEra Energy 250',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-02-17T20:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'NextEra Energy 250', startUtc: '2023-02-18T00:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2023-las-vegas',
    round: 2,
    name: "Victoria's Voice Foundation 200",
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      // ET = UTC-5 (pre-DST). Qualifying at 1:00 PM PT = 21:00 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-03-03T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: "Victoria's Voice Foundation 200", startUtc: '2023-03-04T01:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2023-atlanta',
    round: 3,
    name: 'Fr8 208',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      // DST in effect from Mar 12 — ET = UTC-4
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-03-18T18:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Fr8 208', startUtc: '2023-03-18T22:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2023-cota',
    round: 4,
    name: 'XPEL 225',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-03-25T19:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'XPEL 225', startUtc: '2023-03-25T22:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2023-texas',
    round: 5,
    name: 'SpeedyCash.com 250',
    circuitId: 'texas-motor-speedway',
    sessions: [
      // Saturday — qualifying at 2:00 PM CT = 19:00 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-01T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'SpeedyCash.com 250', startUtc: '2023-04-01T22:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2023-bristol-dirt',
    round: 6,
    name: 'Weather Guard Truck Race on Dirt',
    circuitId: 'bristol-motor-speedway-dirt',
    sessions: [
      // Saturday — heat races at 5:30 PM ET = 21:30 UTC
      { type: 'qualifying', label: 'Heat Races', startUtc: '2023-04-08T21:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Weather Guard Truck Race on Dirt', startUtc: '2023-04-09T00:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2023-martinsville',
    round: 7,
    name: "Long John Silver's 200",
    circuitId: 'martinsville-speedway',
    sessions: [
      // Friday night ahead of Cup weekend — qualifying 5:35 PM ET, race 8:00 PM ET. Race shortened to 124 laps by rain
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-14T21:35:00Z', durationMinutes: 60 },
      { type: 'race', label: "Long John Silver's 200", startUtc: '2023-04-15T00:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2023-kansas',
    round: 8,
    name: 'Heart of America 200',
    circuitId: 'kansas-speedway',
    sessions: [
      // Saturday — qualifying at 12:35 PM CT = 17:35 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-05-06T17:35:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Heart of America 200', startUtc: '2023-05-06T21:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2023-darlington',
    round: 9,
    name: 'Buckle Up South Carolina 200',
    circuitId: 'darlington-raceway',
    sessions: [
      // Friday — qualifying 3:35 PM ET, race 7:30 PM ET
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-05-12T19:35:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Buckle Up South Carolina 200', startUtc: '2023-05-12T23:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2023-north-wilkesboro',
    round: 10,
    name: 'Tyson 250',
    circuitId: 'north-wilkesboro-speedway',
    sessions: [
      // Saturday — first Truck race at North Wilkesboro since 1996. Qualifying 4:35 PM ET, race 8:00 PM ET
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-05-20T20:35:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Tyson 250', startUtc: '2023-05-21T00:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2023-charlotte',
    round: 11,
    name: 'North Carolina Education Lottery 200',
    circuitId: 'charlotte-motor-speedway',
    sessions: [
      // Friday night Coca-Cola 600 weekend — qualifying 5:35 PM ET, race 8:30 PM ET. First Triple Truck Challenge race
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-05-26T21:35:00Z', durationMinutes: 60 },
      { type: 'race', label: 'North Carolina Education Lottery 200', startUtc: '2023-05-27T00:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2023-gateway',
    round: 12,
    name: 'Toyota 200 presented by CK Power',
    circuitId: 'world-wide-technology-raceway',
    sessions: [
      // Saturday — qualifying 1:00 PM CT = 18:00 UTC, race 4:00 PM CT = 21:00 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-03T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Toyota 200', startUtc: '2023-06-03T21:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2023-nashville',
    round: 13,
    name: 'Rackley Roofing 200',
    circuitId: 'nashville-superspeedway',
    sessions: [
      // Friday night — qualifying 3:35 PM CT = 20:35 UTC, race 8:00 PM CT = 01:00 UTC next day
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-23T20:35:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Rackley Roofing 200', startUtc: '2023-06-24T01:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2023-mid-ohio',
    round: 14,
    name: "O'Reilly Auto Parts 150 at Mid-Ohio",
    circuitId: 'mid-ohio-sports-car-course',
    sessions: [
      // Saturday — qualifying 10:35 AM ET, race 1:30 PM ET
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-08T14:35:00Z', durationMinutes: 60 },
      { type: 'race', label: "O'Reilly Auto Parts 150 at Mid-Ohio", startUtc: '2023-07-08T17:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2023-pocono',
    round: 15,
    name: 'CRC Brakleen 150',
    circuitId: 'pocono-raceway',
    sessions: [
      // Saturday — qualifying 10:35 AM ET, race 1:00 PM ET
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-22T14:35:00Z', durationMinutes: 60 },
      { type: 'race', label: 'CRC Brakleen 150', startUtc: '2023-07-22T17:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2023-richmond',
    round: 16,
    name: 'Worldwide Express 250 for Carrier Appreciation',
    circuitId: 'richmond-raceway',
    sessions: [
      // Saturday — qualifying 12:00 PM ET, race 2:30 PM ET. Regular-season finale
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-29T16:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Worldwide Express 250', startUtc: '2023-07-29T18:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2023-irp',
    round: 17,
    name: 'TSport 200',
    circuitId: 'lucas-oil-indianapolis-raceway-park',
    sessions: [
      // Friday night — first race of Round of 10 playoffs. Qualifying 5:05 PM ET, race 9:00 PM ET
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-11T21:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'TSport 200', startUtc: '2023-08-12T01:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2023-milwaukee',
    round: 18,
    name: 'Clean Harbors 175',
    circuitId: 'milwaukee-mile',
    sessions: [
      // Sunday — first Truck race at Milwaukee Mile since 2009. Qualifying 11:30 AM CT, race 3:00 PM CT
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-27T16:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Clean Harbors 175', startUtc: '2023-08-27T20:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2023-kansas-2',
    round: 19,
    name: 'Kansas Lottery 200',
    circuitId: 'kansas-speedway',
    sessions: [
      // Friday — qualifying 1:35 PM CT = 18:35 UTC, race 7:30 PM CT = 00:30 UTC next day
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-08T18:35:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Kansas Lottery 200', startUtc: '2023-09-09T00:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2023-bristol-night',
    round: 20,
    name: 'UNOH 200 presented by Ohio Logistics',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      // Thursday night — qualifying 4:35 PM ET, race 8:00 PM ET. Round of 10 elimination
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-14T20:35:00Z', durationMinutes: 60 },
      { type: 'race', label: 'UNOH 200', startUtc: '2023-09-15T00:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2023-talladega',
    round: 21,
    name: "Love's RV Stop 250",
    circuitId: 'talladega-superspeedway',
    sessions: [
      // Saturday — qualifying 1:35 PM ET, race 4:30 PM ET
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-30T17:35:00Z', durationMinutes: 60 },
      { type: 'race', label: "Love's RV Stop 250", startUtc: '2023-09-30T20:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2023-homestead',
    round: 22,
    name: 'Baptist Health Cancer Care 200',
    circuitId: 'homestead-miami-speedway',
    sessions: [
      // Saturday — qualifying 12:30 PM ET, race 3:00 PM ET. Final Round of 8 race; sets Championship 4
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-10-21T16:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Baptist Health Cancer Care 200', startUtc: '2023-10-21T19:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2023-phoenix-championship',
    round: 23,
    name: 'Craftsman 150',
    circuitId: 'phoenix-raceway',
    sessions: [
      // Friday night — qualifying 5:05 PM MST = 00:05 UTC next day, race 8:00 PM ET. DST ended Nov 5 — Phoenix on AZ time year-round (UTC-7)
      // Race scheduled 8:00 PM ET Nov 3 (Fri) = 00:00 UTC Nov 4. Extended to 179 laps via overtime
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-11-03T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Championship Race', startUtc: '2023-11-04T00:00:00Z', durationMinutes: 150 },
    ],
  },
]
