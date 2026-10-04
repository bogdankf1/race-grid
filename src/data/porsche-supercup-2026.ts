import { RaceEvent } from '@/lib/types'

// Porsche Mobil 1 Supercup 2026 calendar — 8 races over 7 European F1 weekends
// Sources: Porsche newsroom (Monaco), F1 weekend timetables (thef1spectator.com, formula1.com) for all rounds,
// racing.porsche.com calendar — re-verified Oct 2026. All sessions CEST (UTC+2), converted to UTC.
// Format: Free Practice (Fri), Qualifying (Sat), Race (Sun) — Zandvoort hosts a double-header (Rounds 6 + 7):
// Race 1 on Saturday evening, Race 2 on Sunday.
export const porscheSupercup2026: RaceEvent[] = [
  {
    id: 'porsche-supercup-2026-monaco',
    round: 1,
    name: 'Round 1 — Monaco',
    circuitId: 'circuit-de-monaco',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2026-06-04T14:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-05T16:45:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2026-06-07T09:55:00Z', durationMinutes: 35 },
    ],
  },
  {
    id: 'porsche-supercup-2026-barcelona',
    round: 2,
    name: 'Round 2 — Barcelona',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2026-06-12T16:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-13T09:20:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2026-06-14T08:10:00Z', durationMinutes: 35 },
    ],
  },
  {
    id: 'porsche-supercup-2026-spielberg',
    round: 3,
    name: 'Round 3 — Spielberg',
    circuitId: 'red-bull-ring',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2026-06-26T16:35:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-27T09:20:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2026-06-28T09:55:00Z', durationMinutes: 35 },
    ],
  },
  {
    id: 'porsche-supercup-2026-spa',
    round: 4,
    name: 'Round 4 — Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2026-07-17T16:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-18T09:20:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2026-07-19T09:45:00Z', durationMinutes: 35 },
    ],
  },
  {
    id: 'porsche-supercup-2026-hungaroring',
    round: 5,
    name: 'Round 5 — Hungaroring',
    circuitId: 'hungaroring',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2026-07-24T16:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-25T09:20:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2026-07-26T08:10:00Z', durationMinutes: 35 },
    ],
  },
  {
    id: 'porsche-supercup-2026-zandvoort-1',
    round: 6,
    name: 'Round 6 — Zandvoort (Race 1)',
    circuitId: 'circuit-zandvoort',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2026-08-21T16:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-22T08:15:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2026-08-22T16:00:00Z', durationMinutes: 35 },
    ],
  },
  {
    id: 'porsche-supercup-2026-zandvoort-2',
    round: 7,
    name: 'Round 7 — Zandvoort (Race 2)',
    circuitId: 'circuit-zandvoort',
    sessions: [
      { type: 'race', label: 'Race 2', startUtc: '2026-08-23T09:45:00Z', durationMinutes: 35 },
    ],
  },
  {
    id: 'porsche-supercup-2026-monza',
    round: 8,
    name: 'Round 8 — Monza',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2026-09-04T15:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-05T08:50:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2026-09-06T09:45:00Z', durationMinutes: 35 },
    ],
  },
]
