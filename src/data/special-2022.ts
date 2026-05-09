import { RaceEvent } from '@/lib/types'

// Special Events 2022 — historic, hillclimb, festival
// Sources: official event websites — verified May 2026
export const special2022: RaceEvent[] = [
  // 79th Goodwood Members' Meeting — 9-10 April 2022 (BST, UTC+1)
  {
    id: 'special-2022-goodwood-members-meeting',
    name: '79th Goodwood Members\' Meeting',
    circuitId: 'goodwood-motor-circuit',
    sessions: [
      { type: 'race', label: 'Saturday Races', startUtc: '2022-04-09T07:00:00Z', durationMinutes: 600 },
      { type: 'race', label: 'Sunday Races', startUtc: '2022-04-10T07:00:00Z', durationMinutes: 600 },
    ],
  },
  // 13th Grand Prix de Monaco Historique — 13-15 May 2022 (CEST, UTC+2)
  {
    id: 'special-2022-monaco-historique',
    name: '13th Grand Prix de Monaco Historique',
    circuitId: 'circuit-de-monaco',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2022-05-13T07:00:00Z', durationMinutes: 540 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-14T07:00:00Z', durationMinutes: 540 },
      { type: 'race', label: 'Races', startUtc: '2022-05-15T07:00:00Z', durationMinutes: 540 },
    ],
  },
  // Goodwood Festival of Speed — 23-26 June 2022 (BST, UTC+1)
  {
    id: 'special-2022-goodwood-fos',
    name: 'Goodwood Festival of Speed',
    circuitId: 'goodwood-hillclimb',
    sessions: [
      { type: 'practice', label: 'Thursday', startUtc: '2022-06-23T06:30:00Z', durationMinutes: 660 },
      { type: 'practice', label: 'Friday', startUtc: '2022-06-24T06:30:00Z', durationMinutes: 660 },
      { type: 'practice', label: 'Saturday', startUtc: '2022-06-25T06:30:00Z', durationMinutes: 660 },
      { type: 'race', label: 'Sunday Shootout', startUtc: '2022-06-26T06:30:00Z', durationMinutes: 660 },
    ],
  },
  // Pikes Peak International Hill Climb — 26 June 2022 (100th running) (MDT, UTC-6)
  {
    id: 'special-2022-pikes-peak',
    name: 'Pikes Peak International Hill Climb (100th)',
    circuitId: 'pikes-peak-highway',
    sessions: [
      { type: 'race', label: 'Race to the Clouds', startUtc: '2022-06-26T13:30:00Z', durationMinutes: 360 },
    ],
  },
  // 10th Le Mans Classic — 30 June - 3 July 2022 (CEST, UTC+2)
  {
    id: 'special-2022-le-mans-classic',
    name: '10th Le Mans Classic',
    circuitId: 'circuit-de-la-sarthe',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-06-30T07:00:00Z', durationMinutes: 600 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-01T07:00:00Z', durationMinutes: 600 },
      { type: 'endurance', label: 'Plateau Races', startUtc: '2022-07-02T14:00:00Z', durationMinutes: 1440 },
    ],
  },
  // Goodwood Revival — 16-18 September 2022 (BST, UTC+1)
  {
    id: 'special-2022-goodwood-revival',
    name: 'Goodwood Revival',
    circuitId: 'goodwood-motor-circuit',
    sessions: [
      { type: 'race', label: 'Friday Races', startUtc: '2022-09-16T07:00:00Z', durationMinutes: 600 },
      { type: 'race', label: 'Saturday Races', startUtc: '2022-09-17T07:00:00Z', durationMinutes: 600 },
      { type: 'race', label: 'Sunday Races', startUtc: '2022-09-18T07:00:00Z', durationMinutes: 600 },
    ],
  },
]
