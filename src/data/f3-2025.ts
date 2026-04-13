import { RaceEvent } from '@/lib/types'

// FIA Formula 3 2025 calendar — 10 rounds supporting F1
// Source: fiaformula3.com, tracinginsights.com, Wikipedia — verified April 2026
// F3 format: Practice (45 min), Qualifying (30 min), Sprint Race (40 min), Feature Race (45 min)
// Champion: Rafael Câmara (Trident). Teams' champion: Campos Racing.
export const f32025: RaceEvent[] = [
  {
    id: 'f3-2025-melbourne',
    round: 1,
    name: 'Melbourne',
    circuitId: 'albert-park-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-03-13T21:50:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-03-14T03:00:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2025-03-15T00:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2025-03-15T22:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2025-bahrain',
    round: 2,
    name: 'Sakhir',
    circuitId: 'bahrain-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-04-11T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-04-11T13:00:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2025-04-12T10:15:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2025-04-13T09:55:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2025-imola',
    round: 3,
    name: 'Imola',
    circuitId: 'autodromo-enzo-e-dino-ferrari',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-05-16T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-16T13:05:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2025-05-17T08:05:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2025-05-18T06:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2025-monaco',
    round: 4,
    name: 'Monaco',
    circuitId: 'circuit-de-monaco',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-05-22T11:10:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-23T09:05:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2025-05-24T08:45:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2025-05-25T06:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2025-barcelona',
    round: 5,
    name: 'Barcelona',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-05-30T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-30T13:00:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2025-05-31T08:05:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2025-06-01T06:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2025-spielberg',
    round: 6,
    name: 'Spielberg',
    circuitId: 'red-bull-ring',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-06-27T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-06-27T13:00:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2025-06-28T08:05:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2025-06-29T06:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2025-silverstone',
    round: 7,
    name: 'Silverstone',
    circuitId: 'silverstone-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-07-04T07:45:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-04T10:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2025-07-05T15:45:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2025-07-06T08:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2025-spa',
    round: 8,
    name: 'Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-07-25T06:45:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-25T09:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2025-07-26T14:45:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2025-07-27T07:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2025-budapest',
    round: 9,
    name: 'Budapest',
    circuitId: 'hungaroring',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-08-01T06:45:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-01T09:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2025-08-02T14:45:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2025-08-03T07:20:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'f3-2025-monza',
    round: 10,
    name: 'Monza',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-09-05T06:45:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-09-05T09:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2025-09-06T14:45:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Feature Race', startUtc: '2025-09-07T07:20:00Z', durationMinutes: 45 },
    ],
  },
]
