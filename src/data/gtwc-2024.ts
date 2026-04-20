import { RaceEvent } from '@/lib/types'

// GT World Challenge Europe 2024 — 5 Endurance Cup + 5 Sprint Cup rounds
export const gtwc2024: RaceEvent[] = [
  // ── Endurance Cup ──────────────────────────────────────────────
  {
    id: 'gtwc-2024-paul-ricard',
    round: 1,
    name: '3 Hours of Paul Ricard',
    circuitId: 'circuit-paul-ricard',
    sessions: [
      // Friday 5 Apr (CEST UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2024-04-05T08:00:00Z', durationMinutes: 90 },
      // Saturday 6 Apr
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2024-04-06T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-06T12:00:00Z', durationMinutes: 30 },
      // Sunday 7 Apr
      { type: 'endurance', label: '3 Hours of Paul Ricard', startUtc: '2024-04-07T11:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'gtwc-2024-spa-24h',
    round: 2,
    name: '24 Hours of Spa',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      // Friday 28 Jun (CEST UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2024-06-28T08:00:00Z', durationMinutes: 90 },
      // Saturday 29 Jun
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2024-06-29T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-29T12:00:00Z', durationMinutes: 30 },
      // Saturday 29 Jun — Race start ~16:30 CEST = 14:30 UTC
      { type: 'endurance', label: '24 Hours of Spa', startUtc: '2024-06-29T14:30:00Z', durationMinutes: 1440 },
    ],
  },
  {
    id: 'gtwc-2024-nurburgring',
    round: 3,
    name: '3 Hours of Nurburgring',
    circuitId: 'nurburgring',
    sessions: [
      // Friday 26 Jul (CEST UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2024-07-26T08:00:00Z', durationMinutes: 90 },
      // Saturday 27 Jul
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2024-07-27T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-27T12:00:00Z', durationMinutes: 30 },
      // Sunday 28 Jul
      { type: 'endurance', label: '3 Hours of Nurburgring', startUtc: '2024-07-28T11:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'gtwc-2024-monza',
    round: 4,
    name: '3 Hours of Monza',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      // Friday 20 Sep (CEST UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2024-09-20T08:00:00Z', durationMinutes: 90 },
      // Saturday 21 Sep
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2024-09-21T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-21T12:00:00Z', durationMinutes: 30 },
      // Sunday 22 Sep
      { type: 'endurance', label: '3 Hours of Monza', startUtc: '2024-09-22T11:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'gtwc-2024-jeddah',
    round: 5,
    name: '6 Hours of Jeddah',
    circuitId: 'jeddah-corniche-circuit',
    sessions: [
      // Friday 29 Nov (AST UTC+3)
      { type: 'practice', label: 'Free Practice', startUtc: '2024-11-29T07:00:00Z', durationMinutes: 90 },
      // Saturday 30 Nov
      { type: 'qualifying', label: 'Pre-Qualifying', startUtc: '2024-11-30T07:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-11-30T11:00:00Z', durationMinutes: 30 },
      // Saturday 30 Nov — Race
      { type: 'endurance', label: '6 Hours of Jeddah', startUtc: '2024-11-30T10:00:00Z', durationMinutes: 360 },
    ],
  },

  // ── Sprint Cup ─────────────────────────────────────────────────
  {
    id: 'gtwc-2024-brands-hatch',
    round: 6,
    name: 'Brands Hatch Sprint',
    circuitId: 'brands-hatch',
    sessions: [
      // Friday 3 May (BST UTC+1)
      { type: 'practice', label: 'Free Practice', startUtc: '2024-05-03T09:00:00Z', durationMinutes: 60 },
      // Saturday 4 May
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-04T08:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2024-05-04T13:00:00Z', durationMinutes: 60 },
      // Sunday 5 May
      { type: 'race', label: 'Race 2', startUtc: '2024-05-05T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwc-2024-misano',
    round: 7,
    name: 'Misano Sprint',
    circuitId: 'misano-world-circuit',
    sessions: [
      // Saturday 18 May (CEST UTC+2) — single-day event
      { type: 'practice', label: 'Free Practice', startUtc: '2024-05-18T08:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-18T08:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2024-05-18T13:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2024-05-18T15:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwc-2024-hockenheimring',
    round: 8,
    name: 'Hockenheimring Sprint',
    circuitId: 'hockenheimring',
    sessions: [
      // Friday 19 Jul (CEST UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2024-07-19T08:00:00Z', durationMinutes: 60 },
      // Saturday 20 Jul
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-20T08:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2024-07-20T13:00:00Z', durationMinutes: 60 },
      // Sunday 21 Jul
      { type: 'race', label: 'Race 2', startUtc: '2024-07-21T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwc-2024-magny-cours',
    round: 9,
    name: 'Magny-Cours Sprint',
    circuitId: 'circuit-de-nevers-magny-cours',
    sessions: [
      // Friday 23 Aug (CEST UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2024-08-23T08:00:00Z', durationMinutes: 60 },
      // Saturday 24 Aug
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-24T08:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2024-08-24T13:00:00Z', durationMinutes: 60 },
      // Sunday 25 Aug
      { type: 'race', label: 'Race 2', startUtc: '2024-08-25T12:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwc-2024-barcelona',
    round: 10,
    name: 'Barcelona Sprint',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      // Friday 11 Oct (CEST UTC+2)
      { type: 'practice', label: 'Free Practice', startUtc: '2024-10-11T08:00:00Z', durationMinutes: 60 },
      // Saturday 12 Oct
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-10-12T08:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2024-10-12T13:00:00Z', durationMinutes: 60 },
      // Sunday 13 Oct
      { type: 'race', label: 'Race 2', startUtc: '2024-10-13T12:00:00Z', durationMinutes: 60 },
    ],
  },
]
