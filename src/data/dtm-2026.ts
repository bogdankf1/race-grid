import { RaceEvent } from '@/lib/types'

// DTM 2026 — 8 rounds, 2 races per weekend
// Source: 51gt3.com, autosport.com
export const dtm2026: RaceEvent[] = [
  {
    id: 'dtm-2026-red-bull-ring',
    round: 1,
    name: 'Red Bull Ring',
    circuitId: 'red-bull-ring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-04-24T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-04-25T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2026-04-25T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-04-26T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2026-04-26T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2026-zandvoort',
    round: 2,
    name: 'Zandvoort',
    circuitId: 'circuit-zandvoort',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-05-22T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-05-23T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2026-05-23T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-05-24T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2026-05-24T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2026-lausitzring',
    round: 3,
    name: 'Lausitzring',
    circuitId: 'lausitzring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-06-19T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-06-20T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2026-06-20T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-06-21T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2026-06-21T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2026-norisring',
    round: 4,
    name: 'Norisring',
    circuitId: 'norisring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-07-03T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-07-04T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2026-07-04T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-07-05T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2026-07-05T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2026-oschersleben',
    round: 5,
    name: 'Oschersleben',
    circuitId: 'motorsport-arena-oschersleben',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-07-24T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-07-25T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2026-07-25T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-07-26T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2026-07-26T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2026-nurburgring',
    round: 6,
    name: 'Nurburgring',
    circuitId: 'nurburgring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-08-14T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-08-15T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2026-08-15T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-08-16T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2026-08-16T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2026-sachsenring',
    round: 7,
    name: 'Sachsenring',
    circuitId: 'sachsenring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-09-11T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-09-12T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2026-09-12T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-09-13T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2026-09-13T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2026-hockenheimring',
    round: 8,
    name: 'Hockenheimring',
    circuitId: 'hockenheimring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-10-09T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-10-10T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2026-10-10T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-10-11T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2026-10-11T11:30:00Z', durationMinutes: 60 },
    ],
  },
]
