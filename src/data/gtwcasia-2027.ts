import { RaceEvent } from '@/lib/types'

// GT World Challenge Asia 2027 — 6 events, 12 one-hour races (announced 26 Jun 2026)
// Source: gt-world-challenge-asia.com. Session times are NOT yet published — all sessions are shown as TBA with
// placeholder times based on the 2026 weekends.
export const gtwcasia2027: RaceEvent[] = [
  {
    id: 'gtwcasia-2027-sepang',
    round: 1,
    name: 'Sepang',
    circuitId: 'sepang-international-circuit',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2027-04-02T03:00:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Bronze Session', startUtc: '2027-04-02T04:10:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2027-04-02T07:40:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2027-04-03T02:25:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2027-04-03T02:47:00Z', durationMinutes: 15, tba: true },
      { type: 'race', label: 'Race 1', startUtc: '2027-04-03T06:15:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race 2', startUtc: '2027-04-04T03:30:00Z', durationMinutes: 60, tba: true },
    ],
  },
  {
    id: 'gtwcasia-2027-chang',
    round: 2,
    name: 'Chang',
    circuitId: 'chang-international-circuit',
    // Returns to the calendar (Mandalika dropped) — placeholder times follow the 2026 Mandalika weekend
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2027-04-30T02:50:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Bronze Session', startUtc: '2027-04-30T04:00:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2027-04-30T06:55:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2027-05-01T01:15:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2027-05-01T01:37:00Z', durationMinutes: 15, tba: true },
      { type: 'race', label: 'Race 1', startUtc: '2027-05-01T05:30:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race 2', startUtc: '2027-05-02T03:30:00Z', durationMinutes: 60, tba: true },
    ],
  },
  {
    id: 'gtwcasia-2027-suzuka',
    round: 3,
    name: 'Suzuka',
    circuitId: 'suzuka-international-racing-course',
    // First visit since 2024 (date moved to June) — placeholder times follow the Okayama weekend
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2027-06-11T03:20:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Bronze Session', startUtc: '2027-06-11T04:30:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2027-06-11T06:40:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2027-06-12T00:00:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2027-06-12T00:22:00Z', durationMinutes: 15, tba: true },
      { type: 'race', label: 'Race 1', startUtc: '2027-06-12T04:00:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race 2', startUtc: '2027-06-13T01:00:00Z', durationMinutes: 60, tba: true },
    ],
  },
  {
    id: 'gtwcasia-2027-fuji',
    round: 4,
    name: 'Fuji',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2027-07-09T02:10:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Bronze Session', startUtc: '2027-07-09T03:15:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2027-07-09T06:45:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2027-07-09T23:30:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2027-07-09T23:52:00Z', durationMinutes: 15, tba: true },
      { type: 'race', label: 'Race 1', startUtc: '2027-07-10T03:35:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race 2', startUtc: '2027-07-11T02:35:00Z', durationMinutes: 60, tba: true },
    ],
  },
  {
    id: 'gtwcasia-2027-beijing',
    round: 5,
    name: 'Beijing',
    circuitId: 'beijing-street-circuit',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2027-10-01T07:55:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Bronze Session', startUtc: '2027-10-01T09:00:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2027-10-02T00:30:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2027-10-02T03:50:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2027-10-02T04:12:00Z', durationMinutes: 15, tba: true },
      { type: 'race', label: 'Race 1', startUtc: '2027-10-02T07:45:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race 2', startUtc: '2027-10-03T05:00:00Z', durationMinutes: 60, tba: true },
    ],
  },
  {
    id: 'gtwcasia-2027-shanghai',
    round: 6,
    name: 'Shanghai',
    circuitId: 'shanghai-international-circuit',
    sessions: [
      { type: 'practice', label: 'Official Practice', startUtc: '2027-10-22T01:20:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Bronze Session', startUtc: '2027-10-22T02:25:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2027-10-22T06:55:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2027-10-23T00:30:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2027-10-23T00:52:00Z', durationMinutes: 15, tba: true },
      { type: 'race', label: 'Race 1', startUtc: '2027-10-23T06:35:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race 2', startUtc: '2027-10-24T02:50:00Z', durationMinutes: 60, tba: true },
    ],
  },
]
