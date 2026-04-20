import { RaceEvent } from '@/lib/types'

// GT World Challenge Europe 2022 — 5 Endurance Cup + 5 Sprint Cup rounds
export const gtwc2022: RaceEvent[] = [
  // --- Endurance Cup ---
  {
    id: 'gtwc-2022-imola',
    round: 1,
    name: '3 Hours of Imola',
    circuitId: 'autodromo-enzo-e-dino-ferrari',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-04-01T08:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2022-04-02T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-02T12:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: '3 Hours of Imola', startUtc: '2022-04-03T11:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'gtwc-2022-paul-ricard',
    round: 2,
    name: 'Paul Ricard 1000km',
    circuitId: 'circuit-paul-ricard',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-06-03T08:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2022-06-04T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-04T12:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: 'Paul Ricard 1000km', startUtc: '2022-06-05T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'gtwc-2022-spa-24h',
    round: 3,
    name: '24 Hours of Spa',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-07-28T08:00:00Z', durationMinutes: 120 },
      { type: 'practice', label: 'Practice 2', startUtc: '2022-07-28T15:00:00Z', durationMinutes: 120 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-29T15:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Super Pole', startUtc: '2022-07-29T19:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: '24 Hours of Spa', startUtc: '2022-07-30T14:30:00Z', durationMinutes: 1440 },
    ],
  },
  {
    id: 'gtwc-2022-hockenheim',
    round: 4,
    name: '3 Hours of Hockenheim',
    circuitId: 'hockenheimring',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-09-02T08:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2022-09-03T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-03T12:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: '3 Hours of Hockenheim', startUtc: '2022-09-04T11:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'gtwc-2022-barcelona',
    round: 5,
    name: '3 Hours of Barcelona',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-09-30T08:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2022-10-01T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-01T12:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: '3 Hours of Barcelona', startUtc: '2022-10-02T11:00:00Z', durationMinutes: 180 },
    ],
  },
  // --- Sprint Cup ---
  {
    id: 'gtwc-2022-brands-hatch',
    round: 6,
    name: 'Brands Hatch Sprint',
    circuitId: 'brands-hatch',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-04-30T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-30T10:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2022-04-30T13:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2022-05-01T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwc-2022-magny-cours',
    round: 7,
    name: 'Magny-Cours Sprint',
    circuitId: 'circuit-de-nevers-magny-cours',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-05-13T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-14T08:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2022-05-14T13:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2022-05-15T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwc-2022-zandvoort',
    round: 8,
    name: 'Zandvoort Sprint',
    circuitId: 'circuit-zandvoort',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-06-17T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-18T08:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2022-06-18T13:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2022-06-19T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwc-2022-misano',
    round: 9,
    name: 'Misano Sprint',
    circuitId: 'misano-world-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-07-01T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-02T08:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2022-07-02T13:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2022-07-03T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwc-2022-valencia',
    round: 10,
    name: 'Valencia Sprint',
    circuitId: 'circuit-ricardo-tormo',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-09-16T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-17T08:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2022-09-17T13:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2022-09-18T12:00:00Z', durationMinutes: 60 },
    ],
  },
]
