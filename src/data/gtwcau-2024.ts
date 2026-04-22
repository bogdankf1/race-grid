import { RaceEvent } from '@/lib/types'

// GT World Challenge Australia 2024 — 7 events (5 Sprint + 2 Endurance)
// Source: Wikipedia / gt-world-challenge-australia.com
export const gtwcau2024: RaceEvent[] = [
  {
    id: 'gtwcau-2024-bathurst-12h',
    round: 1,
    name: 'Bathurst 12 Hour',
    circuitId: 'mount-panorama-circuit',
    sessions: [
      // Feb 16–18, AEDT = UTC+11
      { type: 'practice', label: 'Free Practice 1', startUtc: '2024-02-15T23:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-02-16T00:00:00Z', durationMinutes: 30 },
      // Race start ~5:15 AM local (18:15 UTC prev day) for 12h endurance
      { type: 'endurance', label: 'Bathurst 12 Hour', startUtc: '2024-02-17T19:15:00Z', durationMinutes: 720 },
    ],
  },
  {
    id: 'gtwcau-2024-phillip-island-sprint',
    round: 2,
    name: 'Phillip Island Sprint',
    circuitId: 'phillip-island-grand-prix-circuit',
    sessions: [
      // Apr 12–14, AEST = UTC+10
      { type: 'practice', label: 'Free Practice 1', startUtc: '2024-04-12T00:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2024-04-12T01:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2024-04-12T01:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2024-04-13T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2024-04-14T03:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcau-2024-the-bend-sprint',
    round: 3,
    name: 'The Bend Sprint',
    circuitId: 'the-bend-motorsport-park',
    sessions: [
      // May 31 – Jun 2, ACST = UTC+9:30
      { type: 'practice', label: 'Free Practice 1', startUtc: '2024-05-31T00:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2024-05-31T01:30:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2024-05-31T02:00:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2024-06-01T05:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2024-06-02T03:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcau-2024-queensland-sprint',
    round: 4,
    name: 'Queensland Sprint',
    circuitId: 'queensland-raceway',
    sessions: [
      // Aug 2–4, AEST = UTC+10
      { type: 'practice', label: 'Free Practice 1', startUtc: '2024-08-02T00:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2024-08-02T01:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2024-08-02T01:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2024-08-03T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2024-08-04T03:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcau-2024-phillip-island-festival',
    round: 5,
    name: 'Phillip Island GT Festival',
    circuitId: 'phillip-island-grand-prix-circuit',
    sessions: [
      // Aug 23–25, AEST = UTC+10
      { type: 'practice', label: 'Free Practice 1', startUtc: '2024-08-23T00:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2024-08-23T01:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2024-08-23T01:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2024-08-24T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2024-08-25T03:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcau-2024-sydney-endurance',
    round: 6,
    name: 'Sydney Endurance',
    circuitId: 'sydney-motorsport-park',
    sessions: [
      // Oct 18–19, AEDT = UTC+11
      { type: 'practice', label: 'Free Practice 1', startUtc: '2024-10-17T23:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-10-18T00:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2024-10-19T04:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'gtwcau-2024-bathurst-sprint',
    round: 7,
    name: 'Bathurst Sprint',
    circuitId: 'mount-panorama-circuit',
    sessions: [
      // Nov 8–10, AEDT = UTC+11
      { type: 'practice', label: 'Free Practice 1', startUtc: '2024-11-07T23:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2024-11-08T00:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2024-11-08T00:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2024-11-09T04:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2024-11-10T02:00:00Z', durationMinutes: 60 },
    ],
  },
]
