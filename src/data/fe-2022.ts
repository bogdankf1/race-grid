import { RaceEvent } from '@/lib/types'

// Formula E Season 8 (2021-22) calendar — from Wikipedia / fiaformulae.com with UTC session times
// Season spans Jan 2022 to Aug 2022 (all races in 2022), stored under 2022
export const fe2022: RaceEvent[] = [
  {
    id: 'fe-2022-diriyah-1',
    round: 1,
    name: 'Diriyah E-Prix Race 1',
    circuitId: 'diriyah-street-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2022-01-28T12:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-01-28T15:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-01-28T17:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2022-diriyah-2',
    round: 2,
    name: 'Diriyah E-Prix Race 2',
    circuitId: 'diriyah-street-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2022-01-29T12:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-01-29T15:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-01-29T17:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2022-mexico-city',
    round: 3,
    name: 'Mexico City E-Prix',
    circuitId: 'autodromo-hermanos-rodriguez',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2022-02-12T15:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-02-12T18:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-02-12T20:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2022-rome-1',
    round: 4,
    name: 'Rome E-Prix Race 1',
    circuitId: 'circuito-cittadino-dell-eur',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2022-04-09T08:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-09T11:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-04-09T13:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2022-rome-2',
    round: 5,
    name: 'Rome E-Prix Race 2',
    circuitId: 'circuito-cittadino-dell-eur',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2022-04-10T08:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-10T11:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-04-10T13:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2022-monaco',
    round: 6,
    name: 'Monaco E-Prix',
    circuitId: 'circuit-de-monaco',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2022-04-30T08:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-30T11:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-04-30T13:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2022-berlin-1',
    round: 7,
    name: 'Berlin E-Prix Race 1',
    circuitId: 'tempelhof-airport',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2022-05-14T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-14T12:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-05-14T14:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2022-berlin-2',
    round: 8,
    name: 'Berlin E-Prix Race 2',
    circuitId: 'tempelhof-airport',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2022-05-15T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-15T12:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-05-15T14:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2022-jakarta',
    round: 9,
    name: 'Jakarta E-Prix',
    circuitId: 'jakarta-international-eprix-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2022-06-04T02:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-04T05:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-06-04T07:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2022-marrakesh',
    round: 10,
    name: 'Marrakesh E-Prix',
    circuitId: 'circuit-moulay-el-hassan',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2022-07-02T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-02T12:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-07-02T14:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2022-new-york-1',
    round: 11,
    name: 'New York City E-Prix Race 1',
    circuitId: 'brooklyn-street-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2022-07-16T14:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-16T17:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-07-16T19:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2022-new-york-2',
    round: 12,
    name: 'New York City E-Prix Race 2',
    circuitId: 'brooklyn-street-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2022-07-17T14:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-17T17:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-07-17T19:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2022-london-1',
    round: 13,
    name: 'London E-Prix Race 1',
    circuitId: 'excel-london',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2022-07-30T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-30T12:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-07-30T14:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2022-london-2',
    round: 14,
    name: 'London E-Prix Race 2',
    circuitId: 'excel-london',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2022-07-31T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-31T12:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-07-31T14:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2022-seoul-1',
    round: 15,
    name: 'Seoul E-Prix Race 1',
    circuitId: 'seoul-street-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2022-08-13T01:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-08-13T04:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-08-13T06:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2022-seoul-2',
    round: 16,
    name: 'Seoul E-Prix Race 2',
    circuitId: 'seoul-street-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2022-08-14T01:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-08-14T04:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-08-14T06:05:00Z', durationMinutes: 45 },
    ],
  },
]
