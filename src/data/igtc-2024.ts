import { RaceEvent } from '@/lib/types'

// Intercontinental GT Challenge 2024 — 4 rounds
// Source: intercontinentalgtchallenge.com, en.wikipedia.org/wiki/2024_Intercontinental_GT_Challenge
export const igtc2024: RaceEvent[] = [
  {
    id: 'igtc-2024-bathurst',
    round: 1,
    name: "Meguiar's Bathurst 12 Hour",
    circuitId: 'mount-panorama-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2024-02-16T00:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2024-02-16T04:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-02-16T23:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: 'Bathurst 12 Hour', startUtc: '2024-02-17T18:45:00Z', durationMinutes: 720 },
    ],
  },
  {
    id: 'igtc-2024-nurburgring',
    round: 2,
    name: 'ADAC RAVENOL 24h Nürburgring',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-05-30T08:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2024-05-30T14:00:00Z', durationMinutes: 120 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2024-05-31T06:50:00Z', durationMinutes: 60 },
      { type: 'endurance', label: '24h Nürburgring', startUtc: '2024-06-01T13:30:00Z', durationMinutes: 1440 },
    ],
  },
  {
    id: 'igtc-2024-spa',
    round: 3,
    name: 'CrowdStrike 24 Hours of Spa',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2024-06-27T09:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2024-06-27T14:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-28T16:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Super Pole', startUtc: '2024-06-28T18:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: '24 Hours of Spa', startUtc: '2024-06-29T14:30:00Z', durationMinutes: 1440 },
    ],
  },
  {
    id: 'igtc-2024-indianapolis',
    round: 4,
    name: 'Indianapolis 8 Hour',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2024-10-04T14:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2024-10-04T19:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-10-05T12:00:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Indianapolis 8 Hour', startUtc: '2024-10-05T14:00:00Z', durationMinutes: 480 },
    ],
  },
]
