import { RaceEvent } from '@/lib/types'

// GT World Challenge Australia 2027 — 5 confirmed rounds; Round 6 is still TBC (possible return to the Supercars
// Adelaide Grand Final) and is not listed. Source: gt-world-challenge-australia.com / SRO announcement 26 Jun 2026.
// Session times are NOT yet published — all sessions are shown as TBA with placeholder times based on the 2026 weekends.
export const gtwcau2027: RaceEvent[] = [
  {
    id: 'gtwcau-2027-phillip-island',
    round: 1,
    name: 'GT Festival Phillip Island',
    circuitId: 'phillip-island-grand-prix-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-04-15T23:10:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-04-16T02:50:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2027-04-17T00:15:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2027-04-17T00:35:00Z', durationMinutes: 15, tba: true },
      { type: 'race', label: 'Race 1', startUtc: '2027-04-17T04:55:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race 2', startUtc: '2027-04-18T02:40:00Z', durationMinutes: 60, tba: true },
    ],
  },
  {
    id: 'gtwcau-2027-the-bend',
    round: 2,
    name: 'GT Festival The Bend',
    circuitId: 'the-bend-motorsport-park',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-05-27T23:50:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Bronze Practice', startUtc: '2027-05-28T03:30:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-05-28T07:00:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2027-05-29T00:45:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2027-05-29T01:10:00Z', durationMinutes: 15, tba: true },
      { type: 'race', label: 'Race 1', startUtc: '2027-05-29T06:50:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race 2', startUtc: '2027-05-30T04:40:00Z', durationMinutes: 60, tba: true },
    ],
  },
  {
    id: 'gtwcau-2027-sydney',
    round: 3,
    name: 'GT Festival Sydney',
    circuitId: 'sydney-motorsport-park',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-07-22T23:25:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Bronze Practice', startUtc: '2027-07-23T03:30:00Z', durationMinutes: 40, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-07-23T07:15:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2027-07-24T04:35:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2027-07-24T05:00:00Z', durationMinutes: 15, tba: true },
      { type: 'race', label: 'Race 1', startUtc: '2027-07-24T09:50:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race 2', startUtc: '2027-07-25T04:05:00Z', durationMinutes: 60, tba: true },
    ],
  },
  {
    id: 'gtwcau-2027-queensland',
    round: 4,
    name: 'GT Festival Queensland',
    circuitId: 'queensland-raceway',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-09-16T23:30:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Bronze Practice', startUtc: '2027-09-17T02:10:00Z', durationMinutes: 40, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-09-17T05:05:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2027-09-17T23:00:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2027-09-17T23:25:00Z', durationMinutes: 15, tba: true },
      { type: 'race', label: 'Race 1', startUtc: '2027-09-18T03:15:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race 2', startUtc: '2027-09-19T00:25:00Z', durationMinutes: 60, tba: true },
    ],
  },
  {
    id: 'gtwcau-2027-bathurst',
    round: 5,
    name: 'GT Festival Bathurst',
    circuitId: 'mount-panorama-circuit',
    // Returns to the calendar as the Shannons SpeedSeries finale (Hidden Valley dropped) — placeholder times follow the Sydney weekend
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-10-28T23:25:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Bronze Practice', startUtc: '2027-10-29T03:30:00Z', durationMinutes: 40, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-10-29T07:15:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2027-10-30T04:35:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2027-10-30T05:00:00Z', durationMinutes: 15, tba: true },
      { type: 'race', label: 'Race 1', startUtc: '2027-10-30T09:50:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race 2', startUtc: '2027-10-31T04:05:00Z', durationMinutes: 60, tba: true },
    ],
  },
]
