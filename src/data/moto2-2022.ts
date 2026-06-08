import { RaceEvent } from '@/lib/types'

// Moto2 2022 calendar — 20 rounds, all session times in UTC
// Verified from Wikipedia "2022 Moto2 World Championship", motogp.com, per-Grand-Prix Wikipedia pages
// Standard 2022 Moto2 weekend: FP1 (Fri AM), FP2 (Fri PM), FP3 (Sat AM), Qualifying Q1+Q2 (Sat PM),
//   Warm-up (Sun AM), Race (Sun). Warm-up retained through 2023; abolished from 2024.
// Standard 2022 timetable (European): FP1 10:55, FP2 15:10, FP3 10:55, Qualifying 14:10, Warm-up 09:20, Race 12:20 local
// Champion: Augusto Fernández (Red Bull KTM Ajo) — title sealed at Valencia (Round 20)
// Verification date: 2026-06-07
export const moto22022: RaceEvent[] = [
  {
    id: 'moto2-2022-qatar',
    round: 1,
    name: 'Moto2 Qatar',
    circuitId: 'lusail-international-circuit',
    // Qatar AST (UTC+3); night race. Race 18:20 local = 15:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-03-04T12:45:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2022-03-04T17:05:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2022-03-05T12:20:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-03-05T16:25:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-03-06T13:10:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2022-03-06T15:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2022-indonesia',
    round: 2,
    name: 'Moto2 Indonesia',
    circuitId: 'mandalika-circuit',
    // Indonesia WITA (UTC+8). Race 13:20 local = 05:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-03-18T01:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2022-03-18T06:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2022-03-19T01:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-03-19T05:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-03-20T01:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2022-03-20T05:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2022-argentina',
    round: 3,
    name: 'Moto2 Argentina',
    circuitId: 'termas-de-rio-hondo',
    // Argentina ART (UTC-3). Race 12:20 local = 15:20 UTC. Friday FP cancelled by freight delay; condensed schedule
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-04-02T12:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2022-04-02T17:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2022-04-03T11:55:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-03T14:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-04-03T12:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2022-04-03T15:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2022-usa',
    round: 4,
    name: 'Moto2 Americas',
    circuitId: 'circuit-of-the-americas',
    // Austin CDT (UTC-5). Race 13:20 local = 18:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-04-08T15:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2022-04-08T20:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2022-04-09T15:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-09T19:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-04-10T14:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2022-04-10T18:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2022-portugal',
    round: 5,
    name: 'Moto2 Portugal',
    circuitId: 'algarve-international-circuit',
    // Portugal WEST (UTC+1) in April. Race 12:20 local = 11:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-04-22T09:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2022-04-22T14:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2022-04-23T09:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-23T13:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-04-24T09:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2022-04-24T11:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2022-spain',
    round: 6,
    name: 'Moto2 Spain',
    circuitId: 'circuito-de-jerez',
    // Spain CEST (UTC+2). Race 12:20 local = 10:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-04-29T08:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2022-04-29T13:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2022-04-30T08:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-30T12:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-05-01T08:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2022-05-01T10:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2022-france',
    round: 7,
    name: 'Moto2 France',
    circuitId: 'bugatti-circuit',
    // France CEST (UTC+2). Race 12:20 local = 10:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-05-13T08:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2022-05-13T13:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2022-05-14T08:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-14T12:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-05-15T08:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2022-05-15T10:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2022-italy',
    round: 8,
    name: 'Moto2 Italy',
    circuitId: 'autodromo-del-mugello',
    // Italy CEST (UTC+2). Race 12:20 local = 10:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-05-27T08:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2022-05-27T13:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2022-05-28T08:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-28T12:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-05-29T07:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2022-05-29T10:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2022-catalunya',
    round: 9,
    name: 'Moto2 Catalunya',
    circuitId: 'circuit-de-barcelona-catalunya',
    // Spain CEST (UTC+2). Race 12:20 local = 10:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-06-03T08:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2022-06-03T13:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2022-06-04T08:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-04T12:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-06-05T07:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2022-06-05T10:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2022-germany',
    round: 10,
    name: 'Moto2 Germany',
    circuitId: 'sachsenring',
    // Germany CEST (UTC+2). Race 12:20 local = 10:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-06-17T08:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2022-06-17T13:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2022-06-18T08:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-18T12:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-06-19T07:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2022-06-19T10:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2022-netherlands',
    round: 11,
    name: 'Moto2 Netherlands',
    circuitId: 'tt-circuit-assen',
    // Netherlands CEST (UTC+2). Race 12:20 local = 10:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-06-24T08:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2022-06-24T13:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2022-06-25T08:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-25T12:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-06-26T07:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2022-06-26T10:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2022-great-britain',
    round: 12,
    name: 'Moto2 Great Britain',
    circuitId: 'silverstone-circuit',
    // UK BST (UTC+1). Race 14:30 local = 13:30 UTC (shifted later for British GP)
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-08-05T09:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2022-08-05T14:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2022-08-06T09:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-08-06T13:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-08-07T08:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2022-08-07T13:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2022-austria',
    round: 13,
    name: 'Moto2 Austria',
    circuitId: 'red-bull-ring',
    // Austria CEST (UTC+2). Race 12:20 local = 10:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-08-19T08:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2022-08-19T13:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2022-08-20T08:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-08-20T12:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-08-21T07:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2022-08-21T10:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2022-san-marino',
    round: 14,
    name: 'Moto2 San Marino',
    circuitId: 'misano-world-circuit',
    // Italy CEST (UTC+2). Race 12:20 local = 10:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-09-02T08:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2022-09-02T13:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2022-09-03T08:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-03T12:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-09-04T07:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2022-09-04T10:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2022-aragon',
    round: 15,
    name: 'Moto2 Aragon',
    circuitId: 'motorland-aragon',
    // Spain CEST (UTC+2). Race 12:20 local = 10:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-09-16T08:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2022-09-16T13:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2022-09-17T08:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-17T12:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-09-18T07:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2022-09-18T10:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2022-japan',
    round: 16,
    name: 'Moto2 Japan',
    circuitId: 'twin-ring-motegi',
    // Japan JST (UTC+9). Race 13:20 local = 04:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-09-23T01:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2022-09-23T06:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2022-09-24T01:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-24T05:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-09-25T00:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2022-09-25T04:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2022-thailand',
    round: 17,
    name: 'Moto2 Thailand',
    circuitId: 'chang-international-circuit',
    // Thailand ICT (UTC+7). Race 13:20 local = 06:20 UTC. Race red-flagged for rain, half points awarded
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-09-30T02:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2022-09-30T07:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2022-10-01T02:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-01T06:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-10-02T02:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2022-10-02T06:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2022-australia',
    round: 18,
    name: 'Moto2 Australia',
    circuitId: 'phillip-island-grand-prix-circuit',
    // Australia AEDT (UTC+11). Race 12:20 local = 01:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-10-13T23:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2022-10-14T04:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2022-10-14T23:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-15T03:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-10-15T22:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2022-10-16T01:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2022-malaysia',
    round: 19,
    name: 'Moto2 Malaysia',
    circuitId: 'sepang-international-circuit',
    // Malaysia MYT (UTC+8). Race 13:20 local = 05:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-10-21T02:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2022-10-21T07:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2022-10-22T02:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-22T06:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-10-23T01:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2022-10-23T05:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2022-valencia',
    round: 20,
    name: 'Moto2 Valencia',
    circuitId: 'circuit-ricardo-tormo',
    // Spain CET (UTC+1) after DST end. Race 12:20 local = 11:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-11-04T08:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2022-11-04T13:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2022-11-05T08:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-11-05T12:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-11-06T08:20:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2022-11-06T11:20:00Z', durationMinutes: 45 },
    ],
  },
]
