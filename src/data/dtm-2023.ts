import { RaceEvent } from '@/lib/types'

// DTM 2023 — 8 rounds, 2 races per weekend
// Source: Wikipedia — 2023 Deutsche Tourenwagen Masters
// All rounds in CEST=UTC+2
export const dtm2023: RaceEvent[] = [
  {
    id: 'dtm-2023-oschersleben',
    round: 1,
    name: 'Oschersleben',
    circuitId: 'motorsport-arena-oschersleben',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2023-05-26T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2023-05-27T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2023-05-27T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-05-28T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2023-05-28T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2023-zandvoort',
    round: 2,
    name: 'Zandvoort',
    circuitId: 'circuit-zandvoort',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2023-06-23T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2023-06-24T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2023-06-24T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-06-25T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2023-06-25T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2023-norisring',
    round: 3,
    name: 'Norisring',
    circuitId: 'norisring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2023-07-07T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2023-07-08T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2023-07-08T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-07-09T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2023-07-09T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2023-nurburgring',
    round: 4,
    name: 'Nurburgring',
    circuitId: 'nurburgring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2023-08-04T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2023-08-05T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2023-08-05T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-08-06T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2023-08-06T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2023-lausitzring',
    round: 5,
    name: 'Lausitzring',
    circuitId: 'lausitzring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2023-08-18T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2023-08-19T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2023-08-19T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-08-20T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2023-08-20T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2023-sachsenring',
    round: 6,
    name: 'Sachsenring',
    circuitId: 'sachsenring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2023-09-08T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2023-09-09T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2023-09-09T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-09-10T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2023-09-10T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2023-red-bull-ring',
    round: 7,
    name: 'Red Bull Ring',
    circuitId: 'red-bull-ring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2023-09-22T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2023-09-23T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2023-09-23T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-09-24T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2023-09-24T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2023-hockenheimring',
    round: 8,
    name: 'Hockenheimring',
    circuitId: 'hockenheimring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2023-10-20T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2023-10-21T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2023-10-21T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-10-22T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2023-10-22T11:30:00Z', durationMinutes: 60 },
    ],
  },
]
