import { RaceEvent } from '@/lib/types'

// 24H Series 2021 — 4 European rounds
// Source: 24hseries.com, Wikipedia — verified May 2026
export const twentyfourh2021: RaceEvent[] = [
  {
    id: '24h-2021-mugello',
    round: 1,
    name: '12H Mugello',
    circuitId: 'autodromo-del-mugello',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2021-03-26T08:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-03-26T13:00:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2021-03-27T06:00:00Z', durationMinutes: 360 },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2021-03-27T13:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: '24h-2021-paul-ricard',
    round: 2,
    name: '12H Paul Ricard',
    circuitId: 'circuit-paul-ricard',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2021-04-23T07:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-04-23T12:00:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2021-04-24T07:30:00Z', durationMinutes: 360 },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2021-04-24T14:30:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: '24h-2021-hockenheim',
    round: 3,
    name: '12H Hockenheimring',
    circuitId: 'hockenheimring',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2021-05-21T07:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-21T12:00:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2021-05-22T07:30:00Z', durationMinutes: 360 },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2021-05-22T14:30:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: '24h-2021-barcelona',
    round: 4,
    name: '24H Barcelona',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2021-09-03T07:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-03T12:00:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2021-09-04T07:30:00Z', durationMinutes: 720 },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2021-09-05T07:30:00Z', durationMinutes: 720 },
    ],
  },
]
