import { RaceEvent } from '@/lib/types'

// Super GT 2021 season calendar — 8 rounds (all in Japan due to COVID-19)
// Source: en.wikipedia.org/wiki/2021_Super_GT_Series, supergt.net
// All times JST (UTC+9). UTC = JST − 9h.
// Originally planned with overseas rounds (Sepang, Chang) cancelled due to travel restrictions.
// Suzuka Rd3 postponed from May 30 to August 22 due to COVID-19.
// Rounds are numbered by promotional designation, not chronological order.
export const supergt2021: RaceEvent[] = [
  {
    id: 'supergt-2021-okayama',
    round: 1,
    name: 'Okayama GT 300km',
    circuitId: 'okayama-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-04-10T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-04-10T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-04-11T04:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2021-fuji-1',
    round: 2,
    name: 'Fuji GT 500km',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-05-03T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-03T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-05-04T03:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'supergt-2021-suzuka',
    round: 3,
    name: 'Suzuka GT 300km',
    circuitId: 'suzuka-international-racing-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-08-21T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-21T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-08-22T04:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2021-motegi-1',
    round: 4,
    name: 'Motegi GT 300km',
    circuitId: 'twin-ring-motegi',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-07-17T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-17T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-07-18T04:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2021-sugo',
    round: 5,
    name: 'Sugo GT 300km',
    circuitId: 'sportsland-sugo',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-09-11T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-11T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-09-12T04:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2021-autopolis',
    round: 6,
    name: 'Autopolis GT 300km',
    circuitId: 'autopolis',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-10-23T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-23T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-10-24T04:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2021-motegi-2',
    round: 7,
    name: 'Motegi GT 300km',
    circuitId: 'twin-ring-motegi',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-11-06T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-11-06T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-11-07T04:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2021-fuji-2',
    round: 8,
    name: 'Fuji GT 300km',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-11-27T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-11-27T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-11-28T04:00:00Z', durationMinutes: 120 },
    ],
  },
]
