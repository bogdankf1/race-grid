import { RaceEvent } from '@/lib/types'

// GT World Challenge Asia 2023 — 6 events
// Source: Wikipedia / gt-world-challenge-asia.com
export const gtwcasia2023: RaceEvent[] = [
  {
    id: 'gtwcasia-2023-buriram',
    round: 1,
    name: 'Buriram',
    circuitId: 'chang-international-circuit',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2023-05-13T03:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2023-05-13T05:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-05-13T05:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2023-05-13T07:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2023-05-14T04:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcasia-2023-fuji',
    round: 2,
    name: 'Fuji',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2023-06-17T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2023-06-17T03:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-06-17T03:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2023-06-17T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2023-06-18T02:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcasia-2023-suzuka',
    round: 3,
    name: 'Suzuka',
    circuitId: 'suzuka-international-racing-course',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2023-07-15T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2023-07-15T03:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-07-15T03:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2023-07-15T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2023-07-16T02:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcasia-2023-motegi',
    round: 4,
    name: 'Motegi',
    circuitId: 'twin-ring-motegi',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2023-07-22T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2023-07-22T03:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-07-22T03:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2023-07-22T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2023-07-23T02:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcasia-2023-okayama',
    round: 5,
    name: 'Okayama',
    circuitId: 'okayama-international-circuit',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2023-08-19T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2023-08-19T03:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-08-19T03:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2023-08-19T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2023-08-20T02:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcasia-2023-sepang',
    round: 6,
    name: 'Sepang',
    circuitId: 'sepang-international-circuit',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2023-09-23T02:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2023-09-23T04:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-09-23T04:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2023-09-23T06:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2023-09-24T03:00:00Z', durationMinutes: 60 },
    ],
  },
]
