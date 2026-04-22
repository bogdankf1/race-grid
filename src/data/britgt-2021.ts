import { RaceEvent } from '@/lib/types'

// British GT Championship 2021 — 9 rounds across 7 events
// Source: Wikipedia / britishgt.com
export const britgt2021: RaceEvent[] = [
  {
    id: 'britgt-2021-brands-hatch',
    round: 1,
    name: 'Brands Hatch',
    circuitId: 'brands-hatch',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2021-05-22T08:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2021-05-22T11:00:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-22T14:30:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warm-Up', startUtc: '2021-05-23T08:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '2 Hours of Brands Hatch', startUtc: '2021-05-23T12:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'britgt-2021-silverstone',
    round: 2,
    name: 'Silverstone',
    circuitId: 'silverstone-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2021-06-26T08:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2021-06-26T11:00:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-26T14:30:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warm-Up', startUtc: '2021-06-27T08:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: 'Silverstone 500', startUtc: '2021-06-27T12:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'britgt-2021-donington-1',
    round: 3,
    name: 'Donington Park',
    circuitId: 'donington-park',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2021-07-10T08:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2021-07-10T11:00:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-10T14:30:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warm-Up', startUtc: '2021-07-11T08:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '2 Hours of Donington', startUtc: '2021-07-11T12:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'britgt-2021-spa',
    round: 4,
    name: 'Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2021-07-24T07:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2021-07-24T10:00:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-24T13:30:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warm-Up', startUtc: '2021-07-25T07:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '2 Hours of Spa', startUtc: '2021-07-25T11:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'britgt-2021-snetterton',
    round: 5,
    name: 'Snetterton',
    circuitId: 'snetterton-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2021-08-07T08:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-07T11:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 1', startUtc: '2021-08-07T14:30:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warm-Up', startUtc: '2021-08-08T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2021-08-08T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'britgt-2021-oulton-park',
    round: 7,
    name: 'Oulton Park',
    circuitId: 'oulton-park',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2021-09-11T08:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-11T11:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 1', startUtc: '2021-09-11T14:30:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warm-Up', startUtc: '2021-09-12T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2021-09-12T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'britgt-2021-donington-2',
    round: 9,
    name: 'Donington Park',
    circuitId: 'donington-park',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2021-10-16T08:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2021-10-16T11:00:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-16T14:30:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warm-Up', startUtc: '2021-10-17T08:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '2 Hours of Donington', startUtc: '2021-10-17T12:00:00Z', durationMinutes: 120 },
    ],
  },
]
