import { RaceEvent } from '@/lib/types'

// GT World Challenge Europe 2027 — 5 Endurance Cup + 5 Sprint Cup rounds (announced 26 Jun 2026 at the 24h of Spa)
// Source: gt-world-challenge-europe.com. Imola and Hungaroring join; Monza and Portimão drop out.
// Session times are NOT yet published — all sessions are shown as TBA with placeholder times based on the 2026 weekend.
export const gtwc2027: RaceEvent[] = [
  {
    id: 'gtwc-2027-paul-ricard',
    round: 1,
    name: '6 Hours of Paul Ricard',
    circuitId: 'circuit-paul-ricard',
    sessions: [
      { type: 'practice', label: 'Bronze Test', startUtc: '2027-04-16T07:00:00Z', durationMinutes: 120, tba: true },
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-04-16T12:25:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-04-16T17:25:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-04-17T10:05:00Z', durationMinutes: 60, tba: true },
      { type: 'endurance', label: '6 Hours of Paul Ricard', startUtc: '2027-04-17T16:00:00Z', durationMinutes: 360, tba: true },
    ],
  },
  {
    id: 'gtwc-2027-brands-hatch',
    round: 2,
    name: 'Brands Hatch Sprint',
    circuitId: 'brands-hatch',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-05-01T08:35:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-05-01T11:00:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2027-05-01T15:40:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2027-05-01T16:05:00Z', durationMinutes: 15, tba: true },
      { type: 'race', label: 'Race 1', startUtc: '2027-05-02T10:15:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race 2', startUtc: '2027-05-02T14:45:00Z', durationMinutes: 60, tba: true },
    ],
  },
  {
    id: 'gtwc-2027-imola',
    round: 3,
    name: '3 Hours of Imola',
    circuitId: 'autodromo-enzo-e-dino-ferrari',
    // New venue for 2027 (Monza dropped due to construction work) — placeholder times follow the Monza 3h weekend
    sessions: [
      { type: 'practice', label: 'Bronze Test', startUtc: '2027-05-20T13:45:00Z', durationMinutes: 120, tba: true },
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-05-22T07:00:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-05-22T12:25:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-05-23T07:50:00Z', durationMinutes: 60, tba: true },
      { type: 'endurance', label: '3 Hours of Imola', startUtc: '2027-05-23T13:30:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'gtwc-2027-spa-24h',
    round: 4,
    name: 'CrowdStrike 24 Hours of Spa',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-06-24T08:10:00Z', durationMinutes: 120, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-06-24T14:10:00Z', durationMinutes: 120, tba: true },
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
    id: 'gtwc-2027-misano',
    round: 5,
    name: 'Misano Sprint',
    circuitId: 'misano-world-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-07-16T12:50:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-07-16T18:10:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2027-07-17T11:05:00Z', durationMinutes: 30, tba: true },
      { type: 'race', label: 'Race 1', startUtc: '2027-07-17T18:30:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2027-07-18T08:05:00Z', durationMinutes: 30, tba: true },
      { type: 'race', label: 'Race 2', startUtc: '2027-07-18T12:30:00Z', durationMinutes: 60, tba: true },
    ],
  },
  {
    id: 'gtwc-2027-magny-cours',
    round: 6,
    name: 'Magny-Cours Sprint',
    circuitId: 'circuit-de-nevers-magny-cours',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-07-30T11:30:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-07-30T18:40:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2027-07-31T12:55:00Z', durationMinutes: 30, tba: true },
      { type: 'race', label: 'Race 1', startUtc: '2027-07-31T19:05:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2027-08-01T08:50:00Z', durationMinutes: 30, tba: true },
      { type: 'race', label: 'Race 2', startUtc: '2027-08-01T13:30:00Z', durationMinutes: 60, tba: true },
    ],
  },
  {
    id: 'gtwc-2027-nurburgring',
    round: 7,
    name: '3 Hours of Nurburgring',
    circuitId: 'nurburgring',
    sessions: [
      { type: 'practice', label: 'Bronze Test', startUtc: '2027-08-27T14:40:00Z', durationMinutes: 120, tba: true },
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-08-28T08:50:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-08-28T14:15:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-08-29T07:45:00Z', durationMinutes: 70, tba: true },
      { type: 'endurance', label: '3 Hours of Nurburgring', startUtc: '2027-08-29T13:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'gtwc-2027-zandvoort',
    round: 8,
    name: 'Zandvoort Sprint',
    circuitId: 'circuit-zandvoort',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-09-17T07:00:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-09-17T11:50:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2027-09-18T07:50:00Z', durationMinutes: 30, tba: true },
      { type: 'race', label: 'Race 1', startUtc: '2027-09-18T12:45:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2027-09-19T08:35:00Z', durationMinutes: 30, tba: true },
      { type: 'race', label: 'Race 2', startUtc: '2027-09-19T12:15:00Z', durationMinutes: 60, tba: true },
    ],
  },
  {
    id: 'gtwc-2027-hungaroring',
    round: 9,
    name: 'Hungaroring Sprint',
    circuitId: 'hungaroring',
    // Returns after several years — placeholder times follow the Barcelona Sprint weekend
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-10-01T07:00:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-10-01T11:55:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2027-10-02T07:45:00Z', durationMinutes: 30, tba: true },
      { type: 'race', label: 'Race 1', startUtc: '2027-10-02T12:00:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2027-10-03T09:10:00Z', durationMinutes: 30, tba: true },
      { type: 'race', label: 'Race 2', startUtc: '2027-10-03T14:00:00Z', durationMinutes: 60, tba: true },
    ],
  },
  {
    id: 'gtwc-2027-barcelona',
    round: 10,
    name: '3 Hours of Barcelona',
    circuitId: 'circuit-de-barcelona-catalunya',
    // Season finale (Portimão dropped) — placeholder times follow the Nürburgring 3h weekend
    sessions: [
      { type: 'practice', label: 'Bronze Test', startUtc: '2027-10-22T14:40:00Z', durationMinutes: 120, tba: true },
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-10-23T08:50:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-10-23T14:15:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-10-24T07:45:00Z', durationMinutes: 70, tba: true },
      { type: 'endurance', label: '3 Hours of Barcelona', startUtc: '2027-10-24T13:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
]
