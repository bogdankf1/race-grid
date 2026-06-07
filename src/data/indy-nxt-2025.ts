import { RaceEvent } from '@/lib/types'

// Indy NXT by Firestone 2025 calendar — 14 rounds at 12 tracks
// Source: indynxt.com, motorsport.com/indylights/schedule/2025, Wikipedia "2025 Indy NXT"
// Times converted from ET to UTC (EST = UTC-5 before Mar 9; EDT = UTC-4 after).
// Champion: Dennis Hauger (Andretti Global) — six wins, clinched with a race to spare.
export const indyNxt2025: RaceEvent[] = [
  {
    id: 'indy-nxt-2025-st-petersburg',
    round: 1,
    name: 'Indy NXT Grand Prix of St. Petersburg',
    circuitId: 'streets-of-st-petersburg',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-03-01T18:30:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race', startUtc: '2025-03-02T15:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2025-barber',
    round: 2,
    name: 'Indy NXT Grand Prix of Alabama',
    circuitId: 'barber-motorsports-park',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-03T16:30:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race', startUtc: '2025-05-04T14:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2025-indianapolis-gp-1',
    round: 3,
    name: 'Indy NXT Indianapolis Grand Prix — Race 1',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-09T18:30:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race 1', startUtc: '2025-05-09T22:10:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2025-indianapolis-gp-2',
    round: 4,
    name: 'Indy NXT Indianapolis Grand Prix — Race 2',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      { type: 'race', label: 'Race 2', startUtc: '2025-05-10T17:05:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2025-detroit',
    round: 5,
    name: 'Indy NXT Detroit Grand Prix',
    circuitId: 'streets-of-detroit',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-31T15:30:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race', startUtc: '2025-06-01T14:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2025-wwtr',
    round: 6,
    name: 'Indy NXT at World Wide Technology Raceway',
    circuitId: 'world-wide-technology-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-06-14T19:30:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race', startUtc: '2025-06-15T19:35:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'indy-nxt-2025-road-america',
    round: 7,
    name: 'Indy NXT at Road America',
    circuitId: 'road-america',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-06-21T16:30:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race', startUtc: '2025-06-22T14:06:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2025-mid-ohio',
    round: 8,
    name: 'Indy NXT Grand Prix at Mid-Ohio',
    circuitId: 'mid-ohio-sports-car-course',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-05T17:30:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race', startUtc: '2025-07-06T14:36:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2025-iowa',
    round: 9,
    name: 'Indy NXT at Iowa Speedway',
    circuitId: 'iowa-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-11T21:30:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race', startUtc: '2025-07-12T15:00:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'indy-nxt-2025-laguna-seca-1',
    round: 10,
    name: 'Indy NXT Grand Prix of Monterey — Race 1',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-26T14:00:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race 1', startUtc: '2025-07-26T17:36:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2025-laguna-seca-2',
    round: 11,
    name: 'Indy NXT Grand Prix of Monterey — Race 2',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      { type: 'race', label: 'Race 2', startUtc: '2025-07-27T14:06:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2025-portland',
    round: 12,
    name: 'Indy NXT Grand Prix of Portland',
    circuitId: 'portland-international-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-09T20:40:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race', startUtc: '2025-08-10T14:06:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2025-milwaukee',
    round: 13,
    name: 'Indy NXT at Milwaukee Mile',
    circuitId: 'milwaukee-mile',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-23T18:35:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race', startUtc: '2025-08-24T14:35:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2025-nashville',
    round: 14,
    name: 'Indy NXT Music City Grand Prix',
    circuitId: 'nashville-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-30T16:00:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race', startUtc: '2025-08-31T14:35:00Z', durationMinutes: 75 },
    ],
  },
]
