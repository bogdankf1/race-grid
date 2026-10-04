import { RaceEvent } from '@/lib/types'

// GT World Challenge Asia 2026 — 6 events, 12 one-hour races
// Source: gt-world-challenge-asia.com (official event timetables — GMT column, re-verified Oct 2026)
// Paid test sessions omitted. Rounds are in chronological order; Shanghai is the season finale.
export const gtwcasia2026: RaceEvent[] = [
  {
    id: 'gtwcasia-2026-sepang',
    round: 1,
    name: 'Sepang',
    circuitId: 'sepang-international-circuit',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2026-04-03T03:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Bronze Session', startUtc: '2026-04-03T04:10:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2026-04-03T07:40:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-04-04T02:25:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-04-04T02:47:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2026-04-04T06:15:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2026-04-05T03:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcasia-2026-mandalika',
    round: 2,
    name: 'Mandalika',
    circuitId: 'mandalika-circuit',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2026-05-01T02:50:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Bronze Session', startUtc: '2026-05-01T04:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2026-05-01T06:55:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-05-02T01:15:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-05-02T01:37:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2026-05-02T05:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2026-05-03T03:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcasia-2026-fuji',
    round: 3,
    name: 'Fuji',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2026-07-10T02:10:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Bronze Session', startUtc: '2026-07-10T03:15:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2026-07-10T06:45:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-07-10T23:30:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-07-10T23:52:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2026-07-11T03:35:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2026-07-12T02:35:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcasia-2026-okayama',
    round: 4,
    name: 'Okayama',
    circuitId: 'okayama-international-circuit',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2026-08-28T03:20:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Bronze Session', startUtc: '2026-08-28T04:30:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2026-08-28T06:40:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-08-29T00:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-08-29T00:22:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2026-08-29T04:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2026-08-30T01:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcasia-2026-beijing',
    round: 5,
    name: 'Beijing',
    circuitId: 'beijing-street-circuit',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2026-10-02T07:55:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Bronze Session', startUtc: '2026-10-02T09:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2026-10-03T00:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-10-03T03:50:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-10-03T04:12:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2026-10-03T07:45:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2026-10-04T05:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcasia-2026-shanghai',
    round: 6,
    name: 'Shanghai',
    circuitId: 'shanghai-international-circuit',
    // Relocated from the provisional June date to the season finale weekend (Fri 30 Oct – Sun 1 Nov 2026) —
    // SRO could not run on 7 Jun (China Gaokao exams). Detailed session timetable not yet published
    // on gt-world-challenge-asia.com; times below are carried over from the provisional schedule (CST UTC+8)
    // and shown as TBA until the official timetable is released.
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2026-10-30T01:20:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Bronze Session', startUtc: '2026-10-30T02:25:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2026-10-30T06:55:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-10-31T00:30:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-10-31T00:52:00Z', durationMinutes: 15, tba: true },
      { type: 'race', label: 'Race 1', startUtc: '2026-10-31T06:35:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race 2', startUtc: '2026-11-01T02:50:00Z', durationMinutes: 60, tba: true },
    ],
  },
]
