import { RaceEvent } from '@/lib/types'

// NLS (Nurburgring Langstrecken-Serie) 2024 — 47th season
// 8 races at 6 event weekends, all at Nurburgring Nordschleife
// Reduced calendar due to legal dispute with track owners over race dates
// Source: nuerburgring-langstrecken-serie.de, wikipedia
export const nls2024: RaceEvent[] = [
  {
    id: 'nls-2024-1',
    round: 1,
    name: 'NLS 1 — 64. ADAC ACAS Cup',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-06T06:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2024-04-06T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2024-2',
    round: 2,
    name: 'NLS 2 — 63. ADAC Reinoldus-Langstreckenrennen',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-07T06:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2024-04-07T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2024-24h-quali-1',
    round: 3,
    name: 'ADAC 24h Qualifier — Race 1',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-13T06:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Qualifying Race 1', startUtc: '2024-04-13T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2024-24h-quali-2',
    round: 4,
    name: 'ADAC 24h Qualifier — Race 2',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-14T06:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Qualifying Race 2', startUtc: '2024-04-14T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2024-3',
    round: 5,
    name: 'NLS 3 — 69. ADAC Westfalenfahrt',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-22T06:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2024-06-22T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2024-4',
    round: 6,
    name: 'NLS 4 — 6h ADAC Ruhr-Pokal-Rennen',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-03T06:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '6h Race', startUtc: '2024-08-03T10:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'nls-2024-5',
    round: 7,
    name: 'NLS 5 — 55. Adenauer ADAC Rundstrecken-Trophy',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-10-19T06:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2024-10-19T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2024-6',
    round: 8,
    name: 'NLS 6 — 56. ADAC Barbarossapreis',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-11-16T07:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2024-11-16T11:00:00Z', durationMinutes: 240 },
    ],
  },
]
