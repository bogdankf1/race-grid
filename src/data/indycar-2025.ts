import { RaceEvent } from '@/lib/types'

// IndyCar Series 2025 calendar — 17 races
// Source: indycar.com official schedule, Wikipedia, FOX Sports
// Times converted from ET to UTC (ET = UTC-5 in winter, UTC-4 during DST)
// DST starts Mar 9 2025 in US
export const indycar2025: RaceEvent[] = [
  {
    id: 'indycar-2025-st-petersburg',
    round: 1,
    name: 'Firestone Grand Prix of St. Petersburg',
    circuitId: 'streets-of-st-petersburg',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-02-28T20:05:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-03-01T19:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-03-02T17:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2025-thermal',
    round: 2,
    name: 'The Thermal Club IndyCar Grand Prix',
    circuitId: 'the-thermal-club',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-03-21T22:30:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-03-22T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-03-23T19:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2025-long-beach',
    round: 3,
    name: 'Acura Grand Prix of Long Beach',
    circuitId: 'streets-of-long-beach',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-04-11T22:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-04-12T18:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-04-13T20:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2025-barber',
    round: 4,
    name: "Children's of Alabama Indy Grand Prix",
    circuitId: 'barber-motorsports-park',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-05-02T19:30:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-03T18:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-05-04T17:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2025-indianapolis-gp',
    round: 5,
    name: 'Sonsio Grand Prix',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-05-09T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-09T20:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-05-10T20:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2025-indy500',
    round: 6,
    name: '109th Indianapolis 500',
    circuitId: 'indianapolis-motor-speedway-oval',
    sessions: [
      { type: 'practice', label: 'Practice - Opening Day', startUtc: '2025-05-13T15:00:00Z', durationMinutes: 360 },
      { type: 'qualifying', label: 'Qualifying - Day 1', startUtc: '2025-05-17T15:00:00Z', durationMinutes: 360 },
      { type: 'qualifying', label: 'Qualifying - Day 2', startUtc: '2025-05-18T15:00:00Z', durationMinutes: 300 },
      { type: 'race', label: 'Indianapolis 500', startUtc: '2025-05-25T16:45:00Z', durationMinutes: 200 },
    ],
  },
  {
    id: 'indycar-2025-detroit',
    round: 7,
    name: 'Chevrolet Detroit Grand Prix',
    circuitId: 'streets-of-detroit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-05-30T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-31T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-06-01T16:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2025-wwtr',
    round: 8,
    name: 'Bommarito Automotive Group 500',
    circuitId: 'world-wide-technology-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-06-14T18:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-06-14T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-06-15T19:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2025-road-america',
    round: 9,
    name: 'XPEL Grand Prix at Road America',
    circuitId: 'road-america',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-06-20T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-06-21T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-06-22T19:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2025-mid-ohio',
    round: 10,
    name: 'Honda Indy 200 at Mid-Ohio',
    circuitId: 'mid-ohio-sports-car-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-07-04T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-05T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-07-06T18:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2025-iowa-1',
    round: 11,
    name: 'Synk 275 Powered by Sukup',
    circuitId: 'iowa-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-07-11T18:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-12T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 1', startUtc: '2025-07-12T21:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'indycar-2025-iowa-2',
    round: 12,
    name: 'Farm to Finish 275 Powered by Sukup',
    circuitId: 'iowa-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-13T16:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2025-07-13T18:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'indycar-2025-toronto',
    round: 13,
    name: 'Ontario Honda Dealers Indy Toronto',
    circuitId: 'exhibition-place',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-07-18T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-19T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-07-20T18:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2025-laguna-seca',
    round: 14,
    name: 'Java House Grand Prix of Monterey',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-07-25T19:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-26T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-07-27T19:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2025-portland',
    round: 15,
    name: 'BitNile.com Grand Prix of Portland',
    circuitId: 'portland-international-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-08-08T19:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-09T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-08-10T20:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2025-milwaukee',
    round: 16,
    name: 'Snap-on Milwaukee Mile 250',
    circuitId: 'milwaukee-mile',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-08-23T18:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-23T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-08-24T17:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'indycar-2025-nashville',
    round: 17,
    name: 'Borchetta Bourbon Music City Grand Prix',
    circuitId: 'nashville-superspeedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-08-29T18:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-30T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2025-08-31T18:30:00Z', durationMinutes: 120 },
    ],
  },
]
