import { RaceEvent } from '@/lib/types'

// Formula E Season 12 (2025-26) calendar — from fiaformulae.com with verified UTC session times
// Season spans Dec 2025 to Aug 2026, stored under 2026
export const fe2026: RaceEvent[] = [
  {
    id: 'fe-2026-sao-paulo',
    round: 1,
    name: 'São Paulo E-Prix',
    circuitId: 'sambodromo-anhembi',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2025-12-06T12:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-12-06T15:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-12-06T17:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-mexico-city',
    round: 2,
    name: 'Mexico City E-Prix',
    circuitId: 'autodromo-hermanos-rodriguez',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2026-01-10T15:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-01-10T18:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-01-10T20:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-miami',
    round: 3,
    name: 'Miami E-Prix',
    circuitId: 'miami-international-autodrome',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2026-01-31T14:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-01-31T17:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-01-31T19:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-jeddah-1',
    round: 4,
    name: 'Jeddah E-Prix Race 1',
    circuitId: 'jeddah-corniche-circuit-fe',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2026-02-13T12:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-02-13T15:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-02-13T17:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-jeddah-2',
    round: 5,
    name: 'Jeddah E-Prix Race 2',
    circuitId: 'jeddah-corniche-circuit-fe',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2026-02-14T12:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-02-14T15:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-02-14T17:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-madrid',
    round: 6,
    name: 'Madrid E-Prix',
    circuitId: 'circuit-de-jarama',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2026-03-21T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-21T12:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-03-21T14:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-berlin-1',
    round: 7,
    name: 'Berlin E-Prix Race 1',
    circuitId: 'tempelhof-airport',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2026-05-02T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-02T12:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-05-02T14:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-berlin-2',
    round: 8,
    name: 'Berlin E-Prix Race 2',
    circuitId: 'tempelhof-airport',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2026-05-03T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-03T12:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-05-03T14:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-monaco-1',
    round: 9,
    name: 'Monaco E-Prix Race 1',
    circuitId: 'circuit-de-monaco',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2026-05-16T08:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-16T11:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-05-16T13:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-monaco-2',
    round: 10,
    name: 'Monaco E-Prix Race 2',
    circuitId: 'circuit-de-monaco',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2026-05-17T08:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-17T11:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-05-17T13:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-sanya',
    round: 11,
    name: 'Sanya E-Prix',
    circuitId: 'sanya-street-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2026-06-20T02:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-20T05:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-06-20T07:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-shanghai-1',
    round: 12,
    name: 'Shanghai E-Prix Race 1',
    circuitId: 'shanghai-international-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2026-07-04T02:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-04T05:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-07-04T07:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-shanghai-2',
    round: 13,
    name: 'Shanghai E-Prix Race 2',
    circuitId: 'shanghai-international-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2026-07-05T02:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-05T05:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-07-05T07:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-tokyo-1',
    round: 14,
    name: 'Tokyo E-Prix Race 1',
    circuitId: 'tokyo-street-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2026-07-25T06:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-25T09:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-07-25T11:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-tokyo-2',
    round: 15,
    name: 'Tokyo E-Prix Race 2',
    circuitId: 'tokyo-street-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2026-07-26T06:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-26T09:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-07-26T11:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-london-1',
    round: 16,
    name: 'London E-Prix Race 1',
    circuitId: 'excel-london',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2026-08-15T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-15T12:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-08-15T14:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2026-london-2',
    round: 17,
    name: 'London E-Prix Race 2',
    circuitId: 'excel-london',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2026-08-16T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-16T12:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-08-16T14:05:00Z', durationMinutes: 45 },
    ],
  },
]
