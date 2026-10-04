import { RaceEvent } from '@/lib/types'

// Super GT 2027 — provisional calendar (GTA, published 31 Jul 2026): 8 rounds. Source: supergt.net / GTA announcement.
// The Suzuka 1000km (4-5 Sep, GT300 only) is a special event shared with the IGTC and is listed in igtc-2027.
// Session times are NOT yet published — all sessions are shown as TBA with placeholder times based on the 2026 weekend.
export const supergt2027: RaceEvent[] = [
  {
    id: 'supergt-2027-okayama',
    round: 1,
    name: 'Okayama GT 300km',
    circuitId: 'okayama-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-04-03T00:30:00Z', durationMinutes: 115, tba: true },
      { type: 'qualifying', label: 'Qualifying Q1', startUtc: '2027-04-03T05:00:00Z', durationMinutes: 43, tba: true },
      { type: 'qualifying', label: 'Qualifying Q2', startUtc: '2027-04-03T05:53:00Z', durationMinutes: 28, tba: true },
      { type: 'warmup', label: 'Warm-up', startUtc: '2027-04-04T02:50:00Z', durationMinutes: 20, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-04-04T04:20:00Z', durationMinutes: 120, tba: true },
    ],
  },
  {
    id: 'supergt-2027-fuji-1',
    round: 2,
    name: 'Fuji GT 3 Hours',
    circuitId: 'fuji-speedway',
    // Golden Week holiday race (Mon-Tue)
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-05-03T01:30:00Z', durationMinutes: 95, tba: true },
      { type: 'qualifying', label: 'Qualifying Q1', startUtc: '2027-05-03T05:20:00Z', durationMinutes: 43, tba: true },
      { type: 'qualifying', label: 'Qualifying Q2', startUtc: '2027-05-03T06:13:00Z', durationMinutes: 28, tba: true },
      { type: 'warmup', label: 'Warm-up', startUtc: '2027-05-04T03:30:00Z', durationMinutes: 20, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-05-04T05:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'supergt-2027-sepang',
    round: 3,
    name: 'Sepang GT 300km',
    circuitId: 'sepang-international-circuit',
    // Returns after the 2026 cancellation — typical Super GT weekend template (MYT)
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-06-18T02:00:00Z', durationMinutes: 95, tba: true },
      { type: 'qualifying', label: 'Qualifying Q1', startUtc: '2027-06-18T06:00:00Z', durationMinutes: 43, tba: true },
      { type: 'qualifying', label: 'Qualifying Q2', startUtc: '2027-06-18T06:53:00Z', durationMinutes: 28, tba: true },
      { type: 'warmup', label: 'Warm-up', startUtc: '2027-06-19T03:30:00Z', durationMinutes: 20, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-06-19T06:00:00Z', durationMinutes: 120, tba: true },
    ],
  },
  {
    id: 'supergt-2027-suzuka',
    round: 4,
    name: 'Suzuka GT 300km',
    circuitId: 'suzuka-international-racing-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-07-31T00:45:00Z', durationMinutes: 95, tba: true },
      { type: 'qualifying', label: 'Qualifying Q1', startUtc: '2027-07-31T06:30:00Z', durationMinutes: 43, tba: true },
      { type: 'qualifying', label: 'Qualifying Q2', startUtc: '2027-07-31T07:23:00Z', durationMinutes: 28, tba: true },
      { type: 'warmup', label: 'Warm-up', startUtc: '2027-08-01T03:00:00Z', durationMinutes: 20, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-08-01T04:30:00Z', durationMinutes: 120, tba: true },
    ],
  },
  {
    id: 'supergt-2027-sugo',
    round: 5,
    name: 'Sugo GT 300km',
    circuitId: 'sportsland-sugo',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-09-18T01:30:00Z', durationMinutes: 95, tba: true },
      { type: 'qualifying', label: 'Qualifying Q1', startUtc: '2027-09-18T05:30:00Z', durationMinutes: 43, tba: true },
      { type: 'qualifying', label: 'Qualifying Q2', startUtc: '2027-09-18T06:23:00Z', durationMinutes: 28, tba: true },
      { type: 'warmup', label: 'Warm-up', startUtc: '2027-09-19T03:00:00Z', durationMinutes: 20, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-09-19T04:30:00Z', durationMinutes: 120, tba: true },
    ],
  },
  {
    id: 'supergt-2027-autopolis',
    round: 6,
    name: 'Autopolis GT 3 Hours',
    circuitId: 'autopolis',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-10-16T01:30:00Z', durationMinutes: 95, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-10-16T05:30:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-10-17T05:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'supergt-2027-fuji-2',
    round: 7,
    name: 'Fuji GT 300km',
    circuitId: 'fuji-speedway',
    // Second Fuji date moves to the penultimate round
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-11-06T01:30:00Z', durationMinutes: 95, tba: true },
      { type: 'qualifying', label: 'Qualifying Q1', startUtc: '2027-11-06T05:20:00Z', durationMinutes: 43, tba: true },
      { type: 'qualifying', label: 'Qualifying Q2', startUtc: '2027-11-06T06:13:00Z', durationMinutes: 28, tba: true },
      { type: 'warmup', label: 'Warm-up', startUtc: '2027-11-07T03:00:00Z', durationMinutes: 20, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-11-07T04:30:00Z', durationMinutes: 120, tba: true },
    ],
  },
  {
    id: 'supergt-2027-motegi',
    round: 8,
    name: 'Motegi GT 300km Grand Final',
    circuitId: 'twin-ring-motegi',
    // Season finale
    sessions: [
      { type: 'race', label: 'Race', startUtc: '2027-11-21T05:00:00Z', durationMinutes: 150, tba: true },
    ],
  },
]
