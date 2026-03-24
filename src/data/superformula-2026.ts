import { RaceEvent } from '@/lib/types'

// Super Formula 2026 season calendar
// Source: superformula.net — provisional 2026 schedule
export const superformula2026: RaceEvent[] = [
  {
    id: 'sf-2026-fuji',
    round: 1,
    name: 'Fuji Speedway',
    circuit: 'Fuji Speedway',
    country: 'Japan',
    countryCode: 'JP',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-03-14T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-14T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2026-03-15T04:00:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2026-suzuka-1',
    round: 2,
    name: 'Suzuka Circuit — Rd. 2',
    circuit: 'Suzuka International Racing Course',
    country: 'Japan',
    countryCode: 'JP',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-04-18T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-18T05:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2026-04-19T04:00:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2026-autopolis',
    round: 3,
    name: 'Autopolis',
    circuit: 'Autopolis',
    country: 'Japan',
    countryCode: 'JP',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-05-16T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-16T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2026-05-17T04:00:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2026-sugo',
    round: 4,
    name: 'Sportsland Sugo',
    circuit: 'Sportsland Sugo',
    country: 'Japan',
    countryCode: 'JP',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-06-13T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-13T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2026-06-14T04:00:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2026-motegi',
    round: 5,
    name: 'Twin Ring Motegi',
    circuit: 'Twin Ring Motegi',
    country: 'Japan',
    countryCode: 'JP',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-08-22T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-22T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2026-08-23T04:00:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2026-suzuka-2',
    round: 6,
    name: 'Suzuka Circuit — Rd. 6',
    circuit: 'Suzuka International Racing Course',
    country: 'Japan',
    countryCode: 'JP',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-09-19T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-19T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2026-09-20T04:00:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2026-suzuka-3',
    round: 7,
    name: 'Suzuka Circuit — Finale',
    circuit: 'Suzuka International Racing Course',
    country: 'Japan',
    countryCode: 'JP',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-10-31T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-31T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2026-11-01T04:00:00Z', durationMinutes: 75 },
    ],
  },
]
