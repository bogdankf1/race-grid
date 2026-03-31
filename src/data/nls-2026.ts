import { RaceEvent } from '@/lib/types'

// NLS (Nurburgring Langstrecken-Serie) 2026 — 50th anniversary season
// 10 races at 8 events, all at Nurburgring Nordschleife
// Source: nuerburgring-langstrecken-serie.de official calendar
export const nls2026: RaceEvent[] = [
  // NLS 1 cancelled due to weather — removed from schedule
  {
    id: 'nls-2026-2',
    round: 2,
    name: 'NLS 2 — 58. ADAC Barbarossapreis',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-21T07:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2026-03-21T11:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2026-3',
    round: 3,
    name: 'NLS 3 — 57. Adenauer ADAC Rundstrecken-Trophy',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-11T07:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2026-04-11T11:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2026-24h-quali-1',
    round: 4,
    name: 'ADAC 24h Qualifier — Race 1',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-18T07:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Qualifying Race 1', startUtc: '2026-04-18T11:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2026-24h-quali-2',
    round: 5,
    name: 'ADAC 24h Qualifier — Race 2',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-19T07:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Qualifying Race 2', startUtc: '2026-04-19T11:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2026-6',
    round: 6,
    name: 'NLS 6 — 1. ADAC Eifel Trophy',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-20T07:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2026-06-20T11:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2026-7',
    round: 7,
    name: 'NLS 7 — KW 6h ADAC Ruhr-Pokal-Rennen',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-01T07:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '6h Race', startUtc: '2026-08-01T10:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'nls-2026-8',
    round: 8,
    name: 'NLS 8 — 65. ADAC Reinoldus-Langstreckenrennen',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-12T07:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2026-09-12T11:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2026-9',
    round: 9,
    name: 'NLS 9 — 58. ADAC Barbarossapreis',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-13T07:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2026-09-13T11:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'nls-2026-10',
    round: 10,
    name: 'NLS 10 — 2. NLS Sportwarte-Trophy',
    circuitId: 'nurburgring-nordschleife',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-10T07:30:00Z', durationMinutes: 90 },
      { type: 'endurance', label: '4h Race', startUtc: '2026-10-10T11:00:00Z', durationMinutes: 240 },
    ],
  },
]
