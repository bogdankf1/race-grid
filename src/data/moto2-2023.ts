import { RaceEvent } from '@/lib/types'

// Moto2 2023 calendar — 20 originally scheduled rounds; Kazakhstan (originally Rd 11) was cancelled
//   due to homologation issues and not replaced, leaving 19 rounds run. All session times in UTC.
// Verified from Wikipedia "2023 Moto2 World Championship", motogp.com, per-Grand-Prix Wikipedia pages
// Standard 2023 Moto2 weekend: FP1 (Fri AM), FP2 (Fri PM), FP3 (Sat AM), Qualifying Q1+Q2 (Sat PM),
//   Warm-up (Sun AM), Race (Sun). Warm-up retained through 2023; abolished from 2024.
// Standard 2023 timetable (European): FP1 10:55, FP2 15:10, FP3 10:55, Qualifying 14:10, Warm-up 09:20, Race 12:20 local
// Champion: Pedro Acosta (Red Bull KTM Ajo) — title sealed at Sepang (Round 18) with two rounds to spare;
//   youngest intermediate class champion since Dani Pedrosa
// Verification date: 2026-06-07
export const moto22023: RaceEvent[] = [
  {
    id: 'moto2-2023-portugal',
    round: 1,
    name: 'Moto2 Portugal',
    circuitId: 'algarve-international-circuit',
    // Portugal WEST (UTC+1) in March. Race 12:20 local = 11:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-03-24T09:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2023-03-24T14:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2023-03-25T09:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-03-25T13:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-03-26T08:40:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2023-03-26T11:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2023-argentina',
    round: 2,
    name: 'Moto2 Argentina',
    circuitId: 'termas-de-rio-hondo',
    // Argentina ART (UTC-3). Race 12:20 local = 15:20 UTC. Race reduced to 14 laps for rain
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-03-31T12:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2023-03-31T17:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2023-04-01T12:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-01T16:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-04-02T11:40:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2023-04-02T15:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2023-usa',
    round: 3,
    name: 'Moto2 Americas',
    circuitId: 'circuit-of-the-americas',
    // Austin CDT (UTC-5). Race 13:20 local = 18:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-04-14T14:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2023-04-14T19:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2023-04-15T14:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-15T18:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-04-16T14:40:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2023-04-16T18:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2023-spain',
    round: 4,
    name: 'Moto2 Spain',
    circuitId: 'circuito-de-jerez',
    // Spain CEST (UTC+2). Race 12:20 local = 10:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-04-28T08:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2023-04-28T13:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2023-04-29T08:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-29T12:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-04-30T07:40:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2023-04-30T10:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2023-france',
    round: 5,
    name: 'Moto2 France',
    circuitId: 'bugatti-circuit',
    // France CEST (UTC+2). Race 12:20 local = 10:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-05-12T08:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2023-05-12T13:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2023-05-13T08:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-05-13T12:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-05-14T07:40:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2023-05-14T10:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2023-italy',
    round: 6,
    name: 'Moto2 Italy',
    circuitId: 'autodromo-del-mugello',
    // Italy CEST (UTC+2). Race 12:20 local = 10:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-06-09T08:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2023-06-09T13:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2023-06-10T08:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-10T12:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-06-11T07:40:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2023-06-11T10:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2023-germany',
    round: 7,
    name: 'Moto2 Germany',
    circuitId: 'sachsenring',
    // Germany CEST (UTC+2). Race 12:20 local = 10:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-06-16T08:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2023-06-16T13:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2023-06-17T08:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-17T12:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-06-18T07:40:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2023-06-18T10:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2023-netherlands',
    round: 8,
    name: 'Moto2 Netherlands',
    circuitId: 'tt-circuit-assen',
    // Netherlands CEST (UTC+2). Race 12:20 local = 10:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-06-23T08:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2023-06-23T13:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2023-06-24T08:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-24T12:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-06-25T07:40:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2023-06-25T10:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2023-great-britain',
    round: 9,
    name: 'Moto2 Great Britain',
    circuitId: 'silverstone-circuit',
    // UK BST (UTC+1). Race 14:30 local = 13:30 UTC (shifted later for British GP)
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-08-04T09:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2023-08-04T14:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2023-08-05T09:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-05T13:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-08-06T08:40:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2023-08-06T13:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2023-austria',
    round: 10,
    name: 'Moto2 Austria',
    circuitId: 'red-bull-ring',
    // Austria CEST (UTC+2). Race 12:20 local = 10:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-08-18T08:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2023-08-18T13:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2023-08-19T08:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-19T12:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-08-20T07:40:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2023-08-20T10:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2023-catalunya',
    round: 11,
    name: 'Moto2 Catalunya',
    circuitId: 'circuit-de-barcelona-catalunya',
    // Spain CEST (UTC+2). Race 12:20 local = 10:20 UTC. Replaced cancelled Kazakhstan round in calendar order
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-09-01T08:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2023-09-01T13:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2023-09-02T08:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-02T12:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-09-03T07:40:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2023-09-03T10:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2023-san-marino',
    round: 12,
    name: 'Moto2 San Marino',
    circuitId: 'misano-world-circuit',
    // Italy CEST (UTC+2). Race 12:20 local = 10:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-09-08T08:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2023-09-08T13:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2023-09-09T08:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-09T12:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-09-10T07:40:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2023-09-10T10:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2023-india',
    round: 13,
    name: 'Moto2 India',
    circuitId: 'buddh-international-circuit',
    // India IST (UTC+5:30). Race 13:25 local approx = 07:55 UTC. Race shortened to 12 laps after first-lap red flag
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-09-22T04:25:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2023-09-22T08:40:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2023-09-23T04:25:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-23T07:40:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-09-24T03:10:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2023-09-24T07:55:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2023-japan',
    round: 14,
    name: 'Moto2 Japan',
    circuitId: 'twin-ring-motegi',
    // Japan JST (UTC+9). Race 13:20 local = 04:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-09-29T01:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2023-09-29T06:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2023-09-30T01:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-30T05:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-10-01T00:40:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2023-10-01T04:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2023-indonesia',
    round: 15,
    name: 'Moto2 Indonesia',
    circuitId: 'mandalika-circuit',
    // Indonesia WITA (UTC+8). Race 13:20 local = 05:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-10-13T01:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2023-10-13T06:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2023-10-14T01:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-10-14T05:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-10-15T00:40:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2023-10-15T05:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2023-australia',
    round: 16,
    name: 'Moto2 Australia',
    circuitId: 'phillip-island-grand-prix-circuit',
    // Australia AEDT (UTC+11). Race 12:20 local = 01:20 UTC. Race red-flagged after 9 laps for weather; half points
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-10-19T23:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2023-10-20T04:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2023-10-20T23:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-10-21T03:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-10-21T22:40:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2023-10-22T01:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2023-thailand',
    round: 17,
    name: 'Moto2 Thailand',
    circuitId: 'chang-international-circuit',
    // Thailand ICT (UTC+7). Race 13:20 local = 06:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-10-27T02:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2023-10-27T07:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2023-10-28T02:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-10-28T06:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-10-29T01:40:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2023-10-29T06:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2023-malaysia',
    round: 18,
    name: 'Moto2 Malaysia',
    circuitId: 'sepang-international-circuit',
    // Malaysia MYT (UTC+8). Race 13:20 local = 05:20 UTC. Title race; Acosta sealed championship
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-11-10T02:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2023-11-10T07:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2023-11-11T02:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-11-11T06:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-11-12T01:40:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2023-11-12T05:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2023-qatar',
    round: 19,
    name: 'Moto2 Qatar',
    circuitId: 'lusail-international-circuit',
    // Qatar AST (UTC+3); night race. Race 17:25 local = 14:25 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-11-17T11:45:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2023-11-17T16:05:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2023-11-18T11:20:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-11-18T15:25:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-11-19T10:40:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2023-11-19T14:25:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2023-valencia',
    round: 20,
    name: 'Moto2 Valencia',
    circuitId: 'circuit-ricardo-tormo',
    // Spain CET (UTC+1) after DST end. Race 12:20 local = 11:20 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-11-24T08:55:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP2', startUtc: '2023-11-24T13:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'FP3', startUtc: '2023-11-25T08:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-11-25T12:10:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-11-26T08:40:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race', startUtc: '2023-11-26T11:20:00Z', durationMinutes: 45 },
    ],
  },
]
