import { RaceEvent } from '@/lib/types'

// NASCAR Craftsman Truck Series 2026 — 25 points races
// Source: cf.nascar.com official schedule feed (session times in UTC) — re-verified Oct 2026
export const nascarTruck2026: RaceEvent[] = [
  {
    id: 'nascar-truck-2026-daytona',
    round: 1,
    name: 'Fresh From Florida 250',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-02-12T22:00:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-02-13T20:00:00Z', durationMinutes: 90 },
      { type: 'race', label: 'Fresh From Florida 250', startUtc: '2026-02-14T00:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-atlanta',
    round: 2,
    name: 'Fr8 Racing 208',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-02-20T20:00:00Z', durationMinutes: 90 },
      { type: 'race', label: 'Fr8 Racing 208', startUtc: '2026-02-21T18:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-st-petersburg',
    round: 3,
    name: 'OnlyBulls Green Flag 150 at St. Petersburg',
    circuitId: 'streets-of-st-petersburg',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-02-27T21:00:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-02-27T22:05:00Z', durationMinutes: 55 },
      { type: 'race', label: 'OnlyBulls Green Flag 150 at St. Petersburg', startUtc: '2026-02-28T17:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-darlington',
    round: 4,
    name: 'Buckle Up South Carolina 200',
    circuitId: 'darlington-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-03-20T19:30:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-20T20:35:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Buckle Up South Carolina 200', startUtc: '2026-03-20T23:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-rockingham',
    round: 5,
    name: 'Black\'s Tire 200',
    circuitId: 'rockingham-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-04-03T15:00:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-03T16:05:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Race', startUtc: '2026-04-03T20:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-truck-2026-bristol',
    round: 6,
    name: 'Tennessee Army National Guard 250',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-04-10T19:30:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-10T20:35:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Tennessee Army National Guard 250', startUtc: '2026-04-10T23:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-texas',
    round: 7,
    name: 'SpeedyCash.com 250',
    circuitId: 'texas-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-05-01T18:30:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-01T19:35:00Z', durationMinutes: 55 },
      { type: 'race', label: 'SpeedyCash.com 250', startUtc: '2026-05-02T00:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-watkins-glen',
    round: 8,
    name: 'Bully Hill Vineyards 176 at The Glen',
    circuitId: 'watkins-glen-international',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-05-08T15:00:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-08T16:05:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Bully Hill Vineyards 176 at The Glen', startUtc: '2026-05-08T20:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-dover',
    round: 9,
    name: 'ECOSAVE 200',
    circuitId: 'dover-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-05-15T16:30:00Z', durationMinutes: 55 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-15T17:40:00Z', durationMinutes: 50 },
      { type: 'race', label: 'ECOSAVE 200', startUtc: '2026-05-15T21:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-charlotte',
    round: 10,
    name: 'North Carolina Education Lottery 200',
    circuitId: 'charlotte-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-22T20:35:00Z', durationMinutes: 60 },
      { type: 'race', label: 'North Carolina Education Lottery 200', startUtc: '2026-05-24T14:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-nashville',
    round: 11,
    name: 'Allegiance 200',
    circuitId: 'nashville-superspeedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-05-29T20:00:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-29T21:05:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Allegiance 200', startUtc: '2026-05-30T00:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-michigan',
    round: 12,
    name: 'DQS Solutions & Staffing 250 powered by Precision Vehicle Logistics',
    circuitId: 'michigan-international-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-06-06T13:30:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-06T14:35:00Z', durationMinutes: 55 },
      { type: 'race', label: 'DQS Solutions & Staffing 250 powered by Precision Vehicle Logistics', startUtc: '2026-06-06T17:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-coronado',
    round: 13,
    name: 'Navy 250',
    circuitId: 'naval-base-coronado-street-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-06-19T16:00:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-06-19T17:00:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-19T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Navy 250', startUtc: '2026-06-19T23:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-lime-rock',
    round: 14,
    name: 'Liuna 150 at Lime Rock Park',
    circuitId: 'lime-rock-park',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-07-11T13:00:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-11T14:05:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Liuna 150 at Lime Rock Park', startUtc: '2026-07-11T17:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-north-wilkesboro',
    round: 15,
    name: 'FaithFest 250 presented by Mercer Transportation',
    circuitId: 'north-wilkesboro-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-07-17T18:00:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-17T19:05:00Z', durationMinutes: 55 },
      { type: 'race', label: 'FaithFest 250 presented by Mercer Transportation', startUtc: '2026-07-18T16:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-irp',
    round: 16,
    name: 'TSport 200 presented by Warn Industries',
    circuitId: 'lucas-oil-indianapolis-raceway-park',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-07-24T19:00:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-24T20:05:00Z', durationMinutes: 55 },
      { type: 'race', label: 'TSport 200 presented by Warn Industries', startUtc: '2026-07-25T00:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-richmond',
    round: 17,
    name: 'Black\'s Tire 250 presented by BTS Rewards',
    circuitId: 'richmond-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-08-14T17:00:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-14T18:05:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Race', startUtc: '2026-08-15T16:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-truck-2026-new-hampshire',
    round: 18,
    name: 'Team EJP 175',
    circuitId: 'new-hampshire-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-08-21T20:00:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-21T21:05:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Team EJP 175', startUtc: '2026-08-22T17:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-bristol-night',
    round: 19,
    name: 'UNOH 250 presented by Ohio Logistics',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-09-17T19:00:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-17T20:05:00Z', durationMinutes: 55 },
      { type: 'race', label: 'UNOH 250 presented by Ohio Logistics', startUtc: '2026-09-18T00:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-kansas',
    round: 20,
    name: 'Race to Stop Suicide 200',
    circuitId: 'kansas-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-25T22:05:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Race to Stop Suicide 200', startUtc: '2026-09-26T17:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-charlotte-2',
    round: 21,
    name: 'Ecosave 200',
    circuitId: 'charlotte-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-10-09T17:00:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-09T18:05:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Ecosave 200', startUtc: '2026-10-09T21:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-phoenix',
    round: 22,
    name: 'NASCAR CRAFTSMAN Truck Series Race at Phoenix',
    circuitId: 'phoenix-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-10-16T19:30:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-16T20:35:00Z', durationMinutes: 55 },
      { type: 'race', label: 'NASCAR CRAFTSMAN Truck Series Race at Phoenix', startUtc: '2026-10-16T23:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-talladega',
    round: 23,
    name: 'Love\'s RV Stop 225',
    circuitId: 'talladega-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-23T16:30:00Z', durationMinutes: 90 },
      { type: 'race', label: 'Race', startUtc: '2026-10-23T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-truck-2026-martinsville',
    round: 24,
    name: 'NASCAR CRAFTSMAN Truck Series Race at Martinsville',
    circuitId: 'martinsville-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-10-30T16:30:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-30T17:35:00Z', durationMinutes: 55 },
      { type: 'race', label: 'NASCAR CRAFTSMAN Truck Series Race at Martinsville', startUtc: '2026-10-30T22:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-truck-2026-homestead',
    round: 25,
    name: 'NASCAR CRAFTSMAN Truck Series Championship Race',
    circuitId: 'homestead-miami-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-11-05T23:30:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-11-06T19:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'NASCAR CRAFTSMAN Truck Series Championship Race', startUtc: '2026-11-07T00:30:00Z', durationMinutes: 150 },
    ],
  },
]
