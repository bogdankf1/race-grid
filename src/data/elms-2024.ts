import { RaceEvent } from '@/lib/types'

// European Le Mans Series 2024 season calendar — 6 rounds
// Source: europeanlemansseries.com, en.wikipedia.org/wiki/2024_European_Le_Mans_Series — verified April 2026
export const elms2024: RaceEvent[] = [
  {
    id: 'elms-2024-barcelona',
    round: 1,
    name: '4 Hours of Barcelona',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2024-04-12T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2024-04-12T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-13T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Barcelona', startUtc: '2024-04-14T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2024-le-castellet',
    round: 2,
    name: '4 Hours of Le Castellet',
    circuitId: 'circuit-paul-ricard',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2024-05-03T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2024-05-03T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-04T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Le Castellet', startUtc: '2024-05-05T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2024-imola',
    round: 3,
    name: '4 Hours of Imola',
    circuitId: 'autodromo-enzo-e-dino-ferrari',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2024-07-05T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2024-07-05T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-06T09:00:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Imola', startUtc: '2024-07-07T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2024-spa',
    round: 4,
    name: '4 Hours of Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2024-08-23T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2024-08-23T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-24T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Spa-Francorchamps', startUtc: '2024-08-25T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2024-mugello',
    round: 5,
    name: '4 Hours of Mugello',
    circuitId: 'autodromo-del-mugello',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2024-09-27T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2024-09-27T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-28T09:00:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Mugello', startUtc: '2024-09-29T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2024-portimao',
    round: 6,
    name: '4 Hours of Portimão',
    circuitId: 'algarve-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2024-10-17T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2024-10-17T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-10-18T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Portimão', startUtc: '2024-10-19T10:00:00Z', durationMinutes: 240 },
    ],
  },
]
