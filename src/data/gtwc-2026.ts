import { RaceEvent } from '@/lib/types'

// GT World Challenge Europe 2026 — 5 Endurance Cup + 5 Sprint Cup rounds
// Source: gt-world-challenge-europe.com (official event timetables — GMT column, re-verified Oct 2026)
// Portimão finale moved to Saturday evening (clash with WEC Barcelona)
export const gtwc2026: RaceEvent[] = [
  {
    id: 'gtwc-2026-paul-ricard',
    round: 1,
    name: '6 Hours of Paul Ricard',
    circuitId: 'circuit-paul-ricard',
    sessions: [
      // Friday 10 Apr (CEST UTC+2)
      { type: 'practice', label: 'Bronze Test', startUtc: '2026-04-10T07:00:00Z', durationMinutes: 120 },
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-04-10T12:25:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-04-10T17:25:00Z', durationMinutes: 90 },
      // Saturday 11 Apr — Qualifying 12:05 local = 10:05Z, Race 18:00 local = 16:00Z
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-11T10:05:00Z', durationMinutes: 60 },
      { type: 'endurance', label: '6 Hours of Paul Ricard', startUtc: '2026-04-11T16:00:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'gtwc-2026-brands-hatch',
    round: 2,
    name: 'Brands Hatch Sprint',
    circuitId: 'brands-hatch',
    sessions: [
      // Saturday 2 May (BST UTC+1)
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-05-02T08:35:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-05-02T11:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-05-02T15:40:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-05-02T16:05:00Z', durationMinutes: 15 },
      // Sunday 3 May — Race 1 11:15 local = 10:15Z, Race 2 15:45 local = 14:45Z
      { type: 'race', label: 'Race 1', startUtc: '2026-05-03T10:15:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2026-05-03T14:45:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwc-2026-monza',
    round: 3,
    name: '3 Hours of Monza',
    circuitId: 'autodromo-nazionale-monza',
    sessions: [
      // Thursday 28 May (CEST UTC+2) — Bronze Test 15:45 local = 13:45Z
      { type: 'practice', label: 'Bronze Test', startUtc: '2026-05-28T13:45:00Z', durationMinutes: 120 },
      // Saturday 30 May — FP1 09:00 local = 07:00Z, FP2 14:25 local = 12:25Z
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-05-30T07:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-05-30T12:25:00Z', durationMinutes: 90 },
      // Sunday 31 May — Q 09:50 local = 07:50Z, Race 15:30 local = 13:30Z
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-31T07:50:00Z', durationMinutes: 60 },
      { type: 'endurance', label: '3 Hours of Monza', startUtc: '2026-05-31T13:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'gtwc-2026-spa-24h',
    round: 4,
    name: 'CrowdStrike 24 Hours of Spa',
    circuitId: 'circuit-de-spa-francorchamps',
    sessions: [
      // Thursday 25 June (CEST UTC+2)
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-06-25T08:10:00Z', durationMinutes: 120 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-06-25T14:10:00Z', durationMinutes: 120 },
      // Qualifying 1-4 Thu 19:45 / 20:05 / 20:35 / 21:05 local, Night Practice 22:55 local
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-06-25T17:45:00Z', durationMinutes: 20 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-06-25T18:05:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying 3', startUtc: '2026-06-25T18:35:00Z', durationMinutes: 30 },
      { type: 'qualifying', label: 'Qualifying 4', startUtc: '2026-06-25T19:05:00Z', durationMinutes: 30 },
      { type: 'practice', label: 'Night Practice', startUtc: '2026-06-25T20:55:00Z', durationMinutes: 40 },
      // Friday 26 June — Superpole 15:05 local = 13:05Z, Warm-up 19:20 local = 17:20Z
      { type: 'qualifying', label: 'Super Pole', startUtc: '2026-06-26T13:05:00Z', durationMinutes: 50 },
      { type: 'warmup', label: 'Warm-up', startUtc: '2026-06-26T17:20:00Z', durationMinutes: 30 },
      // Saturday 27 June — Race 16:30 local = 14:30Z
      { type: 'endurance', label: '24 Hours of Spa', startUtc: '2026-06-27T14:30:00Z', durationMinutes: 1440 },
    ],
  },
  {
    id: 'gtwc-2026-misano',
    round: 5,
    name: 'Misano Sprint',
    circuitId: 'misano-world-circuit',
    sessions: [
      // Friday 17 July (CEST UTC+2) — FP1 14:50 local = 12:50Z, FP2 20:10 local = 18:10Z
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-07-17T12:50:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-07-17T18:10:00Z', durationMinutes: 60 },
      // Saturday 18 July — Q1 13:05 local = 11:05Z, Race 1 20:30 local = 18:30Z
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-07-18T11:05:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2026-07-18T18:30:00Z', durationMinutes: 60 },
      // Sunday 19 July — Q2 10:05 local = 08:05Z, Race 2 14:30 local = 12:30Z
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-07-19T08:05:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 2', startUtc: '2026-07-19T12:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwc-2026-magny-cours',
    round: 6,
    name: 'Magny-Cours Sprint',
    circuitId: 'circuit-de-nevers-magny-cours',
    sessions: [
      // Friday 31 July (CEST UTC+2) — FP1 13:30 local = 11:30Z, FP2 20:40 local = 18:40Z
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-07-31T11:30:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-07-31T18:40:00Z', durationMinutes: 60 },
      // Saturday 1 August — Q1 14:55 local = 12:55Z, Race 1 21:05 local = 19:05Z
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-08-01T12:55:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2026-08-01T19:05:00Z', durationMinutes: 60 },
      // Sunday 2 August — Q2 10:50 local = 08:50Z, Race 2 15:30 local = 13:30Z
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-08-02T08:50:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 2', startUtc: '2026-08-02T13:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwc-2026-nurburgring',
    round: 7,
    name: '3 Hours of Nurburgring',
    circuitId: 'nurburgring',
    sessions: [
      // Friday 28 August (CEST UTC+2) — Bronze Test 16:40 local = 14:40Z
      { type: 'practice', label: 'Bronze Test', startUtc: '2026-08-28T14:40:00Z', durationMinutes: 120 },
      // Saturday 29 August — FP1 10:50 local = 08:50Z, FP2 16:15 local = 14:15Z
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-08-29T08:50:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-08-29T14:15:00Z', durationMinutes: 90 },
      // Sunday 30 August — Q1 09:45 local = 07:45Z (Q2 10:20, Q3 10:35), Race 15:00 local = 13:00Z
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-30T07:45:00Z', durationMinutes: 70 },
      { type: 'endurance', label: '3 Hours of Nurburgring', startUtc: '2026-08-30T13:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'gtwc-2026-zandvoort',
    round: 8,
    name: 'Zandvoort Sprint',
    circuitId: 'circuit-zandvoort',
    sessions: [
      // Friday 18 September (CEST UTC+2) — FP1 09:00 local = 07:00Z, FP2 13:50 local = 11:50Z
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-09-18T07:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-09-18T11:50:00Z', durationMinutes: 60 },
      // Saturday 19 September — Q1 09:50 local = 07:50Z, Race 1 14:45 local = 12:45Z
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-09-19T07:50:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2026-09-19T12:45:00Z', durationMinutes: 60 },
      // Sunday 20 September — Q2 10:35 local = 08:35Z, Race 2 14:15 local = 12:15Z
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-09-20T08:35:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 2', startUtc: '2026-09-20T12:15:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwc-2026-barcelona',
    round: 9,
    name: 'Barcelona Sprint',
    circuitId: 'circuit-de-barcelona-catalunya',
    sessions: [
      // Friday 2 October (CEST UTC+2) — FP1 09:00 local = 07:00Z, FP2 13:55 local = 11:55Z
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-10-02T07:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-10-02T11:55:00Z', durationMinutes: 60 },
      // Saturday 3 October — Q1 09:45 local = 07:45Z, Race 1 14:00 local = 12:00Z
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-10-03T07:45:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2026-10-03T12:00:00Z', durationMinutes: 60 },
      // Sunday 4 October — Q2 11:10 local = 09:10Z, Race 2 16:00 local = 14:00Z
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-10-04T09:10:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 2', startUtc: '2026-10-04T14:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'gtwc-2026-portimao',
    round: 10,
    name: '3 Hours of Portimao',
    circuitId: 'algarve-international-circuit',
    sessions: [
      // Thursday 15 October (WEST UTC+1) — Bronze Test 17:40 local = 16:40Z
      { type: 'practice', label: 'Bronze Test', startUtc: '2026-10-15T16:40:00Z', durationMinutes: 120 },
      // Friday 16 October — FP1 08:45 local = 07:45Z, Qualifying 17:55 local = 16:55Z
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-10-16T07:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-16T16:55:00Z', durationMinutes: 60 },
      // Saturday 17 October — Race 17:00 local = 16:00Z
      { type: 'endurance', label: '3 Hours of Portimao', startUtc: '2026-10-17T16:00:00Z', durationMinutes: 180 },
    ],
  },
]
