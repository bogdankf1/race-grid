import { RaceEvent } from '@/lib/types'

// Formula E Season 13 (2026-27) calendar — 21 rounds at 13 events, stored under 2027 (season runs Dec 2026 to Jul 2027)
// Source: fiaformulae.com season 13 calendar (announced 23 Jun 2026; GEN4 era, new sprint-style Race 1 format).
// Session times are NOT yet published — all sessions are shown as TBA with placeholder times based on season 12.
export const fe2027: RaceEvent[] = [
  {
    id: 'fe-2027-jeddah-1',
    round: 1,
    name: 'Jeddah E-Prix Race 1',
    circuitId: 'jeddah-corniche-circuit-fe',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2026-12-17T17:00:00Z', durationMinutes: 30, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2026-12-18T10:30:00Z', durationMinutes: 45, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-12-18T12:40:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race', startUtc: '2026-12-18T17:05:00Z', durationMinutes: 45, tba: true },
    ],
  },
  {
    id: 'fe-2027-jeddah-2',
    round: 2,
    name: 'Jeddah E-Prix Race 2',
    circuitId: 'jeddah-corniche-circuit-fe',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-12-19T12:40:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race', startUtc: '2026-12-19T17:05:00Z', durationMinutes: 45, tba: true },
    ],
  },
  {
    id: 'fe-2027-mexico-city',
    round: 3,
    name: 'Mexico City E-Prix',
    circuitId: 'autodromo-hermanos-rodriguez',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-01-15T22:00:00Z', durationMinutes: 30, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-01-16T13:30:00Z', durationMinutes: 45, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-01-16T15:40:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-01-16T20:05:00Z', durationMinutes: 45, tba: true },
    ],
  },
  {
    id: 'fe-2027-austin',
    round: 4,
    name: 'Austin E-Prix',
    circuitId: 'circuit-of-the-americas',
    // New venue (Circuit of the Americas) — placeholder times follow the Miami E-Prix weekend
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-02-05T22:00:00Z', durationMinutes: 30, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-02-06T12:30:00Z', durationMinutes: 45, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-02-06T14:40:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-02-06T19:05:00Z', durationMinutes: 45, tba: true },
    ],
  },
  {
    id: 'fe-2027-miami',
    round: 5,
    name: 'Miami E-Prix',
    circuitId: 'miami-international-autodrome',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-02-19T22:00:00Z', durationMinutes: 30, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-02-20T12:30:00Z', durationMinutes: 45, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-02-20T14:40:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-02-20T19:05:00Z', durationMinutes: 45, tba: true },
    ],
  },
  {
    id: 'fe-2027-sao-paulo',
    round: 6,
    name: 'São Paulo E-Prix',
    circuitId: 'sambodromo-anhembi',
    sessions: [
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-03-13T10:10:00Z', durationMinutes: 45, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-03-13T12:40:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-03-13T17:05:00Z', durationMinutes: 45, tba: true },
    ],
  },
  {
    id: 'fe-2027-sanya',
    round: 7,
    name: 'Sanya E-Prix',
    circuitId: 'sanya-street-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-04-16T08:30:00Z', durationMinutes: 30, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-04-17T00:30:00Z', durationMinutes: 45, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-04-17T02:40:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-04-17T07:05:00Z', durationMinutes: 45, tba: true },
    ],
  },
  {
    id: 'fe-2027-monaco-1',
    round: 8,
    name: 'Monaco E-Prix Race 1',
    circuitId: 'circuit-de-monaco',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-05-01T05:30:00Z', durationMinutes: 30, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-05-01T07:10:00Z', durationMinutes: 45, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-05-01T08:40:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-05-01T13:05:00Z', durationMinutes: 45, tba: true },
    ],
  },
  {
    id: 'fe-2027-monaco-2',
    round: 9,
    name: 'Monaco E-Prix Race 2',
    circuitId: 'circuit-de-monaco',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-05-02T08:40:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-05-02T13:05:00Z', durationMinutes: 45, tba: true },
    ],
  },
  {
    id: 'fe-2027-berlin-1',
    round: 10,
    name: 'Berlin E-Prix Race 1',
    circuitId: 'tempelhof-airport',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-05-07T14:00:00Z', durationMinutes: 30, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-05-08T07:30:00Z', durationMinutes: 45, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-05-08T09:40:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-05-08T14:05:00Z', durationMinutes: 45, tba: true },
    ],
  },
  {
    id: 'fe-2027-berlin-2',
    round: 11,
    name: 'Berlin E-Prix Race 2',
    circuitId: 'tempelhof-airport',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-05-09T09:40:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-05-09T14:05:00Z', durationMinutes: 45, tba: true },
    ],
  },
  {
    id: 'fe-2027-london-1',
    round: 12,
    name: 'London E-Prix Race 1',
    circuitId: 'brands-hatch',
    // London E-Prix moves to Brands Hatch — placeholder times follow the 2026 London weekend
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-05-28T15:00:00Z', durationMinutes: 30, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-05-29T07:30:00Z', durationMinutes: 45, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-05-29T09:40:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-05-29T14:05:00Z', durationMinutes: 45, tba: true },
    ],
  },
  {
    id: 'fe-2027-london-2',
    round: 13,
    name: 'London E-Prix Race 2',
    circuitId: 'brands-hatch',
    // London E-Prix moves to Brands Hatch — placeholder times follow the 2026 London weekend
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-05-30T09:40:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-05-30T14:05:00Z', durationMinutes: 45, tba: true },
    ],
  },
  {
    id: 'fe-2027-zandvoort-1',
    round: 14,
    name: 'Zandvoort E-Prix Race 1',
    circuitId: 'circuit-zandvoort',
    // New venue — placeholder times follow the Berlin double-header
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-06-17T14:00:00Z', durationMinutes: 30, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-06-18T07:30:00Z', durationMinutes: 45, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-06-18T09:40:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-06-18T14:05:00Z', durationMinutes: 45, tba: true },
    ],
  },
  {
    id: 'fe-2027-zandvoort-2',
    round: 15,
    name: 'Zandvoort E-Prix Race 2',
    circuitId: 'circuit-zandvoort',
    // New venue — placeholder times follow the Berlin double-header
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-06-19T09:40:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-06-19T14:05:00Z', durationMinutes: 45, tba: true },
    ],
  },
  {
    id: 'fe-2027-madrid-1',
    round: 16,
    name: 'Madrid E-Prix Race 1',
    circuitId: 'circuit-de-jarama',
    // Placeholder times follow the Berlin double-header
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-06-25T14:00:00Z', durationMinutes: 30, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-06-26T07:30:00Z', durationMinutes: 45, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-06-26T09:40:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-06-26T14:05:00Z', durationMinutes: 45, tba: true },
    ],
  },
  {
    id: 'fe-2027-madrid-2',
    round: 17,
    name: 'Madrid E-Prix Race 2',
    circuitId: 'circuit-de-jarama',
    // Placeholder times follow the Berlin double-header
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-06-27T09:40:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-06-27T14:05:00Z', durationMinutes: 45, tba: true },
    ],
  },
  {
    id: 'fe-2027-shanghai-1',
    round: 18,
    name: 'Shanghai E-Prix Race 1',
    circuitId: 'shanghai-international-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-07-09T08:00:00Z', durationMinutes: 30, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-07-09T22:00:00Z', durationMinutes: 45, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-07-10T00:00:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-07-10T04:05:00Z', durationMinutes: 45, tba: true },
    ],
  },
  {
    id: 'fe-2027-shanghai-2',
    round: 19,
    name: 'Shanghai E-Prix Race 2',
    circuitId: 'shanghai-international-circuit',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-07-11T00:00:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-07-11T04:05:00Z', durationMinutes: 45, tba: true },
    ],
  },
  {
    id: 'fe-2027-tokyo-1',
    round: 20,
    name: 'Tokyo E-Prix Race 1',
    circuitId: 'tokyo-street-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice 1', startUtc: '2027-07-23T10:00:00Z', durationMinutes: 30, tba: true },
      { type: 'practice', label: 'Free Practice 2', startUtc: '2027-07-24T04:30:00Z', durationMinutes: 45, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-07-24T06:40:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-07-24T11:05:00Z', durationMinutes: 45, tba: true },
    ],
  },
  {
    id: 'fe-2027-tokyo-2',
    round: 21,
    name: 'Tokyo E-Prix Race 2',
    circuitId: 'tokyo-street-circuit',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-07-25T06:40:00Z', durationMinutes: 60, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-07-25T11:05:00Z', durationMinutes: 45, tba: true },
    ],
  },
]
