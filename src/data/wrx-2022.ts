import { RaceEvent } from '@/lib/types'

// FIA World Rallycross Championship 2022 — first all-electric era
// Source: Wikipedia 2022 FIA World Rallycross Championship — verified May 2026
// Doubleheader weekends are split into two events (one per championship round)
// so each scoring round has its own results entry.
export const wrx2022: RaceEvent[] = [
  {
    id: 'wrx-2022-sweden',
    round: 1,
    name: 'World RX of Sweden',
    circuitId: 'holjesbanan',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2022-07-02T07:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2022-07-03T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2022-norway',
    round: 2,
    name: 'World RX of Norway',
    circuitId: 'lankebanen',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2022-08-13T07:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2022-08-14T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2022-latvia-r3',
    round: 3,
    name: 'World RX of Riga-Latvia — Round 3',
    circuitId: 'bikernieki',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2022-09-03T06:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2022-09-03T12:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'wrx-2022-latvia-r4',
    round: 4,
    name: 'World RX of Riga-Latvia — Round 4',
    circuitId: 'bikernieki',
    sessions: [
      { type: 'race', label: 'Semifinals & Final', startUtc: '2022-09-04T10:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2022-portugal-r5',
    round: 5,
    name: 'World RX of Portugal — Round 5',
    circuitId: 'pista-automovel-de-montalegre',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2022-09-17T08:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2022-09-17T14:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'wrx-2022-portugal-r6',
    round: 6,
    name: 'World RX of Portugal — Round 6',
    circuitId: 'pista-automovel-de-montalegre',
    sessions: [
      { type: 'race', label: 'Semifinals & Final', startUtc: '2022-09-18T12:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2022-belgium-r7',
    round: 7,
    name: 'World RX of Benelux — Spa-Francorchamps — Round 7',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2022-10-08T07:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2022-10-08T13:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'wrx-2022-belgium-r8',
    round: 8,
    name: 'World RX of Benelux — Spa-Francorchamps — Round 8',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'race', label: 'Semifinals & Final', startUtc: '2022-10-09T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2022-spain-r9',
    round: 9,
    name: 'World RX of Catalunya — Round 9',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2022-10-29T07:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2022-10-29T13:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'wrx-2022-spain-r10',
    round: 10,
    name: 'World RX of Catalunya — Round 10',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'race', label: 'Semifinals & Final', startUtc: '2022-10-30T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2022-germany-r11',
    round: 11,
    name: 'World RX of Germany — Nürburgring — Round 11',
    circuitId: 'nurburgring',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2022-11-12T08:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2022-11-12T14:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'wrx-2022-germany-r12',
    round: 12,
    name: 'World RX of Germany — Nürburgring — Round 12',
    circuitId: 'nurburgring',
    sessions: [
      { type: 'race', label: 'Semifinals & Final', startUtc: '2022-11-13T12:00:00Z', durationMinutes: 360 },
    ],
  },
]
