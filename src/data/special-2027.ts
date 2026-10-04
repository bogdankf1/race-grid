import { RaceEvent } from '@/lib/types'

// Special Events 2027 — Goodwood (Members' Meeting 10-11 Apr, Festival of Speed 15-18 Jul, Revival 17-19 Sep),
// Le Mans Classic (1-4 Jul), Pikes Peak International Hill Climb (27 Jun). Source: official event websites.
// The Monaco Historique is biennial and not held in 2027. Session times are NOT yet published — all sessions are shown as TBA with placeholder times based on the 2026 weekend.
export const special2027: RaceEvent[] = [
  {
    id: 'special-2027-goodwood-members-meeting',
    name: '84th Goodwood Members\' Meeting',
    circuitId: 'goodwood-motor-circuit',
    sessions: [
      { type: 'race', label: 'Saturday Races', startUtc: '2027-04-10T07:00:00Z', durationMinutes: 600, tba: true },
      { type: 'race', label: 'Sunday Races', startUtc: '2027-04-11T07:00:00Z', durationMinutes: 600, tba: true },
    ],
  },
  {
    id: 'special-2027-pikes-peak',
    name: 'Pikes Peak International Hill Climb',
    circuitId: 'pikes-peak-highway',
    sessions: [
      { type: 'race', label: 'Race to the Clouds', startUtc: '2027-06-27T13:30:00Z', durationMinutes: 360, tba: true },
    ],
  },
  {
    id: 'special-2027-le-mans-classic',
    name: 'Le Mans Classic',
    circuitId: 'circuit-de-la-sarthe',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2027-07-01T07:00:00Z', durationMinutes: 600, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-07-02T07:00:00Z', durationMinutes: 600, tba: true },
      { type: 'endurance', label: 'Plateau Races', startUtc: '2027-07-03T14:00:00Z', durationMinutes: 1440, tba: true },
    ],
  },
  {
    id: 'special-2027-goodwood-fos',
    name: 'Goodwood Festival of Speed',
    circuitId: 'goodwood-hillclimb',
    sessions: [
      { type: 'practice', label: 'Thursday', startUtc: '2027-07-15T06:30:00Z', durationMinutes: 660, tba: true },
      { type: 'practice', label: 'Friday', startUtc: '2027-07-16T06:30:00Z', durationMinutes: 660, tba: true },
      { type: 'practice', label: 'Saturday', startUtc: '2027-07-17T06:30:00Z', durationMinutes: 660, tba: true },
      { type: 'race', label: 'Sunday Shootout', startUtc: '2027-07-18T06:30:00Z', durationMinutes: 660, tba: true },
    ],
  },
  {
    id: 'special-2027-goodwood-revival',
    name: 'Goodwood Revival',
    circuitId: 'goodwood-motor-circuit',
    sessions: [
      { type: 'race', label: 'Friday Races', startUtc: '2027-09-17T07:00:00Z', durationMinutes: 600, tba: true },
      { type: 'race', label: 'Saturday Races', startUtc: '2027-09-18T07:00:00Z', durationMinutes: 600, tba: true },
      { type: 'race', label: 'Sunday Races', startUtc: '2027-09-19T07:00:00Z', durationMinutes: 600, tba: true },
    ],
  },
]
