import { RaceEvent } from '@/lib/types'

// Super Formula 2027 — provisional calendar (JAF): 12 races across 7 weekends, no overseas rounds.
// Source: superformula.net / JAF provisional calendar. Times are JST-based (UTC+9).
// Session times are NOT yet published — all sessions are shown as TBA with placeholder times based on the 2026 weekend.
export const superformula2027: RaceEvent[] = [
  {
    id: 'sf-2027-suzuka-1',
    round: 1,
    name: 'Suzuka — Rds. 1 & 2',
    circuitId: 'suzuka-international-racing-course',
    // Season opener moves from Motegi back to Suzuka
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-03-12T01:00:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2027-03-13T00:15:00Z', durationMinutes: 45, tba: true },
      { type: 'race', label: 'Race 1', startUtc: '2027-03-13T05:45:00Z', durationMinutes: 75, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2027-03-14T01:25:00Z', durationMinutes: 45, tba: true },
      { type: 'race', label: 'Race 2', startUtc: '2027-03-14T05:45:00Z', durationMinutes: 75, tba: true },
    ],
  },
  {
    id: 'sf-2027-motegi',
    round: 3,
    name: 'Motegi — Rds. 3 & 4',
    circuitId: 'twin-ring-motegi',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-04-16T01:10:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-04-16T05:30:00Z', durationMinutes: 115, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2027-04-17T00:30:00Z', durationMinutes: 45, tba: true },
      { type: 'race', label: 'Race 1', startUtc: '2027-04-17T05:45:00Z', durationMinutes: 75, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2027-04-18T01:10:00Z', durationMinutes: 45, tba: true },
      { type: 'race', label: 'Race 2', startUtc: '2027-04-18T05:45:00Z', durationMinutes: 75, tba: true },
    ],
  },
  {
    id: 'sf-2027-autopolis',
    round: 5,
    name: 'Autopolis — Rd. 5',
    circuitId: 'autopolis',
    // Single-race weekend — placeholder times follow the Sugo weekend
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-05-15T00:00:00Z', durationMinutes: 115, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-05-15T05:20:00Z', durationMinutes: 62, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-05-16T00:30:00Z', durationMinutes: 30, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-05-16T05:20:00Z', durationMinutes: 75, tba: true },
    ],
  },
  {
    id: 'sf-2027-sugo',
    round: 6,
    name: 'Sugo — Rd. 6',
    circuitId: 'sportsland-sugo',
    // Moves from August to late June (new F1-style summer break)
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-06-26T00:00:00Z', durationMinutes: 115, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-06-26T05:20:00Z', durationMinutes: 62, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-06-27T00:30:00Z', durationMinutes: 30, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-06-27T05:20:00Z', durationMinutes: 75, tba: true },
    ],
  },
  {
    id: 'sf-2027-fuji-1',
    round: 7,
    name: 'Fuji — Rds. 7 & 8',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-07-16T01:00:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2027-07-17T00:30:00Z', durationMinutes: 45, tba: true },
      { type: 'race', label: 'Race 1', startUtc: '2027-07-17T05:35:00Z', durationMinutes: 75, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2027-07-18T00:50:00Z', durationMinutes: 45, tba: true },
      { type: 'race', label: 'Race 2', startUtc: '2027-07-18T05:35:00Z', durationMinutes: 75, tba: true },
    ],
  },
  {
    id: 'sf-2027-fuji-2',
    round: 9,
    name: 'Fuji — Rds. 9 & 10',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-10-08T01:00:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2027-10-09T00:30:00Z', durationMinutes: 45, tba: true },
      { type: 'race', label: 'Race 1', startUtc: '2027-10-09T05:35:00Z', durationMinutes: 75, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2027-10-10T00:50:00Z', durationMinutes: 45, tba: true },
      { type: 'race', label: 'Race 2', startUtc: '2027-10-10T05:35:00Z', durationMinutes: 75, tba: true },
    ],
  },
  {
    id: 'sf-2027-suzuka-2',
    round: 11,
    name: 'Suzuka Finale — Rds. 11 & 12',
    circuitId: 'suzuka-international-racing-course',
    // Season finale
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-11-26T01:00:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2027-11-27T00:30:00Z', durationMinutes: 45, tba: true },
      { type: 'race', label: 'Race 1', startUtc: '2027-11-27T05:45:00Z', durationMinutes: 75, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2027-11-28T01:10:00Z', durationMinutes: 45, tba: true },
      { type: 'race', label: 'Race 2', startUtc: '2027-11-28T05:45:00Z', durationMinutes: 75, tba: true },
    ],
  },
]
