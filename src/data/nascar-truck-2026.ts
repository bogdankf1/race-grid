import { RaceEvent } from '@/lib/types'

// NASCAR Craftsman Truck Series 2026 — 25 points races
// Sources: en.wikipedia.org/wiki/2026_NASCAR_Craftsman_Truck_Series, nascar.com/schedule/craftsman-truck-series, jayski.com
// Times converted from ET to UTC (ET = UTC-5 before Mar 8 2026, UTC-4 during DST through Nov 1 2026)
// Truck races are typically run on Friday or Saturday evenings; qualifying is the same day or Friday morning.
export const nascarTruck2026: RaceEvent[] = [
  {
    id: 'nascar-truck-2026-daytona',
    round: 1,
    name: 'Fresh From Florida 250',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-02-13T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Fresh From Florida 250', startUtc: '2026-02-14T00:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-atlanta',
    round: 2,
    name: 'Fr8 208',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-02-20T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Fr8 208', startUtc: '2026-02-22T00:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-st-petersburg',
    round: 3,
    name: 'OnlyBulls Green Flag 150',
    circuitId: 'streets-of-st-petersburg',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-02-27T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'OnlyBulls Green Flag 150', startUtc: '2026-02-28T18:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-darlington',
    round: 4,
    name: 'Buckle Up South Carolina 200',
    circuitId: 'darlington-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-20T19:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Buckle Up South Carolina 200', startUtc: '2026-03-20T23:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-rockingham',
    round: 5,
    name: "Black's Tire 200",
    circuitId: 'rockingham-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-03T19:30:00Z', durationMinutes: 60 },
      { type: 'race', label: "Black's Tire 200", startUtc: '2026-04-03T23:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-bristol',
    round: 6,
    name: 'Tennessee Army National Guard 250',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-10T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Tennessee Army National Guard 250', startUtc: '2026-04-11T00:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-texas',
    round: 7,
    name: 'SpeedyCash.com 250',
    circuitId: 'texas-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-01T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'SpeedyCash.com 250', startUtc: '2026-05-01T23:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-watkins-glen',
    round: 8,
    name: 'Bully Hill Vineyards 176 at The Glen',
    circuitId: 'watkins-glen-international',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-08T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Bully Hill Vineyards 176 at The Glen', startUtc: '2026-05-08T22:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-dover',
    round: 9,
    name: 'Ecosave 200',
    circuitId: 'dover-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-15T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Ecosave 200', startUtc: '2026-05-15T22:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-charlotte',
    round: 10,
    name: 'North Carolina Education Lottery 200',
    circuitId: 'charlotte-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-22T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'North Carolina Education Lottery 200', startUtc: '2026-05-22T23:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-nashville',
    round: 11,
    name: 'Allegiance 200',
    circuitId: 'nashville-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-29T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Allegiance 200', startUtc: '2026-05-29T23:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-michigan',
    round: 12,
    name: 'DQS Solutions & Staffing 250',
    circuitId: 'michigan-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-06T15:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'DQS Solutions & Staffing 250', startUtc: '2026-06-06T18:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-coronado',
    round: 13,
    name: 'Coronado Street Race',
    circuitId: 'naval-base-coronado-street-circuit',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-19T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Coronado Street Race', startUtc: '2026-06-19T23:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-lime-rock',
    round: 14,
    name: 'LiUNA! 150',
    circuitId: 'lime-rock-park',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-11T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'LiUNA! 150', startUtc: '2026-07-11T20:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-north-wilkesboro',
    round: 15,
    name: 'FaithFest 250',
    circuitId: 'north-wilkesboro-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-18T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'FaithFest 250', startUtc: '2026-07-18T23:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-irp',
    round: 16,
    name: 'TSport 200',
    circuitId: 'lucas-oil-indianapolis-raceway-park',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-24T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'TSport 200', startUtc: '2026-07-24T23:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-richmond',
    round: 17,
    name: 'eero 250',
    circuitId: 'richmond-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-14T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'eero 250', startUtc: '2026-08-14T23:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-new-hampshire',
    round: 18,
    name: 'Team EJP 175',
    circuitId: 'new-hampshire-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-22T16:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Team EJP 175', startUtc: '2026-08-22T20:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-bristol-night',
    round: 19,
    name: 'UNOH 250',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-17T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'UNOH 250', startUtc: '2026-09-18T00:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-kansas',
    round: 20,
    name: 'Heart of Health Care 200',
    circuitId: 'kansas-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-26T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Heart of Health Care 200', startUtc: '2026-09-26T23:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-charlotte-2',
    round: 21,
    name: 'Ecosave 200',
    circuitId: 'charlotte-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-09T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Ecosave 200', startUtc: '2026-10-09T23:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-phoenix',
    round: 22,
    name: 'Craftsman 150',
    circuitId: 'phoenix-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-16T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Craftsman 150', startUtc: '2026-10-17T01:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-talladega',
    round: 23,
    name: "Love's RV Stop 225",
    circuitId: 'talladega-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-23T17:30:00Z', durationMinutes: 60 },
      { type: 'race', label: "Love's RV Stop 225", startUtc: '2026-10-23T20:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-martinsville',
    round: 24,
    name: 'Slim Jim 200',
    circuitId: 'martinsville-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-30T19:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Slim Jim 200', startUtc: '2026-10-30T22:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-homestead',
    round: 25,
    name: 'Baptist Health 200',
    circuitId: 'homestead-miami-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-11-06T19:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Baptist Health 200', startUtc: '2026-11-06T22:30:00Z', durationMinutes: 150 },
    ],
  },
]
