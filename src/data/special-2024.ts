import { RaceEvent } from '@/lib/types'

// Special Events 2024 — historic, hillclimb, festival
// Sources: official event websites — verified May 2026
// Note: Race of Champions and Le Mans Classic were not held in 2024.
export const special2024: RaceEvent[] = [
  // 81st Goodwood Members' Meeting — 13-14 April 2024 (BST, UTC+1)
  {
    id: 'special-2024-goodwood-members-meeting',
    name: '81st Goodwood Members\' Meeting',
    circuitId: 'goodwood-motor-circuit',
    sessions: [
      { type: 'race', label: 'Saturday Races', startUtc: '2024-04-13T07:00:00Z', durationMinutes: 600 },
      { type: 'race', label: 'Sunday Races', startUtc: '2024-04-14T07:00:00Z', durationMinutes: 600 },
    ],
  },
  // 14th Grand Prix de Monaco Historique — 10-12 May 2024 (CEST, UTC+2)
  {
    id: 'special-2024-monaco-historique',
    name: '14th Grand Prix de Monaco Historique',
    circuitId: 'circuit-de-monaco',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2024-05-10T07:00:00Z', durationMinutes: 540 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-11T07:00:00Z', durationMinutes: 540 },
      { type: 'race', label: 'Races', startUtc: '2024-05-12T07:00:00Z', durationMinutes: 540 },
    ],
  },
  // Pikes Peak International Hill Climb — 23 June 2024 (MDT, UTC-6)
  {
    id: 'special-2024-pikes-peak',
    name: 'Pikes Peak International Hill Climb',
    circuitId: 'pikes-peak-highway',
    sessions: [
      { type: 'race', label: 'Race to the Clouds', startUtc: '2024-06-23T13:30:00Z', durationMinutes: 360 },
    ],
  },
  // Goodwood Festival of Speed — 11-14 July 2024 (BST, UTC+1)
  {
    id: 'special-2024-goodwood-fos',
    name: 'Goodwood Festival of Speed',
    circuitId: 'goodwood-hillclimb',
    sessions: [
      { type: 'practice', label: 'Thursday', startUtc: '2024-07-11T06:30:00Z', durationMinutes: 660 },
      { type: 'practice', label: 'Friday', startUtc: '2024-07-12T06:30:00Z', durationMinutes: 660 },
      { type: 'practice', label: 'Saturday', startUtc: '2024-07-13T06:30:00Z', durationMinutes: 660 },
      { type: 'race', label: 'Sunday Shootout', startUtc: '2024-07-14T06:30:00Z', durationMinutes: 660 },
    ],
  },
  // Goodwood Revival — 6-8 September 2024 (BST, UTC+1)
  {
    id: 'special-2024-goodwood-revival',
    name: 'Goodwood Revival',
    circuitId: 'goodwood-motor-circuit',
    sessions: [
      { type: 'race', label: 'Friday Races', startUtc: '2024-09-06T07:00:00Z', durationMinutes: 600 },
      { type: 'race', label: 'Saturday Races', startUtc: '2024-09-07T07:00:00Z', durationMinutes: 600 },
      { type: 'race', label: 'Sunday Races', startUtc: '2024-09-08T07:00:00Z', durationMinutes: 600 },
    ],
  },
]
