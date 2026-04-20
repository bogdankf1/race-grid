import { RaceEvent } from '@/lib/types'

// Formula E Season 9 (2022-23) calendar — from Wikipedia / fiaformulae.com with UTC session times
// Season spans Jan 2023 to Jul 2023 (all races in 2023), stored under 2023
export const fe2023: RaceEvent[] = [
  {
    id: 'fe-2023-mexico-city',
    round: 1,
    name: 'Mexico City E-Prix',
    circuitId: 'autodromo-hermanos-rodriguez',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2023-01-14T15:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-01-14T18:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-01-14T20:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2023-diriyah-1',
    round: 2,
    name: 'Diriyah E-Prix Race 1',
    circuitId: 'diriyah-street-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2023-01-27T12:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-01-27T15:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-01-27T17:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2023-diriyah-2',
    round: 3,
    name: 'Diriyah E-Prix Race 2',
    circuitId: 'diriyah-street-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2023-01-28T12:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-01-28T15:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-01-28T17:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2023-hyderabad',
    round: 4,
    name: 'Hyderabad E-Prix',
    circuitId: 'hyderabad-street-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2023-02-11T04:35:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-02-11T07:35:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-02-11T09:35:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2023-cape-town',
    round: 5,
    name: 'Cape Town E-Prix',
    circuitId: 'cape-town-street-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2023-02-25T08:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-02-25T11:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-02-25T13:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2023-sao-paulo',
    round: 6,
    name: 'São Paulo E-Prix',
    circuitId: 'sambodromo-anhembi',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2023-03-25T13:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-03-25T15:40:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-03-25T20:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2023-berlin-1',
    round: 7,
    name: 'Berlin E-Prix Race 1',
    circuitId: 'tempelhof-airport',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2023-04-22T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-22T12:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-04-22T14:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2023-berlin-2',
    round: 8,
    name: 'Berlin E-Prix Race 2',
    circuitId: 'tempelhof-airport',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2023-04-23T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-23T12:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-04-23T14:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2023-monaco',
    round: 9,
    name: 'Monaco E-Prix',
    circuitId: 'circuit-de-monaco',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2023-05-06T08:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-05-06T11:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-05-06T13:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2023-jakarta-1',
    round: 10,
    name: 'Jakarta E-Prix Race 1',
    circuitId: 'jakarta-international-eprix-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2023-06-03T02:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-03T05:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-06-03T07:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2023-jakarta-2',
    round: 11,
    name: 'Jakarta E-Prix Race 2',
    circuitId: 'jakarta-international-eprix-circuit',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2023-06-04T02:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-04T05:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-06-04T07:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2023-portland',
    round: 12,
    name: 'Portland E-Prix',
    circuitId: 'portland-international-raceway',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2023-06-24T17:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-24T20:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-06-24T22:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2023-rome-1',
    round: 13,
    name: 'Rome E-Prix Race 1',
    circuitId: 'circuito-cittadino-dell-eur',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2023-07-15T08:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-15T11:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-07-15T13:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2023-rome-2',
    round: 14,
    name: 'Rome E-Prix Race 2',
    circuitId: 'circuito-cittadino-dell-eur',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2023-07-16T08:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-16T11:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-07-16T13:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2023-london-1',
    round: 15,
    name: 'London E-Prix Race 1',
    circuitId: 'excel-london',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2023-07-29T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-29T12:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-07-29T14:05:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'fe-2023-london-2',
    round: 16,
    name: 'London E-Prix Race 2',
    circuitId: 'excel-london',
    sessions: [
      { type: 'practice', label: 'Free Practice', startUtc: '2023-07-30T09:05:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-30T12:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-07-30T14:05:00Z', durationMinutes: 45 },
    ],
  },
]
