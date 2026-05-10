import { RaceEvent } from '@/lib/types'

// FIA World Rallycross Championship 2023 — first global return; Hong Kong finale
// Source: Wikipedia 2023 FIA World Rallycross Championship — verified May 2026
// Note: 3 European rounds (Lydden Hill, Mettet, Estering) cancelled after a
// garage fire incident — they are not listed here.
// The South Africa weekend was a doubleheader, split below into two events.
export const wrx2023: RaceEvent[] = [
  {
    id: 'wrx-2023-portugal',
    round: 1,
    name: 'World RX of Portugal',
    circuitId: 'pista-automovel-de-montalegre',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2023-06-03T08:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2023-06-04T12:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2023-norway',
    round: 2,
    name: 'World RX of Norway',
    circuitId: 'lankebanen',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2023-06-17T07:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2023-06-18T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2023-sweden',
    round: 3,
    name: 'World RX of Sweden',
    circuitId: 'holjesbanan',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2023-07-01T07:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2023-07-02T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2023-south-africa-r4',
    round: 4,
    name: 'World RX of South Africa — Round 4',
    circuitId: 'killarney-cape-town',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2023-10-07T06:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2023-10-07T12:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'wrx-2023-south-africa-r5',
    round: 5,
    name: 'World RX of South Africa — Round 5',
    circuitId: 'killarney-cape-town',
    sessions: [
      { type: 'race', label: 'Semifinals & Final', startUtc: '2023-10-08T10:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'wrx-2023-hong-kong',
    round: 6,
    name: 'World RX of Hong Kong, China',
    circuitId: 'central-harbourfront-circuit',
    sessions: [
      { type: 'qualifying', label: 'Free Practice & Qualifying', startUtc: '2023-11-11T01:00:00Z', durationMinutes: 360 },
      { type: 'race', label: 'Semifinals & Final', startUtc: '2023-11-12T05:00:00Z', durationMinutes: 360 },
    ],
  },
]
