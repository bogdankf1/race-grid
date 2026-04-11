import { RaceEvent } from '@/lib/types'

// GT World Challenge Europe 2026 — 5 Endurance Cup + 5 Sprint Cup rounds
// Source: gt-world-challenge-europe.com, 51gt3.com, Wikipedia
export const gtwc2026: RaceEvent[] = [
  {
    id: 'gtwc-2026-paul-ricard',
    round: 1,
    name: '6 Hours of Paul Ricard',
    circuitId: 'circuit-paul-ricard',
    sessions: [
      { type: 'practice', label: 'Bronze Test', startUtc: '2026-04-10T07:00:00Z', durationMinutes: 120 },
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-04-10T12:25:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-04-10T17:25:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-11T10:05:00Z', durationMinutes: 60 },
      { type: 'endurance', label: '6 Hours of Paul Ricard', startUtc: '2026-04-11T16:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'gtwc-2026-brands-hatch',
    round: 2,
    name: 'Brands Hatch Sprint',
    circuitId: 'brands-hatch',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-05-01T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-02T08:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2026-05-02T13:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2026-05-03T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwc-2026-monza',
    round: 3,
    name: '3 Hours of Monza',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-05-29T08:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2026-05-30T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-30T12:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: '3 Hours of Monza', startUtc: '2026-05-31T11:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'gtwc-2026-spa-24h',
    round: 4,
    name: 'CrowdStrike 24 Hours of Spa',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-06-25T08:00:00Z', durationMinutes: 120 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-06-25T15:00:00Z', durationMinutes: 120 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-26T15:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Super Pole', startUtc: '2026-06-26T19:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: '24 Hours of Spa', startUtc: '2026-06-27T14:30:00Z', durationMinutes: 1440 },
    ],
  },
  {
    id: 'gtwc-2026-misano',
    round: 5,
    name: 'Misano Sprint',
    circuitId: 'misano-world-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-07-17T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-18T08:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2026-07-18T13:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2026-07-19T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwc-2026-magny-cours',
    round: 6,
    name: 'Magny-Cours Sprint',
    circuitId: 'circuit-de-nevers-magny-cours',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-07-31T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-01T08:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2026-08-01T13:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2026-08-02T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwc-2026-nurburgring',
    round: 7,
    name: '3 Hours of Nurburgring',
    circuitId: 'nurburgring',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-08-28T08:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2026-08-29T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-29T12:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: '3 Hours of Nurburgring', startUtc: '2026-08-30T11:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'gtwc-2026-zandvoort',
    round: 8,
    name: 'Zandvoort Sprint',
    circuitId: 'circuit-zandvoort',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-09-18T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-19T08:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2026-09-19T13:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2026-09-20T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwc-2026-barcelona',
    round: 9,
    name: 'Barcelona Sprint',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-10-02T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-03T08:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2026-10-03T13:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2026-10-04T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwc-2026-portimao',
    round: 10,
    name: '3 Hours of Portimao',
    circuitId: 'algarve-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-10-16T08:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2026-10-17T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-17T12:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: '3 Hours of Portimao', startUtc: '2026-10-18T11:00:00Z', durationMinutes: 180 },
    ],
  },
]
