import { RaceEvent } from '@/lib/types'

// F2 2023 calendar — 14 rounds supporting F1 (Imola cancelled due to flooding, 13 held)
// Format from 2023: Practice (45min), Qualifying (30min), Sprint Race (45min), Feature Race (60min)
export const f22023: RaceEvent[] = [
  {
    id: 'f2-2023-bahrain',
    round: 1,
    name: 'Bahrain',
    circuitId: 'bahrain-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-03-03T09:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-03-03T13:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2023-03-04T12:35:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2023-03-05T11:40:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2023-saudi-arabia',
    round: 2,
    name: 'Saudi Arabia',
    circuitId: 'jeddah-corniche-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-03-17T09:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-03-17T13:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2023-03-18T12:35:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2023-03-19T11:40:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2023-australia',
    round: 3,
    name: 'Australia',
    circuitId: 'albert-park-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-03-31T00:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-03-31T04:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2023-04-01T00:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2023-04-02T00:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2023-azerbaijan',
    round: 4,
    name: 'Azerbaijan',
    circuitId: 'baku-city-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-04-28T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-28T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2023-04-29T07:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2023-04-30T06:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2023-monaco',
    round: 5,
    name: 'Monaco',
    circuitId: 'circuit-de-monaco',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-05-25T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-05-25T11:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2023-05-26T08:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2023-05-28T08:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2023-spain',
    round: 6,
    name: 'Spain',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-06-02T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-02T11:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2023-06-03T08:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2023-06-04T08:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2023-austria',
    round: 7,
    name: 'Austria',
    circuitId: 'red-bull-ring',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-06-30T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-30T11:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2023-07-01T08:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2023-07-02T08:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2023-great-britain',
    round: 8,
    name: 'Great Britain',
    circuitId: 'silverstone-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-07-07T08:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-07T12:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2023-07-08T09:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2023-07-09T09:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2023-hungary',
    round: 9,
    name: 'Hungary',
    circuitId: 'hungaroring',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-07-21T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-21T11:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2023-07-22T08:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2023-07-23T08:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2023-belgium',
    round: 10,
    name: 'Belgium',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-07-28T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-28T11:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2023-07-29T08:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2023-07-30T08:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2023-netherlands',
    round: 11,
    name: 'Netherlands',
    circuitId: 'circuit-zandvoort',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-08-25T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-25T11:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2023-08-26T08:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2023-08-27T08:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2023-italy',
    round: 12,
    name: 'Italy',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-09-01T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-01T11:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2023-09-02T08:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2023-09-03T08:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2023-abu-dhabi',
    round: 13,
    name: 'Abu Dhabi',
    circuitId: 'yas-marina-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-11-24T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-11-24T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2023-11-25T09:35:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2023-11-26T08:40:00Z', durationMinutes: 60 },
    ],
  },
]
