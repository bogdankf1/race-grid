import { RaceEvent } from '@/lib/types'

// FIA World Rallycross Championship 2024 — five double-header weekends
// Source: Wikipedia 2024 FIA World Rallycross Championship — verified May 2026
// Note: original China finale (Oct) replaced by a Turkey double-header (Nov 9-10)
export const wrx2024: RaceEvent[] = [
  {
    id: 'wrx-2024-sweden',
    round: 1,
    name: 'World RX of Sweden (Double-Header, Rounds 1 & 2)',
    circuitId: 'holjesbanan',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2024-07-06T07:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Round 1 — Semifinals & Final', startUtc: '2024-07-06T13:00:00Z', durationMinutes: 240 },
      { type: 'race', label: 'Round 2 — Semifinals & Final', startUtc: '2024-07-07T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2024-hungary',
    round: 3,
    name: 'World RX of Hungary (Double-Header, Rounds 3 & 4)',
    circuitId: 'nyirad-racing-center',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2024-07-27T07:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Round 3 — Semifinals & Final', startUtc: '2024-07-27T13:00:00Z', durationMinutes: 240 },
      { type: 'race', label: 'Round 4 — Semifinals & Final', startUtc: '2024-07-28T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2024-benelux',
    round: 5,
    name: 'World RX of Benelux (Double-Header, Rounds 5 & 6)',
    circuitId: 'circuit-jules-tacheny-mettet',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2024-08-17T07:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Round 5 — Semifinals & Final', startUtc: '2024-08-17T13:00:00Z', durationMinutes: 240 },
      { type: 'race', label: 'Round 6 — Semifinals & Final', startUtc: '2024-08-18T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2024-portugal',
    round: 7,
    name: 'World RX of Portugal (Double-Header, Rounds 7 & 8)',
    circuitId: 'pista-automovel-de-montalegre',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2024-09-07T08:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Round 7 — Semifinals & Final', startUtc: '2024-09-07T14:00:00Z', durationMinutes: 240 },
      { type: 'race', label: 'Round 8 — Semifinals & Final', startUtc: '2024-09-08T12:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2024-turkey',
    round: 9,
    name: 'World RX of Turkey (Double-Header, Rounds 9 & 10)',
    circuitId: 'istanbul-park',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2024-11-09T07:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Round 9 — Semifinals & Final', startUtc: '2024-11-09T13:00:00Z', durationMinutes: 240 },
      { type: 'race', label: 'Round 10 — Semifinals & Final', startUtc: '2024-11-10T11:00:00Z', durationMinutes: 360 },
    ],
  },
]
