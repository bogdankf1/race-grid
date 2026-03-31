import { RaceEvent } from '@/lib/types'

// DTM 2025 — 8 rounds, 2 races per weekend
// Source: autosport.com, motorsport.com, wikipedia
export const dtm2025: RaceEvent[] = [
  {
    id: 'dtm-2025-oschersleben',
    round: 1,
    name: 'Oschersleben',
    circuitId: 'motorsport-arena-oschersleben',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2025-04-25T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2025-04-26T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2025-04-26T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2025-04-27T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2025-04-27T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2025-lausitzring',
    round: 2,
    name: 'Lausitzring',
    circuitId: 'lausitzring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2025-05-23T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2025-05-24T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2025-05-24T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2025-05-25T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2025-05-25T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2025-zandvoort',
    round: 3,
    name: 'Zandvoort',
    circuitId: 'circuit-zandvoort',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2025-06-06T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2025-06-07T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2025-06-07T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2025-06-08T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2025-06-08T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2025-norisring',
    round: 4,
    name: 'Norisring',
    circuitId: 'norisring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2025-07-04T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2025-07-05T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2025-07-05T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2025-07-06T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2025-07-06T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2025-nurburgring',
    round: 5,
    name: 'Nurburgring',
    circuitId: 'nurburgring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2025-08-08T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2025-08-09T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2025-08-09T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2025-08-10T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2025-08-10T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2025-sachsenring',
    round: 6,
    name: 'Sachsenring',
    circuitId: 'sachsenring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2025-08-22T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2025-08-23T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2025-08-23T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2025-08-24T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2025-08-24T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2025-red-bull-ring',
    round: 7,
    name: 'Red Bull Ring',
    circuitId: 'red-bull-ring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2025-09-12T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2025-09-13T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2025-09-13T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2025-09-14T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2025-09-14T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2025-hockenheimring',
    round: 8,
    name: 'Hockenheimring',
    circuitId: 'hockenheimring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2025-10-03T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2025-10-04T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2025-10-04T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2025-10-05T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2025-10-05T11:30:00Z', durationMinutes: 60 },
    ],
  },
]
