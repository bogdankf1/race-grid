import { RaceEvent } from '@/lib/types'

// Special Events 2025 — historic, hillclimb, festival, all-stars
// Sources: official event websites — verified May 2026
export const special2025: RaceEvent[] = [
  // 2025 Race Of Champions Sydney — 7-8 March 2025 (AEDT, UTC+11)
  {
    id: 'special-2025-roc-sydney',
    name: 'Race Of Champions Sydney',
    circuitId: 'accor-stadium',
    sessions: [
      { type: 'race', label: 'Nations Cup', startUtc: '2025-03-07T08:30:00Z', durationMinutes: 180 },
      { type: 'race', label: 'Champion of Champions', startUtc: '2025-03-08T08:30:00Z', durationMinutes: 180 },
    ],
  },
  // 82nd Goodwood Members' Meeting — 12-13 April 2025 (BST, UTC+1)
  {
    id: 'special-2025-goodwood-members-meeting',
    name: '82nd Goodwood Members\' Meeting',
    circuitId: 'goodwood-motor-circuit',
    sessions: [
      { type: 'race', label: 'Saturday Races', startUtc: '2025-04-12T07:00:00Z', durationMinutes: 600 },
      { type: 'race', label: 'Sunday Races', startUtc: '2025-04-13T07:00:00Z', durationMinutes: 600 },
    ],
  },
  // Pikes Peak International Hill Climb — 22 June 2025 (MDT, UTC-6)
  {
    id: 'special-2025-pikes-peak',
    name: 'Pikes Peak International Hill Climb',
    circuitId: 'pikes-peak-highway',
    sessions: [
      { type: 'race', label: 'Race to the Clouds', startUtc: '2025-06-22T13:30:00Z', durationMinutes: 360 },
    ],
  },
  // 12th Le Mans Classic — 3-6 July 2025 (CEST, UTC+2)
  {
    id: 'special-2025-le-mans-classic',
    name: '12th Le Mans Classic',
    circuitId: 'circuit-de-la-sarthe',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-07-03T07:00:00Z', durationMinutes: 600 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-04T07:00:00Z', durationMinutes: 600 },
      { type: 'endurance', label: 'Plateau Races', startUtc: '2025-07-05T14:00:00Z', durationMinutes: 1440 },
    ],
  },
  // Goodwood Festival of Speed — 10-13 July 2025 (BST, UTC+1)
  {
    id: 'special-2025-goodwood-fos',
    name: 'Goodwood Festival of Speed',
    circuitId: 'goodwood-hillclimb',
    sessions: [
      { type: 'practice', label: 'Thursday', startUtc: '2025-07-10T06:30:00Z', durationMinutes: 660 },
      { type: 'practice', label: 'Friday', startUtc: '2025-07-11T06:30:00Z', durationMinutes: 660 },
      { type: 'practice', label: 'Saturday', startUtc: '2025-07-12T06:30:00Z', durationMinutes: 660 },
      { type: 'race', label: 'Sunday Shootout', startUtc: '2025-07-13T06:30:00Z', durationMinutes: 660 },
    ],
  },
  // Goodwood Revival — 12-14 September 2025 (BST, UTC+1)
  {
    id: 'special-2025-goodwood-revival',
    name: 'Goodwood Revival',
    circuitId: 'goodwood-motor-circuit',
    sessions: [
      { type: 'race', label: 'Friday Races', startUtc: '2025-09-12T07:00:00Z', durationMinutes: 600 },
      { type: 'race', label: 'Saturday Races', startUtc: '2025-09-13T07:00:00Z', durationMinutes: 600 },
      { type: 'race', label: 'Sunday Races', startUtc: '2025-09-14T07:00:00Z', durationMinutes: 600 },
    ],
  },
]
