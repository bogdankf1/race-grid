import { RaceEvent } from '@/lib/types'

// Supercars Championship 2021 — 12 rounds (COVID-impacted season)
// Rounds 8–11 all held at Sydney Motorsport Park due to border closures.
// Australian DST 2021: ends Sun 4 Apr (NSW/VIC/TAS/ACT/SA), resumes Sun 3 Oct.
// NZ DST 2021: ends Sun 4 Apr, resumes Sun 26 Sep.
// QLD always AEST (UTC+10), NT always ACST (UTC+9:30), WA always AWST (UTC+8).
export const supercars2021: RaceEvent[] = [
  {
    // Round 1: Mount Panorama 500 — Mount Panorama, 27–28 Feb 2021 (NSW, AEDT UTC+11)
    id: 'sc-2021-bathurst-500',
    round: 1,
    name: 'Mount Panorama 500',
    circuitId: 'mount-panorama-circuit',
    sessions: [
      // Sat 27 Feb 10:00 AEDT = 23:00 UTC Fri
      { type: 'practice', label: 'Practice 1', startUtc: '2021-02-26T23:00:00Z', durationMinutes: 30 },
      // Sat 12:00 AEDT = 01:00 UTC Sat
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2021-02-27T01:00:00Z', durationMinutes: 20 },
      // Sat 14:30 AEDT = 03:30 UTC
      { type: 'race', label: 'Race 1', startUtc: '2021-02-27T03:30:00Z', durationMinutes: 75 },
      // Sun 28 Feb 10:00 AEDT = 23:00 UTC Sat
      { type: 'practice', label: 'Practice 2', startUtc: '2021-02-27T23:00:00Z', durationMinutes: 30 },
      // Sun 12:00 AEDT = 01:00 UTC Sun
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2021-02-28T01:00:00Z', durationMinutes: 20 },
      // Sun 14:30 AEDT = 03:30 UTC
      { type: 'race', label: 'Race 2', startUtc: '2021-02-28T03:30:00Z', durationMinutes: 75 },
    ],
  },
  {
    // Round 2: Sandown — Sandown Raceway, 20–21 Mar 2021 (VIC, AEDT UTC+11)
    id: 'sc-2021-sandown',
    round: 2,
    name: 'Sandown',
    circuitId: 'sandown-raceway',
    sessions: [
      // Sat 20 Mar 10:00 AEDT = 23:00 UTC Fri
      { type: 'practice', label: 'Practice 1', startUtc: '2021-03-19T23:00:00Z', durationMinutes: 30 },
      // Sat 12:00 AEDT = 01:00 UTC Sat
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2021-03-20T01:00:00Z', durationMinutes: 20 },
      // Sat 14:30 AEDT = 03:30 UTC
      { type: 'race', label: 'Race 1', startUtc: '2021-03-20T03:30:00Z', durationMinutes: 60 },
      // Sun 21 Mar 10:00 AEDT = 23:00 UTC Sat
      { type: 'practice', label: 'Practice 2', startUtc: '2021-03-20T23:00:00Z', durationMinutes: 30 },
      // Sun 12:00 AEDT = 01:00 UTC Sun
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2021-03-21T01:00:00Z', durationMinutes: 20 },
      // Sun 14:30 AEDT = 03:30 UTC
      { type: 'race', label: 'Race 2', startUtc: '2021-03-21T03:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    // Round 3: Tasmania — Symmons Plains, 17–18 Apr 2021 (TAS, AEST UTC+10, DST ended 4 Apr)
    id: 'sc-2021-tasmania',
    round: 3,
    name: 'Tasmania',
    circuitId: 'symmons-plains-raceway',
    sessions: [
      // Sat 17 Apr 10:00 AEST = 00:00 UTC Sat
      { type: 'practice', label: 'Practice 1', startUtc: '2021-04-17T00:00:00Z', durationMinutes: 30 },
      // Sat 12:00 AEST = 02:00 UTC
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2021-04-17T02:00:00Z', durationMinutes: 20 },
      // Sat 14:30 AEST = 04:30 UTC
      { type: 'race', label: 'Race 1', startUtc: '2021-04-17T04:30:00Z', durationMinutes: 60 },
      // Sun 18 Apr 10:00 AEST = 00:00 UTC Sun
      { type: 'practice', label: 'Practice 2', startUtc: '2021-04-18T00:00:00Z', durationMinutes: 30 },
      // Sun 12:00 AEST = 02:00 UTC
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2021-04-18T02:00:00Z', durationMinutes: 20 },
      // Sun 14:30 AEST = 04:30 UTC
      { type: 'race', label: 'Race 2', startUtc: '2021-04-18T04:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    // Round 4: The Bend — The Bend Motorsport Park, 8–9 May 2021 (SA, ACST UTC+9.5)
    id: 'sc-2021-thebend',
    round: 4,
    name: 'The Bend',
    circuitId: 'the-bend-motorsport-park',
    sessions: [
      // Sat 8 May 10:00 ACST = 00:30 UTC Sat
      { type: 'practice', label: 'Practice 1', startUtc: '2021-05-08T00:30:00Z', durationMinutes: 30 },
      // Sat 12:00 ACST = 02:30 UTC
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2021-05-08T02:30:00Z', durationMinutes: 20 },
      // Sat 14:30 ACST = 05:00 UTC
      { type: 'race', label: 'Race 1', startUtc: '2021-05-08T05:00:00Z', durationMinutes: 60 },
      // Sun 9 May 10:00 ACST = 00:30 UTC Sun
      { type: 'practice', label: 'Practice 2', startUtc: '2021-05-09T00:30:00Z', durationMinutes: 30 },
      // Sun 12:00 ACST = 02:30 UTC
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2021-05-09T02:30:00Z', durationMinutes: 20 },
      // Sun 14:30 ACST = 05:00 UTC
      { type: 'race', label: 'Race 2', startUtc: '2021-05-09T05:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    // Round 5: Darwin Triple Crown — Hidden Valley, 19–20 Jun 2021 (NT, ACST UTC+9.5)
    // Triple Crown = 3 races
    id: 'sc-2021-darwin',
    round: 5,
    name: 'Darwin Triple Crown',
    circuitId: 'hidden-valley-raceway',
    sessions: [
      // Sat 19 Jun 10:00 ACST = 00:30 UTC Sat
      { type: 'practice', label: 'Practice 1', startUtc: '2021-06-19T00:30:00Z', durationMinutes: 30 },
      // Sat 12:00 ACST = 02:30 UTC
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2021-06-19T02:30:00Z', durationMinutes: 20 },
      // Sat 14:30 ACST = 05:00 UTC
      { type: 'race', label: 'Race 1', startUtc: '2021-06-19T05:00:00Z', durationMinutes: 60 },
      // Sun 20 Jun 10:00 ACST = 00:30 UTC Sun
      { type: 'practice', label: 'Practice 2', startUtc: '2021-06-20T00:30:00Z', durationMinutes: 30 },
      // Sun 12:00 ACST = 02:30 UTC
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2021-06-20T02:30:00Z', durationMinutes: 20 },
      // Sun 13:30 ACST = 04:00 UTC
      { type: 'race', label: 'Race 2', startUtc: '2021-06-20T04:00:00Z', durationMinutes: 60 },
      // Sun 15:30 ACST = 06:00 UTC
      { type: 'race', label: 'Race 3', startUtc: '2021-06-20T06:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    // Round 6: Townsville 500 — Townsville Street Circuit, 10–11 Jul 2021 (QLD, AEST UTC+10)
    id: 'sc-2021-townsville',
    round: 6,
    name: 'Townsville 500',
    circuitId: 'townsville-street-circuit',
    sessions: [
      // Sat 10 Jul 10:00 AEST = 00:00 UTC Sat
      { type: 'practice', label: 'Practice 1', startUtc: '2021-07-10T00:00:00Z', durationMinutes: 30 },
      // Sat 12:00 AEST = 02:00 UTC
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2021-07-10T02:00:00Z', durationMinutes: 20 },
      // Sat 14:30 AEST = 04:30 UTC
      { type: 'race', label: 'Race 1', startUtc: '2021-07-10T04:30:00Z', durationMinutes: 75 },
      // Sun 11 Jul 10:00 AEST = 00:00 UTC Sun
      { type: 'practice', label: 'Practice 2', startUtc: '2021-07-11T00:00:00Z', durationMinutes: 30 },
      // Sun 12:00 AEST = 02:00 UTC
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2021-07-11T02:00:00Z', durationMinutes: 20 },
      // Sun 14:30 AEST = 04:30 UTC
      { type: 'race', label: 'Race 2', startUtc: '2021-07-11T04:30:00Z', durationMinutes: 75 },
    ],
  },
  {
    // Round 7: Townsville SuperSprint — Townsville Street Circuit, 17–18 Jul 2021 (QLD, AEST UTC+10)
    id: 'sc-2021-townsville2',
    round: 7,
    name: 'Townsville SuperSprint',
    circuitId: 'townsville-street-circuit',
    sessions: [
      // Sat 17 Jul 10:00 AEST = 00:00 UTC Sat
      { type: 'practice', label: 'Practice 1', startUtc: '2021-07-17T00:00:00Z', durationMinutes: 30 },
      // Sat 12:00 AEST = 02:00 UTC
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2021-07-17T02:00:00Z', durationMinutes: 20 },
      // Sat 14:30 AEST = 04:30 UTC
      { type: 'race', label: 'Race 1', startUtc: '2021-07-17T04:30:00Z', durationMinutes: 60 },
      // Sun 18 Jul 10:00 AEST = 00:00 UTC Sun
      { type: 'practice', label: 'Practice 2', startUtc: '2021-07-18T00:00:00Z', durationMinutes: 30 },
      // Sun 12:00 AEST = 02:00 UTC
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2021-07-18T02:00:00Z', durationMinutes: 20 },
      // Sun 14:30 AEST = 04:30 UTC
      { type: 'race', label: 'Race 2', startUtc: '2021-07-18T04:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    // Round 8: Sydney SuperNight — Sydney Motorsport Park, 30–31 Oct 2021 (NSW, AEDT UTC+11, DST resumed 3 Oct)
    id: 'sc-2021-sydney1',
    round: 8,
    name: 'Sydney SuperNight',
    circuitId: 'sydney-motorsport-park',
    sessions: [
      // Sat 30 Oct 10:00 AEDT = 23:00 UTC Fri
      { type: 'practice', label: 'Practice 1', startUtc: '2021-10-29T23:00:00Z', durationMinutes: 30 },
      // Sat 12:00 AEDT = 01:00 UTC Sat
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2021-10-30T01:00:00Z', durationMinutes: 20 },
      // Sat 14:30 AEDT = 03:30 UTC
      { type: 'race', label: 'Race 1', startUtc: '2021-10-30T03:30:00Z', durationMinutes: 60 },
      // Sun 31 Oct 10:00 AEDT = 23:00 UTC Sat
      { type: 'practice', label: 'Practice 2', startUtc: '2021-10-30T23:00:00Z', durationMinutes: 30 },
      // Sun 12:00 AEDT = 01:00 UTC Sun
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2021-10-31T01:00:00Z', durationMinutes: 20 },
      // Sun 14:30 AEDT = 03:30 UTC
      { type: 'race', label: 'Race 2', startUtc: '2021-10-31T03:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    // Round 9: Sydney SuperNight — Sydney Motorsport Park, 6–7 Nov 2021 (NSW, AEDT UTC+11)
    id: 'sc-2021-sydney2',
    round: 9,
    name: 'Sydney SuperNight',
    circuitId: 'sydney-motorsport-park',
    sessions: [
      // Sat 6 Nov 10:00 AEDT = 23:00 UTC Fri
      { type: 'practice', label: 'Practice 1', startUtc: '2021-11-05T23:00:00Z', durationMinutes: 30 },
      // Sat 12:00 AEDT = 01:00 UTC Sat
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2021-11-06T01:00:00Z', durationMinutes: 20 },
      // Sat 14:30 AEDT = 03:30 UTC
      { type: 'race', label: 'Race 1', startUtc: '2021-11-06T03:30:00Z', durationMinutes: 60 },
      // Sun 7 Nov 10:00 AEDT = 23:00 UTC Sat
      { type: 'practice', label: 'Practice 2', startUtc: '2021-11-06T23:00:00Z', durationMinutes: 30 },
      // Sun 12:00 AEDT = 01:00 UTC Sun
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2021-11-07T01:00:00Z', durationMinutes: 20 },
      // Sun 14:30 AEDT = 03:30 UTC
      { type: 'race', label: 'Race 2', startUtc: '2021-11-07T03:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    // Round 10: Sydney SuperSprint — Sydney Motorsport Park, 13–14 Nov 2021 (NSW, AEDT UTC+11)
    id: 'sc-2021-sydney3',
    round: 10,
    name: 'Sydney SuperSprint',
    circuitId: 'sydney-motorsport-park',
    sessions: [
      // Sat 13 Nov 10:00 AEDT = 23:00 UTC Fri
      { type: 'practice', label: 'Practice 1', startUtc: '2021-11-12T23:00:00Z', durationMinutes: 30 },
      // Sat 12:00 AEDT = 01:00 UTC Sat
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2021-11-13T01:00:00Z', durationMinutes: 20 },
      // Sat 14:30 AEDT = 03:30 UTC
      { type: 'race', label: 'Race 1', startUtc: '2021-11-13T03:30:00Z', durationMinutes: 60 },
      // Sun 14 Nov 10:00 AEDT = 23:00 UTC Sat
      { type: 'practice', label: 'Practice 2', startUtc: '2021-11-13T23:00:00Z', durationMinutes: 30 },
      // Sun 12:00 AEDT = 01:00 UTC Sun
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2021-11-14T01:00:00Z', durationMinutes: 20 },
      // Sun 14:30 AEDT = 03:30 UTC
      { type: 'race', label: 'Race 2', startUtc: '2021-11-14T03:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    // Round 11: Sydney SuperNight — Sydney Motorsport Park, 20–21 Nov 2021 (NSW, AEDT UTC+11)
    id: 'sc-2021-sydney4',
    round: 11,
    name: 'Sydney SuperNight',
    circuitId: 'sydney-motorsport-park',
    sessions: [
      // Sat 20 Nov 10:00 AEDT = 23:00 UTC Fri
      { type: 'practice', label: 'Practice 1', startUtc: '2021-11-19T23:00:00Z', durationMinutes: 30 },
      // Sat 12:00 AEDT = 01:00 UTC Sat
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2021-11-20T01:00:00Z', durationMinutes: 20 },
      // Sat 14:30 AEDT = 03:30 UTC
      { type: 'race', label: 'Race 1', startUtc: '2021-11-20T03:30:00Z', durationMinutes: 60 },
      // Sun 21 Nov 10:00 AEDT = 23:00 UTC Sat
      { type: 'practice', label: 'Practice 2', startUtc: '2021-11-20T23:00:00Z', durationMinutes: 30 },
      // Sun 12:00 AEDT = 01:00 UTC Sun
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2021-11-21T01:00:00Z', durationMinutes: 20 },
      // Sun 14:30 AEDT = 03:30 UTC
      { type: 'race', label: 'Race 2', startUtc: '2021-11-21T03:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    // Round 12: Bathurst 1000 — Mount Panorama, 5 Dec 2021 (NSW, AEDT UTC+11)
    // Endurance race: 1000 km, ~06:15 AEDT start = 19:15 UTC Sat 4 Dec
    id: 'sc-2021-bathurst',
    round: 12,
    name: 'Bathurst 1000',
    circuitId: 'mount-panorama-circuit',
    sessions: [
      // Thu 2 Dec practice (AEDT UTC+11)
      // Thu 10:00 AEDT = 23:00 UTC Wed
      { type: 'practice', label: 'Practice 1', startUtc: '2021-12-01T23:00:00Z', durationMinutes: 60 },
      // Thu 14:00 AEDT = 03:00 UTC Thu
      { type: 'practice', label: 'Practice 2', startUtc: '2021-12-02T03:00:00Z', durationMinutes: 60 },
      // Fri 3 Dec
      // Fri 10:00 AEDT = 23:00 UTC Thu
      { type: 'practice', label: 'Practice 3', startUtc: '2021-12-02T23:00:00Z', durationMinutes: 60 },
      // Fri 14:00 AEDT = 03:00 UTC Fri
      { type: 'practice', label: 'Practice 4', startUtc: '2021-12-03T03:00:00Z', durationMinutes: 60 },
      // Sat 4 Dec
      // Sat 12:00 AEDT = 01:00 UTC Sat
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-12-04T01:00:00Z', durationMinutes: 40 },
      // Sat 15:05 AEDT = 04:05 UTC — Top 10 Shootout
      { type: 'qualifying', label: 'Top 10 Shootout', startUtc: '2021-12-04T04:05:00Z', durationMinutes: 30 },
      // Sun 5 Dec 06:15 AEDT = 19:15 UTC Sat 4 Dec
      { type: 'endurance', label: 'Bathurst 1000', startUtc: '2021-12-04T19:15:00Z', durationMinutes: 420 },
    ],
  },
]
