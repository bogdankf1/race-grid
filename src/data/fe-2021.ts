import { RaceEvent } from '@/lib/types'

// Formula E Season 7 (2020-21) calendar — from Wikipedia / fiaformulae.com with UTC session times
// Season spans Feb 2021 to Aug 2021 (all races in 2021), stored under 2021
export const fe2021: RaceEvent[] = [
  {
    id: 'fe-2021-diriyah-1',
    round: 1,
    name: 'Diriyah E-Prix Race 1',
    circuitId: 'diriyah-street-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2021-02-26T12:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-02-26T15:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-02-26T17:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2021-diriyah-2',
    round: 2,
    name: 'Diriyah E-Prix Race 2',
    circuitId: 'diriyah-street-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2021-02-27T12:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-02-27T15:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-02-27T17:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2021-rome-1',
    round: 3,
    name: 'Rome E-Prix Race 1',
    circuitId: 'circuito-cittadino-dell-eur',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2021-04-10T08:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-04-10T11:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-04-10T13:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2021-rome-2',
    round: 4,
    name: 'Rome E-Prix Race 2',
    circuitId: 'circuito-cittadino-dell-eur',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2021-04-11T08:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-04-11T11:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-04-11T13:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2021-valencia-1',
    round: 5,
    name: 'Valencia E-Prix Race 1',
    circuitId: 'circuit-ricardo-tormo',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2021-04-24T08:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-04-24T11:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-04-24T13:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2021-valencia-2',
    round: 6,
    name: 'Valencia E-Prix Race 2',
    circuitId: 'circuit-ricardo-tormo',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2021-04-25T08:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-04-25T11:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-04-25T13:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2021-monaco',
    round: 7,
    name: 'Monaco E-Prix',
    circuitId: 'circuit-de-monaco',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2021-05-08T08:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-08T11:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-05-08T13:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2021-puebla-1',
    round: 8,
    name: 'Puebla E-Prix Race 1',
    circuitId: 'autodromo-miguel-e-abed',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2021-06-19T15:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-19T18:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-06-19T20:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2021-puebla-2',
    round: 9,
    name: 'Puebla E-Prix Race 2',
    circuitId: 'autodromo-miguel-e-abed',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2021-06-20T15:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-20T18:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-06-20T20:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2021-new-york-1',
    round: 10,
    name: 'New York City E-Prix Race 1',
    circuitId: 'brooklyn-street-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2021-07-10T14:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-10T17:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-07-10T19:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2021-new-york-2',
    round: 11,
    name: 'New York City E-Prix Race 2',
    circuitId: 'brooklyn-street-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2021-07-11T14:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-11T17:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-07-11T19:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2021-london-1',
    round: 12,
    name: 'London E-Prix Race 1',
    circuitId: 'excel-london',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2021-07-24T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-24T12:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-07-24T14:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2021-london-2',
    round: 13,
    name: 'London E-Prix Race 2',
    circuitId: 'excel-london',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2021-07-25T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-25T12:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-07-25T14:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2021-berlin-1',
    round: 14,
    name: 'Berlin E-Prix Race 1',
    circuitId: 'tempelhof-airport',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2021-08-14T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-14T12:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-08-14T14:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2021-berlin-2',
    round: 15,
    name: 'Berlin E-Prix Race 2',
    circuitId: 'tempelhof-airport',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2021-08-15T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-15T12:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-08-15T14:05:00Z', durationMinutes: 45 },
    ],
  },
]
