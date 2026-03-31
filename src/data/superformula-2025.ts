import { RaceEvent } from '@/lib/types'

// Super Formula 2025 season calendar — 7 weekends, 12 rounds (double-headers at most venues)
// Source: superformula.net, en.wikipedia.org/wiki/2025_Super_Formula_Championship — verified March 2026
export const superformula2025: RaceEvent[] = [
  {
    id: 'sf-2025-suzuka-1',
    round: 1,
    name: 'Suzuka — Rds. 1 & 2',
    circuitId: 'suzuka-international-racing-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-03-08T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-03-08T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2025-03-08T06:00:00Z', durationMinutes: 75 },
      { type: 'race', label: 'Race 2', startUtc: '2025-03-09T04:00:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2025-motegi',
    round: 3,
    name: 'Motegi — Rds. 3 & 4',
    circuitId: 'twin-ring-motegi',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-04-19T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-04-19T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2025-04-19T06:00:00Z', durationMinutes: 75 },
      { type: 'race', label: 'Race 2', startUtc: '2025-04-20T04:00:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2025-autopolis',
    round: 5,
    name: 'Autopolis — Rd. 5',
    circuitId: 'autopolis',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-05-17T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-17T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2025-05-18T04:00:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2025-fuji-1',
    round: 6,
    name: 'Fuji — Rds. 6 & 7',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-07-19T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-19T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2025-07-19T06:00:00Z', durationMinutes: 75 },
      { type: 'race', label: 'Race 2', startUtc: '2025-07-20T04:00:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2025-sugo',
    round: 8,
    name: 'Sugo — Rd. 8',
    circuitId: 'sportsland-sugo',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-08-09T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-09T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2025-08-10T04:00:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2025-fuji-2',
    round: 9,
    name: 'Fuji — Rds. 9 & 10',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-10-11T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-10-11T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2025-10-11T06:00:00Z', durationMinutes: 75 },
      { type: 'race', label: 'Race 2', startUtc: '2025-10-12T04:00:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2025-suzuka-2',
    round: 11,
    name: 'Suzuka Finale — Rds. 11 & 12',
    circuitId: 'suzuka-international-racing-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-11-22T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-11-22T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2025-11-22T06:00:00Z', durationMinutes: 75 },
      { type: 'race', label: 'Race 2', startUtc: '2025-11-23T04:00:00Z', durationMinutes: 75 },
    ],
  },
]
