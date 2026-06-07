import { RaceEvent } from '@/lib/types'

// F1 Academy 2025 calendar — 7 rounds supporting the FIA Formula One World Championship
// Sources:
//   - f1academy.com/Racing-Series/Calendar (2025 season selection)
//   - motorsport.com/f1-academy/schedule/2025/
//   - Wikipedia: 2025 F1 Academy season
// Verified: June 2026 (season concluded November 2025)
//
// Format: Free Practice (Fri/Thu) + Qualifying (Fri) + Race 1 reverse-grid (Sat) +
// Race 2 feature (Sun). Encoded as `sprint` = Race 1 (reverse grid),
// `race` = Race 2 (feature).
//
// Miami (Round 3) had only one race — Race 2 was cancelled due to torrential rain
// and rescheduled to Montreal as an additional opening race. Montreal therefore ran
// three races: opening race (rescheduled Miami Race 2), Race 2 (reverse-grid) and
// Race 3 (feature). The Montreal opening race is encoded as a separate event
// (`-opener` suffix) to keep the standard 2-race weekend session shape intact.
export const f1Academy2025: RaceEvent[] = [
  {
    id: 'f1-academy-2025-shanghai',
    round: 1,
    name: 'Round 1 — Shanghai',
    circuitId: 'shanghai-international-circuit',
    sessions: [
      // Fri 21 Mar 09:10 CST = 01:10 UTC
      { type: 'practice', label: 'Free Practice', startUtc: '2025-03-21T01:10:00Z', durationMinutes: 40 },
      // Fri 21 Mar 14:05 CST = 06:05 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-03-21T06:05:00Z', durationMinutes: 30 },
      // Sat 22 Mar 13:50 CST = 05:50 UTC (Race 1 reverse-grid)
      { type: 'sprint', label: 'Race 1', startUtc: '2025-03-22T05:50:00Z', durationMinutes: 30 },
      // Sun 23 Mar 10:45 CST = 02:45 UTC (Race 2 feature)
      { type: 'race', label: 'Race 2', startUtc: '2025-03-23T02:45:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'f1-academy-2025-jeddah',
    round: 2,
    name: 'Round 2 — Jeddah',
    circuitId: 'jeddah-corniche-circuit',
    sessions: [
      // Fri 18 Apr 14:05 AST = 11:05 UTC
      { type: 'practice', label: 'Free Practice', startUtc: '2025-04-18T11:05:00Z', durationMinutes: 40 },
      // Fri 18 Apr 21:30 AST = 18:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-04-18T18:30:00Z', durationMinutes: 30 },
      // Sat 19 Apr 15:20 AST = 12:20 UTC (Race 1 reverse-grid)
      { type: 'sprint', label: 'Race 1', startUtc: '2025-04-19T12:20:00Z', durationMinutes: 30 },
      // Sun 20 Apr 15:05 AST = 12:05 UTC (Race 2 feature)
      { type: 'race', label: 'Race 2', startUtc: '2025-04-20T12:05:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'f1-academy-2025-miami',
    round: 3,
    name: 'Round 3 — Miami',
    circuitId: 'miami-international-autodrome',
    sessions: [
      // Fri 2 May 10:05 EDT = 14:05 UTC
      { type: 'practice', label: 'Free Practice 1', startUtc: '2025-05-02T14:05:00Z', durationMinutes: 40 },
      // Fri 2 May 15:20 EDT = 19:20 UTC
      { type: 'practice', label: 'Free Practice 2', startUtc: '2025-05-02T19:20:00Z', durationMinutes: 40 },
      // Sat 3 May 10:25 EDT = 14:25 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-03T14:25:00Z', durationMinutes: 30 },
      // Sat 3 May 14:55 EDT = 18:55 UTC (Race 1 reverse-grid)
      { type: 'sprint', label: 'Race 1', startUtc: '2025-05-03T18:55:00Z', durationMinutes: 30 },
      // Sun 4 May Race 2 was cancelled due to torrential rain and rescheduled to Montreal
    ],
  },
  {
    id: 'f1-academy-2025-montreal-opener',
    round: 4,
    name: 'Round 4 — Montreal (Rescheduled Miami Race)',
    circuitId: 'circuit-gilles-villeneuve',
    sessions: [
      // Sat 14 Jun 09:15 EDT = 13:15 UTC — rescheduled Miami Race 2,
      // grid set by Miami's qualifying result
      { type: 'race', label: 'Rescheduled Miami Race', startUtc: '2025-06-14T13:15:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'f1-academy-2025-montreal',
    round: 4,
    name: 'Round 4 — Montreal',
    circuitId: 'circuit-gilles-villeneuve',
    sessions: [
      // Fri 13 Jun 11:05 EDT = 15:05 UTC
      { type: 'practice', label: 'Free Practice', startUtc: '2025-06-13T15:05:00Z', durationMinutes: 40 },
      // Fri 13 Jun 18:30 EDT = 22:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-06-13T22:30:00Z', durationMinutes: 30 },
      // Sat 14 Jun 14:50 EDT = 18:50 UTC (Reverse-grid race)
      { type: 'sprint', label: 'Reverse-Grid Race', startUtc: '2025-06-14T18:50:00Z', durationMinutes: 30 },
      // Sun 15 Jun 10:55 EDT = 14:55 UTC (Feature race)
      { type: 'race', label: 'Feature Race', startUtc: '2025-06-15T14:55:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'f1-academy-2025-zandvoort',
    round: 5,
    name: 'Round 5 — Zandvoort',
    circuitId: 'circuit-zandvoort',
    sessions: [
      // Fri 29 Aug 10:10 CEST = 08:10 UTC
      { type: 'practice', label: 'Free Practice 1', startUtc: '2025-08-29T08:10:00Z', durationMinutes: 40 },
      // Fri 29 Aug 17:30 CEST = 15:30 UTC
      { type: 'practice', label: 'Free Practice 2', startUtc: '2025-08-29T15:30:00Z', durationMinutes: 40 },
      // Sat 30 Aug 10:25 CEST = 08:25 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-30T08:25:00Z', durationMinutes: 30 },
      // Sat 30 Aug 17:05 CEST = 15:05 UTC (Race 1 reverse-grid)
      { type: 'sprint', label: 'Race 1', startUtc: '2025-08-30T15:05:00Z', durationMinutes: 30 },
      // Sun 31 Aug 10:40 CEST = 08:40 UTC (Race 2 feature)
      { type: 'race', label: 'Race 2', startUtc: '2025-08-31T08:40:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'f1-academy-2025-singapore',
    round: 6,
    name: 'Round 6 — Singapore',
    circuitId: 'marina-bay-street-circuit',
    sessions: [
      // Fri 3 Oct 15:10 SGT = 07:10 UTC
      { type: 'practice', label: 'Free Practice', startUtc: '2025-10-03T07:10:00Z', durationMinutes: 40 },
      // Fri 3 Oct 19:00 SGT = 11:00 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-10-03T11:00:00Z', durationMinutes: 30 },
      // Sat 4 Oct 15:00 SGT = 07:00 UTC (Race 1 reverse-grid)
      { type: 'sprint', label: 'Race 1', startUtc: '2025-10-04T07:00:00Z', durationMinutes: 30 },
      // Sun 5 Oct 15:25 SGT = 07:25 UTC (Race 2 feature)
      { type: 'race', label: 'Race 2', startUtc: '2025-10-05T07:25:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'f1-academy-2025-las-vegas',
    round: 7,
    name: 'Round 7 — Las Vegas',
    circuitId: 'las-vegas-strip-circuit',
    sessions: [
      // Thu 20 Nov 18:00 PST = 21 Nov 02:00 UTC
      { type: 'practice', label: 'Free Practice', startUtc: '2025-11-21T02:00:00Z', durationMinutes: 40 },
      // Thu 20 Nov 21:30 PST = 21 Nov 05:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-11-21T05:30:00Z', durationMinutes: 30 },
      // Fri 21 Nov 18:15 PST = 22 Nov 02:15 UTC (Race 1 reverse-grid)
      { type: 'sprint', label: 'Race 1', startUtc: '2025-11-22T02:15:00Z', durationMinutes: 30 },
      // Sat 22 Nov 16:20 PST = 23 Nov 00:20 UTC (Race 2 feature)
      { type: 'race', label: 'Race 2', startUtc: '2025-11-23T00:20:00Z', durationMinutes: 30 },
    ],
  },
]
