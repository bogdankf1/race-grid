import { RaceEvent } from '@/lib/types'

// 24H Series 2025 — 5 European rounds
// Source: 24hseries.com, Wikipedia — verified May 2026
export const twentyfourh2025: RaceEvent[] = [
  {
    id: '24h-2025-mugello',
    round: 1,
    name: '12H Mugello',
    circuitId: 'autodromo-del-mugello',
    sessions: [
      // CET (UTC+1)
      { type: 'practice', label: 'Free Practice', startUtc: '2025-03-21T08:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-03-21T13:00:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2025-03-22T06:00:00Z', durationMinutes: 360 },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2025-03-23T06:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: '24h-2025-spa',
    round: 2,
    name: '12H Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      // CEST (UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2025-04-18T07:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-04-18T12:00:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2025-04-19T07:30:00Z', durationMinutes: 360 },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2025-04-20T07:30:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: '24h-2025-misano',
    round: 3,
    name: '12H Misano',
    circuitId: 'misano-world-circuit',
    sessions: [
      // CEST (UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2025-05-23T07:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-23T12:00:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2025-05-24T07:30:00Z', durationMinutes: 360 },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2025-05-24T14:30:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: '24h-2025-paul-ricard',
    round: 4,
    name: '12H Paul Ricard',
    circuitId: 'circuit-paul-ricard',
    sessions: [
      // CEST (UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2025-07-05T07:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-05T12:00:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2025-07-06T07:30:00Z', durationMinutes: 360 },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2025-07-07T07:30:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: '24h-2025-barcelona',
    round: 5,
    name: '24H Barcelona',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      // CEST (UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2025-09-26T07:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-09-26T12:00:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2025-09-27T07:30:00Z', durationMinutes: 720 },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2025-09-28T07:30:00Z', durationMinutes: 720 },
    ],
  },
]
