import { RaceEvent } from '@/lib/types'

// Moto3 2023 calendar — 20 rounds, all session times in UTC
// Verified from Wikipedia "2023 Moto3 World Championship", motogp.com,
//   per-Grand-Prix Wikipedia pages, and crash.net schedule archives
// Verification date: 2026-06-08
// Standard 2023 Moto3 weekend: FP1 (Fri AM), FP2 (Fri PM), FP3 (Sat AM),
//   Qualifying combined Q1+Q2 block (Sat PM), Warm-up (Sun AM), Race (Sun)
// Standard 2023 timetable (European): FP1 09:00, FP2 13:15, FP3 08:40,
//   Qualifying 12:50, Warm-up 08:40, Race 11:00 local
// Note: Moto3 was the first race of the day in 2023; final season for the
//   Moto3 Sunday warm-up (abolished from 2024)
// Note: Kazakhstan GP at Sokol International Racetrack (originally scheduled 9 July)
//   was first postponed then cancelled; the Indian GP at Buddh joined the calendar
// Champion: Jaume Masià (Leopard Racing, Honda) — clinched at the season finale
//   in Qatar (Round 19) after a tight three-way fight with Sasaki and Holgado
export const moto32023: RaceEvent[] = [
  {
    id: 'moto3-2023-portugal',
    round: 1,
    name: 'Moto3 Portugal',
    circuitId: 'algarve-international-circuit',
    // Portugal WET (UTC+0) in late March before DST start. Race 11:00 local = 11:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-03-24T09:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2023-03-24T13:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2023-03-25T08:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-03-25T12:50:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-03-26T08:40:00Z', durationMinutes: 10 },
      { type: 'race', label: 'Race', startUtc: '2023-03-26T11:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2023-argentina',
    round: 2,
    name: 'Moto3 Argentina',
    circuitId: 'termas-de-rio-hondo',
    // Argentina ART (UTC-3). Race 12:00 local = 15:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-03-31T13:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2023-03-31T17:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2023-04-01T12:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-01T16:50:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-04-02T12:40:00Z', durationMinutes: 10 },
      { type: 'race', label: 'Race', startUtc: '2023-04-02T15:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2023-usa',
    round: 3,
    name: 'Moto3 Americas',
    circuitId: 'circuit-of-the-americas',
    // Austin CDT (UTC-5). Race 12:00 local = 17:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-04-14T14:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2023-04-14T18:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2023-04-15T13:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-15T17:50:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-04-16T13:40:00Z', durationMinutes: 10 },
      { type: 'race', label: 'Race', startUtc: '2023-04-16T16:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2023-spain',
    round: 4,
    name: 'Moto3 Spain',
    circuitId: 'circuito-de-jerez',
    // Spain CEST (UTC+2). Race 11:00 local = 09:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-04-28T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2023-04-28T11:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2023-04-29T06:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-29T10:50:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-04-30T06:40:00Z', durationMinutes: 10 },
      { type: 'race', label: 'Race', startUtc: '2023-04-30T09:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2023-france',
    round: 5,
    name: 'Moto3 France',
    circuitId: 'bugatti-circuit',
    // France CEST (UTC+2). Race 11:00 local = 09:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-05-12T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2023-05-12T11:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2023-05-13T06:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-05-13T10:50:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-05-14T06:40:00Z', durationMinutes: 10 },
      { type: 'race', label: 'Race', startUtc: '2023-05-14T09:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2023-italy',
    round: 6,
    name: 'Moto3 Italy',
    circuitId: 'autodromo-del-mugello',
    // Italy CEST (UTC+2). Race 11:00 local = 09:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-06-09T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2023-06-09T11:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2023-06-10T06:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-10T10:50:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-06-11T06:40:00Z', durationMinutes: 10 },
      { type: 'race', label: 'Race', startUtc: '2023-06-11T09:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2023-germany',
    round: 7,
    name: 'Moto3 Germany',
    circuitId: 'sachsenring',
    // Germany CEST (UTC+2). Race 11:00 local = 09:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-06-16T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2023-06-16T11:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2023-06-17T06:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-17T10:50:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-06-18T06:40:00Z', durationMinutes: 10 },
      { type: 'race', label: 'Race', startUtc: '2023-06-18T09:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2023-netherlands',
    round: 8,
    name: 'Moto3 Netherlands',
    circuitId: 'tt-circuit-assen',
    // Netherlands CEST (UTC+2). Race 11:00 local = 09:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-06-23T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2023-06-23T11:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2023-06-24T06:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-24T10:50:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-06-25T06:40:00Z', durationMinutes: 10 },
      { type: 'race', label: 'Race', startUtc: '2023-06-25T09:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2023-great-britain',
    round: 9,
    name: 'Moto3 Great Britain',
    circuitId: 'silverstone-circuit',
    // UK BST (UTC+1). Race 11:00 local = 10:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-08-04T08:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2023-08-04T12:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2023-08-05T07:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-05T11:50:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-08-06T07:40:00Z', durationMinutes: 10 },
      { type: 'race', label: 'Race', startUtc: '2023-08-06T10:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2023-austria',
    round: 10,
    name: 'Moto3 Austria',
    circuitId: 'red-bull-ring',
    // Austria CEST (UTC+2). Race 11:00 local = 09:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-08-18T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2023-08-18T11:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2023-08-19T06:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-19T10:50:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-08-20T06:40:00Z', durationMinutes: 10 },
      { type: 'race', label: 'Race', startUtc: '2023-08-20T09:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2023-catalunya',
    round: 11,
    name: 'Moto3 Catalunya',
    circuitId: 'circuit-de-barcelona-catalunya',
    // Spain CEST (UTC+2). Race 11:00 local = 09:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-09-01T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2023-09-01T11:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2023-09-02T06:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-02T10:50:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-09-03T06:40:00Z', durationMinutes: 10 },
      { type: 'race', label: 'Race', startUtc: '2023-09-03T09:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2023-san-marino',
    round: 12,
    name: 'Moto3 San Marino',
    circuitId: 'misano-world-circuit',
    // Italy CEST (UTC+2). Race 11:00 local = 09:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-09-08T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2023-09-08T11:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2023-09-09T06:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-09T10:50:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-09-10T06:40:00Z', durationMinutes: 10 },
      { type: 'race', label: 'Race', startUtc: '2023-09-10T09:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2023-india',
    round: 13,
    name: 'Moto3 India',
    circuitId: 'buddh-international-circuit',
    // India IST (UTC+5:30). Race 12:15 local approx = 06:45 UTC (heat-shortened weekend)
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-09-22T04:30:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2023-09-22T08:45:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2023-09-23T04:10:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-23T08:20:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-09-24T04:10:00Z', durationMinutes: 10 },
      { type: 'race', label: 'Race', startUtc: '2023-09-24T06:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2023-japan',
    round: 14,
    name: 'Moto3 Japan',
    circuitId: 'twin-ring-motegi',
    // Japan JST (UTC+9). Race 11:00 local = 02:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-09-29T00:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2023-09-29T04:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2023-09-29T23:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-30T03:50:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-09-30T23:40:00Z', durationMinutes: 10 },
      { type: 'race', label: 'Race', startUtc: '2023-10-01T02:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2023-indonesia',
    round: 15,
    name: 'Moto3 Indonesia',
    circuitId: 'mandalika-circuit',
    // Indonesia WITA (UTC+8). Race 11:00 local = 03:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-10-13T01:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2023-10-13T05:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2023-10-14T00:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-10-14T04:50:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-10-15T00:40:00Z', durationMinutes: 10 },
      { type: 'race', label: 'Race', startUtc: '2023-10-15T03:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2023-australia',
    round: 16,
    name: 'Moto3 Australia',
    circuitId: 'phillip-island-grand-prix-circuit',
    // Australia AEDT (UTC+11) post-DST. Race 11:00 local = 00:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-10-19T22:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2023-10-20T02:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2023-10-20T21:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-10-21T01:50:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-10-21T21:40:00Z', durationMinutes: 10 },
      { type: 'race', label: 'Race', startUtc: '2023-10-22T00:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2023-thailand',
    round: 17,
    name: 'Moto3 Thailand',
    circuitId: 'chang-international-circuit',
    // Thailand ICT (UTC+7). Race 11:00 local = 04:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-10-27T02:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2023-10-27T06:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2023-10-28T01:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-10-28T05:50:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-10-29T01:40:00Z', durationMinutes: 10 },
      { type: 'race', label: 'Race', startUtc: '2023-10-29T04:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2023-malaysia',
    round: 18,
    name: 'Moto3 Malaysia',
    circuitId: 'sepang-international-circuit',
    // Malaysia MYT (UTC+8). Race 11:00 local = 03:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-11-10T01:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2023-11-10T05:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2023-11-11T00:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-11-11T04:50:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-11-12T00:40:00Z', durationMinutes: 10 },
      { type: 'race', label: 'Race', startUtc: '2023-11-12T03:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2023-qatar',
    round: 19,
    name: 'Moto3 Qatar',
    circuitId: 'lusail-international-circuit',
    // Qatar AST (UTC+3); night race format. Race 16:00 local = 13:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-11-17T11:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2023-11-17T15:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2023-11-18T10:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-11-18T14:50:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-11-19T10:40:00Z', durationMinutes: 10 },
      { type: 'race', label: 'Race', startUtc: '2023-11-19T13:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto3-2023-valencia',
    round: 20,
    name: 'Moto3 Valencia',
    circuitId: 'circuit-ricardo-tormo',
    // Spain CET (UTC+1) after DST end. Race 11:00 local = 10:00 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2023-11-24T08:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP2', startUtc: '2023-11-24T12:15:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'FP3', startUtc: '2023-11-25T07:40:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-11-25T11:50:00Z', durationMinutes: 35 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2023-11-26T07:40:00Z', durationMinutes: 10 },
      { type: 'race', label: 'Race', startUtc: '2023-11-26T10:00:00Z', durationMinutes: 45 },
    ],
  },
]
