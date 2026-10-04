import { RaceEvent } from '@/lib/types'

// Intercontinental GT Challenge 2027 — 5 rounds (provisional calendar announced 26 Jun 2026)
// Source: intercontinentalgtchallenge.com. Session times are NOT yet published — all sessions are shown as TBA with
// placeholder times based on the 2026 weekends.
export const igtc2027: RaceEvent[] = [
  {
    id: 'igtc-2027-bathurst',
    round: 1,
    name: 'Meguiar\'s Bathurst 12 Hour',
    circuitId: 'mount-panorama-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-02-11T21:45:00Z', durationMinutes: 40, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-02-12T00:00:00Z', durationMinutes: 40, tba: true },
      { type: 'practice', label: 'Practice 3', startUtc: '2027-02-12T03:10:00Z', durationMinutes: 40, tba: true },
      { type: 'practice', label: 'Practice 4', startUtc: '2027-02-12T05:40:00Z', durationMinutes: 40, tba: true },
      { type: 'practice', label: 'Practice 5', startUtc: '2027-02-12T21:05:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Practice 6', startUtc: '2027-02-12T23:05:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-02-13T02:05:00Z', durationMinutes: 75, tba: true },
      { type: 'qualifying', label: 'Pirelli Pole Battle', startUtc: '2027-02-13T05:15:00Z', durationMinutes: 15, tba: true },
      { type: 'endurance', label: 'Bathurst 12 Hour', startUtc: '2027-02-13T18:45:00Z', durationMinutes: 720, tba: true },
    ],
  },
  {
    id: 'igtc-2027-texas',
    round: 2,
    name: 'Texas 8 Hour',
    circuitId: 'circuit-of-the-americas',
    // Inaugural Texas 8 Hour replaces the Indianapolis 8 Hour — starts Saturday lunchtime and finishes in darkness; placeholder times follow the Indy 8 Hour weekend
    sessions: [
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2027-05-07T13:50:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-05-07T19:35:00Z', durationMinutes: 65, tba: true },
      { type: 'qualifying', label: 'Pole Shootout', startUtc: '2027-05-07T21:35:00Z', durationMinutes: 15, tba: true },
      { type: 'endurance', label: 'Texas 8 Hour', startUtc: '2027-05-08T16:30:00Z', durationMinutes: 480, tba: true },
    ],
  },
  {
    id: 'igtc-2027-nurburgring',
    round: 3,
    name: 'ADAC RAVENOL 24h Nürburgring',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2027-05-27T11:15:00Z', durationMinutes: 120, tba: true },
      { type: 'qualifying', label: 'Qualifying 2 (Night)', startUtc: '2027-05-27T18:00:00Z', durationMinutes: 210, tba: true },
      { type: 'qualifying', label: 'Top Qualifying 1', startUtc: '2027-05-28T08:15:00Z', durationMinutes: 35, tba: true },
      { type: 'qualifying', label: 'Top Qualifying 2', startUtc: '2027-05-28T09:00:00Z', durationMinutes: 35, tba: true },
      { type: 'qualifying', label: 'Qualifying 3', startUtc: '2027-05-28T10:00:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Top Qualifying 3', startUtc: '2027-05-28T11:35:00Z', durationMinutes: 60, tba: true },
      { type: 'warmup', label: 'Warmup', startUtc: '2027-05-29T08:00:00Z', durationMinutes: 75, tba: true },
      { type: 'endurance', label: '24h Nürburgring', startUtc: '2027-05-29T13:00:00Z', durationMinutes: 1440, tba: true },
    ],
  },
  {
    id: 'igtc-2027-spa',
    round: 4,
    name: 'CrowdStrike 24 Hours of Spa',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-06-24T08:10:00Z', durationMinutes: 120, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-06-24T14:10:00Z', durationMinutes: 120, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2027-06-24T17:45:00Z', durationMinutes: 20, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2027-06-24T18:05:00Z', durationMinutes: 30, tba: true },
      { type: 'qualifying', label: 'Qualifying 3', startUtc: '2027-06-24T18:35:00Z', durationMinutes: 30, tba: true },
      { type: 'qualifying', label: 'Qualifying 4', startUtc: '2027-06-24T19:05:00Z', durationMinutes: 30, tba: true },
      { type: 'practice', label: 'Night Practice', startUtc: '2027-06-24T20:55:00Z', durationMinutes: 40, tba: true },
      { type: 'qualifying', label: 'Super Pole', startUtc: '2027-06-25T13:05:00Z', durationMinutes: 50, tba: true },
      { type: 'warmup', label: 'Warm-up', startUtc: '2027-06-25T17:20:00Z', durationMinutes: 30, tba: true },
      { type: 'endurance', label: '24 Hours of Spa', startUtc: '2027-06-26T14:30:00Z', durationMinutes: 1440, tba: true },
    ],
  },
  {
    id: 'igtc-2027-suzuka',
    round: 5,
    name: 'Suzuka 1000km',
    circuitId: 'suzuka-international-racing-course',
    // Now part of the Super GT calendar (GT300 class)
    sessions: [
      { type: 'practice', label: 'Test Session 1', startUtc: '2027-09-03T00:10:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Test Session 2', startUtc: '2027-09-03T03:10:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Night Practice', startUtc: '2027-09-03T08:50:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2027-09-04T01:40:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2027-09-04T08:40:00Z', durationMinutes: 20, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2027-09-04T09:02:00Z', durationMinutes: 20, tba: true },
      { type: 'qualifying', label: 'Qualifying 3', startUtc: '2027-09-04T09:25:00Z', durationMinutes: 20, tba: true },
      { type: 'endurance', label: 'Suzuka 1000km', startUtc: '2027-09-05T03:50:00Z', durationMinutes: 480, tba: true },
    ],
  },
]
