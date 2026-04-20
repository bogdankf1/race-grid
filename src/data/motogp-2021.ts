import { RaceEvent } from '@/lib/types'

// MotoGP 2021 calendar — 18 rounds, all session times in UTC
// Traditional format (no sprints): Practice 1 (Fri), Qualifying (Sat), Race (Sun)
// Champion: Fabio Quartararo (Monster Energy Yamaha MotoGP) — 278 points
export const motogp2021: RaceEvent[] = [
  {
    id: 'motogp-2021-qatar',
    round: 1,
    name: 'Grand Prix of Qatar',
    circuitId: 'lusail-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-03-26T12:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-03-27T13:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-03-28T17:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2021-doha',
    round: 2,
    name: 'Grand Prix of Doha',
    circuitId: 'lusail-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-04-02T12:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-04-03T13:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-04-04T17:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2021-portugal',
    round: 3,
    name: 'Grand Prix of Portugal',
    circuitId: 'algarve-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-04-16T08:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-04-17T10:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-04-18T12:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2021-spain',
    round: 4,
    name: 'Grand Prix of Spain',
    circuitId: 'circuito-de-jerez',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-04-30T07:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-01T10:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-05-02T12:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2021-france',
    round: 5,
    name: 'Grand Prix of France',
    circuitId: 'bugatti-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-05-14T07:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-15T10:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-05-16T12:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2021-italy',
    round: 6,
    name: 'Grand Prix of Italy',
    circuitId: 'autodromo-del-mugello',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-05-28T07:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-29T10:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-05-30T12:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2021-catalonia',
    round: 7,
    name: 'Grand Prix of Catalonia',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-06-04T07:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-05T10:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-06-06T12:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2021-germany',
    round: 8,
    name: 'Grand Prix of Germany',
    circuitId: 'sachsenring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-06-18T07:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-19T10:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-06-20T12:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2021-netherlands',
    round: 9,
    name: 'Dutch TT',
    circuitId: 'tt-circuit-assen',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-06-25T07:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-26T10:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-06-27T12:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2021-styria',
    round: 10,
    name: 'Styrian Grand Prix',
    circuitId: 'red-bull-ring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-08-06T07:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-07T10:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-08-08T12:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2021-austria',
    round: 11,
    name: 'Grand Prix of Austria',
    circuitId: 'red-bull-ring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-08-13T07:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-14T10:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-08-15T12:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2021-great-britain',
    round: 12,
    name: 'British Grand Prix',
    circuitId: 'silverstone-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-08-27T08:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-28T10:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-08-29T12:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2021-aragon',
    round: 13,
    name: 'Grand Prix of Aragon',
    circuitId: 'motorland-aragon',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-09-10T07:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-11T10:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-09-12T12:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2021-san-marino',
    round: 14,
    name: 'Grand Prix of San Marino',
    circuitId: 'misano-world-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-09-17T07:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-18T10:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-09-19T12:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2021-usa',
    round: 15,
    name: 'Grand Prix of the Americas',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-10-01T15:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-02T18:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-10-03T19:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2021-emilia-romagna',
    round: 16,
    name: 'Grand Prix of Emilia-Romagna',
    circuitId: 'misano-world-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-10-22T07:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-23T10:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-10-24T12:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2021-algarve',
    round: 17,
    name: 'Grand Prix of Algarve',
    circuitId: 'algarve-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-11-05T09:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-11-06T10:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-11-07T13:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'motogp-2021-valencia',
    round: 18,
    name: 'Grand Prix of Valencia',
    circuitId: 'circuit-ricardo-tormo',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-11-12T08:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-11-13T10:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-11-14T13:00:00Z', durationMinutes: 45 },
    ],
  },
]
