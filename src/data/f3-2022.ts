import { RaceEvent } from '@/lib/types'

// F3 2022 calendar — 9 rounds supporting F1
// 2022 format: Practice (45min), Qualifying (30min), Sprint Race (40min), Feature Race (45min)
// Note: Reverted from 3 races to 2 races per weekend in 2022
export const f32022: RaceEvent[] = [
  {
    id: 'f3-2022-bahrain',
    round: 1,
    name: 'Bahrain',
    circuitId: 'bahrain-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-03-18T08:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-03-18T12:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2022-03-19T09:35:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2022-03-20T10:40:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2022-emilia-romagna',
    round: 2,
    name: 'Emilia Romagna',
    circuitId: 'autodromo-enzo-e-dino-ferrari',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-04-22T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-22T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2022-04-23T07:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2022-04-24T07:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2022-spain',
    round: 3,
    name: 'Spain',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-05-20T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-20T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2022-05-21T07:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2022-05-22T07:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2022-great-britain',
    round: 4,
    name: 'Great Britain',
    circuitId: 'silverstone-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-07-01T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-01T11:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2022-07-02T08:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2022-07-03T08:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2022-austria',
    round: 5,
    name: 'Austria',
    circuitId: 'red-bull-ring',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-07-08T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-08T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2022-07-09T07:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2022-07-10T07:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2022-hungary',
    round: 6,
    name: 'Hungary',
    circuitId: 'hungaroring',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-07-29T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-29T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2022-07-30T07:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2022-07-31T07:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2022-belgium',
    round: 7,
    name: 'Belgium',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-08-26T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-08-26T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2022-08-27T07:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2022-08-28T07:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2022-netherlands',
    round: 8,
    name: 'Netherlands',
    circuitId: 'circuit-zandvoort',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-09-02T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-02T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2022-09-03T07:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2022-09-04T07:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2022-italy',
    round: 9,
    name: 'Italy',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-09-09T06:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-09T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2022-09-10T07:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2022-09-11T07:00:00Z', durationMinutes: 45 },
    ],
  },
]
