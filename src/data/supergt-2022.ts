import { RaceEvent } from '@/lib/types'

// Super GT 2022 season calendar — 8 rounds
// Source: en.wikipedia.org/wiki/2022_Super_GT_Series, supergt.net
// All times JST (UTC+9). UTC = JST − 9h.
// Fuji Rd4 was 100 laps (~350km equivalent, ~140min).
export const supergt2022: RaceEvent[] = [
  {
    id: 'supergt-2022-okayama',
    round: 1,
    name: 'Okayama GT 300km',
    circuitId: 'okayama-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-04-16T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-16T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-04-17T04:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2022-fuji-1',
    round: 2,
    name: 'Fuji GT 450km',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-05-03T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-03T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-05-04T04:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'supergt-2022-suzuka-1',
    round: 3,
    name: 'Suzuka GT 300km',
    circuitId: 'suzuka-international-racing-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-05-28T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-28T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-05-29T04:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2022-fuji-2',
    round: 4,
    name: 'Fuji GT 100 Laps',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-08-06T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-08-06T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-08-07T04:00:00Z', durationMinutes: 140 },
    ],
  },
  {
    id: 'supergt-2022-suzuka-2',
    round: 5,
    name: 'Suzuka GT 450km',
    circuitId: 'suzuka-international-racing-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-08-27T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-08-27T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-08-28T04:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'supergt-2022-sugo',
    round: 6,
    name: 'Sugo GT 300km',
    circuitId: 'sportsland-sugo',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-09-17T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-17T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-09-18T04:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2022-autopolis',
    round: 7,
    name: 'Autopolis GT 300km',
    circuitId: 'autopolis',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-10-01T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-01T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-10-02T04:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2022-motegi',
    round: 8,
    name: 'Motegi GT 300km',
    circuitId: 'twin-ring-motegi',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-11-05T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-11-05T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-11-06T04:00:00Z', durationMinutes: 120 },
    ],
  },
]
