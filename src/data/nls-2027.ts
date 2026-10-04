import { RaceEvent } from '@/lib/types'

// NLS (Nurburgring Langstrecken-Serie) 2027 — 50th anniversary season: 8 races (incl. one double-header and a 6h race).
// Source: nuerburgring-langstrecken-serie.de calendar (announced Sep 2026). Official race names not yet published —
// generic "NLS n" names are used. The 24h Nürburgring Series planned for 2027 has been postponed to 2028.
// Session times are NOT yet published — all sessions are shown as TBA with placeholder times based on the 2026 weekend.
export const nls2027: RaceEvent[] = [
  {
    id: 'nls-2027-1',
    round: 1,
    name: 'NLS 1',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-03-20T07:30:00Z', durationMinutes: 90, tba: true },
      { type: 'endurance', label: '4h Race', startUtc: '2027-03-20T11:00:00Z', durationMinutes: 240, tba: true },
    ],
  },
  {
    id: 'nls-2027-2',
    round: 2,
    name: 'NLS 2',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-04-17T06:30:00Z', durationMinutes: 90, tba: true },
      { type: 'endurance', label: '4h Race', startUtc: '2027-04-17T10:00:00Z', durationMinutes: 240, tba: true },
    ],
  },
  {
    id: 'nls-2027-3',
    round: 3,
    name: 'NLS 3',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-07-03T06:30:00Z', durationMinutes: 90, tba: true },
      { type: 'endurance', label: '4h Race', startUtc: '2027-07-03T10:00:00Z', durationMinutes: 240, tba: true },
    ],
  },
  {
    id: 'nls-2027-4',
    round: 4,
    name: 'NLS 4 — 6h Race',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-08-07T06:30:00Z', durationMinutes: 90, tba: true },
      { type: 'endurance', label: '6h Race', startUtc: '2027-08-07T10:00:00Z', durationMinutes: 360, tba: true },
    ],
  },
  {
    id: 'nls-2027-5',
    round: 5,
    name: 'NLS 5 (double-header, race 1)',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-09-11T06:30:00Z', durationMinutes: 90, tba: true },
      { type: 'endurance', label: '4h Race', startUtc: '2027-09-11T10:00:00Z', durationMinutes: 240, tba: true },
    ],
  },
  {
    id: 'nls-2027-6',
    round: 6,
    name: 'NLS 6 (double-header, race 2)',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-09-12T06:30:00Z', durationMinutes: 90, tba: true },
      { type: 'endurance', label: '4h Race', startUtc: '2027-09-12T10:00:00Z', durationMinutes: 240, tba: true },
    ],
  },
  {
    id: 'nls-2027-7',
    round: 7,
    name: 'NLS 7',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-09-25T06:30:00Z', durationMinutes: 90, tba: true },
      { type: 'endurance', label: '4h Race', startUtc: '2027-09-25T10:00:00Z', durationMinutes: 240, tba: true },
    ],
  },
  {
    id: 'nls-2027-8',
    round: 8,
    name: 'NLS 8',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-10-09T06:30:00Z', durationMinutes: 90, tba: true },
      { type: 'endurance', label: '4h Race', startUtc: '2027-10-09T10:00:00Z', durationMinutes: 240, tba: true },
    ],
  },
]
