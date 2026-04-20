import { RaceEvent } from '@/lib/types'

// Michelin Le Mans Cup 2024 season calendar — 6 rounds
// Source: lemanscup.com, en.wikipedia.org/wiki/2024_Le_Mans_Cup — verified April 2026
// Race duration: 1h50m (110 min) for standard rounds, Road to Le Mans format at Le Mans
export const mlmc2024: RaceEvent[] = [
  {
    id: 'mlmc-2024-barcelona',
    round: 1,
    name: 'Barcelona Round',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2024-04-12T07:50:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2024-04-12T15:35:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-13T10:30:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Race', startUtc: '2024-04-13T16:20:00Z', durationMinutes: 110 },
    ],
  },
  {
    id: 'mlmc-2024-le-castellet',
    round: 2,
    name: 'Le Castellet Round',
    circuitId: 'circuit-paul-ricard',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2024-05-03T07:50:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2024-05-03T14:25:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-04T09:50:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Race', startUtc: '2024-05-04T14:45:00Z', durationMinutes: 110 },
    ],
  },
  {
    id: 'mlmc-2024-le-mans',
    round: 3,
    name: 'Road to Le Mans',
    circuitId: 'circuit-de-la-sarthe',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2024-06-12T09:45:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2024-06-12T18:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-13T08:15:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Road to Le Mans', startUtc: '2024-06-14T08:00:00Z', durationMinutes: 55 },
    ],
  },
  {
    id: 'mlmc-2024-spa',
    round: 4,
    name: 'Spa Round',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2024-08-23T07:50:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2024-08-23T14:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-24T08:30:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Race', startUtc: '2024-08-24T14:00:00Z', durationMinutes: 110 },
    ],
  },
  {
    id: 'mlmc-2024-mugello',
    round: 5,
    name: 'Mugello Round',
    circuitId: 'autodromo-del-mugello',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2024-09-27T07:50:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2024-09-27T14:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-28T08:30:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Race', startUtc: '2024-09-28T14:00:00Z', durationMinutes: 110 },
    ],
  },
  {
    id: 'mlmc-2024-portimao',
    round: 6,
    name: 'Portimão Round',
    circuitId: 'algarve-international-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2024-10-18T08:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2024-10-18T14:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-10-19T09:00:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Race', startUtc: '2024-10-19T14:00:00Z', durationMinutes: 110 },
    ],
  },
]
