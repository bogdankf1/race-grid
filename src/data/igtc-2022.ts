import { RaceEvent } from '@/lib/types'

// Intercontinental GT Challenge 2022 — 4 rounds
// Source: intercontinentalgtchallenge.com, en.wikipedia.org/wiki/2022_Intercontinental_GT_Challenge
export const igtc2022: RaceEvent[] = [
  {
    id: 'igtc-2022-bathurst',
    round: 1,
    name: "Meguiar's Bathurst 12 Hour",
    circuitId: 'mount-panorama-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-05-13T00:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2022-05-13T04:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-13T23:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: 'Bathurst 12 Hour', startUtc: '2022-05-14T18:45:00Z', durationMinutes: 720 },
    ],
  },
  {
    id: 'igtc-2022-spa',
    round: 2,
    name: 'CrowdStrike 24 Hours of Spa',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-07-28T09:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2022-07-28T14:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-29T16:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Super Pole', startUtc: '2022-07-29T18:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: '24 Hours of Spa', startUtc: '2022-07-30T14:30:00Z', durationMinutes: 1440 },
    ],
  },
  {
    id: 'igtc-2022-indianapolis',
    round: 3,
    name: 'Indianapolis 8 Hour',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-10-06T14:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2022-10-07T14:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-08T12:00:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Indianapolis 8 Hour', startUtc: '2022-10-08T14:00:00Z', durationMinutes: 480 },
    ],
  },
  {
    id: 'igtc-2022-gulf12h',
    round: 4,
    name: 'Gulf 12 Hours',
    circuitId: 'yas-marina-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-12-09T05:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2022-12-09T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-12-09T10:00:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Gulf 12 Hours', startUtc: '2022-12-10T06:00:00Z', durationMinutes: 720 },
    ],
  },
]
