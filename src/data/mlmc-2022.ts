import { RaceEvent } from '@/lib/types'

// Michelin Le Mans Cup 2022 season calendar — 6 rounds
// Source: lemanscup.com, en.wikipedia.org/wiki/2022_Le_Mans_Cup — verified April 2026
// Race duration: 1h50m (110 min) for standard rounds, Road to Le Mans format at Le Mans (55 min races)
export const mlmc2022: RaceEvent[] = [
  {
    id: 'mlmc-2022-le-castellet',
    round: 1,
    name: 'Le Castellet Round',
    circuitId: 'circuit-paul-ricard',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2022-04-15T07:50:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2022-04-15T14:25:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-16T09:50:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Race', startUtc: '2022-04-16T14:45:00Z', durationMinutes: 110 },
    ],
  },
  {
    id: 'mlmc-2022-imola',
    round: 2,
    name: 'Imola Round',
    circuitId: 'autodromo-enzo-e-dino-ferrari',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2022-05-13T07:50:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2022-05-13T14:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-14T08:30:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Race', startUtc: '2022-05-14T14:00:00Z', durationMinutes: 110 },
    ],
  },
  {
    id: 'mlmc-2022-le-mans',
    round: 3,
    name: 'Road to Le Mans',
    circuitId: 'circuit-de-la-sarthe',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2022-06-08T09:45:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2022-06-08T18:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-09T08:15:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Road to Le Mans', startUtc: '2022-06-11T08:00:00Z', durationMinutes: 55 },
    ],
  },
  {
    id: 'mlmc-2022-monza',
    round: 4,
    name: 'Monza Round',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2022-07-01T07:50:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2022-07-01T14:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-02T08:30:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Race', startUtc: '2022-07-02T14:00:00Z', durationMinutes: 110 },
    ],
  },
  {
    id: 'mlmc-2022-spa',
    round: 5,
    name: 'Spa Round',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2022-09-23T07:50:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2022-09-23T14:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-24T08:30:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Race', startUtc: '2022-09-24T14:00:00Z', durationMinutes: 110 },
    ],
  },
  {
    id: 'mlmc-2022-portimao',
    round: 6,
    name: 'Portimão Round',
    circuitId: 'algarve-international-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2022-10-14T08:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2022-10-14T14:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-15T09:00:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Race', startUtc: '2022-10-16T11:30:00Z', durationMinutes: 110 },
    ],
  },
]
