import { RaceEvent } from '@/lib/types'

// Special Events 2026 — historic, hillclimb, festival, all-stars
// Sources: official event websites — verified May 2026
export const special2026: RaceEvent[] = [
  // 83rd Goodwood Members' Meeting — 18-19 April 2026 (BST, UTC+1)
  {
    id: 'special-2026-goodwood-members-meeting',
    name: '83rd Goodwood Members\' Meeting',
    circuitId: 'goodwood-motor-circuit',
    sessions: [
      { type: 'race', label: 'Saturday Races', startUtc: '2026-04-18T07:00:00Z', durationMinutes: 600 },
      { type: 'race', label: 'Sunday Races', startUtc: '2026-04-19T07:00:00Z', durationMinutes: 600 },
    ],
  },
  // 15th Grand Prix de Monaco Historique — 24-26 April 2026 (CEST, UTC+2)
  {
    id: 'special-2026-monaco-historique',
    name: '15th Grand Prix de Monaco Historique',
    circuitId: 'circuit-de-monaco',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2026-04-24T07:00:00Z', durationMinutes: 540 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-25T07:00:00Z', durationMinutes: 540 },
      { type: 'race', label: 'Races', startUtc: '2026-04-26T07:00:00Z', durationMinutes: 540 },
    ],
  },
  // Pikes Peak International Hill Climb — 21 June 2026 (MDT, UTC-6)
  {
    id: 'special-2026-pikes-peak',
    name: 'Pikes Peak International Hill Climb',
    circuitId: 'pikes-peak-highway',
    sessions: [
      { type: 'race', label: 'Race to the Clouds', startUtc: '2026-06-21T13:30:00Z', durationMinutes: 360 },
    ],
  },
  // Le Mans Classic Legend — 2-5 July 2026 (CEST, UTC+2)
  {
    id: 'special-2026-le-mans-classic',
    name: 'Le Mans Classic Legend',
    circuitId: 'circuit-de-la-sarthe',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-07-02T07:00:00Z', durationMinutes: 600 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-03T07:00:00Z', durationMinutes: 600 },
      { type: 'endurance', label: 'Plateau Races', startUtc: '2026-07-04T14:00:00Z', durationMinutes: 1440 },
    ],
  },
  // Goodwood Festival of Speed — 9-12 July 2026 (BST, UTC+1)
  {
    id: 'special-2026-goodwood-fos',
    name: 'Goodwood Festival of Speed',
    circuitId: 'goodwood-hillclimb',
    sessions: [
      { type: 'practice', label: 'Thursday', startUtc: '2026-07-09T06:30:00Z', durationMinutes: 660 },
      { type: 'practice', label: 'Friday', startUtc: '2026-07-10T06:30:00Z', durationMinutes: 660 },
      { type: 'practice', label: 'Saturday', startUtc: '2026-07-11T06:30:00Z', durationMinutes: 660 },
      { type: 'race', label: 'Sunday Shootout', startUtc: '2026-07-12T06:30:00Z', durationMinutes: 660 },
    ],
  },
  // Goodwood Revival — 18-20 September 2026 (BST, UTC+1)
  {
    id: 'special-2026-goodwood-revival',
    name: 'Goodwood Revival',
    circuitId: 'goodwood-motor-circuit',
    sessions: [
      { type: 'race', label: 'Friday Races', startUtc: '2026-09-18T07:00:00Z', durationMinutes: 600 },
      { type: 'race', label: 'Saturday Races', startUtc: '2026-09-19T07:00:00Z', durationMinutes: 600 },
      { type: 'race', label: 'Sunday Races', startUtc: '2026-09-20T07:00:00Z', durationMinutes: 600 },
    ],
  },
]
