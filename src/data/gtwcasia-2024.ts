import { RaceEvent } from '@/lib/types'

// GT World Challenge Asia 2024 — 6 events
// Source: Wikipedia / gt-world-challenge-asia.com
export const gtwcasia2024: RaceEvent[] = [
  {
    id: 'gtwcasia-2024-sepang',
    round: 1,
    name: 'Sepang',
    circuitId: 'sepang-international-circuit',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2024-04-20T02:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2024-04-20T04:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2024-04-20T04:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2024-04-20T06:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2024-04-21T03:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcasia-2024-buriram',
    round: 2,
    name: 'Buriram',
    circuitId: 'chang-international-circuit',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2024-05-11T03:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2024-05-11T05:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2024-05-11T05:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2024-05-11T07:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2024-05-12T04:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcasia-2024-fuji',
    round: 3,
    name: 'Fuji',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2024-06-22T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2024-06-22T03:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2024-06-22T03:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2024-06-22T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2024-06-23T02:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcasia-2024-suzuka',
    round: 4,
    name: 'Suzuka',
    circuitId: 'suzuka-international-racing-course',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2024-07-06T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2024-07-06T03:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2024-07-06T03:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2024-07-06T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2024-07-07T02:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcasia-2024-okayama',
    round: 5,
    name: 'Okayama',
    circuitId: 'okayama-international-circuit',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2024-08-24T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2024-08-24T03:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2024-08-24T03:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2024-08-24T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2024-08-25T02:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcasia-2024-shanghai',
    round: 6,
    name: 'Shanghai',
    circuitId: 'shanghai-international-circuit',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2024-09-14T02:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2024-09-14T04:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2024-09-14T04:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2024-09-14T06:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2024-09-15T03:00:00Z', durationMinutes: 60 },
    ],
  },
]
