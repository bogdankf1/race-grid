import { RaceEvent } from '@/lib/types'

// GT World Challenge Australia 2026 — 6 events, 12 one-hour races
// Source: gt-world-challenge-australia.com timetable PDFs (Phillip Island, The Bend) and speedseries.com.au /
// Supercars schedules (Queensland, Darwin, Sydney, Adelaide) — re-verified Oct 2026
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
      // Friday 12 Jun (AEST UTC+10) — official SpeedSeries timetable
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-06-11T23:30:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Bronze Practice', startUtc: '2026-06-12T02:10:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-06-12T05:05:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-06-12T23:00:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-06-12T23:25:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2026-06-13T03:15:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2026-06-14T00:25:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcau-2026-darwin',
    round: 4,
    name: 'GT Festival Darwin',
    circuitId: 'hidden-valley-raceway',
    sessions: [
      // Friday 24 Jul (ACST UTC+9:30) — official SpeedSeries timetable
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-07-24T03:20:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Bronze Practice', startUtc: '2026-07-24T06:00:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-07-24T07:55:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-07-25T02:10:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-07-25T02:35:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2026-07-25T06:15:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2026-07-26T00:40:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcau-2026-sydney',
    round: 5,
    name: 'GT Festival Sydney',
    circuitId: 'sydney-motorsport-park',
    sessions: [
      // Friday 18 Sep (AEST UTC+10) — official SpeedSeries timetable (Race 1 is a night race)
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-09-17T23:25:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Bronze Practice', startUtc: '2026-09-18T03:30:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-09-18T07:15:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-09-19T04:35:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-09-19T05:00:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Race 1', startUtc: '2026-09-19T09:50:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2026-09-20T04:05:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwcau-2026-adelaide',
    round: 6,
    name: 'Adelaide Grand Final',
    circuitId: 'adelaide-street-circuit',
    sessions: [
      // Thursday 26 Nov (ACDT UTC+10:30) — Adelaide Grand Final schedule (Supercars support timetable)
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-11-25T21:50:00Z', durationMinutes: 40 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-11-26T01:55:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-11-27T00:45:00Z', durationMinutes: 10 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-11-27T01:05:00Z', durationMinutes: 10 },
      { type: 'race', label: 'Race 1', startUtc: '2026-11-27T22:40:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2026-11-28T23:10:00Z', durationMinutes: 60 },
    ],
  },
]
