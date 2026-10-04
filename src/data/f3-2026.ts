import { RaceEvent } from '@/lib/types'

// FIA Formula 3 2026 calendar — 9 rounds supporting F1
// Source: sportstimes/f1 schedule data (matches fiaformula3.com), session times in UTC — re-verified Oct 2026
export const f32026: RaceEvent[] = [
  {
    id: 'f3-2026-melbourne',
    round: 1,
    name: 'Melbourne',
    circuitId: 'albert-park-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-03-05T21:50:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-06T03:00:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-03-07T00:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-03-07T21:50:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2026-monaco',
    round: 2,
    name: 'Monaco',
    circuitId: 'circuit-de-monaco',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-06-04T11:25:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-05T09:05:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-06-06T08:45:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-06-07T05:45:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2026-barcelona',
    round: 3,
    name: 'Barcelona',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-06-12T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-12T13:00:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-06-13T08:05:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-06-14T06:40:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2026-spielberg',
    round: 4,
    name: 'Spielberg',
    circuitId: 'red-bull-ring',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-06-26T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-26T13:00:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-06-27T08:05:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-06-28T06:40:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2026-silverstone',
    round: 5,
    name: 'Silverstone',
    circuitId: 'silverstone-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-07-03T07:50:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-03T13:00:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-07-04T08:35:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-07-05T07:25:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2026-spa',
    round: 6,
    name: 'Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-07-17T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-17T13:00:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-07-18T08:00:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-07-19T06:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2026-budapest',
    round: 7,
    name: 'Budapest',
    circuitId: 'hungaroring',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-07-24T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-24T13:00:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-07-25T08:05:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-07-26T06:40:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2026-monza',
    round: 8,
    name: 'Monza',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-09-04T06:35:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-04T12:00:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-09-05T07:30:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-09-06T06:15:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2026-madrid',
    round: 9,
    name: 'Madrid',
    circuitId: 'circuito-de-madrid',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-09-11T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-11T16:25:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-09-12T09:05:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-09-13T07:45:00Z', durationMinutes: 45 },
    ],
  },
]
