import { RaceEvent } from '@/lib/types'

// WEC 2021 calendar — 6 rounds
// Source: fiawec.com, Wikipedia
// Spa CEST=UTC+2, Portimao WEST=UTC+1, Monza CEST=UTC+2, Le Mans (Aug) CEST=UTC+2, Bahrain AST=UTC+3
// Note: Le Mans moved to August due to COVID. Fuji cancelled, replaced by Bahrain double-header.
export const wec2021: RaceEvent[] = [
  {
    id: 'wec-2021-spa',
    round: 1,
    name: '6 Hours of Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-04-29T09:30:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2021-04-29T14:20:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 3', startUtc: '2021-04-30T09:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-04-30T15:45:00Z', durationMinutes: 30 },
      { type: 'race', label: '6 Hours of Spa', startUtc: '2021-05-01T10:30:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wec-2021-portimao',
    round: 2,
    name: '8 Hours of Portimao',
    circuitId: 'algarve-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-06-11T09:30:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2021-06-11T14:30:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 3', startUtc: '2021-06-12T10:15:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-12T15:00:00Z', durationMinutes: 30 },
      { type: 'race', label: '8 Hours of Portimao', startUtc: '2021-06-13T10:00:00Z', durationMinutes: 480 },
    ],
  },
  {
    id: 'wec-2021-monza',
    round: 3,
    name: '6 Hours of Monza',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-07-16T09:30:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2021-07-16T14:30:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 3', startUtc: '2021-07-17T08:45:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-17T13:30:00Z', durationMinutes: 30 },
      { type: 'race', label: '6 Hours of Monza', startUtc: '2021-07-18T10:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wec-2021-le-mans',
    round: 4,
    name: '24 Hours of Le Mans',
    circuitId: 'circuit-de-la-sarthe',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-08-18T12:00:00Z', durationMinutes: 180 },
      { type: 'practice', label: 'Practice 2', startUtc: '2021-08-18T20:00:00Z', durationMinutes: 120 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-19T17:00:00Z', durationMinutes: 60 },
      { type: 'hyperpole', label: 'Hyperpole', startUtc: '2021-08-19T18:30:00Z', durationMinutes: 30 },
      { type: 'warmup', label: 'Warmup', startUtc: '2021-08-21T10:00:00Z', durationMinutes: 15 },
      { type: 'race', label: '24 Hours of Le Mans', startUtc: '2021-08-21T14:00:00Z', durationMinutes: 1440 },
    ],
  },
  {
    id: 'wec-2021-bahrain-6h',
    round: 5,
    name: '6 Hours of Bahrain',
    circuitId: 'bahrain-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-10-28T09:15:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2021-10-28T14:30:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 3', startUtc: '2021-10-29T09:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-29T14:00:00Z', durationMinutes: 30 },
      { type: 'race', label: '6 Hours of Bahrain', startUtc: '2021-10-30T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wec-2021-bahrain-8h',
    round: 6,
    name: '8 Hours of Bahrain',
    circuitId: 'bahrain-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-11-04T09:15:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2021-11-04T14:30:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 3', startUtc: '2021-11-05T09:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-11-05T14:00:00Z', durationMinutes: 30 },
      { type: 'race', label: '8 Hours of Bahrain', startUtc: '2021-11-06T11:00:00Z', durationMinutes: 480 },
    ],
  },
]
