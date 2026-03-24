import { RaceEvent } from '@/lib/types'

// Super GT 2026 season calendar
// Source: supergt.net, racingcalendar.net — verified March 2026
export const supergt2026: RaceEvent[] = [
  {
    id: 'supergt-2026-okayama',
    round: 1,
    name: 'Okayama GT 300km',
    circuit: 'Okayama International Circuit',
    country: 'Japan',
    countryCode: 'JP',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-04-11T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-11T05:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-04-12T04:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2026-fuji-1',
    round: 2,
    name: 'Fuji GT 500km',
    circuit: 'Fuji Speedway',
    country: 'Japan',
    countryCode: 'JP',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-05-03T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-03T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-05-04T03:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'supergt-2026-sepang',
    round: 3,
    name: 'Sepang GT 300km',
    circuit: 'Sepang International Circuit',
    country: 'Malaysia',
    countryCode: 'MY',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-06-20T03:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-20T07:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-06-21T06:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2026-fuji-2',
    round: 4,
    name: 'Fuji GT 300km',
    circuit: 'Fuji Speedway',
    country: 'Japan',
    countryCode: 'JP',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-08-01T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-01T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-08-02T04:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2026-suzuka',
    round: 5,
    name: 'Suzuka GT 300km',
    circuit: 'Suzuka International Racing Course',
    country: 'Japan',
    countryCode: 'JP',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-08-22T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-22T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-08-23T04:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2026-sugo',
    round: 6,
    name: 'Sugo GT 300km',
    circuit: 'Sportsland Sugo',
    country: 'Japan',
    countryCode: 'JP',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-09-19T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-19T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-09-20T04:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2026-autopolis',
    round: 7,
    name: 'Autopolis GT 300km',
    circuit: 'Autopolis',
    country: 'Japan',
    countryCode: 'JP',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-10-17T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-17T05:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-10-18T04:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'supergt-2026-motegi',
    round: 8,
    name: 'Motegi GT 250km',
    circuit: 'Twin Ring Motegi',
    country: 'Japan',
    countryCode: 'JP',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-11-07T01:00:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-11-07T04:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-11-08T04:00:00Z', durationMinutes: 100 },
    ],
  },
]
