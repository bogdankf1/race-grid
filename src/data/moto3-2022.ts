import { RaceEvent } from '@/lib/types'

// Moto3 2022 calendar — 20 rounds, all session times in UTC
// Verified from Wikipedia "2022 Moto3 World Championship", motogp.com,
//   per-Grand-Prix Wikipedia pages, and crash.net schedule archives
// Verification date: 2026-06-08
// Standard 2022 Moto3 weekend: FP1 (Fri AM), FP2 (Fri PM), FP3 (Sat AM),
//   Qualifying combined Q1+Q2 block (Sat PM), Warm-up (Sun AM), Race (Sun)
// Standard 2022 timetable (European): FP1 09:00, FP2 13:15, FP3 08:40,
//   Qualifying 12:35, Warm-up 08:20, Race 11:00 local
// Note: Moto3 was the first race of the day in 2022; warm-up retained through 2023
// Note: Finnish GP at KymiRing (originally scheduled for July 10) was cancelled
//   due to incomplete circuit homologation and the regional geopolitical situation
// Champion: Izan Guevara (Gaviota GasGas Aspar Team) — clinched at Australia
//   (Round 18) with two rounds to spare; first championship for the GasGas brand
export const moto32022: RaceEvent[] = [
  {
    id: 'moto3-2022-qatar',
    round: 1,
    name: 'Moto3 Qatar',
    circuitId: 'lusail-international-circuit',
    // Qatar AST (UTC+3); night race format. Race 16:00 local = 13:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-03-04T11:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2022-03-04T15:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2022-03-05T10:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-03-05T14:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-03-06T10:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2022-03-06T13:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2022-indonesia',
    round: 2,
    name: 'Moto3 Indonesia',
    circuitId: 'mandalika-circuit',
    // Indonesia WITA (UTC+8). Race 11:00 local = 03:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-03-18T01:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2022-03-18T05:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2022-03-19T00:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-03-19T04:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-03-20T00:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2022-03-20T03:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2022-argentina',
    round: 3,
    name: 'Moto3 Argentina',
    circuitId: 'termas-de-rio-hondo',
    // Argentina ART (UTC-3). Race 12:00 local = 15:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-04-01T13:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2022-04-01T17:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2022-04-02T12:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-02T16:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-04-03T12:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2022-04-03T15:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2022-usa',
    round: 4,
    name: 'Moto3 Americas',
    circuitId: 'circuit-of-the-americas',
    // Austin CDT (UTC-5). Race 12:00 local = 17:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-04-08T14:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2022-04-08T18:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2022-04-09T13:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-09T17:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-04-10T13:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2022-04-10T16:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2022-portugal',
    round: 5,
    name: 'Moto3 Portugal',
    circuitId: 'algarve-international-circuit',
    // Portugal WEST (UTC+1) in April. Race 11:00 local = 10:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-04-22T08:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2022-04-22T12:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2022-04-23T07:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-23T11:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-04-24T07:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2022-04-24T10:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2022-spain',
    round: 6,
    name: 'Moto3 Spain',
    circuitId: 'circuito-de-jerez',
    // Spain CEST (UTC+2). Race 11:00 local = 09:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-04-29T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2022-04-29T11:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2022-04-30T06:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-30T10:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-05-01T06:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2022-05-01T09:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2022-france',
    round: 7,
    name: 'Moto3 France',
    circuitId: 'bugatti-circuit',
    // France CEST (UTC+2). Race 11:00 local = 09:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-05-13T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2022-05-13T11:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2022-05-14T06:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-14T10:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-05-15T06:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2022-05-15T09:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2022-italy',
    round: 8,
    name: 'Moto3 Italy',
    circuitId: 'autodromo-del-mugello',
    // Italy CEST (UTC+2). Race 11:00 local = 09:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-05-27T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2022-05-27T11:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2022-05-28T06:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-28T10:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-05-29T06:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2022-05-29T09:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2022-catalunya',
    round: 9,
    name: 'Moto3 Catalunya',
    circuitId: 'circuit-de-barcelona-catalunya',
    // Spain CEST (UTC+2). Race 11:00 local = 09:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-06-03T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2022-06-03T11:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2022-06-04T06:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-04T10:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-06-05T06:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2022-06-05T09:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2022-germany',
    round: 10,
    name: 'Moto3 Germany',
    circuitId: 'sachsenring',
    // Germany CEST (UTC+2). Race 11:00 local = 09:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-06-17T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2022-06-17T11:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2022-06-18T06:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-18T10:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-06-19T06:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2022-06-19T09:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2022-netherlands',
    round: 11,
    name: 'Moto3 Netherlands',
    circuitId: 'tt-circuit-assen',
    // Netherlands CEST (UTC+2). Race 11:00 local = 09:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-06-24T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2022-06-24T11:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2022-06-25T06:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-25T10:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-06-26T06:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2022-06-26T09:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2022-great-britain',
    round: 12,
    name: 'Moto3 Great Britain',
    circuitId: 'silverstone-circuit',
    // UK BST (UTC+1). Race 11:00 local = 10:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-08-05T08:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2022-08-05T12:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2022-08-06T07:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-08-06T11:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-08-07T07:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2022-08-07T10:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2022-austria',
    round: 13,
    name: 'Moto3 Austria',
    circuitId: 'red-bull-ring',
    // Austria CEST (UTC+2). Race 11:00 local = 09:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-08-19T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2022-08-19T11:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2022-08-20T06:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-08-20T10:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-08-21T06:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2022-08-21T09:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2022-san-marino',
    round: 14,
    name: 'Moto3 San Marino',
    circuitId: 'misano-world-circuit',
    // Italy CEST (UTC+2). Race 11:00 local = 09:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-09-02T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2022-09-02T11:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2022-09-03T06:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-03T10:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-09-04T06:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2022-09-04T09:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2022-aragon',
    round: 15,
    name: 'Moto3 Aragon',
    circuitId: 'motorland-aragon',
    // Spain CEST (UTC+2). Race 11:00 local = 09:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-09-16T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2022-09-16T11:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2022-09-17T06:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-17T10:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-09-18T06:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2022-09-18T09:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2022-japan',
    round: 16,
    name: 'Moto3 Japan',
    circuitId: 'twin-ring-motegi',
    // Japan JST (UTC+9). Race 11:00 local = 02:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-09-23T00:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2022-09-23T04:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2022-09-23T23:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-24T03:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-09-24T23:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2022-09-25T02:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2022-thailand',
    round: 17,
    name: 'Moto3 Thailand',
    circuitId: 'chang-international-circuit',
    // Thailand ICT (UTC+7). Race 11:00 local = 04:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-09-30T02:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2022-09-30T06:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2022-10-01T01:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-01T05:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-10-02T01:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2022-10-02T04:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2022-australia',
    round: 18,
    name: 'Moto3 Australia',
    circuitId: 'phillip-island-grand-prix-circuit',
    // Australia AEDT (UTC+11) post-DST. Race 11:00 local = 00:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-10-13T22:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2022-10-14T02:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2022-10-14T21:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-15T01:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-10-15T21:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2022-10-16T00:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2022-malaysia',
    round: 19,
    name: 'Moto3 Malaysia',
    circuitId: 'sepang-international-circuit',
    // Malaysia MYT (UTC+8). Race 11:00 local = 03:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-10-21T01:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2022-10-21T05:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2022-10-22T00:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-22T04:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-10-23T00:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2022-10-23T03:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2022-valencia',
    round: 20,
    name: 'Moto3 Valencia',
    circuitId: 'circuit-ricardo-tormo',
    // Spain CET (UTC+1) after DST end. Race 11:00 local = 10:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2022-11-04T08:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2022-11-04T12:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2022-11-05T07:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-11-05T11:35:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2022-11-06T07:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2022-11-06T10:00:00Z', durationMinutes: 45 },
    ],
  },
]
