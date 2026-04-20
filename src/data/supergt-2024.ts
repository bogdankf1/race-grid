import { RaceEvent } from '@/lib/types'

// Super GT 2024 season calendar — 8 rounds
// Source: en.wikipedia.org/wiki/2024_Super_GT_Series, supergt.net
// All times JST (UTC+9). UTC = JST − 9h.
// Round 8 was originally Aug at Suzuka (350km), postponed by Typhoon Shanshan to Dec 7-8 (300km).
export const supergt2024: RaceEvent[] = [
  {
    id: 'supergt-2024-okayama',
    round: 1,
    name: 'Okayama GT 300km',
    circuitId: 'okayama-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-04-13T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-13T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-04-14T04:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2024-fuji-1',
    round: 2,
    name: 'Fuji GT 3 Hours',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-05-03T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-03T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-05-04T03:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'supergt-2024-suzuka-1',
    round: 3,
    name: 'Suzuka GT 3 Hours',
    circuitId: 'suzuka-international-racing-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-06-01T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-01T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-06-02T03:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'supergt-2024-fuji-2',
    round: 4,
    name: 'Fuji GT 350km',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-08-03T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-03T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-08-04T04:00:00Z', durationMinutes: 140 },
    ],
  },
  {
    id: 'supergt-2024-sugo',
    round: 5,
    name: 'Sugo GT 300km',
    circuitId: 'sportsland-sugo',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-09-21T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-21T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-09-22T04:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2024-autopolis',
    round: 6,
    name: 'Autopolis GT 3 Hours',
    circuitId: 'autopolis',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-10-19T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-10-19T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-10-20T03:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'supergt-2024-motegi',
    round: 7,
    name: 'Motegi GT 300km',
    circuitId: 'twin-ring-motegi',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-11-02T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-11-02T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-11-03T04:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2024-suzuka-2',
    round: 8,
    name: 'Suzuka GT 300km',
    circuitId: 'suzuka-international-racing-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-12-07T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-12-07T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-12-08T04:00:00Z', durationMinutes: 120 },
    ],
  },
]
