import { RaceEvent } from '@/lib/types'

// Intercontinental GT Challenge 2021 — 3 rounds
// Source: intercontinentalgtchallenge.com, en.wikipedia.org/wiki/2021_Intercontinental_GT_Challenge
// Note: Kyalami round was postponed from Dec 2021 to Feb 2022 but counted for the 2021 season
export const igtc2021: RaceEvent[] = [
  {
    id: 'igtc-2021-spa',
    round: 1,
    name: 'CrowdStrike 24 Hours of Spa',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-07-29T09:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2021-07-29T14:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-30T16:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Super Pole', startUtc: '2021-07-30T18:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: '24 Hours of Spa', startUtc: '2021-07-31T14:30:00Z', durationMinutes: 1440 },
    ],
  },
  {
    id: 'igtc-2021-indianapolis',
    round: 2,
    name: 'Indianapolis 8 Hour',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-10-15T14:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2021-10-15T19:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-16T12:00:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Indianapolis 8 Hour', startUtc: '2021-10-16T14:00:00Z', durationMinutes: 480 },
    ],
  },
  {
    id: 'igtc-2021-kyalami',
    round: 3,
    name: 'Kyalami 9 Hours',
    circuitId: 'kyalami-grand-prix-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-02-03T07:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2022-02-04T07:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-02-04T11:00:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Kyalami 9 Hours', startUtc: '2022-02-05T08:00:00Z', durationMinutes: 540 },
    ],
  },
]
