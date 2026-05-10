import { RaceEvent } from '@/lib/types'

// FIA World Rallycross Championship 2024 — five double-header weekends
// Source: Wikipedia 2024 FIA World Rallycross Championship — verified May 2026
// Note: original China finale (Oct) replaced by a Turkey double-header (Nov 9-10)
// Each doubleheader weekend is split into two events (one per championship round)
// so each scoring round has its own results entry.
export const wrx2024: RaceEvent[] = [
  {
    id: 'wrx-2024-sweden-r1',
    round: 1,
    name: 'World RX of Sweden — Round 1',
    circuitId: 'holjesbanan',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2024-07-06T07:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2024-07-06T13:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'wrx-2024-sweden-r2',
    round: 2,
    name: 'World RX of Sweden — Round 2',
    circuitId: 'holjesbanan',
    sessions: [
      { type: 'race', label: 'Semifinals & Final', startUtc: '2024-07-07T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2024-hungary-r3',
    round: 3,
    name: 'World RX of Hungary — Round 3',
    circuitId: 'nyirad-racing-center',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2024-07-27T07:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2024-07-27T13:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'wrx-2024-hungary-r4',
    round: 4,
    name: 'World RX of Hungary — Round 4',
    circuitId: 'nyirad-racing-center',
    sessions: [
      { type: 'race', label: 'Semifinals & Final', startUtc: '2024-07-28T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2024-benelux-r5',
    round: 5,
    name: 'World RX of Benelux — Round 5',
    circuitId: 'circuit-jules-tacheny-mettet',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2024-08-17T07:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2024-08-17T13:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'wrx-2024-benelux-r6',
    round: 6,
    name: 'World RX of Benelux — Round 6',
    circuitId: 'circuit-jules-tacheny-mettet',
    sessions: [
      { type: 'race', label: 'Semifinals & Final', startUtc: '2024-08-18T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2024-portugal-r7',
    round: 7,
    name: 'World RX of Portugal — Round 7',
    circuitId: 'pista-automovel-de-montalegre',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2024-09-07T08:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2024-09-07T14:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'wrx-2024-portugal-r8',
    round: 8,
    name: 'World RX of Portugal — Round 8',
    circuitId: 'pista-automovel-de-montalegre',
    sessions: [
      { type: 'race', label: 'Semifinals & Final', startUtc: '2024-09-08T12:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2024-turkey-r9',
    round: 9,
    name: 'World RX of Turkey — Round 9',
    circuitId: 'istanbul-park',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2024-11-09T07:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2024-11-09T13:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'wrx-2024-turkey-r10',
    round: 10,
    name: 'World RX of Turkey — Round 10',
    circuitId: 'istanbul-park',
    sessions: [
      { type: 'race', label: 'Semifinals & Final', startUtc: '2024-11-10T11:00:00Z', durationMinutes: 360 },
    ],
  },
]
