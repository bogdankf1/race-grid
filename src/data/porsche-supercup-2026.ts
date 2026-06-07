import { RaceEvent } from '@/lib/types'

// Porsche Mobil 1 Supercup 2026 calendar — 8 races over 7 European F1 weekends
// Sources:
//   - racing.porsche.com/mobil-1-supercup/race-calendar-2026
//   - Wikipedia: 2026 Porsche Supercup
//   - newsroom.porsche.com (Monaco session times)
// Verified: June 2026
// Format: Free Practice (Thu/Fri), Qualifying (Fri/Sat), Race (Sat/Sun)
// Zandvoort hosts a double-header (Rounds 6 + 7) on the same weekend.
// Round 1 Monaco session times are official (Porsche newsroom).
// Rounds 2-8 dates are confirmed; session times are estimated from the typical
// Supercup schedule pattern and will be replaced once Porsche publishes them.
export const porscheSupercup2026: RaceEvent[] = [
  {
    id: 'porsche-supercup-2026-monaco',
    round: 1,
    name: 'Round 1 — Monaco',
    circuitId: 'circuit-de-monaco',
    sessions: [
      // Thursday 4 Jun, 16:30 CEST = 14:30 UTC (official)
      { type: 'practice', label: 'Free Practice', startUtc: '2026-06-04T14:30:00Z', durationMinutes: 45 },
      // Friday 5 Jun, 18:45 CEST = 16:45 UTC (official)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-05T16:45:00Z', durationMinutes: 30 },
      // Sunday 7 Jun, 11:55 CEST = 09:55 UTC (official)
      { type: 'race', label: 'Race', startUtc: '2026-06-07T09:55:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2026-barcelona',
    round: 2,
    name: 'Round 2 — Barcelona',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      // Estimated from typical Supercup Spain schedule (CEST UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2026-06-12T08:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-13T07:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2026-06-14T08:55:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2026-spielberg',
    round: 3,
    name: 'Round 3 — Spielberg',
    circuitId: 'red-bull-ring',
    sessions: [
      // Estimated from typical Supercup Austria schedule (CEST UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2026-06-26T08:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-27T07:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2026-06-28T08:55:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2026-spa',
    round: 4,
    name: 'Round 4 — Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      // Estimated from typical Supercup Belgium schedule (CEST UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2026-07-17T08:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-18T07:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2026-07-19T08:55:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2026-hungaroring',
    round: 5,
    name: 'Round 5 — Hungaroring',
    circuitId: 'hungaroring',
    sessions: [
      // Estimated from typical Supercup Hungary schedule (CEST UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2026-07-24T08:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-25T07:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2026-07-26T08:55:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2026-zandvoort-1',
    round: 6,
    name: 'Round 6 — Zandvoort (Race 1)',
    circuitId: 'circuit-zandvoort',
    sessions: [
      // Zandvoort double-header (CEST UTC+2). Estimated from typical Supercup schedule.
      { type: 'practice', label: 'Free Practice', startUtc: '2026-08-21T07:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-21T11:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2026-08-22T08:55:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2026-zandvoort-2',
    round: 7,
    name: 'Round 7 — Zandvoort (Race 2)',
    circuitId: 'circuit-zandvoort',
    sessions: [
      // Second race of the Zandvoort double-header — Sunday morning. Estimated.
      { type: 'race', label: 'Race 2', startUtc: '2026-08-23T08:55:00Z', durationMinutes: 30 },
    ],
  },
  {
    id: 'porsche-supercup-2026-monza',
    round: 8,
    name: 'Round 8 — Monza',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      // Estimated from typical Supercup Italy schedule (CEST UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2026-09-04T08:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-05T07:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2026-09-06T08:55:00Z', durationMinutes: 30 },
    ],
  },
]
