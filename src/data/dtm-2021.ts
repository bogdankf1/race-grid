import { RaceEvent } from '@/lib/types'

// DTM 2021 — 8 rounds, 2 races per weekend
// Source: Wikipedia
export const dtm2021: RaceEvent[] = [
  {
    id: 'dtm-2021-monza',
    round: 1,
    name: 'Monza',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-06-18T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2021-06-19T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2021-06-19T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2021-06-20T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2021-06-20T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2021-lausitzring',
    round: 2,
    name: 'Lausitzring',
    circuitId: 'lausitzring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-07-23T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2021-07-24T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2021-07-24T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2021-07-25T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2021-07-25T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2021-zolder',
    round: 3,
    name: 'Zolder',
    circuitId: 'circuit-zolder',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-08-06T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2021-08-07T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2021-08-07T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2021-08-08T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2021-08-08T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2021-nurburgring',
    round: 4,
    name: 'Nurburgring',
    circuitId: 'nurburgring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-08-20T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2021-08-21T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2021-08-21T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2021-08-22T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2021-08-22T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2021-red-bull-ring',
    round: 5,
    name: 'Red Bull Ring',
    circuitId: 'red-bull-ring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-09-03T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2021-09-04T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2021-09-04T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2021-09-05T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2021-09-05T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2021-assen',
    round: 6,
    name: 'Assen',
    circuitId: 'tt-circuit-assen',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-09-17T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2021-09-18T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2021-09-18T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2021-09-19T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2021-09-19T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2021-hockenheimring',
    round: 7,
    name: 'Hockenheimring',
    circuitId: 'hockenheimring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-10-01T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2021-10-02T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2021-10-02T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2021-10-03T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2021-10-03T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2021-norisring',
    round: 8,
    name: 'Norisring',
    circuitId: 'norisring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-10-08T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2021-10-09T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2021-10-09T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2021-10-10T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2021-10-10T11:30:00Z', durationMinutes: 60 },
    ],
  },
]
