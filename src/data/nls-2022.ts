import { RaceEvent } from '@/lib/types'

// NLS (Nurburgring Langstrecken-Serie) 2022 — 45th season
// 8 races at 7 event weekends, all at Nurburgring Nordschleife
// Round 2 (46. DMV 4h-Rennen) postponed from Apr 9 to Nov 5 due to snow
// Source: nuerburgring-langstrecken-serie.de, wikipedia
export const nls2022: RaceEvent[] = [
  {
    id: 'nls-2022-1',
    round: 1,
    name: 'NLS 1 — 67. ADAC Westfalenfahrt',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-03-26T07:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2022-03-26T11:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2022-2',
    round: 2,
    name: 'NLS 2 — 53. Adenauer ADAC Rundstrecken-Trophy',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-23T06:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2022-04-23T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2022-3',
    round: 3,
    name: 'NLS 3 — 45. RCM DMV Grenzlandrennen',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-25T06:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2022-06-25T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2022-4',
    round: 4,
    name: 'NLS 4 — ROWE 6 Stunden ADAC Ruhr-Pokal-Rennen',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-09T06:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '6h Race', startUtc: '2022-07-09T10:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'nls-2022-5',
    round: 5,
    name: 'NLS 5 — 12 Stunden Nürburgring',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-10T06:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '12h Race', startUtc: '2022-09-10T08:00:00Z', durationMinutes: 720 },
    ],
  },
  {
    id: 'nls-2022-6',
    round: 6,
    name: 'NLS 6 — 54. ADAC Barbarossapreis',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-08T06:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2022-10-08T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2022-7',
    round: 7,
    name: 'NLS 7 — PAGID Racing 46. DMV Münsterlandpokal',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-22T06:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2022-10-22T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2022-8',
    round: 8,
    name: 'NLS 8 — 46. NIMEX DMV 4-Stunden-Rennen',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-11-05T07:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2022-11-05T11:00:00Z', durationMinutes: 240 },
    ],
  },
]
