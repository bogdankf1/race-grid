import { RaceEvent } from '@/lib/types'

// GT World Challenge Europe 2023 — 5 Endurance Cup + 5 Sprint Cup rounds
export const gtwc2023: RaceEvent[] = [
  // ── Endurance Cup ──────────────────────────────────────────────
  {
    id: 'gtwc-2023-monza',
    round: 1,
    name: '3 Hours of Monza',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      // Friday 21 Apr (CEST UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2023-04-21T08:00:00Z', durationMinutes: 90 },
      // Saturday 22 Apr
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2023-04-22T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-22T12:00:00Z', durationMinutes: 30 },
      // Sunday 23 Apr
      { type: 'endurance', label: '3 Hours of Monza', startUtc: '2023-04-23T11:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'gtwc-2023-paul-ricard',
    round: 2,
    name: 'Paul Ricard 1000km',
    circuitId: 'circuit-paul-ricard',
    sessions: [
      // Friday 2 Jun (CEST UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2023-06-02T08:00:00Z', durationMinutes: 90 },
      // Saturday 3 Jun
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2023-06-03T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-03T12:00:00Z', durationMinutes: 30 },
      // Sunday 4 Jun
      { type: 'endurance', label: 'Paul Ricard 1000km', startUtc: '2023-06-04T11:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'gtwc-2023-spa-24h',
    round: 3,
    name: '24 Hours of Spa',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      // Thursday 29 Jun (CEST UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2023-06-29T08:00:00Z', durationMinutes: 90 },
      // Friday 30 Jun
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2023-06-30T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-30T12:00:00Z', durationMinutes: 30 },
      // Saturday 1 Jul — Race start ~16:30 CEST = 14:30 UTC
      { type: 'endurance', label: '24 Hours of Spa', startUtc: '2023-07-01T14:30:00Z', durationMinutes: 1440 },
    ],
  },
  {
    id: 'gtwc-2023-nurburgring',
    round: 4,
    name: '3 Hours of Nurburgring',
    circuitId: 'nurburgring',
    sessions: [
      // Friday 28 Jul (CEST UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2023-07-28T08:00:00Z', durationMinutes: 90 },
      // Saturday 29 Jul
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2023-07-29T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-29T12:00:00Z', durationMinutes: 30 },
      // Sunday 30 Jul
      { type: 'endurance', label: '3 Hours of Nurburgring', startUtc: '2023-07-30T11:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'gtwc-2023-barcelona',
    round: 5,
    name: '3 Hours of Barcelona',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      // Friday 29 Sep (CEST UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2023-09-29T08:00:00Z', durationMinutes: 90 },
      // Saturday 30 Sep
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2023-09-30T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-30T12:00:00Z', durationMinutes: 30 },
      // Sunday 1 Oct
      { type: 'endurance', label: '3 Hours of Barcelona', startUtc: '2023-10-01T11:00:00Z', durationMinutes: 180 },
    ],
  },

  // ── Sprint Cup ─────────────────────────────────────────────────
  {
    id: 'gtwc-2023-brands-hatch',
    round: 6,
    name: 'Brands Hatch Sprint',
    circuitId: 'brands-hatch',
    sessions: [
      // Friday 12 May (BST UTC+1)
      { type: 'practice', label: 'Free Practice', startUtc: '2023-05-12T09:00:00Z', durationMinutes: 60 },
      // Saturday 13 May
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-05-13T08:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2023-05-13T13:00:00Z', durationMinutes: 60 },
      // Sunday 14 May
      { type: 'race', label: 'Race 2', startUtc: '2023-05-14T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwc-2023-misano',
    round: 7,
    name: 'Misano Sprint',
    circuitId: 'misano-world-circuit',
    sessions: [
      // Friday 14 Jul (CEST UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2023-07-14T08:00:00Z', durationMinutes: 60 },
      // Saturday 15 Jul
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-15T08:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2023-07-15T13:00:00Z', durationMinutes: 60 },
      // Sunday 16 Jul
      { type: 'race', label: 'Race 2', startUtc: '2023-07-16T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwc-2023-hockenheimring',
    round: 8,
    name: 'Hockenheimring Sprint',
    circuitId: 'hockenheimring',
    sessions: [
      // Friday 1 Sep (CEST UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2023-09-01T08:00:00Z', durationMinutes: 60 },
      // Saturday 2 Sep
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-02T08:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2023-09-02T13:00:00Z', durationMinutes: 60 },
      // Sunday 3 Sep
      { type: 'race', label: 'Race 2', startUtc: '2023-09-03T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwc-2023-valencia',
    round: 9,
    name: 'Valencia Sprint',
    circuitId: 'circuit-ricardo-tormo',
    sessions: [
      // Friday 15 Sep (CEST UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2023-09-15T08:00:00Z', durationMinutes: 60 },
      // Saturday 16 Sep
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-16T08:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2023-09-16T13:00:00Z', durationMinutes: 60 },
      // Sunday 17 Sep
      { type: 'race', label: 'Race 2', startUtc: '2023-09-17T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwc-2023-zandvoort',
    round: 10,
    name: 'Zandvoort Sprint',
    circuitId: 'circuit-zandvoort',
    sessions: [
      // Friday 13 Oct (CEST UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2023-10-13T08:00:00Z', durationMinutes: 60 },
      // Saturday 14 Oct
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-10-14T08:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2023-10-14T13:00:00Z', durationMinutes: 60 },
      // Sunday 15 Oct
      { type: 'race', label: 'Race 2', startUtc: '2023-10-15T12:00:00Z', durationMinutes: 60 },
    ],
  },
]
