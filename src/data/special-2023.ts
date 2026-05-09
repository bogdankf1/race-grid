import { RaceEvent } from '@/lib/types'

// Special Events 2023 — historic, hillclimb, festival, all-stars
// Sources: official event websites — verified May 2026
export const special2023: RaceEvent[] = [
  // 2023 Race Of Champions — Pite Havsbad, Sweden — 28-29 January 2023 (CET, UTC+1)
  {
    id: 'special-2023-roc-pite-havsbad',
    name: 'Race Of Champions Pite Havsbad',
    circuitId: 'pite-havsbad',
    sessions: [
      { type: 'race', label: 'Nations Cup', startUtc: '2023-01-28T17:00:00Z', durationMinutes: 180 },
      { type: 'race', label: 'Champion of Champions', startUtc: '2023-01-29T17:00:00Z', durationMinutes: 180 },
    ],
  },
  // 80th Goodwood Members' Meeting — 15-16 April 2023 (BST, UTC+1)
  {
    id: 'special-2023-goodwood-members-meeting',
    name: '80th Goodwood Members\' Meeting',
    circuitId: 'goodwood-motor-circuit',
    sessions: [
      { type: 'race', label: 'Saturday Races', startUtc: '2023-04-15T07:00:00Z', durationMinutes: 600 },
      { type: 'race', label: 'Sunday Races', startUtc: '2023-04-16T07:00:00Z', durationMinutes: 600 },
    ],
  },
  // Pikes Peak International Hill Climb — 25 June 2023 (MDT, UTC-6)
  {
    id: 'special-2023-pikes-peak',
    name: 'Pikes Peak International Hill Climb',
    circuitId: 'pikes-peak-highway',
    sessions: [
      { type: 'race', label: 'Race to the Clouds', startUtc: '2023-06-25T13:30:00Z', durationMinutes: 360 },
    ],
  },
  // 11th Le Mans Classic (centenary edition) — 29 June - 2 July 2023 (CEST, UTC+2)
  {
    id: 'special-2023-le-mans-classic',
    name: '11th Le Mans Classic',
    circuitId: 'circuit-de-la-sarthe',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-06-29T07:00:00Z', durationMinutes: 600 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-30T07:00:00Z', durationMinutes: 600 },
      { type: 'endurance', label: 'Plateau Races', startUtc: '2023-07-01T14:00:00Z', durationMinutes: 1440 },
    ],
  },
  // Goodwood Festival of Speed — 13-16 July 2023 (BST, UTC+1)
  {
    id: 'special-2023-goodwood-fos',
    name: 'Goodwood Festival of Speed',
    circuitId: 'goodwood-hillclimb',
    sessions: [
      { type: 'practice', label: 'Thursday', startUtc: '2023-07-13T06:30:00Z', durationMinutes: 660 },
      { type: 'practice', label: 'Friday', startUtc: '2023-07-14T06:30:00Z', durationMinutes: 660 },
      { type: 'practice', label: 'Saturday', startUtc: '2023-07-15T06:30:00Z', durationMinutes: 660 },
      { type: 'race', label: 'Sunday Shootout', startUtc: '2023-07-16T06:30:00Z', durationMinutes: 660 },
    ],
  },
  // Goodwood Revival — 8-10 September 2023 (BST, UTC+1)
  {
    id: 'special-2023-goodwood-revival',
    name: 'Goodwood Revival',
    circuitId: 'goodwood-motor-circuit',
    sessions: [
      { type: 'race', label: 'Friday Races', startUtc: '2023-09-08T07:00:00Z', durationMinutes: 600 },
      { type: 'race', label: 'Saturday Races', startUtc: '2023-09-09T07:00:00Z', durationMinutes: 600 },
      { type: 'race', label: 'Sunday Races', startUtc: '2023-09-10T07:00:00Z', durationMinutes: 600 },
    ],
  },
]
