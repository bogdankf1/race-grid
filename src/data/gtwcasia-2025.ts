import { RaceEvent } from '@/lib/types'

// GT World Challenge Asia 2025 — 6 events
// Source: Wikipedia / gt-world-challenge-asia.com
export const gtwcasia2025: RaceEvent[] = [
  {
    id: 'gtwcasia-2025-sepang',
    round: 1,
    name: 'Sepang',
    circuitId: 'sepang-international-circuit',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2025-04-12T02:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2025-04-12T04:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2025-04-12T04:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2025-04-12T06:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2025-04-13T03:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcasia-2025-mandalika',
    round: 2,
    name: 'Mandalika',
    circuitId: 'mandalika-circuit',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2025-05-10T02:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2025-05-10T04:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2025-05-10T04:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2025-05-10T06:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2025-05-11T03:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcasia-2025-buriram',
    round: 3,
    name: 'Buriram',
    circuitId: 'chang-international-circuit',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2025-05-31T03:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2025-05-31T05:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2025-05-31T05:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2025-05-31T07:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2025-06-01T04:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcasia-2025-fuji',
    round: 4,
    name: 'Fuji',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2025-07-12T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2025-07-12T03:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2025-07-12T03:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2025-07-12T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2025-07-13T02:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcasia-2025-okayama',
    round: 5,
    name: 'Okayama',
    circuitId: 'okayama-international-circuit',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2025-08-30T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2025-08-30T03:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2025-08-30T03:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2025-08-30T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2025-08-31T02:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcasia-2025-beijing',
    round: 6,
    name: 'Beijing',
    circuitId: 'beijing-street-circuit',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2025-10-18T02:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2025-10-18T04:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2025-10-18T04:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2025-10-18T06:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2025-10-19T03:00:00Z', durationMinutes: 60 },
    ],
  },
]
