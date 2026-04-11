import { RaceEvent } from '@/lib/types'

// Super Formula 2026 season calendar — 12 races across 7 weekends, 5 double-headers
// Sources: superformula.net, honda.racing/super-formula/calendar/super-formula-2026,
// en.wikipedia.org/wiki/2026_Super_Formula_Championship, mr-motegi.jp/eng/2and4/
// Verified April 2026
//
// 2026 race weekend format: each race day on a double-header has its own qualifying
// in the morning and race in the afternoon (uniform race distance, ~250km / ~1h).
// Single-race weekends (Autopolis, Sugo) use a three-stage knockout qualifying.
//
// All times Japan Standard Time (JST = UTC+9, no DST). UTC = JST − 9h.
//
// NOTE: Only Round 1-2 (Motegi) session times are officially published by the venue.
// Subsequent rounds use placeholder times based on typical Super Formula scheduling
// (practice ~10:00 JST / 01:00 UTC, qualifying ~10:00 JST / 01:00 UTC, race ~14:45 JST
// / 05:45 UTC). These should be updated as each venue publishes its official timetable.
export const superformula2026: RaceEvent[] = [
  {
    id: 'sf-2026-motegi',
    round: 1,
    name: 'Motegi — Rds. 1 & 2',
    circuitId: 'twin-ring-motegi',
    sessions: [
      // Apr 3 Fri Practice 1: 10:10 JST → 01:10 UTC
      { type: 'practice', label: 'Practice 1', startUtc: '2026-04-03T01:10:00Z', durationMinutes: 90 },
      // Apr 3 Fri Practice 2: 14:30 JST → 05:30 UTC
      { type: 'practice', label: 'Practice 2', startUtc: '2026-04-03T05:30:00Z', durationMinutes: 115 },
      // Apr 4 Sat Q1: 09:30 JST → 00:30 UTC
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-04-04T00:30:00Z', durationMinutes: 45 },
      // Apr 4 Sat R1: 14:45 JST → 05:45 UTC
      { type: 'race', label: 'Race 1', startUtc: '2026-04-04T05:45:00Z', durationMinutes: 75 },
      // Apr 5 Sun Q2: 10:10 JST → 01:10 UTC
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-04-05T01:10:00Z', durationMinutes: 45 },
      // Apr 5 Sun R2: 14:45 JST → 05:45 UTC
      { type: 'race', label: 'Race 2', startUtc: '2026-04-05T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2026-autopolis',
    round: 3,
    name: 'Autopolis — Rd. 3',
    circuitId: 'autopolis',
    sessions: [
      // Placeholder times — Autopolis has not published official 2026 schedule
      { type: 'practice', label: 'Practice', startUtc: '2026-04-25T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-25T04:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-04-26T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2026-suzuka-1',
    round: 4,
    name: 'Suzuka — Rds. 4 & 5',
    circuitId: 'suzuka-international-racing-course',
    sessions: [
      // Placeholder times — Suzuka has not published official 2026 schedule
      { type: 'practice', label: 'Practice', startUtc: '2026-05-22T01:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-05-23T00:30:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race 1', startUtc: '2026-05-23T05:45:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-05-24T01:10:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race 2', startUtc: '2026-05-24T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2026-fuji-1',
    round: 6,
    name: 'Fuji — Rds. 6 & 7',
    circuitId: 'fuji-speedway',
    sessions: [
      // Placeholder times — Fuji has not published official 2026 schedule
      { type: 'practice', label: 'Practice', startUtc: '2026-07-17T01:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-07-18T00:30:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race 1', startUtc: '2026-07-18T05:45:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-07-19T01:10:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race 2', startUtc: '2026-07-19T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2026-sugo',
    round: 8,
    name: 'Sugo — Rd. 8',
    circuitId: 'sportsland-sugo',
    sessions: [
      // Placeholder times — Sugo has not published official 2026 schedule
      { type: 'practice', label: 'Practice', startUtc: '2026-08-08T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-08T04:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-08-09T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2026-fuji-2',
    round: 9,
    name: 'Fuji — Rds. 9 & 10',
    circuitId: 'fuji-speedway',
    sessions: [
      // Placeholder times — Fuji autumn round not yet published
      { type: 'practice', label: 'Practice', startUtc: '2026-10-09T01:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-10-10T00:30:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race 1', startUtc: '2026-10-10T05:45:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-10-11T01:10:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race 2', startUtc: '2026-10-11T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2026-suzuka-2',
    round: 11,
    name: 'Suzuka Finale — Rds. 11 & 12',
    circuitId: 'suzuka-international-racing-course',
    sessions: [
      // Placeholder times — Suzuka finale not yet published
      { type: 'practice', label: 'Practice', startUtc: '2026-11-20T01:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-11-21T00:30:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race 1', startUtc: '2026-11-21T05:45:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-11-22T01:10:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race 2', startUtc: '2026-11-22T05:45:00Z', durationMinutes: 75 },
    ],
  },
]
