import { RaceEvent } from '@/lib/types'

// Super Formula 2021 season calendar — 7 rounds across 6 weekends
// Source: en.wikipedia.org/wiki/2021_Super_Formula_Championship, superformula.net
// All times JST (UTC+9). UTC = JST − 9h.
// Okayama round cancelled due to COVID-19, replaced by second Motegi round.
// All single-race weekends (no double-headers this season).
export const superformula2021: RaceEvent[] = [
  {
    id: 'sf-2021-fuji',
    round: 1,
    name: 'Fuji — Rd. 1',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-04-03T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-04-03T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-04-04T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2021-suzuka-1',
    round: 2,
    name: 'Suzuka — Rd. 2',
    circuitId: 'suzuka-international-racing-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-04-24T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-04-24T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-04-25T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2021-autopolis',
    round: 3,
    name: 'Autopolis — Rd. 3',
    circuitId: 'autopolis',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-05-15T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-15T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-05-16T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2021-sugo',
    round: 4,
    name: 'Sugo — Rd. 4',
    circuitId: 'sportsland-sugo',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-06-19T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-19T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-06-20T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2021-motegi-1',
    round: 5,
    name: 'Motegi — Rd. 5',
    circuitId: 'twin-ring-motegi',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-08-28T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-28T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-08-29T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2021-motegi-2',
    round: 6,
    name: 'Motegi — Rd. 6',
    circuitId: 'twin-ring-motegi',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-10-16T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-16T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-10-17T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2021-suzuka-2',
    round: 7,
    name: 'Suzuka Finale — Rd. 7',
    circuitId: 'suzuka-international-racing-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-10-30T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-30T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-10-31T05:45:00Z', durationMinutes: 75 },
    ],
  },
]
