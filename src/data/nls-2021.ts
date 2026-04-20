import { RaceEvent } from '@/lib/types'

// NLS (Nurburgring Langstrecken-Serie) 2021 — 44th season
// 9 races at 8 event weekends, all at Nurburgring Nordschleife
// Source: nuerburgring-langstrecken-serie.de, wikipedia
export const nls2021: RaceEvent[] = [
  {
    id: 'nls-2021-1',
    round: 1,
    name: 'NLS 1 — 66. ADAC Westfalenfahrt',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-03-27T07:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2021-03-27T11:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2021-2',
    round: 2,
    name: 'NLS 2 — 45. DMV 4-Stunden-Rennen',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-04-17T06:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2021-04-17T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2021-3',
    round: 3,
    name: 'NLS 3 — 62. ADAC ACAS Cup',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-01T06:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2021-05-01T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2021-4',
    round: 4,
    name: 'NLS 4 — 52. Adenauer ADAC Rundstrecken-Trophy',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-26T06:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2021-06-26T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2021-5',
    round: 5,
    name: 'NLS 5 — 61. ADAC Reinoldus-Langstreckenrennen',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-10T06:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2021-07-10T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2021-6',
    round: 6,
    name: 'NLS 6 — 44. RCM DMV Grenzlandrennen',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-11T06:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2021-07-11T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2021-7',
    round: 7,
    name: 'NLS 7 — ROWE 6 Stunden ADAC Ruhr-Pokal-Rennen',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-11T06:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '6h Race', startUtc: '2021-09-11T10:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'nls-2021-8',
    round: 8,
    name: 'NLS 8 — 53. ADAC Barbarossapreis',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-25T06:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2021-09-25T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2021-9',
    round: 9,
    name: 'NLS 9 — 45. DMV Münsterlandpokal',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-09T06:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2021-10-09T10:00:00Z', durationMinutes: 240 },
    ],
  },
]
