import { RaceEvent } from '@/lib/types'

// Intercontinental GT Challenge 2026 season calendar
// Source: igtchallenge.com — provisional 2026 schedule
export const igtc2026: RaceEvent[] = [
  {
    id: 'igtc-2026-bathurst',
    round: 1,
    name: 'Bathurst 12 Hour',
    circuit: 'Mount Panorama Circuit',
    country: 'Australia',
    countryCode: 'AU',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-01-30T21:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-01-31T00:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-01-31T02:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: 'Bathurst 12 Hour', startUtc: '2026-02-01T19:45:00Z', durationMinutes: 720 },
    ],
  },
  {
    id: 'igtc-2026-suzuka',
    round: 2,
    name: 'Suzuka 10 Hours',
    circuit: 'Suzuka International Racing Course',
    country: 'Japan',
    countryCode: 'JP',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-05-22T01:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-05-22T06:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-23T01:00:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Suzuka 10 Hours', startUtc: '2026-05-24T00:00:00Z', durationMinutes: 600 },
    ],
  },
  {
    id: 'igtc-2026-spa',
    round: 3,
    name: 'TotalEnergies 24 Hours of Spa',
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
    id: 'igtc-2026-indianapolis',
    round: 4,
    name: 'Indianapolis 8 Hour',
    circuit: 'Indianapolis Motor Speedway (Road Course)',
    country: 'United States',
    countryCode: 'US',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-10-02T14:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-10-02T19:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-03T14:00:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Indianapolis 8 Hour', startUtc: '2026-10-04T14:00:00Z', durationMinutes: 480 },
    ],
  },
]
