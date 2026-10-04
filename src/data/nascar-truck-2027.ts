import { RaceEvent } from '@/lib/types'

// NASCAR Craftsman Truck Series 2027 — 25 races. Source: NASCAR schedule announcement 26 Aug 2026.
// Bowman Gray Stadium (new) and Canadian Tire Motorsport Park (returns) join. Race names/sponsors not yet announced —
// generic "<track> Race" names are used. Session times are NOT yet published — all sessions are shown as TBA with
// placeholder times based on the 2026 weekend.
export const nascarTruck2027: RaceEvent[] = [
  {
    id: 'nascar-truck-2027-daytona',
    round: 1,
    name: 'Daytona Race',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-02-18T22:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-02-19T20:00:00Z', durationMinutes: 90, tba: true },
      { type: 'race', label: 'Daytona Race', startUtc: '2027-02-20T00:30:00Z', durationMinutes: 150, tba: true },
    ],
  },
  {
    id: 'nascar-truck-2027-atlanta',
    round: 2,
    name: 'Atlanta Race',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-02-26T20:00:00Z', durationMinutes: 90, tba: true },
      { type: 'race', label: 'Atlanta Race', startUtc: '2027-02-27T18:30:00Z', durationMinutes: 150, tba: true },
    ],
  },
  {
    id: 'nascar-truck-2027-st-petersburg',
    round: 3,
    name: 'St. Petersburg Race',
    circuitId: 'streets-of-st-petersburg',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-03-05T21:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-03-05T22:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'St. Petersburg Race', startUtc: '2027-03-06T17:00:00Z', durationMinutes: 150, tba: true },
    ],
  },
  {
    id: 'nascar-truck-2027-darlington',
    round: 4,
    name: 'Darlington Race',
    circuitId: 'darlington-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-04-02T19:30:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-04-02T20:35:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Darlington Race', startUtc: '2027-04-02T23:30:00Z', durationMinutes: 150, tba: true },
    ],
  },
  {
    id: 'nascar-truck-2027-bristol',
    round: 5,
    name: 'Bristol Race',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-04-09T19:30:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-04-09T20:35:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Bristol Race', startUtc: '2027-04-09T23:30:00Z', durationMinutes: 150, tba: true },
    ],
  },
  {
    id: 'nascar-truck-2027-texas',
    round: 6,
    name: 'Texas Race',
    circuitId: 'texas-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-04-30T18:30:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-04-30T19:35:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Texas Race', startUtc: '2027-05-01T00:00:00Z', durationMinutes: 150, tba: true },
    ],
  },
  {
    id: 'nascar-truck-2027-kansas',
    round: 7,
    name: 'Kansas Race',
    circuitId: 'kansas-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-05-07T22:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Kansas Race', startUtc: '2027-05-08T17:00:00Z', durationMinutes: 150, tba: true },
    ],
  },
  {
    id: 'nascar-truck-2027-north-wilkesboro',
    round: 8,
    name: 'North Wilkesboro Race',
    circuitId: 'north-wilkesboro-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-05-20T18:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-05-20T19:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'North Wilkesboro Race', startUtc: '2027-05-21T16:30:00Z', durationMinutes: 150, tba: true },
    ],
  },
  {
    id: 'nascar-truck-2027-charlotte',
    round: 9,
    name: 'Charlotte Race',
    circuitId: 'charlotte-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-05-26T20:35:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Charlotte Race', startUtc: '2027-05-28T14:00:00Z', durationMinutes: 150, tba: true },
    ],
  },
  {
    id: 'nascar-truck-2027-nashville',
    round: 10,
    name: 'Nashville Race',
    circuitId: 'nashville-superspeedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-06-04T20:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-06-04T21:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Nashville Race', startUtc: '2027-06-05T00:00:00Z', durationMinutes: 150, tba: true },
    ],
  },
  {
    id: 'nascar-truck-2027-pocono',
    round: 11,
    name: 'Pocono Race',
    circuitId: 'pocono-raceway',
    // New to the calendar — placeholder times follow the DQS Solutions & Staffing 250 powered by Precision Vehicle Logistics weekend
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-06-11T13:30:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-06-11T14:35:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Pocono Race', startUtc: '2027-06-11T17:30:00Z', durationMinutes: 150, tba: true },
    ],
  },
  {
    id: 'nascar-truck-2027-michigan',
    round: 12,
    name: 'Michigan Race',
    circuitId: 'michigan-international-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-06-19T13:30:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-06-19T14:35:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Michigan Race', startUtc: '2027-06-19T17:30:00Z', durationMinutes: 150, tba: true },
    ],
  },
  {
    id: 'nascar-truck-2027-lime-rock',
    round: 13,
    name: 'Lime Rock Park Race',
    circuitId: 'lime-rock-park',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-07-10T13:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-07-10T14:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Lime Rock Park Race', startUtc: '2027-07-10T17:00:00Z', durationMinutes: 150, tba: true },
    ],
  },
  {
    id: 'nascar-truck-2027-atlanta-2',
    round: 14,
    name: 'Atlanta (Summer) Race',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-07-16T20:00:00Z', durationMinutes: 90, tba: true },
      { type: 'race', label: 'Atlanta (Summer) Race', startUtc: '2027-07-17T18:30:00Z', durationMinutes: 150, tba: true },
    ],
  },
  {
    id: 'nascar-truck-2027-irp',
    round: 15,
    name: 'Indianapolis Raceway Park Race',
    circuitId: 'lucas-oil-indianapolis-raceway-park',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-07-23T19:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-07-23T20:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Indianapolis Raceway Park Race', startUtc: '2027-07-24T00:00:00Z', durationMinutes: 150, tba: true },
    ],
  },
  {
    id: 'nascar-truck-2027-bristol-night',
    round: 16,
    name: 'Bristol Night Race',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-08-12T19:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-08-12T20:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Bristol Night Race', startUtc: '2027-08-13T00:00:00Z', durationMinutes: 150, tba: true },
    ],
  },
  {
    id: 'nascar-truck-2027-bowman-gray',
    round: 17,
    name: 'Bowman Gray Stadium Race',
    circuitId: 'bowman-gray-stadium',
    // New to the calendar — placeholder times follow the FaithFest 250 presented by Mercer Transportation weekend
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-08-19T18:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-08-19T19:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Bowman Gray Stadium Race', startUtc: '2027-08-20T16:30:00Z', durationMinutes: 150, tba: true },
    ],
  },
  {
    id: 'nascar-truck-2027-ctmp',
    round: 18,
    name: 'Canadian Tire Motorsport Park Race',
    circuitId: 'canadian-tire-motorsport-park',
    // New to the calendar — placeholder times follow the DQS Solutions & Staffing 250 powered by Precision Vehicle Logistics weekend
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-09-05T13:30:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-09-05T14:35:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Canadian Tire Motorsport Park Race', startUtc: '2027-09-05T17:30:00Z', durationMinutes: 150, tba: true },
    ],
  },
  {
    id: 'nascar-truck-2027-new-hampshire',
    round: 19,
    name: 'New Hampshire Race',
    circuitId: 'new-hampshire-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-09-24T20:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-09-24T21:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'New Hampshire Race', startUtc: '2027-09-25T17:30:00Z', durationMinutes: 150, tba: true },
    ],
  },
  {
    id: 'nascar-truck-2027-kansas-2',
    round: 20,
    name: 'Kansas (Fall) Race',
    circuitId: 'kansas-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-09-30T22:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Kansas (Fall) Race', startUtc: '2027-10-01T17:00:00Z', durationMinutes: 150, tba: true },
    ],
  },
  {
    id: 'nascar-truck-2027-charlotte-2',
    round: 21,
    name: 'Charlotte (Fall) Race',
    circuitId: 'charlotte-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-10-15T17:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-10-15T18:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Charlotte (Fall) Race', startUtc: '2027-10-15T21:00:00Z', durationMinutes: 150, tba: true },
    ],
  },
  {
    id: 'nascar-truck-2027-phoenix',
    round: 22,
    name: 'Phoenix Race',
    circuitId: 'phoenix-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-10-22T19:30:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-10-22T20:35:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Phoenix Race', startUtc: '2027-10-22T23:30:00Z', durationMinutes: 150, tba: true },
    ],
  },
  {
    id: 'nascar-truck-2027-talladega',
    round: 23,
    name: 'Talladega Race',
    circuitId: 'talladega-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-10-29T16:30:00Z', durationMinutes: 90, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-10-29T20:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-truck-2027-martinsville',
    round: 24,
    name: 'Martinsville Race',
    circuitId: 'martinsville-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-11-05T16:30:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-11-05T17:35:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Martinsville Race', startUtc: '2027-11-05T22:00:00Z', durationMinutes: 150, tba: true },
    ],
  },
  {
    id: 'nascar-truck-2027-homestead',
    round: 25,
    name: 'NASCAR Championship Race',
    circuitId: 'homestead-miami-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-11-11T23:30:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-11-12T19:30:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'NASCAR Championship Race', startUtc: '2027-11-13T00:30:00Z', durationMinutes: 150, tba: true },
    ],
  },
]
