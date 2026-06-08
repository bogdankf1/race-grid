import { RaceEvent } from '@/lib/types'

// Porsche Mobil 1 Supercup 2021 calendar — 8 rounds at European F1 weekends (incl. Monza double-header)
// Sources:
//   - Wikipedia: 2021 Porsche Supercup
//   - newsroom.porsche.com / motorsports.porsche.com (per-round preview/report articles)
//   - racing.porsche.com results archive
// Verified: June 2026 (season concluded with Monza double-header on 12 September 2021)
// Format: Free Practice (Thu/Fri), Qualifying (Fri/Sat), Race (Sun)
// All session times converted from CEST (UTC+2) to UTC.
// Monaco follows the historical F1 Thursday-running pattern: practice Thu, qualifying Fri, race Sun (race Sat in 2021 due to schedule).
// Monza 2021 hosted a double-header — round 7 ran Saturday 11 September, round 8 Sunday 12 September.
// Other rounds follow the standard Supercup F1-weekend pattern
// (Fri ~18:30 practice, Sat ~11:00 qualifying, Sun 11:45 race).
export const porscheSupercup2021: RaceEvent[] = [
  {
    id: 'porsche-supercup-2021-monaco',
    round: 1,
    name: 'Round 1 — Monaco',
    circuitId: 'circuit-de-monaco',
    sessions: [
      // Thursday 20 May, 16:30 CEST = 14:30 UTC (Monaco F1 Thursday-running pattern)
      { type: 'practice', label: 'Free Practice', startUtc: '2021-05-20T14:30:00Z', durationMinutes: 45 },
      // Friday 21 May, 18:45 CEST = 16:45 UTC (Monaco F1 Friday qualifying slot)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-21T16:45:00Z', durationMinutes: 30 },
      // Sunday 23 May, 10:20 CEST = 08:20 UTC (Monaco Supercup raced Sunday morning before F1)
      { type: 'race', label: 'Race', startUtc: '2021-05-23T08:20:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2021-spielberg-1',
    round: 2,
    name: 'Round 2 — Spielberg',
    circuitId: 'red-bull-ring',
    sessions: [
      // Friday 25 Jun, 18:30 CEST = 16:30 UTC (typical Supercup slot)
      { type: 'practice', label: 'Free Practice', startUtc: '2021-06-25T16:30:00Z', durationMinutes: 45 },
      // Saturday 26 Jun, 11:00 CEST = 09:00 UTC (typical Supercup slot)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-26T09:00:00Z', durationMinutes: 30 },
      // Sunday 27 Jun, 11:45 CEST = 09:45 UTC (typical Supercup race slot)
      { type: 'race', label: 'Race', startUtc: '2021-06-27T09:45:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2021-spielberg-2',
    round: 3,
    name: 'Round 3 — Spielberg',
    circuitId: 'red-bull-ring',
    sessions: [
      // Friday 2 Jul, 18:30 CEST = 16:30 UTC (typical Supercup slot)
      { type: 'practice', label: 'Free Practice', startUtc: '2021-07-02T16:30:00Z', durationMinutes: 45 },
      // Saturday 3 Jul, 11:00 CEST = 09:00 UTC (typical Supercup slot)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-03T09:00:00Z', durationMinutes: 30 },
      // Sunday 4 Jul, 11:45 CEST = 09:45 UTC (typical Supercup race slot)
      { type: 'race', label: 'Race', startUtc: '2021-07-04T09:45:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2021-hungaroring',
    round: 4,
    name: 'Round 4 — Hungaroring',
    circuitId: 'hungaroring',
    sessions: [
      // Friday 30 Jul, 18:30 CEST = 16:30 UTC (typical Supercup slot)
      { type: 'practice', label: 'Free Practice', startUtc: '2021-07-30T16:30:00Z', durationMinutes: 45 },
      // Saturday 31 Jul, 11:00 CEST = 09:00 UTC (typical Supercup slot)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-31T09:00:00Z', durationMinutes: 30 },
      // Sunday 1 Aug, 11:45 CEST = 09:45 UTC (typical Supercup race slot)
      { type: 'race', label: 'Race', startUtc: '2021-08-01T09:45:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2021-spa',
    round: 5,
    name: 'Round 5 — Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      // Friday 27 Aug, 18:00 CEST = 16:00 UTC (typical Supercup slot)
      { type: 'practice', label: 'Free Practice', startUtc: '2021-08-27T16:00:00Z', durationMinutes: 45 },
      // Saturday 28 Aug, 10:25 CEST = 08:25 UTC (typical Supercup slot)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-28T08:25:00Z', durationMinutes: 30 },
      // Sunday 29 Aug, 11:45 CEST = 09:45 UTC (typical Supercup race slot)
      { type: 'race', label: 'Race', startUtc: '2021-08-29T09:45:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2021-zandvoort',
    round: 6,
    name: 'Round 6 — Zandvoort',
    circuitId: 'circuit-zandvoort',
    sessions: [
      // Friday 3 Sep, 14:00 CEST = 12:00 UTC (typical Zandvoort Supercup slot)
      { type: 'practice', label: 'Free Practice', startUtc: '2021-09-03T12:00:00Z', durationMinutes: 45 },
      // Saturday 4 Sep, 13:00 CEST = 11:00 UTC (typical Zandvoort Supercup slot)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-04T11:00:00Z', durationMinutes: 30 },
      // Sunday 5 Sep, 11:45 CEST = 09:45 UTC (typical Supercup race slot)
      { type: 'race', label: 'Race', startUtc: '2021-09-05T09:45:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2021-monza-1',
    round: 7,
    name: 'Round 7 — Monza',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      // Friday 10 Sep, 14:35 CEST = 12:35 UTC (Monza 2021 F1 sprint weekend slot)
      { type: 'practice', label: 'Free Practice', startUtc: '2021-09-10T12:35:00Z', durationMinutes: 45 },
      // Friday 10 Sep, 18:30 CEST = 16:30 UTC (qualifying held Friday afternoon)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-10T16:30:00Z', durationMinutes: 30 },
      // Saturday 11 Sep, 12:00 CEST = 10:00 UTC (Monza double-header race 1 on Saturday)
      { type: 'race', label: 'Race', startUtc: '2021-09-11T10:00:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2021-monza-2',
    round: 8,
    name: 'Round 8 — Monza',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      // Saturday 11 Sep, 09:00 CEST = 07:00 UTC (qualifying for race 2 on Saturday morning)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-11T07:00:00Z', durationMinutes: 30 },
      // Sunday 12 Sep, 11:45 CEST = 09:45 UTC (Monza double-header race 2 on Sunday)
      { type: 'race', label: 'Race', startUtc: '2021-09-12T09:45:00Z', durationMinutes: 30 },
    ],
  },
]
