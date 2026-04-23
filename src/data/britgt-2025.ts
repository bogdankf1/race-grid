import { RaceEvent } from '@/lib/types'

// British GT Championship 2025 — 9 rounds across 7 events
// Source: Wikipedia / britishgt.com
export const britgt2025: RaceEvent[] = [
  {
    id: 'britgt-2025-donington-1',
    round: 1,
    name: 'Donington Park',
    circuitId: 'donington-park',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2025-04-05T08:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2025-04-05T11:00:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-04-05T14:30:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warm Up', startUtc: '2025-04-06T08:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '2 Hours of Donington', startUtc: '2025-04-06T12:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'britgt-2025-silverstone',
    round: 2,
    name: 'Silverstone',
    circuitId: 'silverstone-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2025-04-26T08:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2025-04-26T11:00:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-04-26T14:30:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warm Up', startUtc: '2025-04-27T08:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: 'Silverstone 500', startUtc: '2025-04-27T12:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'britgt-2025-oulton-park',
    round: 3,
    name: 'Oulton Park',
    circuitId: 'oulton-park',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2025-05-24T08:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-24T11:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 1', startUtc: '2025-05-25T12:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2025-05-26T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'britgt-2025-spa',
    round: 5,
    name: 'Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2025-06-21T07:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2025-06-21T10:00:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-06-21T13:30:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warm Up', startUtc: '2025-06-22T07:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '3 Hours of Spa', startUtc: '2025-06-22T11:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'britgt-2025-snetterton',
    round: 6,
    name: 'Snetterton',
    circuitId: 'snetterton-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2025-07-11T08:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-11T11:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 1', startUtc: '2025-07-12T14:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2025-07-13T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'britgt-2025-brands-hatch',
    round: 8,
    name: 'Brands Hatch',
    circuitId: 'brands-hatch',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2025-08-23T08:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2025-08-23T11:00:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-23T14:30:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warm Up', startUtc: '2025-08-24T08:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '2 Hours of Brands Hatch', startUtc: '2025-08-24T12:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'britgt-2025-donington-2',
    round: 9,
    name: 'Donington Park',
    circuitId: 'donington-park',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2025-10-04T08:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2025-10-04T11:00:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-10-04T14:30:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warm Up', startUtc: '2025-10-05T08:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '2 Hours of Donington', startUtc: '2025-10-05T12:00:00Z', durationMinutes: 120 },
    ],
  },
]
