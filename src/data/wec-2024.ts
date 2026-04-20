import { RaceEvent } from '@/lib/types'

// WEC 2024 calendar — 8 rounds
// Source: fiawec.com official 2024 calendar, Wikipedia
// Qatar AST=UTC+3, Imola/Spa/Le Mans CEST=UTC+2, Sao Paulo BRT=UTC-3, COTA CDT=UTC-5, Fuji JST=UTC+9, Bahrain AST=UTC+3
export const wec2024: RaceEvent[] = [
  {
    id: 'wec-2024-qatar',
    round: 1,
    name: 'Qatar 1812 km',
    circuitId: 'lusail-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2024-02-29T09:20:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2024-02-29T14:30:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 3', startUtc: '2024-03-01T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-01T13:20:00Z', durationMinutes: 20 },
      { type: 'hyperpole', label: 'Hyperpole', startUtc: '2024-03-01T13:58:00Z', durationMinutes: 10 },
      { type: 'race', label: 'Qatar 1812 km', startUtc: '2024-03-02T08:00:00Z', durationMinutes: 600 },
    ],
  },
  {
    id: 'wec-2024-imola',
    round: 2,
    name: '6 Hours of Imola',
    circuitId: 'autodromo-enzo-e-dino-ferrari',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2024-04-19T10:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2024-04-19T15:15:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 3', startUtc: '2024-04-20T09:10:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-20T13:25:00Z', durationMinutes: 20 },
      { type: 'hyperpole', label: 'Hyperpole', startUtc: '2024-04-20T13:45:00Z', durationMinutes: 10 },
      { type: 'race', label: '6 Hours of Imola', startUtc: '2024-04-21T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wec-2024-spa',
    round: 3,
    name: '6 Hours of Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2024-05-09T09:30:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2024-05-09T15:30:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 3', startUtc: '2024-05-10T09:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-10T13:30:00Z', durationMinutes: 20 },
      { type: 'hyperpole', label: 'Hyperpole', startUtc: '2024-05-10T13:53:00Z', durationMinutes: 10 },
      { type: 'race', label: '6 Hours of Spa', startUtc: '2024-05-11T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wec-2024-le-mans',
    round: 4,
    name: '24 Hours of Le Mans',
    circuitId: 'circuit-de-la-sarthe',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2024-06-12T12:00:00Z', durationMinutes: 180 },
      { type: 'practice', label: 'Practice 2', startUtc: '2024-06-12T20:00:00Z', durationMinutes: 120 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-13T17:30:00Z', durationMinutes: 30 },
      { type: 'hyperpole', label: 'Hyperpole', startUtc: '2024-06-13T18:00:00Z', durationMinutes: 30 },
      { type: 'warmup', label: 'Warmup', startUtc: '2024-06-15T10:00:00Z', durationMinutes: 15 },
      { type: 'race', label: '24 Hours of Le Mans', startUtc: '2024-06-15T14:00:00Z', durationMinutes: 1440 },
    ],
  },
  {
    id: 'wec-2024-sao-paulo',
    round: 5,
    name: '6 Hours of Sao Paulo',
    circuitId: 'autodromo-jose-carlos-pace',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2024-07-12T13:45:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2024-07-12T17:30:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 3', startUtc: '2024-07-13T13:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-13T18:10:00Z', durationMinutes: 20 },
      { type: 'hyperpole', label: 'Hyperpole', startUtc: '2024-07-13T18:30:00Z', durationMinutes: 10 },
      { type: 'race', label: '6 Hours of Sao Paulo', startUtc: '2024-07-14T14:30:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wec-2024-cota',
    round: 6,
    name: 'Lone Star Le Mans',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2024-08-30T17:40:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2024-08-30T22:10:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 3', startUtc: '2024-08-31T16:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-31T20:40:00Z', durationMinutes: 20 },
      { type: 'hyperpole', label: 'Hyperpole', startUtc: '2024-08-31T21:00:00Z', durationMinutes: 10 },
      { type: 'race', label: 'Lone Star Le Mans', startUtc: '2024-09-01T18:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wec-2024-fuji',
    round: 7,
    name: '6 Hours of Fuji',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2024-09-13T02:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2024-09-13T06:30:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 3', startUtc: '2024-09-14T01:20:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-14T06:00:00Z', durationMinutes: 20 },
      { type: 'hyperpole', label: 'Hyperpole', startUtc: '2024-09-14T06:20:00Z', durationMinutes: 10 },
      { type: 'race', label: '6 Hours of Fuji', startUtc: '2024-09-15T02:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wec-2024-bahrain',
    round: 8,
    name: '8 Hours of Bahrain',
    circuitId: 'bahrain-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2024-10-31T09:15:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2024-10-31T14:30:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 3', startUtc: '2024-11-01T09:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-11-01T13:40:00Z', durationMinutes: 20 },
      { type: 'hyperpole', label: 'Hyperpole', startUtc: '2024-11-01T14:00:00Z', durationMinutes: 10 },
      { type: 'race', label: '8 Hours of Bahrain', startUtc: '2024-11-02T11:00:00Z', durationMinutes: 480 },
    ],
  },
]
