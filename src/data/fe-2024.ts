import { RaceEvent } from '@/lib/types'

// Formula E Season 10 (2023-24) calendar — from Wikipedia / fiaformulae.com with UTC session times
// Season spans Jan 2024 to Jul 2024 (all races in 2024), stored under 2024
export const fe2024: RaceEvent[] = [
  {
    id: 'fe-2024-mexico-city',
    round: 1,
    name: 'Mexico City E-Prix',
    circuitId: 'autodromo-hermanos-rodriguez',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2024-01-13T15:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-01-13T18:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-01-13T20:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2024-diriyah-1',
    round: 2,
    name: 'Diriyah E-Prix Race 1',
    circuitId: 'diriyah-street-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2024-01-26T12:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-01-26T15:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-01-26T17:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2024-diriyah-2',
    round: 3,
    name: 'Diriyah E-Prix Race 2',
    circuitId: 'diriyah-street-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2024-01-27T12:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-01-27T15:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-01-27T17:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2024-sao-paulo',
    round: 4,
    name: 'São Paulo E-Prix',
    circuitId: 'sambodromo-anhembi',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2024-03-16T13:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-16T15:40:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-03-16T20:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2024-tokyo',
    round: 5,
    name: 'Tokyo E-Prix',
    circuitId: 'tokyo-street-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2024-03-30T01:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-30T04:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-03-30T06:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2024-misano-1',
    round: 6,
    name: 'Misano E-Prix Race 1',
    circuitId: 'misano-world-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2024-04-13T08:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-13T11:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-04-13T13:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2024-misano-2',
    round: 7,
    name: 'Misano E-Prix Race 2',
    circuitId: 'misano-world-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2024-04-14T08:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-14T11:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-04-14T13:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2024-monaco',
    round: 8,
    name: 'Monaco E-Prix',
    circuitId: 'circuit-de-monaco',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2024-04-27T08:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-27T11:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-04-27T13:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2024-berlin-1',
    round: 9,
    name: 'Berlin E-Prix Race 1',
    circuitId: 'tempelhof-airport',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2024-05-11T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-11T12:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-05-11T14:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2024-berlin-2',
    round: 10,
    name: 'Berlin E-Prix Race 2',
    circuitId: 'tempelhof-airport',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2024-05-12T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-12T12:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-05-12T14:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2024-shanghai-1',
    round: 11,
    name: 'Shanghai E-Prix Race 1',
    circuitId: 'shanghai-international-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2024-05-25T02:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-25T05:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-05-25T07:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2024-shanghai-2',
    round: 12,
    name: 'Shanghai E-Prix Race 2',
    circuitId: 'shanghai-international-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2024-05-26T02:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-26T05:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-05-26T07:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2024-portland-1',
    round: 13,
    name: 'Portland E-Prix Race 1',
    circuitId: 'portland-international-raceway',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2024-06-29T17:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-29T20:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-06-29T22:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2024-portland-2',
    round: 14,
    name: 'Portland E-Prix Race 2',
    circuitId: 'portland-international-raceway',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2024-06-30T17:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-30T20:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-06-30T22:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2024-london-1',
    round: 15,
    name: 'London E-Prix Race 1',
    circuitId: 'excel-london',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2024-07-20T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-20T12:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-07-20T14:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2024-london-2',
    round: 16,
    name: 'London E-Prix Race 2',
    circuitId: 'excel-london',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2024-07-21T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-21T12:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-07-21T14:05:00Z', durationMinutes: 45 },
    ],
  },
]
