import { RaceEvent } from '@/lib/types'

// GT World Challenge Europe 2021 — 5 Endurance Cup + 5 Sprint Cup rounds
export const gtwc2021: RaceEvent[] = [
  // --- Endurance Cup ---
  {
    id: 'gtwc-2021-monza',
    round: 1,
    name: '3 Hours of Monza',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-04-16T08:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2021-04-17T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-04-17T12:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: '3 Hours of Monza', startUtc: '2021-04-18T11:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'gtwc-2021-paul-ricard',
    round: 2,
    name: 'Paul Ricard 1000km',
    circuitId: 'circuit-paul-ricard',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-05-28T08:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2021-05-29T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-29T12:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: 'Paul Ricard 1000km', startUtc: '2021-05-30T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'gtwc-2021-spa-24h',
    round: 3,
    name: '24 Hours of Spa',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-07-29T08:00:00Z', durationMinutes: 120 },
      { type: 'practice', label: 'Practice 2', startUtc: '2021-07-29T15:00:00Z', durationMinutes: 120 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-30T15:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Super Pole', startUtc: '2021-07-30T19:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: '24 Hours of Spa', startUtc: '2021-07-31T14:30:00Z', durationMinutes: 1440 },
    ],
  },
  {
    id: 'gtwc-2021-nurburgring',
    round: 4,
    name: '3 Hours of Nurburgring',
    circuitId: 'nurburgring',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-09-03T08:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2021-09-04T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-04T12:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: '3 Hours of Nurburgring', startUtc: '2021-09-05T11:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'gtwc-2021-barcelona',
    round: 5,
    name: '3 Hours of Barcelona',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-10-08T08:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2021-10-09T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-09T12:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: '3 Hours of Barcelona', startUtc: '2021-10-10T11:00:00Z', durationMinutes: 180 },
    ],
  },
  // --- Sprint Cup ---
  {
    id: 'gtwc-2021-magny-cours',
    round: 6,
    name: 'Magny-Cours Sprint',
    circuitId: 'circuit-de-nevers-magny-cours',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-05-07T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-08T08:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2021-05-08T13:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2021-05-09T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwc-2021-zandvoort',
    round: 7,
    name: 'Zandvoort Sprint',
    circuitId: 'circuit-zandvoort',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-06-18T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-19T08:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2021-06-19T13:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2021-06-20T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwc-2021-misano',
    round: 8,
    name: 'Misano Sprint',
    circuitId: 'misano-world-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-07-02T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-03T08:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2021-07-03T13:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2021-07-04T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwc-2021-brands-hatch',
    round: 9,
    name: 'Brands Hatch Sprint',
    circuitId: 'brands-hatch',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-08-28T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-28T10:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2021-08-28T13:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2021-08-29T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwc-2021-valencia',
    round: 10,
    name: 'Valencia Sprint',
    circuitId: 'circuit-ricardo-tormo',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-09-25T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-25T10:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2021-09-25T13:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2021-09-26T12:00:00Z', durationMinutes: 60 },
    ],
  },
]
