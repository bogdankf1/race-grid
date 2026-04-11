import { RaceEvent } from '@/lib/types'

// IndyCar Series 2026 calendar — 17 races across 16 weekends
// Source: indycar.com official schedule
// Times converted from ET to UTC (ET = UTC-4 during DST, UTC-5 in winter)
export const indycar2026: RaceEvent[] = [
  {
    id: 'indycar-2026-st-petersburg',
    round: 1,
    name: 'Firestone Grand Prix of St. Petersburg',
    circuitId: 'streets-of-st-petersburg',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-02-27T17:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-02-28T17:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-03-01T17:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2026-phoenix',
    round: 2,
    name: 'Good Ranchers 250',
    circuitId: 'phoenix-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-03-06T20:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-07T00:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-03-07T20:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2026-arlington',
    round: 3,
    name: 'Java House Grand Prix of Arlington',
    circuitId: 'streets-of-arlington',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-03-14T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-14T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-03-15T16:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2026-barber',
    round: 4,
    name: "Children's of Alabama Indy Grand Prix",
    circuitId: 'barber-motorsports-park',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-03-28T15:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-28T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-03-29T17:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2026-long-beach',
    round: 5,
    name: 'Acura Grand Prix of Long Beach',
    circuitId: 'streets-of-long-beach',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-04-17T19:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-18T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-04-19T21:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2026-indianapolis-gp',
    round: 6,
    name: 'Sonsio Grand Prix',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-05-08T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-09T18:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-05-09T20:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2026-indy500',
    round: 7,
    name: '110th Indianapolis 500',
    circuitId: 'indianapolis-motor-speedway-oval',
    sessions: [
      { type: 'practice', label: 'Practice - Opening Day', startUtc: '2026-05-12T16:00:00Z', durationMinutes: 360 },
      { type: 'qualifying', label: 'Qualifying - Day 1', startUtc: '2026-05-16T15:00:00Z', durationMinutes: 360 },
      { type: 'qualifying', label: 'Qualifying - Day 2', startUtc: '2026-05-17T15:00:00Z', durationMinutes: 300 },
      { type: 'race', label: 'Indianapolis 500', startUtc: '2026-05-24T14:00:00Z', durationMinutes: 200 },
    ],
  },
  {
    id: 'indycar-2026-detroit',
    round: 8,
    name: 'Chevrolet Detroit Grand Prix',
    circuitId: 'streets-of-detroit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-05-30T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-30T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-05-31T16:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2026-wwtr',
    round: 9,
    name: 'Bommarito Automotive Group 500',
    circuitId: 'world-wide-technology-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-06-06T20:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-07T00:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-06-08T01:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2026-road-america',
    round: 10,
    name: 'XPEL Grand Prix at Road America',
    circuitId: 'road-america',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-06-20T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-20T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-06-21T18:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2026-mid-ohio',
    round: 11,
    name: 'Honda Indy 200 at Mid-Ohio',
    circuitId: 'mid-ohio-sports-car-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-07-04T15:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-04T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-07-05T16:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2026-nashville',
    round: 12,
    name: 'Borchetta Bourbon Music City Grand Prix',
    circuitId: 'nashville-superspeedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-07-18T18:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-18T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-07-19T20:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2026-portland',
    round: 13,
    name: 'BITNILE.com Grand Prix of Portland',
    circuitId: 'portland-international-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-08-08T19:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-08T23:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-08-09T20:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2026-markham',
    round: 14,
    name: 'Ontario Honda Dealers Indy at Markham',
    circuitId: 'streets-of-markham',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-08-15T15:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-15T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-08-16T16:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2026-washington',
    round: 15,
    name: 'Freedom 250 Grand Prix of Washington, D.C.',
    circuitId: 'streets-of-washington-dc',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-08-22T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-22T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-08-23T18:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2026-milwaukee-1',
    round: 16,
    name: 'Snap-on Makers and Fixers 250',
    circuitId: 'milwaukee-mile',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-08-28T18:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-29T16:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 1', startUtc: '2026-08-29T18:30:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'indycar-2026-milwaukee-2',
    round: 17,
    name: 'Snap-on Milwaukee Mile 250',
    circuitId: 'milwaukee-mile',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-30T15:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2026-08-30T17:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'indycar-2026-laguna-seca',
    round: 18,
    name: 'Firestone Grand Prix of Monterey',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-09-05T19:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-05T23:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-09-06T18:30:00Z', durationMinutes: 120 },
    ],
  },
]
