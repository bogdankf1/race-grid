import { RaceEvent } from '@/lib/types'

// FIA World Rallycross Championship 2025 — final World RX season
// Source: Wikipedia 2025 FIA World Rallycross Championship — verified May 2026
export const wrx2025: RaceEvent[] = [
  {
    id: 'wrx-2025-portugal',
    round: 1,
    name: 'World RX of Portugal',
    circuitId: 'circuito-automovel-de-lousada',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2025-05-31T08:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2025-06-01T12:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2025-sweden',
    round: 2,
    name: 'World RX of Sweden',
    circuitId: 'holjesbanan',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2025-07-05T07:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2025-07-06T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2025-hungary',
    round: 3,
    name: 'World RX of Hungary',
    circuitId: 'nyirad-racing-center',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2025-07-19T07:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2025-07-20T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2025-finland',
    round: 4,
    name: 'World RX of Finland',
    circuitId: 'kymiring',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2025-08-23T06:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2025-08-24T10:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2025-turkey-double',
    round: 5,
    name: 'World RX of Turkey (Double-Header, Rounds 5 & 6)',
    circuitId: 'istanbul-park',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2025-09-20T06:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Round 5 — Semifinals & Final', startUtc: '2025-09-20T12:00:00Z', durationMinutes: 240 },
      { type: 'race', label: 'Round 6 — Semifinals & Final', startUtc: '2025-09-21T10:00:00Z', durationMinutes: 360 },
    ],
  },
]
