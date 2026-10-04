import { RaceEvent } from '@/lib/types'

// Super GT 2026 season calendar — 8 rounds (Round 3 Sepang cancelled and replaced by a second race at Motegi)
// Source: supergt.net calendar, as-web.jp / circuit timetables — re-verified Oct 2026
// Round numbers follow the official numbering (Motegi Round 3 is held in November, after Round 7).
// Sepang (originally 20-21 Jun) was cancelled due to the Middle East conflict and freight costs; on 2 Aug GTA
// announced the Motegi finale would become a double-header (7 & 8 Nov). All races in Japan (JST = UTC+9).
export const supergt2026: RaceEvent[] = [
  {
    id: 'supergt-2026-okayama',
    round: 1,
    name: 'Okayama GT 300km',
    circuitId: 'okayama-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-04-11T00:30:00Z', durationMinutes: 115 },
      { type: 'qualifying', label: 'Qualifying Q1', startUtc: '2026-04-11T05:00:00Z', durationMinutes: 43 },
      { type: 'qualifying', label: 'Qualifying Q2', startUtc: '2026-04-11T05:53:00Z', durationMinutes: 28 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2026-04-12T02:50:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2026-04-12T04:20:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2026-fuji-1',
    round: 2,
    name: 'Fuji GT 3 Hours',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-05-03T01:30:00Z', durationMinutes: 95 },
      { type: 'qualifying', label: 'Qualifying Q1', startUtc: '2026-05-03T05:20:00Z', durationMinutes: 43 },
      { type: 'qualifying', label: 'Qualifying Q2', startUtc: '2026-05-03T06:13:00Z', durationMinutes: 28 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2026-05-04T03:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2026-05-04T05:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'supergt-2026-fuji-2',
    round: 4,
    name: 'Fuji GT 300km',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-08-01T01:30:00Z', durationMinutes: 95 },
      { type: 'qualifying', label: 'Qualifying Q1', startUtc: '2026-08-01T05:20:00Z', durationMinutes: 43 },
      { type: 'qualifying', label: 'Qualifying Q2', startUtc: '2026-08-01T06:13:00Z', durationMinutes: 28 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2026-08-02T03:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2026-08-02T04:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2026-suzuka',
    round: 5,
    name: 'Suzuka GT 300km',
    circuitId: 'suzuka-international-racing-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-08-22T00:45:00Z', durationMinutes: 95 },
      { type: 'qualifying', label: 'Qualifying Q1', startUtc: '2026-08-22T06:30:00Z', durationMinutes: 43 },
      { type: 'qualifying', label: 'Qualifying Q2', startUtc: '2026-08-22T07:23:00Z', durationMinutes: 28 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2026-08-23T03:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2026-08-23T04:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2026-sugo',
    round: 6,
    name: 'Sugo GT 300km',
    circuitId: 'sportsland-sugo',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-09-19T01:30:00Z', durationMinutes: 95 },
      { type: 'qualifying', label: 'Qualifying Q1', startUtc: '2026-09-19T05:30:00Z', durationMinutes: 43 },
      { type: 'qualifying', label: 'Qualifying Q2', startUtc: '2026-09-19T06:23:00Z', durationMinutes: 28 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2026-09-20T03:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2026-09-20T04:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2026-autopolis',
    round: 7,
    name: 'Autopolis GT 3 Hours',
    circuitId: 'autopolis',
    sessions: [
      // Official timetable not yet published on supergt.net — times are estimates (shown as TBA)
      { type: 'practice', label: 'Practice', startUtc: '2026-10-17T01:30:00Z', durationMinutes: 95, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-17T05:30:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race', startUtc: '2026-10-18T05:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'supergt-2026-motegi-1',
    round: 3,
    name: 'Motegi GT 250km',
    circuitId: 'twin-ring-motegi',
    sessions: [
      // Sepang (Round 3, 20-21 Jun) cancelled — replaced by a Saturday Motegi race (half success ballast).
      // Official timetable not yet published — times are estimates (shown as TBA)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-11-06T05:00:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race', startUtc: '2026-11-07T05:00:00Z', durationMinutes: 150, tba: true },
    ],
  },
  {
    id: 'supergt-2026-motegi',
    round: 8,
    name: 'Motegi GT 250km Grand Final',
    circuitId: 'twin-ring-motegi',
    sessions: [
      // Round 8 Grand Final — Sunday 8 Nov. Official timetable not yet published (shown as TBA)
      { type: 'race', label: 'Race', startUtc: '2026-11-08T05:00:00Z', durationMinutes: 150, tba: true },
    ],
  },
]
