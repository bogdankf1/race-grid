import { RaceEvent } from '@/lib/types'

// WEC 2023 calendar — 7 rounds
// Source: fiawec.com, Wikipedia
// Sebring EDT=UTC-4, Portimao WEST=UTC+1, Spa/Le Mans/Monza CEST=UTC+2, Fuji JST=UTC+9, Bahrain AST=UTC+3
export const wec2023: RaceEvent[] = [
  {
    id: 'wec-2023-sebring',
    round: 1,
    name: '1000 Miles of Sebring',
    circuitId: 'sebring-international-raceway',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2023-03-15T14:55:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2023-03-15T20:35:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 3', startUtc: '2023-03-16T15:55:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-03-16T23:20:00Z', durationMinutes: 20 },
      { type: 'race', label: '1000 Miles of Sebring', startUtc: '2023-03-17T16:00:00Z', durationMinutes: 480 },
    ],
  },
  {
    id: 'wec-2023-portimao',
    round: 2,
    name: '6 Hours of Portimao',
    circuitId: 'algarve-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2023-04-14T09:30:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2023-04-14T14:30:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 3', startUtc: '2023-04-15T10:15:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-15T15:20:00Z', durationMinutes: 20 },
      { type: 'race', label: '6 Hours of Portimao', startUtc: '2023-04-16T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wec-2023-spa',
    round: 3,
    name: '6 Hours of Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2023-04-27T09:30:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2023-04-27T14:20:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 3', startUtc: '2023-04-28T09:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-28T15:50:00Z', durationMinutes: 20 },
      { type: 'race', label: '6 Hours of Spa', startUtc: '2023-04-29T10:45:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wec-2023-le-mans',
    round: 4,
    name: '24 Hours of Le Mans',
    circuitId: 'circuit-de-la-sarthe',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2023-06-07T12:00:00Z', durationMinutes: 180 },
      { type: 'practice', label: 'Practice 2', startUtc: '2023-06-07T20:00:00Z', durationMinutes: 120 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-08T17:00:00Z', durationMinutes: 60 },
      { type: 'hyperpole', label: 'Hyperpole', startUtc: '2023-06-08T18:30:00Z', durationMinutes: 30 },
      { type: 'warmup', label: 'Warmup', startUtc: '2023-06-10T10:00:00Z', durationMinutes: 15 },
      { type: 'race', label: '24 Hours of Le Mans', startUtc: '2023-06-10T14:00:00Z', durationMinutes: 1440 },
    ],
  },
  {
    id: 'wec-2023-monza',
    round: 5,
    name: '6 Hours of Monza',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2023-07-07T09:30:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2023-07-07T14:40:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 3', startUtc: '2023-07-08T08:45:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-08T13:30:00Z', durationMinutes: 20 },
      { type: 'race', label: '6 Hours of Monza', startUtc: '2023-07-09T10:30:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wec-2023-fuji',
    round: 6,
    name: '6 Hours of Fuji',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2023-09-08T02:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2023-09-08T06:30:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 3', startUtc: '2023-09-09T01:20:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-09T06:30:00Z', durationMinutes: 20 },
      { type: 'race', label: '6 Hours of Fuji', startUtc: '2023-09-10T02:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wec-2023-bahrain',
    round: 7,
    name: '8 Hours of Bahrain',
    circuitId: 'bahrain-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2023-11-02T09:15:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2023-11-02T14:30:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 3', startUtc: '2023-11-03T09:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-11-03T14:05:00Z', durationMinutes: 20 },
      { type: 'race', label: '8 Hours of Bahrain', startUtc: '2023-11-04T11:00:00Z', durationMinutes: 480 },
    ],
  },
]
