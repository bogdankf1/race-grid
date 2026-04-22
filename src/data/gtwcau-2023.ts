import { RaceEvent } from '@/lib/types'

// GT World Challenge Australia 2023 — 6 rounds
// Source: Wikipedia / gt-world-challenge-australia.com
export const gtwcau2023: RaceEvent[] = [
  {
    id: 'gtwcau-2023-bathurst',
    round: 1,
    name: 'Bathurst',
    circuitId: 'mount-panorama-circuit',
    sessions: [
      // Apr 7–9, AEDT = UTC+11
      { type: 'practice', label: 'Free Practice 1', startUtc: '2023-04-06T23:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2023-04-07T00:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-04-07T00:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2023-04-08T04:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2023-04-09T02:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcau-2023-wanneroo',
    round: 2,
    name: 'Wanneroo',
    circuitId: 'wanneroo-raceway',
    sessions: [
      // Apr 28–30, AWST = UTC+8
      { type: 'practice', label: 'Free Practice 1', startUtc: '2023-04-28T02:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2023-04-28T03:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-04-28T03:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2023-04-29T07:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2023-04-30T05:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcau-2023-phillip-island',
    round: 3,
    name: 'Phillip Island',
    circuitId: 'phillip-island-grand-prix-circuit',
    sessions: [
      // May 12–14, AEST = UTC+10
      { type: 'practice', label: 'Free Practice 1', startUtc: '2023-05-12T00:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2023-05-12T01:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-05-12T01:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2023-05-13T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2023-05-14T03:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcau-2023-sydney',
    round: 4,
    name: 'Sydney',
    circuitId: 'sydney-motorsport-park',
    sessions: [
      // Jul 28–30, AEST = UTC+10
      { type: 'practice', label: 'Free Practice 1', startUtc: '2023-07-28T00:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2023-07-28T01:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-07-28T01:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2023-07-29T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2023-07-30T03:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcau-2023-queensland',
    round: 5,
    name: 'Queensland Raceway',
    circuitId: 'queensland-raceway',
    sessions: [
      // Aug 11–13, AEST = UTC+10
      { type: 'practice', label: 'Free Practice 1', startUtc: '2023-08-11T00:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2023-08-11T01:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-08-11T01:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2023-08-12T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2023-08-13T03:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcau-2023-adelaide',
    round: 6,
    name: 'Adelaide',
    circuitId: 'adelaide-street-circuit',
    sessions: [
      // Nov 23–25, ACDT = UTC+10:30
      { type: 'practice', label: 'Free Practice 1', startUtc: '2023-11-22T23:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2023-11-23T00:30:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-11-23T01:00:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2023-11-24T04:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2023-11-25T02:30:00Z', durationMinutes: 60 },
    ],
  },
]
