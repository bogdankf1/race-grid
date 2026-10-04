import { RaceEvent } from '@/lib/types'

// Supercars Championship 2027 — PARTIAL: only the Melbourne SuperSprint (1-4 Apr, F1 Australian GP weekend) is confirmed.
// The rest of the calendar has not been announced yet (Adelaide Grand Final expected ~25-28 Nov, unconfirmed) — add when published.
// Session times are NOT yet published — all sessions are shown as TBA with placeholder times based on the 2026 weekend.
export const supercars2027: RaceEvent[] = [
  {
    id: 'sc-2027-melbourne',
    name: 'Melbourne SuperSprint',
    circuitId: 'albert-park-circuit',
    // Part of the F1 Australian Grand Prix weekend (1-4 Apr 2027) — the only 2027 round with a confirmed date so far
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-03-31T23:35:00Z', durationMinutes: 30, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-04-01T01:25:00Z', durationMinutes: 30, tba: true },
      { type: 'qualifying', label: 'Qualifying (Race 1)', startUtc: '2027-04-01T03:20:00Z', durationMinutes: 12, tba: true },
      { type: 'qualifying', label: 'Qualifying (Race 2)', startUtc: '2027-04-01T03:42:00Z', durationMinutes: 8, tba: true },
      { type: 'race', label: 'Race 1', startUtc: '2027-04-01T06:00:00Z', durationMinutes: 45, tba: true },
      { type: 'race', label: 'Race 2', startUtc: '2027-04-02T06:30:00Z', durationMinutes: 45, tba: true },
      { type: 'qualifying', label: 'Qualifying (Race 3)', startUtc: '2027-04-02T22:00:00Z', durationMinutes: 12, tba: true },
      { type: 'qualifying', label: 'Qualifying (Race 4)', startUtc: '2027-04-02T22:22:00Z', durationMinutes: 8, tba: true },
      { type: 'race', label: 'Race 3', startUtc: '2027-04-03T06:35:00Z', durationMinutes: 45, tba: true },
      { type: 'race', label: 'Race 4', startUtc: '2027-04-04T01:00:00Z', durationMinutes: 40, tba: true },
    ],
  },
]
