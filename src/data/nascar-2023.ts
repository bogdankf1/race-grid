import { RaceEvent } from '@/lib/types'

// NASCAR Cup Series 2023 — 36 points races
// Source: ESPN, Wikipedia verified schedule
// Times converted from ET to UTC (ET = UTC-5 in winter, UTC-4 during DST)
// DST starts Mar 12 2023 in US
export const nascar2023: RaceEvent[] = [
  {
    id: 'nascar-2023-daytona-500',
    round: 1,
    name: 'Daytona 500',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Duels', startUtc: '2023-02-16T00:00:00Z', durationMinutes: 120 },
      { type: 'race', label: 'Daytona 500', startUtc: '2023-02-19T19:30:00Z', durationMinutes: 210 },
    ],
  },
  {
    id: 'nascar-2023-auto-club',
    round: 2,
    name: 'Pala Casino 400',
    circuitId: 'auto-club-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-02-25T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Pala Casino 400', startUtc: '2023-02-26T20:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2023-las-vegas',
    round: 3,
    name: 'Pennzoil 400',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-03-04T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Pennzoil 400', startUtc: '2023-03-05T20:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2023-phoenix',
    round: 4,
    name: 'United Rentals Work United 500',
    circuitId: 'phoenix-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-03-11T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'United Rentals Work United 500', startUtc: '2023-03-12T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2023-atlanta',
    round: 5,
    name: 'Ambetter Health 400',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-03-18T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Ambetter Health 400', startUtc: '2023-03-19T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2023-cota',
    round: 6,
    name: 'EchoPark Automotive Grand Prix',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-03-25T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'EchoPark Automotive Grand Prix', startUtc: '2023-03-26T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2023-richmond',
    round: 7,
    name: 'Toyota Owners 400',
    circuitId: 'richmond-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-01T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Toyota Owners 400', startUtc: '2023-04-02T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2023-bristol-dirt',
    round: 8,
    name: 'Food City Dirt Race',
    circuitId: 'bristol-motor-speedway-dirt',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-08T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Food City Dirt Race', startUtc: '2023-04-09T23:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2023-martinsville',
    round: 9,
    name: 'NOCO 400',
    circuitId: 'martinsville-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-15T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'NOCO 400', startUtc: '2023-04-16T19:00:00Z', durationMinutes: 210 },
    ],
  },
  {
    id: 'nascar-2023-talladega',
    round: 10,
    name: 'GEICO 500',
    circuitId: 'talladega-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-22T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'GEICO 500', startUtc: '2023-04-23T19:00:00Z', durationMinutes: 200 },
    ],
  },
  {
    id: 'nascar-2023-dover',
    round: 11,
    name: 'Würth 400',
    circuitId: 'dover-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-29T16:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Würth 400', startUtc: '2023-04-30T17:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2023-kansas',
    round: 12,
    name: 'AdventHealth 400',
    circuitId: 'kansas-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-05-06T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'AdventHealth 400', startUtc: '2023-05-07T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2023-darlington',
    round: 13,
    name: 'Goodyear 400',
    circuitId: 'darlington-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-05-13T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Goodyear 400', startUtc: '2023-05-14T19:00:00Z', durationMinutes: 210 },
    ],
  },
  {
    id: 'nascar-2023-coca-cola-600',
    round: 14,
    name: 'Coca-Cola 600',
    circuitId: 'charlotte-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-05-27T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Coca-Cola 600', startUtc: '2023-05-28T22:00:00Z', durationMinutes: 260 },
    ],
  },
  {
    id: 'nascar-2023-wwtr',
    round: 15,
    name: 'Enjoy Illinois 300',
    circuitId: 'world-wide-technology-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-03T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Enjoy Illinois 300', startUtc: '2023-06-04T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2023-sonoma',
    round: 16,
    name: 'Toyota/Save Mart 350',
    circuitId: 'sonoma-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-10T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Toyota/Save Mart 350', startUtc: '2023-06-11T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2023-nashville',
    round: 17,
    name: 'Ally 400',
    circuitId: 'nashville-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-24T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Ally 400', startUtc: '2023-06-25T23:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2023-chicago',
    round: 18,
    name: 'Grant Park 220',
    circuitId: 'chicago-street-course',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-01T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Grant Park 220', startUtc: '2023-07-02T21:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2023-atlanta-2',
    round: 19,
    name: 'Quaker State 400',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-08T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Quaker State 400', startUtc: '2023-07-09T23:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2023-new-hampshire',
    round: 20,
    name: 'Crayon 301',
    circuitId: 'new-hampshire-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-15T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Crayon 301', startUtc: '2023-07-16T18:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2023-pocono',
    round: 21,
    name: 'HighPoint.com 400',
    circuitId: 'pocono-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-22T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'HighPoint.com 400', startUtc: '2023-07-23T18:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2023-richmond-2',
    round: 22,
    name: 'Cook Out 400',
    circuitId: 'richmond-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-29T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Cook Out 400', startUtc: '2023-07-30T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2023-michigan',
    round: 23,
    name: 'FireKeepers Casino 400',
    circuitId: 'michigan-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-05T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'FireKeepers Casino 400', startUtc: '2023-08-06T18:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2023-indianapolis',
    round: 24,
    name: 'Verizon 200 at the Brickyard',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-12T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Verizon 200 at the Brickyard', startUtc: '2023-08-13T18:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-2023-watkins-glen',
    round: 25,
    name: 'Go Bowling at The Glen',
    circuitId: 'watkins-glen-international',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-19T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Go Bowling at The Glen', startUtc: '2023-08-20T19:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-2023-daytona-2',
    round: 26,
    name: 'Coke Zero Sugar 400',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-26T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Coke Zero Sugar 400', startUtc: '2023-08-26T23:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2023-darlington-2',
    round: 27,
    name: 'Cook Out Southern 500',
    circuitId: 'darlington-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-02T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Cook Out Southern 500', startUtc: '2023-09-03T22:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nascar-2023-kansas-2',
    round: 28,
    name: 'Hollywood Casino 400',
    circuitId: 'kansas-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-09T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Hollywood Casino 400', startUtc: '2023-09-10T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2023-bristol-night',
    round: 29,
    name: 'Bass Pro Shops Night Race',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-15T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Bass Pro Shops Night Race', startUtc: '2023-09-16T22:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2023-texas',
    round: 30,
    name: 'Autotrader EchoPark Automotive 400',
    circuitId: 'texas-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-23T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Autotrader EchoPark Automotive 400', startUtc: '2023-09-24T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2023-talladega-2',
    round: 31,
    name: 'YellaWood 500',
    circuitId: 'talladega-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-30T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'YellaWood 500', startUtc: '2023-10-01T18:00:00Z', durationMinutes: 200 },
    ],
  },
  {
    id: 'nascar-2023-charlotte-roval',
    round: 32,
    name: 'Bank of America ROVAL 400',
    circuitId: 'charlotte-motor-speedway-roval',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-10-07T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Bank of America ROVAL 400', startUtc: '2023-10-08T18:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2023-las-vegas-2',
    round: 33,
    name: 'South Point 400',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-10-14T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'South Point 400', startUtc: '2023-10-15T18:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2023-homestead',
    round: 34,
    name: '4EVER 400',
    circuitId: 'homestead-miami-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-10-21T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: '4EVER 400', startUtc: '2023-10-22T18:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2023-martinsville-2',
    round: 35,
    name: 'Xfinity 500',
    circuitId: 'martinsville-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-10-28T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Xfinity 500', startUtc: '2023-10-29T18:00:00Z', durationMinutes: 210 },
    ],
  },
  {
    id: 'nascar-2023-phoenix-championship',
    round: 36,
    name: 'NASCAR Cup Series Championship Race',
    circuitId: 'phoenix-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-11-04T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Championship Race', startUtc: '2023-11-05T20:00:00Z', durationMinutes: 180 },
    ],
  },
]
