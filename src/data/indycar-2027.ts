import { RaceEvent } from '@/lib/types'

// IndyCar Series 2027 — PARTIAL calendar. Source: indycar.com "Phase One" (8 races through 6 Jun, announced Aug 2026)
// plus Road America (24-27 Jun, confirmed by the venue). Phase Two (Mid-Ohio, Gateway, Nashville, Portland, Markham,
// Washington D.C., Milwaukee, Monterey and broadcast times) has not been released yet — add when published.
// Session times are NOT yet published — all sessions are shown as TBA with placeholder times based on the 2026 weekends.
// Round numbers are provisional until the full schedule is announced.
export const indycar2027: RaceEvent[] = [
  {
    id: 'indycar-2027-st-petersburg',
    round: 1,
    name: 'Firestone Grand Prix of St. Petersburg',
    circuitId: 'streets-of-st-petersburg',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-03-05T18:30:00Z', durationMinutes: 75, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-03-06T14:30:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-03-06T21:30:00Z', durationMinutes: 60, tba: true },
      { type: 'warmup', label: 'Warmup', startUtc: '2027-03-07T14:00:00Z', durationMinutes: 30, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-03-07T17:00:00Z', durationMinutes: 120, tba: true },
    ],
  },
  {
    id: 'indycar-2027-phoenix',
    round: 2,
    name: 'Good Ranchers 250',
    circuitId: 'phoenix-raceway',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-03-12T15:00:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-03-12T19:00:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'High Line & Final Practice', startUtc: '2027-03-12T21:30:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-03-13T20:00:00Z', durationMinutes: 120, tba: true },
    ],
  },
  {
    id: 'indycar-2027-arlington',
    round: 3,
    name: 'Java House Grand Prix of Arlington',
    circuitId: 'streets-of-arlington',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-03-19T20:00:00Z', durationMinutes: 75, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-03-20T13:30:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-03-20T18:30:00Z', durationMinutes: 60, tba: true },
      { type: 'warmup', label: 'Warmup', startUtc: '2027-03-21T13:30:00Z', durationMinutes: 30, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-03-21T15:30:00Z', durationMinutes: 120, tba: true },
    ],
  },
  {
    id: 'indycar-2027-barber',
    round: 4,
    name: 'Children\'s of Alabama Indy Grand Prix',
    circuitId: 'barber-motorsports-park',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-04-02T19:30:00Z', durationMinutes: 75, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-04-03T15:00:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-04-03T18:30:00Z', durationMinutes: 60, tba: true },
      { type: 'warmup', label: 'Warmup', startUtc: '2027-04-04T14:00:00Z', durationMinutes: 30, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-04-04T17:00:00Z', durationMinutes: 120, tba: true },
    ],
  },
  {
    id: 'indycar-2027-long-beach',
    round: 5,
    name: 'Grand Prix of Long Beach',
    circuitId: 'streets-of-long-beach',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-04-16T22:00:00Z', durationMinutes: 75, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-04-17T17:30:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-04-17T22:30:00Z', durationMinutes: 60, tba: true },
      { type: 'warmup', label: 'Warmup', startUtc: '2027-04-18T17:00:00Z', durationMinutes: 30, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-04-18T21:30:00Z', durationMinutes: 120, tba: true },
    ],
  },
  {
    id: 'indycar-2027-indianapolis-gp',
    round: 6,
    name: 'Sonsio Grand Prix',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-05-14T13:00:00Z', durationMinutes: 75, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-05-14T17:00:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2027-05-15T14:30:00Z', durationMinutes: 45, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2027-05-15T15:30:00Z', durationMinutes: 45, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-05-15T20:30:00Z', durationMinutes: 120, tba: true },
    ],
  },
  {
    id: 'indycar-2027-indy500',
    round: 7,
    name: '111th Indianapolis 500',
    circuitId: 'indianapolis-motor-speedway-oval',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-05-18T16:00:00Z', durationMinutes: 360, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-05-19T16:00:00Z', durationMinutes: 360, tba: true },
      { type: 'practice', label: 'Practice 3', startUtc: '2027-05-20T16:00:00Z', durationMinutes: 360, tba: true },
      { type: 'practice', label: 'Fast Friday', startUtc: '2027-05-21T18:30:00Z', durationMinutes: 240, tba: true },
      { type: 'practice', label: 'Practice 6', startUtc: '2027-05-23T13:30:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying (All Cars)', startUtc: '2027-05-23T16:00:00Z', durationMinutes: 150, tba: true },
      { type: 'qualifying', label: 'Qualifying (Top 12)', startUtc: '2027-05-23T20:00:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying (Firestone Fast 6)', startUtc: '2027-05-23T22:00:00Z', durationMinutes: 45, tba: true },
      { type: 'practice', label: 'Practice 7', startUtc: '2027-05-24T17:00:00Z', durationMinutes: 120, tba: true },
      { type: 'practice', label: 'Carb Day Final Practice', startUtc: '2027-05-28T15:00:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Indianapolis 500', startUtc: '2027-05-30T16:30:00Z', durationMinutes: 200, tba: true },
    ],
  },
  {
    id: 'indycar-2027-detroit',
    round: 8,
    name: 'Chevrolet Detroit Grand Prix',
    circuitId: 'streets-of-detroit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-06-04T19:00:00Z', durationMinutes: 75, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-06-05T13:00:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-06-05T17:00:00Z', durationMinutes: 60, tba: true },
      { type: 'warmup', label: 'Warmup', startUtc: '2027-06-06T13:30:00Z', durationMinutes: 30, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-06-06T16:30:00Z', durationMinutes: 120, tba: true },
    ],
  },
  {
    id: 'indycar-2027-road-america',
    round: 9,
    name: 'XPEL Grand Prix at Road America',
    circuitId: 'road-america',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-06-25T20:00:00Z', durationMinutes: 75, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-06-26T15:00:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-06-26T18:00:00Z', durationMinutes: 60, tba: true },
      { type: 'warmup', label: 'Warmup', startUtc: '2027-06-27T15:00:00Z', durationMinutes: 30, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-06-27T18:00:00Z', durationMinutes: 120, tba: true },
    ],
  },
]
