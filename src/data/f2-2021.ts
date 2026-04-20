import { RaceEvent } from '@/lib/types'

// F2 2021 calendar — 8 rounds supporting F1
// 2021 format: Practice (45min), Qualifying (30min), Sprint Race 1 (45min), Sprint Race 2 (45min), Feature Race (60min)
// Note: 3 races per weekend in 2021
export const f22021: RaceEvent[] = [
  {
    id: 'f2-2021-bahrain',
    round: 1,
    name: 'Bahrain',
    circuitId: 'bahrain-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-03-26T09:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-03-26T13:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race 1', startUtc: '2021-03-27T10:35:00Z', durationMinutes: 45 },
      { type: 'sprint', label: 'Sprint Race 2', startUtc: '2021-03-27T16:35:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2021-03-28T11:40:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2021-monaco',
    round: 2,
    name: 'Monaco',
    circuitId: 'circuit-de-monaco',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-05-20T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-20T11:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race 1', startUtc: '2021-05-21T08:15:00Z', durationMinutes: 45 },
      { type: 'sprint', label: 'Sprint Race 2', startUtc: '2021-05-21T14:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2021-05-22T08:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2021-azerbaijan',
    round: 3,
    name: 'Azerbaijan',
    circuitId: 'baku-city-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-06-04T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-04T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race 1', startUtc: '2021-06-05T07:15:00Z', durationMinutes: 45 },
      { type: 'sprint', label: 'Sprint Race 2', startUtc: '2021-06-05T13:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2021-06-06T06:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2021-great-britain',
    round: 4,
    name: 'Great Britain',
    circuitId: 'silverstone-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-07-16T08:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-16T12:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race 1', startUtc: '2021-07-17T09:15:00Z', durationMinutes: 45 },
      { type: 'sprint', label: 'Sprint Race 2', startUtc: '2021-07-17T15:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2021-07-18T09:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2021-italy',
    round: 5,
    name: 'Italy',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-09-10T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-10T11:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race 1', startUtc: '2021-09-11T08:15:00Z', durationMinutes: 45 },
      { type: 'sprint', label: 'Sprint Race 2', startUtc: '2021-09-11T14:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2021-09-12T08:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2021-russia',
    round: 6,
    name: 'Russia',
    circuitId: 'sochi-autodrom',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-09-24T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-24T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race 1', startUtc: '2021-09-25T07:15:00Z', durationMinutes: 45 },
      { type: 'sprint', label: 'Sprint Race 2', startUtc: '2021-09-25T13:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2021-09-26T06:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2021-saudi-arabia',
    round: 7,
    name: 'Saudi Arabia',
    circuitId: 'jeddah-corniche-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-12-03T09:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-12-03T13:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race 1', startUtc: '2021-12-04T12:35:00Z', durationMinutes: 45 },
      { type: 'sprint', label: 'Sprint Race 2', startUtc: '2021-12-04T17:35:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2021-12-05T11:40:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2021-abu-dhabi',
    round: 8,
    name: 'Abu Dhabi',
    circuitId: 'yas-marina-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-12-10T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-12-10T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race 1', startUtc: '2021-12-11T09:35:00Z', durationMinutes: 45 },
      { type: 'sprint', label: 'Sprint Race 2', startUtc: '2021-12-11T14:35:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2021-12-12T08:40:00Z', durationMinutes: 60 },
    ],
  },
]
