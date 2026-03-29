import { RaceEvent } from '@/lib/types'

// Intercontinental GT Challenge 2025 — 5 rounds
// Source: intercontinentalgtchallenge.com, en.wikipedia.org/wiki/2025_Intercontinental_GT_Challenge — verified March 2026
export const igtc2025: RaceEvent[] = [
  {
    id: 'igtc-2025-bathurst',
    round: 1,
    name: "Meguiar's Bathurst 12 Hour",
    circuit: 'Mount Panorama Circuit',
    country: 'Australia',
    countryCode: 'AU',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2025-01-31T22:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2025-02-01T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-02-01T04:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: 'Bathurst 12 Hour', startUtc: '2025-02-01T20:15:00Z', durationMinutes: 720 },
    ],
  },
  {
    id: 'igtc-2025-nurburgring',
    round: 2,
    name: 'ADAC RAVENOL 24h Nürburgring',
    circuit: 'Nurburgring Nordschleife',
    country: 'Germany',
    countryCode: 'DE',
    sessions: [
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2025-06-19T11:15:00Z', durationMinutes: 120 },
      { type: 'qualifying', label: 'Qualifying 2 (Night)', startUtc: '2025-06-19T18:00:00Z', durationMinutes: 210 },
      { type: 'qualifying', label: 'Top Qualifying 1', startUtc: '2025-06-20T06:50:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Top Qualifying 2', startUtc: '2025-06-20T07:45:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Top Qualifying 3', startUtc: '2025-06-20T11:35:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warmup', startUtc: '2025-06-21T08:00:00Z', durationMinutes: 75 },
      { type: 'endurance', label: '24h Nürburgring', startUtc: '2025-06-21T13:00:00Z', durationMinutes: 1440 },
    ],
  },
  {
    id: 'igtc-2025-spa',
    round: 3,
    name: 'CrowdStrike 24 Hours of Spa',
    circuit: 'Circuit de Spa-Francorchamps',
    country: 'Belgium',
    countryCode: 'BE',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2025-06-26T09:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2025-06-26T14:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-06-27T16:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Super Pole', startUtc: '2025-06-27T18:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: '24 Hours of Spa', startUtc: '2025-06-28T14:30:00Z', durationMinutes: 1440 },
    ],
  },
  {
    id: 'igtc-2025-suzuka',
    round: 4,
    name: 'Suzuka 1000km',
    circuit: 'Suzuka International Racing Course',
    country: 'Japan',
    countryCode: 'JP',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2025-09-12T01:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2025-09-12T06:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-09-13T01:00:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Suzuka 1000km', startUtc: '2025-09-14T01:00:00Z', durationMinutes: 480 },
    ],
  },
  {
    id: 'igtc-2025-indianapolis',
    round: 5,
    name: 'Indianapolis 8 Hour',
    circuit: 'Indianapolis Motor Speedway (Road Course)',
    country: 'United States',
    countryCode: 'US',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2025-10-16T14:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2025-10-16T19:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-10-17T14:00:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Indianapolis 8 Hour', startUtc: '2025-10-18T14:00:00Z', durationMinutes: 480 },
    ],
  },
]
