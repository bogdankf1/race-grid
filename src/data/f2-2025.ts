import { RaceEvent } from '@/lib/types'

// FIA Formula 2 2025 calendar — 14 rounds supporting F1
// Source: fiaformula2.com, Wikipedia, formula1.com — verified April 2026
// F2 format: Practice (45 min), Qualifying (30 min), Sprint Race (45 min), Feature Race (60 min)
// Melbourne R1 Feature Race cancelled due to heavy rain
// Session times converted from local to UTC based on official F1 support timetables
export const f22025: RaceEvent[] = [
  {
    id: 'f2-2025-melbourne',
    round: 1,
    name: 'Melbourne',
    circuitId: 'albert-park-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-03-13T23:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-03-14T06:30:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2025-03-15T03:15:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2025-03-16T00:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2025-bahrain',
    round: 2,
    name: 'Sakhir',
    circuitId: 'bahrain-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-04-11T09:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-04-11T13:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2025-04-12T12:35:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2025-04-13T11:40:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2025-jeddah',
    round: 3,
    name: 'Jeddah',
    circuitId: 'jeddah-corniche-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-04-18T09:45:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-04-18T15:00:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2025-04-19T13:35:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2025-04-20T12:40:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2025-imola',
    round: 4,
    name: 'Imola',
    circuitId: 'autodromo-enzo-e-dino-ferrari',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-05-16T09:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-16T13:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2025-05-17T08:35:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2025-05-18T08:40:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2025-monaco',
    round: 5,
    name: 'Monaco',
    circuitId: 'circuit-de-monaco',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-05-22T09:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-23T13:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2025-05-24T08:35:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2025-05-25T08:40:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2025-barcelona',
    round: 6,
    name: 'Barcelona',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-05-30T09:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-30T13:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2025-05-31T08:35:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2025-06-01T08:40:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2025-spielberg',
    round: 7,
    name: 'Spielberg',
    circuitId: 'red-bull-ring',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-06-27T09:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-06-27T13:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2025-06-28T08:35:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2025-06-29T08:40:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2025-silverstone',
    round: 8,
    name: 'Silverstone',
    circuitId: 'silverstone-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-07-04T10:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-04T14:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2025-07-05T09:35:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2025-07-06T09:40:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2025-spa',
    round: 9,
    name: 'Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-07-25T09:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-25T13:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2025-07-26T08:35:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2025-07-27T08:40:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2025-budapest',
    round: 10,
    name: 'Budapest',
    circuitId: 'hungaroring',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-08-01T09:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-01T13:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2025-08-02T08:35:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2025-08-03T08:40:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2025-monza',
    round: 11,
    name: 'Monza',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-09-05T09:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-09-05T13:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2025-09-06T08:35:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2025-09-07T08:40:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2025-baku',
    round: 12,
    name: 'Baku',
    circuitId: 'baku-city-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-09-19T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-09-19T11:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2025-09-20T06:35:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2025-09-21T06:40:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2025-lusail',
    round: 13,
    name: 'Lusail',
    circuitId: 'lusail-international-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-11-28T08:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-11-28T12:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2025-11-29T07:35:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2025-11-30T07:40:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'f2-2025-abu-dhabi',
    round: 14,
    name: 'Abu Dhabi',
    circuitId: 'yas-marina-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-12-05T07:55:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-12-05T11:55:00Z', durationMinutes: 30 },
      { type: 'sprint', label: 'Sprint Race', startUtc: '2025-12-06T06:35:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Feature Race', startUtc: '2025-12-07T06:40:00Z', durationMinutes: 60 },
    ],
  },
]
