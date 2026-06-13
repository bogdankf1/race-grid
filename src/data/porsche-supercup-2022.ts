import { RaceEvent } from '@/lib/types'

// Porsche Mobil 1 Supercup 2022 calendar — 8 rounds at European F1 weekends
// Sources:
//   - Wikipedia: 2022 Porsche Supercup
//   - newsroom.porsche.com / motorsports.porsche.com (per-round preview/report articles)
//   - racing.porsche.com results archive
// Verified: June 2026 (season concluded with Monza on 11 September 2022)
// Format: Free Practice (Thu/Fri), Qualifying (Fri/Sat), Race (Sun)
// All session times converted from CEST (UTC+2) to UTC.
// Monaco follows F1 Thursday-running pattern: practice Thu, qualifying Fri, race Sun.
// Other rounds follow the standard Supercup F1-weekend pattern
// (Fri ~18:30 practice, Sat ~11:00 qualifying, Sun 11:45 race).
export const porscheSupercup2022: RaceEvent[] = [
  {
    id: 'porsche-supercup-2022-imola',
    round: 1,
    name: 'Round 1 — Imola',
    circuitId: 'autodromo-enzo-e-dino-ferrari',
    sessions: [
      // Friday 22 Apr, 18:30 CEST = 16:30 UTC (typical Supercup slot)
      { type: 'practice', label: 'Free Practice', startUtc: '2022-04-22T16:30:00Z', durationMinutes: 45 },
      // Saturday 23 Apr, 11:00 CEST = 09:00 UTC (typical Supercup slot)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-23T09:00:00Z', durationMinutes: 30 },
      // Sunday 24 Apr, 11:45 CEST = 09:45 UTC (typical Supercup race slot)
      { type: 'race', label: 'Race', startUtc: '2022-04-24T09:45:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2022-monaco',
    round: 2,
    name: 'Round 2 — Monaco',
    circuitId: 'circuit-de-monaco',
    sessions: [
      // Thursday 26 May, 16:30 CEST = 14:30 UTC (Monaco F1 Thursday-running pattern)
      { type: 'practice', label: 'Free Practice', startUtc: '2022-05-26T14:30:00Z', durationMinutes: 45 },
      // Friday 27 May, 18:45 CEST = 16:45 UTC (Monaco F1 Friday qualifying slot)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-27T16:45:00Z', durationMinutes: 30 },
      // Sunday 29 May, 12:00 CEST = 10:00 UTC (typical Monaco Supercup race slot)
      { type: 'race', label: 'Race', startUtc: '2022-05-29T10:00:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2022-silverstone',
    round: 3,
    name: 'Round 3 — Silverstone',
    circuitId: 'silverstone-circuit',
    sessions: [
      // Friday 1 Jul, 18:40 CEST = 16:40 UTC (≈ 17:40 BST local)
      { type: 'practice', label: 'Free Practice', startUtc: '2022-07-01T16:40:00Z', durationMinutes: 45 },
      // Saturday 2 Jul, 17:45 CEST = 15:45 UTC (≈ 16:45 BST local)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-02T15:45:00Z', durationMinutes: 30 },
      // Sunday 3 Jul, 12:55 CEST = 10:55 UTC (≈ 11:55 BST local)
      { type: 'race', label: 'Race', startUtc: '2022-07-03T10:55:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2022-spielberg',
    round: 4,
    name: 'Round 4 — Spielberg',
    circuitId: 'red-bull-ring',
    sessions: [
      // Friday 8 Jul, 18:30 CEST = 16:30 UTC (typical Supercup slot)
      { type: 'practice', label: 'Free Practice', startUtc: '2022-07-08T16:30:00Z', durationMinutes: 45 },
      // Saturday 9 Jul, 11:00 CEST = 09:00 UTC (typical Supercup slot)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-09T09:00:00Z', durationMinutes: 30 },
      // Sunday 10 Jul, 11:45 CEST = 09:45 UTC (typical Supercup race slot)
      { type: 'race', label: 'Race', startUtc: '2022-07-10T09:45:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2022-paul-ricard',
    round: 5,
    name: 'Round 5 — Paul Ricard',
    circuitId: 'circuit-paul-ricard',
    sessions: [
      // Friday 22 Jul, 18:30 CEST = 16:30 UTC (typical Supercup slot)
      { type: 'practice', label: 'Free Practice', startUtc: '2022-07-22T16:30:00Z', durationMinutes: 45 },
      // Saturday 23 Jul, 11:00 CEST = 09:00 UTC (typical Supercup slot)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-23T09:00:00Z', durationMinutes: 30 },
      // Sunday 24 Jul, 11:45 CEST = 09:45 UTC (typical Supercup race slot)
      { type: 'race', label: 'Race', startUtc: '2022-07-24T09:45:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2022-spa',
    round: 6,
    name: 'Round 6 — Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      // Friday 26 Aug, 18:00 CEST = 16:00 UTC (typical Supercup slot)
      { type: 'practice', label: 'Free Practice', startUtc: '2022-08-26T16:00:00Z', durationMinutes: 45 },
      // Saturday 27 Aug, 10:25 CEST = 08:25 UTC (typical Supercup slot)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-08-27T08:25:00Z', durationMinutes: 30 },
      // Sunday 28 Aug, 11:45 CEST = 09:45 UTC (typical Supercup race slot)
      { type: 'race', label: 'Race', startUtc: '2022-08-28T09:45:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2022-zandvoort',
    round: 7,
    name: 'Round 7 — Zandvoort',
    circuitId: 'circuit-zandvoort',
    sessions: [
      // Friday 2 Sep, 14:00 CEST = 12:00 UTC (typical Zandvoort Supercup slot)
      { type: 'practice', label: 'Free Practice', startUtc: '2022-09-02T12:00:00Z', durationMinutes: 45 },
      // Saturday 3 Sep, 13:00 CEST = 11:00 UTC (typical Zandvoort Supercup slot)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-03T11:00:00Z', durationMinutes: 30 },
      // Sunday 4 Sep, 11:45 CEST = 09:45 UTC (typical Supercup race slot)
      { type: 'race', label: 'Race', startUtc: '2022-09-04T09:45:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2022-monza',
    round: 8,
    name: 'Round 8 — Monza',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      // Friday 9 Sep, 18:30 CEST = 16:30 UTC (typical Supercup slot)
      { type: 'practice', label: 'Free Practice', startUtc: '2022-09-09T16:30:00Z', durationMinutes: 45 },
      // Saturday 10 Sep, 11:00 CEST = 09:00 UTC (typical Supercup slot)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-10T09:00:00Z', durationMinutes: 30 },
      // Sunday 11 Sep, 11:45 CEST = 09:45 UTC (typical Supercup race slot)
      { type: 'race', label: 'Race', startUtc: '2022-09-11T09:45:00Z', durationMinutes: 30 },
    ],
  },
]
