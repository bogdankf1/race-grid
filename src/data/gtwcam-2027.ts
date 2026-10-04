import { RaceEvent } from '@/lib/types'

// GT World Challenge America 2027 — 7 rounds (6 x 3-hour + the Texas 8 Hour). Provisional calendar from SRO America.
// Source: gt-world-challenge-america.com. Session times are NOT yet published — all sessions are shown as TBA with
// placeholder times based on the 2026 weekends.
export const gtwcam2027: RaceEvent[] = [
  {
    id: 'gtwcam-2027-sonoma',
    round: 1,
    name: 'Sonoma 3 Hours',
    circuitId: 'sonoma-raceway',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-04-02T23:00:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-04-03T18:00:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Practice 3', startUtc: '2027-04-03T21:15:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-04-04T15:50:00Z', durationMinutes: 30, tba: true },
      { type: 'endurance', label: '3 Hours of Sonoma', startUtc: '2027-04-04T20:45:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'gtwcam-2027-cota',
    round: 2,
    name: 'Texas 8 Hour',
    circuitId: 'circuit-of-the-americas',
    // Inaugural Texas 8 Hour (IGTC round) replaces the Indianapolis 8 Hour — starts Saturday lunchtime and finishes in darkness; placeholder times follow the Indy 8 Hour weekend
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-05-07T19:35:00Z', durationMinutes: 65, tba: true },
      { type: 'qualifying', label: 'Pole Shootout', startUtc: '2027-05-07T21:35:00Z', durationMinutes: 30, tba: true },
      { type: 'endurance', label: 'Texas 8 Hour', startUtc: '2027-05-08T16:30:00Z', durationMinutes: 480, tba: true },
    ],
  },
  {
    id: 'gtwcam-2027-watkins-glen',
    round: 3,
    name: 'Watkins Glen 3 Hours',
    circuitId: 'watkins-glen-international',
    // New venue for 2027 — placeholder times follow the Road Atlanta weekend
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-05-21T21:05:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-05-22T14:45:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Practice 3', startUtc: '2027-05-22T17:45:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2027-05-22T21:25:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2027-05-22T21:45:00Z', durationMinutes: 15, tba: true },
      { type: 'endurance', label: '3 Hours of Watkins Glen', startUtc: '2027-05-23T18:30:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'gtwcam-2027-road-atlanta',
    round: 4,
    name: 'Road Atlanta 3 Hours',
    circuitId: 'michelin-raceway-road-atlanta',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-06-18T21:05:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-06-19T14:45:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Practice 3', startUtc: '2027-06-19T17:45:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2027-06-19T21:25:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2027-06-19T21:45:00Z', durationMinutes: 15, tba: true },
      { type: 'endurance', label: '3 Hours of Road Atlanta', startUtc: '2027-06-20T18:30:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'gtwcam-2027-road-america',
    round: 5,
    name: 'Road America 3 Hours',
    circuitId: 'road-america',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-08-27T22:00:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-08-28T15:55:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Practice 3', startUtc: '2027-08-28T19:25:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2027-08-29T14:10:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2027-08-29T14:30:00Z', durationMinutes: 15, tba: true },
      { type: 'endurance', label: '3 Hours of Road America', startUtc: '2027-08-29T19:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'gtwcam-2027-barber',
    round: 6,
    name: 'Barber 3 Hours',
    circuitId: 'barber-motorsports-park',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-09-10T21:45:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-09-11T15:15:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Practice 3', startUtc: '2027-09-11T19:50:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2027-09-12T13:30:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2027-09-12T13:50:00Z', durationMinutes: 15, tba: true },
      { type: 'endurance', label: '3 Hours of Barber', startUtc: '2027-09-12T17:30:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'gtwcam-2027-indianapolis',
    round: 7,
    name: 'Indianapolis 3 Hours',
    circuitId: 'indianapolis-motor-speedway-road-course',
    // Season finale becomes a 3-hour race — placeholder times follow the Road Atlanta weekend
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-10-01T21:05:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-10-02T14:45:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Practice 3', startUtc: '2027-10-02T17:45:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2027-10-02T21:25:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2027-10-02T21:45:00Z', durationMinutes: 15, tba: true },
      { type: 'endurance', label: '3 Hours of Indianapolis', startUtc: '2027-10-03T18:30:00Z', durationMinutes: 180, tba: true },
    ],
  },
]
