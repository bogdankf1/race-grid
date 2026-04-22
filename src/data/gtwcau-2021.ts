import { RaceEvent } from '@/lib/types'

// GT World Challenge Australia 2021 — 4 rounds (COVID-reduced)
// Source: Wikipedia / gt-world-challenge-australia.com
export const gtwcau2021: RaceEvent[] = [
  {
    id: 'gtwcau-2021-phillip-island',
    round: 1,
    name: 'Phillip Island',
    circuitId: 'phillip-island-grand-prix-circuit',
    sessions: [
      // Mar 13–14, AEDT = UTC+11
      { type: 'practice', label: 'Free Practice 1', startUtc: '2021-03-12T23:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2021-03-13T00:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2021-03-13T00:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2021-03-13T04:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2021-03-14T02:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcau-2021-bathurst-1',
    round: 2,
    name: 'Bathurst',
    circuitId: 'mount-panorama-circuit',
    sessions: [
      // Apr 3–4, AEDT = UTC+11
      { type: 'practice', label: 'Free Practice 1', startUtc: '2021-04-02T23:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2021-04-03T00:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2021-04-03T00:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2021-04-03T04:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2021-04-04T02:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcau-2021-the-bend',
    round: 3,
    name: 'The Bend',
    circuitId: 'the-bend-motorsport-park',
    sessions: [
      // May 8–9, ACST = UTC+9:30
      { type: 'practice', label: 'Free Practice 1', startUtc: '2021-05-08T00:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2021-05-08T01:30:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2021-05-08T02:00:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2021-05-08T05:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2021-05-09T03:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcau-2021-bathurst-2',
    round: 4,
    name: 'Bathurst',
    circuitId: 'mount-panorama-circuit',
    sessions: [
      // Dec 2–3, AEDT = UTC+11
      { type: 'practice', label: 'Free Practice 1', startUtc: '2021-12-01T23:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2021-12-02T00:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2021-12-02T00:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2021-12-02T04:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2021-12-03T02:00:00Z', durationMinutes: 60 },
    ],
  },
]
