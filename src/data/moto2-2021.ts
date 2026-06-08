import { RaceEvent } from '@/lib/types'

// Moto2 2021 calendar — 18 rounds, all session times in UTC
// Verified from Wikipedia "2021 Moto2 World Championship", motogp.com, crash.net (session schedules),
//   per-Grand-Prix Wikipedia pages.
// Standard 2021 Moto2 weekend: FP1 (Fri AM), FP2 (Fri PM), FP3 (Sat AM), Qualifying Q1+Q2 (Sat PM),
//   Warm-up (Sun AM), Race (Sun). Warm-up was retained through 2023; abolished from 2024.
// Standard non-night-race times: FP1 09:55, FP2 14:10, FP3 09:55, Qualifying 13:10, Warm-up 09:20, Race 12:20 local
// Champion: Remy Gardner (Red Bull KTM Ajo) — title sealed at Valencia (Round 18)
// Verification date: 2026-06-07
export const moto22021: RaceEvent[] = [
  {
    id: 'moto2-2021-qatar',
    round: 1,
    name: 'Moto2 Qatar',
    circuitId: 'lusail-international-circuit',
    // Qatar AST (UTC+3); night race weekend. Race 18:20 local = 15:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-03-26T11:45:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2021-03-26T16:05:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2021-03-27T11:20:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-03-27T15:25:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-03-28T12:10:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2021-03-28T15:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2021-doha',
    round: 2,
    name: 'Moto2 Doha',
    circuitId: 'lusail-international-circuit',
    // Qatar AST (UTC+3); night race. Race 18:20 local = 15:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-04-02T11:45:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2021-04-02T16:05:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2021-04-03T11:20:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-04-03T15:25:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-04-04T12:10:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2021-04-04T15:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2021-portugal',
    round: 3,
    name: 'Moto2 Portugal',
    circuitId: 'algarve-international-circuit',
    // Portugal WEST (UTC+1) in April. Race 12:20 local = 11:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-04-16T08:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2021-04-16T13:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2021-04-17T08:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-04-17T12:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-04-18T08:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2021-04-18T11:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2021-spain',
    round: 4,
    name: 'Moto2 Spain',
    circuitId: 'circuito-de-jerez',
    // Spain CEST (UTC+2). Race 12:20 local = 10:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-04-30T07:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2021-04-30T12:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2021-05-01T07:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-01T11:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-05-02T07:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2021-05-02T10:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2021-france',
    round: 5,
    name: 'Moto2 France',
    circuitId: 'bugatti-circuit',
    // France CEST (UTC+2). Race 12:20 local = 10:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-05-14T07:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2021-05-14T12:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2021-05-15T07:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-15T11:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-05-16T07:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2021-05-16T10:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2021-italy',
    round: 6,
    name: 'Moto2 Italy',
    circuitId: 'autodromo-del-mugello',
    // Italy CEST (UTC+2). Race 12:20 local = 10:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-05-28T07:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2021-05-28T12:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2021-05-29T07:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-29T11:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-05-30T07:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2021-05-30T10:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2021-catalunya',
    round: 7,
    name: 'Moto2 Catalunya',
    circuitId: 'circuit-de-barcelona-catalunya',
    // Spain CEST (UTC+2). Race 12:20 local = 10:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-06-04T07:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2021-06-04T12:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2021-06-05T07:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-05T11:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-06-06T07:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2021-06-06T10:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2021-germany',
    round: 8,
    name: 'Moto2 Germany',
    circuitId: 'sachsenring',
    // Germany CEST (UTC+2). Race 12:20 local = 10:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-06-18T07:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2021-06-18T12:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2021-06-19T07:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-19T11:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-06-20T07:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2021-06-20T10:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2021-netherlands',
    round: 9,
    name: 'Moto2 Netherlands',
    circuitId: 'tt-circuit-assen',
    // Netherlands CEST (UTC+2). Race 12:20 local = 10:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-06-25T07:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2021-06-25T12:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2021-06-26T07:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-26T11:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-06-27T07:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2021-06-27T10:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2021-styria',
    round: 10,
    name: 'Moto2 Styria',
    circuitId: 'red-bull-ring',
    // Austria CEST (UTC+2). Race 12:20 local = 10:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-08-06T07:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2021-08-06T12:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2021-08-07T07:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-07T11:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-08-08T07:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2021-08-08T10:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2021-austria',
    round: 11,
    name: 'Moto2 Austria',
    circuitId: 'red-bull-ring',
    // Austria CEST (UTC+2). Race 12:20 local = 10:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-08-13T07:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2021-08-13T12:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2021-08-14T07:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-14T11:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-08-15T07:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2021-08-15T10:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2021-great-britain',
    round: 12,
    name: 'Moto2 Great Britain',
    circuitId: 'silverstone-circuit',
    // UK BST (UTC+1). Race 14:30 local = 13:30 UTC (shifted later for British GP)
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-08-27T08:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2021-08-27T13:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2021-08-28T08:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-28T12:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-08-29T08:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2021-08-29T13:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2021-aragon',
    round: 13,
    name: 'Moto2 Aragon',
    circuitId: 'motorland-aragon',
    // Spain CEST (UTC+2). Race 12:20 local = 10:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-09-10T07:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2021-09-10T12:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2021-09-11T07:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-11T11:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-09-12T07:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2021-09-12T10:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2021-san-marino',
    round: 14,
    name: 'Moto2 San Marino',
    circuitId: 'misano-world-circuit',
    // Italy CEST (UTC+2). Race 12:20 local = 10:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-09-17T07:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2021-09-17T12:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2021-09-18T07:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-18T11:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-09-19T07:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2021-09-19T10:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2021-usa',
    round: 15,
    name: 'Moto2 Americas',
    circuitId: 'circuit-of-the-americas',
    // Austin CDT (UTC-5). Race 12:20 local = 17:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-10-01T14:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2021-10-01T19:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2021-10-02T14:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-02T18:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-10-03T14:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2021-10-03T17:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2021-emilia-romagna',
    round: 16,
    name: 'Moto2 Emilia-Romagna',
    circuitId: 'misano-world-circuit',
    // Italy CEST (UTC+2). Race 12:20 local = 10:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-10-22T07:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2021-10-22T12:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2021-10-23T07:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-23T11:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-10-24T07:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2021-10-24T10:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2021-algarve',
    round: 17,
    name: 'Moto2 Algarve',
    circuitId: 'algarve-international-circuit',
    // Portugal WET (UTC+0) after DST end. Race 12:20 local = 12:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-11-05T09:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2021-11-05T14:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2021-11-06T09:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-11-06T13:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-11-07T09:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2021-11-07T12:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2021-valencia',
    round: 18,
    name: 'Moto2 Valencia',
    circuitId: 'circuit-ricardo-tormo',
    // Spain CET (UTC+1) after DST end. Race 12:20 local = 11:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2021-11-12T08:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2021-11-12T13:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2021-11-13T08:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-11-13T12:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2021-11-14T08:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2021-11-14T11:20:00Z', durationMinutes: 45 },
    ],
  },
]
