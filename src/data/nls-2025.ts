import { RaceEvent } from '@/lib/types'

// NLS (Nurburgring Langstrecken-Serie) 2025 — 48th season
// 10 races + 1 NLS-Light at 8 event weekends, all at Nurburgring Nordschleife
// Source: nuerburgring-langstrecken-serie.de, wikipedia
export const nls2025: RaceEvent[] = [
  {
    id: 'nls-2025-1',
    round: 1,
    name: 'NLS 1 — 70. ADAC Westfalenfahrt',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-03-22T07:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2025-03-22T11:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2025-2',
    round: 2,
    name: 'NLS 2 — ADAC Ruhrpott-Trophy',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-04-26T07:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2025-04-26T11:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2025-3',
    round: 3,
    name: 'NLS 3 — 56. Adenauer ADAC Rundstrecken-Trophy',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-10T07:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2025-05-10T11:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2025-24h-quali-1',
    round: 4,
    name: 'ADAC 24h Qualifier — Race 1',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-24T07:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Qualifying Race 1', startUtc: '2025-05-24T11:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2025-24h-quali-2',
    round: 5,
    name: 'ADAC 24h Qualifier — Race 2',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-25T07:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Qualifying Race 2', startUtc: '2025-05-25T11:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2025-light',
    round: 6,
    name: 'NLS-Light',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-05T07:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2025-07-05T11:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2025-6',
    round: 7,
    name: 'NLS 6 — KW 6h ADAC Ruhr-Pokal-Rennen',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-16T07:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '6h Race', startUtc: '2025-08-16T10:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'nls-2025-7',
    round: 8,
    name: 'NLS 7 — 65. ADAC ACAS Cup',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-09-13T07:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2025-09-13T11:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2025-8',
    round: 9,
    name: 'NLS 8 — 64. ADAC Reinoldus-Langstreckenrennen',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-09-14T07:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2025-09-14T11:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2025-9',
    round: 10,
    name: 'NLS 9 — 57. ADAC Barbarossapreis',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-09-27T07:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2025-09-27T11:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2025-10',
    round: 11,
    name: 'NLS 10 — 1. NLS Sportwarte-Rennen',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-10-11T07:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2025-10-11T11:00:00Z', durationMinutes: 240 },
    ],
  },
]
