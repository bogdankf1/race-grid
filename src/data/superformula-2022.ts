import { RaceEvent } from '@/lib/types'

// Super Formula 2022 season calendar — 10 rounds across 7 weekends
// Source: en.wikipedia.org/wiki/2022_Super_Formula_Championship, superformula.net
// All times JST (UTC+9). UTC = JST − 9h.
// Double-headers at Fuji (Rds 1-2, Apr), Motegi (Rds 7-8, Aug), Suzuka (Rds 9-10, Oct).
export const superformula2022: RaceEvent[] = [
  {
    id: 'sf-2022-fuji-1',
    round: 1,
    name: 'Fuji — Rds. 1 & 2',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-04-08T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2022-04-09T00:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2022-04-09T05:45:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2022-04-10T01:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 2', startUtc: '2022-04-10T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2022-suzuka-1',
    round: 3,
    name: 'Suzuka — Rd. 3',
    circuitId: 'suzuka-international-racing-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-04-23T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-23T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-04-24T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2022-autopolis',
    round: 4,
    name: 'Autopolis — Rd. 4',
    circuitId: 'autopolis',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-05-21T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-21T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-05-22T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2022-sugo',
    round: 5,
    name: 'Sugo — Rd. 5',
    circuitId: 'sportsland-sugo',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-06-18T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-18T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-06-19T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2022-fuji-2',
    round: 6,
    name: 'Fuji — Rd. 6',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-07-16T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-16T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-07-17T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2022-motegi',
    round: 7,
    name: 'Motegi — Rds. 7 & 8',
    circuitId: 'twin-ring-motegi',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-08-19T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2022-08-20T00:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2022-08-20T05:45:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2022-08-21T01:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 2', startUtc: '2022-08-21T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2022-suzuka-2',
    round: 9,
    name: 'Suzuka Finale — Rds. 9 & 10',
    circuitId: 'suzuka-international-racing-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-10-28T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2022-10-29T00:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2022-10-29T05:45:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2022-10-30T01:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 2', startUtc: '2022-10-30T05:45:00Z', durationMinutes: 75 },
    ],
  },
]
