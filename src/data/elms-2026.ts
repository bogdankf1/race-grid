import { RaceEvent } from '@/lib/types'

// European Le Mans Series 2026 season calendar — 6 rounds
// Source: europeanlemansseries.com — verified March 2026
export const elms2026: RaceEvent[] = [
  {
    id: 'elms-2026-barcelona',
    round: 1,
    name: '4 Hours of Barcelona',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-04-10T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-04-10T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-11T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Barcelona', startUtc: '2026-04-12T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2026-le-castellet',
    round: 2,
    name: '4 Hours of Le Castellet',
    circuitId: 'circuit-paul-ricard',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-05-01T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-05-01T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-02T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Le Castellet', startUtc: '2026-05-03T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2026-imola',
    round: 3,
    name: '4 Hours of Imola',
    circuitId: 'autodromo-enzo-e-dino-ferrari',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-07-03T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-07-03T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-04T09:00:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Imola', startUtc: '2026-07-05T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2026-spa',
    round: 4,
    name: '4 Hours of Spa',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-08-21T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-08-21T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-22T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Spa', startUtc: '2026-08-23T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2026-silverstone',
    round: 5,
    name: 'Goodyear 4 Hours of Silverstone',
    circuitId: 'silverstone-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-09-11T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-09-11T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-12T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Silverstone', startUtc: '2026-09-13T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2026-portimao',
    round: 6,
    name: '4 Hours of Portimão',
    circuitId: 'algarve-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-10-08T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-10-08T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-09T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Portimão', startUtc: '2026-10-10T10:00:00Z', durationMinutes: 240 },
    ],
  },
]
