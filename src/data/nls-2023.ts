import { RaceEvent } from '@/lib/types'

// NLS (Nurburgring Langstrecken-Serie) 2023 — 46th season
// 9 races at 7 event weekends, all at Nurburgring Nordschleife
// Includes 12h Nurburgring split into two 6h races (rounds 6 & 7)
// Source: nuerburgring-langstrecken-serie.de, wikipedia
export const nls2023: RaceEvent[] = [
  {
    id: 'nls-2023-1',
    round: 1,
    name: 'NLS 1 — 68. ADAC Westfalenfahrt',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-03-18T07:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2023-03-18T11:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2023-2',
    round: 2,
    name: 'NLS 2 — 47. NIMEX DMV 4-Stunden-Rennen',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-01T06:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2023-04-01T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2023-3',
    round: 3,
    name: 'NLS 3 — 54. Adenauer ADAC Rundstrecken-Trophy',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-15T06:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2023-04-15T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2023-4',
    round: 4,
    name: 'NLS 4 — 46. RCM DMV Grenzlandrennen',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-17T06:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2023-06-17T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2023-5',
    round: 5,
    name: 'NLS 5 — ROWE 6h ADAC Ruhr-Pokal-Rennen',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-08T06:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '6h Race', startUtc: '2023-07-08T10:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'nls-2023-12h-1',
    round: 6,
    name: '12h Nürburgring — 63. ADAC ACAS Cup',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-09T06:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '6h Race', startUtc: '2023-09-09T10:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'nls-2023-12h-2',
    round: 7,
    name: '12h Nürburgring — 62. ADAC Reinoldus-Langstreckenrennen',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-10T06:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '6h Race', startUtc: '2023-09-10T10:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'nls-2023-8',
    round: 8,
    name: 'NLS 8 — 55. ADAC Barbarossapreis',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-23T06:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2023-09-23T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2023-9',
    round: 9,
    name: 'NLS 9 — 47. PAGID Racing DMV Münsterlandpokal',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-10-07T06:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2023-10-07T10:00:00Z', durationMinutes: 240 },
    ],
  },
]
