import { RaceEvent } from '@/lib/types'

// NASCAR Cup Series 2022 — 36 points races
// Source: ESPN, Wikipedia verified schedule
// Times converted from ET to UTC (ET = UTC-5 in winter, UTC-4 during DST)
// DST starts Mar 13 2022 in US
export const nascar2022: RaceEvent[] = [
  {
    id: 'nascar-2022-daytona-500',
    round: 1,
    name: 'Daytona 500',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Duels', startUtc: '2022-02-17T00:00:00Z', durationMinutes: 120 },
      { type: 'race', label: 'Daytona 500', startUtc: '2022-02-20T19:30:00Z', durationMinutes: 210 },
    ],
  },
  {
    id: 'nascar-2022-auto-club',
    round: 2,
    name: 'WISE Power 400',
    circuitId: 'auto-club-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-02-26T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'WISE Power 400', startUtc: '2022-02-27T20:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2022-las-vegas',
    round: 3,
    name: 'Pennzoil 400',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-03-05T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Pennzoil 400', startUtc: '2022-03-06T20:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2022-phoenix',
    round: 4,
    name: 'Ruoff Mortgage 500',
    circuitId: 'phoenix-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-03-12T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Ruoff Mortgage 500', startUtc: '2022-03-13T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2022-atlanta',
    round: 5,
    name: 'Folds of Honor QuikTrip 500',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-03-19T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Folds of Honor QuikTrip 500', startUtc: '2022-03-20T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2022-cota',
    round: 6,
    name: 'EchoPark Texas Grand Prix',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-03-26T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'EchoPark Texas Grand Prix', startUtc: '2022-03-27T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2022-richmond',
    round: 7,
    name: 'Toyota Owners 400',
    circuitId: 'richmond-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-02T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Toyota Owners 400', startUtc: '2022-04-03T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2022-martinsville',
    round: 8,
    name: 'Blue-Emu Maximum Pain Relief 400',
    circuitId: 'martinsville-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-09T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Blue-Emu Maximum Pain Relief 400', startUtc: '2022-04-09T23:30:00Z', durationMinutes: 210 },
    ],
  },
  {
    id: 'nascar-2022-bristol-dirt',
    round: 9,
    name: 'Food City Dirt Race',
    circuitId: 'bristol-motor-speedway-dirt',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-16T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Food City Dirt Race', startUtc: '2022-04-17T23:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2022-talladega',
    round: 10,
    name: 'GEICO 500',
    circuitId: 'talladega-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-23T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'GEICO 500', startUtc: '2022-04-24T19:00:00Z', durationMinutes: 200 },
    ],
  },
  {
    id: 'nascar-2022-dover',
    round: 11,
    name: 'DuraMAX Drydene 400',
    circuitId: 'dover-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-30T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'DuraMAX Drydene 400', startUtc: '2022-05-01T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2022-darlington',
    round: 12,
    name: 'Goodyear 400',
    circuitId: 'darlington-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-07T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Goodyear 400', startUtc: '2022-05-08T19:30:00Z', durationMinutes: 210 },
    ],
  },
  {
    id: 'nascar-2022-kansas',
    round: 13,
    name: 'AdventHealth 400',
    circuitId: 'kansas-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-14T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'AdventHealth 400', startUtc: '2022-05-15T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2022-coca-cola-600',
    round: 14,
    name: 'Coca-Cola 600',
    circuitId: 'charlotte-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-28T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Coca-Cola 600', startUtc: '2022-05-29T22:00:00Z', durationMinutes: 260 },
    ],
  },
  {
    id: 'nascar-2022-wwtr',
    round: 15,
    name: 'Enjoy Illinois 300',
    circuitId: 'world-wide-technology-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-04T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Enjoy Illinois 300', startUtc: '2022-06-05T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2022-sonoma',
    round: 16,
    name: 'Toyota/Save Mart 350',
    circuitId: 'sonoma-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-11T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Toyota/Save Mart 350', startUtc: '2022-06-12T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2022-nashville',
    round: 17,
    name: 'Ally 400',
    circuitId: 'nashville-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-25T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Ally 400', startUtc: '2022-06-26T21:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2022-road-america',
    round: 18,
    name: 'Kwik Trip 250',
    circuitId: 'road-america',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-02T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Kwik Trip 250', startUtc: '2022-07-03T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2022-atlanta-2',
    round: 19,
    name: 'Quaker State 400',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-09T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Quaker State 400', startUtc: '2022-07-10T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2022-new-hampshire',
    round: 20,
    name: 'Ambetter 301',
    circuitId: 'new-hampshire-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-16T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Ambetter 301', startUtc: '2022-07-17T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2022-pocono',
    round: 21,
    name: "M&M's Fan Appreciation 400",
    circuitId: 'pocono-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-23T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: "M&M's Fan Appreciation 400", startUtc: '2022-07-24T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2022-indianapolis',
    round: 22,
    name: 'Verizon 200 at the Brickyard',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-30T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Verizon 200 at the Brickyard', startUtc: '2022-07-31T18:30:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-2022-michigan',
    round: 23,
    name: 'FireKeepers Casino 400',
    circuitId: 'michigan-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-08-06T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'FireKeepers Casino 400', startUtc: '2022-08-07T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2022-richmond-2',
    round: 24,
    name: 'Federated Auto Parts 400',
    circuitId: 'richmond-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-08-13T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Federated Auto Parts 400', startUtc: '2022-08-14T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2022-watkins-glen',
    round: 25,
    name: 'Go Bowling at The Glen',
    circuitId: 'watkins-glen-international',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-08-20T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Go Bowling at The Glen', startUtc: '2022-08-21T19:00:00Z', durationMinutes: 150 },
    ],
  },
  {
    id: 'nascar-2022-daytona-2',
    round: 26,
    name: 'Coke Zero Sugar 400',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-08-27T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Coke Zero Sugar 400', startUtc: '2022-08-27T23:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2022-darlington-2',
    round: 27,
    name: 'Cook Out Southern 500',
    circuitId: 'darlington-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-03T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Cook Out Southern 500', startUtc: '2022-09-04T22:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nascar-2022-kansas-2',
    round: 28,
    name: 'Hollywood Casino 400',
    circuitId: 'kansas-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-10T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Hollywood Casino 400', startUtc: '2022-09-11T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2022-bristol-night',
    round: 29,
    name: 'Bass Pro Shops Night Race',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-16T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Bass Pro Shops Night Race', startUtc: '2022-09-17T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2022-texas',
    round: 30,
    name: 'Autotrader EchoPark Automotive 500',
    circuitId: 'texas-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-24T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Autotrader EchoPark Automotive 500', startUtc: '2022-09-25T19:30:00Z', durationMinutes: 210 },
    ],
  },
  {
    id: 'nascar-2022-talladega-2',
    round: 31,
    name: 'YellaWood 500',
    circuitId: 'talladega-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-01T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'YellaWood 500', startUtc: '2022-10-02T18:00:00Z', durationMinutes: 200 },
    ],
  },
  {
    id: 'nascar-2022-charlotte-roval',
    round: 32,
    name: 'Bank of America ROVAL 400',
    circuitId: 'charlotte-motor-speedway-roval',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-08T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Bank of America ROVAL 400', startUtc: '2022-10-09T18:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2022-las-vegas-2',
    round: 33,
    name: 'South Point 400',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-15T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'South Point 400', startUtc: '2022-10-16T18:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2022-homestead',
    round: 34,
    name: 'Dixie Vodka 400',
    circuitId: 'homestead-miami-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-22T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Dixie Vodka 400', startUtc: '2022-10-23T18:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-2022-martinsville-2',
    round: 35,
    name: 'Xfinity 500',
    circuitId: 'martinsville-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-29T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Xfinity 500', startUtc: '2022-10-30T18:00:00Z', durationMinutes: 210 },
    ],
  },
  {
    id: 'nascar-2022-phoenix-championship',
    round: 36,
    name: 'NASCAR Cup Series Championship Race',
    circuitId: 'phoenix-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-11-05T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Championship Race', startUtc: '2022-11-06T20:00:00Z', durationMinutes: 180 },
    ],
  },
]
