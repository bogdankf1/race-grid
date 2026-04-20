import { RaceEvent } from '@/lib/types'

// NASCAR Cup Series 2021 — 36 points races
// Source: ESPN, Wikipedia verified schedule
// Times converted from ET to UTC (ET = UTC-5 in winter, UTC-4 during DST)
// DST starts Mar 14 2021 in US
export const nascar2021: RaceEvent[] = [
  {
    id: 'nascar-2021-daytona-500',
    round: 1,
    name: 'Daytona 500',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Duels', startUtc: '2021-02-11T00:00:00Z', durationMinutes: 120 },
      { type: 'race', label: 'Daytona 500', startUtc: '2021-02-14T19:30:00Z', durationMinutes: 210 },
    ],
  },
  {
    id: 'nascar-2021-daytona-rc',
    round: 2,
    name: "O'Reilly Auto Parts 253",
    circuitId: 'daytona-international-speedway-road-course',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-02-20T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: "O'Reilly Auto Parts 253", startUtc: '2021-02-21T20:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-2021-homestead',
    round: 3,
    name: 'Dixie Vodka 400',
    circuitId: 'homestead-miami-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-02-27T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Dixie Vodka 400', startUtc: '2021-02-28T20:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2021-las-vegas',
    round: 4,
    name: 'Pennzoil 400',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-03-06T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Pennzoil 400', startUtc: '2021-03-07T20:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2021-phoenix',
    round: 5,
    name: 'Instacart 500',
    circuitId: 'phoenix-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-03-13T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Instacart 500', startUtc: '2021-03-14T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2021-atlanta',
    round: 6,
    name: 'Folds of Honor QuikTrip 500',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-03-20T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Folds of Honor QuikTrip 500', startUtc: '2021-03-21T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2021-bristol-dirt',
    round: 7,
    name: 'Food City Dirt Race',
    circuitId: 'bristol-motor-speedway-dirt',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-03-28T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Food City Dirt Race', startUtc: '2021-03-29T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2021-martinsville',
    round: 8,
    name: 'Blue-Emu Maximum Pain Relief 500',
    circuitId: 'martinsville-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-04-10T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Blue-Emu Maximum Pain Relief 500', startUtc: '2021-04-10T23:30:00Z', durationMinutes: 210 },
    ],
  },
  {
    id: 'nascar-2021-richmond',
    round: 9,
    name: 'Toyota Owners 400',
    circuitId: 'richmond-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-04-17T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Toyota Owners 400', startUtc: '2021-04-18T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2021-talladega',
    round: 10,
    name: 'GEICO 500',
    circuitId: 'talladega-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-04-24T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'GEICO 500', startUtc: '2021-04-25T18:00:00Z', durationMinutes: 200 },
    ],
  },
  {
    id: 'nascar-2021-kansas',
    round: 11,
    name: 'Buschy McBusch Race 400',
    circuitId: 'kansas-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-01T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Buschy McBusch Race 400', startUtc: '2021-05-02T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2021-darlington',
    round: 12,
    name: 'Goodyear 400',
    circuitId: 'darlington-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-08T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Goodyear 400', startUtc: '2021-05-09T19:30:00Z', durationMinutes: 210 },
    ],
  },
  {
    id: 'nascar-2021-dover',
    round: 13,
    name: 'Drydene 400',
    circuitId: 'dover-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-15T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Drydene 400', startUtc: '2021-05-16T18:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2021-cota',
    round: 14,
    name: 'EchoPark Texas Grand Prix',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-22T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'EchoPark Texas Grand Prix', startUtc: '2021-05-23T18:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2021-coca-cola-600',
    round: 15,
    name: 'Coca-Cola 600',
    circuitId: 'charlotte-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-29T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Coca-Cola 600', startUtc: '2021-05-30T22:00:00Z', durationMinutes: 260 },
    ],
  },
  {
    id: 'nascar-2021-sonoma',
    round: 16,
    name: 'Toyota/Save Mart 350',
    circuitId: 'sonoma-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-05T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Toyota/Save Mart 350', startUtc: '2021-06-06T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2021-nashville',
    round: 17,
    name: 'Ally 400',
    circuitId: 'nashville-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-19T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Ally 400', startUtc: '2021-06-20T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2021-pocono-1',
    round: 18,
    name: 'Pocono Organics CBD 325',
    circuitId: 'pocono-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-26T14:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Pocono Organics CBD 325', startUtc: '2021-06-26T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2021-pocono-2',
    round: 19,
    name: 'Explore the Pocono Mountains 350',
    circuitId: 'pocono-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-27T14:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Explore the Pocono Mountains 350', startUtc: '2021-06-27T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2021-road-america',
    round: 20,
    name: 'Jockey Made in America 250',
    circuitId: 'road-america',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-03T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Jockey Made in America 250', startUtc: '2021-07-04T18:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-2021-atlanta-2',
    round: 21,
    name: 'Quaker State 400',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-10T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Quaker State 400', startUtc: '2021-07-11T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2021-new-hampshire',
    round: 22,
    name: 'Foxwoods Resort Casino 301',
    circuitId: 'new-hampshire-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-17T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Foxwoods Resort Casino 301', startUtc: '2021-07-18T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2021-watkins-glen',
    round: 23,
    name: 'Go Bowling at The Glen',
    circuitId: 'watkins-glen-international',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-07T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Go Bowling at The Glen', startUtc: '2021-08-08T19:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-2021-indianapolis',
    round: 24,
    name: 'Verizon 200 at the Brickyard',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-14T16:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Verizon 200 at the Brickyard', startUtc: '2021-08-15T17:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-2021-michigan',
    round: 25,
    name: 'FireKeepers Casino 400',
    circuitId: 'michigan-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-21T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'FireKeepers Casino 400', startUtc: '2021-08-22T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2021-daytona-2',
    round: 26,
    name: 'Coke Zero Sugar 400',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-28T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Coke Zero Sugar 400', startUtc: '2021-08-28T23:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2021-darlington-2',
    round: 27,
    name: 'Cook Out Southern 500',
    circuitId: 'darlington-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-04T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Cook Out Southern 500', startUtc: '2021-09-05T22:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nascar-2021-richmond-2',
    round: 28,
    name: 'Federated Auto Parts 400',
    circuitId: 'richmond-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-11T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Federated Auto Parts 400', startUtc: '2021-09-11T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2021-bristol-night',
    round: 29,
    name: 'Bass Pro Shops Night Race',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-18T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Bass Pro Shops Night Race', startUtc: '2021-09-18T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2021-las-vegas-2',
    round: 30,
    name: 'South Point 400',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-25T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'South Point 400', startUtc: '2021-09-26T23:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2021-talladega-2',
    round: 31,
    name: 'YellaWood 500',
    circuitId: 'talladega-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-02T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'YellaWood 500', startUtc: '2021-10-04T17:00:00Z', durationMinutes: 200 },
    ],
  },
  {
    id: 'nascar-2021-charlotte-roval',
    round: 32,
    name: 'Bank of America ROVAL 400',
    circuitId: 'charlotte-motor-speedway-roval',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-09T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Bank of America ROVAL 400', startUtc: '2021-10-10T18:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2021-texas',
    round: 33,
    name: 'Autotrader EchoPark Automotive 500',
    circuitId: 'texas-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-16T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Autotrader EchoPark Automotive 500', startUtc: '2021-10-17T18:00:00Z', durationMinutes: 210 },
    ],
  },
  {
    id: 'nascar-2021-kansas-2',
    round: 34,
    name: 'Hollywood Casino 400',
    circuitId: 'kansas-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-23T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Hollywood Casino 400', startUtc: '2021-10-24T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2021-martinsville-2',
    round: 35,
    name: 'Xfinity 500',
    circuitId: 'martinsville-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-30T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Xfinity 500', startUtc: '2021-10-31T18:00:00Z', durationMinutes: 210 },
    ],
  },
  {
    id: 'nascar-2021-phoenix-championship',
    round: 36,
    name: 'NASCAR Cup Series Championship Race',
    circuitId: 'phoenix-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-11-06T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Championship Race', startUtc: '2021-11-07T20:00:00Z', durationMinutes: 180 },
    ],
  },
]
