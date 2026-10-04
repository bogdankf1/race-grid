import { RaceEvent } from '@/lib/types'

// FIA Formula 2 2026 calendar — 14 rounds supporting F1
// Source: sportstimes/f1 schedule data (matches fiaformula2.com), session times in UTC — re-verified Oct 2026
// F2 format: Practice (45 min), Qualifying (30 min), Sprint Race (45 min), Feature Race (60 min)
export const f22026: RaceEvent[] = [
  {
    id: 'f2-2026-melbourne',
    round: 1,
    name: 'Melbourne',
    circuitId: 'albert-park-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-03-05T23:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-06T03:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-03-07T03:30:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-03-08T00:25:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2026-miami',
    round: 2,
    name: 'Miami',
    circuitId: 'miami-international-autodrome',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-05-01T13:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-01T18:30:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-05-02T14:00:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-05-03T13:25:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2026-montreal',
    round: 3,
    name: 'Montréal',
    circuitId: 'circuit-gilles-villeneuve',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-05-22T14:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-22T18:20:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-05-23T18:10:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-05-24T16:05:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2026-monaco',
    round: 4,
    name: 'Monaco',
    circuitId: 'circuit-de-monaco',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-06-04T13:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-05T13:10:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-06-06T12:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-06-07T07:25:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2026-barcelona',
    round: 5,
    name: 'Barcelona',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-06-12T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-12T13:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-06-13T12:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-06-14T09:25:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2026-spielberg',
    round: 6,
    name: 'Spielberg',
    circuitId: 'red-bull-ring',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-06-26T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-26T13:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-06-27T12:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-06-28T08:10:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2026-silverstone',
    round: 7,
    name: 'Silverstone',
    circuitId: 'silverstone-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-07-03T09:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-03T13:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-07-04T12:45:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-07-05T10:15:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2026-spa',
    round: 8,
    name: 'Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-07-17T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-17T13:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-07-18T12:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-07-19T08:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2026-budapest',
    round: 9,
    name: 'Budapest',
    circuitId: 'hungaroring',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-07-24T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-24T13:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-07-25T12:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-07-26T09:25:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2026-monza',
    round: 10,
    name: 'Monza',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-09-04T08:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-04T12:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-09-05T12:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-09-06T07:45:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2026-madrid',
    round: 11,
    name: 'Madrid',
    circuitId: 'circuito-de-madrid',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-09-11T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-11T13:00:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-09-12T12:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-09-13T09:25:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2026-baku',
    round: 12,
    name: 'Baku',
    circuitId: 'baku-city-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-09-24T06:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-24T10:00:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-09-25T04:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-09-26T07:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2026-lusail',
    round: 13,
    name: 'Lusail',
    circuitId: 'lusail-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-11-27T09:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-11-27T13:00:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-11-28T10:00:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-11-29T09:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2026-abu-dhabi',
    round: 14,
    name: 'Abu Dhabi',
    circuitId: 'yas-marina-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-12-04T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-12-04T11:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2026-12-05T06:35:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2026-12-06T06:40:00Z', durationMinutes: 60 },
    ],
  },
]
