import { RaceEvent } from '@/lib/types'

// GT World Challenge Australia 2025 — 6 rounds
// Source: Wikipedia / gt-world-challenge-australia.com
export const gtwcau2025: RaceEvent[] = [
  {
    id: 'gtwcau-2025-phillip-island',
    round: 1,
    name: 'Phillip Island',
    circuitId: 'phillip-island-grand-prix-circuit',
    sessions: [
      // Apr 4–6, AEDT = UTC+11
      { type: 'practice', label: 'Free Practice 1', startUtc: '2025-04-03T23:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2025-04-04T00:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2025-04-04T00:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2025-04-05T04:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2025-04-06T02:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcau-2025-sydney',
    round: 2,
    name: 'Sydney',
    circuitId: 'sydney-motorsport-park',
    sessions: [
      // May 2–4, AEST = UTC+10
      { type: 'practice', label: 'Free Practice 1', startUtc: '2025-05-02T00:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2025-05-02T01:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2025-05-02T01:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2025-05-03T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2025-05-04T03:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcau-2025-queensland',
    round: 3,
    name: 'Queensland Raceway',
    circuitId: 'queensland-raceway',
    sessions: [
      // May 30 – Jun 1, AEST = UTC+10
      { type: 'practice', label: 'Free Practice 1', startUtc: '2025-05-30T00:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2025-05-30T01:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2025-05-30T01:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2025-05-31T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2025-06-01T03:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcau-2025-sandown',
    round: 4,
    name: 'Sandown',
    circuitId: 'sandown-raceway',
    sessions: [
      // Jul 25–27, AEST = UTC+10
      { type: 'practice', label: 'Free Practice 1', startUtc: '2025-07-25T00:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2025-07-25T01:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2025-07-25T01:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2025-07-26T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2025-07-27T03:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcau-2025-the-bend',
    round: 5,
    name: 'The Bend',
    circuitId: 'the-bend-motorsport-park',
    sessions: [
      // Sep 5–7, ACST = UTC+9:30
      { type: 'practice', label: 'Free Practice 1', startUtc: '2025-09-05T00:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2025-09-05T01:30:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2025-09-05T02:00:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2025-09-06T05:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2025-09-07T03:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcau-2025-hampton-downs',
    round: 6,
    name: 'Hampton Downs',
    circuitId: 'hampton-downs-motorsport-park',
    sessions: [
      // Oct 31 – Nov 2, NZDT = UTC+13
      { type: 'practice', label: 'Free Practice 1', startUtc: '2025-10-30T21:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2025-10-30T22:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2025-10-30T22:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2025-11-01T02:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2025-11-02T00:00:00Z', durationMinutes: 60 },
    ],
  },
]
