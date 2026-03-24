import { RaceEvent } from '@/lib/types'

// Intercontinental GT Challenge 2026 — 5 rounds
// Source: intercontinentalgtchallenge.com — verified March 2026
export const igtc2026: RaceEvent[] = [
  {
    id: 'igtc-2026-bathurst',
    round: 1,
    name: "Meguiar's Bathurst 12 Hour",
    circuit: 'Mount Panorama Circuit',
    country: 'Australia',
    countryCode: 'AU',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-02-12T22:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-02-13T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-02-13T04:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: 'Bathurst 12 Hour', startUtc: '2026-02-14T20:15:00Z', durationMinutes: 720 },
    ],
  },
  {
    id: 'igtc-2026-nurburgring',
    round: 2,
    name: 'ADAC RAVENOL 24h Nürburgring',
    circuit: 'Nurburgring Nordschleife',
    country: 'Germany',
    countryCode: 'DE',
    sessions: [
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-05-14T11:15:00Z', durationMinutes: 120 },
      { type: 'qualifying', label: 'Qualifying 2 (Night)', startUtc: '2026-05-14T18:00:00Z', durationMinutes: 210 },
      { type: 'qualifying', label: 'Top Qualifying 1', startUtc: '2026-05-15T06:50:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Top Qualifying 2', startUtc: '2026-05-15T07:45:00Z', durationMinutes: 35 },
      { type: 'qualifying', label: 'Top Qualifying 3', startUtc: '2026-05-15T11:35:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warmup', startUtc: '2026-05-16T08:00:00Z', durationMinutes: 75 },
      { type: 'endurance', label: '24h Nürburgring', startUtc: '2026-05-16T13:00:00Z', durationMinutes: 1440 },
    ],
  },
  {
    id: 'igtc-2026-spa',
    round: 3,
    name: 'CrowdStrike 24 Hours of Spa',
    circuit: 'Circuit de Spa-Francorchamps',
    country: 'Belgium',
    countryCode: 'BE',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-06-25T09:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-06-25T14:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-26T16:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Super Pole', startUtc: '2026-06-26T18:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: '24 Hours of Spa', startUtc: '2026-06-27T14:30:00Z', durationMinutes: 1440 },
    ],
  },
  {
    id: 'igtc-2026-suzuka',
    round: 4,
    name: 'Suzuka 1000km',
    circuit: 'Suzuka International Racing Course',
    country: 'Japan',
    countryCode: 'JP',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-09-11T01:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-09-11T06:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-12T01:00:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Suzuka 1000km', startUtc: '2026-09-13T01:00:00Z', durationMinutes: 480 },
    ],
  },
  {
    id: 'igtc-2026-indianapolis',
    round: 5,
    name: 'Indianapolis 8 Hour',
    circuit: 'Indianapolis Motor Speedway (Road Course)',
    country: 'United States',
    countryCode: 'US',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-10-08T14:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-10-08T19:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-09T14:00:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Indianapolis 8 Hour', startUtc: '2026-10-10T14:00:00Z', durationMinutes: 480 },
    ],
  },
]
