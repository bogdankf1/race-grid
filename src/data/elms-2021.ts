import { RaceEvent } from '@/lib/types'

// European Le Mans Series 2021 season calendar — 6 rounds
// Source: europeanlemansseries.com, en.wikipedia.org/wiki/2021_European_Le_Mans_Series — verified April 2026
export const elms2021: RaceEvent[] = [
  {
    id: 'elms-2021-barcelona',
    round: 1,
    name: '4 Hours of Barcelona',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-04-16T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2021-04-16T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-04-17T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Barcelona', startUtc: '2021-04-18T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2021-red-bull-ring',
    round: 2,
    name: '4 Hours of the Red Bull Ring',
    circuitId: 'red-bull-ring',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-05-14T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2021-05-14T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-15T09:00:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of the Red Bull Ring', startUtc: '2021-05-16T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2021-le-castellet',
    round: 3,
    name: '4 Hours of Le Castellet',
    circuitId: 'circuit-paul-ricard',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-06-04T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2021-06-04T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-05T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Le Castellet', startUtc: '2021-06-06T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2021-monza',
    round: 4,
    name: '4 Hours of Monza',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-07-09T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2021-07-09T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-10T09:00:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Monza', startUtc: '2021-07-11T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2021-spa',
    round: 5,
    name: '4 Hours of Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-09-17T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2021-09-17T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-18T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Spa-Francorchamps', startUtc: '2021-09-19T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2021-portimao',
    round: 6,
    name: '4 Hours of Portimão',
    circuitId: 'algarve-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2021-10-22T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2021-10-22T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-23T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Portimão', startUtc: '2021-10-24T10:00:00Z', durationMinutes: 240 },
    ],
  },
]
