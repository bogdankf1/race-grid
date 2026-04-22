import { RaceEvent } from '@/lib/types'

// British GT Championship 2026 — 6 events, 8 rounds
// Source: britishgt.com (official event timetables)
export const britgt2026: RaceEvent[] = [
  {
    id: 'britgt-2026-silverstone',
    round: 1,
    name: 'Silverstone 500',
    circuitId: 'silverstone-circuit',
    sessions: [
      // Saturday 25 Apr (BST UTC+1)
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-04-25T08:30:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2026-04-25T11:15:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'GT3 Qualifying 1', startUtc: '2026-04-25T14:45:00Z', durationMinutes: 14 },
      { type: 'qualifying', label: 'GT3 Qualifying 2', startUtc: '2026-04-25T14:59:00Z', durationMinutes: 14 },
      { type: 'qualifying', label: 'GT4 Qualifying 1', startUtc: '2026-04-25T15:13:00Z', durationMinutes: 14 },
      { type: 'qualifying', label: 'GT4 Qualifying 2', startUtc: '2026-04-25T15:28:00Z', durationMinutes: 14 },
      // Sunday 26 Apr
      { type: 'warmup', label: 'Warm Up', startUtc: '2026-04-26T08:40:00Z', durationMinutes: 20 },
      { type: 'endurance', label: 'Silverstone 500', startUtc: '2026-04-26T12:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'britgt-2026-oulton-park',
    round: 2,
    name: 'Oulton Park',
    circuitId: 'oulton-park',
    sessions: [
      // Saturday 23 May (BST UTC+1)
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-05-23T08:30:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2026-05-23T10:55:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'GT3 Qualifying 1', startUtc: '2026-05-23T14:30:00Z', durationMinutes: 14 },
      { type: 'qualifying', label: 'GT3 Qualifying 2', startUtc: '2026-05-23T14:44:00Z', durationMinutes: 14 },
      { type: 'qualifying', label: 'GT4 Qualifying 1', startUtc: '2026-05-23T14:58:00Z', durationMinutes: 14 },
      { type: 'qualifying', label: 'GT4 Qualifying 2', startUtc: '2026-05-23T15:13:00Z', durationMinutes: 14 },
      // Monday 25 May (Bank Holiday)
      { type: 'warmup', label: 'Warm Up', startUtc: '2026-05-25T08:10:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 1', startUtc: '2026-05-25T09:50:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2026-05-25T14:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'britgt-2026-spa',
    round: 3,
    name: 'Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      // Saturday 20 Jun (CEST UTC+2)
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-06-20T07:30:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2026-06-20T10:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'GT3 Qualifying 1', startUtc: '2026-06-20T13:30:00Z', durationMinutes: 14 },
      { type: 'qualifying', label: 'GT3 Qualifying 2', startUtc: '2026-06-20T13:44:00Z', durationMinutes: 14 },
      { type: 'qualifying', label: 'GT4 Qualifying 1', startUtc: '2026-06-20T13:58:00Z', durationMinutes: 14 },
      { type: 'qualifying', label: 'GT4 Qualifying 2', startUtc: '2026-06-20T14:13:00Z', durationMinutes: 14 },
      // Sunday 21 Jun
      { type: 'warmup', label: 'Warm Up', startUtc: '2026-06-21T07:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '2 Hours of Spa', startUtc: '2026-06-21T11:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'britgt-2026-snetterton',
    round: 4,
    name: 'Snetterton',
    circuitId: 'snetterton-circuit',
    sessions: [
      // Saturday 15 Aug (BST UTC+1)
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-08-15T08:30:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2026-08-15T10:55:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'GT3 Qualifying 1', startUtc: '2026-08-15T14:30:00Z', durationMinutes: 14 },
      { type: 'qualifying', label: 'GT3 Qualifying 2', startUtc: '2026-08-15T14:44:00Z', durationMinutes: 14 },
      { type: 'qualifying', label: 'GT4 Qualifying 1', startUtc: '2026-08-15T14:58:00Z', durationMinutes: 14 },
      { type: 'qualifying', label: 'GT4 Qualifying 2', startUtc: '2026-08-15T15:13:00Z', durationMinutes: 14 },
      { type: 'race', label: 'Race 1', startUtc: '2026-08-15T16:30:00Z', durationMinutes: 60 },
      // Sunday 16 Aug
      { type: 'race', label: 'Race 2', startUtc: '2026-08-16T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'britgt-2026-donington',
    round: 5,
    name: 'Donington Park',
    circuitId: 'donington-park',
    sessions: [
      // Saturday 5 Sep (BST UTC+1)
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-09-05T08:30:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2026-09-05T10:55:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'GT3 Qualifying 1', startUtc: '2026-09-05T14:30:00Z', durationMinutes: 14 },
      { type: 'qualifying', label: 'GT3 Qualifying 2', startUtc: '2026-09-05T14:44:00Z', durationMinutes: 14 },
      { type: 'qualifying', label: 'GT4 Qualifying 1', startUtc: '2026-09-05T14:58:00Z', durationMinutes: 14 },
      { type: 'qualifying', label: 'GT4 Qualifying 2', startUtc: '2026-09-05T15:13:00Z', durationMinutes: 14 },
      // Sunday 6 Sep
      { type: 'warmup', label: 'Warm Up', startUtc: '2026-09-06T08:00:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '2 Hours of Donington', startUtc: '2026-09-06T11:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'britgt-2026-brands-hatch',
    round: 6,
    name: 'Brands Hatch',
    circuitId: 'brands-hatch',
    sessions: [
      // Saturday 26 Sep (BST UTC+1)
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-09-26T08:30:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Pre-Qualifying', startUtc: '2026-09-26T10:55:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'GT3 Qualifying 1', startUtc: '2026-09-26T14:30:00Z', durationMinutes: 14 },
      { type: 'qualifying', label: 'GT3 Qualifying 2', startUtc: '2026-09-26T14:44:00Z', durationMinutes: 14 },
      { type: 'qualifying', label: 'GT4 Qualifying 1', startUtc: '2026-09-26T14:58:00Z', durationMinutes: 14 },
      { type: 'qualifying', label: 'GT4 Qualifying 2', startUtc: '2026-09-26T15:13:00Z', durationMinutes: 14 },
      // Sunday 27 Sep
      { type: 'warmup', label: 'Warm Up', startUtc: '2026-09-27T08:00:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '2 Hours of Brands Hatch', startUtc: '2026-09-27T11:00:00Z', durationMinutes: 120 },
    ],
  },
]
