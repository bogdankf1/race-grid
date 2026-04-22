import { RaceEvent } from '@/lib/types'

// GT World Challenge Australia 2022 — 6 rounds
// Source: Wikipedia / gt-world-challenge-australia.com
export const gtwcau2022: RaceEvent[] = [
  {
    id: 'gtwcau-2022-phillip-island',
    round: 1,
    name: 'Phillip Island',
    circuitId: 'phillip-island-grand-prix-circuit',
    sessions: [
      // Mar 18–20, AEDT = UTC+11
      { type: 'practice', label: 'Free Practice 1', startUtc: '2022-03-17T23:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2022-03-18T00:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2022-03-18T00:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2022-03-19T04:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2022-03-20T02:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcau-2022-queensland',
    round: 2,
    name: 'Queensland Raceway',
    circuitId: 'queensland-raceway',
    sessions: [
      // Aug 5–7, AEST = UTC+10
      { type: 'practice', label: 'Free Practice 1', startUtc: '2022-08-05T00:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2022-08-05T01:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2022-08-05T01:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2022-08-06T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2022-08-07T03:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcau-2022-sandown',
    round: 3,
    name: 'Sandown',
    circuitId: 'sandown-raceway',
    sessions: [
      // Sep 16–18, AEST = UTC+10
      { type: 'practice', label: 'Free Practice 1', startUtc: '2022-09-16T00:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2022-09-16T01:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2022-09-16T01:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2022-09-17T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2022-09-18T03:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcau-2022-the-bend',
    round: 4,
    name: 'The Bend',
    circuitId: 'the-bend-motorsport-park',
    sessions: [
      // Oct 21–23, ACDT = UTC+10:30
      { type: 'practice', label: 'Free Practice 1', startUtc: '2022-10-20T23:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2022-10-21T00:30:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2022-10-21T01:00:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2022-10-22T04:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2022-10-23T02:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcau-2022-bathurst',
    round: 5,
    name: 'Bathurst',
    circuitId: 'mount-panorama-circuit',
    sessions: [
      // Nov 11–13, AEDT = UTC+11
      { type: 'practice', label: 'Free Practice 1', startUtc: '2022-11-10T23:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2022-11-11T00:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2022-11-11T00:30:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2022-11-12T04:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2022-11-13T02:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcau-2022-adelaide',
    round: 6,
    name: 'Adelaide',
    circuitId: 'adelaide-street-circuit',
    sessions: [
      // Dec 1–4, ACDT = UTC+10:30
      { type: 'practice', label: 'Free Practice 1', startUtc: '2022-12-01T23:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2022-12-02T00:30:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2022-12-02T01:00:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2022-12-03T04:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2022-12-04T02:30:00Z', durationMinutes: 60 },
    ],
  },
]
