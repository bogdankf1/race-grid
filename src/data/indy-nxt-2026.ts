import { RaceEvent } from '@/lib/types'

// Indy NXT by Firestone 2026 calendar — 17 races at 12 tracks
// Source: indynxt.com/Schedule/2026, FOX Sports schedule release
// Times converted from ET to UTC (EST = UTC-5 before Mar 8; EDT = UTC-4 after).
// Where official practice/qualifying times have not been published per round, only race is listed.
export const indyNxt2026: RaceEvent[] = [
  {
    id: 'indy-nxt-2026-st-petersburg',
    round: 1,
    name: 'Indy NXT Grand Prix of St. Petersburg',
    circuitId: 'streets-of-st-petersburg',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-02-27T17:30:00Z', durationMinutes: 45 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-02-28T13:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-02-28T20:30:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race', startUtc: '2026-03-01T15:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2026-arlington',
    round: 2,
    name: 'Indy NXT Grand Prix of Arlington',
    circuitId: 'streets-of-arlington',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-03-13T19:00:00Z', durationMinutes: 45 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-03-14T15:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-14T20:30:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race', startUtc: '2026-03-15T14:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2026-barber-1',
    round: 3,
    name: 'Indy NXT Grand Prix of Alabama — Race 1',
    circuitId: 'barber-motorsports-park',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-03-27T18:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-28T14:00:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race 1', startUtc: '2026-03-28T17:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2026-barber-2',
    round: 4,
    name: 'Indy NXT Grand Prix of Alabama — Race 2',
    circuitId: 'barber-motorsports-park',
    sessions: [
      { type: 'race', label: 'Race 2', startUtc: '2026-03-29T15:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2026-indianapolis-gp-1',
    round: 5,
    name: 'Indy NXT Indianapolis Grand Prix — Race 1',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-05-08T12:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-08T16:00:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race 1', startUtc: '2026-05-08T20:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2026-indianapolis-gp-2',
    round: 6,
    name: 'Indy NXT Indianapolis Grand Prix — Race 2',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      { type: 'race', label: 'Race 2', startUtc: '2026-05-09T18:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2026-detroit',
    round: 7,
    name: 'Indy NXT Detroit Grand Prix',
    circuitId: 'streets-of-detroit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-05-29T18:00:00Z', durationMinutes: 45 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-05-30T12:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-30T16:00:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race', startUtc: '2026-05-31T14:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2026-wwtr',
    round: 8,
    name: 'Indy NXT at World Wide Technology Raceway',
    circuitId: 'world-wide-technology-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-06-06T19:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-06T22:00:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race', startUtc: '2026-06-07T21:30:00Z', durationMinutes: 75 },
    ],
  },
  {
    id: 'indy-nxt-2026-road-america-1',
    round: 9,
    name: 'Indy NXT at Road America — Race 1',
    circuitId: 'road-america',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-06-19T19:00:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-20T14:00:00Z', durationMinutes: 45 },
      { type: 'race', label: 'Race 1', startUtc: '2026-06-20T16:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2026-road-america-2',
    round: 10,
    name: 'Indy NXT at Road America — Race 2',
    circuitId: 'road-america',
    sessions: [
      { type: 'race', label: 'Race 2', startUtc: '2026-06-21T16:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2026-mid-ohio-1',
    round: 11,
    name: 'Indy NXT Honda Indy 200 at Mid-Ohio — Race 1',
    circuitId: 'mid-ohio-sports-car-course',
    sessions: [
      { type: 'race', label: 'Race 1', startUtc: '2026-07-04T17:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2026-mid-ohio-2',
    round: 12,
    name: 'Indy NXT Honda Indy 200 at Mid-Ohio — Race 2',
    circuitId: 'mid-ohio-sports-car-course',
    sessions: [
      { type: 'race', label: 'Race 2', startUtc: '2026-07-05T14:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2026-nashville',
    round: 13,
    name: 'Indy NXT Music City Grand Prix',
    circuitId: 'nashville-superspeedway',
    // Sunday July 19, 2026 — race start time TBA per official schedule
    sessions: [
      { type: 'race', label: 'Race', startUtc: '2026-07-19T22:00:00Z', durationMinutes: 75, tba: true },
    ],
  },
  {
    id: 'indy-nxt-2026-portland',
    round: 14,
    name: 'Indy NXT Grand Prix of Portland',
    circuitId: 'portland-international-raceway',
    sessions: [
      { type: 'race', label: 'Race', startUtc: '2026-08-09T18:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2026-milwaukee',
    round: 15,
    name: 'Indy NXT at Milwaukee Mile',
    circuitId: 'milwaukee-mile',
    sessions: [
      { type: 'race', label: 'Race', startUtc: '2026-08-30T15:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2026-laguna-seca-1',
    round: 16,
    name: 'Indy NXT Grand Prix of Monterey — Race 1',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      { type: 'race', label: 'Race 1', startUtc: '2026-09-05T22:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2026-laguna-seca-2',
    round: 17,
    name: 'Indy NXT Grand Prix of Monterey — Race 2',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      { type: 'race', label: 'Race 2', startUtc: '2026-09-06T16:30:00Z', durationMinutes: 60 },
    ],
  },
]
