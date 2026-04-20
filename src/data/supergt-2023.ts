import { RaceEvent } from '@/lib/types'

// Super GT 2023 season calendar — 8 rounds
// Source: en.wikipedia.org/wiki/2023_Super_GT_Series, supergt.net
// All times JST (UTC+9). UTC = JST − 9h.
// 450km races use ~180min duration; 300km races use ~120min duration.
export const supergt2023: RaceEvent[] = [
  {
    id: 'supergt-2023-okayama',
    round: 1,
    name: 'Okayama GT 300km',
    circuitId: 'okayama-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-04-15T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-15T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-04-16T04:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2023-fuji-1',
    round: 2,
    name: 'Fuji GT 450km',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-05-03T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-05-03T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-05-04T04:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'supergt-2023-suzuka-1',
    round: 3,
    name: 'Suzuka GT 450km',
    circuitId: 'suzuka-international-racing-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-06-03T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-03T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-06-04T04:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'supergt-2023-fuji-2',
    round: 4,
    name: 'Fuji GT 450km',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-08-05T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-05T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-08-06T04:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'supergt-2023-suzuka-2',
    round: 5,
    name: 'Suzuka GT 450km',
    circuitId: 'suzuka-international-racing-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-08-26T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-26T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-08-27T04:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'supergt-2023-sugo',
    round: 6,
    name: 'Sugo GT 300km',
    circuitId: 'sportsland-sugo',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-09-16T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-16T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-09-17T04:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2023-autopolis',
    round: 7,
    name: 'Autopolis GT 450km',
    circuitId: 'autopolis',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-10-14T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-10-14T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-10-15T04:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'supergt-2023-motegi',
    round: 8,
    name: 'Motegi GT 300km',
    circuitId: 'twin-ring-motegi',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-11-04T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-11-04T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-11-05T04:00:00Z', durationMinutes: 120 },
    ],
  },
]
