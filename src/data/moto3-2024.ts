import { RaceEvent } from '@/lib/types'

// Moto3 2024 calendar — 20 rounds, all session times in UTC
// Verified from Wikipedia "2024 Moto3 World Championship", motogp.com,
//   BikeSport News per-round timing pages and crash.net schedules
// Verification date: 2026-06-07
// Standard 2024 Moto3 weekend: FP1 (Fri AM ~09:00 local), Practice 1 (Fri PM ~13:15 local),
//   Qualifying combined Q1+Q2 (Sat ~12:50 local), Race (Sun ~11:00 local)
// Qatar opened the season with a night-race format (Friday/Saturday afternoon-to-evening sessions)
// Note: Moto3 warm-up was abolished from the 2024 season — not included
// Champion: David Alonso (CFMoto Aspar Team) — title clinched at Japan (Round 16)
//   with a record-setting 14 wins from 20 rounds, 421 points
export const moto32024: RaceEvent[] = [
  {
    id: 'moto3-2024-qatar',
    round: 1,
    name: 'Moto3 Qatar',
    circuitId: 'lusail-international-circuit',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-03-08T11:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2024-03-08T15:15:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-09T13:50:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Race', startUtc: '2024-03-10T14:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2024-portugal',
    round: 2,
    name: 'Moto3 Portugal',
    circuitId: 'algarve-international-circuit',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-03-22T09:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2024-03-22T13:15:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-23T12:50:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Race', startUtc: '2024-03-24T11:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2024-usa',
    round: 3,
    name: 'Moto3 Americas',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-04-12T14:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2024-04-12T18:15:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-13T17:50:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Race', startUtc: '2024-04-14T16:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2024-spain',
    round: 4,
    name: 'Moto3 Spain',
    circuitId: 'circuito-de-jerez',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-04-26T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2024-04-26T11:15:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-27T10:50:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Race', startUtc: '2024-04-28T09:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2024-france',
    round: 5,
    name: 'Moto3 France',
    circuitId: 'bugatti-circuit',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-05-10T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2024-05-10T11:15:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-11T10:50:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Race', startUtc: '2024-05-12T09:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2024-catalunya',
    round: 6,
    name: 'Moto3 Catalunya',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-05-24T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2024-05-24T11:15:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-25T10:50:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Race', startUtc: '2024-05-26T09:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2024-italy',
    round: 7,
    name: 'Moto3 Italy',
    circuitId: 'autodromo-del-mugello',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-05-31T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2024-05-31T11:15:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-01T10:50:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Race', startUtc: '2024-06-02T09:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2024-netherlands',
    round: 8,
    name: 'Moto3 Netherlands',
    circuitId: 'tt-circuit-assen',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-06-28T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2024-06-28T11:15:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-29T10:50:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Race', startUtc: '2024-06-30T09:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2024-germany',
    round: 9,
    name: 'Moto3 Germany',
    circuitId: 'sachsenring',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-07-05T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2024-07-05T11:15:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-06T10:50:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Race', startUtc: '2024-07-07T09:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2024-great-britain',
    round: 10,
    name: 'Moto3 Great Britain',
    circuitId: 'silverstone-circuit',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-08-02T08:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2024-08-02T12:15:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-03T11:50:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Race', startUtc: '2024-08-04T10:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2024-austria',
    round: 11,
    name: 'Moto3 Austria',
    circuitId: 'red-bull-ring',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-08-16T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2024-08-16T11:15:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-17T10:50:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Race', startUtc: '2024-08-18T09:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2024-aragon',
    round: 12,
    name: 'Moto3 Aragon',
    circuitId: 'motorland-aragon',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-08-30T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2024-08-30T11:15:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-31T10:50:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Race', startUtc: '2024-09-01T09:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2024-san-marino',
    round: 13,
    name: 'Moto3 San Marino',
    circuitId: 'misano-world-circuit',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-09-06T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2024-09-06T11:15:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-07T10:50:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Race', startUtc: '2024-09-08T09:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2024-emilia-romagna',
    round: 14,
    name: 'Moto3 Emilia-Romagna',
    circuitId: 'misano-world-circuit',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-09-20T07:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2024-09-20T11:15:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-21T10:50:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Race', startUtc: '2024-09-22T09:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2024-indonesia',
    round: 15,
    name: 'Moto3 Indonesia',
    circuitId: 'mandalika-circuit',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-09-27T01:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2024-09-27T05:15:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-28T04:50:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Race', startUtc: '2024-09-29T03:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2024-japan',
    round: 16,
    name: 'Moto3 Japan',
    circuitId: 'twin-ring-motegi',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-10-04T00:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2024-10-04T04:15:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-10-05T03:50:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Race', startUtc: '2024-10-06T02:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2024-australia',
    round: 17,
    name: 'Moto3 Australia',
    circuitId: 'phillip-island-grand-prix-circuit',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-10-17T22:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2024-10-18T02:15:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-10-19T01:50:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Race', startUtc: '2024-10-20T00:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2024-thailand',
    round: 18,
    name: 'Moto3 Thailand',
    circuitId: 'chang-international-circuit',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-10-25T02:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2024-10-25T06:15:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-10-26T05:50:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Race', startUtc: '2024-10-27T04:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2024-malaysia',
    round: 19,
    name: 'Moto3 Malaysia',
    circuitId: 'sepang-international-circuit',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-11-01T01:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2024-11-01T05:15:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-11-02T04:50:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Race', startUtc: '2024-11-03T03:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'moto3-2024-solidarity-barcelona',
    round: 20,
    name: 'Moto3 Solidarity Barcelona',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'FP1', startUtc: '2024-11-15T08:00:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice', startUtc: '2024-11-15T12:15:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-11-16T11:50:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Race', startUtc: '2024-11-17T10:00:00Z', durationMinutes: 40 },
    ],
  },
]
