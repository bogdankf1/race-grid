import { RaceEvent } from '@/lib/types'

// WEC 2022 calendar — 6 rounds
// Source: fiawec.com, Wikipedia, motorsport.com
// Sebring EDT=UTC-4, Spa/Le Mans/Monza CEST=UTC+2, Fuji JST=UTC+9, Bahrain AST=UTC+3
export const wec2022: RaceEvent[] = [
  {
    id: 'wec-2022-sebring',
    round: 1,
    name: '1000 Miles of Sebring',
    circuitId: 'sebring-international-raceway',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-03-16T14:55:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2022-03-16T20:35:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 3', startUtc: '2022-03-17T15:55:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-03-17T23:00:00Z', durationMinutes: 30 },
      { type: 'race', label: '1000 Miles of Sebring', startUtc: '2022-03-18T16:00:00Z', durationMinutes: 480 },
    ],
  },
  {
    id: 'wec-2022-spa',
    round: 2,
    name: '6 Hours of Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-05-05T09:30:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2022-05-05T14:20:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 3', startUtc: '2022-05-06T09:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-06T15:45:00Z', durationMinutes: 30 },
      { type: 'race', label: '6 Hours of Spa', startUtc: '2022-05-07T10:30:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wec-2022-le-mans',
    round: 3,
    name: '24 Hours of Le Mans',
    circuitId: 'circuit-de-la-sarthe',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-06-08T12:00:00Z', durationMinutes: 180 },
      { type: 'practice', label: 'Practice 2', startUtc: '2022-06-08T20:00:00Z', durationMinutes: 120 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-09T17:00:00Z', durationMinutes: 60 },
      { type: 'hyperpole', label: 'Hyperpole', startUtc: '2022-06-09T18:30:00Z', durationMinutes: 30 },
      { type: 'warmup', label: 'Warmup', startUtc: '2022-06-11T10:00:00Z', durationMinutes: 15 },
      { type: 'race', label: '24 Hours of Le Mans', startUtc: '2022-06-11T14:00:00Z', durationMinutes: 1440 },
    ],
  },
  {
    id: 'wec-2022-monza',
    round: 4,
    name: '6 Hours of Monza',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-07-08T09:30:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2022-07-08T14:30:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 3', startUtc: '2022-07-09T08:45:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-09T13:30:00Z', durationMinutes: 30 },
      { type: 'race', label: '6 Hours of Monza', startUtc: '2022-07-10T10:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wec-2022-fuji',
    round: 5,
    name: '6 Hours of Fuji',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-09-09T02:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2022-09-09T06:30:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 3', startUtc: '2022-09-10T01:20:00Z', durationMinutes: 40 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-10T06:30:00Z', durationMinutes: 30 },
      { type: 'race', label: '6 Hours of Fuji', startUtc: '2022-09-11T02:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wec-2022-bahrain',
    round: 6,
    name: '8 Hours of Bahrain',
    circuitId: 'bahrain-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-11-10T09:15:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2022-11-10T14:30:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 3', startUtc: '2022-11-11T09:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-11-11T14:00:00Z', durationMinutes: 30 },
      { type: 'race', label: '8 Hours of Bahrain', startUtc: '2022-11-12T11:00:00Z', durationMinutes: 480 },
    ],
  },
]
