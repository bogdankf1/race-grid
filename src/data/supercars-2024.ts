import { RaceEvent } from '@/lib/types'

// Supercars Championship 2024 — 12 rounds
// Source: supercars.com, en.wikipedia.org/wiki/2024_Supercars_Championship
export const supercars2024: RaceEvent[] = [
  {
    id: 'sc-2024-bathurst-500',
    round: 1,
    name: 'Bathurst 500',
    circuitId: 'mount-panorama-circuit',
    sessions: [
      // Feb 24–25, AEDT = UTC+11
      { type: 'practice', label: 'Practice', startUtc: '2024-02-23T23:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-02-24T01:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2024-02-24T03:30:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2024-02-25T01:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2024-02-25T03:30:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sc-2024-melbourne',
    round: 2,
    name: 'Melbourne SuperSprint',
    circuitId: 'albert-park-circuit',
    sessions: [
      // Mar 21–24, AEDT = UTC+11
      { type: 'practice', label: 'Practice', startUtc: '2024-03-20T23:00:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-21T01:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2024-03-23T03:30:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Race 2', startUtc: '2024-03-24T03:30:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'sc-2024-taupo',
    round: 3,
    name: 'ITM Taupō Super 440',
    circuitId: 'taupo-motorsport-park',
    sessions: [
      // Apr 20–21, NZST = UTC+12
      { type: 'practice', label: 'Practice', startUtc: '2024-04-19T22:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-20T00:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2024-04-20T02:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2024-04-21T00:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2024-04-21T02:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'sc-2024-perth',
    round: 4,
    name: 'Perth Super 440',
    circuitId: 'wanneroo-raceway',
    sessions: [
      // May 18–19, AWST = UTC+8
      { type: 'practice', label: 'Practice', startUtc: '2024-05-18T02:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-18T04:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2024-05-18T06:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2024-05-19T04:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2024-05-19T06:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'sc-2024-darwin',
    round: 5,
    name: 'Darwin Triple Crown',
    circuitId: 'hidden-valley-raceway',
    sessions: [
      // Jun 15–16, NT = UTC+9.5
      { type: 'practice', label: 'Practice', startUtc: '2024-06-15T00:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-15T02:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2024-06-15T05:00:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Race 2', startUtc: '2024-06-16T02:30:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Race 3', startUtc: '2024-06-16T05:00:00Z', durationMinutes: 55 },
    ],
  },
  {
    id: 'sc-2024-townsville',
    round: 6,
    name: 'Townsville 500',
    circuitId: 'townsville-street-circuit',
    sessions: [
      // Jul 6–7, AEST = UTC+10
      { type: 'practice', label: 'Practice', startUtc: '2024-07-06T00:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-06T02:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2024-07-06T04:30:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2024-07-07T02:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2024-07-07T04:30:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sc-2024-sydney',
    round: 7,
    name: 'Sydney SuperNight',
    circuitId: 'sydney-motorsport-park',
    sessions: [
      // Jul 20–21, AEST = UTC+10
      { type: 'practice', label: 'Practice', startUtc: '2024-07-20T00:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-20T02:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2024-07-20T04:30:00Z', durationMinutes: 70 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2024-07-21T02:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2024-07-21T04:30:00Z', durationMinutes: 70 },
    ],
  },
  {
    id: 'sc-2024-tasmania',
    round: 8,
    name: 'Tasmania Super 440',
    circuitId: 'symmons-plains-raceway',
    sessions: [
      // Aug 17–18, AEST = UTC+10
      { type: 'practice', label: 'Practice', startUtc: '2024-08-17T00:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-17T02:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2024-08-17T04:30:00Z', durationMinutes: 55 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2024-08-18T02:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2024-08-18T04:30:00Z', durationMinutes: 55 },
    ],
  },
  {
    id: 'sc-2024-sandown',
    round: 9,
    name: 'Sandown 500',
    circuitId: 'sandown-raceway',
    sessions: [
      // Sep 15, AEST = UTC+10
      { type: 'practice', label: 'Practice 1', startUtc: '2024-09-13T22:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2024-09-14T02:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-15T00:00:00Z', durationMinutes: 20 },
      { type: 'endurance', label: 'Sandown 500', startUtc: '2024-09-15T01:30:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'sc-2024-bathurst-1000',
    round: 10,
    name: 'Repco Bathurst 1000',
    circuitId: 'mount-panorama-circuit',
    sessions: [
      // Oct 13, AEDT = UTC+11
      { type: 'practice', label: 'Practice 1', startUtc: '2024-10-10T00:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2024-10-10T04:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 3', startUtc: '2024-10-11T00:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-10-11T03:00:00Z', durationMinutes: 40 },
      { type: 'warmup', label: 'Warmup', startUtc: '2024-10-12T18:00:00Z', durationMinutes: 20 },
      { type: 'endurance', label: 'Bathurst 1000', startUtc: '2024-10-12T19:15:00Z', durationMinutes: 420 },
    ],
  },
  {
    id: 'sc-2024-gold-coast',
    round: 11,
    name: 'Gold Coast 500',
    circuitId: 'surfers-paradise-street-circuit',
    sessions: [
      // Oct 26–27, AEST = UTC+10
      { type: 'practice', label: 'Practice', startUtc: '2024-10-26T00:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-10-26T02:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2024-10-26T04:30:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2024-10-27T02:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2024-10-27T04:30:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sc-2024-adelaide',
    round: 12,
    name: 'Adelaide 500',
    circuitId: 'adelaide-street-circuit',
    sessions: [
      // Nov 16–17, ACDT = UTC+10.5
      { type: 'practice', label: 'Practice', startUtc: '2024-11-15T23:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-11-16T01:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2024-11-16T04:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2024-11-17T01:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2024-11-17T04:00:00Z', durationMinutes: 75 },
    ],
  },
]
