import { RaceEvent } from '@/lib/types'

// DTM 2022 — 8 rounds, 2 races per weekend
// Source: Wikipedia
export const dtm2022: RaceEvent[] = [
  {
    id: 'dtm-2022-portimao',
    round: 1,
    name: 'Portimao',
    circuitId: 'algarve-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-04-29T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2022-04-30T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2022-04-30T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2022-05-01T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2022-05-01T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2022-lausitzring',
    round: 2,
    name: 'Lausitzring',
    circuitId: 'lausitzring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-05-20T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2022-05-21T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2022-05-21T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2022-05-22T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2022-05-22T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2022-imola',
    round: 3,
    name: 'Imola',
    circuitId: 'autodromo-enzo-e-dino-ferrari',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-06-17T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2022-06-18T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2022-06-18T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2022-06-19T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2022-06-19T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2022-norisring',
    round: 4,
    name: 'Norisring',
    circuitId: 'norisring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-07-01T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2022-07-02T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2022-07-02T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2022-07-03T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2022-07-03T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2022-nurburgring',
    round: 5,
    name: 'Nurburgring',
    circuitId: 'nurburgring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-08-26T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2022-08-27T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2022-08-27T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2022-08-28T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2022-08-28T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2022-spa-francorchamps',
    round: 6,
    name: 'Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-09-09T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2022-09-10T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2022-09-10T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2022-09-11T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2022-09-11T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2022-red-bull-ring',
    round: 7,
    name: 'Red Bull Ring',
    circuitId: 'red-bull-ring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-09-23T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2022-09-24T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2022-09-24T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2022-09-25T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2022-09-25T11:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'dtm-2022-hockenheimring',
    round: 8,
    name: 'Hockenheimring',
    circuitId: 'hockenheimring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-10-07T08:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2022-10-08T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2022-10-08T11:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2022-10-09T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2022-10-09T11:30:00Z', durationMinutes: 60 },
    ],
  },
]
