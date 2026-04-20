import { RaceEvent } from '@/lib/types'

// MotoGP 2022 calendar — 20 rounds, all session times in UTC
// Traditional format (no sprints): Practice 1 (Fri), Qualifying (Sat), Race (Sun)
// Champion: Francesco Bagnaia (Ducati Lenovo Team) — 265 points
export const motogp2022: RaceEvent[] = [
  {
    id: 'motogp-2022-qatar',
    round: 1,
    name: 'Grand Prix of Qatar',
    circuitId: 'lusail-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-03-04T12:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-03-05T13:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-03-06T17:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2022-indonesia',
    round: 2,
    name: 'Grand Prix of Indonesia',
    circuitId: 'mandalika-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-03-18T02:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-03-19T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-03-20T07:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2022-argentina',
    round: 3,
    name: 'Grand Prix of Argentina',
    circuitId: 'termas-de-rio-hondo',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-04-01T14:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-02T17:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-04-03T18:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2022-usa',
    round: 4,
    name: 'Grand Prix of the Americas',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-04-08T15:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-09T18:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-04-10T19:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2022-portugal',
    round: 5,
    name: 'Grand Prix of Portugal',
    circuitId: 'algarve-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-04-22T08:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-23T10:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-04-24T12:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2022-spain',
    round: 6,
    name: 'Grand Prix of Spain',
    circuitId: 'circuito-de-jerez',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-04-29T07:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-30T10:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-05-01T12:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2022-france',
    round: 7,
    name: 'Grand Prix of France',
    circuitId: 'bugatti-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-05-13T07:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-14T10:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-05-15T12:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2022-italy',
    round: 8,
    name: 'Grand Prix of Italy',
    circuitId: 'autodromo-del-mugello',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-05-27T07:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-28T10:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-05-29T12:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2022-catalonia',
    round: 9,
    name: 'Grand Prix of Catalonia',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-06-03T07:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-04T10:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-06-05T12:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2022-germany',
    round: 10,
    name: 'Grand Prix of Germany',
    circuitId: 'sachsenring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-06-17T07:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-18T10:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-06-19T12:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2022-netherlands',
    round: 11,
    name: 'Dutch TT',
    circuitId: 'tt-circuit-assen',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-06-24T07:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-25T10:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-06-26T12:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2022-great-britain',
    round: 12,
    name: 'British Grand Prix',
    circuitId: 'silverstone-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-08-05T08:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-08-06T10:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-08-07T12:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2022-austria',
    round: 13,
    name: 'Grand Prix of Austria',
    circuitId: 'red-bull-ring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-08-19T07:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-08-20T10:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-08-21T12:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2022-san-marino',
    round: 14,
    name: 'Grand Prix of San Marino',
    circuitId: 'misano-world-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-09-02T07:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-03T10:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-09-04T12:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2022-aragon',
    round: 15,
    name: 'Grand Prix of Aragon',
    circuitId: 'motorland-aragon',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-09-16T07:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-17T10:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-09-18T12:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2022-japan',
    round: 16,
    name: 'Grand Prix of Japan',
    circuitId: 'twin-ring-motegi',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-09-23T00:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-24T03:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-09-25T05:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2022-thailand',
    round: 17,
    name: 'Grand Prix of Thailand',
    circuitId: 'chang-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-09-30T03:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-01T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-10-02T07:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2022-australia',
    round: 18,
    name: 'Australian Grand Prix',
    circuitId: 'phillip-island-grand-prix-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-10-13T22:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-15T01:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-10-16T03:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2022-malaysia',
    round: 19,
    name: 'Grand Prix of Malaysia',
    circuitId: 'sepang-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-10-21T02:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-22T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-10-23T07:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2022-valencia',
    round: 20,
    name: 'Grand Prix of Valencia',
    circuitId: 'circuit-ricardo-tormo',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-11-04T08:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-11-05T10:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-11-06T13:00:00Z', durationMinutes: 45 },
    ],
  },
]
