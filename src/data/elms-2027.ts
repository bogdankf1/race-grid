import { RaceEvent } from '@/lib/types'

// European Le Mans Series 2027 — 6 rounds, same circuits as 2026, earlier start (announced 3 Jul 2026)
// Source: europeanlemansseries.com (Prologue at Barcelona 8-9 Mar). Session times are NOT yet published — all sessions are shown as TBA with placeholder times based on the 2026 weekend.
export const elms2027: RaceEvent[] = [
  {
    id: 'elms-2027-barcelona',
    round: 1,
    name: '4 Hours of Barcelona',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-03-12T09:50:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-03-13T08:10:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMGT3)', startUtc: '2027-03-13T13:05:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMP3)', startUtc: '2027-03-13T13:30:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMP2 Pro/Am)', startUtc: '2027-03-13T13:55:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMP2)', startUtc: '2027-03-13T14:20:00Z', durationMinutes: 15, tba: true },
      { type: 'endurance', label: '4 Hours of Barcelona', startUtc: '2027-03-14T10:00:00Z', durationMinutes: 240, tba: true },
    ],
  },
  {
    id: 'elms-2027-le-castellet',
    round: 2,
    name: '4 Hours of Le Castellet',
    circuitId: 'circuit-paul-ricard',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-04-30T09:50:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-05-01T08:10:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMGT3)', startUtc: '2027-05-01T13:10:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMP3)', startUtc: '2027-05-01T13:32:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMP2 Pro/Am)', startUtc: '2027-05-01T13:54:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMP2)', startUtc: '2027-05-01T14:16:00Z', durationMinutes: 15, tba: true },
      { type: 'endurance', label: '4 Hours of Le Castellet', startUtc: '2027-05-02T10:00:00Z', durationMinutes: 240, tba: true },
    ],
  },
  {
    id: 'elms-2027-imola',
    round: 3,
    name: '4 Hours of Imola',
    circuitId: 'autodromo-enzo-e-dino-ferrari',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-07-02T08:50:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-07-03T08:50:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMGT3)', startUtc: '2027-07-03T12:55:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMP3)', startUtc: '2027-07-03T13:20:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMP2 Pro/Am)', startUtc: '2027-07-03T13:45:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMP2)', startUtc: '2027-07-03T14:10:00Z', durationMinutes: 15, tba: true },
      { type: 'endurance', label: '4 Hours of Imola', startUtc: '2027-07-04T11:00:00Z', durationMinutes: 240, tba: true },
    ],
  },
  {
    id: 'elms-2027-spa',
    round: 4,
    name: '4 Hours of Spa',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-08-20T09:00:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-08-21T07:00:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMGT3)', startUtc: '2027-08-21T10:30:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMP3)', startUtc: '2027-08-21T10:52:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMP2 Pro/Am)', startUtc: '2027-08-21T11:14:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMP2)', startUtc: '2027-08-21T11:36:00Z', durationMinutes: 15, tba: true },
      { type: 'endurance', label: '4 Hours of Spa', startUtc: '2027-08-22T11:00:00Z', durationMinutes: 240, tba: true },
    ],
  },
  {
    id: 'elms-2027-silverstone',
    round: 5,
    name: 'Goodyear 4 Hours of Silverstone',
    circuitId: 'silverstone-circuit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-09-03T10:55:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-09-04T08:55:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMGT3)', startUtc: '2027-09-04T13:55:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMP3)', startUtc: '2027-09-04T14:20:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMP2 Pro/Am)', startUtc: '2027-09-04T14:45:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMP2)', startUtc: '2027-09-04T15:10:00Z', durationMinutes: 15, tba: true },
      { type: 'endurance', label: '4 Hours of Silverstone', startUtc: '2027-09-05T11:00:00Z', durationMinutes: 240, tba: true },
    ],
  },
  {
    id: 'elms-2027-portimao',
    round: 6,
    name: '4 Hours of Portimão',
    circuitId: 'algarve-international-circuit',
    // Race on Saturday 2 Oct (2027)
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-09-30T10:00:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-10-01T09:15:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMGT3)', startUtc: '2027-10-01T14:15:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMP3)', startUtc: '2027-10-01T14:40:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMP2 Pro/Am)', startUtc: '2027-10-01T15:05:00Z', durationMinutes: 15, tba: true },
      { type: 'qualifying', label: 'Qualifying (LMP2)', startUtc: '2027-10-01T15:30:00Z', durationMinutes: 15, tba: true },
      { type: 'endurance', label: '4 Hours of Portimão', startUtc: '2027-10-02T13:30:00Z', durationMinutes: 240, tba: true },
    ],
  },
]
