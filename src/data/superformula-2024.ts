import { RaceEvent } from '@/lib/types'

// Super Formula 2024 season calendar — 9 rounds across 7 weekends
// Source: en.wikipedia.org/wiki/2024_Super_Formula_Championship, superformula.net
// All times JST (UTC+9). UTC = JST − 9h.
// Double-headers at Fuji (Rds 6-7, Oct) and Suzuka (Rds 8-9, Nov).
export const superformula2024: RaceEvent[] = [
  {
    id: 'sf-2024-suzuka-1',
    round: 1,
    name: 'Suzuka — Rd. 1',
    circuitId: 'suzuka-international-racing-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-03-09T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-09T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2024-03-10T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2024-autopolis',
    round: 2,
    name: 'Autopolis — Rd. 2',
    circuitId: 'autopolis',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-05-18T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-18T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2024-05-19T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2024-sugo',
    round: 3,
    name: 'Sugo — Rd. 3',
    circuitId: 'sportsland-sugo',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-06-22T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-22T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2024-06-23T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2024-fuji-1',
    round: 4,
    name: 'Fuji — Rd. 4',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-07-20T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-20T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2024-07-21T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2024-motegi',
    round: 5,
    name: 'Motegi — Rd. 5',
    circuitId: 'twin-ring-motegi',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-08-24T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-24T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2024-08-25T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2024-fuji-2',
    round: 6,
    name: 'Fuji — Rds. 6 & 7',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-10-11T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2024-10-12T00:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2024-10-12T05:45:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2024-10-13T01:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 2', startUtc: '2024-10-13T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2024-suzuka-2',
    round: 8,
    name: 'Suzuka Finale — Rds. 8 & 9',
    circuitId: 'suzuka-international-racing-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-11-08T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2024-11-09T00:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2024-11-09T05:45:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2024-11-10T01:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 2', startUtc: '2024-11-10T05:45:00Z', durationMinutes: 75 },
    ],
  },
]
