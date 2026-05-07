import { RaceEvent } from '@/lib/types'

// 24H Series 2022 — 5 European rounds
// Source: 24hseries.com, Wikipedia — verified May 2026
export const twentyfourh2022: RaceEvent[] = [
  {
    id: '24h-2022-mugello',
    round: 1,
    name: '12H Mugello',
    circuitId: 'autodromo-del-mugello',
    sessions: [
      // CET (UTC+1) — DST transition Sunday Mar 27, Fri/Sat still CET
      { type: 'practice', label: 'Free Practice', startUtc: '2022-03-25T08:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-03-25T13:00:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2022-03-26T06:00:00Z', durationMinutes: 360 },
      // Sunday is CEST (UTC+2)
      { type: 'endurance', label: 'Race Part 2', startUtc: '2022-03-27T05:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: '24h-2022-spa',
    round: 2,
    name: '12H Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      // CEST (UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2022-04-22T07:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-22T12:00:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2022-04-23T07:30:00Z', durationMinutes: 360 },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2022-04-24T07:30:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: '24h-2022-hockenheim',
    round: 3,
    name: '12H Hockenheimring',
    circuitId: 'hockenheimring',
    sessions: [
      // CEST (UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2022-05-13T07:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-13T12:00:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2022-05-14T07:30:00Z', durationMinutes: 360 },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2022-05-15T07:30:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: '24h-2022-portimao',
    round: 4,
    name: '24H Portimão',
    circuitId: 'algarve-international-circuit',
    sessions: [
      // WEST (UTC+1) — Portugal
      { type: 'practice', label: 'Free Practice', startUtc: '2022-07-08T08:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-08T13:00:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2022-07-09T08:30:00Z', durationMinutes: 720 },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2022-07-10T08:30:00Z', durationMinutes: 720 },
    ],
  },
  {
    id: '24h-2022-barcelona',
    round: 5,
    name: '24H Barcelona',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      // CEST (UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2022-09-09T07:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-09T12:00:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2022-09-10T07:30:00Z', durationMinutes: 720 },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2022-09-11T07:30:00Z', durationMinutes: 720 },
    ],
  },
]
