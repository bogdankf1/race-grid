import { RaceEvent } from '@/lib/types'

// F3 2021 calendar — 7 rounds supporting F1
// 2021 format: Practice (45min), Qualifying (30min), Race 1 (40min), Race 2 (40min), Race 3 (45min)
// Note: 3 races per weekend in 2021 (reverse grid for Race 1 & 2, Race 3 = feature race)
export const f32021: RaceEvent[] = [
  {
    id: 'f3-2021-spain',
    round: 1,
    name: 'Spain',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-05-07T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-07T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Race 1', startUtc: '2021-05-08T07:15:00Z', durationMinutes: 40 },
      { type: 'sprint', label: 'Race 2', startUtc: '2021-05-08T13:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Race 3', startUtc: '2021-05-09T07:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2021-france',
    round: 2,
    name: 'France',
    circuitId: 'circuit-paul-ricard',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-06-18T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-18T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Race 1', startUtc: '2021-06-19T07:15:00Z', durationMinutes: 40 },
      { type: 'sprint', label: 'Race 2', startUtc: '2021-06-19T13:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Race 3', startUtc: '2021-06-20T07:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2021-austria',
    round: 3,
    name: 'Austria',
    circuitId: 'red-bull-ring',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-07-02T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-02T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Race 1', startUtc: '2021-07-03T07:15:00Z', durationMinutes: 40 },
      { type: 'sprint', label: 'Race 2', startUtc: '2021-07-03T13:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Race 3', startUtc: '2021-07-04T07:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2021-hungary',
    round: 4,
    name: 'Hungary',
    circuitId: 'hungaroring',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-07-30T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-30T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Race 1', startUtc: '2021-07-31T07:15:00Z', durationMinutes: 40 },
      { type: 'sprint', label: 'Race 2', startUtc: '2021-07-31T13:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Race 3', startUtc: '2021-08-01T07:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2021-belgium',
    round: 5,
    name: 'Belgium',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-08-27T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-27T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Race 1', startUtc: '2021-08-28T07:15:00Z', durationMinutes: 40 },
      { type: 'sprint', label: 'Race 2', startUtc: '2021-08-28T13:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Race 3', startUtc: '2021-08-29T07:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2021-netherlands',
    round: 6,
    name: 'Netherlands',
    circuitId: 'circuit-zandvoort',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-09-03T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-03T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Race 1', startUtc: '2021-09-04T07:15:00Z', durationMinutes: 40 },
      { type: 'sprint', label: 'Race 2', startUtc: '2021-09-04T13:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Race 3', startUtc: '2021-09-05T07:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2021-russia',
    round: 7,
    name: 'Russia',
    circuitId: 'sochi-autodrom',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-09-24T05:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-24T09:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Race 1', startUtc: '2021-09-25T06:15:00Z', durationMinutes: 40 },
      { type: 'sprint', label: 'Race 2', startUtc: '2021-09-25T12:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Race 3', startUtc: '2021-09-26T06:00:00Z', durationMinutes: 45 },
    ],
  },
]
