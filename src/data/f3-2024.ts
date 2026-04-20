import { RaceEvent } from '@/lib/types'

// F3 2024 calendar — 10 rounds supporting F1
// Format from 2023: Practice (45min), Qualifying (30min), Sprint Race (40min), Feature Race (45min)
export const f32024: RaceEvent[] = [
  {
    id: 'f3-2024-bahrain',
    round: 1,
    name: 'Bahrain',
    circuitId: 'bahrain-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-02-29T08:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-02-29T12:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2024-03-01T11:35:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2024-03-02T10:40:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2024-australia',
    round: 2,
    name: 'Australia',
    circuitId: 'albert-park-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-03-21T23:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-22T03:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2024-03-22T23:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2024-03-23T23:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2024-emilia-romagna',
    round: 3,
    name: 'Emilia Romagna',
    circuitId: 'autodromo-enzo-e-dino-ferrari',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-05-17T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-17T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2024-05-18T07:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2024-05-19T07:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2024-monaco',
    round: 4,
    name: 'Monaco',
    circuitId: 'circuit-de-monaco',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-05-23T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-23T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2024-05-24T07:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2024-05-26T07:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2024-spain',
    round: 5,
    name: 'Spain',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-06-21T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-21T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2024-06-22T07:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2024-06-23T07:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2024-austria',
    round: 6,
    name: 'Austria',
    circuitId: 'red-bull-ring',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-06-28T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-28T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2024-06-29T07:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2024-06-30T07:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2024-great-britain',
    round: 7,
    name: 'Great Britain',
    circuitId: 'silverstone-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-07-05T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-05T11:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2024-07-06T08:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2024-07-07T08:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2024-hungary',
    round: 8,
    name: 'Hungary',
    circuitId: 'hungaroring',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-07-19T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-19T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2024-07-20T07:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2024-07-21T07:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2024-belgium',
    round: 9,
    name: 'Belgium',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-07-26T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-26T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2024-07-27T07:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2024-07-28T07:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2024-italy',
    round: 10,
    name: 'Italy',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-08-30T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-30T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2024-08-31T07:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2024-09-01T07:00:00Z', durationMinutes: 45 },
    ],
  },
]
