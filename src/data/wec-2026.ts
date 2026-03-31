import { RaceEvent } from '@/lib/types'

// WEC 2026 calendar — revised: Qatar moved to October, Imola is the opener
// Source: fiawec.com revised calendar announcement
export const wec2026: RaceEvent[] = [
  {
    id: 'wec-2026-imola',
    round: 1,
    name: '6 Hours of Imola',
    circuitId: 'autodromo-enzo-e-dino-ferrari',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-04-17T08:30:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-04-17T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-18T09:30:00Z', durationMinutes: 30 },
      { type: 'hyperpole', label: 'Hyperpole', startUtc: '2026-04-18T10:30:00Z', durationMinutes: 15 },
      { type: 'race', label: '6 Hours of Imola', startUtc: '2026-04-19T10:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wec-2026-spa',
    round: 2,
    name: '6 Hours of Spa',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-05-07T09:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-05-07T14:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-08T10:00:00Z', durationMinutes: 30 },
      { type: 'hyperpole', label: 'Hyperpole', startUtc: '2026-05-08T11:00:00Z', durationMinutes: 15 },
      { type: 'race', label: '6 Hours of Spa', startUtc: '2026-05-09T10:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wec-2026-le-mans',
    round: 3,
    name: '24 Hours of Le Mans',
    circuitId: 'circuit-de-la-sarthe',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-06-10T12:00:00Z', durationMinutes: 180 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-11T19:00:00Z', durationMinutes: 60 },
      { type: 'hyperpole', label: 'Hyperpole', startUtc: '2026-06-11T20:30:00Z', durationMinutes: 30 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-06-11T22:00:00Z', durationMinutes: 120 },
      { type: 'warmup', label: 'Warmup', startUtc: '2026-06-13T09:00:00Z', durationMinutes: 15 },
      { type: 'race', label: '24 Hours of Le Mans', startUtc: '2026-06-13T14:00:00Z', durationMinutes: 1440 },
    ],
  },
  {
    id: 'wec-2026-sao-paulo',
    round: 4,
    name: '6 Hours of Sao Paulo',
    circuitId: 'autodromo-jose-carlos-pace',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-07-10T13:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-07-10T18:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-11T14:00:00Z', durationMinutes: 30 },
      { type: 'hyperpole', label: 'Hyperpole', startUtc: '2026-07-11T15:00:00Z', durationMinutes: 15 },
      { type: 'race', label: '6 Hours of Sao Paulo', startUtc: '2026-07-12T14:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wec-2026-cota',
    round: 5,
    name: 'Lone Star Le Mans',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-09-04T15:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-09-04T20:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-05T16:00:00Z', durationMinutes: 30 },
      { type: 'hyperpole', label: 'Hyperpole', startUtc: '2026-09-05T17:00:00Z', durationMinutes: 15 },
      { type: 'race', label: 'Lone Star Le Mans', startUtc: '2026-09-06T16:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wec-2026-fuji',
    round: 6,
    name: '6 Hours of Fuji',
    circuitId: 'fuji-speedway',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-09-25T00:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-09-25T05:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-26T02:00:00Z', durationMinutes: 30 },
      { type: 'hyperpole', label: 'Hyperpole', startUtc: '2026-09-26T03:00:00Z', durationMinutes: 15 },
      { type: 'race', label: '6 Hours of Fuji', startUtc: '2026-09-27T02:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wec-2026-qatar',
    round: 7,
    name: '1812km of Qatar',
    circuitId: 'lusail-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-10-22T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-10-22T13:30:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-23T10:00:00Z', durationMinutes: 30 },
      { type: 'hyperpole', label: 'Hyperpole', startUtc: '2026-10-23T11:15:00Z', durationMinutes: 15 },
      { type: 'race', label: '1812km Race', startUtc: '2026-10-24T11:00:00Z', durationMinutes: 720 },
    ],
  },
  {
    id: 'wec-2026-bahrain',
    round: 8,
    name: '8 Hours of Bahrain',
    circuitId: 'bahrain-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-11-05T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-11-05T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-11-06T10:00:00Z', durationMinutes: 30 },
      { type: 'hyperpole', label: 'Hyperpole', startUtc: '2026-11-06T11:00:00Z', durationMinutes: 15 },
      { type: 'race', label: '8 Hours of Bahrain', startUtc: '2026-11-07T10:00:00Z', durationMinutes: 480 },
    ],
  },
]
