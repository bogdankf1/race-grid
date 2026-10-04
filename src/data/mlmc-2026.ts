import { RaceEvent } from '@/lib/types'

// Michelin Le Mans Cup 2026 season calendar — 6 rounds
// Source: lemanscup.com race pages (timetable shown in track-local time, converted to UTC) — re-verified Oct 2026
// Bronze Driver Collective Tests omitted. Qualifying runs per class (GT3, LMP3 Pro/Am, LMP3).
export const mlmc2026: RaceEvent[] = [
  {
    id: 'mlmc-2026-barcelona',
    round: 1,
    name: 'Barcelona Round',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-04-10T07:50:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-04-10T15:35:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying (GT3)', startUtc: '2026-04-11T10:30:00Z', durationMinutes: 20 },
      { type: 'qualifying', label: 'Qualifying (LMP3 Pro/Am)', startUtc: '2026-04-11T10:55:00Z', durationMinutes: 20 },
      { type: 'qualifying', label: 'Qualifying (LMP3)', startUtc: '2026-04-11T11:20:00Z', durationMinutes: 20 },
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
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-05-01T16:40:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying (GT3)', startUtc: '2026-05-02T09:50:00Z', durationMinutes: 20 },
      { type: 'qualifying', label: 'Qualifying (LMP3 Pro/Am)', startUtc: '2026-05-02T10:10:00Z', durationMinutes: 20 },
      { type: 'qualifying', label: 'Qualifying (LMP3)', startUtc: '2026-05-02T10:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: 'Race', startUtc: '2026-05-02T16:20:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'mlmc-2026-le-mans',
    round: 3,
    name: 'Road to Le Mans',
    circuitId: 'circuit-de-la-sarthe',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-06-10T09:40:00Z', durationMinutes: 60 },
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
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-08-21T12:50:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying (GT3)', startUtc: '2026-08-22T09:25:00Z', durationMinutes: 20 },
      { type: 'qualifying', label: 'Qualifying (LMP3 Pro/Am)', startUtc: '2026-08-22T09:45:00Z', durationMinutes: 20 },
      { type: 'qualifying', label: 'Qualifying (LMP3)', startUtc: '2026-08-22T10:05:00Z', durationMinutes: 20 },
      { type: 'endurance', label: 'Race', startUtc: '2026-08-22T13:52:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'mlmc-2026-silverstone',
    round: 5,
    name: 'Silverstone Round',
    circuitId: 'silverstone-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-09-11T09:45:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-09-11T16:40:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying (GT3)', startUtc: '2026-09-12T11:30:00Z', durationMinutes: 20 },
      { type: 'qualifying', label: 'Qualifying (LMP3 Pro/Am)', startUtc: '2026-09-12T11:50:00Z', durationMinutes: 20 },
      { type: 'qualifying', label: 'Qualifying (LMP3)', startUtc: '2026-09-12T12:10:00Z', durationMinutes: 20 },
      { type: 'endurance', label: 'Race', startUtc: '2026-09-12T16:15:00Z', durationMinutes: 110 },
    ],
  },
  {
    id: 'mlmc-2026-portimao',
    round: 6,
    name: 'Portimão Round',
    circuitId: 'algarve-international-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-10-08T08:50:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-10-08T15:05:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying (GT3)', startUtc: '2026-10-09T10:55:00Z', durationMinutes: 20 },
      { type: 'qualifying', label: 'Qualifying (LMP3 Pro/Am)', startUtc: '2026-10-09T11:20:00Z', durationMinutes: 20 },
      { type: 'qualifying', label: 'Qualifying (LMP3)', startUtc: '2026-10-09T11:45:00Z', durationMinutes: 20 },
      { type: 'endurance', label: 'Race', startUtc: '2026-10-10T08:30:00Z', durationMinutes: 120 },
    ],
  },
]
