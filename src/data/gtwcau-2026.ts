import { RaceEvent } from '@/lib/types'

// GT World Challenge Australia 2026 — 6 events, 12 one-hour races
// Source: gt-world-challenge-australia.com (official event timetables)
export const gtwcau2026: RaceEvent[] = [
  {
    id: 'gtwcau-2026-phillip-island',
    round: 1,
    name: 'GT Festival Phillip Island',
    circuitId: 'phillip-island-grand-prix-circuit',
    sessions: [
      // Friday 27 Mar (AEDT UTC+11)
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-03-26T23:10:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-03-27T02:50:00Z', durationMinutes: 60 },
      // Saturday 28 Mar
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-03-28T00:15:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-03-28T00:35:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2026-03-28T04:55:00Z', durationMinutes: 60 },
      // Sunday 29 Mar
      { type: 'race', label: 'Race 2', startUtc: '2026-03-29T02:40:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcau-2026-the-bend',
    round: 2,
    name: 'GT Festival The Bend',
    circuitId: 'the-bend-motorsport-park',
    sessions: [
      // Friday 8 May (ACST UTC+9:30)
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-05-07T23:50:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Bronze Practice', startUtc: '2026-05-08T03:30:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-05-08T07:00:00Z', durationMinutes: 60 },
      // Saturday 9 May
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-05-09T00:45:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-05-09T01:10:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2026-05-09T06:50:00Z', durationMinutes: 60 },
      // Sunday 10 May
      { type: 'race', label: 'Race 2', startUtc: '2026-05-10T04:40:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcau-2026-queensland',
    round: 3,
    name: 'GT Festival Queensland',
    circuitId: 'queensland-raceway',
    sessions: [
      // Friday 12 Jun (AEST UTC+10)
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-06-11T23:30:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-06-12T03:00:00Z', durationMinutes: 60 },
      // Saturday 13 Jun
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-06-13T00:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-06-13T00:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2026-06-13T05:00:00Z', durationMinutes: 60 },
      // Sunday 14 Jun
      { type: 'race', label: 'Race 2', startUtc: '2026-06-14T03:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcau-2026-darwin',
    round: 4,
    name: 'GT Festival Darwin',
    circuitId: 'hidden-valley-raceway',
    sessions: [
      // Friday 24 Jul (ACST UTC+9:30)
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-07-24T00:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-07-24T03:30:00Z', durationMinutes: 60 },
      // Saturday 25 Jul
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-07-25T00:30:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-07-25T00:50:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2026-07-25T05:30:00Z', durationMinutes: 60 },
      // Sunday 26 Jul
      { type: 'race', label: 'Race 2', startUtc: '2026-07-26T03:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcau-2026-sydney',
    round: 5,
    name: 'GT Festival Sydney',
    circuitId: 'sydney-motorsport-park',
    sessions: [
      // Friday 18 Sep (AEST UTC+10)
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-09-17T23:30:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-09-18T03:00:00Z', durationMinutes: 60 },
      // Saturday 19 Sep
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-09-19T00:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-09-19T00:20:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2026-09-19T05:00:00Z', durationMinutes: 60 },
      // Sunday 20 Sep
      { type: 'race', label: 'Race 2', startUtc: '2026-09-20T03:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcau-2026-adelaide',
    round: 6,
    name: 'Adelaide Grand Final',
    circuitId: 'adelaide-street-circuit',
    sessions: [
      // Friday 27 Nov (ACDT UTC+10:30)
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-11-26T23:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-11-27T02:30:00Z', durationMinutes: 60 },
      // Saturday 28 Nov
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-11-27T23:30:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-11-27T23:50:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2026-11-28T04:30:00Z', durationMinutes: 60 },
      // Sunday 29 Nov
      { type: 'race', label: 'Race 2', startUtc: '2026-11-29T02:30:00Z', durationMinutes: 60 },
    ],
  },
]
