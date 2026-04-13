import { RaceEvent } from '@/lib/types'

// Formula E Season 11 (2024-25) calendar — from fiaformulae.com / Wikipedia with verified UTC session times
// Season spans Dec 2024 to Jul 2025, stored under 2025
export const fe2025: RaceEvent[] = [
  {
    id: 'fe-2025-sao-paulo',
    round: 1,
    name: 'São Paulo E-Prix',
    circuitId: 'sambodromo-anhembi',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2024-12-07T10:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-12-07T12:40:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-12-07T17:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2025-mexico-city',
    round: 2,
    name: 'Mexico City E-Prix',
    circuitId: 'autodromo-hermanos-rodriguez',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2025-01-11T15:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-01-11T18:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-01-11T20:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2025-jeddah-1',
    round: 3,
    name: 'Jeddah E-Prix Race 1',
    circuitId: 'jeddah-corniche-circuit-fe',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2025-02-14T12:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-02-14T15:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-02-14T17:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2025-jeddah-2',
    round: 4,
    name: 'Jeddah E-Prix Race 2',
    circuitId: 'jeddah-corniche-circuit-fe',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2025-02-15T12:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-02-15T15:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-02-15T17:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2025-miami',
    round: 5,
    name: 'Miami E-Prix',
    circuitId: 'homestead-miami-speedway-fe',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2025-04-12T14:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-04-12T17:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-04-12T19:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2025-monaco-1',
    round: 6,
    name: 'Monaco E-Prix Race 1',
    circuitId: 'circuit-de-monaco',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2025-05-03T08:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-03T11:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-05-03T13:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2025-monaco-2',
    round: 7,
    name: 'Monaco E-Prix Race 2',
    circuitId: 'circuit-de-monaco',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2025-05-04T08:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-04T11:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-05-04T13:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2025-tokyo-1',
    round: 8,
    name: 'Tokyo E-Prix Race 1',
    circuitId: 'tokyo-street-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2025-05-17T01:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-17T04:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-05-17T06:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2025-tokyo-2',
    round: 9,
    name: 'Tokyo E-Prix Race 2',
    circuitId: 'tokyo-street-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2025-05-18T01:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-18T04:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-05-18T06:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2025-shanghai-1',
    round: 10,
    name: 'Shanghai E-Prix Race 1',
    circuitId: 'shanghai-international-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2025-05-31T02:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-31T05:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-05-31T07:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2025-shanghai-2',
    round: 11,
    name: 'Shanghai E-Prix Race 2',
    circuitId: 'shanghai-international-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2025-06-01T02:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-06-01T05:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-06-01T07:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2025-jakarta',
    round: 12,
    name: 'Jakarta E-Prix',
    circuitId: 'jakarta-international-eprix-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2025-06-21T02:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-06-21T05:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-06-21T07:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2025-berlin-1',
    round: 13,
    name: 'Berlin E-Prix Race 1',
    circuitId: 'tempelhof-airport',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2025-07-12T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-12T12:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-07-12T14:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2025-berlin-2',
    round: 14,
    name: 'Berlin E-Prix Race 2',
    circuitId: 'tempelhof-airport',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2025-07-13T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-13T12:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-07-13T14:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2025-london-1',
    round: 15,
    name: 'London E-Prix Race 1',
    circuitId: 'excel-london',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2025-07-26T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-26T12:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-07-26T14:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2025-london-2',
    round: 16,
    name: 'London E-Prix Race 2',
    circuitId: 'excel-london',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2025-07-27T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-27T12:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-07-27T14:05:00Z', durationMinutes: 45 },
    ],
  },
]
