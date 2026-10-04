import { RaceEvent } from '@/lib/types'

// Michelin Le Mans Cup 2027 — 6 rounds (announced 3 Jul 2026; Road to Le Mans on Fri 11 Jun, the day before the 24h)
// Source: lemanscup.com. Session times are NOT yet published — all sessions are shown as TBA with placeholder times based on the 2026 weekend.
export const mlmc2027: RaceEvent[] = [
  {
    id: 'mlmc-2027-barcelona',
    round: 1,
    name: 'Barcelona Round',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-03-12T07:50:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-03-12T15:35:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying (GT3)', startUtc: '2027-03-13T10:30:00Z', durationMinutes: 20, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMP3 Pro/Am)', startUtc: '2027-03-13T10:55:00Z', durationMinutes: 20, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMP3)', startUtc: '2027-03-13T11:20:00Z', durationMinutes: 20, tba: true },
      { type: 'endurance', label: 'Race', startUtc: '2027-03-13T16:20:00Z', durationMinutes: 120, tba: true },
    ],
  },
  {
    id: 'mlmc-2027-le-castellet',
    round: 2,
    name: 'Le Castellet Round',
    circuitId: 'circuit-paul-ricard',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-04-30T07:50:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-04-30T16:40:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying (GT3)', startUtc: '2027-05-01T09:50:00Z', durationMinutes: 20, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMP3 Pro/Am)', startUtc: '2027-05-01T10:10:00Z', durationMinutes: 20, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMP3)', startUtc: '2027-05-01T10:30:00Z', durationMinutes: 20, tba: true },
      { type: 'endurance', label: 'Race', startUtc: '2027-05-01T16:20:00Z', durationMinutes: 120, tba: true },
    ],
  },
  {
    id: 'mlmc-2027-le-mans',
    round: 3,
    name: 'Road to Le Mans',
    circuitId: 'circuit-de-la-sarthe',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-06-09T09:40:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-06-09T18:30:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-06-10T08:15:00Z', durationMinutes: 60, tba: true },
      { type: 'endurance', label: 'Road to Le Mans', startUtc: '2027-06-11T08:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'mlmc-2027-spa',
    round: 4,
    name: 'Spa Round',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-08-20T07:50:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-08-20T12:50:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying (GT3)', startUtc: '2027-08-21T09:25:00Z', durationMinutes: 20, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMP3 Pro/Am)', startUtc: '2027-08-21T09:45:00Z', durationMinutes: 20, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMP3)', startUtc: '2027-08-21T10:05:00Z', durationMinutes: 20, tba: true },
      { type: 'endurance', label: 'Race', startUtc: '2027-08-21T13:52:00Z', durationMinutes: 120, tba: true },
    ],
  },
  {
    id: 'mlmc-2027-silverstone',
    round: 5,
    name: 'Silverstone Round',
    circuitId: 'silverstone-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-09-03T09:45:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-09-03T16:40:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying (GT3)', startUtc: '2027-09-04T11:30:00Z', durationMinutes: 20, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMP3 Pro/Am)', startUtc: '2027-09-04T11:50:00Z', durationMinutes: 20, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMP3)', startUtc: '2027-09-04T12:10:00Z', durationMinutes: 20, tba: true },
      { type: 'endurance', label: 'Race', startUtc: '2027-09-04T16:15:00Z', durationMinutes: 110, tba: true },
    ],
  },
  {
    id: 'mlmc-2027-portimao',
    round: 6,
    name: 'Portimão Round',
    circuitId: 'algarve-international-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-09-30T08:50:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-09-30T15:05:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying (GT3)', startUtc: '2027-10-01T10:55:00Z', durationMinutes: 20, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMP3 Pro/Am)', startUtc: '2027-10-01T11:20:00Z', durationMinutes: 20, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMP3)', startUtc: '2027-10-01T11:45:00Z', durationMinutes: 20, tba: true },
      { type: 'endurance', label: 'Race', startUtc: '2027-10-02T08:30:00Z', durationMinutes: 120, tba: true },
    ],
  },
]
