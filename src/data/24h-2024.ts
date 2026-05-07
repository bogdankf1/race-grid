import { RaceEvent } from '@/lib/types'

// 24H Series 2024 — 5 European rounds
// Source: 24hseries.com, Wikipedia — verified May 2026
export const twentyfourh2024: RaceEvent[] = [
  {
    id: '24h-2024-mugello',
    round: 1,
    name: '12H Mugello',
    circuitId: 'autodromo-del-mugello',
    sessions: [
      // CET (UTC+1)
      { type: 'practice', label: 'Free Practice', startUtc: '2024-03-23T08:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-23T13:00:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2024-03-24T06:00:00Z', durationMinutes: 360 },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2024-03-24T13:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: '24h-2024-spa',
    round: 2,
    name: '12H Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      // CEST (UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2024-04-20T07:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-20T12:00:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2024-04-21T07:30:00Z', durationMinutes: 360 },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2024-04-21T14:30:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: '24h-2024-portimao',
    round: 3,
    name: '24H Portimão',
    circuitId: 'algarve-international-circuit',
    sessions: [
      // WEST (UTC+1) — Portugal
      { type: 'practice', label: 'Free Practice', startUtc: '2024-05-10T08:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-10T13:00:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2024-05-11T08:30:00Z', durationMinutes: 720 },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2024-05-12T08:30:00Z', durationMinutes: 720 },
    ],
  },
  {
    id: '24h-2024-misano',
    round: 4,
    name: '12H Misano',
    circuitId: 'misano-world-circuit',
    sessions: [
      // CEST (UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2024-07-06T07:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-06T12:00:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2024-07-07T07:30:00Z', durationMinutes: 360 },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2024-07-07T14:30:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: '24h-2024-barcelona',
    round: 5,
    name: '24H Barcelona',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      // CEST (UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2024-09-13T07:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-13T12:00:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2024-09-14T07:30:00Z', durationMinutes: 720 },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2024-09-15T07:30:00Z', durationMinutes: 720 },
    ],
  },
]
