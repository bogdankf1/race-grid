import { RaceEvent } from '@/lib/types'

// European Le Mans Series 2022 season calendar — 6 rounds
// Source: europeanlemansseries.com, en.wikipedia.org/wiki/2022_European_Le_Mans_Series — verified April 2026
export const elms2022: RaceEvent[] = [
  {
    id: 'elms-2022-le-castellet',
    round: 1,
    name: '4 Hours of Le Castellet',
    circuitId: 'circuit-paul-ricard',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-04-15T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2022-04-15T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-16T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Le Castellet', startUtc: '2022-04-17T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2022-imola',
    round: 2,
    name: '4 Hours of Imola',
    circuitId: 'autodromo-enzo-e-dino-ferrari',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-05-13T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2022-05-13T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-14T09:00:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Imola', startUtc: '2022-05-15T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2022-monza',
    round: 3,
    name: '4 Hours of Monza',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-07-01T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2022-07-01T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-02T09:00:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Monza', startUtc: '2022-07-03T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2022-barcelona',
    round: 4,
    name: '4 Hours of Barcelona',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-08-26T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2022-08-26T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-08-27T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Barcelona', startUtc: '2022-08-28T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2022-spa',
    round: 5,
    name: '4 Hours of Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-09-23T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2022-09-23T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-24T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Spa-Francorchamps', startUtc: '2022-09-25T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2022-portimao',
    round: 6,
    name: '4 Hours of Portimão',
    circuitId: 'algarve-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2022-10-14T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2022-10-14T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-15T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Portimão', startUtc: '2022-10-16T10:00:00Z', durationMinutes: 240 },
    ],
  },
]
