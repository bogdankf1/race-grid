import { RaceEvent } from '@/lib/types'

// Supercars Championship 2026 — 14 rounds
// Sources: supercars.com (official calendar + per-event schedules), v8sleuth, speedcafe — re-verified Oct 2026
// Australian DST 2026: ends Sun 5 Apr (NSW/VIC/TAS/ACT/SA), resumes Sun 4 Oct.
// NZ DST 2026: ends Sun 5 Apr, resumes Sun 27 Sep.
// QLD always AEST (UTC+10), NT always ACST (UTC+9:30), WA always AWST (UTC+8).
export const supercars2026: RaceEvent[] = [
  {
    // Round 1: Sydney 500 — Sydney Motorsport Park, 20–22 Feb 2026 (NSW, AEDT UTC+11)
    // Source: supercars.com/news 2026 Sydney 500 track schedule
    id: 'sc-2026-sydney',
    round: 1,
    name: 'Dunlop Sydney 500',
    circuitId: 'sydney-motorsport-park',
    sessions: [
      // Fri 20 Feb 13:55 AEDT = 02:55 UTC
      { type: 'practice', label: 'Practice', startUtc: '2026-02-20T02:55:00Z', durationMinutes: 45 },
      // Fri 16:20 AEDT = 05:20 UTC
      { type: 'qualifying', label: 'Qualifying 1 (Race 1)', startUtc: '2026-02-20T05:20:00Z', durationMinutes: 12 },
      // Fri 16:40 AEDT = 05:40 UTC
      { type: 'qualifying', label: 'Qualifying 2 (Race 1)', startUtc: '2026-02-20T05:40:00Z', durationMinutes: 12 },
      // Fri 19:50 AEDT = 08:50 UTC — 100 km (26 laps)
      { type: 'race', label: 'Race 1', startUtc: '2026-02-20T08:50:00Z', durationMinutes: 60 },
      // Sat 21 Feb 14:15 AEDT = 03:15 UTC
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2026-02-21T03:15:00Z', durationMinutes: 20 },
      // Sat 19:45 AEDT = 08:45 UTC — 200 km (52 laps)
      { type: 'race', label: 'Race 2', startUtc: '2026-02-21T08:45:00Z', durationMinutes: 105 },
      // Sun 22 Feb 10:05 AEDT = 23:05 UTC Sat
      { type: 'warmup', label: 'Warmup', startUtc: '2026-02-21T23:05:00Z', durationMinutes: 20 },
      // Sun 15:30 AEDT = 04:30 UTC — 200 km (52 laps)
      { type: 'race', label: 'Race 3', startUtc: '2026-02-22T04:30:00Z', durationMinutes: 105 },
    ],
  },
  {
    // Round 2: Melbourne SuperSprint — Albert Park, 5–8 Mar 2026 (VIC, AEDT UTC+11)
    // 4 races as part of F1 Australian GP weekend. Source: supercars.com/news 2026 Melbourne track schedule
    id: 'sc-2026-melbourne',
    round: 2,
    name: 'Melbourne SuperSprint',
    circuitId: 'albert-park-circuit',
    sessions: [
      // Thu 5 Mar 10:35 AEDT = 23:35 UTC Wed
      { type: 'practice', label: 'Practice 1', startUtc: '2026-03-04T23:35:00Z', durationMinutes: 30 },
      // Thu 12:25 AEDT = 01:25 UTC Thu
      { type: 'practice', label: 'Practice 2', startUtc: '2026-03-05T01:25:00Z', durationMinutes: 30 },
      // Thu 14:20 AEDT = 03:20 UTC
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2026-03-05T03:20:00Z', durationMinutes: 12 },
      // Thu 14:42 AEDT = 03:42 UTC
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2026-03-05T03:42:00Z', durationMinutes: 8 },
      // Thu 17:00 AEDT = 06:00 UTC
      { type: 'race', label: 'Race 1', startUtc: '2026-03-05T06:00:00Z', durationMinutes: 45 },
      // Fri 6 Mar 17:30 AEDT = 06:30 UTC
      { type: 'race', label: 'Race 2', startUtc: '2026-03-06T06:30:00Z', durationMinutes: 45 },
      // Sat 7 Mar 09:00 AEDT = 22:00 UTC Fri
      { type: 'qualifying', label: 'Qualifying (Race 3)', startUtc: '2026-03-06T22:00:00Z', durationMinutes: 12 },
      // Sat 09:22 AEDT = 22:22 UTC Fri
      { type: 'qualifying', label: 'Qualifying (Race 4)', startUtc: '2026-03-06T22:22:00Z', durationMinutes: 8 },
      // Sat 17:35 AEDT = 06:35 UTC
      { type: 'race', label: 'Race 3', startUtc: '2026-03-07T06:35:00Z', durationMinutes: 45 },
      // Sun 8 Mar — short 80 km Larry Perkins Trophy sprint; exact local time TBA, est. midday AEDT
      { type: 'race', label: 'Race 4', startUtc: '2026-03-08T01:00:00Z', durationMinutes: 40 },
    ],
  },
  {
    // Round 3: ITM Taupo Super 440 — Taupo Int'l Motorsport Park, 10–12 Apr 2026 (NZ, NZST UTC+12 from 5 Apr)
    // Sunday CANCELLED due to Cyclone Vaianu — revised Saturday schedule with two races; Race 10 rescheduled to Christchurch.
    // Source: supercars.com news (cyclone schedule update)
    id: 'sc-2026-taupo',
    round: 3,
    name: 'ITM Taupo Super 440',
    circuitId: 'taupo-motorsport-park',
    sessions: [
      // Fri 10 Apr — practice/qualifying (standard format)
      { type: 'practice', label: 'Practice 1', startUtc: '2026-04-09T22:00:00Z', durationMinutes: 30 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-04-10T01:30:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2026-04-10T03:00:00Z', durationMinutes: 20 },
      // Sat 11 Apr — revised post-cyclone: 120 km race at 12:20 NZST = 00:20 UTC, 200 km race at 15:30 NZST = 03:30 UTC
      { type: 'qualifying', label: 'Qualifying (Race 2/3)', startUtc: '2026-04-10T22:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1 (120 km)', startUtc: '2026-04-11T00:20:00Z', durationMinutes: 75 },
      { type: 'race', label: 'Race 2 (200 km)', startUtc: '2026-04-11T03:30:00Z', durationMinutes: 105 },
      // Sun 12 Apr CANCELLED (Cyclone Vaianu) — Race 10 moved to Christchurch Friday
    ],
  },
  {
    // Round 4: ITM Christchurch Super 440 — Mike Pero Motorsport Park (Ruapuna), 17–19 Apr 2026 (NZ, NZST UTC+12)
    // Source: supercars.com 2026 Christchurch track schedule + speedcafe Ruapuna schedule
    // Friday adds rescheduled Race 10 from Taupo cancellation
    id: 'sc-2026-christchurch',
    round: 4,
    name: 'ITM Christchurch Super 440',
    circuitId: 'mike-pero-motorsport-park',
    sessions: [
      // Fri 17 Apr 10:05 NZST = 22:05 UTC Thu
      { type: 'practice', label: 'Practice', startUtc: '2026-04-16T22:05:00Z', durationMinutes: 60 },
      // Fri 12:45 NZST = 00:45 UTC Fri — Race 1 (rescheduled from Taupo)
      { type: 'race', label: 'Race 1 (rescheduled)', startUtc: '2026-04-17T00:45:00Z', durationMinutes: 75 },
      // Fri 16:10 NZST = 04:10 UTC — Race 2
      { type: 'race', label: 'Race 2', startUtc: '2026-04-17T04:10:00Z', durationMinutes: 75 },
      // Sat 18 Apr — qualifying + 2 races (typical format)
      { type: 'qualifying', label: 'Qualifying (Race 3)', startUtc: '2026-04-17T22:00:00Z', durationMinutes: 12 },
      { type: 'qualifying', label: 'Qualifying (Race 4)', startUtc: '2026-04-17T22:22:00Z', durationMinutes: 12 },
      { type: 'race', label: 'Race 3', startUtc: '2026-04-18T02:00:00Z', durationMinutes: 75 },
      // Sun 19 Apr — knockout qualifying + Top 10 Shootout + 200 km race
      { type: 'qualifying', label: 'Top 10 Shootout', startUtc: '2026-04-18T22:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 4 (200 km)', startUtc: '2026-04-19T02:00:00Z', durationMinutes: 105 },
    ],
  },
  {
    // Round 5: Tyrepower Tasmania Super 440 — Symmons Plains, 22–24 May 2026 (TAS, AEST UTC+10)
    // Session times: official schedule not yet released; uses standard Supercars weekend format.
    id: 'sc-2026-tasmania',
    round: 5,
    name: 'Tyrepower Tasmania Super 440',
    circuitId: 'symmons-plains-raceway',
    sessions: [
      // Fri 22 May ~10:00 AEST = 00:00 UTC
      { type: 'practice', label: 'Practice 1', startUtc: '2026-05-22T00:00:00Z', durationMinutes: 30 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-05-22T03:00:00Z', durationMinutes: 30 },
      // Sat 23 May — qualifying + 2 races
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2026-05-22T23:00:00Z', durationMinutes: 12 },
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2026-05-22T23:22:00Z', durationMinutes: 12 },
      { type: 'race', label: 'Race 1', startUtc: '2026-05-23T02:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2026-05-23T05:00:00Z', durationMinutes: 60 },
      // Sun 24 May — knockout qualifying + 200 km race
      { type: 'qualifying', label: 'Knockout Qualifying', startUtc: '2026-05-23T23:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 3 (200 km)', startUtc: '2026-05-24T03:00:00Z', durationMinutes: 105 },
    ],
  },
  {
    // Round 6: betr Darwin Triple Crown — Hidden Valley, 19–21 Jun 2026 (NT, ACST UTC+9:30)
    // Triple Crown format: 3 races. Session times: official schedule TBA; standard format used.
    id: 'sc-2026-darwin',
    round: 6,
    name: 'betr Darwin Triple Crown',
    circuitId: 'hidden-valley-raceway',
    sessions: [
      // Fri 19 Jun ~12:30 ACST = 03:00 UTC
      { type: 'practice', label: 'Practice 1', startUtc: '2026-06-19T03:00:00Z', durationMinutes: 30 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-06-19T05:30:00Z', durationMinutes: 30 },
      // Sat 20 Jun
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2026-06-20T01:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2026-06-20T05:00:00Z', durationMinutes: 60 },
      // Sun 21 Jun
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2026-06-20T22:30:00Z', durationMinutes: 12 },
      { type: 'qualifying', label: 'Qualifying (Race 3)', startUtc: '2026-06-20T22:52:00Z', durationMinutes: 12 },
      { type: 'race', label: 'Race 2', startUtc: '2026-06-21T02:30:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Race 3', startUtc: '2026-06-21T05:15:00Z', durationMinutes: 55 },
    ],
  },
  {
    // Round 7: NTI Townsville 500 — Reid Park Street Circuit, 10–12 Jul 2026 (QLD, AEST UTC+10)
    // 500 km event = 2 races over the weekend
    id: 'sc-2026-townsville',
    round: 7,
    name: 'NTI Townsville 500',
    circuitId: 'townsville-street-circuit',
    sessions: [
      // Fri 10 Jul ~10:00 AEST = 00:00 UTC
      { type: 'practice', label: 'Practice 1', startUtc: '2026-07-10T00:00:00Z', durationMinutes: 45 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-07-10T03:00:00Z', durationMinutes: 45 },
      // Sat 11 Jul
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2026-07-11T00:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2026-07-11T03:45:00Z', durationMinutes: 100 },
      // Sun 12 Jul
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2026-07-12T00:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2026-07-12T03:45:00Z', durationMinutes: 100 },
    ],
  },
  {
    // Round 8: Perth Super 440 — Wanneroo Raceway, 31 Jul–2 Aug 2026 (WA, AWST UTC+8)
    id: 'sc-2026-perth',
    round: 8,
    name: 'Perth Super 440',
    circuitId: 'wanneroo-raceway',
    sessions: [
      // Fri 31 Jul ~10:00 AWST = 02:00 UTC
      { type: 'practice', label: 'Practice 1', startUtc: '2026-07-31T02:00:00Z', durationMinutes: 30 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-07-31T05:00:00Z', durationMinutes: 30 },
      // Sat 1 Aug
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2026-08-01T01:00:00Z', durationMinutes: 12 },
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2026-08-01T01:22:00Z', durationMinutes: 12 },
      { type: 'race', label: 'Race 1', startUtc: '2026-08-01T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2026-08-01T07:30:00Z', durationMinutes: 60 },
      // Sun 2 Aug
      { type: 'qualifying', label: 'Knockout Qualifying', startUtc: '2026-08-02T01:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 3 (200 km)', startUtc: '2026-08-02T05:30:00Z', durationMinutes: 105 },
    ],
  },
  {
    // Round 9: Century Batteries Ipswich Super 440 — Queensland Raceway, 21–23 Aug 2026 (QLD, AEST UTC+10)
    id: 'sc-2026-ipswich',
    round: 9,
    name: 'Century Batteries Ipswich Super 440',
    circuitId: 'queensland-raceway',
    sessions: [
      // Fri 21 Aug ~10:00 AEST = 00:00 UTC
      { type: 'practice', label: 'Practice 1', startUtc: '2026-08-21T00:00:00Z', durationMinutes: 30 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-08-21T03:00:00Z', durationMinutes: 30 },
      // Sat 22 Aug
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2026-08-21T23:00:00Z', durationMinutes: 12 },
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2026-08-21T23:22:00Z', durationMinutes: 12 },
      { type: 'race', label: 'Race 1', startUtc: '2026-08-22T02:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2026-08-22T05:30:00Z', durationMinutes: 60 },
      // Sun 23 Aug
      { type: 'qualifying', label: 'Knockout Qualifying', startUtc: '2026-08-22T23:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 3 (200 km)', startUtc: '2026-08-23T03:00:00Z', durationMinutes: 105 },
    ],
  },
  {
    // Round 10: The Bend 500 — 11–13 Sep 2026 (SA, ACST UTC+9:30). Single 500 km race (147 laps, West layout). Source: supercars.com track schedule
    id: 'sc-2026-the-bend',
    round: 10,
    name: 'Airtouch 500 at The Bend',
    circuitId: 'the-bend-motorsport-park',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-09-11T01:55:00Z', durationMinutes: 30 },
      { type: 'practice', label: 'Practice 2 (additional drivers)', startUtc: '2026-09-11T04:15:00Z', durationMinutes: 30 },
      { type: 'practice', label: 'Practice 3', startUtc: '2026-09-11T06:10:00Z', durationMinutes: 30 },
      { type: 'practice', label: 'Practice 4 (co-drivers)', startUtc: '2026-09-12T00:20:00Z', durationMinutes: 30 },
      { type: 'practice', label: 'Practice 5', startUtc: '2026-09-12T02:30:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-12T05:15:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Top 10 Shootout', startUtc: '2026-09-12T07:30:00Z', durationMinutes: 30 },
      { type: 'warmup', label: 'Warm Up', startUtc: '2026-09-13T00:45:00Z', durationMinutes: 20 },
      { type: 'endurance', label: 'The Bend 500', startUtc: '2026-09-13T04:15:00Z', durationMinutes: 210 },
    ],
  },
  {
    // Round 11: Repco Bathurst 1000 — 8–11 Oct 2026 (NSW, AEDT UTC+11). Race 11:30 AEDT, 161 laps. Source: supercars.com track schedule
    id: 'sc-2026-bathurst',
    round: 11,
    name: 'Repco Bathurst 1000',
    circuitId: 'mount-panorama-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-10-08T02:30:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2 (co-drivers)', startUtc: '2026-10-08T04:45:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 3', startUtc: '2026-10-08T23:05:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 4', startUtc: '2026-10-09T02:15:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-09T05:15:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'Practice 5 (co-drivers)', startUtc: '2026-10-09T23:05:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 6', startUtc: '2026-10-10T02:10:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Top 10 Shootout', startUtc: '2026-10-10T06:05:00Z', durationMinutes: 45 },
      { type: 'warmup', label: 'Warm Up', startUtc: '2026-10-10T21:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: 'Bathurst 1000', startUtc: '2026-10-11T00:30:00Z', durationMinutes: 400 },
    ],
  },
  {
    // Round 12: Gold Coast 500 — 23–25 Oct 2026 (QLD, AEST UTC+10). Two 250 km races (85 laps). Source: supercars.com / v8sleuth track schedule
    id: 'sc-2026-gold-coast',
    round: 12,
    name: 'Boost Mobile Gold Coast 500',
    circuitId: 'surfers-paradise-street-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-10-23T01:45:00Z', durationMinutes: 25 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-10-23T03:50:00Z', durationMinutes: 25 },
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2026-10-23T06:05:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Top 10 Shootout (Race 1)', startUtc: '2026-10-24T02:35:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race 1 (250 km)', startUtc: '2026-10-24T05:15:00Z', durationMinutes: 125 },
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2026-10-25T01:20:00Z', durationMinutes: 32 },
      { type: 'qualifying', label: 'Top 10 Shootout (Race 2)', startUtc: '2026-10-25T02:05:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race 2 (250 km)', startUtc: '2026-10-25T04:45:00Z', durationMinutes: 125 },
    ],
  },
  {
    // Round 13: Sandown 500 — 6–8 Nov 2026 (VIC, AEDT UTC+11). Two 250 km races (79 laps). Source: supercars.com track schedule
    id: 'sc-2026-sandown',
    round: 13,
    name: 'Penrite Oil Sandown 500',
    circuitId: 'sandown-raceway',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-11-06T03:40:00Z', durationMinutes: 25 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-11-06T04:25:00Z', durationMinutes: 25 },
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2026-11-07T00:20:00Z', durationMinutes: 20 },
      { type: 'qualifying', label: 'Top 10 Shootout (Race 1)', startUtc: '2026-11-07T01:05:00Z', durationMinutes: 25 },
      { type: 'race', label: 'Race 1 (250 km)', startUtc: '2026-11-07T04:30:00Z', durationMinutes: 115 },
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2026-11-08T00:20:00Z', durationMinutes: 20 },
      { type: 'qualifying', label: 'Top 10 Shootout (Race 2)', startUtc: '2026-11-08T01:05:00Z', durationMinutes: 25 },
      { type: 'race', label: 'Race 2 (250 km)', startUtc: '2026-11-08T04:30:00Z', durationMinutes: 115 },
    ],
  },
  {
    // Round 14: Adelaide Grand Final — 26–29 Nov 2026 (SA, ACDT UTC+10:30). Races of 100 / 250 / 250 km. Source: v8sleuth / supercars.com track schedule
    id: 'sc-2026-adelaide',
    round: 14,
    name: 'bp Adelaide Grand Final',
    circuitId: 'adelaide-street-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-11-26T04:45:00Z', durationMinutes: 25 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-11-26T23:30:00Z', durationMinutes: 25 },
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2026-11-27T02:40:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1 (100 km)', startUtc: '2026-11-27T05:50:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2026-11-28T01:15:00Z', durationMinutes: 24 },
      { type: 'qualifying', label: 'Top 10 Shootout (Race 2)', startUtc: '2026-11-28T02:05:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race 2 (250 km)', startUtc: '2026-11-28T04:50:00Z', durationMinutes: 125 },
      { type: 'qualifying', label: 'Qualifying (Race 3)', startUtc: '2026-11-29T01:15:00Z', durationMinutes: 24 },
      { type: 'qualifying', label: 'Top 10 Shootout (Race 3)', startUtc: '2026-11-29T02:05:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race 3 (250 km)', startUtc: '2026-11-29T04:45:00Z', durationMinutes: 125 },
    ],
  },
]
