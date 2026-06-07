import { RaceEvent } from '@/lib/types'

// Moto3 2025 calendar — 22 rounds, all session times in UTC
// Verified from Wikipedia "2025 Moto3 World Championship", motogp.com, motorsport.com
// Standard 2025 Moto3 weekend: FP1 (Fri AM), Practice (Fri PM), Qualifying Q1+Q2 (Sat), Race (Sun)
// Moto3 races first on Sunday — ~75 min before Moto2. Session start times derived from
// the verified Moto2 2025 schedule with the Moto3 offsets used in 2025-2026
// (FP1/Practice -50 min vs Moto2, Qualifying -55 min, Race -75 min)
// Note: Moto3 warm-up was abolished from the 2024 season — not included
// Champion: José Antonio Rueda (Red Bull KTM Ajo) — title clinched at Indonesia (Round 18)
export const moto32025: RaceEvent[] = [
  {
    id: 'moto3-2025-thailand',
    round: 1,
    name: 'Moto3 Thailand',
    circuitId: 'chang-international-circuit',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2025-02-28T02:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2025-02-28T06:15:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-03-01T05:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2025-03-02T05:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2025-argentina',
    round: 2,
    name: 'Moto3 Argentina',
    circuitId: 'termas-de-rio-hondo',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2025-03-14T13:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2025-03-14T17:15:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-03-15T16:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2025-03-16T15:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2025-usa',
    round: 3,
    name: 'Moto3 Americas',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2025-03-28T14:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2025-03-28T18:15:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-03-29T17:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2025-03-30T16:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2025-qatar',
    round: 4,
    name: 'Moto3 Qatar',
    circuitId: 'lusail-international-circuit',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2025-04-11T11:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2025-04-11T15:15:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-04-12T14:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2025-04-13T14:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2025-spain',
    round: 5,
    name: 'Moto3 Spain',
    circuitId: 'circuito-de-jerez',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2025-04-25T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2025-04-25T11:15:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-04-26T10:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2025-04-27T09:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2025-france',
    round: 6,
    name: 'Moto3 France',
    circuitId: 'bugatti-circuit',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2025-05-09T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2025-05-09T11:15:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-10T10:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2025-05-11T09:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2025-great-britain',
    round: 7,
    name: 'Moto3 Great Britain',
    circuitId: 'silverstone-circuit',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2025-05-23T08:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2025-05-23T12:15:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-24T11:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2025-05-25T10:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2025-aragon',
    round: 8,
    name: 'Moto3 Aragon',
    circuitId: 'motorland-aragon',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2025-06-06T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2025-06-06T11:15:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-06-07T10:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2025-06-08T09:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2025-italy',
    round: 9,
    name: 'Moto3 Italy',
    circuitId: 'autodromo-del-mugello',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2025-06-20T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2025-06-20T11:15:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-06-21T10:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2025-06-22T09:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2025-netherlands',
    round: 10,
    name: 'Moto3 Netherlands',
    circuitId: 'tt-circuit-assen',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2025-06-27T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2025-06-27T11:15:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-06-28T10:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2025-06-29T09:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2025-germany',
    round: 11,
    name: 'Moto3 Germany',
    circuitId: 'sachsenring',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2025-07-11T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2025-07-11T11:15:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-12T10:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2025-07-13T09:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2025-czechia',
    round: 12,
    name: 'Moto3 Czech Republic',
    circuitId: 'brno-circuit',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2025-07-18T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2025-07-18T11:15:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-19T10:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2025-07-20T09:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2025-austria',
    round: 13,
    name: 'Moto3 Austria',
    circuitId: 'red-bull-ring',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2025-08-15T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2025-08-15T11:15:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-16T10:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2025-08-17T09:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2025-hungary',
    round: 14,
    name: 'Moto3 Hungary',
    circuitId: 'balaton-park-circuit',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2025-08-22T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2025-08-22T11:15:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-23T10:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2025-08-24T09:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2025-catalunya',
    round: 15,
    name: 'Moto3 Catalunya',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2025-09-05T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2025-09-05T11:15:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-09-06T10:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2025-09-07T09:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2025-san-marino',
    round: 16,
    name: 'Moto3 San Marino',
    circuitId: 'misano-world-circuit',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2025-09-12T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2025-09-12T11:15:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-09-13T10:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2025-09-14T09:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2025-japan',
    round: 17,
    name: 'Moto3 Japan',
    circuitId: 'twin-ring-motegi',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2025-09-26T00:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2025-09-26T04:15:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-09-27T03:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2025-09-28T02:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2025-indonesia',
    round: 18,
    name: 'Moto3 Indonesia',
    circuitId: 'mandalika-circuit',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2025-10-03T01:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2025-10-03T05:15:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-10-04T04:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2025-10-05T04:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2025-australia',
    round: 19,
    name: 'Moto3 Australia',
    circuitId: 'phillip-island-grand-prix-circuit',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2025-10-16T23:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2025-10-17T03:15:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-10-18T02:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2025-10-19T01:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2025-malaysia',
    round: 20,
    name: 'Moto3 Malaysia',
    circuitId: 'sepang-international-circuit',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2025-10-24T01:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2025-10-24T05:15:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-10-25T04:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2025-10-26T07:15:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2025-portugal',
    round: 21,
    name: 'Moto3 Portugal',
    circuitId: 'algarve-international-circuit',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2025-11-07T08:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2025-11-07T12:15:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-11-08T11:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2025-11-09T11:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2025-valencia',
    round: 22,
    name: 'Moto3 Valencia',
    circuitId: 'circuit-ricardo-tormo',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2025-11-14T08:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2025-11-14T12:15:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-11-15T11:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2025-11-16T10:00:00Z', durationMinutes: 40 },
    ],
  },
]
