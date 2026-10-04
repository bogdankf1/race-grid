import { RaceEvent } from '@/lib/types'

// WEC 2027 calendar — nine rounds (announced 12 Jun 2026 at Le Mans, approved by the FIA WMSC)
// Source: fiawec.com — Prologue at Lusail 21-22 Mar (test, not listed). Silverstone returns; Qatar is the season opener
// again and Bahrain the finale. Session times are NOT yet published — all sessions are shown as TBA with placeholder
// times based on the equivalent 2026/2025 weekend pattern.
export const wec2027: RaceEvent[] = [
  {
    id: 'wec-2027-qatar',
    round: 1,
    name: 'Qatar 1812km',
    circuitId: 'lusail-international-circuit',
    // Prologue test 21-22 Mar. Placeholder times follow the 2025 Qatar weekend pattern (UTC+3).
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-03-25T08:30:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-03-25T13:50:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 3', startUtc: '2027-03-26T09:00:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-03-26T14:00:00Z', durationMinutes: 30, tba: true },
      { type: 'hyperpole', label: 'Hyperpole', startUtc: '2027-03-26T15:00:00Z', durationMinutes: 15, tba: true },
      { type: 'race', label: '1812km Race', startUtc: '2027-03-27T11:00:00Z', durationMinutes: 720, tba: true },
    ],
  },
  {
    id: 'wec-2027-imola',
    round: 2,
    name: '6 Hours of Imola',
    circuitId: 'autodromo-enzo-e-dino-ferrari',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-04-09T08:15:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-04-09T13:15:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 3', startUtc: '2027-04-10T08:30:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMGT3)', startUtc: '2027-04-10T12:30:00Z', durationMinutes: 12, tba: true },
      { type: 'hyperpole', label: 'Hyperpole (LMGT3)', startUtc: '2027-04-10T12:50:00Z', durationMinutes: 10, tba: true },
      { type: 'qualifying', label: 'Qualifying (Hypercar)', startUtc: '2027-04-10T13:10:00Z', durationMinutes: 12, tba: true },
      { type: 'hyperpole', label: 'Hyperpole (Hypercar)', startUtc: '2027-04-10T13:30:00Z', durationMinutes: 10, tba: true },
      { type: 'race', label: '6 Hours of Imola', startUtc: '2027-04-11T11:00:00Z', durationMinutes: 360, tba: true },
    ],
  },
  {
    id: 'wec-2027-silverstone',
    round: 3,
    name: '6 Hours of Silverstone',
    circuitId: 'silverstone-circuit',
    // Returns to the WEC calendar for the first time since 2019. Placeholder times: typical 6h-race weekend in UK time (BST).
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-04-23T09:15:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-04-23T14:15:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 3', startUtc: '2027-04-24T09:30:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMGT3)', startUtc: '2027-04-24T13:30:00Z', durationMinutes: 12, tba: true },
      { type: 'hyperpole', label: 'Hyperpole (LMGT3)', startUtc: '2027-04-24T13:50:00Z', durationMinutes: 10, tba: true },
      { type: 'qualifying', label: 'Qualifying (Hypercar)', startUtc: '2027-04-24T14:10:00Z', durationMinutes: 12, tba: true },
      { type: 'hyperpole', label: 'Hyperpole (Hypercar)', startUtc: '2027-04-24T14:30:00Z', durationMinutes: 10, tba: true },
      { type: 'race', label: '6 Hours of Silverstone', startUtc: '2027-04-25T11:00:00Z', durationMinutes: 360, tba: true },
    ],
  },
  {
    id: 'wec-2027-spa',
    round: 4,
    name: '6 Hours of Spa',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-05-13T09:00:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-05-13T13:40:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 3', startUtc: '2027-05-14T08:10:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMGT3)', startUtc: '2027-05-14T12:30:00Z', durationMinutes: 12, tba: true },
      { type: 'hyperpole', label: 'Hyperpole (LMGT3)', startUtc: '2027-05-14T12:55:00Z', durationMinutes: 10, tba: true },
      { type: 'qualifying', label: 'Qualifying (Hypercar)', startUtc: '2027-05-14T13:20:00Z', durationMinutes: 12, tba: true },
      { type: 'hyperpole', label: 'Hyperpole (Hypercar)', startUtc: '2027-05-14T13:45:00Z', durationMinutes: 10, tba: true },
      { type: 'race', label: '6 Hours of Spa', startUtc: '2027-05-15T12:00:00Z', durationMinutes: 360, tba: true },
    ],
  },
  {
    id: 'wec-2027-le-mans',
    round: 5,
    name: '24 Hours of Le Mans',
    circuitId: 'circuit-de-la-sarthe',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-06-09T12:00:00Z', durationMinutes: 180, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMP2 & LMGT3)', startUtc: '2027-06-09T16:45:00Z', durationMinutes: 45, tba: true },
      { type: 'qualifying', label: 'Qualifying (Hypercar)', startUtc: '2027-06-09T17:30:00Z', durationMinutes: 30, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-06-09T20:00:00Z', durationMinutes: 120, tba: true },
      { type: 'practice', label: 'Practice 3', startUtc: '2027-06-10T12:45:00Z', durationMinutes: 180, tba: true },
      { type: 'hyperpole', label: 'Hyperpole (LMP2 & LMGT3)', startUtc: '2027-06-10T18:00:00Z', durationMinutes: 65, tba: true },
      { type: 'hyperpole', label: 'Hyperpole (Hypercar)', startUtc: '2027-06-10T19:05:00Z', durationMinutes: 50, tba: true },
      { type: 'practice', label: 'Practice 4', startUtc: '2027-06-10T21:00:00Z', durationMinutes: 120, tba: true },
      { type: 'warmup', label: 'Warmup', startUtc: '2027-06-12T10:00:00Z', durationMinutes: 30, tba: true },
      { type: 'race', label: '24 Hours of Le Mans', startUtc: '2027-06-12T14:00:00Z', durationMinutes: 1440, tba: true },
    ],
  },
  {
    id: 'wec-2027-sao-paulo',
    round: 6,
    name: '6 Hours of Sao Paulo',
    circuitId: 'autodromo-jose-carlos-pace',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-07-09T14:00:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-07-09T18:50:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 3', startUtc: '2027-07-10T13:10:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMGT3)', startUtc: '2027-07-10T17:30:00Z', durationMinutes: 12, tba: true },
      { type: 'hyperpole', label: 'Hyperpole (LMGT3)', startUtc: '2027-07-10T17:50:00Z', durationMinutes: 10, tba: true },
      { type: 'qualifying', label: 'Qualifying (Hypercar)', startUtc: '2027-07-10T18:10:00Z', durationMinutes: 12, tba: true },
      { type: 'hyperpole', label: 'Hyperpole (Hypercar)', startUtc: '2027-07-10T18:30:00Z', durationMinutes: 10, tba: true },
      { type: 'race', label: '6 Hours of Sao Paulo', startUtc: '2027-07-11T14:30:00Z', durationMinutes: 360, tba: true },
    ],
  },
  {
    id: 'wec-2027-cota',
    round: 7,
    name: 'Lone Star Le Mans',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-09-10T16:30:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-09-10T21:00:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 3', startUtc: '2027-09-11T16:00:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMGT3)', startUtc: '2027-09-11T20:00:00Z', durationMinutes: 12, tba: true },
      { type: 'hyperpole', label: 'Hyperpole (LMGT3)', startUtc: '2027-09-11T20:20:00Z', durationMinutes: 10, tba: true },
      { type: 'qualifying', label: 'Qualifying (Hypercar)', startUtc: '2027-09-11T20:40:00Z', durationMinutes: 12, tba: true },
      { type: 'hyperpole', label: 'Hyperpole (Hypercar)', startUtc: '2027-09-11T21:00:00Z', durationMinutes: 10, tba: true },
      { type: 'race', label: 'Lone Star Le Mans', startUtc: '2027-09-12T18:00:00Z', durationMinutes: 360, tba: true },
    ],
  },
  {
    id: 'wec-2027-fuji',
    round: 8,
    name: '6 Hours of Fuji',
    circuitId: 'fuji-speedway',
    // Placeholder times follow the 2025 Fuji weekend pattern (JST).
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-09-24T00:00:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-09-24T05:00:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-09-25T02:00:00Z', durationMinutes: 30, tba: true },
      { type: 'hyperpole', label: 'Hyperpole', startUtc: '2027-09-25T03:00:00Z', durationMinutes: 15, tba: true },
      { type: 'race', label: '6 Hours of Fuji', startUtc: '2027-09-26T02:00:00Z', durationMinutes: 360, tba: true },
    ],
  },
  {
    id: 'wec-2027-bahrain',
    round: 9,
    name: '8 Hours of Bahrain',
    circuitId: 'bahrain-international-circuit',
    // Placeholder times follow the 2025 Bahrain weekend pattern (UTC+3).
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-11-04T08:00:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-11-04T13:00:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-11-05T10:00:00Z', durationMinutes: 30, tba: true },
      { type: 'hyperpole', label: 'Hyperpole', startUtc: '2027-11-05T11:00:00Z', durationMinutes: 15, tba: true },
      { type: 'race', label: '8 Hours of Bahrain', startUtc: '2027-11-06T11:00:00Z', durationMinutes: 480, tba: true },
    ],
  },
]
