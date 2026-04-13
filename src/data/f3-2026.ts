import { RaceEvent } from '@/lib/types'

// FIA Formula 3 2026 calendar — 9 rounds supporting F1
// Source: fiaformula3.com, f3calendar.com — verified April 2026
// F3 format: Practice (45 min), Qualifying (30 min), Sprint Race (40 min), Feature Race (45 min)
// F3 runs on F1 support weekends alongside F2
export const f32026: RaceEvent[] = [
  {
    id: 'f3-2026-melbourne',
    round: 1,
    name: 'Melbourne',
    circuitId: 'albert-park-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-03-05T21:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-06T02:05:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-03-07T01:50:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-03-07T22:55:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2026-monaco',
    round: 2,
    name: 'Monaco',
    circuitId: 'circuit-de-monaco',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-06-05T08:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-05T12:15:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-06-06T07:00:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-06-07T07:25:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2026-barcelona',
    round: 3,
    name: 'Barcelona',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-06-12T08:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-12T12:15:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-06-13T07:00:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-06-14T07:25:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2026-spielberg',
    round: 4,
    name: 'Spielberg',
    circuitId: 'red-bull-ring',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-06-26T08:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-26T12:15:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-06-27T07:00:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-06-28T07:25:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2026-silverstone',
    round: 5,
    name: 'Silverstone',
    circuitId: 'silverstone-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-07-03T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-03T13:15:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-07-04T08:00:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-07-05T08:25:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2026-spa',
    round: 6,
    name: 'Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-07-17T08:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-17T12:15:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-07-18T07:00:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-07-19T07:25:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2026-budapest',
    round: 7,
    name: 'Budapest',
    circuitId: 'hungaroring',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-07-24T08:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-24T12:15:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-07-25T07:00:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-07-26T07:25:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2026-monza',
    round: 8,
    name: 'Monza',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-09-04T08:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-04T12:15:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-09-05T07:00:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-09-06T07:25:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2026-madrid',
    round: 9,
    name: 'Madrid',
    circuitId: 'circuito-de-madrid',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-09-11T08:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-11T12:15:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-09-12T07:00:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-09-13T07:25:00Z', durationMinutes: 45 },
    ],
  },
]
