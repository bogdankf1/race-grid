import { RaceEvent } from '@/lib/types'

// NASCAR Cup Series 2024 — 36 points races
// Source: ESPN, Wikipedia verified schedule
// Times converted from ET to UTC (ET = UTC-5 in winter, UTC-4 during DST)
// DST starts Mar 10 2024 in US
export const nascar2024: RaceEvent[] = [
  {
    id: 'nascar-2024-daytona-500',
    round: 1,
    name: 'Daytona 500',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Duels', startUtc: '2024-02-15T00:00:00Z', durationMinutes: 120 },
      { type: 'race', label: 'Daytona 500', startUtc: '2024-02-18T19:30:00Z', durationMinutes: 210 },
    ],
  },
  {
    id: 'nascar-2024-atlanta',
    round: 2,
    name: 'Ambetter Health 400',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-02-24T18:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Ambetter Health 400', startUtc: '2024-02-25T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2024-las-vegas',
    round: 3,
    name: 'Pennzoil 400',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-02T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Pennzoil 400', startUtc: '2024-03-03T20:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2024-phoenix',
    round: 4,
    name: "Shriners Children's 500",
    circuitId: 'phoenix-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-09T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: "Shriners Children's 500", startUtc: '2024-03-10T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2024-bristol',
    round: 5,
    name: 'Food City 500',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-16T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Food City 500', startUtc: '2024-03-17T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2024-cota',
    round: 6,
    name: 'EchoPark Automotive Grand Prix',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-23T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'EchoPark Automotive Grand Prix', startUtc: '2024-03-24T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2024-richmond',
    round: 7,
    name: 'Toyota Owners 400',
    circuitId: 'richmond-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-30T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Toyota Owners 400', startUtc: '2024-03-31T23:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2024-martinsville',
    round: 8,
    name: 'Cook Out 400',
    circuitId: 'martinsville-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-06T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Cook Out 400', startUtc: '2024-04-07T19:00:00Z', durationMinutes: 210 },
    ],
  },
  {
    id: 'nascar-2024-texas',
    round: 9,
    name: 'Autotrader EchoPark Automotive 400',
    circuitId: 'texas-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-13T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Autotrader EchoPark Automotive 400', startUtc: '2024-04-14T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2024-talladega',
    round: 10,
    name: 'GEICO 500',
    circuitId: 'talladega-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-20T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'GEICO 500', startUtc: '2024-04-21T19:00:00Z', durationMinutes: 200 },
    ],
  },
  {
    id: 'nascar-2024-dover',
    round: 11,
    name: 'Würth 400',
    circuitId: 'dover-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-27T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Würth 400', startUtc: '2024-04-28T18:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2024-kansas',
    round: 12,
    name: 'AdventHealth 400',
    circuitId: 'kansas-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-04T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'AdventHealth 400', startUtc: '2024-05-05T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2024-darlington',
    round: 13,
    name: 'Goodyear 400',
    circuitId: 'darlington-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-11T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Goodyear 400', startUtc: '2024-05-12T19:00:00Z', durationMinutes: 210 },
    ],
  },
  {
    id: 'nascar-2024-coca-cola-600',
    round: 14,
    name: 'Coca-Cola 600',
    circuitId: 'charlotte-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-25T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Coca-Cola 600', startUtc: '2024-05-26T22:00:00Z', durationMinutes: 260 },
    ],
  },
  {
    id: 'nascar-2024-wwtr',
    round: 15,
    name: 'Enjoy Illinois 300',
    circuitId: 'world-wide-technology-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-01T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Enjoy Illinois 300', startUtc: '2024-06-02T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2024-sonoma',
    round: 16,
    name: 'Toyota/Save Mart 350',
    circuitId: 'sonoma-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-08T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Toyota/Save Mart 350', startUtc: '2024-06-09T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2024-iowa',
    round: 17,
    name: 'Iowa Corn 350',
    circuitId: 'iowa-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-15T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Iowa Corn 350', startUtc: '2024-06-16T23:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2024-new-hampshire',
    round: 18,
    name: 'USA Today 301',
    circuitId: 'new-hampshire-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-22T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'USA Today 301', startUtc: '2024-06-23T18:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2024-nashville',
    round: 19,
    name: 'Ally 400',
    circuitId: 'nashville-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-29T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Ally 400', startUtc: '2024-06-30T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2024-chicago',
    round: 20,
    name: 'Grant Park 165',
    circuitId: 'chicago-street-course',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-06T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Grant Park 165', startUtc: '2024-07-07T20:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2024-pocono',
    round: 21,
    name: 'The Great American Getaway 400',
    circuitId: 'pocono-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-13T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'The Great American Getaway 400', startUtc: '2024-07-14T18:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2024-indianapolis',
    round: 22,
    name: 'Brickyard 400',
    circuitId: 'indianapolis-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-20T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Brickyard 400', startUtc: '2024-07-21T18:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2024-richmond-2',
    round: 23,
    name: 'Cook Out 400',
    circuitId: 'richmond-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-10T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Cook Out 400', startUtc: '2024-08-11T22:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2024-michigan',
    round: 24,
    name: 'FireKeepers Casino 400',
    circuitId: 'michigan-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-17T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'FireKeepers Casino 400', startUtc: '2024-08-18T18:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2024-daytona-2',
    round: 25,
    name: 'Coke Zero Sugar 400',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-24T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Coke Zero Sugar 400', startUtc: '2024-08-24T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2024-darlington-2',
    round: 26,
    name: 'Cook Out Southern 500',
    circuitId: 'darlington-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-31T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Cook Out Southern 500', startUtc: '2024-09-01T22:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nascar-2024-atlanta-2',
    round: 27,
    name: 'Quaker State 400',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-07T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Quaker State 400', startUtc: '2024-09-08T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2024-watkins-glen',
    round: 28,
    name: 'Go Bowling at The Glen',
    circuitId: 'watkins-glen-international',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-14T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Go Bowling at The Glen', startUtc: '2024-09-15T19:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-2024-bristol-night',
    round: 29,
    name: 'Bass Pro Shops Night Race',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-21T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Bass Pro Shops Night Race', startUtc: '2024-09-21T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2024-kansas-2',
    round: 30,
    name: 'Hollywood Casino 400',
    circuitId: 'kansas-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-28T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Hollywood Casino 400', startUtc: '2024-09-29T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2024-talladega-2',
    round: 31,
    name: 'YellaWood 500',
    circuitId: 'talladega-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-10-05T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'YellaWood 500', startUtc: '2024-10-06T18:00:00Z', durationMinutes: 200 },
    ],
  },
  {
    id: 'nascar-2024-charlotte-roval',
    round: 32,
    name: 'Bank of America ROVAL 400',
    circuitId: 'charlotte-motor-speedway-roval',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-10-12T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Bank of America ROVAL 400', startUtc: '2024-10-13T18:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2024-las-vegas-2',
    round: 33,
    name: 'South Point 400',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-10-19T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'South Point 400', startUtc: '2024-10-20T18:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2024-homestead',
    round: 34,
    name: 'Straight Talk Wireless 400',
    circuitId: 'homestead-miami-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-10-26T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Straight Talk Wireless 400', startUtc: '2024-10-27T18:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2024-martinsville-2',
    round: 35,
    name: 'Xfinity 500',
    circuitId: 'martinsville-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-11-02T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Xfinity 500', startUtc: '2024-11-03T19:00:00Z', durationMinutes: 210 },
    ],
  },
  {
    id: 'nascar-2024-phoenix-championship',
    round: 36,
    name: 'NASCAR Cup Series Championship Race',
    circuitId: 'phoenix-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-11-09T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Championship Race', startUtc: '2024-11-10T20:00:00Z', durationMinutes: 180 },
    ],
  },
]
