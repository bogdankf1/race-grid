import { RaceEvent } from '@/lib/types'

// F1 Academy 2024 calendar — inaugural season as an official F1 support series.
// 7 rounds supporting the FIA Formula One World Championship.
// Sources:
//   - f1academy.com/Racing-Series/Calendar (2024 season selection)
//   - motorsport.com/f1-academy/schedule/2024/
//   - autosport.com/F1-Academy/schedule/2024/
//   - Wikipedia: 2024 F1 Academy season
// Verified: June 2026 (season concluded December 2024)
//
// 2024 format: up to 2 x 40-min Free Practice + single 30-min Qualifying +
// two 30-min races. Both races counted equally — Race 1 grid was set by each
// driver's fastest qualifying lap, Race 2 grid by their second-fastest lap
// (the reverse-grid race of 2023 was dropped for 2024). Encoded here as
// `sprint` = Race 1 and `race` = Race 2 to match the F1 Academy session-type
// convention used elsewhere in the app.
//
// Lusail (Round 6) Race 2 was cancelled due to barrier damage from a Porsche
// support race and could not be rescheduled at Losail. An additional race was
// added to the Abu Dhabi (Round 7) weekend to compensate, with its grid set by
// drivers' third-fastest qualifying time. The Abu Dhabi extra race is encoded
// as a separate event (`-extra` suffix) to keep the standard 2-race weekend
// session shape intact.
export const f1Academy2024: RaceEvent[] = [
  {
    id: 'f1-academy-2024-jeddah',
    round: 1,
    name: 'Round 1 — Jeddah',
    circuitId: 'jeddah-corniche-circuit',
    sessions: [
      // Thu 7 Mar 14:05 AST = 11:05 UTC
      { type: 'practice', label: 'Free Practice', startUtc: '2024-03-07T11:05:00Z', durationMinutes: 40 },
      // Thu 7 Mar 21:30 AST = 18:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-07T18:30:00Z', durationMinutes: 30 },
      // Fri 8 Mar 15:10 AST = 12:10 UTC
      { type: 'sprint', label: 'Race 1', startUtc: '2024-03-08T12:10:00Z', durationMinutes: 30 },
      // Sat 9 Mar 15:05 AST = 12:05 UTC
      { type: 'race', label: 'Race 2', startUtc: '2024-03-09T12:05:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'f1-academy-2024-miami',
    round: 2,
    name: 'Round 2 — Miami',
    circuitId: 'miami-international-autodrome',
    sessions: [
      // Fri 3 May 10:00 EDT = 14:00 UTC
      { type: 'practice', label: 'Free Practice 1', startUtc: '2024-05-03T14:00:00Z', durationMinutes: 40 },
      // Fri 3 May 15:20 EDT = 19:20 UTC
      { type: 'practice', label: 'Free Practice 2', startUtc: '2024-05-03T19:20:00Z', durationMinutes: 40 },
      // Sat 4 May 10:25 EDT = 14:25 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-04T14:25:00Z', durationMinutes: 30 },
      // Sat 4 May 14:05 EDT = 18:05 UTC
      { type: 'sprint', label: 'Race 1', startUtc: '2024-05-04T18:05:00Z', durationMinutes: 30 },
      // Sun 5 May 13:05 EDT = 17:05 UTC
      { type: 'race', label: 'Race 2', startUtc: '2024-05-05T17:05:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'f1-academy-2024-barcelona',
    round: 3,
    name: 'Round 3 — Barcelona',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      // Fri 21 Jun 08:50 CEST = 06:50 UTC
      { type: 'practice', label: 'Free Practice', startUtc: '2024-06-21T06:50:00Z', durationMinutes: 40 },
      // Fri 21 Jun 18:30 CEST = 16:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-21T16:30:00Z', durationMinutes: 30 },
      // Sat 22 Jun 18:00 CEST = 16:00 UTC
      { type: 'sprint', label: 'Race 1', startUtc: '2024-06-22T16:00:00Z', durationMinutes: 30 },
      // Sun 23 Jun 08:50 CEST = 06:50 UTC
      { type: 'race', label: 'Race 2', startUtc: '2024-06-23T06:50:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'f1-academy-2024-zandvoort',
    round: 4,
    name: 'Round 4 — Zandvoort',
    circuitId: 'circuit-zandvoort',
    sessions: [
      // Fri 23 Aug 10:10 CEST = 08:10 UTC
      { type: 'practice', label: 'Free Practice 1', startUtc: '2024-08-23T08:10:00Z', durationMinutes: 40 },
      // Fri 23 Aug 17:30 CEST = 15:30 UTC
      { type: 'practice', label: 'Free Practice 2', startUtc: '2024-08-23T15:30:00Z', durationMinutes: 40 },
      // Sat 24 Aug 10:15 CEST = 08:15 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-24T08:15:00Z', durationMinutes: 30 },
      // Sat 24 Aug 17:05 CEST = 15:05 UTC
      { type: 'sprint', label: 'Race 1', startUtc: '2024-08-24T15:05:00Z', durationMinutes: 30 },
      // Sun 25 Aug 10:40 CEST = 08:40 UTC
      { type: 'race', label: 'Race 2', startUtc: '2024-08-25T08:40:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'f1-academy-2024-singapore',
    round: 5,
    name: 'Round 5 — Singapore',
    circuitId: 'marina-bay-street-circuit',
    sessions: [
      // Fri 20 Sep 15:20 SGT = 07:20 UTC
      { type: 'practice', label: 'Free Practice', startUtc: '2024-09-20T07:20:00Z', durationMinutes: 40 },
      // Fri 20 Sep 19:00 SGT = 11:00 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-20T11:00:00Z', durationMinutes: 30 },
      // Sat 21 Sep 15:05 SGT = 07:05 UTC
      { type: 'sprint', label: 'Race 1', startUtc: '2024-09-21T07:05:00Z', durationMinutes: 30 },
      // Sun 22 Sep 15:35 SGT = 07:35 UTC
      { type: 'race', label: 'Race 2', startUtc: '2024-09-22T07:35:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'f1-academy-2024-lusail',
    round: 6,
    name: 'Round 6 — Lusail',
    circuitId: 'lusail-international-circuit',
    sessions: [
      // Fri 29 Nov 13:00 AST = 10:00 UTC
      { type: 'practice', label: 'Free Practice 1', startUtc: '2024-11-29T10:00:00Z', durationMinutes: 40 },
      // Fri 29 Nov 18:00 AST = 15:00 UTC
      { type: 'practice', label: 'Free Practice 2', startUtc: '2024-11-29T15:00:00Z', durationMinutes: 40 },
      // Sat 30 Nov 15:20 AST = 12:20 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-11-30T12:20:00Z', durationMinutes: 30 },
      // Sat 30 Nov 23:05 AST = 20:05 UTC
      { type: 'sprint', label: 'Race 1', startUtc: '2024-11-30T20:05:00Z', durationMinutes: 30 },
      // Sun 1 Dec Race 2 was cancelled due to barrier damage — rescheduled as
      // an additional race at the Abu Dhabi finale.
    ],
  },
  {
    id: 'f1-academy-2024-abu-dhabi',
    round: 7,
    name: 'Round 7 — Abu Dhabi',
    circuitId: 'yas-marina-circuit',
    sessions: [
      // Fri 6 Dec 09:50 GST = 05:50 UTC
      { type: 'practice', label: 'Free Practice', startUtc: '2024-12-06T05:50:00Z', durationMinutes: 40 },
      // Fri 6 Dec 18:35 GST = 14:35 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-12-06T14:35:00Z', durationMinutes: 30 },
      // Sat 7 Dec 12:15 GST = 08:15 UTC
      { type: 'sprint', label: 'Race 1', startUtc: '2024-12-07T08:15:00Z', durationMinutes: 30 },
      // Sat 7 Dec 20:15 GST = 16:15 UTC
      { type: 'race', label: 'Race 2', startUtc: '2024-12-07T16:15:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'f1-academy-2024-abu-dhabi-extra',
    round: 7,
    name: 'Round 7 — Abu Dhabi (Extra Race)',
    circuitId: 'yas-marina-circuit',
    sessions: [
      // Sun 8 Dec 11:15 GST = 07:15 UTC — replacement for cancelled Lusail
      // Race 2; grid set by drivers' third-fastest qualifying time.
      { type: 'race', label: 'Race 3 (Lusail Replacement)', startUtc: '2024-12-08T07:15:00Z', durationMinutes: 30 },
    ],
  },
]
