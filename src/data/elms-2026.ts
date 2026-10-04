import { RaceEvent } from '@/lib/types'

// European Le Mans Series 2026 season calendar — 6 rounds
// Source: europeanlemansseries.com race pages (timetable shown in track-local time, converted to UTC) — re-verified Oct 2026
// Bronze Driver Collective Tests omitted. Qualifying runs per class (LMGT3, LMP3, LMP2 Pro/Am, LMP2).
export const elms2026: RaceEvent[] = [
  {
    id: 'elms-2026-barcelona',
    round: 1,
    name: '4 Hours of Barcelona',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-04-10T09:50:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-04-11T08:10:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying (LMGT3)', startUtc: '2026-04-11T13:05:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying (LMP3)', startUtc: '2026-04-11T13:30:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying (LMP2 Pro/Am)', startUtc: '2026-04-11T13:55:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying (LMP2)', startUtc: '2026-04-11T14:20:00Z', durationMinutes: 15 },
      { type: 'endurance', label: '4 Hours of Barcelona', startUtc: '2026-04-12T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2026-le-castellet',
    round: 2,
    name: '4 Hours of Le Castellet',
    circuitId: 'circuit-paul-ricard',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-05-01T09:50:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-05-02T08:10:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying (LMGT3)', startUtc: '2026-05-02T13:10:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying (LMP3)', startUtc: '2026-05-02T13:32:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying (LMP2 Pro/Am)', startUtc: '2026-05-02T13:54:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying (LMP2)', startUtc: '2026-05-02T14:16:00Z', durationMinutes: 15 },
      { type: 'endurance', label: '4 Hours of Le Castellet', startUtc: '2026-05-03T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2026-imola',
    round: 3,
    name: '4 Hours of Imola',
    circuitId: 'autodromo-enzo-e-dino-ferrari',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-07-03T08:50:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-07-04T08:50:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying (LMGT3)', startUtc: '2026-07-04T12:55:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying (LMP3)', startUtc: '2026-07-04T13:20:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying (LMP2 Pro/Am)', startUtc: '2026-07-04T13:45:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying (LMP2)', startUtc: '2026-07-04T14:10:00Z', durationMinutes: 15 },
      { type: 'endurance', label: '4 Hours of Imola', startUtc: '2026-07-05T11:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2026-spa',
    round: 4,
    name: '4 Hours of Spa',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-08-21T09:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-08-22T07:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying (LMGT3)', startUtc: '2026-08-22T10:30:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying (LMP3)', startUtc: '2026-08-22T10:52:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying (LMP2 Pro/Am)', startUtc: '2026-08-22T11:14:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying (LMP2)', startUtc: '2026-08-22T11:36:00Z', durationMinutes: 15 },
      { type: 'endurance', label: '4 Hours of Spa', startUtc: '2026-08-23T11:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2026-silverstone',
    round: 5,
    name: 'Goodyear 4 Hours of Silverstone',
    circuitId: 'silverstone-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-09-11T10:55:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-09-12T08:55:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying (LMGT3)', startUtc: '2026-09-12T13:55:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying (LMP3)', startUtc: '2026-09-12T14:20:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying (LMP2 Pro/Am)', startUtc: '2026-09-12T14:45:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying (LMP2)', startUtc: '2026-09-12T15:10:00Z', durationMinutes: 15 },
      { type: 'endurance', label: '4 Hours of Silverstone', startUtc: '2026-09-13T11:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2026-portimao',
    round: 6,
    name: '4 Hours of Portimão',
    circuitId: 'algarve-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-10-08T10:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-10-09T09:15:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying (LMGT3)', startUtc: '2026-10-09T14:15:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying (LMP3)', startUtc: '2026-10-09T14:40:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying (LMP2 Pro/Am)', startUtc: '2026-10-09T15:05:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying (LMP2)', startUtc: '2026-10-09T15:30:00Z', durationMinutes: 15 },
      { type: 'endurance', label: '4 Hours of Portimão', startUtc: '2026-10-10T13:30:00Z', durationMinutes: 240 },
    ],
  },
]
