import { RaceEvent } from '@/lib/types'

// Super Formula 2026 season calendar — 7 weekends, some double-headers
// Source: superformula.net, racingcalendar.net — verified March 2026
export const superformula2026: RaceEvent[] = [
  {
    id: 'sf-2026-motegi',
    round: 1,
    name: 'Motegi — Rd. 1',
    circuit: 'Twin Ring Motegi',
    country: 'Japan',
    countryCode: 'JP',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-04-04T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-04T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2026-04-05T04:00:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2026-autopolis',
    round: 2,
    name: 'Autopolis — Rd. 2',
    circuit: 'Autopolis',
    country: 'Japan',
    countryCode: 'JP',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-04-25T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-25T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2026-04-26T04:00:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2026-suzuka-1',
    round: 3,
    name: 'Suzuka — Rds. 3 & 4',
    circuit: 'Suzuka International Racing Course',
    country: 'Japan',
    countryCode: 'JP',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-05-22T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-23T01:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2026-05-23T04:00:00Z', durationMinutes: 75 },
      { type: 'race', label: 'Race 2', startUtc: '2026-05-24T04:00:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2026-fuji-1',
    round: 5,
    name: 'Fuji — Rds. 5 & 6',
    circuit: 'Fuji Speedway',
    country: 'Japan',
    countryCode: 'JP',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-07-17T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-18T01:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2026-07-18T04:00:00Z', durationMinutes: 75 },
      { type: 'race', label: 'Race 2', startUtc: '2026-07-19T04:00:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2026-sugo',
    round: 7,
    name: 'Sugo — Rd. 7',
    circuit: 'Sportsland Sugo',
    country: 'Japan',
    countryCode: 'JP',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-08-08T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-08T04:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2026-08-09T04:00:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2026-fuji-2',
    round: 8,
    name: 'Fuji — Rds. 8 & 9',
    circuit: 'Fuji Speedway',
    country: 'Japan',
    countryCode: 'JP',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-10-09T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-10T01:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2026-10-10T04:00:00Z', durationMinutes: 75 },
      { type: 'race', label: 'Race 2', startUtc: '2026-10-11T04:00:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'sf-2026-suzuka-2',
    round: 10,
    name: 'Suzuka Finale — Rds. 10 & 11',
    circuit: 'Suzuka International Racing Course',
    country: 'Japan',
    countryCode: 'JP',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-11-20T01:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-11-21T01:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2026-11-21T04:00:00Z', durationMinutes: 75 },
      { type: 'race', label: 'Race 2', startUtc: '2026-11-22T04:00:00Z', durationMinutes: 75 },
    ],
  },
]
