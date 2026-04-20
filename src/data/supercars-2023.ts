import { RaceEvent } from '@/lib/types'

// Supercars Championship 2023 — 12 rounds
// Source: supercars.com, en.wikipedia.org/wiki/2023_Supercars_Championship
export const supercars2023: RaceEvent[] = [
  {
    id: 'sc-2023-newcastle',
    round: 1,
    name: 'Newcastle 500',
    circuitId: 'newcastle-street-circuit',
    sessions: [
      // Mar 11–12, AEDT = UTC+11
      { type: 'practice', label: 'Practice', startUtc: '2023-03-10T23:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-03-11T01:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2023-03-11T03:30:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-03-12T01:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2023-03-12T03:30:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sc-2023-melbourne',
    round: 2,
    name: 'Melbourne SuperSprint',
    circuitId: 'albert-park-circuit',
    sessions: [
      // Mar 30 – Apr 2, AEDT = UTC+11
      { type: 'practice', label: 'Practice', startUtc: '2023-03-29T23:00:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-03-30T01:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2023-04-01T03:30:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Race 2', startUtc: '2023-04-02T03:30:00Z', durationMinutes: 40 },
    ],
  },
  {
    id: 'sc-2023-perth',
    round: 3,
    name: 'Perth Super 440',
    circuitId: 'wanneroo-raceway',
    sessions: [
      // Apr 29–30, AWST = UTC+8
      { type: 'practice', label: 'Practice', startUtc: '2023-04-29T02:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-29T04:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2023-04-29T06:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-04-30T04:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2023-04-30T06:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'sc-2023-tasmania',
    round: 4,
    name: 'Tasmania Super 440',
    circuitId: 'symmons-plains-raceway',
    sessions: [
      // May 20–21, AEST = UTC+10
      { type: 'practice', label: 'Practice', startUtc: '2023-05-20T00:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-05-20T02:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2023-05-20T04:30:00Z', durationMinutes: 55 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-05-21T02:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2023-05-21T04:30:00Z', durationMinutes: 55 },
    ],
  },
  {
    id: 'sc-2023-darwin',
    round: 5,
    name: 'Darwin Triple Crown',
    circuitId: 'hidden-valley-raceway',
    sessions: [
      // Jun 17–18, NT = UTC+9.5
      { type: 'practice', label: 'Practice', startUtc: '2023-06-17T00:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-17T02:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2023-06-17T05:00:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Race 2', startUtc: '2023-06-18T02:30:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Race 3', startUtc: '2023-06-18T05:00:00Z', durationMinutes: 55 },
    ],
  },
  {
    id: 'sc-2023-townsville',
    round: 6,
    name: 'Townsville 500',
    circuitId: 'townsville-street-circuit',
    sessions: [
      // Jul 8–9, AEST = UTC+10
      { type: 'practice', label: 'Practice', startUtc: '2023-07-08T00:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-08T02:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2023-07-08T04:30:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-07-09T02:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2023-07-09T04:30:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sc-2023-sydney',
    round: 7,
    name: 'Sydney SuperNight',
    circuitId: 'sydney-motorsport-park',
    sessions: [
      // Jul 29–30, AEST = UTC+10
      { type: 'practice', label: 'Practice', startUtc: '2023-07-29T00:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-29T02:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2023-07-29T04:30:00Z', durationMinutes: 70 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-07-30T02:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2023-07-30T04:30:00Z', durationMinutes: 70 },
    ],
  },
  {
    id: 'sc-2023-the-bend',
    round: 8,
    name: 'The Bend Super 440',
    circuitId: 'the-bend-motorsport-park',
    sessions: [
      // Aug 19–20, ACST = UTC+9.5
      { type: 'practice', label: 'Practice', startUtc: '2023-08-19T00:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-19T02:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2023-08-19T05:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-08-20T02:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2023-08-20T05:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'sc-2023-sandown',
    round: 9,
    name: 'Sandown 500',
    circuitId: 'sandown-raceway',
    sessions: [
      // Sep 15–17, AEST = UTC+10
      { type: 'practice', label: 'Practice 1', startUtc: '2023-09-15T00:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2023-09-15T04:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-16T02:00:00Z', durationMinutes: 20 },
      { type: 'endurance', label: 'Sandown 500', startUtc: '2023-09-17T01:30:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'sc-2023-bathurst',
    round: 10,
    name: 'Repco Bathurst 1000',
    circuitId: 'mount-panorama-circuit',
    sessions: [
      // Oct 5–8, AEDT = UTC+11
      { type: 'practice', label: 'Practice 1', startUtc: '2023-10-04T23:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2023-10-05T04:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 3', startUtc: '2023-10-06T00:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-10-06T03:00:00Z', durationMinutes: 40 },
      { type: 'warmup', label: 'Warmup', startUtc: '2023-10-07T18:00:00Z', durationMinutes: 20 },
      { type: 'endurance', label: 'Bathurst 1000', startUtc: '2023-10-07T19:15:00Z', durationMinutes: 420 },
    ],
  },
  {
    id: 'sc-2023-gold-coast',
    round: 11,
    name: 'Gold Coast 500',
    circuitId: 'surfers-paradise-street-circuit',
    sessions: [
      // Oct 28–29, AEST = UTC+10
      { type: 'practice', label: 'Practice', startUtc: '2023-10-28T00:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-10-28T02:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2023-10-28T04:30:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-10-29T02:00:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2023-10-29T04:30:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sc-2023-adelaide',
    round: 12,
    name: 'Adelaide 500',
    circuitId: 'adelaide-street-circuit',
    sessions: [
      // Nov 25–26, ACDT = UTC+10.5
      { type: 'practice', label: 'Practice', startUtc: '2023-11-24T23:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-11-25T01:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2023-11-25T04:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2023-11-26T01:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2023-11-26T04:00:00Z', durationMinutes: 75 },
    ],
  },
]
