import { RaceEvent } from '@/lib/types'

// British GT Championship 2027 — 6 events, 8 rounds (revised provisional calendar, 24 Jul 2026)
// Source: britishgt.com. Session times are NOT yet published — all sessions are shown as TBA with placeholder times based on the 2026 weekend.
export const britgt2027: RaceEvent[] = [
  {
    id: 'britgt-2027-snetterton',
    round: 1,
    name: 'Snetterton 300',
    circuitId: 'snetterton-circuit',
    // Season opener at Snetterton for the first time (revised Jul 2026)
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-04-10T08:25:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2027-04-10T10:55:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'GT3 Qualifying 1', startUtc: '2027-04-10T14:30:00Z', durationMinutes: 14, tba: true },
      { type: 'qualifying', label: 'GT3 Qualifying 2', startUtc: '2027-04-10T14:44:00Z', durationMinutes: 14, tba: true },
      { type: 'qualifying', label: 'GT4 Qualifying 1', startUtc: '2027-04-10T14:58:00Z', durationMinutes: 14, tba: true },
      { type: 'qualifying', label: 'GT4 Qualifying 2', startUtc: '2027-04-10T15:13:00Z', durationMinutes: 14, tba: true },
      { type: 'warmup', label: 'Warm Up', startUtc: '2027-04-11T08:45:00Z', durationMinutes: 20, tba: true },
      { type: 'race', label: 'Race 1', startUtc: '2027-04-11T10:35:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race 2', startUtc: '2027-04-11T15:00:00Z', durationMinutes: 60, tba: true },
    ],
  },
  {
    id: 'britgt-2027-oulton-park',
    round: 2,
    name: 'Oulton Park',
    circuitId: 'oulton-park',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-05-29T08:30:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2027-05-29T11:00:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'GT3 Qualifying 1', startUtc: '2027-05-29T14:35:00Z', durationMinutes: 14, tba: true },
      { type: 'qualifying', label: 'GT3 Qualifying 2', startUtc: '2027-05-29T14:49:00Z', durationMinutes: 14, tba: true },
      { type: 'qualifying', label: 'GT4 Qualifying 1', startUtc: '2027-05-29T15:03:00Z', durationMinutes: 14, tba: true },
      { type: 'qualifying', label: 'GT4 Qualifying 2', startUtc: '2027-05-29T15:18:00Z', durationMinutes: 14, tba: true },
      { type: 'warmup', label: 'Warm Up', startUtc: '2027-05-31T08:15:00Z', durationMinutes: 20, tba: true },
      { type: 'race', label: 'Race 1', startUtc: '2027-05-31T10:05:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race 2', startUtc: '2027-05-31T16:15:00Z', durationMinutes: 60, tba: true },
    ],
  },
  {
    id: 'britgt-2027-spa',
    round: 3,
    name: 'Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-06-19T07:00:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-06-19T11:10:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'GT3 Qualifying 1', startUtc: '2027-06-19T16:35:00Z', durationMinutes: 10, tba: true },
      { type: 'qualifying', label: 'GT4 Qualifying 1', startUtc: '2027-06-19T16:45:00Z', durationMinutes: 10, tba: true },
      { type: 'qualifying', label: 'GT3 Qualifying 2', startUtc: '2027-06-19T17:15:00Z', durationMinutes: 10, tba: true },
      { type: 'qualifying', label: 'GT4 Qualifying 2', startUtc: '2027-06-19T17:25:00Z', durationMinutes: 10, tba: true },
      { type: 'endurance', label: '2 Hours of Spa', startUtc: '2027-06-20T12:20:00Z', durationMinutes: 120, tba: true },
    ],
  },
  {
    id: 'britgt-2027-silverstone',
    round: 4,
    name: 'Silverstone 500',
    circuitId: 'silverstone-circuit',
    // Moves to August (revised Jul 2026) to avoid the WEC Silverstone clash
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-08-07T08:30:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2027-08-07T11:15:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'GT3 Qualifying 1', startUtc: '2027-08-07T14:45:00Z', durationMinutes: 14, tba: true },
      { type: 'qualifying', label: 'GT3 Qualifying 2', startUtc: '2027-08-07T14:59:00Z', durationMinutes: 14, tba: true },
      { type: 'qualifying', label: 'GT4 Qualifying 1', startUtc: '2027-08-07T15:13:00Z', durationMinutes: 14, tba: true },
      { type: 'qualifying', label: 'GT4 Qualifying 2', startUtc: '2027-08-07T15:28:00Z', durationMinutes: 14, tba: true },
      { type: 'warmup', label: 'Warm Up', startUtc: '2027-08-08T08:40:00Z', durationMinutes: 20, tba: true },
      { type: 'endurance', label: 'Silverstone 500', startUtc: '2027-08-08T12:00:00Z', durationMinutes: 180, tba: true },
    ],
  },
  {
    id: 'britgt-2027-brands-hatch',
    round: 5,
    name: 'Brands Hatch GP',
    circuitId: 'brands-hatch',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-09-11T08:25:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2027-09-11T10:45:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'GT3 Qualifying 1', startUtc: '2027-09-11T15:15:00Z', durationMinutes: 14, tba: true },
      { type: 'qualifying', label: 'GT3 Qualifying 2', startUtc: '2027-09-11T15:29:00Z', durationMinutes: 14, tba: true },
      { type: 'qualifying', label: 'GT4 Qualifying 1', startUtc: '2027-09-11T15:43:00Z', durationMinutes: 14, tba: true },
      { type: 'qualifying', label: 'GT4 Qualifying 2', startUtc: '2027-09-11T15:58:00Z', durationMinutes: 14, tba: true },
      { type: 'warmup', label: 'Warm Up', startUtc: '2027-09-12T09:00:00Z', durationMinutes: 20, tba: true },
      { type: 'endurance', label: '2 Hours of Brands Hatch', startUtc: '2027-09-12T12:30:00Z', durationMinutes: 120, tba: true },
    ],
  },
  {
    id: 'britgt-2027-donington',
    round: 6,
    name: 'Donington Park GP',
    circuitId: 'donington-park',
    // Season finale
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-10-16T08:35:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2027-10-16T10:55:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'GT3 Qualifying 1', startUtc: '2027-10-16T14:45:00Z', durationMinutes: 14, tba: true },
      { type: 'qualifying', label: 'GT3 Qualifying 2', startUtc: '2027-10-16T14:59:00Z', durationMinutes: 14, tba: true },
      { type: 'qualifying', label: 'GT4 Qualifying 1', startUtc: '2027-10-16T15:13:00Z', durationMinutes: 14, tba: true },
      { type: 'qualifying', label: 'GT4 Qualifying 2', startUtc: '2027-10-16T15:28:00Z', durationMinutes: 14, tba: true },
      { type: 'warmup', label: 'Warm Up', startUtc: '2027-10-17T08:40:00Z', durationMinutes: 20, tba: true },
      { type: 'endurance', label: '2 Hours of Donington', startUtc: '2027-10-17T12:45:00Z', durationMinutes: 120, tba: true },
    ],
  },
]
