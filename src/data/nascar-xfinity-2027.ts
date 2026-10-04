import { RaceEvent } from '@/lib/types'

// NASCAR O'Reilly Auto Parts Series (Xfinity) 2027 — 33 races. Source: NASCAR schedule announcement 26 Aug 2026.
// Race names/sponsors not yet announced — generic "<track> Race" names are used. Session times are NOT yet published —
// all sessions are shown as TBA with placeholder times based on the 2026 weekend.
export const nascarXfinity2027: RaceEvent[] = [
  {
    id: 'nascar-xfinity-2027-daytona',
    round: 1,
    name: 'Daytona Race',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-02-19T21:30:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-02-20T15:00:00Z', durationMinutes: 90, tba: true },
      { type: 'race', label: 'Daytona Race', startUtc: '2027-02-20T22:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-atlanta',
    round: 2,
    name: 'Atlanta Race',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-02-26T22:00:00Z', durationMinutes: 90, tba: true },
      { type: 'race', label: 'Atlanta Race', startUtc: '2027-02-27T22:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-cota',
    round: 3,
    name: 'Circuit of the Americas Race',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-03-05T22:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-03-05T23:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Circuit of the Americas Race', startUtc: '2027-03-06T20:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-phoenix',
    round: 4,
    name: 'Phoenix Race',
    circuitId: 'phoenix-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-03-13T00:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-03-13T01:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Phoenix Race', startUtc: '2027-03-14T00:30:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-las-vegas',
    round: 5,
    name: 'Las Vegas Race',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-03-20T16:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-03-20T17:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Las Vegas Race', startUtc: '2027-03-20T21:30:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-darlington',
    round: 6,
    name: 'Darlington Race',
    circuitId: 'darlington-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-04-03T16:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-04-03T17:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Darlington Race', startUtc: '2027-04-03T21:30:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-bristol',
    round: 7,
    name: 'Bristol Race',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-04-10T18:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-04-10T19:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Bristol Race', startUtc: '2027-04-10T23:30:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-martinsville',
    round: 8,
    name: 'Martinsville Race',
    circuitId: 'martinsville-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-04-16T20:30:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-04-16T21:35:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Martinsville Race', startUtc: '2027-04-17T19:30:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-talladega',
    round: 9,
    name: 'Talladega Race',
    circuitId: 'talladega-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-04-23T21:30:00Z', durationMinutes: 90, tba: true },
      { type: 'race', label: 'Talladega Race', startUtc: '2027-04-24T20:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-texas',
    round: 10,
    name: 'Texas Race',
    circuitId: 'texas-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-04-30T21:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-04-30T22:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-05-01T19:30:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-dover',
    round: 11,
    name: 'Dover Race',
    circuitId: 'dover-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-05-15T13:30:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-05-15T14:35:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Dover Race', startUtc: '2027-05-15T20:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-north-wilkesboro',
    round: 12,
    name: 'North Wilkesboro Race',
    circuitId: 'north-wilkesboro-speedway',
    // New to the calendar — placeholder times follow the BetRivers 200 weekend
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-05-22T13:30:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-05-22T14:35:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'North Wilkesboro Race', startUtc: '2027-05-22T20:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-charlotte',
    round: 13,
    name: 'Charlotte Race',
    circuitId: 'charlotte-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-05-29T16:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Charlotte Race', startUtc: '2027-05-29T21:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-nashville',
    round: 14,
    name: 'Nashville Race',
    circuitId: 'nashville-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Practice & Qualifying', startUtc: '2027-06-05T19:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Nashville Race', startUtc: '2027-06-05T23:30:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-pocono',
    round: 15,
    name: 'Pocono Race',
    circuitId: 'pocono-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-06-12T14:30:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-06-12T15:35:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Pocono Race', startUtc: '2027-06-12T20:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-chicagoland',
    round: 16,
    name: 'Chicagoland Race',
    circuitId: 'chicagoland-speedway',
    sessions: [
      { type: 'qualifying', label: 'Practice & Qualifying', startUtc: '2027-06-26T17:30:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-06-26T21:30:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-iowa',
    round: 17,
    name: 'Iowa Race',
    circuitId: 'iowa-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-07-03T15:30:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-07-03T16:35:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Iowa Race', startUtc: '2027-07-03T21:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-sonoma',
    round: 18,
    name: 'Sonoma Race',
    circuitId: 'sonoma-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-07-09T20:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-07-09T21:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Sonoma Race', startUtc: '2027-07-10T21:30:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-indianapolis',
    round: 19,
    name: 'Indianapolis Race',
    circuitId: 'indianapolis-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-07-23T16:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-07-24T16:00:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Indianapolis Race', startUtc: '2027-07-24T20:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-san-diego',
    round: 20,
    name: 'NASCAR San Diego',
    circuitId: 'san-diego-street-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-07-30T19:30:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-07-31T17:00:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'NASCAR San Diego', startUtc: '2027-07-31T21:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-bristol-night',
    round: 21,
    name: 'Bristol Night Race',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-08-13T18:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-08-13T19:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-08-13T23:30:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-wwtr',
    round: 22,
    name: 'World Wide Technology Raceway Race',
    circuitId: 'world-wide-technology-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-08-21T17:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-08-21T18:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-08-21T23:30:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-daytona-2',
    round: 23,
    name: 'Daytona (Summer) Race',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-08-27T19:00:00Z', durationMinutes: 90, tba: true },
      { type: 'race', label: 'Daytona (Summer) Race', startUtc: '2027-08-27T23:30:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-darlington-2',
    round: 24,
    name: 'Darlington (Fall) Race',
    circuitId: 'darlington-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-09-04T17:30:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-09-04T18:35:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-09-04T23:30:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-richmond',
    round: 25,
    name: 'Richmond Race',
    circuitId: 'richmond-raceway',
    // New to the calendar — placeholder times follow the Kansas Lottery 300 weekend
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-09-10T00:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Richmond Race', startUtc: '2027-09-10T23:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-watkins-glen',
    round: 26,
    name: 'Watkins Glen Race',
    circuitId: 'watkins-glen-international',
    sessions: [
      { type: 'qualifying', label: 'Practice & Qualifying', startUtc: '2027-09-18T14:45:00Z', durationMinutes: 105, tba: true },
      { type: 'race', label: 'Watkins Glen Race', startUtc: '2027-09-18T20:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-kansas',
    round: 27,
    name: 'Kansas Race',
    circuitId: 'kansas-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-10-02T00:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Kansas Race', startUtc: '2027-10-02T23:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-las-vegas-2',
    round: 28,
    name: 'Las Vegas (Fall) Race',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-10-09T18:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-10-09T19:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-10-09T23:30:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-charlotte-roval',
    round: 29,
    name: 'Charlotte Roval Race',
    circuitId: 'charlotte-motor-speedway-roval',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-10-16T14:30:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-10-16T15:35:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-10-16T20:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-phoenix-2',
    round: 30,
    name: 'Phoenix (Fall) Race',
    circuitId: 'phoenix-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-10-23T18:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-10-23T19:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-10-23T23:30:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-talladega-2',
    round: 31,
    name: 'Talladega (Fall) Race',
    circuitId: 'talladega-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-10-30T15:00:00Z', durationMinutes: 90, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-10-30T19:30:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-martinsville-2',
    round: 32,
    name: 'Martinsville (Fall) Race',
    circuitId: 'martinsville-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-11-05T19:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-11-05T20:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-11-06T20:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-xfinity-2027-homestead',
    round: 33,
    name: 'NASCAR Championship Race',
    circuitId: 'homestead-miami-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-11-12T21:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-11-13T18:00:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-11-13T22:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
]
