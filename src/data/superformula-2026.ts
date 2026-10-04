import { RaceEvent } from '@/lib/types'

// Super Formula 2026 season calendar — 12 rounds across 7 weekends
// Sources: superformula.net, as-web.jp time schedules, J SPORTS broadcast guide — re-verified Oct 2026
// Rd.3 (Autopolis, 26 Apr) was abandoned after heavy rain and re-run as a 25-lap sprint at the Fuji July weekend.
// All times Japan Standard Time (JST = UTC+9, no DST). UTC = JST − 9h.
// Sessions flagged TBA have no published timetable yet.
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
      // Sat 25 Apr FP 09:15, Q1-Q3 14:15-15:17; Sun 26 Apr FP 09:40 (JST). The Rd.3 race (14:30) was red-flagged after one
      // safety-car lap and abandoned — rescheduled to the Fuji July weekend (see sf-2026-fuji-1). Source: as-web.jp
      { type: 'practice', label: 'Practice 1', startUtc: '2026-04-25T00:15:00Z', durationMinutes: 115 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-25T05:15:00Z', durationMinutes: 62 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-04-26T00:40:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'sf-2026-suzuka-1',
    round: 4,
    name: 'Suzuka — Rds. 4 & 5',
    circuitId: 'suzuka-international-racing-course',
    sessions: [
      // Sat Q1 09:15 / Sun Q1 10:25 JST, races 14:45 JST (31 laps). Friday practice time not published (shown as TBA)
      { type: 'practice', label: 'Practice', startUtc: '2026-05-22T01:00:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-05-23T00:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race 1', startUtc: '2026-05-23T05:45:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-05-24T01:25:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race 2', startUtc: '2026-05-24T05:45:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2026-fuji-1',
    round: 6,
    name: 'Fuji — Rds. 3, 6 & 7',
    circuitId: 'fuji-speedway',
    sessions: [
      // Triple-header: Rd.6 Q 08:15 + race 16:15 (Sat), Rd.7 Q 10:35 (Sat) + race 15:35 (Sun), plus the replacement Rd.3 race
      // (25 laps, Sunday morning, grid from the Autopolis qualifying — start time not published, shown as TBA). Times JST.
      { type: 'practice', label: 'Practice', startUtc: '2026-07-17T01:00:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying 1 (Rd.6)', startUtc: '2026-07-17T23:15:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying 2 (Rd.7)', startUtc: '2026-07-18T01:35:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race 1 (Rd.6)', startUtc: '2026-07-18T07:15:00Z', durationMinutes: 75 },
      { type: 'race', label: 'Race (Rd.3 replacement)', startUtc: '2026-07-19T01:00:00Z', durationMinutes: 45, tba: true },
      { type: 'race', label: 'Race 2 (Rd.7)', startUtc: '2026-07-19T06:35:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2026-sugo',
    round: 8,
    name: 'Sugo — Rd. 8',
    circuitId: 'sportsland-sugo',
    sessions: [
      // Sat FP1 09:00, Q1-Q3 14:20-15:22; Sun FP2 09:30, race 14:20 JST (51 laps). Source: as-web.jp
      { type: 'practice', label: 'Practice 1', startUtc: '2026-08-08T00:00:00Z', durationMinutes: 115 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-08T05:20:00Z', durationMinutes: 62 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-08-09T00:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2026-08-09T05:20:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2026-fuji-2',
    round: 9,
    name: 'Fuji — Rds. 9 & 10',
    circuitId: 'fuji-speedway',
    sessions: [
      // Official timetable not yet published — times are estimates from the J SPORTS broadcast windows (shown as TBA)
      { type: 'practice', label: 'Practice', startUtc: '2026-10-09T01:00:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-10-10T00:30:00Z', durationMinutes: 45, tba: true },
      { type: 'race', label: 'Race 1', startUtc: '2026-10-10T05:35:00Z', durationMinutes: 75, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-10-11T00:50:00Z', durationMinutes: 45, tba: true },
      { type: 'race', label: 'Race 2', startUtc: '2026-10-11T05:35:00Z', durationMinutes: 75, tba: true },
    ],
  },
  {
    id: 'sf-2026-suzuka-2',
    round: 11,
    name: 'Suzuka Finale — Rds. 11 & 12',
    circuitId: 'suzuka-international-racing-course',
    sessions: [
      // Official timetable not yet published — times are estimates (shown as TBA)
      { type: 'practice', label: 'Practice', startUtc: '2026-11-20T01:00:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-11-21T00:30:00Z', durationMinutes: 45, tba: true },
      { type: 'race', label: 'Race 1', startUtc: '2026-11-21T05:45:00Z', durationMinutes: 75, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-11-22T01:10:00Z', durationMinutes: 45, tba: true },
      { type: 'race', label: 'Race 2', startUtc: '2026-11-22T05:45:00Z', durationMinutes: 75, tba: true },
    ],
  },
]
