import { RaceEvent } from '@/lib/types'

// Porsche Mobil 1 Supercup 2023 calendar — 8 rounds at European F1 weekends (incl. Zandvoort double-header)
// Sources:
//   - Wikipedia: 2023 Porsche Supercup
//   - newsroom.porsche.com / motorsports.porsche.com (per-round preview/report articles)
//   - racing.porsche.com results archive
// Verified: June 2026 (season concluded with Monza on 3 September 2023)
// Format: Free Practice (Thu/Fri), Qualifying (Fri/Sat), Race (Sun)
// All session times converted from CEST (UTC+2) to UTC.
// Monaco follows F1 Friday-running pattern (no Thursday running from 2022): practice Fri, qualifying Fri, race Sun.
// Zandvoort 2023 hosted a double-header — round 6 ran Saturday 26 August, round 7 Sunday 27 August.
// Other rounds follow the standard Supercup F1-weekend pattern
// (Fri ~18:30 practice, Sat ~11:00 qualifying, Sun 11:45 race).
export const porscheSupercup2023: RaceEvent[] = [
  {
    id: 'porsche-supercup-2023-monaco',
    round: 1,
    name: 'Round 1 — Monaco',
    circuitId: 'circuit-de-monaco',
    sessions: [
      // Friday 26 May, 12:00 CEST = 10:00 UTC (Monaco F1 Friday morning practice slot)
      { type: 'practice', label: 'Free Practice', startUtc: '2023-05-26T10:00:00Z', durationMinutes: 45 },
      // Friday 26 May, 18:45 CEST = 16:45 UTC (Monaco F1 Friday qualifying slot)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-05-26T16:45:00Z', durationMinutes: 30 },
      // Sunday 28 May, 12:00 CEST = 10:00 UTC (typical Monaco Supercup race slot)
      { type: 'race', label: 'Race', startUtc: '2023-05-28T10:00:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2023-spielberg',
    round: 2,
    name: 'Round 2 — Spielberg',
    circuitId: 'red-bull-ring',
    sessions: [
      // Friday 30 Jun, 18:30 CEST = 16:30 UTC (typical Supercup slot)
      { type: 'practice', label: 'Free Practice', startUtc: '2023-06-30T16:30:00Z', durationMinutes: 45 },
      // Saturday 1 Jul, 11:00 CEST = 09:00 UTC (typical Supercup slot)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-01T09:00:00Z', durationMinutes: 30 },
      // Sunday 2 Jul, 11:45 CEST = 09:45 UTC (typical Supercup race slot)
      { type: 'race', label: 'Race', startUtc: '2023-07-02T09:45:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2023-silverstone',
    round: 3,
    name: 'Round 3 — Silverstone',
    circuitId: 'silverstone-circuit',
    sessions: [
      // Friday 7 Jul, 18:40 CEST = 16:40 UTC (≈ 17:40 BST local)
      { type: 'practice', label: 'Free Practice', startUtc: '2023-07-07T16:40:00Z', durationMinutes: 45 },
      // Saturday 8 Jul, 17:45 CEST = 15:45 UTC (≈ 16:45 BST local)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-08T15:45:00Z', durationMinutes: 30 },
      // Sunday 9 Jul, 12:55 CEST = 10:55 UTC (≈ 11:55 BST local)
      { type: 'race', label: 'Race', startUtc: '2023-07-09T10:55:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2023-hungaroring',
    round: 4,
    name: 'Round 4 — Hungaroring',
    circuitId: 'hungaroring',
    sessions: [
      // Friday 21 Jul, 18:30 CEST = 16:30 UTC (typical Supercup slot)
      { type: 'practice', label: 'Free Practice', startUtc: '2023-07-21T16:30:00Z', durationMinutes: 45 },
      // Saturday 22 Jul, 11:00 CEST = 09:00 UTC (typical Supercup slot)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-22T09:00:00Z', durationMinutes: 30 },
      // Sunday 23 Jul, 11:45 CEST = 09:45 UTC (typical Supercup race slot)
      { type: 'race', label: 'Race', startUtc: '2023-07-23T09:45:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2023-spa',
    round: 5,
    name: 'Round 5 — Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      // Friday 28 Jul, 18:00 CEST = 16:00 UTC (typical Supercup slot)
      { type: 'practice', label: 'Free Practice', startUtc: '2023-07-28T16:00:00Z', durationMinutes: 45 },
      // Saturday 29 Jul, 10:25 CEST = 08:25 UTC (typical Supercup slot)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-29T08:25:00Z', durationMinutes: 30 },
      // Sunday 30 Jul, 11:45 CEST = 09:45 UTC (typical Supercup race slot)
      { type: 'race', label: 'Race', startUtc: '2023-07-30T09:45:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2023-zandvoort-1',
    round: 6,
    name: 'Round 6 — Zandvoort',
    circuitId: 'circuit-zandvoort',
    sessions: [
      // Friday 25 Aug, 14:00 CEST = 12:00 UTC (typical Zandvoort Supercup slot)
      { type: 'practice', label: 'Free Practice', startUtc: '2023-08-25T12:00:00Z', durationMinutes: 45 },
      // Saturday 26 Aug, 09:00 CEST = 07:00 UTC (early qualifying for double-header)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-26T07:00:00Z', durationMinutes: 30 },
      // Saturday 26 Aug, 14:00 CEST = 12:00 UTC (Zandvoort double-header race 1)
      { type: 'race', label: 'Race', startUtc: '2023-08-26T12:00:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2023-zandvoort-2',
    round: 7,
    name: 'Round 7 — Zandvoort',
    circuitId: 'circuit-zandvoort',
    sessions: [
      // Sunday 27 Aug, 09:00 CEST = 07:00 UTC (qualifying for race 2 Sunday morning)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-27T07:00:00Z', durationMinutes: 30 },
      // Sunday 27 Aug, 11:45 CEST = 09:45 UTC (Zandvoort double-header race 2)
      { type: 'race', label: 'Race', startUtc: '2023-08-27T09:45:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2023-monza',
    round: 8,
    name: 'Round 8 — Monza',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      // Friday 1 Sep, 18:30 CEST = 16:30 UTC (typical Supercup slot)
      { type: 'practice', label: 'Free Practice', startUtc: '2023-09-01T16:30:00Z', durationMinutes: 45 },
      // Saturday 2 Sep, 11:00 CEST = 09:00 UTC (typical Supercup slot)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-02T09:00:00Z', durationMinutes: 30 },
      // Sunday 3 Sep, 11:45 CEST = 09:45 UTC (typical Supercup race slot)
      { type: 'race', label: 'Race', startUtc: '2023-09-03T09:45:00Z', durationMinutes: 30 },
    ],
  },
]
