import { RaceEvent } from '@/lib/types'

// Formula E Season 12 (2025-26) calendar — session times in UTC (sportstimes/f1 schedule data, matches fiaformulae.com)
// Season spans Dec 2025 to Aug 2026, stored under 2026 — re-verified Oct 2026
export const fe2026: RaceEvent[] = [
  {
    id: 'fe-2026-sao-paulo',
    round: 1,
    name: 'São Paulo E-Prix',
    circuitId: 'sambodromo-anhembi',
    sessions: [
      { type: 'practice', label: 'Free Practice 2', startUtc: '2025-12-06T10:10:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-12-06T12:40:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-12-06T17:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-mexico-city',
    round: 2,
    name: 'Mexico City E-Prix',
    circuitId: 'autodromo-hermanos-rodriguez',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-01-09T22:00:00Z', durationMinutes: 30 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-01-10T13:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-01-10T15:40:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-01-10T20:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-miami',
    round: 3,
    name: 'Miami E-Prix',
    circuitId: 'miami-international-autodrome',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-01-30T22:00:00Z', durationMinutes: 30 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-01-31T12:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-01-31T14:40:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-01-31T19:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-jeddah-1',
    round: 4,
    name: 'Jeddah E-Prix Race 1',
    circuitId: 'jeddah-corniche-circuit-fe',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-02-12T17:00:00Z', durationMinutes: 30 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-02-13T10:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-02-13T12:40:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-02-13T17:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-jeddah-2',
    round: 5,
    name: 'Jeddah E-Prix Race 2',
    circuitId: 'jeddah-corniche-circuit-fe',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-02-14T12:40:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-02-14T17:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-madrid',
    round: 6,
    name: 'Madrid E-Prix',
    circuitId: 'circuit-de-jarama',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-03-20T15:30:00Z', durationMinutes: 30 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-03-21T07:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-21T09:40:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-03-21T14:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-berlin-1',
    round: 7,
    name: 'Berlin E-Prix Race 1',
    circuitId: 'tempelhof-airport',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-05-01T14:00:00Z', durationMinutes: 30 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-05-02T07:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-02T09:40:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-05-02T14:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-berlin-2',
    round: 8,
    name: 'Berlin E-Prix Race 2',
    circuitId: 'tempelhof-airport',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-03T09:40:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-05-03T14:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-monaco-1',
    round: 9,
    name: 'Monaco E-Prix Race 1',
    circuitId: 'circuit-de-monaco',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-05-16T05:30:00Z', durationMinutes: 30 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-05-16T07:10:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-16T08:40:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-05-16T13:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-monaco-2',
    round: 10,
    name: 'Monaco E-Prix Race 2',
    circuitId: 'circuit-de-monaco',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-17T08:40:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-05-17T13:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-sanya',
    round: 11,
    name: 'Sanya E-Prix',
    circuitId: 'sanya-street-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-06-19T08:30:00Z', durationMinutes: 30 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-06-20T00:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-20T02:40:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-06-20T07:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-shanghai-1',
    round: 12,
    name: 'Shanghai E-Prix Race 1',
    circuitId: 'shanghai-international-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-07-03T08:00:00Z', durationMinutes: 30 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-07-03T22:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-04T00:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-07-04T04:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-shanghai-2',
    round: 13,
    name: 'Shanghai E-Prix Race 2',
    circuitId: 'shanghai-international-circuit',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-05T00:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-07-05T04:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-tokyo-1',
    round: 14,
    name: 'Tokyo E-Prix Race 1',
    circuitId: 'tokyo-street-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-07-24T10:00:00Z', durationMinutes: 30 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-07-25T04:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-25T06:40:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-07-25T11:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-tokyo-2',
    round: 15,
    name: 'Tokyo E-Prix Race 2',
    circuitId: 'tokyo-street-circuit',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-26T06:40:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-07-26T11:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-london-1',
    round: 16,
    name: 'London E-Prix Race 1',
    circuitId: 'excel-london',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-08-14T15:00:00Z', durationMinutes: 30 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-08-15T07:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-15T09:40:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-08-15T14:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-london-2',
    round: 17,
    name: 'London E-Prix Race 2',
    circuitId: 'excel-london',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-16T09:40:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-08-16T14:05:00Z', durationMinutes: 45 },
    ],
  },
]
