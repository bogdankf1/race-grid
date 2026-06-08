import { RaceEvent } from '@/lib/types'

// Indy NXT by Firestone 2024 calendar — 14 rounds at 12 tracks
// Source: indynxt.com/schedule (per-event pages), motorsport.com/indylights/schedule/2024,
// Wikipedia "2024 Indy NXT". Verified 2026-06-07.
// Times converted from ET to UTC (EST = UTC-5 through Mar 9; EDT = UTC-4 from Mar 10 to Nov 2).
// Champion: Louis Foster (Andretti Global) — eight wins, clinched at Milwaukee with one race to go.
export const indyNxt2024: RaceEvent[] = [
  {
    id: 'indy-nxt-2024-st-petersburg',
    round: 1,
    name: 'Indy NXT Grand Prix of St. Petersburg',
    circuitId: 'streets-of-st-petersburg',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-09T18:05:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race', startUtc: '2024-03-10T14:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2024-barber',
    round: 2,
    name: 'Indy NXT Grand Prix of Alabama',
    circuitId: 'barber-motorsports-park',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-27T18:35:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race', startUtc: '2024-04-28T15:05:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2024-indianapolis-gp-1',
    round: 3,
    name: 'Indy NXT Indianapolis Grand Prix — Race 1',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-10T18:30:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race 1', startUtc: '2024-05-10T22:10:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2024-indianapolis-gp-2',
    round: 4,
    name: 'Indy NXT Indianapolis Grand Prix — Race 2',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      { type: 'race', label: 'Race 2', startUtc: '2024-05-11T17:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2024-detroit',
    round: 5,
    name: 'Indy NXT Detroit Grand Prix',
    circuitId: 'streets-of-detroit',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-01T15:20:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race', startUtc: '2024-06-02T14:20:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2024-road-america',
    round: 6,
    name: 'Indy NXT at Road America',
    circuitId: 'road-america',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-08T21:00:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race', startUtc: '2024-06-09T17:05:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2024-laguna-seca-1',
    round: 7,
    name: 'Indy NXT Grand Prix of Monterey — Race 1',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-22T16:00:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race 1', startUtc: '2024-06-22T19:25:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2024-laguna-seca-2',
    round: 8,
    name: 'Indy NXT Grand Prix of Monterey — Race 2',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      { type: 'race', label: 'Race 2', startUtc: '2024-06-23T19:55:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2024-mid-ohio',
    round: 9,
    name: 'Indy NXT Grand Prix at Mid-Ohio',
    circuitId: 'mid-ohio-sports-car-course',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-06T18:05:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race', startUtc: '2024-07-07T15:15:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2024-iowa',
    round: 10,
    name: 'Indy NXT 100 at Iowa Speedway',
    circuitId: 'iowa-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-12T22:30:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race', startUtc: '2024-07-13T18:05:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'indy-nxt-2024-wwtr',
    round: 11,
    name: 'Indy NXT OUTFRONT Showdown at World Wide Technology Raceway',
    circuitId: 'world-wide-technology-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-16T22:45:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race', startUtc: '2024-08-17T19:55:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'indy-nxt-2024-portland',
    round: 12,
    name: 'Indy NXT Grand Prix of Portland',
    circuitId: 'portland-international-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-24T23:20:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race', startUtc: '2024-08-25T17:10:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2024-milwaukee',
    round: 13,
    name: 'Indy NXT 100 at Milwaukee Mile',
    circuitId: 'milwaukee-mile',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-31T17:00:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race', startUtc: '2024-08-31T19:50:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2024-nashville',
    round: 14,
    name: 'Indy NXT Music City Grand Prix',
    circuitId: 'nashville-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-14T19:45:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race', startUtc: '2024-09-15T15:50:00Z', durationMinutes: 75 },
    ],
  },
]
