import { RaceEvent } from '@/lib/types'

// Michelin Le Mans Cup 2025 season calendar — 6 rounds
// Source: lemanscup.com, en.wikipedia.org/wiki/2025_Le_Mans_Cup — verified April 2026
// Race duration: 2 hours (120 min) for standard rounds, 110 min for Silverstone, Road to Le Mans format at Le Mans
export const mlmc2025: RaceEvent[] = [
  {
    id: 'mlmc-2025-barcelona',
    round: 1,
    name: 'Barcelona Round',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2025-04-04T07:50:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2025-04-04T15:35:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-04-05T10:30:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Race', startUtc: '2025-04-05T16:20:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'mlmc-2025-le-castellet',
    round: 2,
    name: 'Le Castellet Round',
    circuitId: 'circuit-paul-ricard',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2025-05-02T07:50:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2025-05-02T14:25:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-03T09:50:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Race', startUtc: '2025-05-03T14:45:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'mlmc-2025-le-mans',
    round: 3,
    name: 'Road to Le Mans',
    circuitId: 'circuit-de-la-sarthe',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2025-06-11T09:45:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2025-06-11T18:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-06-12T08:15:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Road to Le Mans', startUtc: '2025-06-13T08:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'mlmc-2025-spa',
    round: 4,
    name: 'Spa Round',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2025-08-22T07:50:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2025-08-22T14:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-23T08:30:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Race', startUtc: '2025-08-23T14:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'mlmc-2025-silverstone',
    round: 5,
    name: 'Silverstone Round',
    circuitId: 'silverstone-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2025-09-12T08:50:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2025-09-12T14:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-09-13T09:00:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Race', startUtc: '2025-09-13T14:00:00Z', durationMinutes: 110 },
    ],
  },
  {
    id: 'mlmc-2025-portimao',
    round: 6,
    name: 'Portimão Round',
    circuitId: 'algarve-international-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2025-10-17T08:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2025-10-17T14:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-10-18T09:00:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Race', startUtc: '2025-10-18T14:00:00Z', durationMinutes: 120 },
    ],
  },
]
