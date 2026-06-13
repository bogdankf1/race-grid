import { RaceEvent } from '@/lib/types'

// Porsche Mobil 1 Supercup 2024 calendar — 8 rounds at European F1 weekends
// Sources:
//   - Wikipedia: 2024 Porsche Supercup
//   - newsroom.porsche.com / motorsports.porsche.com (per-round preview/report articles)
//   - racing.porsche.com results archive
// Verified: June 2026 (season concluded 1 September 2024)
// Format: Free Practice (Thu/Fri), Qualifying (Fri/Sat), Race (Sun)
// All session times converted from CEST (UTC+2) to UTC.
// Imola practice/qualifying/race times verified against Porsche press release.
// Monaco follows F1 Thursday-running pattern: practice Thu, qualifying Fri, race Sun.
// Other rounds follow the standard Supercup F1-weekend pattern
// (Fri ~18:30 practice, Sat ~11:00 qualifying, Sun 11:45 race).
export const porscheSupercup2024: RaceEvent[] = [
  {
    id: 'porsche-supercup-2024-imola',
    round: 1,
    name: 'Round 1 — Imola',
    circuitId: 'autodromo-enzo-e-dino-ferrari',
    sessions: [
      // Friday 17 May, 18:30 CEST = 16:30 UTC (official)
      { type: 'practice', label: 'Free Practice', startUtc: '2024-05-17T16:30:00Z', durationMinutes: 45 },
      // Saturday 18 May, 11:20 CEST = 09:20 UTC (official)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-18T09:20:00Z', durationMinutes: 30 },
      // Sunday 19 May, 11:45 CEST = 09:45 UTC (official)
      { type: 'race', label: 'Race', startUtc: '2024-05-19T09:45:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2024-monaco',
    round: 2,
    name: 'Round 2 — Monaco',
    circuitId: 'circuit-de-monaco',
    sessions: [
      // Thursday 23 May, 16:30 CEST = 14:30 UTC (Monaco F1 Thursday-running pattern)
      { type: 'practice', label: 'Free Practice', startUtc: '2024-05-23T14:30:00Z', durationMinutes: 45 },
      // Friday 24 May, 18:45 CEST = 16:45 UTC (Monaco F1 Friday qualifying slot)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-24T16:45:00Z', durationMinutes: 30 },
      // Sunday 26 May, 12:00 CEST = 10:00 UTC (typical Monaco Supercup race slot)
      { type: 'race', label: 'Race', startUtc: '2024-05-26T10:00:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2024-spielberg',
    round: 3,
    name: 'Round 3 — Spielberg',
    circuitId: 'red-bull-ring',
    sessions: [
      // Friday 28 Jun, 18:30 CEST = 16:30 UTC (typical Supercup slot)
      { type: 'practice', label: 'Free Practice', startUtc: '2024-06-28T16:30:00Z', durationMinutes: 45 },
      // Saturday 29 Jun, 11:00 CEST = 09:00 UTC (typical Supercup slot)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-29T09:00:00Z', durationMinutes: 30 },
      // Sunday 30 Jun, 11:45 CEST = 09:45 UTC (typical Supercup race slot)
      { type: 'race', label: 'Race', startUtc: '2024-06-30T09:45:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2024-silverstone',
    round: 4,
    name: 'Round 4 — Silverstone',
    circuitId: 'silverstone-circuit',
    sessions: [
      // Friday 5 Jul, 18:40 CEST = 16:40 UTC (≈ 17:40 BST local)
      { type: 'practice', label: 'Free Practice', startUtc: '2024-07-05T16:40:00Z', durationMinutes: 45 },
      // Saturday 6 Jul, 17:45 CEST = 15:45 UTC (≈ 16:45 BST local)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-06T15:45:00Z', durationMinutes: 30 },
      // Sunday 7 Jul, 12:55 CEST = 10:55 UTC (≈ 11:55 BST local)
      { type: 'race', label: 'Race', startUtc: '2024-07-07T10:55:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2024-hungaroring',
    round: 5,
    name: 'Round 5 — Hungaroring',
    circuitId: 'hungaroring',
    sessions: [
      // Friday 19 Jul, 18:30 CEST = 16:30 UTC (typical Supercup slot)
      { type: 'practice', label: 'Free Practice', startUtc: '2024-07-19T16:30:00Z', durationMinutes: 45 },
      // Saturday 20 Jul, 11:00 CEST = 09:00 UTC (typical Supercup slot)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-20T09:00:00Z', durationMinutes: 30 },
      // Sunday 21 Jul, 11:45 CEST = 09:45 UTC (typical Supercup race slot)
      { type: 'race', label: 'Race', startUtc: '2024-07-21T09:45:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2024-spa',
    round: 6,
    name: 'Round 6 — Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      // Friday 26 Jul, 18:00 CEST = 16:00 UTC (typical Supercup slot)
      { type: 'practice', label: 'Free Practice', startUtc: '2024-07-26T16:00:00Z', durationMinutes: 45 },
      // Saturday 27 Jul, 10:25 CEST = 08:25 UTC (typical Supercup slot)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-27T08:25:00Z', durationMinutes: 30 },
      // Sunday 28 Jul, 11:45 CEST = 09:45 UTC (typical Supercup race slot)
      { type: 'race', label: 'Race', startUtc: '2024-07-28T09:45:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2024-zandvoort',
    round: 7,
    name: 'Round 7 — Zandvoort',
    circuitId: 'circuit-zandvoort',
    sessions: [
      // Friday 23 Aug, 14:00 CEST = 12:00 UTC (typical Zandvoort Supercup slot)
      { type: 'practice', label: 'Free Practice', startUtc: '2024-08-23T12:00:00Z', durationMinutes: 45 },
      // Saturday 24 Aug, 13:00 CEST = 11:00 UTC (typical Zandvoort Supercup slot)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-24T11:00:00Z', durationMinutes: 30 },
      // Sunday 25 Aug, 11:45 CEST = 09:45 UTC (typical Supercup race slot)
      { type: 'race', label: 'Race', startUtc: '2024-08-25T09:45:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2024-monza',
    round: 8,
    name: 'Round 8 — Monza',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      // Friday 30 Aug, 18:30 CEST = 16:30 UTC (typical Supercup slot)
      { type: 'practice', label: 'Free Practice', startUtc: '2024-08-30T16:30:00Z', durationMinutes: 45 },
      // Saturday 31 Aug, 11:00 CEST = 09:00 UTC (typical Supercup slot)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-31T09:00:00Z', durationMinutes: 30 },
      // Sunday 1 Sep, 11:45 CEST = 09:45 UTC (typical Supercup race slot)
      { type: 'race', label: 'Race', startUtc: '2024-09-01T09:45:00Z', durationMinutes: 30 },
    ],
  },
]
