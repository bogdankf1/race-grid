import { RaceEvent } from '@/lib/types'

// Michelin Le Mans Cup 2023 season calendar — 6 rounds
// Source: lemanscup.com, en.wikipedia.org/wiki/2023_Le_Mans_Cup — verified April 2026
// Imola round cancelled; MotorLand Aragón added as replacement
// Race duration: 1h50m (110 min) for standard rounds, Road to Le Mans format at Le Mans
export const mlmc2023: RaceEvent[] = [
  {
    id: 'mlmc-2023-barcelona',
    round: 1,
    name: 'Barcelona Round',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2023-04-21T07:50:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2023-04-21T15:35:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-22T10:30:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Race', startUtc: '2023-04-22T16:20:00Z', durationMinutes: 110 },
    ],
  },
  {
    id: 'mlmc-2023-le-mans',
    round: 2,
    name: 'Road to Le Mans',
    circuitId: 'circuit-de-la-sarthe',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2023-06-07T09:45:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2023-06-07T18:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-08T08:15:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Road to Le Mans', startUtc: '2023-06-09T08:00:00Z', durationMinutes: 55 },
    ],
  },
  {
    id: 'mlmc-2023-le-castellet',
    round: 3,
    name: 'Le Castellet Round',
    circuitId: 'circuit-paul-ricard',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2023-07-14T07:50:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2023-07-14T14:25:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-15T09:50:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Race', startUtc: '2023-07-15T14:45:00Z', durationMinutes: 110 },
    ],
  },
  {
    id: 'mlmc-2023-aragon',
    round: 4,
    name: 'Aragón Round',
    circuitId: 'motorland-aragon',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2023-08-24T07:50:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2023-08-24T14:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-25T08:30:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Race', startUtc: '2023-08-25T14:00:00Z', durationMinutes: 110 },
    ],
  },
  {
    id: 'mlmc-2023-spa',
    round: 5,
    name: 'Spa Round',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2023-09-22T07:50:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2023-09-22T14:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-23T08:30:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Race', startUtc: '2023-09-23T14:00:00Z', durationMinutes: 110 },
    ],
  },
  {
    id: 'mlmc-2023-portimao',
    round: 6,
    name: 'Portimão Round',
    circuitId: 'algarve-international-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2023-10-20T08:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2023-10-20T14:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-10-21T09:00:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Race', startUtc: '2023-10-22T11:30:00Z', durationMinutes: 110 },
    ],
  },
]
