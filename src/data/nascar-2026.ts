import { RaceEvent } from '@/lib/types'

// NASCAR Cup Series 2026 — 36 points races
// Source: nascar.com, jayski.com, nesn.com verified schedule
// Times converted from ET to UTC (ET = UTC-5 in winter, UTC-4 during DST)
// DST starts Mar 8 2026 in US
export const nascar2026: RaceEvent[] = [
  {
    id: 'nascar-2026-daytona-500',
    round: 1,
    name: 'Daytona 500',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Duels', startUtc: '2026-02-13T00:00:00Z', durationMinutes: 120 },
      { type: 'race', label: 'Daytona 500', startUtc: '2026-02-15T18:30:00Z', durationMinutes: 210 },
    ],
  },
  {
    id: 'nascar-2026-atlanta',
    round: 2,
    name: 'EchoPark Automotive Grand Prix',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-02-21T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-02-22T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2026-cota',
    round: 3,
    name: 'EchoPark Automotive Grand Prix',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-02-28T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-03-01T20:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2026-phoenix',
    round: 4,
    name: 'Phoenix Race',
    circuitId: 'phoenix-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-07T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-03-08T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2026-las-vegas',
    round: 5,
    name: 'Las Vegas Race',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-14T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-03-15T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2026-darlington',
    round: 6,
    name: 'Goodyear 400',
    circuitId: 'darlington-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-21T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Goodyear 400', startUtc: '2026-03-22T19:00:00Z', durationMinutes: 210 },
    ],
  },
  {
    id: 'nascar-2026-martinsville',
    round: 7,
    name: 'STP 500',
    circuitId: 'martinsville-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-28T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'STP 500', startUtc: '2026-03-29T19:30:00Z', durationMinutes: 210 },
    ],
  },
  {
    id: 'nascar-2026-bristol',
    round: 8,
    name: 'Food City 500',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-04-11T20:30:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-11T21:40:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Food City 500', startUtc: '2026-04-12T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2026-kansas',
    round: 9,
    name: 'Kansas Race',
    circuitId: 'kansas-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-18T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-04-19T18:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2026-talladega',
    round: 10,
    name: 'GEICO 500',
    circuitId: 'talladega-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-25T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'GEICO 500', startUtc: '2026-04-26T19:00:00Z', durationMinutes: 200 },
    ],
  },
  {
    id: 'nascar-2026-texas',
    round: 11,
    name: 'Texas Race',
    circuitId: 'texas-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-02T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-05-03T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2026-watkins-glen',
    round: 12,
    name: 'Go Bowling at The Glen',
    circuitId: 'watkins-glen-international',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-09T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Go Bowling at The Glen', startUtc: '2026-05-10T19:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-2026-coca-cola-600',
    round: 13,
    name: 'Coca-Cola 600',
    circuitId: 'charlotte-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-23T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Coca-Cola 600', startUtc: '2026-05-24T22:00:00Z', durationMinutes: 260 },
    ],
  },
  {
    id: 'nascar-2026-nashville',
    round: 14,
    name: 'Nashville Race',
    circuitId: 'nashville-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-30T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-05-31T23:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2026-michigan',
    round: 15,
    name: 'FireKeepers Casino 400',
    circuitId: 'michigan-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-06T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'FireKeepers Casino 400', startUtc: '2026-06-07T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2026-pocono',
    round: 16,
    name: 'Pocono Race',
    circuitId: 'pocono-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-13T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-06-14T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2026-san-diego',
    round: 17,
    name: 'San Diego Street Race',
    circuitId: 'san-diego-street-course',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-20T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-06-21T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2026-sonoma',
    round: 18,
    name: 'Toyota/Save Mart 350',
    circuitId: 'sonoma-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-27T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Toyota/Save Mart 350', startUtc: '2026-06-28T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2026-chicagoland',
    round: 19,
    name: 'Chicagoland Race',
    circuitId: 'chicagoland-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-04T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-07-05T22:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2026-atlanta-2',
    round: 20,
    name: 'Quaker State 400',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-11T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Quaker State 400', startUtc: '2026-07-12T23:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2026-north-wilkesboro',
    round: 21,
    name: 'North Wilkesboro Race',
    circuitId: 'north-wilkesboro-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-18T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-07-19T23:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2026-indianapolis',
    round: 22,
    name: 'Brickyard 400',
    circuitId: 'indianapolis-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-25T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Brickyard 400', startUtc: '2026-07-26T18:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2026-iowa',
    round: 23,
    name: 'Iowa Corn 350',
    circuitId: 'iowa-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-08T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Iowa Corn 350', startUtc: '2026-08-09T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2026-richmond',
    round: 24,
    name: 'Federated Auto Parts 400',
    circuitId: 'richmond-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-15T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Federated Auto Parts 400', startUtc: '2026-08-15T23:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2026-new-hampshire',
    round: 25,
    name: 'USA Today 301',
    circuitId: 'new-hampshire-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-22T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'USA Today 301', startUtc: '2026-08-23T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2026-daytona-2',
    round: 26,
    name: 'Coke Zero Sugar 400',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-29T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Coke Zero Sugar 400', startUtc: '2026-08-29T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2026-darlington-2',
    round: 27,
    name: 'Cook Out Southern 500',
    circuitId: 'darlington-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-05T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Cook Out Southern 500', startUtc: '2026-09-06T21:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nascar-2026-wwtr',
    round: 28,
    name: 'Enjoy Illinois 300',
    circuitId: 'world-wide-technology-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-12T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Enjoy Illinois 300', startUtc: '2026-09-13T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2026-bristol-night',
    round: 29,
    name: 'Bass Pro Shops Night Race',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-18T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Bass Pro Shops Night Race', startUtc: '2026-09-19T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2026-kansas-2',
    round: 30,
    name: 'Hollywood Casino 400',
    circuitId: 'kansas-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-26T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Hollywood Casino 400', startUtc: '2026-09-27T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2026-las-vegas-2',
    round: 31,
    name: 'South Point 400',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-03T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'South Point 400', startUtc: '2026-10-04T21:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2026-charlotte-roval',
    round: 32,
    name: 'Bank of America ROVAL 400',
    circuitId: 'charlotte-motor-speedway-roval',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-10T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Bank of America ROVAL 400', startUtc: '2026-10-11T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2026-phoenix-2',
    round: 33,
    name: 'Phoenix Playoff Race',
    circuitId: 'phoenix-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-17T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-10-18T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2026-talladega-2',
    round: 34,
    name: 'Talladega Superspeedway',
    circuitId: 'talladega-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-24T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-10-25T18:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2026-martinsville-2',
    round: 35,
    name: 'Martinsville Speedway',
    circuitId: 'martinsville-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-31T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-11-01T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2026-homestead',
    round: 36,
    name: 'NASCAR Cup Series Championship',
    circuitId: 'homestead-miami-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-11-07T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Championship Race', startUtc: '2026-11-08T20:00:00Z', durationMinutes: 180 },
    ],
  },
]
