import { RaceEvent } from '@/lib/types'

// Michelin Le Mans Cup 2021 season calendar — 6 rounds
// Source: lemanscup.com, en.wikipedia.org/wiki/2021_Michelin_Le_Mans_Cup — verified April 2026
// Note: Le Mans 24h moved to August in 2021 due to COVID, so Road to Le Mans is in August
// Race duration: 2 hours (120 min) for standard rounds, Road to Le Mans format at Le Mans
export const mlmc2021: RaceEvent[] = [
  {
    id: 'mlmc-2021-barcelona',
    round: 1,
    name: 'Barcelona Round',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2021-04-16T07:50:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2021-04-16T15:35:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-04-17T10:30:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Race', startUtc: '2021-04-17T16:20:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'mlmc-2021-le-castellet',
    round: 2,
    name: 'Le Castellet Round',
    circuitId: 'circuit-paul-ricard',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2021-06-04T07:50:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2021-06-04T14:25:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-05T09:50:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Race', startUtc: '2021-06-05T14:45:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'mlmc-2021-monza',
    round: 3,
    name: 'Monza Round',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2021-07-09T07:50:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2021-07-09T14:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-10T08:30:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Race', startUtc: '2021-07-10T14:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'mlmc-2021-le-mans',
    round: 4,
    name: 'Road to Le Mans',
    circuitId: 'circuit-de-la-sarthe',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2021-08-18T09:45:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2021-08-18T18:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-19T08:15:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Road to Le Mans', startUtc: '2021-08-21T08:00:00Z', durationMinutes: 55 },
    ],
  },
  {
    id: 'mlmc-2021-spa',
    round: 5,
    name: 'Spa Round',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2021-09-17T07:50:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2021-09-17T14:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-18T08:30:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Race', startUtc: '2021-09-18T14:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'mlmc-2021-portimao',
    round: 6,
    name: 'Portimão Round',
    circuitId: 'algarve-international-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2021-10-23T08:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2021-10-23T14:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-24T09:00:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Race', startUtc: '2021-10-24T14:00:00Z', durationMinutes: 120 },
    ],
  },
]
