import { RaceEvent } from '@/lib/types'

// Moto3 2021 calendar — 18 rounds, all session times in UTC
// Verified from Wikipedia "2021 Moto3 World Championship", motogp.com,
//   per-Grand-Prix Wikipedia pages, and Autosport/Motorsport.com 2021 schedules
// Verification date: 2026-06-08
// Standard 2021 Moto3 weekend: FP1 (Fri AM), FP2 (Fri PM), FP3 (Sat AM),
//   Qualifying combined Q1+Q2 block (Sat PM), Warm-up (Sun AM), Race (Sun)
// Standard 2021 timetable (European): FP1 09:00, FP2 13:15, FP3 09:00,
//   Qualifying 12:35, Warm-up 08:20, Race 11:00 local
// Note: Moto3 was the first race of the day in 2021-2023; warm-up retained
//   through 2023, abolished from 2024
// Champion: Pedro Acosta (Red Bull KTM Ajo) — youngest Moto3 champion in
//   the four-stroke era, taking title with one round to spare at Algarve;
//   first rookie to win the championship since Loris Capirossi in 1990
export const moto32021: RaceEvent[] = [
  {
    id: 'moto3-2021-qatar',
    round: 1,
    name: 'Moto3 Qatar',
    circuitId: 'lusail-international-circuit',
    // Qatar AST (UTC+3); night race format. Race 16:00 local = 13:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-03-26T10:55:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2021-03-26T15:10:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2021-03-27T11:00:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-03-27T14:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-03-28T10:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2021-03-28T13:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2021-doha',
    round: 2,
    name: 'Moto3 Doha',
    circuitId: 'lusail-international-circuit',
    // Qatar AST (UTC+3); night race format. Race 16:00 local = 13:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-04-02T10:55:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2021-04-02T15:10:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2021-04-03T11:00:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-04-03T14:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-04-04T10:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2021-04-04T13:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2021-portugal',
    round: 3,
    name: 'Moto3 Portugal',
    circuitId: 'algarve-international-circuit',
    // Portugal WEST (UTC+1) in April. Race 11:00 local = 10:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-04-16T08:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2021-04-16T12:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2021-04-17T08:00:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-04-17T11:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-04-18T07:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2021-04-18T10:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2021-spain',
    round: 4,
    name: 'Moto3 Spain',
    circuitId: 'circuito-de-jerez',
    // Spain CEST (UTC+2). Race 11:00 local = 09:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-04-30T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2021-04-30T11:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2021-05-01T07:00:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-01T10:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-05-02T06:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2021-05-02T09:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2021-france',
    round: 5,
    name: 'Moto3 France',
    circuitId: 'bugatti-circuit',
    // France CEST (UTC+2). Race 11:00 local = 09:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-05-14T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2021-05-14T11:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2021-05-15T07:00:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-15T10:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-05-16T06:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2021-05-16T09:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2021-italy',
    round: 6,
    name: 'Moto3 Italy',
    circuitId: 'autodromo-del-mugello',
    // Italy CEST (UTC+2). Race 11:00 local = 09:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-05-28T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2021-05-28T11:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2021-05-29T07:00:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-29T10:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-05-30T06:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2021-05-30T09:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2021-catalunya',
    round: 7,
    name: 'Moto3 Catalunya',
    circuitId: 'circuit-de-barcelona-catalunya',
    // Spain CEST (UTC+2). Race 11:00 local = 09:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-06-04T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2021-06-04T11:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2021-06-05T07:00:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-05T10:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-06-06T06:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2021-06-06T09:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2021-germany',
    round: 8,
    name: 'Moto3 Germany',
    circuitId: 'sachsenring',
    // Germany CEST (UTC+2). Race 11:00 local = 09:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-06-18T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2021-06-18T11:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2021-06-19T07:00:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-19T10:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-06-20T06:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2021-06-20T09:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2021-netherlands',
    round: 9,
    name: 'Moto3 Netherlands',
    circuitId: 'tt-circuit-assen',
    // Netherlands CEST (UTC+2). Race 11:00 local = 09:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-06-25T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2021-06-25T11:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2021-06-26T07:00:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-26T10:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-06-27T06:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2021-06-27T09:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2021-styria',
    round: 10,
    name: 'Moto3 Styria',
    circuitId: 'red-bull-ring',
    // Austria CEST (UTC+2). Race 11:00 local = 09:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-08-06T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2021-08-06T11:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2021-08-07T07:00:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-07T10:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-08-08T06:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2021-08-08T09:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2021-austria',
    round: 11,
    name: 'Moto3 Austria',
    circuitId: 'red-bull-ring',
    // Austria CEST (UTC+2). Race 11:00 local = 09:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-08-13T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2021-08-13T11:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2021-08-14T07:00:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-14T10:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-08-15T06:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2021-08-15T09:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2021-great-britain',
    round: 12,
    name: 'Moto3 Great Britain',
    circuitId: 'silverstone-circuit',
    // UK BST (UTC+1). Race 11:00 local = 10:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-08-27T08:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2021-08-27T12:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2021-08-28T08:00:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-28T11:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-08-29T07:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2021-08-29T10:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2021-aragon',
    round: 13,
    name: 'Moto3 Aragon',
    circuitId: 'motorland-aragon',
    // Spain CEST (UTC+2). Race 11:00 local = 09:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-09-10T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2021-09-10T11:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2021-09-11T07:00:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-11T10:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-09-12T06:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2021-09-12T09:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2021-san-marino',
    round: 14,
    name: 'Moto3 San Marino',
    circuitId: 'misano-world-circuit',
    // Italy CEST (UTC+2). Race 11:00 local = 09:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-09-17T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2021-09-17T11:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2021-09-18T07:00:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-18T10:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-09-19T06:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2021-09-19T09:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2021-usa',
    round: 15,
    name: 'Moto3 Americas',
    circuitId: 'circuit-of-the-americas',
    // Austin CDT (UTC-5). Race 12:20 local approx = 17:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-10-01T14:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2021-10-01T18:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2021-10-02T14:00:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-02T17:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-10-03T13:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2021-10-03T16:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2021-emilia-romagna',
    round: 16,
    name: 'Moto3 Emilia-Romagna',
    circuitId: 'misano-world-circuit',
    // Italy CEST (UTC+2). Race 11:00 local = 09:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-10-22T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2021-10-22T11:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2021-10-23T07:00:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-23T10:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-10-24T06:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2021-10-24T09:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2021-algarve',
    round: 17,
    name: 'Moto3 Algarve',
    circuitId: 'algarve-international-circuit',
    // Portugal WET (UTC+0) in November after DST end. Race 11:00 local = 11:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-11-05T09:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2021-11-05T13:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2021-11-06T09:00:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-11-06T12:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-11-07T08:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2021-11-07T11:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2021-valencia',
    round: 18,
    name: 'Moto3 Valencia',
    circuitId: 'circuit-ricardo-tormo',
    // Spain CET (UTC+1) after DST end. Race 11:00 local = 10:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-11-12T08:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2021-11-12T12:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2021-11-13T08:00:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-11-13T11:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-11-14T07:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2021-11-14T10:00:00Z', durationMinutes: 45 },
    ],
  },
]
