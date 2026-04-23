import { RaceEvent } from '@/lib/types'

// British GT Championship 2023 — 9 rounds across 7 events
// Source: Wikipedia / britishgt.com
export const britgt2023: RaceEvent[] = [
  {
    id: 'britgt-2023-oulton-park',
    round: 1,
    name: 'Oulton Park',
    circuitId: 'oulton-park',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2023-04-08T08:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-08T11:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 1', startUtc: '2023-04-09T12:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2023-04-10T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'britgt-2023-silverstone',
    round: 3,
    name: 'Silverstone',
    circuitId: 'silverstone-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2023-05-06T08:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2023-05-06T11:00:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-05-06T14:30:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warm Up', startUtc: '2023-05-07T08:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: 'Silverstone 500', startUtc: '2023-05-07T12:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'britgt-2023-donington-1',
    round: 4,
    name: 'Donington Park',
    circuitId: 'donington-park',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2023-05-27T08:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2023-05-27T11:00:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-05-27T14:30:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warm Up', startUtc: '2023-05-28T08:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '2 Hours of Donington', startUtc: '2023-05-28T12:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'britgt-2023-snetterton',
    round: 5,
    name: 'Snetterton',
    circuitId: 'snetterton-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2023-06-17T08:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-17T11:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 1', startUtc: '2023-06-17T14:30:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warm Up', startUtc: '2023-06-18T08:30:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race 2', startUtc: '2023-06-18T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'britgt-2023-portimao',
    round: 7,
    name: 'Portimao',
    circuitId: 'algarve-international-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2023-07-22T08:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2023-07-22T11:00:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-22T14:30:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warm Up', startUtc: '2023-07-23T08:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '3 Hours of Portimao', startUtc: '2023-07-23T12:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'britgt-2023-brands-hatch',
    round: 8,
    name: 'Brands Hatch',
    circuitId: 'brands-hatch',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2023-09-09T08:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2023-09-09T11:00:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-09T14:30:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warm Up', startUtc: '2023-09-10T08:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '2 Hours of Brands Hatch', startUtc: '2023-09-10T12:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'britgt-2023-donington-2',
    round: 9,
    name: 'Donington Park',
    circuitId: 'donington-park',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2023-10-21T08:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2023-10-21T11:00:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-10-21T14:30:00Z', durationMinutes: 60 },
      { type: 'warmup', label: 'Warm Up', startUtc: '2023-10-22T08:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '2 Hours of Donington', startUtc: '2023-10-22T12:00:00Z', durationMinutes: 120 },
    ],
  },
]
