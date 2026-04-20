import { RaceEvent } from '@/lib/types'

// Intercontinental GT Challenge 2023 — 5 rounds
// Source: intercontinentalgtchallenge.com, en.wikipedia.org/wiki/2023_Intercontinental_GT_Challenge
export const igtc2023: RaceEvent[] = [
  {
    id: 'igtc-2023-bathurst',
    round: 1,
    name: "Meguiar's Bathurst 12 Hour",
    circuitId: 'mount-panorama-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2023-02-03T00:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2023-02-03T04:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-02-03T23:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: 'Bathurst 12 Hour', startUtc: '2023-02-04T18:45:00Z', durationMinutes: 720 },
    ],
  },
  {
    id: 'igtc-2023-kyalami',
    round: 2,
    name: 'Kyalami 9 Hours',
    circuitId: 'kyalami-grand-prix-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2023-02-23T07:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2023-02-24T07:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-02-24T11:00:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Kyalami 9 Hours', startUtc: '2023-02-25T08:00:00Z', durationMinutes: 540 },
    ],
  },
  {
    id: 'igtc-2023-spa',
    round: 3,
    name: 'CrowdStrike 24 Hours of Spa',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2023-06-29T09:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2023-06-29T14:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-30T16:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Super Pole', startUtc: '2023-06-30T18:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: '24 Hours of Spa', startUtc: '2023-07-01T14:30:00Z', durationMinutes: 1440 },
    ],
  },
  {
    id: 'igtc-2023-indianapolis',
    round: 4,
    name: 'Indianapolis 8 Hour',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2023-10-05T14:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2023-10-06T14:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-10-07T12:00:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Indianapolis 8 Hour', startUtc: '2023-10-07T14:00:00Z', durationMinutes: 480 },
    ],
  },
  {
    id: 'igtc-2023-gulf12h',
    round: 5,
    name: 'Gulf 12 Hours',
    circuitId: 'yas-marina-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2023-12-08T05:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2023-12-08T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-12-08T10:00:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Gulf 12 Hours', startUtc: '2023-12-09T06:00:00Z', durationMinutes: 720 },
    ],
  },
]
