import { RaceEvent } from '@/lib/types'

// NASCAR Cup Series 2025 — 36 points races
// Source: nascar.com, jayski.com, Wikipedia verified schedule
// Times converted from ET to UTC (ET = UTC-5 in winter, UTC-4 during DST)
// DST starts Mar 9 2025 in US
export const nascar2025: RaceEvent[] = [
  {
    id: 'nascar-2025-daytona-500',
    round: 1,
    name: 'Daytona 500',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Duels', startUtc: '2025-02-14T00:00:00Z', durationMinutes: 120 },
      { type: 'race', label: 'Daytona 500', startUtc: '2025-02-16T18:30:00Z', durationMinutes: 210 },
    ],
  },
  {
    id: 'nascar-2025-atlanta',
    round: 2,
    name: 'Ambetter Health 400',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-02-22T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Ambetter Health 400', startUtc: '2025-02-23T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2025-cota',
    round: 3,
    name: 'EchoPark Automotive Grand Prix',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-03-01T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'EchoPark Automotive Grand Prix', startUtc: '2025-03-02T20:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2025-phoenix',
    round: 4,
    name: "Shriners Children's 500",
    circuitId: 'phoenix-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-03-08T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: "Shriners Children's 500", startUtc: '2025-03-09T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2025-las-vegas',
    round: 5,
    name: 'Pennzoil 400',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-03-15T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Pennzoil 400', startUtc: '2025-03-16T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2025-homestead',
    round: 6,
    name: 'Straight Talk Wireless 400',
    circuitId: 'homestead-miami-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-03-22T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Straight Talk Wireless 400', startUtc: '2025-03-23T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2025-martinsville',
    round: 7,
    name: 'Cook Out 400',
    circuitId: 'martinsville-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-03-29T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Cook Out 400', startUtc: '2025-03-30T19:00:00Z', durationMinutes: 210 },
    ],
  },
  {
    id: 'nascar-2025-darlington',
    round: 8,
    name: 'Goodyear 400',
    circuitId: 'darlington-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-04-05T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Goodyear 400', startUtc: '2025-04-06T19:00:00Z', durationMinutes: 210 },
    ],
  },
  {
    id: 'nascar-2025-bristol',
    round: 9,
    name: 'Food City 500',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-04-12T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Food City 500', startUtc: '2025-04-13T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2025-talladega',
    round: 10,
    name: "Jack Link's 500",
    circuitId: 'talladega-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-04-26T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: "Jack Link's 500", startUtc: '2025-04-27T19:00:00Z', durationMinutes: 200 },
    ],
  },
  {
    id: 'nascar-2025-texas',
    round: 11,
    name: 'Würth 400',
    circuitId: 'texas-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-03T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Würth 400', startUtc: '2025-05-04T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2025-kansas',
    round: 12,
    name: 'AdventHealth 400',
    circuitId: 'kansas-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-10T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'AdventHealth 400', startUtc: '2025-05-11T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2025-coca-cola-600',
    round: 13,
    name: 'Coca-Cola 600',
    circuitId: 'charlotte-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-24T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Coca-Cola 600', startUtc: '2025-05-25T22:00:00Z', durationMinutes: 260 },
    ],
  },
  {
    id: 'nascar-2025-nashville',
    round: 14,
    name: 'Cracker Barrel 400',
    circuitId: 'nashville-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-31T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Cracker Barrel 400', startUtc: '2025-06-01T23:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2025-michigan',
    round: 15,
    name: 'FireKeepers Casino 400',
    circuitId: 'michigan-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-06-07T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'FireKeepers Casino 400', startUtc: '2025-06-08T18:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2025-mexico',
    round: 16,
    name: 'Viva México 250',
    circuitId: 'autodromo-hermanos-rodriguez',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-06-14T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Viva México 250', startUtc: '2025-06-15T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2025-pocono',
    round: 17,
    name: 'The Great American Getaway 400',
    circuitId: 'pocono-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-06-21T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'The Great American Getaway 400', startUtc: '2025-06-22T18:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2025-atlanta-2',
    round: 18,
    name: 'Quaker State 400',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-06-28T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Quaker State 400', startUtc: '2025-06-28T23:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2025-chicago',
    round: 19,
    name: 'Grant Park 165',
    circuitId: 'chicago-street-course',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-05T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Grant Park 165', startUtc: '2025-07-06T18:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2025-sonoma',
    round: 20,
    name: 'Toyota/Save Mart 350',
    circuitId: 'sonoma-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-12T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Toyota/Save Mart 350', startUtc: '2025-07-13T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2025-dover',
    round: 21,
    name: 'Autotrader EchoPark Automotive 400',
    circuitId: 'dover-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-19T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Autotrader EchoPark Automotive 400', startUtc: '2025-07-20T18:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2025-indianapolis',
    round: 22,
    name: 'Brickyard 400',
    circuitId: 'indianapolis-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-26T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Brickyard 400', startUtc: '2025-07-27T18:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2025-iowa',
    round: 23,
    name: 'Iowa Corn 350',
    circuitId: 'iowa-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-02T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Iowa Corn 350', startUtc: '2025-08-03T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2025-watkins-glen',
    round: 24,
    name: 'Go Bowling at The Glen',
    circuitId: 'watkins-glen-international',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-09T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Go Bowling at The Glen', startUtc: '2025-08-10T18:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-2025-richmond',
    round: 25,
    name: 'Cook Out 400',
    circuitId: 'richmond-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-16T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Cook Out 400', startUtc: '2025-08-16T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2025-daytona-2',
    round: 26,
    name: 'Coke Zero Sugar 400',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-23T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Coke Zero Sugar 400', startUtc: '2025-08-23T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2025-darlington-2',
    round: 27,
    name: 'Cook Out Southern 500',
    circuitId: 'darlington-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-30T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Cook Out Southern 500', startUtc: '2025-08-31T22:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nascar-2025-wwtr',
    round: 28,
    name: 'Enjoy Illinois 300',
    circuitId: 'world-wide-technology-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-09-06T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Enjoy Illinois 300', startUtc: '2025-09-07T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2025-bristol-night',
    round: 29,
    name: 'Bass Pro Shops Night Race',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-09-13T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Bass Pro Shops Night Race', startUtc: '2025-09-13T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2025-new-hampshire',
    round: 30,
    name: 'Mobil 1 301',
    circuitId: 'new-hampshire-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-09-20T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Mobil 1 301', startUtc: '2025-09-21T18:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2025-kansas-2',
    round: 31,
    name: 'Hollywood Casino 400',
    circuitId: 'kansas-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-09-27T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Hollywood Casino 400', startUtc: '2025-09-28T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2025-charlotte-roval',
    round: 32,
    name: 'Bank of America ROVAL 400',
    circuitId: 'charlotte-motor-speedway-roval',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-10-04T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Bank of America ROVAL 400', startUtc: '2025-10-05T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2025-las-vegas-2',
    round: 33,
    name: 'South Point 400',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-10-11T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'South Point 400', startUtc: '2025-10-12T21:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2025-talladega-2',
    round: 34,
    name: 'YellaWood 500',
    circuitId: 'talladega-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-10-18T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'YellaWood 500', startUtc: '2025-10-19T18:00:00Z', durationMinutes: 200 },
    ],
  },
  {
    id: 'nascar-2025-martinsville-2',
    round: 35,
    name: 'Xfinity 500',
    circuitId: 'martinsville-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-10-25T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Xfinity 500', startUtc: '2025-10-26T18:00:00Z', durationMinutes: 210 },
    ],
  },
  {
    id: 'nascar-2025-phoenix-championship',
    round: 36,
    name: 'NASCAR Cup Series Championship Race',
    circuitId: 'phoenix-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-11-01T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Championship Race', startUtc: '2025-11-02T20:00:00Z', durationMinutes: 180 },
    ],
  },
]
