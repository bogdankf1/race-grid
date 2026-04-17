import { RaceEvent } from '@/lib/types'

// Michelin Le Mans Cup 2026 season calendar — 6 rounds
// Source: lemanscup.com, alkamelsystems.com — verified April 2026
// Barcelona times confirmed from official timetable V3
// Le Castellet times from published schedule; Rounds 3–6 estimated from ELMS support schedule patterns
export const mlmc2026: RaceEvent[] = [
  {
    id: 'mlmc-2026-barcelona',
    round: 1,
    name: 'Barcelona Round',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-04-10T07:50:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-04-10T15:35:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-11T10:30:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Race', startUtc: '2026-04-11T16:20:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'mlmc-2026-le-castellet',
    round: 2,
    name: 'Le Castellet Round',
    circuitId: 'circuit-paul-ricard',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-05-01T07:50:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-05-01T14:25:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-02T09:50:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Race', startUtc: '2026-05-02T14:45:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'mlmc-2026-le-mans',
    round: 3,
    name: 'Road to Le Mans',
    circuitId: 'circuit-de-la-sarthe',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-06-10T09:45:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-06-10T18:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-11T08:15:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Road to Le Mans', startUtc: '2026-06-12T08:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'mlmc-2026-spa',
    round: 4,
    name: 'Spa Round',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-08-21T07:50:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-08-21T14:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-22T08:30:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Race', startUtc: '2026-08-22T14:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'mlmc-2026-silverstone',
    round: 5,
    name: 'Silverstone Round',
    circuitId: 'silverstone-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-09-11T08:50:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-09-11T14:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-12T09:00:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Race', startUtc: '2026-09-12T14:00:00Z', durationMinutes: 110 },
    ],
  },
  {
    id: 'mlmc-2026-portimao',
    round: 6,
    name: 'Portimão Round',
    circuitId: 'algarve-international-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-10-08T08:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-10-08T14:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-09T09:00:00Z', durationMinutes: 45 },
      { type: 'endurance', label: 'Race', startUtc: '2026-10-10T11:30:00Z', durationMinutes: 120 },
    ],
  },
]
