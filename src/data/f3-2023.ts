import { RaceEvent } from '@/lib/types'

// F3 2023 calendar — 10 rounds supporting F1 (Imola cancelled due to flooding, 9 held)
// Format from 2023: Practice (45min), Qualifying (30min), Sprint Race (40min), Feature Race (45min)
export const f32023: RaceEvent[] = [
  {
    id: 'f3-2023-bahrain',
    round: 1,
    name: 'Bahrain',
    circuitId: 'bahrain-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-03-03T08:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-03-03T12:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2023-03-04T11:35:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2023-03-05T10:40:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2023-australia',
    round: 2,
    name: 'Australia',
    circuitId: 'albert-park-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-03-30T23:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-03-31T03:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2023-03-31T23:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2023-04-01T23:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2023-monaco',
    round: 3,
    name: 'Monaco',
    circuitId: 'circuit-de-monaco',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-05-25T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-05-25T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2023-05-26T07:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2023-05-28T07:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2023-spain',
    round: 4,
    name: 'Spain',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-06-02T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-02T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2023-06-03T07:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2023-06-04T07:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2023-austria',
    round: 5,
    name: 'Austria',
    circuitId: 'red-bull-ring',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-06-30T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-30T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2023-07-01T07:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2023-07-02T07:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2023-great-britain',
    round: 6,
    name: 'Great Britain',
    circuitId: 'silverstone-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-07-07T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-07T11:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2023-07-08T08:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2023-07-09T08:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2023-hungary',
    round: 7,
    name: 'Hungary',
    circuitId: 'hungaroring',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-07-21T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-21T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2023-07-22T07:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2023-07-23T07:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2023-belgium',
    round: 8,
    name: 'Belgium',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-07-28T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-28T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2023-07-29T07:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2023-07-30T07:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2023-italy',
    round: 9,
    name: 'Italy',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-09-01T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-01T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2023-09-02T07:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2023-09-03T07:00:00Z', durationMinutes: 45 },
    ],
  },
]
