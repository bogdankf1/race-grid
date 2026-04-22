import { RaceEvent } from '@/lib/types'

// GT World Challenge Asia 2026 — 6 events, 12 one-hour races
// Source: gt-world-challenge-asia.com (official event timetables)
export const gtwcasia2026: RaceEvent[] = [
  {
    id: 'gtwcasia-2026-sepang',
    round: 1,
    name: 'Sepang',
    circuitId: 'sepang-international-circuit',
    sessions: [
      // Friday 3 Apr (MYT UTC+8)
      { type: 'practice', label: 'Official Practice', startUtc: '2026-04-03T03:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Bronze Session', startUtc: '2026-04-03T04:10:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2026-04-03T07:40:00Z', durationMinutes: 60 },
      // Saturday 4 Apr
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-04-04T02:25:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-04-04T02:47:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2026-04-04T06:15:00Z', durationMinutes: 60 },
      // Sunday 5 Apr
      { type: 'race', label: 'Race 2', startUtc: '2026-04-05T03:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcasia-2026-mandalika',
    round: 2,
    name: 'Mandalika',
    circuitId: 'mandalika-circuit',
    sessions: [
      // Friday 1 May (WITA UTC+8)
      { type: 'practice', label: 'Official Practice', startUtc: '2026-05-01T02:40:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Bronze Session', startUtc: '2026-05-01T03:50:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2026-05-01T06:45:00Z', durationMinutes: 60 },
      // Saturday 2 May
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-05-02T01:15:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-05-02T01:37:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2026-05-02T05:30:00Z', durationMinutes: 60 },
      // Sunday 3 May
      { type: 'race', label: 'Race 2', startUtc: '2026-05-03T03:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcasia-2026-shanghai',
    round: 3,
    name: 'Shanghai',
    circuitId: 'shanghai-international-circuit',
    sessions: [
      // Thursday 4 Jun (CST UTC+8)
      { type: 'practice', label: 'Official Practice', startUtc: '2026-06-04T01:20:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Bronze Session', startUtc: '2026-06-04T02:25:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2026-06-04T06:55:00Z', durationMinutes: 60 },
      // Friday 5 Jun
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-06-05T00:30:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-06-05T00:52:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2026-06-05T06:35:00Z', durationMinutes: 60 },
      // Saturday 6 Jun
      { type: 'race', label: 'Race 2', startUtc: '2026-06-06T02:50:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcasia-2026-fuji',
    round: 4,
    name: 'Fuji',
    circuitId: 'fuji-speedway',
    sessions: [
      // Friday 10 Jul (JST UTC+9)
      { type: 'practice', label: 'Official Practice', startUtc: '2026-07-10T01:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2026-07-10T05:00:00Z', durationMinutes: 60 },
      // Saturday 11 Jul
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-07-11T00:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-07-11T00:22:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2026-07-11T05:00:00Z', durationMinutes: 60 },
      // Sunday 12 Jul
      { type: 'race', label: 'Race 2', startUtc: '2026-07-12T02:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcasia-2026-okayama',
    round: 5,
    name: 'Okayama',
    circuitId: 'okayama-international-circuit',
    sessions: [
      // Friday 28 Aug (JST UTC+9)
      { type: 'practice', label: 'Official Practice', startUtc: '2026-08-28T01:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2026-08-28T05:00:00Z', durationMinutes: 60 },
      // Saturday 29 Aug
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-08-29T00:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-08-29T00:22:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2026-08-29T05:00:00Z', durationMinutes: 60 },
      // Sunday 30 Aug
      { type: 'race', label: 'Race 2', startUtc: '2026-08-30T02:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcasia-2026-beijing',
    round: 6,
    name: 'Beijing',
    circuitId: 'beijing-street-circuit',
    sessions: [
      // Friday 2 Oct (CST UTC+8)
      { type: 'practice', label: 'Official Practice', startUtc: '2026-10-02T01:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2026-10-02T05:00:00Z', durationMinutes: 60 },
      // Saturday 3 Oct
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-10-03T00:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-10-03T00:22:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2026-10-03T05:00:00Z', durationMinutes: 60 },
      // Sunday 4 Oct
      { type: 'race', label: 'Race 2', startUtc: '2026-10-04T02:00:00Z', durationMinutes: 60 },
    ],
  },
]
