import { RaceEvent } from '@/lib/types'

// Michelin 24H Series 2026 — 5 rounds (European season)
// Source: 24hseries.com — verified May 2026
export const twentyfourh2026: RaceEvent[] = [
  {
    id: '24h-2026-mugello',
    round: 1,
    name: '12H Mugello',
    circuitId: 'autodromo-del-mugello',
    sessions: [
      // Friday March 20 — CET (UTC+1)
      { type: 'practice', label: 'Free Practice', startUtc: '2026-03-20T10:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-20T15:15:00Z', durationMinutes: 60 },
      // Saturday March 21 — CET (UTC+1)
      { type: 'endurance', label: 'Race Part 1', startUtc: '2026-03-21T11:10:00Z', durationMinutes: 360 },
      // Sunday March 22 — CET (UTC+1)
      { type: 'endurance', label: 'Race Part 2', startUtc: '2026-03-22T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: '24h-2026-spa',
    round: 2,
    name: '12H Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      // Friday April 17 — CEST (UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2026-04-17T08:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-17T13:00:00Z', durationMinutes: 60 },
      // Saturday April 18 — CEST (UTC+2)
      { type: 'endurance', label: 'Race Part 1', startUtc: '2026-04-18T09:30:00Z', durationMinutes: 360 },
      // Sunday April 19 — CEST (UTC+2)
      { type: 'endurance', label: 'Race Part 2', startUtc: '2026-04-19T08:30:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: '24h-2026-paul-ricard',
    round: 3,
    name: '12H Paul Ricard',
    circuitId: 'circuit-paul-ricard',
    sessions: [
      // Friday June 5 — CEST (UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2026-06-05T08:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-05T13:00:00Z', durationMinutes: 60 },
      // Saturday June 6 — CEST (UTC+2)
      { type: 'endurance', label: 'Race Part 1', startUtc: '2026-06-06T09:30:00Z', durationMinutes: 360 },
      // Sunday June 7 — CEST (UTC+2)
      { type: 'endurance', label: 'Race Part 2', startUtc: '2026-06-07T08:30:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: '24h-2026-nurburgring',
    round: 4,
    name: '12H Nürburgring',
    circuitId: 'nurburgring',
    sessions: [
      // Friday July 3 — CEST (UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2026-07-03T08:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-03T13:00:00Z', durationMinutes: 60 },
      // Saturday July 4 — CEST (UTC+2)
      { type: 'endurance', label: 'Race Part 1', startUtc: '2026-07-04T09:30:00Z', durationMinutes: 360 },
      // Sunday July 5 — CEST (UTC+2)
      { type: 'endurance', label: 'Race Part 2', startUtc: '2026-07-05T08:30:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: '24h-2026-barcelona',
    round: 5,
    name: '24H Barcelona',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      // Friday September 18 — CEST (UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2026-09-18T08:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-18T13:00:00Z', durationMinutes: 60 },
      // Saturday September 19 — CEST (UTC+2)
      { type: 'endurance', label: 'Race Part 1', startUtc: '2026-09-19T09:30:00Z', durationMinutes: 720 },
      // Sunday September 20 — CEST (UTC+2)
      { type: 'endurance', label: 'Race Part 2', startUtc: '2026-09-20T09:30:00Z', durationMinutes: 720 },
    ],
  },
]
