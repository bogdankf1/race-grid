import { RaceEvent } from '@/lib/types'

// F1 Academy 2026 calendar — 6 rounds supporting the FIA Formula One World Championship
// Sources:
//   - f1academy.com/Racing-Series/Calendar
//   - Wikipedia: 2026 F1 Academy season
//   - F1 Academy press: "2026 calendar reveal" (June 2026)
//
// Format: Free Practice (Fri), Qualifying (Fri), Race 1 reverse-grid (Sat), Race 2 feature (Sun)
// Encoded as `sprint` = Race 1 (reverse grid), `race` = Race 2 (feature).
//
// Round 2 Montreal and Round 5 Austin use an expanded 3-race format (Opening Race added)
// after the cancellation of the Jeddah round. Opening race is encoded as a separate event
// (`-opener` suffix) to keep the standard 2-race weekend session shape intact.
//
// Session times: Rounds 1-2 from f1academy.com; Rounds 3-4 from the F1 weekend timetables; Round 5 Austin from
// f1academy.com (Thursday FP/Qualifying + Friday Opening Race). Round 6 Las Vegas times are not yet official (TBA).
// Re-verified Oct 2026.
export const f1Academy2026: RaceEvent[] = [
  {
    id: 'f1-academy-2026-shanghai',
    round: 1,
    name: 'Round 1 — Shanghai',
    circuitId: 'shanghai-international-circuit',
    sessions: [
      // Fri 13 Mar 09:10 CST = 01:10 UTC (official)
      { type: 'practice', label: 'Free Practice', startUtc: '2026-03-13T01:10:00Z', durationMinutes: 40 },
      // Fri 13 Mar 14:05 CST = 06:05 UTC (official)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-13T06:05:00Z', durationMinutes: 30 },
      // Sat 14 Mar 13:45 CST = 05:45 UTC (Race 1 reverse-grid, official)
      { type: 'sprint', label: 'Race 1', startUtc: '2026-03-14T05:45:00Z', durationMinutes: 30 },
      // Sun 15 Mar 10:40 CST = 02:40 UTC (Race 2 feature, official)
      { type: 'race', label: 'Race 2', startUtc: '2026-03-15T02:40:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'f1-academy-2026-montreal-opener',
    round: 2,
    name: 'Round 2 — Montreal (Opening Race)',
    circuitId: 'circuit-gilles-villeneuve',
    sessions: [
      // Sat 23 May 09:45 EDT = 13:45 UTC (official) — extra race added for Jeddah cancellation
      { type: 'race', label: 'Opening Race', startUtc: '2026-05-23T13:45:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'f1-academy-2026-montreal',
    round: 2,
    name: 'Round 2 — Montreal',
    circuitId: 'circuit-gilles-villeneuve',
    sessions: [
      // Fri 22 May 09:00 EDT = 13:00 UTC (official)
      { type: 'practice', label: 'Free Practice', startUtc: '2026-05-22T13:00:00Z', durationMinutes: 40 },
      // Fri 22 May 18:00 EDT = 22:00 UTC (official)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-22T22:00:00Z', durationMinutes: 30 },
      // Sat 23 May 18:05 EDT = 22:05 UTC (Race 2 reverse-grid, official)
      { type: 'sprint', label: 'Reverse-Grid Race', startUtc: '2026-05-23T22:05:00Z', durationMinutes: 30 },
      // Sun 24 May 10:45 EDT = 14:45 UTC (Race 3 feature, official)
      { type: 'race', label: 'Feature Race', startUtc: '2026-05-24T14:45:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'f1-academy-2026-silverstone',
    round: 3,
    name: 'Round 3 — Silverstone',
    circuitId: 'silverstone-circuit',
    sessions: [
      // F1 British GP weekend (3-5 July), BST = UTC+1 — F1 official timetable (Sunday Feature Race time per sportstimes)
      { type: 'practice', label: 'Free Practice', startUtc: '2026-07-03T06:45:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-03T17:00:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Race 1', startUtc: '2026-07-04T17:05:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race 2', startUtc: '2026-07-05T09:00:00Z', durationMinutes: 35 },
    ],
  },
  {
    id: 'f1-academy-2026-zandvoort',
    round: 4,
    name: 'Round 4 — Zandvoort',
    circuitId: 'circuit-zandvoort',
    sessions: [
      // F1 Dutch GP weekend (21-23 August), CEST = UTC+2 — F1 official timetable
      { type: 'practice', label: 'Free Practice', startUtc: '2026-08-21T12:00:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-22T07:20:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Race 1', startUtc: '2026-08-22T12:35:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race 2', startUtc: '2026-08-23T08:30:00Z', durationMinutes: 35 },
    ],
  },
  {
    id: 'f1-academy-2026-austin-opener',
    round: 5,
    name: 'Round 5 — Austin (Opening Race)',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      // Fri 23 October 17:50 CDT (UTC-5) — official f1academy.com timetable
      { type: 'race', label: 'Opening Race', startUtc: '2026-10-23T22:50:00Z', durationMinutes: 35 },
    ],
  },
  {
    id: 'f1-academy-2026-austin',
    round: 5,
    name: 'Round 5 — Austin',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      // US GP weekend (22-25 October), CDT = UTC-5 — official f1academy.com timetable
      { type: 'practice', label: 'Free Practice', startUtc: '2026-10-22T17:25:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-22T21:30:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Reverse-Grid Race', startUtc: '2026-10-24T19:45:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-10-25T15:40:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'f1-academy-2026-las-vegas',
    round: 6,
    name: 'Round 6 — Las Vegas',
    circuitId: 'las-vegas-strip-circuit',
    sessions: [
      // Las Vegas GP weekend (19-21 November), PST = UTC-8. Official f1academy.com timetable still TBC —
      // times below are as reported by autosport.com / motorsport.com and shown as TBA until confirmed.
      { type: 'practice', label: 'Free Practice', startUtc: '2026-11-20T02:00:00Z', durationMinutes: 40, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-11-20T05:30:00Z', durationMinutes: 30, tba: true },
      { type: 'sprint', label: 'Race 1', startUtc: '2026-11-21T02:15:00Z', durationMinutes: 35, tba: true },
      { type: 'race', label: 'Race 2', startUtc: '2026-11-22T00:20:00Z', durationMinutes: 35, tba: true },
    ],
  },
]
