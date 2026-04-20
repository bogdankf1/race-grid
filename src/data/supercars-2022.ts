import { RaceEvent } from '@/lib/types'

// Supercars Championship 2022 — 13 rounds
// Australian DST 2022: ends Sun 3 Apr (NSW/VIC/TAS/ACT/SA), resumes Sun 2 Oct.
// NZ DST 2022: ends Sun 3 Apr, resumes Sun 25 Sep.
// QLD always AEST (UTC+10), NT always ACST (UTC+9:30), WA always AWST (UTC+8).
export const supercars2022: RaceEvent[] = [
  {
    // Round 1: Sydney SuperNight — Sydney Motorsport Park, 5–6 Mar 2022 (NSW, AEDT UTC+11)
    id: 'sc-2022-sydney',
    round: 1,
    name: 'Sydney SuperNight',
    circuitId: 'sydney-motorsport-park',
    sessions: [
      // Sat 5 Mar 10:00 AEDT = 23:00 UTC Fri 4 Mar
      { type: 'practice', label: 'Practice 1', startUtc: '2022-03-04T23:00:00Z', durationMinutes: 30 },
      // Sat 12:00 AEDT = 01:00 UTC Sat
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2022-03-05T01:00:00Z', durationMinutes: 20 },
      // Sat 14:30 AEDT = 03:30 UTC
      { type: 'race', label: 'Race 1', startUtc: '2022-03-05T03:30:00Z', durationMinutes: 60 },
      // Sun 6 Mar 10:00 AEDT = 23:00 UTC Sat
      { type: 'practice', label: 'Practice 2', startUtc: '2022-03-05T23:00:00Z', durationMinutes: 30 },
      // Sun 12:00 AEDT = 01:00 UTC Sun
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2022-03-06T01:00:00Z', durationMinutes: 20 },
      // Sun 14:30 AEDT = 03:30 UTC
      { type: 'race', label: 'Race 2', startUtc: '2022-03-06T03:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    // Round 2: Tasmania — Symmons Plains, 26–27 Mar 2022 (TAS, AEDT UTC+11)
    id: 'sc-2022-tasmania',
    round: 2,
    name: 'Tasmania',
    circuitId: 'symmons-plains-raceway',
    sessions: [
      // Sat 26 Mar 10:00 AEDT = 23:00 UTC Fri
      { type: 'practice', label: 'Practice 1', startUtc: '2022-03-25T23:00:00Z', durationMinutes: 30 },
      // Sat 12:00 AEDT = 01:00 UTC Sat
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2022-03-26T01:00:00Z', durationMinutes: 20 },
      // Sat 14:30 AEDT = 03:30 UTC
      { type: 'race', label: 'Race 1', startUtc: '2022-03-26T03:30:00Z', durationMinutes: 60 },
      // Sun 27 Mar 10:00 AEDT = 23:00 UTC Sat
      { type: 'practice', label: 'Practice 2', startUtc: '2022-03-26T23:00:00Z', durationMinutes: 30 },
      // Sun 12:00 AEDT = 01:00 UTC Sun
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2022-03-27T01:00:00Z', durationMinutes: 20 },
      // Sun 14:30 AEDT = 03:30 UTC
      { type: 'race', label: 'Race 2', startUtc: '2022-03-27T03:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    // Round 3: Melbourne 400 — Albert Park, 8–10 Apr 2022 (VIC, AEST UTC+10, DST ended 3 Apr)
    id: 'sc-2022-melbourne',
    round: 3,
    name: 'Melbourne 400',
    circuitId: 'albert-park-circuit',
    sessions: [
      // Fri 8 Apr 10:00 AEST = 00:00 UTC Fri
      { type: 'practice', label: 'Practice 1', startUtc: '2022-04-08T00:00:00Z', durationMinutes: 30 },
      // Fri 12:00 AEST = 02:00 UTC
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2022-04-08T02:00:00Z', durationMinutes: 20 },
      // Fri 14:30 AEST = 04:30 UTC
      { type: 'race', label: 'Race 1', startUtc: '2022-04-08T04:30:00Z', durationMinutes: 60 },
      // Sat 9 Apr 10:00 AEST = 00:00 UTC Sat
      { type: 'practice', label: 'Practice 2', startUtc: '2022-04-09T00:00:00Z', durationMinutes: 30 },
      // Sat 12:00 AEST = 02:00 UTC
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2022-04-09T02:00:00Z', durationMinutes: 20 },
      // Sat 14:30 AEST = 04:30 UTC
      { type: 'race', label: 'Race 2', startUtc: '2022-04-09T04:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    // Round 4: Perth SuperNight — Wanneroo, 30 Apr – 1 May 2022 (WA, AWST UTC+8)
    id: 'sc-2022-perth',
    round: 4,
    name: 'Perth SuperNight',
    circuitId: 'wanneroo-raceway',
    sessions: [
      // Sat 30 Apr 10:00 AWST = 02:00 UTC Sat
      { type: 'practice', label: 'Practice 1', startUtc: '2022-04-30T02:00:00Z', durationMinutes: 30 },
      // Sat 12:00 AWST = 04:00 UTC
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2022-04-30T04:00:00Z', durationMinutes: 20 },
      // Sat 14:30 AWST = 06:30 UTC
      { type: 'race', label: 'Race 1', startUtc: '2022-04-30T06:30:00Z', durationMinutes: 60 },
      // Sun 1 May 10:00 AWST = 02:00 UTC Sun
      { type: 'practice', label: 'Practice 2', startUtc: '2022-05-01T02:00:00Z', durationMinutes: 30 },
      // Sun 12:00 AWST = 04:00 UTC
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2022-05-01T04:00:00Z', durationMinutes: 20 },
      // Sun 14:30 AWST = 06:30 UTC
      { type: 'race', label: 'Race 2', startUtc: '2022-05-01T06:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    // Round 5: Winton — Winton Motor Raceway, 21–22 May 2022 (VIC, AEST UTC+10)
    id: 'sc-2022-winton',
    round: 5,
    name: 'Winton',
    circuitId: 'winton-motor-raceway',
    sessions: [
      // Sat 21 May 10:00 AEST = 00:00 UTC Sat
      { type: 'practice', label: 'Practice 1', startUtc: '2022-05-21T00:00:00Z', durationMinutes: 30 },
      // Sat 12:00 AEST = 02:00 UTC
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2022-05-21T02:00:00Z', durationMinutes: 20 },
      // Sat 14:30 AEST = 04:30 UTC
      { type: 'race', label: 'Race 1', startUtc: '2022-05-21T04:30:00Z', durationMinutes: 60 },
      // Sun 22 May 10:00 AEST = 00:00 UTC Sun
      { type: 'practice', label: 'Practice 2', startUtc: '2022-05-22T00:00:00Z', durationMinutes: 30 },
      // Sun 12:00 AEST = 02:00 UTC
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2022-05-22T02:00:00Z', durationMinutes: 20 },
      // Sun 14:30 AEST = 04:30 UTC
      { type: 'race', label: 'Race 2', startUtc: '2022-05-22T04:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    // Round 6: Darwin Triple Crown — Hidden Valley, 18–19 Jun 2022 (NT, ACST UTC+9.5)
    // Triple Crown = 3 races
    id: 'sc-2022-darwin',
    round: 6,
    name: 'Darwin Triple Crown',
    circuitId: 'hidden-valley-raceway',
    sessions: [
      // Sat 18 Jun 10:00 ACST = 00:30 UTC Sat
      { type: 'practice', label: 'Practice 1', startUtc: '2022-06-18T00:30:00Z', durationMinutes: 30 },
      // Sat 12:00 ACST = 02:30 UTC
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2022-06-18T02:30:00Z', durationMinutes: 20 },
      // Sat 14:30 ACST = 05:00 UTC
      { type: 'race', label: 'Race 1', startUtc: '2022-06-18T05:00:00Z', durationMinutes: 60 },
      // Sun 19 Jun 10:00 ACST = 00:30 UTC Sun
      { type: 'practice', label: 'Practice 2', startUtc: '2022-06-19T00:30:00Z', durationMinutes: 30 },
      // Sun 12:00 ACST = 02:30 UTC
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2022-06-19T02:30:00Z', durationMinutes: 20 },
      // Sun 13:30 ACST = 04:00 UTC
      { type: 'race', label: 'Race 2', startUtc: '2022-06-19T04:00:00Z', durationMinutes: 60 },
      // Sun 15:30 ACST = 06:00 UTC
      { type: 'race', label: 'Race 3', startUtc: '2022-06-19T06:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    // Round 7: Townsville 500 — Townsville Street Circuit, 9–10 Jul 2022 (QLD, AEST UTC+10)
    id: 'sc-2022-townsville',
    round: 7,
    name: 'Townsville 500',
    circuitId: 'townsville-street-circuit',
    sessions: [
      // Sat 9 Jul 10:00 AEST = 00:00 UTC Sat
      { type: 'practice', label: 'Practice 1', startUtc: '2022-07-09T00:00:00Z', durationMinutes: 30 },
      // Sat 12:00 AEST = 02:00 UTC
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2022-07-09T02:00:00Z', durationMinutes: 20 },
      // Sat 14:30 AEST = 04:30 UTC
      { type: 'race', label: 'Race 1', startUtc: '2022-07-09T04:30:00Z', durationMinutes: 75 },
      // Sun 10 Jul 10:00 AEST = 00:00 UTC Sun
      { type: 'practice', label: 'Practice 2', startUtc: '2022-07-10T00:00:00Z', durationMinutes: 30 },
      // Sun 12:00 AEST = 02:00 UTC
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2022-07-10T02:00:00Z', durationMinutes: 20 },
      // Sun 14:30 AEST = 04:30 UTC
      { type: 'race', label: 'Race 2', startUtc: '2022-07-10T04:30:00Z', durationMinutes: 75 },
    ],
  },
  {
    // Round 8: The Bend — The Bend Motorsport Park, 30–31 Jul 2022 (SA, ACST UTC+9.5)
    id: 'sc-2022-thebend',
    round: 8,
    name: 'The Bend',
    circuitId: 'the-bend-motorsport-park',
    sessions: [
      // Sat 30 Jul 10:00 ACST = 00:30 UTC Sat
      { type: 'practice', label: 'Practice 1', startUtc: '2022-07-30T00:30:00Z', durationMinutes: 30 },
      // Sat 12:00 ACST = 02:30 UTC
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2022-07-30T02:30:00Z', durationMinutes: 20 },
      // Sat 14:30 ACST = 05:00 UTC
      { type: 'race', label: 'Race 1', startUtc: '2022-07-30T05:00:00Z', durationMinutes: 60 },
      // Sun 31 Jul 10:00 ACST = 00:30 UTC Sun
      { type: 'practice', label: 'Practice 2', startUtc: '2022-07-31T00:30:00Z', durationMinutes: 30 },
      // Sun 12:00 ACST = 02:30 UTC
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2022-07-31T02:30:00Z', durationMinutes: 20 },
      // Sun 14:30 ACST = 05:00 UTC
      { type: 'race', label: 'Race 2', startUtc: '2022-07-31T05:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    // Round 9: Sandown — Sandown Raceway, 20–21 Aug 2022 (VIC, AEST UTC+10)
    id: 'sc-2022-sandown',
    round: 9,
    name: 'Sandown',
    circuitId: 'sandown-raceway',
    sessions: [
      // Sat 20 Aug 10:00 AEST = 00:00 UTC Sat
      { type: 'practice', label: 'Practice 1', startUtc: '2022-08-20T00:00:00Z', durationMinutes: 30 },
      // Sat 12:00 AEST = 02:00 UTC
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2022-08-20T02:00:00Z', durationMinutes: 20 },
      // Sat 14:30 AEST = 04:30 UTC
      { type: 'race', label: 'Race 1', startUtc: '2022-08-20T04:30:00Z', durationMinutes: 60 },
      // Sun 21 Aug 10:00 AEST = 00:00 UTC Sun
      { type: 'practice', label: 'Practice 2', startUtc: '2022-08-21T00:00:00Z', durationMinutes: 30 },
      // Sun 12:00 AEST = 02:00 UTC
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2022-08-21T02:00:00Z', durationMinutes: 20 },
      // Sun 14:30 AEST = 04:30 UTC
      { type: 'race', label: 'Race 2', startUtc: '2022-08-21T04:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    // Round 10: Auckland — Pukekohe Park, 10–11 Sep 2022 (NZ, NZST UTC+12)
    id: 'sc-2022-auckland',
    round: 10,
    name: 'Auckland',
    circuitId: 'pukekohe-park-raceway',
    sessions: [
      // Sat 10 Sep 10:00 NZST = 22:00 UTC Fri
      { type: 'practice', label: 'Practice 1', startUtc: '2022-09-09T22:00:00Z', durationMinutes: 30 },
      // Sat 12:00 NZST = 00:00 UTC Sat
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2022-09-10T00:00:00Z', durationMinutes: 20 },
      // Sat 14:30 NZST = 02:30 UTC
      { type: 'race', label: 'Race 1', startUtc: '2022-09-10T02:30:00Z', durationMinutes: 60 },
      // Sun 11 Sep 10:00 NZST = 22:00 UTC Sat
      { type: 'practice', label: 'Practice 2', startUtc: '2022-09-10T22:00:00Z', durationMinutes: 30 },
      // Sun 12:00 NZST = 00:00 UTC Sun
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2022-09-11T00:00:00Z', durationMinutes: 20 },
      // Sun 14:30 NZST = 02:30 UTC
      { type: 'race', label: 'Race 2', startUtc: '2022-09-11T02:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    // Round 11: Bathurst 1000 — Mount Panorama, 9 Oct 2022 (NSW, AEDT UTC+11, DST resumed 2 Oct)
    // Endurance race: 1000 km, ~6:15 AEDT start = 19:15 UTC Sat 8 Oct
    id: 'sc-2022-bathurst',
    round: 11,
    name: 'Bathurst 1000',
    circuitId: 'mount-panorama-circuit',
    sessions: [
      // Thu 6 Oct practice sessions (AEDT UTC+11)
      // Thu 10:00 AEDT = 23:00 UTC Wed
      { type: 'practice', label: 'Practice 1', startUtc: '2022-10-05T23:00:00Z', durationMinutes: 60 },
      // Thu 14:00 AEDT = 03:00 UTC Thu
      { type: 'practice', label: 'Practice 2', startUtc: '2022-10-06T03:00:00Z', durationMinutes: 60 },
      // Fri 7 Oct
      // Fri 10:00 AEDT = 23:00 UTC Thu
      { type: 'practice', label: 'Practice 3', startUtc: '2022-10-06T23:00:00Z', durationMinutes: 60 },
      // Fri 14:00 AEDT = 03:00 UTC Fri
      { type: 'practice', label: 'Practice 4', startUtc: '2022-10-07T03:00:00Z', durationMinutes: 60 },
      // Sat 8 Oct
      // Sat 12:00 AEDT = 01:00 UTC Sat
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-08T01:00:00Z', durationMinutes: 40 },
      // Sat 15:05 AEDT = 04:05 UTC — Top 10 Shootout
      { type: 'qualifying', label: 'Top 10 Shootout', startUtc: '2022-10-08T04:05:00Z', durationMinutes: 30 },
      // Sun 9 Oct 06:15 AEDT = 19:15 UTC Sat 8 Oct
      { type: 'endurance', label: 'Bathurst 1000', startUtc: '2022-10-08T19:15:00Z', durationMinutes: 420 },
    ],
  },
  {
    // Round 12: Gold Coast 500 — Surfers Paradise Street Circuit, 29–30 Oct 2022 (QLD, AEST UTC+10)
    id: 'sc-2022-goldcoast',
    round: 12,
    name: 'Gold Coast 500',
    circuitId: 'surfers-paradise-street-circuit',
    sessions: [
      // Sat 29 Oct 10:00 AEST = 00:00 UTC Sat
      { type: 'practice', label: 'Practice 1', startUtc: '2022-10-29T00:00:00Z', durationMinutes: 30 },
      // Sat 12:00 AEST = 02:00 UTC
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2022-10-29T02:00:00Z', durationMinutes: 20 },
      // Sat 14:30 AEST = 04:30 UTC
      { type: 'race', label: 'Race 1', startUtc: '2022-10-29T04:30:00Z', durationMinutes: 75 },
      // Sun 30 Oct 10:00 AEST = 00:00 UTC Sun
      { type: 'practice', label: 'Practice 2', startUtc: '2022-10-30T00:00:00Z', durationMinutes: 30 },
      // Sun 12:00 AEST = 02:00 UTC
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2022-10-30T02:00:00Z', durationMinutes: 20 },
      // Sun 14:30 AEST = 04:30 UTC
      { type: 'race', label: 'Race 2', startUtc: '2022-10-30T04:30:00Z', durationMinutes: 75 },
    ],
  },
  {
    // Round 13: Adelaide 500 — Adelaide Street Circuit, 3–4 Dec 2022 (SA, ACDT UTC+10.5)
    id: 'sc-2022-adelaide',
    round: 13,
    name: 'Adelaide 500',
    circuitId: 'adelaide-street-circuit',
    sessions: [
      // Sat 3 Dec 10:00 ACDT = 23:30 UTC Fri
      { type: 'practice', label: 'Practice 1', startUtc: '2022-12-02T23:30:00Z', durationMinutes: 30 },
      // Sat 12:00 ACDT = 01:30 UTC Sat
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2022-12-03T01:30:00Z', durationMinutes: 20 },
      // Sat 14:30 ACDT = 04:00 UTC
      { type: 'race', label: 'Race 1', startUtc: '2022-12-03T04:00:00Z', durationMinutes: 75 },
      // Sun 4 Dec 10:00 ACDT = 23:30 UTC Sat
      { type: 'practice', label: 'Practice 2', startUtc: '2022-12-03T23:30:00Z', durationMinutes: 30 },
      // Sun 12:00 ACDT = 01:30 UTC Sun
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2022-12-04T01:30:00Z', durationMinutes: 20 },
      // Sun 14:30 ACDT = 04:00 UTC
      { type: 'race', label: 'Race 2', startUtc: '2022-12-04T04:00:00Z', durationMinutes: 75 },
    ],
  },
]
