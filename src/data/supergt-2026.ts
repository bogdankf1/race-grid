import { RaceEvent } from '@/lib/types'

// Super GT 2026 season calendar
// Source: supergt.net, dailysportscar.com, sportscar365.com — verified April 2026
// Note: Sepang round (originally Round 3, June 20-21) was postponed to 2027 or later
// per GTA announcement (April 8-10, 2026) due to Middle East conflict and freight costs.
// Season is now 7 rounds (down from 8). All races held in Japan (JST = UTC+9).
export const supergt2026: RaceEvent[] = [
  {
    id: 'supergt-2026-okayama',
    round: 1,
    name: 'Okayama GT 300km',
    circuitId: 'okayama-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-04-11T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-11T05:00:00Z', durationMinutes: 81 },
      { type: 'race', label: 'Race', startUtc: '2026-04-12T04:20:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2026-fuji-1',
    round: 2,
    name: 'Fuji GT 3 Hours',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-05-03T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-03T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-05-04T03:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'supergt-2026-fuji-2',
    round: 3,
    name: 'Fuji GT 300km',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-08-01T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-01T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-08-02T04:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2026-suzuka',
    round: 4,
    name: 'Suzuka GT 300km',
    circuitId: 'suzuka-international-racing-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-08-22T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-22T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-08-23T04:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2026-sugo',
    round: 5,
    name: 'Sugo GT 300km',
    circuitId: 'sportsland-sugo',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-09-19T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-19T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-09-20T04:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2026-autopolis',
    round: 6,
    name: 'Autopolis GT 3 Hours',
    circuitId: 'autopolis',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-10-17T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-17T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-10-18T04:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'supergt-2026-motegi',
    round: 7,
    name: 'Motegi GT 300km',
    circuitId: 'twin-ring-motegi',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-11-07T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-11-07T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-11-08T04:00:00Z', durationMinutes: 120 },
    ],
  },
]
