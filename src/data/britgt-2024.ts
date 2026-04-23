import { RaceEvent } from '@/lib/types'

// British GT Championship 2024 — 9 rounds across 7 events
// Source: Wikipedia / britishgt.com
export const britgt2024: RaceEvent[] = [
  {
    id: 'britgt-2024-oulton-park',
    round: 1,
    name: 'Oulton Park',
    circuitId: 'oulton-park',
    sessions: [
      // Mar 30 is GMT (UTC+0), clocks change Mar 31
      { type: 'practice', label: 'Free Practice 1', startUtc: '2024-03-30T09:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-30T12:00:00Z', durationMinutes: 60 },
      // Mar 31 onwards is BST (UTC+1)
      { type: 'race', label: 'Race 1', startUtc: '2024-03-31T12:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2024-04-01T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'britgt-2024-silverstone',
    round: 3,
    name: 'Silverstone',
    circuitId: 'silverstone-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2024-04-27T08:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2024-04-27T11:00:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-27T14:30:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warm Up', startUtc: '2024-04-28T08:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: 'Silverstone 500', startUtc: '2024-04-28T12:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'britgt-2024-donington-1',
    round: 4,
    name: 'Donington Park',
    circuitId: 'donington-park',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2024-05-25T08:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2024-05-25T11:00:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-25T14:30:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warm Up', startUtc: '2024-05-26T08:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '3 Hours of Donington', startUtc: '2024-05-26T12:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'britgt-2024-spa',
    round: 5,
    name: 'Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2024-06-22T07:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2024-06-22T10:00:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-22T13:30:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warm Up', startUtc: '2024-06-23T07:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '2 Hours of Spa', startUtc: '2024-06-23T11:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'britgt-2024-snetterton',
    round: 6,
    name: 'Snetterton',
    circuitId: 'snetterton-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2024-07-13T08:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-13T11:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 1', startUtc: '2024-07-13T14:30:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warm Up', startUtc: '2024-07-14T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2024-07-14T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'britgt-2024-donington-2',
    round: 8,
    name: 'Donington Park',
    circuitId: 'donington-park',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2024-09-07T08:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2024-09-07T11:00:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-07T14:30:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warm Up', startUtc: '2024-09-08T08:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '2 Hours of Donington', startUtc: '2024-09-08T12:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'britgt-2024-brands-hatch',
    round: 9,
    name: 'Brands Hatch',
    circuitId: 'brands-hatch',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2024-09-28T08:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2024-09-28T11:00:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-28T14:30:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warm Up', startUtc: '2024-09-29T08:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '2 Hours of Brands Hatch', startUtc: '2024-09-29T12:00:00Z', durationMinutes: 120 },
    ],
  },
]
