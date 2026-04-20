import { RaceEvent } from '@/lib/types'

// F2 2024 calendar — 14 rounds supporting F1
// Format: Practice (45min), Qualifying (30min), Sprint Race (45min), Feature Race (60min)
export const f22024: RaceEvent[] = [
  {
    id: 'f2-2024-bahrain',
    round: 1,
    name: 'Bahrain',
    circuitId: 'bahrain-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-02-29T09:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-02-29T13:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2024-03-01T12:35:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2024-03-02T11:40:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2024-saudi-arabia',
    round: 2,
    name: 'Saudi Arabia',
    circuitId: 'jeddah-corniche-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-03-07T09:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-07T13:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2024-03-08T12:35:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2024-03-09T11:40:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2024-australia',
    round: 3,
    name: 'Australia',
    circuitId: 'albert-park-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-03-22T00:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-22T04:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2024-03-23T00:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2024-03-24T00:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2024-emilia-romagna',
    round: 4,
    name: 'Emilia Romagna',
    circuitId: 'autodromo-enzo-e-dino-ferrari',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-05-17T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-17T11:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2024-05-18T08:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2024-05-19T08:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2024-monaco',
    round: 5,
    name: 'Monaco',
    circuitId: 'circuit-de-monaco',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-05-23T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-23T11:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2024-05-24T08:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2024-05-26T08:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2024-spain',
    round: 6,
    name: 'Spain',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-06-21T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-21T11:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2024-06-22T08:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2024-06-23T08:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2024-austria',
    round: 7,
    name: 'Austria',
    circuitId: 'red-bull-ring',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-06-28T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-28T11:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2024-06-29T08:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2024-06-30T08:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2024-great-britain',
    round: 8,
    name: 'Great Britain',
    circuitId: 'silverstone-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-07-05T08:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-05T12:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2024-07-06T09:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2024-07-07T09:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2024-hungary',
    round: 9,
    name: 'Hungary',
    circuitId: 'hungaroring',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-07-19T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-19T11:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2024-07-20T08:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2024-07-21T08:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2024-belgium',
    round: 10,
    name: 'Belgium',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-07-26T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-26T11:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2024-07-27T08:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2024-07-28T08:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2024-italy',
    round: 11,
    name: 'Italy',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-08-30T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-30T11:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2024-08-31T08:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2024-09-01T08:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2024-azerbaijan',
    round: 12,
    name: 'Azerbaijan',
    circuitId: 'baku-city-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-09-13T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-13T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2024-09-14T07:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2024-09-15T06:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2024-qatar',
    round: 13,
    name: 'Qatar',
    circuitId: 'lusail-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-11-29T09:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-11-29T13:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2024-11-30T12:35:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2024-12-01T11:40:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2024-abu-dhabi',
    round: 14,
    name: 'Abu Dhabi',
    circuitId: 'yas-marina-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-12-06T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-12-06T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2024-12-07T09:35:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2024-12-08T08:40:00Z', durationMinutes: 60 },
    ],
  },
]
