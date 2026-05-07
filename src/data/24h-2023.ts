import { RaceEvent } from '@/lib/types'

// 24H Series 2023 — 5 European rounds
// Source: 24hseries.com, Wikipedia — verified May 2026
export const twentyfourh2023: RaceEvent[] = [
  {
    id: '24h-2023-mugello',
    round: 1,
    name: '12H Mugello',
    circuitId: 'autodromo-del-mugello',
    sessions: [
      // CET (UTC+1) — DST transition weekend, use CET
      { type: 'practice', label: 'Free Practice', startUtc: '2023-03-25T08:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-03-25T13:00:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2023-03-26T06:00:00Z', durationMinutes: 360 },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2023-03-26T13:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: '24h-2023-spa',
    round: 2,
    name: '12H Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      // CEST (UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2023-05-06T07:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-05-06T12:00:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2023-05-07T07:30:00Z', durationMinutes: 360 },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2023-05-07T14:30:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: '24h-2023-monza',
    round: 3,
    name: '12H Monza',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      // CEST (UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2023-06-10T07:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-10T12:00:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2023-06-11T07:30:00Z', durationMinutes: 360 },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2023-06-11T14:30:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: '24h-2023-estoril',
    round: 4,
    name: '12H Estoril',
    circuitId: 'circuito-do-estoril',
    sessions: [
      // WEST (UTC+1) — Portugal
      { type: 'practice', label: 'Free Practice', startUtc: '2023-07-07T08:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-07T13:00:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2023-07-08T08:30:00Z', durationMinutes: 360 },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2023-07-08T15:30:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: '24h-2023-barcelona',
    round: 5,
    name: '24H Barcelona',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      // CEST (UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2023-09-15T07:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-15T12:00:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2023-09-16T07:30:00Z', durationMinutes: 720 },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2023-09-17T07:30:00Z', durationMinutes: 720 },
    ],
  },
]
