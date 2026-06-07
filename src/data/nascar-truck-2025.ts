import { RaceEvent } from '@/lib/types'

// NASCAR Craftsman Truck Series 2025 — 25 points races
// Sources: en.wikipedia.org/wiki/2025_NASCAR_Craftsman_Truck_Series, nascar.com/nascar-craftsman-truck-series/2025/schedule,
// jayski.com/truck-series/2025-truck-results, individual race wiki pages
// Times converted from ET to UTC (ET = UTC-5 before Mar 9 2025 DST start; UTC-4 from Mar 9 through Nov 2 2025).
// Qualifying placed ~3 hours before race start where it occurred; for Bristol (R6), Texas (R8), and
// North Wilkesboro (R10), practice and qualifying were cancelled and the pole was awarded provisionally.
export const nascarTruck2025: RaceEvent[] = [
  {
    id: 'nascar-truck-2025-daytona',
    round: 1,
    name: 'Fresh From Florida 250',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-02-13T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Fresh From Florida 250', startUtc: '2025-02-15T00:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2025-atlanta',
    round: 2,
    name: 'Fr8 208',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-02-21T22:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Fr8 208', startUtc: '2025-02-22T18:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2025-las-vegas',
    round: 3,
    name: 'Ecosave 200',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      // DST in effect from Mar 9 — ET = UTC-4
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-03-14T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Ecosave 200', startUtc: '2025-03-15T01:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2025-homestead',
    round: 4,
    name: 'Baptist Health 200',
    circuitId: 'homestead-miami-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-03-21T21:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Baptist Health 200', startUtc: '2025-03-22T00:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2025-martinsville',
    round: 5,
    name: 'Boys & Girls Club of the Blue Ridge 200',
    circuitId: 'martinsville-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-03-28T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Boys & Girls Club of the Blue Ridge 200', startUtc: '2025-03-28T23:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2025-bristol',
    round: 6,
    name: 'Weather Guard Truck Race',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      // Practice and qualifying cancelled; pole awarded provisionally to Daniel Hemric
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-04-11T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Weather Guard Truck Race', startUtc: '2025-04-11T23:50:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2025-rockingham',
    round: 7,
    name: "Black's Tire 200",
    circuitId: 'rockingham-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-04-18T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: "Black's Tire 200", startUtc: '2025-04-18T21:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2025-texas',
    round: 8,
    name: 'SpeedyCash.com 250',
    circuitId: 'texas-motor-speedway',
    sessions: [
      // Practice and qualifying cancelled; pole awarded provisionally to Tyler Ankrum
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-02T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'SpeedyCash.com 250', startUtc: '2025-05-03T00:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2025-kansas',
    round: 9,
    name: 'Heart of Health Care 200',
    circuitId: 'kansas-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-10T20:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Heart of Health Care 200', startUtc: '2025-05-10T23:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2025-north-wilkesboro',
    round: 10,
    name: 'Window World 250',
    circuitId: 'north-wilkesboro-speedway',
    sessions: [
      // Practice and qualifying cancelled; pole awarded provisionally to Corey Heim
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-17T15:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Window World 250', startUtc: '2025-05-17T17:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2025-charlotte',
    round: 11,
    name: 'North Carolina Education Lottery 200',
    circuitId: 'charlotte-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-23T21:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'North Carolina Education Lottery 200', startUtc: '2025-05-24T00:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2025-nashville',
    round: 12,
    name: 'Rackley Roofing 200',
    circuitId: 'nashville-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-30T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Rackley Roofing 200', startUtc: '2025-05-31T00:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2025-michigan',
    round: 13,
    name: 'DQS Solutions & Staffing 250',
    circuitId: 'michigan-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-06-07T13:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'DQS Solutions & Staffing 250', startUtc: '2025-06-07T16:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2025-pocono',
    round: 14,
    name: 'MillerTech Battery 200',
    circuitId: 'pocono-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-06-20T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'MillerTech Battery 200', startUtc: '2025-06-20T21:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2025-lime-rock',
    round: 15,
    name: 'LiUNA! 150',
    circuitId: 'lime-rock-park',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-06-28T14:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'LiUNA! 150', startUtc: '2025-06-28T17:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2025-irp',
    round: 16,
    name: 'TSport 200',
    circuitId: 'lucas-oil-indianapolis-raceway-park',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-25T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'TSport 200', startUtc: '2025-07-26T00:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2025-watkins-glen',
    round: 17,
    name: 'Mission 176 at The Glen',
    circuitId: 'watkins-glen-international',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-08T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Mission 176 at The Glen', startUtc: '2025-08-08T21:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2025-richmond',
    round: 18,
    name: 'eero 250',
    circuitId: 'richmond-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-15T20:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'eero 250', startUtc: '2025-08-15T23:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2025-darlington',
    round: 19,
    name: 'Sober or Slammer 200',
    circuitId: 'darlington-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-30T13:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Sober or Slammer 200', startUtc: '2025-08-30T16:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2025-bristol-night',
    round: 20,
    name: 'UNOH 250',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-09-11T20:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'UNOH 250', startUtc: '2025-09-11T23:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2025-new-hampshire',
    round: 21,
    name: 'Team EJP 175',
    circuitId: 'new-hampshire-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-09-20T13:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Team EJP 175', startUtc: '2025-09-20T16:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2025-charlotte-roval',
    round: 22,
    name: 'Ecosave 250',
    circuitId: 'charlotte-motor-speedway-roval',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-10-03T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Ecosave 250', startUtc: '2025-10-03T19:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2025-talladega',
    round: 23,
    name: "Love's RV Stop 225",
    circuitId: 'talladega-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-10-17T17:30:00Z', durationMinutes: 60 },
      { type: 'race', label: "Love's RV Stop 225", startUtc: '2025-10-17T20:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2025-martinsville-2',
    round: 24,
    name: 'Slim Jim 200',
    circuitId: 'martinsville-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-10-24T19:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Slim Jim 200', startUtc: '2025-10-24T22:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2025-phoenix-championship',
    round: 25,
    name: 'NASCAR Craftsman Truck Series Championship Race',
    circuitId: 'phoenix-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-10-31T20:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Championship Race', startUtc: '2025-10-31T23:30:00Z', durationMinutes: 150 },
    ],
  },
]
