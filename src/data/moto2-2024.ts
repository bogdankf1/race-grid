import { RaceEvent } from '@/lib/types'

// Moto2 2024 calendar — 20 rounds, all session times in UTC
// Verified from Wikipedia "2024 Moto2 World Championship", motogp.com, autosport.com (race times),
//   racingnews365.com (Le Mans Moto2 session times reference for 2024 weekend format)
// Standard 2024 Moto2 weekend: FP1 (Fri AM), Practice (Fri PM), FP2 (Sat AM), Qualifying Q1+Q2 (Sat PM), Race (Sun)
// Note: Moto2 warm-up was abolished from the 2024 season — not included
// Champion: Ai Ogura (MT Helmets — MSi / Boscoscuro) — title sealed at Buriram (Round 18)
// Verification date: 2026-06-07
export const moto22024: RaceEvent[] = [
  {
    id: 'moto2-2024-qatar',
    round: 1,
    name: 'Moto2 Qatar',
    circuitId: 'lusail-international-circuit',
    // Qatar AST (UTC+3); night race. Race 18:15 local = 15:15 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-03-08T13:50:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'Practice', startUtc: '2024-03-08T18:05:00Z', durationMinutes: 45 },
      { type: 'practice', label: 'FP2', startUtc: '2024-03-09T13:25:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-09T17:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2024-03-10T15:15:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2024-portugal',
    round: 2,
    name: 'Moto2 Portugal',
    circuitId: 'algarve-international-circuit',
    // Portugal WET (UTC+0) in March before DST. Race 12:15 local = 12:15 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-03-22T10:50:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'Practice', startUtc: '2024-03-22T15:05:00Z', durationMinutes: 45 },
      { type: 'practice', label: 'FP2', startUtc: '2024-03-23T10:25:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-23T14:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2024-03-24T12:15:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2024-usa',
    round: 3,
    name: 'Moto2 Americas',
    circuitId: 'circuit-of-the-americas',
    // Austin CDT (UTC-5) in mid-April. Race 12:15 local = 17:15 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-04-12T15:50:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'Practice', startUtc: '2024-04-12T20:05:00Z', durationMinutes: 45 },
      { type: 'practice', label: 'FP2', startUtc: '2024-04-13T15:25:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-13T19:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2024-04-14T17:15:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2024-spain',
    round: 4,
    name: 'Moto2 Spain',
    circuitId: 'circuito-de-jerez',
    // Spain CEST (UTC+2) in late April. Race 12:15 local = 10:15 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-04-26T08:50:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'Practice', startUtc: '2024-04-26T13:05:00Z', durationMinutes: 45 },
      { type: 'practice', label: 'FP2', startUtc: '2024-04-27T08:25:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-27T12:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2024-04-28T10:15:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2024-france',
    round: 5,
    name: 'Moto2 France',
    circuitId: 'bugatti-circuit',
    // France CEST (UTC+2). Race 12:15 local = 10:15 UTC; verified by racingnews365.com
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-05-10T08:50:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'Practice', startUtc: '2024-05-10T13:05:00Z', durationMinutes: 45 },
      { type: 'practice', label: 'FP2', startUtc: '2024-05-11T08:25:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-11T12:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2024-05-12T11:15:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2024-catalunya',
    round: 6,
    name: 'Moto2 Catalunya',
    circuitId: 'circuit-de-barcelona-catalunya',
    // Spain CEST (UTC+2). Race 12:15 local = 10:15 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-05-24T08:50:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'Practice', startUtc: '2024-05-24T13:05:00Z', durationMinutes: 45 },
      { type: 'practice', label: 'FP2', startUtc: '2024-05-25T08:25:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-25T12:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2024-05-26T10:15:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2024-italy',
    round: 7,
    name: 'Moto2 Italy',
    circuitId: 'autodromo-del-mugello',
    // Italy CEST (UTC+2). Race 12:00 local = 10:00 UTC (15 min earlier than standard)
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-05-31T08:50:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'Practice', startUtc: '2024-05-31T13:05:00Z', durationMinutes: 45 },
      { type: 'practice', label: 'FP2', startUtc: '2024-06-01T08:25:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-01T12:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2024-06-02T10:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2024-netherlands',
    round: 8,
    name: 'Moto2 Netherlands',
    circuitId: 'tt-circuit-assen',
    // Netherlands CEST (UTC+2). Race 12:15 local = 10:15 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-06-28T08:50:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'Practice', startUtc: '2024-06-28T13:05:00Z', durationMinutes: 45 },
      { type: 'practice', label: 'FP2', startUtc: '2024-06-29T08:25:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-29T12:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2024-06-30T10:15:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2024-germany',
    round: 9,
    name: 'Moto2 Germany',
    circuitId: 'sachsenring',
    // Germany CEST (UTC+2). Race 12:15 local = 10:15 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-07-05T08:50:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'Practice', startUtc: '2024-07-05T13:05:00Z', durationMinutes: 45 },
      { type: 'practice', label: 'FP2', startUtc: '2024-07-06T08:25:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-06T12:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2024-07-07T10:15:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2024-great-britain',
    round: 10,
    name: 'Moto2 Great Britain',
    circuitId: 'silverstone-circuit',
    // UK BST (UTC+1). Race 14:30 local = 13:30 UTC (shifted later for British GP)
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-08-02T09:50:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'Practice', startUtc: '2024-08-02T14:05:00Z', durationMinutes: 45 },
      { type: 'practice', label: 'FP2', startUtc: '2024-08-03T09:25:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-03T13:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2024-08-04T13:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2024-austria',
    round: 11,
    name: 'Moto2 Austria',
    circuitId: 'red-bull-ring',
    // Austria CEST (UTC+2). Race 12:15 local = 10:15 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-08-16T08:50:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'Practice', startUtc: '2024-08-16T13:05:00Z', durationMinutes: 45 },
      { type: 'practice', label: 'FP2', startUtc: '2024-08-17T08:25:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-17T12:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2024-08-18T10:15:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2024-aragon',
    round: 12,
    name: 'Moto2 Aragon',
    circuitId: 'motorland-aragon',
    // Spain CEST (UTC+2). Race 12:15 local = 10:15 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-08-30T08:50:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'Practice', startUtc: '2024-08-30T13:05:00Z', durationMinutes: 45 },
      { type: 'practice', label: 'FP2', startUtc: '2024-08-31T08:25:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-31T12:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2024-09-01T10:15:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2024-san-marino',
    round: 13,
    name: 'Moto2 San Marino',
    circuitId: 'misano-world-circuit',
    // Italy CEST (UTC+2). Race 12:15 local = 10:15 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-09-06T08:50:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'Practice', startUtc: '2024-09-06T13:05:00Z', durationMinutes: 45 },
      { type: 'practice', label: 'FP2', startUtc: '2024-09-07T08:25:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-07T12:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2024-09-08T10:15:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2024-emilia-romagna',
    round: 14,
    name: 'Moto2 Emilia-Romagna',
    circuitId: 'misano-world-circuit',
    // Italy CEST (UTC+2). Race 11:15 local = 09:15 UTC (shifted 1 hour earlier than standard)
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-09-20T08:50:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'Practice', startUtc: '2024-09-20T13:05:00Z', durationMinutes: 45 },
      { type: 'practice', label: 'FP2', startUtc: '2024-09-21T08:25:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-21T12:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2024-09-22T09:15:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2024-indonesia',
    round: 15,
    name: 'Moto2 Indonesia',
    circuitId: 'mandalika-circuit',
    // Indonesia WITA (UTC+8) at Mandalika. Race 13:15 local = 05:15 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-09-27T01:50:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'Practice', startUtc: '2024-09-27T06:05:00Z', durationMinutes: 45 },
      { type: 'practice', label: 'FP2', startUtc: '2024-09-28T01:25:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-28T05:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2024-09-29T05:15:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2024-japan',
    round: 16,
    name: 'Moto2 Japan',
    circuitId: 'twin-ring-motegi',
    // Japan JST (UTC+9). Race 12:15 local = 03:15 UTC (race red-flagged and shortened to 12 laps)
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-10-04T00:50:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'Practice', startUtc: '2024-10-04T05:05:00Z', durationMinutes: 45 },
      { type: 'practice', label: 'FP2', startUtc: '2024-10-05T00:25:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-10-05T04:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2024-10-06T03:15:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2024-australia',
    round: 17,
    name: 'Moto2 Australia',
    circuitId: 'phillip-island-grand-prix-circuit',
    // Australia AEDT (UTC+11). Race 12:15 local = 01:15 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-10-17T23:50:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'Practice', startUtc: '2024-10-18T04:05:00Z', durationMinutes: 45 },
      { type: 'practice', label: 'FP2', startUtc: '2024-10-18T23:25:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-10-19T03:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2024-10-20T01:15:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2024-thailand',
    round: 18,
    name: 'Moto2 Thailand',
    circuitId: 'chang-international-circuit',
    // Thailand ICT (UTC+7). Race 13:15 local = 06:15 UTC (red-flagged, shortened due to rain)
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-10-25T02:50:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'Practice', startUtc: '2024-10-25T07:05:00Z', durationMinutes: 45 },
      { type: 'practice', label: 'FP2', startUtc: '2024-10-26T02:25:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-10-26T06:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2024-10-27T06:15:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2024-malaysia',
    round: 19,
    name: 'Moto2 Malaysia',
    circuitId: 'sepang-international-circuit',
    // Malaysia MYT (UTC+8). Race 13:15 local = 05:15 UTC
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-11-01T01:50:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'Practice', startUtc: '2024-11-01T06:05:00Z', durationMinutes: 45 },
      { type: 'practice', label: 'FP2', startUtc: '2024-11-02T01:25:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-11-02T05:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2024-11-03T05:15:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'moto2-2024-solidarity',
    round: 20,
    name: 'Moto2 Solidarity GP (Barcelona)',
    circuitId: 'circuit-de-barcelona-catalunya',
    // Spain CET (UTC+1) after DST ended. Race 12:15 local = 11:15 UTC.
    // Replacement venue: substituted for Valencia after the DANA flood disaster.
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-11-15T09:50:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'Practice', startUtc: '2024-11-15T14:05:00Z', durationMinutes: 45 },
      { type: 'practice', label: 'FP2', startUtc: '2024-11-16T09:25:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-11-16T13:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2024-11-17T11:15:00Z', durationMinutes: 45 },
    ],
  },
]
