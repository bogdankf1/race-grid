import { RaceEvent } from '@/lib/types'

// British GT Championship 2022 — 9 rounds across 7 events
// Source: Wikipedia / britishgt.com
export const britgt2022: RaceEvent[] = [
  {
    id: 'britgt-2022-oulton-park',
    round: 1,
    name: 'Oulton Park',
    circuitId: 'oulton-park',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2022-04-16T08:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-16T11:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 1', startUtc: '2022-04-17T12:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2022-04-18T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'britgt-2022-silverstone',
    round: 3,
    name: 'Silverstone',
    circuitId: 'silverstone-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2022-05-07T08:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2022-05-07T11:00:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-07T14:30:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warm Up', startUtc: '2022-05-08T08:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: 'Silverstone 500', startUtc: '2022-05-08T12:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'britgt-2022-donington-1',
    round: 4,
    name: 'Donington Park',
    circuitId: 'donington-park',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2022-05-28T08:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2022-05-28T11:00:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-28T14:30:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warm Up', startUtc: '2022-05-29T08:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '3 Hours of Donington', startUtc: '2022-05-29T12:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'britgt-2022-snetterton',
    round: 5,
    name: 'Snetterton',
    circuitId: 'snetterton-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2022-06-25T08:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-25T11:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 1', startUtc: '2022-06-25T14:30:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warm Up', startUtc: '2022-06-26T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2022-06-26T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'britgt-2022-spa',
    round: 7,
    name: 'Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2022-07-23T07:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2022-07-23T10:00:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-23T13:30:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warm Up', startUtc: '2022-07-24T07:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '2 Hours of Spa', startUtc: '2022-07-24T11:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'britgt-2022-brands-hatch',
    round: 8,
    name: 'Brands Hatch',
    circuitId: 'brands-hatch',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2022-09-10T08:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2022-09-10T11:00:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-10T14:30:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warm Up', startUtc: '2022-09-11T08:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '2 Hours of Brands Hatch', startUtc: '2022-09-11T12:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'britgt-2022-donington-2',
    round: 9,
    name: 'Donington Park',
    circuitId: 'donington-park',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2022-10-15T08:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2022-10-15T11:00:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-15T14:30:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warm Up', startUtc: '2022-10-16T08:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '2 Hours of Donington', startUtc: '2022-10-16T12:00:00Z', durationMinutes: 120 },
    ],
  },
]
