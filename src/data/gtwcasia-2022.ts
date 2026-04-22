import { RaceEvent } from '@/lib/types'

// GT World Challenge Asia 2022 — 5 events
// Source: Wikipedia / gt-world-challenge-asia.com
export const gtwcasia2022: RaceEvent[] = [
  {
    id: 'gtwcasia-2022-sepang',
    round: 1,
    name: 'Sepang',
    circuitId: 'sepang-international-circuit',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2022-05-20T02:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2022-05-21T02:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2022-05-21T02:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2022-05-21T06:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2022-05-22T03:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcasia-2022-suzuka',
    round: 2,
    name: 'Suzuka',
    circuitId: 'suzuka-international-racing-course',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2022-07-15T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2022-07-16T01:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2022-07-16T01:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2022-07-16T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2022-07-17T02:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcasia-2022-fuji',
    round: 3,
    name: 'Fuji',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2022-07-22T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2022-07-23T01:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2022-07-23T01:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2022-07-23T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2022-07-24T02:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcasia-2022-sugo',
    round: 4,
    name: 'SUGO',
    circuitId: 'sportsland-sugo',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2022-08-19T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2022-08-20T01:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2022-08-20T01:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2022-08-20T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2022-08-21T02:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcasia-2022-okayama',
    round: 5,
    name: 'Okayama',
    circuitId: 'okayama-international-circuit',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2022-09-23T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2022-09-24T01:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2022-09-24T01:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2022-09-24T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2022-09-25T02:00:00Z', durationMinutes: 60 },
    ],
  },
]
