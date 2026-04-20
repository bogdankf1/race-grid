import { RaceEvent } from '@/lib/types'

// DTM 2024 — 8 rounds, 2 races per weekend
// Source: Wikipedia — 2024 Deutsche Tourenwagen Masters
// All rounds in CEST=UTC+2
export const dtm2024: RaceEvent[] = [
  {
    id: 'dtm-2024-oschersleben',
    round: 1,
    name: 'Oschersleben',
    circuitId: 'motorsport-arena-oschersleben',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2024-04-26T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2024-04-27T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2024-04-27T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2024-04-28T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2024-04-28T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2024-lausitzring',
    round: 2,
    name: 'Lausitzring',
    circuitId: 'lausitzring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2024-05-24T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2024-05-25T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2024-05-25T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2024-05-26T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2024-05-26T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2024-zandvoort',
    round: 3,
    name: 'Zandvoort',
    circuitId: 'circuit-zandvoort',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2024-06-07T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2024-06-08T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2024-06-08T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2024-06-09T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2024-06-09T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2024-norisring',
    round: 4,
    name: 'Norisring',
    circuitId: 'norisring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2024-07-05T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2024-07-06T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2024-07-06T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2024-07-07T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2024-07-07T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2024-nurburgring',
    round: 5,
    name: 'Nurburgring',
    circuitId: 'nurburgring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2024-08-16T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2024-08-17T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2024-08-17T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2024-08-18T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2024-08-18T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2024-sachsenring',
    round: 6,
    name: 'Sachsenring',
    circuitId: 'sachsenring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2024-09-06T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2024-09-07T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2024-09-07T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2024-09-08T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2024-09-08T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2024-red-bull-ring',
    round: 7,
    name: 'Red Bull Ring',
    circuitId: 'red-bull-ring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2024-09-27T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2024-09-28T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2024-09-28T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2024-09-29T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2024-09-29T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2024-hockenheimring',
    round: 8,
    name: 'Hockenheimring',
    circuitId: 'hockenheimring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2024-10-18T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2024-10-19T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2024-10-19T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2024-10-20T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2024-10-20T11:30:00Z', durationMinutes: 60 },
    ],
  },
]
