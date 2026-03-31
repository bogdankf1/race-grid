import { RaceEvent } from '@/lib/types'

// Super GT 2025 season calendar — 8 rounds
// Source: supergt.net, en.wikipedia.org/wiki/2025_Super_GT_Series — verified March 2026
export const supergt2025: RaceEvent[] = [
  {
    id: 'supergt-2025-okayama',
    round: 1,
    name: 'Okayama GT 300km',
    circuitId: 'okayama-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-04-12T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-04-12T05:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-04-13T04:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2025-fuji-1',
    round: 2,
    name: 'Fuji GT 3 Hours GW Special',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-05-03T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-03T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-05-04T03:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'supergt-2025-sepang',
    round: 3,
    name: 'Super GT Malaysia Festival',
    circuitId: 'sepang-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-06-27T03:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-06-27T07:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-06-28T06:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2025-fuji-2',
    round: 4,
    name: 'Fuji GT Sprint Race',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-08-02T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-02T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-08-03T04:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2025-suzuka',
    round: 5,
    name: 'Suzuka GT 300km',
    circuitId: 'suzuka-international-racing-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-08-23T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-23T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-08-24T04:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2025-sugo',
    round: 6,
    name: 'Sugo GT 300km',
    circuitId: 'sportsland-sugo',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-09-20T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-09-20T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-09-21T04:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2025-autopolis',
    round: 7,
    name: 'Autopolis GT 3 Hours',
    circuitId: 'autopolis',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-10-18T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-10-18T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-10-19T04:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'supergt-2025-motegi',
    round: 8,
    name: 'Motegi GT 300km Grand Final',
    circuitId: 'twin-ring-motegi',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-11-01T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-11-01T04:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-11-02T04:00:00Z', durationMinutes: 100 },
    ],
  },
]
