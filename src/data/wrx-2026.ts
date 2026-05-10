import { RaceEvent } from '@/lib/types'

// FIA Rallycross 2026 — Euro RX top tier (World RX cancelled after 2025)
// Plus Rallycross World Cup Jakarta as a one-off FIA event
// Source: fiaworldrallycross.com — verified May 2026
export const wrx2026: RaceEvent[] = [
  {
    id: 'wrx-2026-latvia',
    round: 1,
    name: 'Euro RX of Latvia',
    circuitId: 'bikernieki',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2026-05-09T06:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2026-05-10T10:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2026-hungary',
    round: 2,
    name: 'Euro RX of Hungary',
    circuitId: 'nyirad-racing-center',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2026-05-30T07:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2026-05-31T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2026-sweden',
    round: 3,
    name: 'Euro RX of Sweden — Magic Weekend',
    circuitId: 'holjesbanan',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2026-07-04T07:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2026-07-05T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2026-ireland',
    round: 4,
    name: 'Euro RX of Ireland',
    circuitId: 'mondello-park',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2026-07-18T08:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2026-07-19T12:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2026-france',
    round: 5,
    name: 'Euro RX of France',
    circuitId: 'circuit-de-loheac',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2026-08-29T07:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2026-08-30T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2026-portugal',
    round: 6,
    name: 'Euro RX of Portugal',
    circuitId: 'pista-automovel-de-montalegre',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2026-09-12T08:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2026-09-13T12:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2026-jakarta-world-cup',
    name: 'Rallycross World Cup Jakarta',
    circuitId: 'jakarta-international-eprix-circuit',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2026-12-05T02:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2026-12-06T06:00:00Z', durationMinutes: 360 },
    ],
  },
]
