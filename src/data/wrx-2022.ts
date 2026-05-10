import { RaceEvent } from '@/lib/types'

// FIA World Rallycross Championship 2022 — first all-electric era
// Source: Wikipedia 2022 FIA World Rallycross Championship — verified May 2026
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
    id: 'wrx-2022-latvia',
    round: 3,
    name: 'World RX of Riga-Latvia (Double-Header)',
    circuitId: 'bikernieki',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2022-09-03T06:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Round 1 — Semifinals & Final', startUtc: '2022-09-03T12:00:00Z', durationMinutes: 240 },
      { type: 'race', label: 'Round 2 — Semifinals & Final', startUtc: '2022-09-04T10:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2022-portugal',
    round: 5,
    name: 'World RX of Portugal (Double-Header)',
    circuitId: 'pista-automovel-de-montalegre',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2022-09-17T08:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Round 1 — Semifinals & Final', startUtc: '2022-09-17T14:00:00Z', durationMinutes: 240 },
      { type: 'race', label: 'Round 2 — Semifinals & Final', startUtc: '2022-09-18T12:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2022-belgium',
    round: 7,
    name: 'World RX of Benelux — Spa-Francorchamps (Double-Header)',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2022-10-08T07:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Round 1 — Semifinals & Final', startUtc: '2022-10-08T13:00:00Z', durationMinutes: 240 },
      { type: 'race', label: 'Round 2 — Semifinals & Final', startUtc: '2022-10-09T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2022-spain',
    round: 9,
    name: 'World RX of Catalunya (Double-Header)',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2022-10-29T07:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Round 1 — Semifinals & Final', startUtc: '2022-10-29T13:00:00Z', durationMinutes: 240 },
      { type: 'race', label: 'Round 2 — Semifinals & Final', startUtc: '2022-10-30T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2022-germany',
    round: 11,
    name: 'World RX of Germany — Nürburgring (Double-Header)',
    circuitId: 'nurburgring',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2022-11-12T08:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Round 1 — Semifinals & Final', startUtc: '2022-11-12T14:00:00Z', durationMinutes: 240 },
      { type: 'race', label: 'Round 2 — Semifinals & Final', startUtc: '2022-11-13T12:00:00Z', durationMinutes: 360 },
    ],
  },
]
