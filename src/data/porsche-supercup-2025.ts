import { RaceEvent } from '@/lib/types'

// Porsche Mobil 1 Supercup 2025 calendar — 8 rounds at European F1 weekends
// Sources:
//   - racing.porsche.com/mobil-1-supercup/race-calendar-2025
//   - newsroom.porsche.com (per-round preview/report articles)
//   - Wikipedia: 2025 Porsche Supercup
// Verified: June 2026 (season concluded September 2025)
// Format: Free Practice (Thu/Fri), Qualifying (Fri/Sat), Race (Sun)
// All session times converted from CEST (UTC+2) to UTC.
// Imola, Monaco, Spa, Zandvoort session times are fully verified from official sources.
// Barcelona practice + qualifying verified; race time follows typical 11:45 CEST pattern.
// Red Bull Ring, Hungaroring, Monza race times verified (Sunday 11:45 CEST) from
// Porsche newsroom previews; practice/qualifying times follow the standard
// Supercup F1-weekend pattern.
export const porscheSupercup2025: RaceEvent[] = [
  {
    id: 'porsche-supercup-2025-imola',
    round: 1,
    name: 'Round 1 — Imola',
    circuitId: 'autodromo-enzo-e-dino-ferrari',
    sessions: [
      // Friday 16 May, 18:30 CEST = 16:30 UTC (official)
      { type: 'practice', label: 'Free Practice', startUtc: '2025-05-16T16:30:00Z', durationMinutes: 45 },
      // Saturday 17 May, 11:20 CEST = 09:20 UTC (official)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-17T09:20:00Z', durationMinutes: 30 },
      // Sunday 18 May, 11:45 CEST = 09:45 UTC (official)
      { type: 'race', label: 'Race', startUtc: '2025-05-18T09:45:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2025-monaco',
    round: 2,
    name: 'Round 2 — Monaco',
    circuitId: 'circuit-de-monaco',
    sessions: [
      // Thursday 22 May, 16:30 CEST = 14:30 UTC (official)
      { type: 'practice', label: 'Free Practice', startUtc: '2025-05-22T14:30:00Z', durationMinutes: 45 },
      // Friday 23 May, 18:45 CEST = 16:45 UTC (official)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-23T16:45:00Z', durationMinutes: 30 },
      // Sunday 25 May, 12:00 CEST = 10:00 UTC (official)
      { type: 'race', label: 'Race', startUtc: '2025-05-25T10:00:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2025-barcelona',
    round: 3,
    name: 'Round 3 — Barcelona',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      // Friday 30 May, 18:30 CEST = 16:30 UTC (official)
      { type: 'practice', label: 'Free Practice', startUtc: '2025-05-30T16:30:00Z', durationMinutes: 45 },
      // Saturday 31 May, 10:35 CEST = 08:35 UTC (official)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-31T08:35:00Z', durationMinutes: 30 },
      // Sunday 1 Jun, 11:45 CEST = 09:45 UTC (typical Supercup race slot)
      { type: 'race', label: 'Race', startUtc: '2025-06-01T09:45:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2025-spielberg',
    round: 4,
    name: 'Round 4 — Spielberg',
    circuitId: 'red-bull-ring',
    sessions: [
      // Friday 27 Jun, 18:30 CEST = 16:30 UTC (typical Supercup slot)
      { type: 'practice', label: 'Free Practice', startUtc: '2025-06-27T16:30:00Z', durationMinutes: 45 },
      // Saturday 28 Jun, 11:00 CEST = 09:00 UTC (typical Supercup slot)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-06-28T09:00:00Z', durationMinutes: 30 },
      // Sunday 29 Jun, 11:45 CEST = 09:45 UTC (official — Porsche newsroom)
      { type: 'race', label: 'Race', startUtc: '2025-06-29T09:45:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2025-spa',
    round: 5,
    name: 'Round 5 — Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      // Friday 25 Jul, 18:00 CEST = 16:00 UTC (official)
      { type: 'practice', label: 'Free Practice', startUtc: '2025-07-25T16:00:00Z', durationMinutes: 45 },
      // Saturday 26 Jul, 10:25 CEST = 08:25 UTC (official)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-26T08:25:00Z', durationMinutes: 30 },
      // Sunday 27 Jul, 11:45 CEST = 09:45 UTC (official)
      { type: 'race', label: 'Race', startUtc: '2025-07-27T09:45:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2025-hungaroring',
    round: 6,
    name: 'Round 6 — Hungaroring',
    circuitId: 'hungaroring',
    sessions: [
      // Friday 1 Aug, 18:30 CEST = 16:30 UTC (typical Supercup slot)
      { type: 'practice', label: 'Free Practice', startUtc: '2025-08-01T16:30:00Z', durationMinutes: 45 },
      // Saturday 2 Aug, 11:00 CEST = 09:00 UTC (typical Supercup slot)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-02T09:00:00Z', durationMinutes: 30 },
      // Sunday 3 Aug, 11:45 CEST = 09:45 UTC (official — Porsche newsroom)
      { type: 'race', label: 'Race', startUtc: '2025-08-03T09:45:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2025-zandvoort',
    round: 7,
    name: 'Round 7 — Zandvoort',
    circuitId: 'circuit-zandvoort',
    sessions: [
      // Friday 29 Aug, 14:00 CEST = 12:00 UTC (official)
      { type: 'practice', label: 'Free Practice', startUtc: '2025-08-29T12:00:00Z', durationMinutes: 45 },
      // Saturday 30 Aug, 13:00 CEST = 11:00 UTC (official)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-30T11:00:00Z', durationMinutes: 30 },
      // Sunday 31 Aug, 11:45 CEST = 09:45 UTC (official)
      { type: 'race', label: 'Race', startUtc: '2025-08-31T09:45:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2025-monza',
    round: 8,
    name: 'Round 8 — Monza',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      // Friday 5 Sep, 18:30 CEST = 16:30 UTC (typical Supercup slot)
      { type: 'practice', label: 'Free Practice', startUtc: '2025-09-05T16:30:00Z', durationMinutes: 45 },
      // Saturday 6 Sep, 11:00 CEST = 09:00 UTC (typical Supercup slot)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-09-06T09:00:00Z', durationMinutes: 30 },
      // Sunday 7 Sep, 11:45 CEST = 09:45 UTC (official — Porsche newsroom)
      { type: 'race', label: 'Race', startUtc: '2025-09-07T09:45:00Z', durationMinutes: 30 },
    ],
  },
]
