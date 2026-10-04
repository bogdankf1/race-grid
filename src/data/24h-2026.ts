import { RaceEvent } from '@/lib/types'

// Michelin 24H Series 2026 — 5 rounds (European season; Dubai/Abu Dhabi are the separate Middle East series)
// Source: 24hseries.com race pages (local time converted to UTC) — re-verified Oct 2026
export const twentyfourh2026: RaceEvent[] = [
  {
    id: '24h-2026-mugello',
    round: 1,
    name: '12H Mugello',
    circuitId: 'autodromo-del-mugello',
    // Local time CET (UTC+1)
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2026-03-20T10:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying (TCE/GT4/GTX/992)', startUtc: '2026-03-20T15:15:00Z', durationMinutes: 66 },
      { type: 'qualifying', label: 'Qualifying (GT3)', startUtc: '2026-03-20T16:25:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2026-03-21T11:10:00Z', durationMinutes: 360 },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2026-03-22T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: '24h-2026-spa',
    round: 2,
    name: '12H Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    // Local time CEST (UTC+2)
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2026-04-17T08:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying (TCE/GT4/GTX/992)', startUtc: '2026-04-17T13:00:00Z', durationMinutes: 66 },
      { type: 'qualifying', label: 'Qualifying (GT3)', startUtc: '2026-04-17T14:10:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2026-04-18T09:30:00Z', durationMinutes: 360 },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2026-04-19T08:30:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: '24h-2026-paul-ricard',
    round: 3,
    name: '12H Paul Ricard',
    circuitId: 'circuit-paul-ricard',
    // Local time CEST (UTC+2)
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2026-06-05T08:50:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying (TCE/GT4/GTX/992)', startUtc: '2026-06-05T14:30:00Z', durationMinutes: 66 },
      { type: 'qualifying', label: 'Qualifying (GT3)', startUtc: '2026-06-05T15:40:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2026-06-06T09:45:00Z', durationMinutes: 360 },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2026-06-07T09:30:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: '24h-2026-nurburgring',
    round: 4,
    name: '12H Nürburgring',
    circuitId: 'nurburgring',
    // Local time CEST (UTC+2)
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2026-07-03T09:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying (TCE/GT4/GTX/992)', startUtc: '2026-07-03T13:25:00Z', durationMinutes: 66 },
      { type: 'qualifying', label: 'Qualifying (GT3)', startUtc: '2026-07-03T14:35:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Race Part 1', startUtc: '2026-07-04T10:00:00Z', durationMinutes: 360 },
      { type: 'endurance', label: 'Race Part 2', startUtc: '2026-07-05T10:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: '24h-2026-barcelona',
    round: 5,
    name: '24H Barcelona',
    circuitId: 'circuit-de-barcelona-catalunya',
    // Local time CEST (UTC+2)
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2026-09-18T10:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying (TCE/GT4/GTX/992)', startUtc: '2026-09-18T14:05:00Z', durationMinutes: 66 },
      { type: 'qualifying', label: 'Qualifying (GT3)', startUtc: '2026-09-18T15:15:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Night Practice', startUtc: '2026-09-18T18:00:00Z', durationMinutes: 60 },
      { type: 'endurance', label: '24H Barcelona', startUtc: '2026-09-19T10:00:00Z', durationMinutes: 1440 },
    ],
  },
]
