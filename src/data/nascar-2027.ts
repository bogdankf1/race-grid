import { RaceEvent } from '@/lib/types'

// NASCAR Cup Series 2027 — 36 points races (the non-points Clash 13 Feb and All-Star Race 23 May are not listed)
// Source: NASCAR schedule announcement 26 Aug 2026 (dates/tracks); race names follow the announced list where given.
// Session times are NOT yet published — all sessions are shown as TBA with placeholder times based on the 2026 weekend.
export const nascar2027: RaceEvent[] = [
  {
    id: 'nascar-2027-daytona-500',
    round: 1,
    name: 'Daytona 500',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-02-17T15:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-02-18T01:15:00Z', durationMinutes: 105, tba: true },
      { type: 'qualifying', label: 'Duels', startUtc: '2027-02-19T00:00:00Z', durationMinutes: 120, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-02-19T22:35:00Z', durationMinutes: 50, tba: true },
      { type: 'practice', label: 'Practice 3', startUtc: '2027-02-20T20:00:00Z', durationMinutes: 50, tba: true },
      { type: 'race', label: 'Daytona 500', startUtc: '2027-02-21T18:30:00Z', durationMinutes: 210, tba: true },
    ],
  },
  {
    id: 'nascar-2027-atlanta',
    round: 2,
    name: 'Autotrader 400',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-02-27T16:00:00Z', durationMinutes: 90, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-02-28T20:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-2027-cota',
    round: 3,
    name: 'DuraMAX Grand Prix',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-03-06T15:00:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-03-06T16:10:00Z', durationMinutes: 50, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-03-07T20:30:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-2027-phoenix',
    round: 4,
    name: 'Straight Talk Wireless 500',
    circuitId: 'phoenix-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-03-13T17:00:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-03-13T18:10:00Z', durationMinutes: 50, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-03-14T19:30:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-2027-las-vegas',
    round: 5,
    name: 'Pennzoil 400',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-03-20T18:30:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-03-20T19:40:00Z', durationMinutes: 50, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-03-21T20:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-2027-darlington',
    round: 6,
    name: 'Goodyear 400',
    circuitId: 'darlington-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-04-03T18:30:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-04-03T19:40:00Z', durationMinutes: 50, tba: true },
      { type: 'race', label: 'Goodyear 400', startUtc: '2027-04-04T19:00:00Z', durationMinutes: 210, tba: true },
    ],
  },
  {
    id: 'nascar-2027-bristol',
    round: 7,
    name: 'Food City 500',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-04-10T20:30:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-04-10T21:40:00Z', durationMinutes: 50, tba: true },
      { type: 'race', label: 'Food City 500', startUtc: '2027-04-11T19:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-2027-martinsville',
    round: 8,
    name: 'Cook Out 400',
    circuitId: 'martinsville-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-04-17T16:30:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-04-17T17:40:00Z', durationMinutes: 50, tba: true },
      { type: 'race', label: 'Cook Out 400', startUtc: '2027-04-18T19:30:00Z', durationMinutes: 210, tba: true },
    ],
  },
  {
    id: 'nascar-2027-talladega',
    round: 9,
    name: 'Jack Link\'s 500',
    circuitId: 'talladega-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-04-24T14:30:00Z', durationMinutes: 90, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-04-25T19:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-2027-texas',
    round: 10,
    name: 'Würth 400',
    circuitId: 'texas-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-05-01T16:30:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-05-01T17:40:00Z', durationMinutes: 50, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-05-02T19:30:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-2027-kansas',
    round: 11,
    name: 'AdventHealth 400',
    circuitId: 'kansas-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-05-08T20:00:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-05-08T21:10:00Z', durationMinutes: 50, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-05-09T18:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-2027-dover',
    round: 12,
    name: 'Dover Race',
    circuitId: 'dover-motor-speedway',
    // New to the calendar — placeholder times follow the AdventHealth 400 weekend
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-05-15T20:00:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-05-15T21:10:00Z', durationMinutes: 50, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-05-16T18:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-2027-charlotte',
    round: 13,
    name: 'Coca-Cola 600',
    circuitId: 'charlotte-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Practice & Qualifying', startUtc: '2027-05-29T18:30:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Coca-Cola 600', startUtc: '2027-05-30T22:00:00Z', durationMinutes: 260, tba: true },
    ],
  },
  {
    id: 'nascar-2027-nashville',
    round: 14,
    name: 'Cracker Barrel 400',
    circuitId: 'nashville-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Practice & Qualifying', startUtc: '2027-06-05T21:40:00Z', durationMinutes: 50, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-06-06T23:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-2027-pocono',
    round: 15,
    name: 'The Great American Getaway 400',
    circuitId: 'pocono-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-06-12T17:00:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-06-12T18:10:00Z', durationMinutes: 50, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-06-13T17:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-2027-michigan',
    round: 16,
    name: 'FireKeepers Casino 400',
    circuitId: 'michigan-international-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-06-19T21:00:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-06-19T22:10:00Z', durationMinutes: 50, tba: true },
      { type: 'race', label: 'FireKeepers Casino 400', startUtc: '2027-06-20T19:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-2027-chicagoland',
    round: 17,
    name: 'eero 400',
    circuitId: 'chicagoland-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-06-25T22:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-06-26T19:00:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-06-27T22:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-2027-iowa',
    round: 18,
    name: 'Iowa Corn 350',
    circuitId: 'iowa-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-07-03T18:05:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-07-03T19:10:00Z', durationMinutes: 50, tba: true },
      { type: 'race', label: 'Iowa Corn 350', startUtc: '2027-07-04T19:30:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-2027-sonoma',
    round: 19,
    name: 'Toyota/Save Mart 350',
    circuitId: 'sonoma-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-07-10T18:00:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-07-10T19:10:00Z', durationMinutes: 50, tba: true },
      { type: 'race', label: 'Toyota/Save Mart 350', startUtc: '2027-07-11T19:30:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-2027-atlanta-2',
    round: 20,
    name: 'Dollar Tree 400',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-07-17T20:30:00Z', durationMinutes: 90, tba: true },
      { type: 'race', label: 'Dollar Tree 400', startUtc: '2027-07-18T23:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-2027-indianapolis',
    round: 21,
    name: 'Brickyard 400',
    circuitId: 'indianapolis-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-07-23T17:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-07-24T17:30:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Brickyard 400', startUtc: '2027-07-25T18:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-2027-san-diego',
    round: 22,
    name: 'Anduril 250',
    circuitId: 'san-diego-street-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-07-30T21:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-07-31T18:30:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-08-01T20:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-2027-bristol-night',
    round: 23,
    name: 'Bass Pro Shops Night Race',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-08-13T20:30:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-08-13T21:35:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Bass Pro Shops Night Race', startUtc: '2027-08-14T23:30:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-2027-wwtr',
    round: 24,
    name: 'Enjoy Illinois 300',
    circuitId: 'world-wide-technology-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-08-21T19:30:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-08-21T20:35:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Enjoy Illinois 300', startUtc: '2027-08-22T19:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-2027-daytona-2',
    round: 25,
    name: 'Coke Zero Sugar 400',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-08-27T21:00:00Z', durationMinutes: 90, tba: true },
      { type: 'race', label: 'Coke Zero Sugar 400', startUtc: '2027-08-28T23:30:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-2027-darlington-2',
    round: 26,
    name: 'Cook Out Southern 500',
    circuitId: 'darlington-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-09-04T20:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-09-04T21:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Cook Out Southern 500', startUtc: '2027-09-05T21:00:00Z', durationMinutes: 240, tba: true },
    ],
  },
  {
    id: 'nascar-2027-richmond',
    round: 27,
    name: 'Cook Out 400',
    circuitId: 'richmond-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-09-10T19:30:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-09-10T20:40:00Z', durationMinutes: 50, tba: true },
      { type: 'race', label: 'Cook Out 400', startUtc: '2027-09-11T23:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-2027-watkins-glen',
    round: 28,
    name: 'Go Bowling at The Glen',
    circuitId: 'watkins-glen-international',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-09-18T17:00:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-09-18T18:10:00Z', durationMinutes: 50, tba: true },
      { type: 'race', label: 'Go Bowling at The Glen', startUtc: '2027-09-19T19:00:00Z', durationMinutes: 150, tba: true },
    ],
  },
  {
    id: 'nascar-2027-new-hampshire',
    round: 29,
    name: 'Dollar Tree 301',
    circuitId: 'new-hampshire-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-09-25T14:35:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-09-25T15:40:00Z', durationMinutes: 50, tba: true },
      { type: 'race', label: 'Dollar Tree 301', startUtc: '2027-09-26T18:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-2027-kansas-2',
    round: 30,
    name: 'Hollywood Casino 400',
    circuitId: 'kansas-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-10-02T15:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Hollywood Casino 400', startUtc: '2027-10-03T19:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-2027-las-vegas-2',
    round: 31,
    name: 'South Point 400',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-10-09T20:30:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-10-09T21:35:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'South Point 400', startUtc: '2027-10-10T21:30:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-2027-charlotte-roval',
    round: 32,
    name: 'Bank of America 400',
    circuitId: 'charlotte-motor-speedway-roval',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-10-16T17:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-10-16T18:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Bank of America 400', startUtc: '2027-10-17T19:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-2027-phoenix-2',
    round: 33,
    name: 'Freeway Insurance 500',
    circuitId: 'phoenix-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-10-23T20:30:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-10-23T21:35:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-10-24T19:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-2027-talladega-2',
    round: 34,
    name: 'YellaWood 500',
    circuitId: 'talladega-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-10-30T17:00:00Z', durationMinutes: 90, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-10-31T18:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-2027-martinsville-2',
    round: 35,
    name: 'Xfinity 500',
    circuitId: 'martinsville-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-11-06T17:00:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-11-06T18:05:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-11-07T19:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'nascar-2027-homestead',
    round: 36,
    name: 'NASCAR Championship Race',
    circuitId: 'homestead-miami-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-11-12T22:30:00Z', durationMinutes: 50, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-11-13T19:30:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'NASCAR Championship Race', startUtc: '2027-11-14T20:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
]
