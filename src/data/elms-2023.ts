import { RaceEvent } from '@/lib/types'

// European Le Mans Series 2023 season calendar — 6 rounds
// Source: europeanlemansseries.com, en.wikipedia.org/wiki/2023_European_Le_Mans_Series — verified April 2026
// Note: Imola round cancelled; Portimão double-header (Rounds 5 & 6) replaced it
export const elms2023: RaceEvent[] = [
  {
    id: 'elms-2023-barcelona',
    round: 1,
    name: '4 Hours of Barcelona',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2023-04-21T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2023-04-21T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-22T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Barcelona', startUtc: '2023-04-23T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2023-le-castellet',
    round: 2,
    name: '4 Hours of Le Castellet',
    circuitId: 'circuit-paul-ricard',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2023-07-14T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2023-07-14T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-15T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Le Castellet', startUtc: '2023-07-16T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2023-aragon',
    round: 3,
    name: '4 Hours of Aragón',
    circuitId: 'motorland-aragon',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2023-08-24T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2023-08-24T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-25T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Aragón', startUtc: '2023-08-26T16:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2023-spa',
    round: 4,
    name: '4 Hours of Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2023-09-22T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2023-09-22T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-23T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Spa-Francorchamps', startUtc: '2023-09-24T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2023-portimao-1',
    round: 5,
    name: '4 Hours of Algarve',
    circuitId: 'algarve-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2023-10-19T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2023-10-19T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-10-20T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Algarve', startUtc: '2023-10-20T13:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2023-portimao-2',
    round: 6,
    name: '4 Hours of Portimão',
    circuitId: 'algarve-international-circuit',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-10-21T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Portimão', startUtc: '2023-10-22T10:00:00Z', durationMinutes: 240 },
    ],
  },
]
