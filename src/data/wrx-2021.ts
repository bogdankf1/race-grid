import { RaceEvent } from '@/lib/types'

// FIA World Rallycross Championship 2021 — final season of the Supercar era
// Source: Wikipedia 2021 FIA World Rallycross Championship — verified May 2026
// Note: calendar was adjusted multiple times due to COVID-19.
// Doubleheader weekends are split into two events (one per championship round)
// so each scoring round has its own results entry.
export const wrx2021: RaceEvent[] = [
  {
    id: 'wrx-2021-spain',
    round: 1,
    name: 'World RX of Barcelona-Catalunya',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2021-07-23T07:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2021-07-24T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2021-sweden-r2',
    round: 2,
    name: 'World RX of Sweden — Round 2',
    circuitId: 'holjesbanan',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2021-08-20T07:00:00Z', durationMinutes: 480 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2021-08-21T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2021-sweden-r3',
    round: 3,
    name: 'World RX of Sweden — Round 3',
    circuitId: 'holjesbanan',
    sessions: [
      { type: 'race', label: 'Semifinals & Final', startUtc: '2021-08-22T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2021-france-r4',
    round: 4,
    name: 'Bretagne World RX of Lohéac — Round 4',
    circuitId: 'circuit-de-loheac',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2021-09-03T07:00:00Z', durationMinutes: 480 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2021-09-04T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2021-france-r5',
    round: 5,
    name: 'Bretagne World RX of Lohéac — Round 5',
    circuitId: 'circuit-de-loheac',
    sessions: [
      { type: 'race', label: 'Semifinals & Final', startUtc: '2021-09-05T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2021-latvia-r6',
    round: 6,
    name: 'World RX of Riga — Round 6',
    circuitId: 'bikernieki',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2021-09-18T06:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2021-09-18T12:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'wrx-2021-latvia-r7',
    round: 7,
    name: 'World RX of Riga — Round 7',
    circuitId: 'bikernieki',
    sessions: [
      { type: 'race', label: 'Semifinals & Final', startUtc: '2021-09-19T10:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2021-belgium',
    round: 8,
    name: 'World RX of Spa-Francorchamps',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2021-10-09T07:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2021-10-10T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2021-portugal',
    round: 9,
    name: 'World RX of Montalegre',
    circuitId: 'pista-automovel-de-montalegre',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2021-10-16T08:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2021-10-17T12:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2021-germany-r10',
    round: 10,
    name: 'World RX of Germany — Nürburgring — Round 10',
    circuitId: 'nurburgring',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2021-11-27T08:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2021-11-27T14:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'wrx-2021-germany-r11',
    round: 11,
    name: 'World RX of Germany — Nürburgring — Round 11',
    circuitId: 'nurburgring',
    sessions: [
      { type: 'race', label: 'Semifinals & Final', startUtc: '2021-11-28T12:00:00Z', durationMinutes: 360 },
    ],
  },
]
