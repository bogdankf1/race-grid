import { RaceEvent } from '@/lib/types'

// Super Formula 2023 season calendar — 9 rounds across 7 weekends
// Source: en.wikipedia.org/wiki/2023_Super_Formula_Championship, superformula.net
// All times JST (UTC+9). UTC = JST − 9h.
// Double-headers at Fuji (Rds 1-2, Apr) and Suzuka (Rds 8-9, Oct).
export const superformula2023: RaceEvent[] = [
  {
    id: 'sf-2023-fuji-1',
    round: 1,
    name: 'Fuji — Rds. 1 & 2',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-04-07T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2023-04-08T00:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2023-04-08T05:45:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-04-09T01:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 2', startUtc: '2023-04-09T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2023-suzuka-1',
    round: 3,
    name: 'Suzuka — Rd. 3',
    circuitId: 'suzuka-international-racing-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-04-22T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-22T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2023-04-23T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2023-autopolis',
    round: 4,
    name: 'Autopolis — Rd. 4',
    circuitId: 'autopolis',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-05-20T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-05-20T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2023-05-21T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2023-sugo',
    round: 5,
    name: 'Sugo — Rd. 5',
    circuitId: 'sportsland-sugo',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-06-17T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-17T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2023-06-18T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2023-fuji-2',
    round: 6,
    name: 'Fuji — Rd. 6',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-07-15T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-15T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2023-07-16T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2023-motegi',
    round: 7,
    name: 'Motegi — Rd. 7',
    circuitId: 'twin-ring-motegi',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-08-19T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-19T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2023-08-20T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2023-suzuka-2',
    round: 8,
    name: 'Suzuka Finale — Rds. 8 & 9',
    circuitId: 'suzuka-international-racing-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-10-27T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2023-10-28T00:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2023-10-28T05:45:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-10-29T01:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 2', startUtc: '2023-10-29T05:45:00Z', durationMinutes: 75 },
    ],
  },
]
