import { RaceEvent } from '@/lib/types'

// Special Events 2021 — pandemic-affected calendar
// Sources: official event websites — verified May 2026
// Note: Race of Champions, Le Mans Classic, and Monaco Historique not held in 2021.
// 78th Members' Meeting was rescheduled from April to October due to COVID-19.
export const special2021: RaceEvent[] = [
  // Pikes Peak International Hill Climb — 27 June 2021 (MDT, UTC-6)
  {
    id: 'special-2021-pikes-peak',
    name: '99th Pikes Peak International Hill Climb',
    circuitId: 'pikes-peak-highway',
    sessions: [
      { type: 'race', label: 'Race to the Clouds', startUtc: '2021-06-27T13:30:00Z', durationMinutes: 360 },
    ],
  },
  // Goodwood Festival of Speed — 8-11 July 2021 (BST, UTC+1)
  {
    id: 'special-2021-goodwood-fos',
    name: 'Goodwood Festival of Speed',
    circuitId: 'goodwood-hillclimb',
    sessions: [
      { type: 'practice', label: 'Thursday', startUtc: '2021-07-08T06:30:00Z', durationMinutes: 660 },
      { type: 'practice', label: 'Friday', startUtc: '2021-07-09T06:30:00Z', durationMinutes: 660 },
      { type: 'practice', label: 'Saturday', startUtc: '2021-07-10T06:30:00Z', durationMinutes: 660 },
      { type: 'race', label: 'Sunday Shootout', startUtc: '2021-07-11T06:30:00Z', durationMinutes: 660 },
    ],
  },
  // Goodwood Revival — 17-19 September 2021 (BST, UTC+1)
  {
    id: 'special-2021-goodwood-revival',
    name: 'Goodwood Revival',
    circuitId: 'goodwood-motor-circuit',
    sessions: [
      { type: 'race', label: 'Friday Races', startUtc: '2021-09-17T07:00:00Z', durationMinutes: 600 },
      { type: 'race', label: 'Saturday Races', startUtc: '2021-09-18T07:00:00Z', durationMinutes: 600 },
      { type: 'race', label: 'Sunday Races', startUtc: '2021-09-19T07:00:00Z', durationMinutes: 600 },
    ],
  },
  // 78th Goodwood Members' Meeting — 16-17 October 2021 (rescheduled, BST until 31 Oct)
  {
    id: 'special-2021-goodwood-members-meeting',
    name: '78th Goodwood Members\' Meeting',
    circuitId: 'goodwood-motor-circuit',
    sessions: [
      { type: 'race', label: 'Saturday Races', startUtc: '2021-10-16T07:00:00Z', durationMinutes: 600 },
      { type: 'race', label: 'Sunday Races', startUtc: '2021-10-17T07:00:00Z', durationMinutes: 600 },
    ],
  },
]
