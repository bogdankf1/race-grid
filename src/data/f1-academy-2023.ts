import { RaceEvent } from '@/lib/types'

// F1 Academy 2023 calendar — inaugural season of the championship.
// 7 rounds run as a STANDALONE series (the move to supporting F1 weekends
// began in 2024). Three races per round.
// Sources:
//   - f1academy.com/Racing-Series/Calendar (2023 season selection)
//   - f1academy.com/Latest/.../f1-academy-confirms-seven-round-calendar-for-2023-season
//   - motorsport.com/f1-academy/schedule/2023/
//   - Wikipedia: 2023 F1 Academy season
//   - Circuit Paul Ricard official news (round 6 timetable)
// Verified: June 2026 (season concluded October 2023)
//
// 2023 format: two 40-minute Free Practice sessions, two 15-minute Qualifying
// sessions (Q1 sets the grid for Race 1, Q2 sets the grid for Race 3),
// then three races — Race 1 (30 min), Race 2 reverse-grid (20 min) and
// Race 3 feature (30 min). Race 2 grid is set by reversing the top of the
// Race 1 finishing order.
//
// Session-type convention used here:
//   - `sprint_qualifying` = Qualifying 1 (sets Race 1 grid)
//   - `qualifying`        = Qualifying 2 (sets Race 3 grid)
//   - `sprint`            = Race 1
//   - `race`              = Race 3 (feature)
//   - the reverse-grid Race 2 is encoded as a separate event with a
//     `-extra` suffix to keep the standard weekend session shape intact —
//     this matches the pattern used for the Lusail Race 2 / Abu Dhabi extra
//     race in the 2024 season file.
//
// Exact session start times for several 2023 rounds are not published in
// any single canonical source. Times below place each session on the
// correct day in the venue's local time and are converted to UTC; where
// official timetables exist (e.g. Paul Ricard) the listed times are used
// verbatim.
export const f1Academy2023: RaceEvent[] = [
  {
    id: 'f1-academy-2023-spielberg',
    round: 1,
    name: 'Round 1 — Spielberg',
    circuitId: 'red-bull-ring',
    sessions: [
      // Fri 28 Apr 10:00 CEST = 08:00 UTC
      { type: 'practice', label: 'Free Practice 1', startUtc: '2023-04-28T08:00:00Z', durationMinutes: 40 },
      // Fri 28 Apr 13:30 CEST = 11:30 UTC
      { type: 'practice', label: 'Free Practice 2', startUtc: '2023-04-28T11:30:00Z', durationMinutes: 40 },
      // Fri 28 Apr 16:00 CEST = 14:00 UTC (Qualifying 1 — sets Race 1 grid)
      { type: 'sprint_qualifying', label: 'Qualifying 1', startUtc: '2023-04-28T14:00:00Z', durationMinutes: 15 },
      // Fri 28 Apr 16:30 CEST = 14:30 UTC (Qualifying 2 — sets Race 3 grid)
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-04-28T14:30:00Z', durationMinutes: 15 },
      // Sat 29 Apr 10:30 CEST = 08:30 UTC
      { type: 'sprint', label: 'Race 1', startUtc: '2023-04-29T08:30:00Z', durationMinutes: 30 },
      // Sat 29 Apr 16:00 CEST = 14:00 UTC (feature — Race 3 of the weekend)
      { type: 'race', label: 'Race 3', startUtc: '2023-04-29T14:00:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'f1-academy-2023-spielberg-extra',
    round: 1,
    name: 'Round 1 — Spielberg (Reverse-Grid Race)',
    circuitId: 'red-bull-ring',
    sessions: [
      // Sat 29 Apr 13:00 CEST = 11:00 UTC — Race 2 reverse-grid (20 min)
      { type: 'race', label: 'Race 2 (Reverse Grid)', startUtc: '2023-04-29T11:00:00Z', durationMinutes: 20 },
    ],
  },
  {
    id: 'f1-academy-2023-valencia',
    round: 2,
    name: 'Round 2 — Valencia',
    circuitId: 'circuit-ricardo-tormo',
    sessions: [
      // Fri 5 May 10:00 CEST = 08:00 UTC
      { type: 'practice', label: 'Free Practice 1', startUtc: '2023-05-05T08:00:00Z', durationMinutes: 40 },
      // Fri 5 May 13:30 CEST = 11:30 UTC
      { type: 'practice', label: 'Free Practice 2', startUtc: '2023-05-05T11:30:00Z', durationMinutes: 40 },
      // Fri 5 May 16:00 CEST = 14:00 UTC
      { type: 'sprint_qualifying', label: 'Qualifying 1', startUtc: '2023-05-05T14:00:00Z', durationMinutes: 15 },
      // Fri 5 May 16:30 CEST = 14:30 UTC
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-05-05T14:30:00Z', durationMinutes: 15 },
      // Sat 6 May 15:00 CEST = 13:00 UTC
      { type: 'sprint', label: 'Race 1', startUtc: '2023-05-06T13:00:00Z', durationMinutes: 30 },
      // Sun 7 May 13:00 CEST = 11:00 UTC (feature)
      { type: 'race', label: 'Race 3', startUtc: '2023-05-07T11:00:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'f1-academy-2023-valencia-extra',
    round: 2,
    name: 'Round 2 — Valencia (Reverse-Grid Race)',
    circuitId: 'circuit-ricardo-tormo',
    sessions: [
      // Sat 6 May 17:30 CEST = 15:30 UTC — Race 2 reverse-grid (20 min)
      { type: 'race', label: 'Race 2 (Reverse Grid)', startUtc: '2023-05-06T15:30:00Z', durationMinutes: 20 },
    ],
  },
  {
    id: 'f1-academy-2023-barcelona',
    round: 3,
    name: 'Round 3 — Barcelona',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      // Fri 19 May 10:00 CEST = 08:00 UTC
      { type: 'practice', label: 'Free Practice 1', startUtc: '2023-05-19T08:00:00Z', durationMinutes: 40 },
      // Fri 19 May 13:30 CEST = 11:30 UTC
      { type: 'practice', label: 'Free Practice 2', startUtc: '2023-05-19T11:30:00Z', durationMinutes: 40 },
      // Fri 19 May 16:00 CEST = 14:00 UTC
      { type: 'sprint_qualifying', label: 'Qualifying 1', startUtc: '2023-05-19T14:00:00Z', durationMinutes: 15 },
      // Fri 19 May 16:30 CEST = 14:30 UTC
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-05-19T14:30:00Z', durationMinutes: 15 },
      // Sat 20 May 15:00 CEST = 13:00 UTC
      { type: 'sprint', label: 'Race 1', startUtc: '2023-05-20T13:00:00Z', durationMinutes: 30 },
      // Sun 21 May 13:00 CEST = 11:00 UTC (feature)
      { type: 'race', label: 'Race 3', startUtc: '2023-05-21T11:00:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'f1-academy-2023-barcelona-extra',
    round: 3,
    name: 'Round 3 — Barcelona (Reverse-Grid Race)',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      // Sat 20 May 17:30 CEST = 15:30 UTC — Race 2 reverse-grid (20 min)
      { type: 'race', label: 'Race 2 (Reverse Grid)', startUtc: '2023-05-20T15:30:00Z', durationMinutes: 20 },
    ],
  },
  {
    id: 'f1-academy-2023-zandvoort',
    round: 4,
    name: 'Round 4 — Zandvoort',
    circuitId: 'circuit-zandvoort',
    sessions: [
      // Fri 23 Jun 10:00 CEST = 08:00 UTC
      { type: 'practice', label: 'Free Practice 1', startUtc: '2023-06-23T08:00:00Z', durationMinutes: 40 },
      // Fri 23 Jun 13:30 CEST = 11:30 UTC
      { type: 'practice', label: 'Free Practice 2', startUtc: '2023-06-23T11:30:00Z', durationMinutes: 40 },
      // Fri 23 Jun 16:00 CEST = 14:00 UTC
      { type: 'sprint_qualifying', label: 'Qualifying 1', startUtc: '2023-06-23T14:00:00Z', durationMinutes: 15 },
      // Fri 23 Jun 16:30 CEST = 14:30 UTC
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-06-23T14:30:00Z', durationMinutes: 15 },
      // Sat 24 Jun 15:00 CEST = 13:00 UTC
      { type: 'sprint', label: 'Race 1', startUtc: '2023-06-24T13:00:00Z', durationMinutes: 30 },
      // Sun 25 Jun 13:00 CEST = 11:00 UTC (feature)
      { type: 'race', label: 'Race 3', startUtc: '2023-06-25T11:00:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'f1-academy-2023-zandvoort-extra',
    round: 4,
    name: 'Round 4 — Zandvoort (Reverse-Grid Race)',
    circuitId: 'circuit-zandvoort',
    sessions: [
      // Sun 25 Jun 10:30 CEST = 08:30 UTC — Race 2 reverse-grid (20 min)
      { type: 'race', label: 'Race 2 (Reverse Grid)', startUtc: '2023-06-25T08:30:00Z', durationMinutes: 20 },
    ],
  },
  {
    id: 'f1-academy-2023-monza',
    round: 5,
    name: 'Round 5 — Monza',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      // Fri 7 Jul 10:00 CEST = 08:00 UTC
      { type: 'practice', label: 'Free Practice 1', startUtc: '2023-07-07T08:00:00Z', durationMinutes: 40 },
      // Fri 7 Jul 13:30 CEST = 11:30 UTC
      { type: 'practice', label: 'Free Practice 2', startUtc: '2023-07-07T11:30:00Z', durationMinutes: 40 },
      // Fri 7 Jul 16:00 CEST = 14:00 UTC
      { type: 'sprint_qualifying', label: 'Qualifying 1', startUtc: '2023-07-07T14:00:00Z', durationMinutes: 15 },
      // Fri 7 Jul 16:30 CEST = 14:30 UTC
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-07-07T14:30:00Z', durationMinutes: 15 },
      // Sat 8 Jul 15:00 CEST = 13:00 UTC
      { type: 'sprint', label: 'Race 1', startUtc: '2023-07-08T13:00:00Z', durationMinutes: 30 },
      // Sun 9 Jul 13:00 CEST = 11:00 UTC (feature)
      { type: 'race', label: 'Race 3', startUtc: '2023-07-09T11:00:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'f1-academy-2023-monza-extra',
    round: 5,
    name: 'Round 5 — Monza (Reverse-Grid Race)',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      // Sat 8 Jul 17:30 CEST = 15:30 UTC — Race 2 reverse-grid (20 min)
      { type: 'race', label: 'Race 2 (Reverse Grid)', startUtc: '2023-07-08T15:30:00Z', durationMinutes: 20 },
    ],
  },
  {
    id: 'f1-academy-2023-paul-ricard',
    round: 6,
    name: 'Round 6 — Le Castellet',
    circuitId: 'circuit-paul-ricard',
    sessions: [
      // Sat 29 Jul 09:40 CEST = 07:40 UTC (timetable per Circuit Paul Ricard)
      { type: 'practice', label: 'Free Practice 1', startUtc: '2023-07-29T07:40:00Z', durationMinutes: 40 },
      // Sat 29 Jul 12:15 CEST = 10:15 UTC
      { type: 'practice', label: 'Free Practice 2', startUtc: '2023-07-29T10:15:00Z', durationMinutes: 40 },
      // Sat 29 Jul 16:00 CEST = 14:00 UTC
      { type: 'sprint_qualifying', label: 'Qualifying 1', startUtc: '2023-07-29T14:00:00Z', durationMinutes: 15 },
      // Sat 29 Jul 16:30 CEST = 14:30 UTC
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-07-29T14:30:00Z', durationMinutes: 15 },
      // Sun 30 Jul 09:15 CEST = 07:15 UTC
      { type: 'sprint', label: 'Race 1', startUtc: '2023-07-30T07:15:00Z', durationMinutes: 30 },
      // Sun 30 Jul 16:15 CEST = 14:15 UTC (feature)
      { type: 'race', label: 'Race 3', startUtc: '2023-07-30T14:15:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'f1-academy-2023-paul-ricard-extra',
    round: 6,
    name: 'Round 6 — Le Castellet (Reverse-Grid Race)',
    circuitId: 'circuit-paul-ricard',
    sessions: [
      // Sun 30 Jul 12:35 CEST = 10:35 UTC — Race 2 reverse-grid (20 min)
      { type: 'race', label: 'Race 2 (Reverse Grid)', startUtc: '2023-07-30T10:35:00Z', durationMinutes: 20 },
    ],
  },
  {
    id: 'f1-academy-2023-austin',
    round: 7,
    name: 'Round 7 — Austin',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      // Fri 20 Oct 10:00 CDT = 15:00 UTC
      { type: 'practice', label: 'Free Practice 1', startUtc: '2023-10-20T15:00:00Z', durationMinutes: 40 },
      // Fri 20 Oct 13:30 CDT = 18:30 UTC
      { type: 'practice', label: 'Free Practice 2', startUtc: '2023-10-20T18:30:00Z', durationMinutes: 40 },
      // Fri 20 Oct 16:00 CDT = 21:00 UTC
      { type: 'sprint_qualifying', label: 'Qualifying 1', startUtc: '2023-10-20T21:00:00Z', durationMinutes: 15 },
      // Fri 20 Oct 16:30 CDT = 21:30 UTC
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-10-20T21:30:00Z', durationMinutes: 15 },
      // Sat 21 Oct 10:30 CDT = 15:30 UTC
      { type: 'sprint', label: 'Race 1', startUtc: '2023-10-21T15:30:00Z', durationMinutes: 30 },
      // Sun 22 Oct 14:30 CDT = 19:30 UTC (feature — first F1 Academy race outside Europe)
      { type: 'race', label: 'Race 3', startUtc: '2023-10-22T19:30:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'f1-academy-2023-austin-extra',
    round: 7,
    name: 'Round 7 — Austin (Reverse-Grid Race)',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      // Sun 22 Oct 11:00 CDT = 16:00 UTC — Race 2 reverse-grid (20 min)
      { type: 'race', label: 'Race 2 (Reverse Grid)', startUtc: '2023-10-22T16:00:00Z', durationMinutes: 20 },
    ],
  },
]
