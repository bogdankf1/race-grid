import { RaceEvent } from '@/lib/types'

// Michelin 24H Series 2027 — 5 European rounds (provisional, announced by Creventic). Source: 24hseries.com.
// Session times are NOT yet published — all sessions are shown as TBA with placeholder times based on the 2026 weekend.
export const twentyfourh2027: RaceEvent[] = [
  {
    id: '24h-2027-mugello',
    round: 1,
    name: '12H Mugello',
    circuitId: 'autodromo-del-mugello',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2027-03-19T10:45:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying (TCE/GT4/GTX/992)', startUtc: '2027-03-19T15:15:00Z', durationMinutes: 66, tba: true },
      { type: 'qualifying', label: 'Qualifying (GT3)', startUtc: '2027-03-19T16:25:00Z', durationMinutes: 60, tba: true },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2027-03-20T11:10:00Z', durationMinutes: 360, tba: true },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2027-03-21T11:00:00Z', durationMinutes: 360, tba: true },
    ],
  },
  {
    id: '24h-2027-spa',
    round: 2,
    name: '12H Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2027-04-09T08:45:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying (TCE/GT4/GTX/992)', startUtc: '2027-04-09T13:00:00Z', durationMinutes: 66, tba: true },
      { type: 'qualifying', label: 'Qualifying (GT3)', startUtc: '2027-04-09T14:10:00Z', durationMinutes: 60, tba: true },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2027-04-10T09:30:00Z', durationMinutes: 360, tba: true },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2027-04-11T08:30:00Z', durationMinutes: 360, tba: true },
    ],
  },
  {
    id: '24h-2027-red-bull-ring',
    round: 3,
    name: '12H Red Bull Ring',
    circuitId: 'red-bull-ring',
    // Red Bull Ring returns (first visit since 2017); Nürburgring drops out — placeholder times follow the 2026 Nürburgring weekend
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2027-05-14T09:45:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying (TCE/GT4/GTX/992)', startUtc: '2027-05-14T13:25:00Z', durationMinutes: 66, tba: true },
      { type: 'qualifying', label: 'Qualifying (GT3)', startUtc: '2027-05-14T14:35:00Z', durationMinutes: 60, tba: true },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2027-05-15T10:00:00Z', durationMinutes: 360, tba: true },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2027-05-16T10:00:00Z', durationMinutes: 360, tba: true },
    ],
  },
  {
    id: '24h-2027-paul-ricard',
    round: 4,
    name: '12H Paul Ricard',
    circuitId: 'circuit-paul-ricard',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2027-06-04T08:50:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying (TCE/GT4/GTX/992)', startUtc: '2027-06-04T14:30:00Z', durationMinutes: 66, tba: true },
      { type: 'qualifying', label: 'Qualifying (GT3)', startUtc: '2027-06-04T15:40:00Z', durationMinutes: 60, tba: true },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2027-06-05T09:45:00Z', durationMinutes: 360, tba: true },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2027-06-06T09:30:00Z', durationMinutes: 360, tba: true },
    ],
  },
  {
    id: '24h-2027-barcelona',
    round: 5,
    name: '24H Barcelona',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2027-09-10T10:00:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying (TCE/GT4/GTX/992)', startUtc: '2027-09-10T14:05:00Z', durationMinutes: 66, tba: true },
      { type: 'qualifying', label: 'Qualifying (GT3)', startUtc: '2027-09-10T15:15:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Night Practice', startUtc: '2027-09-10T18:00:00Z', durationMinutes: 60, tba: true },
      { type: 'endurance', label: '24H Barcelona', startUtc: '2027-09-11T10:00:00Z', durationMinutes: 1440, tba: true },
    ],
  },
]
