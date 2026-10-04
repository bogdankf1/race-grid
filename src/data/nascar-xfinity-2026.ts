import { RaceEvent } from '@/lib/types'

// NASCAR Xfinity Series (2026 NASCAR O'Reilly Auto Parts Series) — 33 points races
// Source: cf.nascar.com official schedule feed (session times in UTC) — re-verified Oct 2026
export const nascarXfinity2026: RaceEvent[] = [
  {
    id: 'nascar-xfinity-2026-daytona',
    round: 1,
    name: 'United Rentals 300',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-02-13T21:30:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-02-14T15:00:00Z', durationMinutes: 90 },
      { type: 'race', label: 'United Rentals 300', startUtc: '2026-02-14T22:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-atlanta',
    round: 2,
    name: 'Bennett Transportation & Logistics 250',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-02-20T22:00:00Z', durationMinutes: 90 },
      { type: 'race', label: 'Bennett Transportation & Logistics 250', startUtc: '2026-02-21T22:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-cota',
    round: 3,
    name: 'Focused Health 250',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-02-27T22:00:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-02-27T23:05:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Focused Health 250', startUtc: '2026-02-28T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-phoenix',
    round: 4,
    name: 'GOVX 200',
    circuitId: 'phoenix-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-03-07T00:00:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-07T01:05:00Z', durationMinutes: 55 },
      { type: 'race', label: 'GOVX 200', startUtc: '2026-03-08T00:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-las-vegas',
    round: 5,
    name: 'The LiUNA',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-03-14T16:00:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-14T17:05:00Z', durationMinutes: 55 },
      { type: 'race', label: 'The LiUNA', startUtc: '2026-03-14T21:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-darlington',
    round: 6,
    name: 'Sport Clips Haircuts VFW Help a Hero 200',
    circuitId: 'darlington-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-03-21T16:00:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-21T17:05:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Sport Clips Haircuts VFW Help a Hero 200', startUtc: '2026-03-21T21:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-martinsville',
    round: 7,
    name: 'NFPA 250',
    circuitId: 'martinsville-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-03-27T20:30:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-27T21:35:00Z', durationMinutes: 55 },
      { type: 'race', label: 'NFPA 250', startUtc: '2026-03-28T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-rockingham',
    round: 8,
    name: 'North Carolina Education Lottery 250 Presented by Black\'s Tire',
    circuitId: 'rockingham-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-04-03T17:30:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-03T18:35:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Race', startUtc: '2026-04-04T18:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-bristol',
    round: 9,
    name: 'Suburban Propane 300',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-04-11T18:00:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-11T19:05:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Suburban Propane 300', startUtc: '2026-04-11T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-kansas',
    round: 10,
    name: 'Kansas Lottery 300',
    circuitId: 'kansas-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-18T00:05:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Kansas Lottery 300', startUtc: '2026-04-18T23:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-talladega',
    round: 11,
    name: 'AG-PRO 300',
    circuitId: 'talladega-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-24T21:30:00Z', durationMinutes: 90 },
      { type: 'race', label: 'AG-PRO 300', startUtc: '2026-04-25T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-texas',
    round: 12,
    name: 'Andy\'s Frozen Custard 340',
    circuitId: 'texas-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-05-01T21:00:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-01T22:05:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Race', startUtc: '2026-05-02T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-watkins-glen',
    round: 13,
    name: 'Mission 200 at The Glen',
    circuitId: 'watkins-glen-international',
    sessions: [
      { type: 'qualifying', label: 'Practice & Qualifying', startUtc: '2026-05-09T14:45:00Z', durationMinutes: 105 },
      { type: 'race', label: 'Mission 200 at The Glen', startUtc: '2026-05-09T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-dover',
    round: 14,
    name: 'BetRivers 200',
    circuitId: 'dover-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-05-16T13:30:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-16T14:35:00Z', durationMinutes: 55 },
      { type: 'race', label: 'BetRivers 200', startUtc: '2026-05-16T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-charlotte',
    round: 15,
    name: 'Charbroil 300',
    circuitId: 'charlotte-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-23T16:05:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Charbroil 300', startUtc: '2026-05-23T21:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-nashville',
    round: 16,
    name: 'Sports Illustrated Resorts 250',
    circuitId: 'nashville-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Practice & Qualifying', startUtc: '2026-05-30T19:05:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Sports Illustrated Resorts 250', startUtc: '2026-05-30T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-pocono',
    round: 17,
    name: 'MillerTech Battery 250 presented by KOA',
    circuitId: 'pocono-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-06-13T14:30:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-13T15:35:00Z', durationMinutes: 55 },
      { type: 'race', label: 'MillerTech Battery 250 presented by KOA', startUtc: '2026-06-13T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-san-diego',
    round: 18,
    name: 'United Rentals Driven to Serve 250',
    circuitId: 'san-diego-street-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-06-19T19:30:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-20T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'United Rentals Driven to Serve 250', startUtc: '2026-06-20T21:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-sonoma',
    round: 19,
    name: 'Pit Boss/FoodMaxx 250',
    circuitId: 'sonoma-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-06-26T20:00:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-26T21:05:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Pit Boss/FoodMaxx 250', startUtc: '2026-06-27T21:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-chicagoland',
    round: 20,
    name: 'Cuervo 300',
    circuitId: 'chicagoland-speedway',
    sessions: [
      { type: 'qualifying', label: 'Practice & Qualifying', startUtc: '2026-07-04T17:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-07-04T21:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-atlanta-2',
    round: 21,
    name: 'Focused Health 250',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-11T15:00:00Z', durationMinutes: 90 },
      { type: 'race', label: 'Focused Health 250', startUtc: '2026-07-11T23:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-indianapolis',
    round: 22,
    name: 'Pennzoil 250 presented by Take 5 Oil Change',
    circuitId: 'indianapolis-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-07-24T16:00:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-25T16:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Pennzoil 250 presented by Take 5 Oil Change', startUtc: '2026-07-25T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-iowa',
    round: 23,
    name: 'HyVee Perks 250',
    circuitId: 'iowa-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-08-08T15:30:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-08T16:35:00Z', durationMinutes: 55 },
      { type: 'race', label: 'HyVee Perks 250', startUtc: '2026-08-08T21:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-daytona-2',
    round: 24,
    name: 'Winn-Dixie 250 Powered by Coca-Cola',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-28T19:00:00Z', durationMinutes: 90 },
      { type: 'race', label: 'Winn-Dixie 250 Powered by Coca-Cola', startUtc: '2026-08-28T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-darlington-2',
    round: 25,
    name: 'Fleetio 200',
    circuitId: 'darlington-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-09-05T17:30:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-05T18:35:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Race', startUtc: '2026-09-05T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-wwtr',
    round: 26,
    name: 'Nu Way 225 Powered by Bobcat and Sauced by Blues Hog',
    circuitId: 'world-wide-technology-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-09-12T17:00:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-12T18:05:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Race', startUtc: '2026-09-12T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-bristol-night',
    round: 27,
    name: 'Food City 300',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-09-18T18:00:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-18T19:05:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Race', startUtc: '2026-09-18T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-las-vegas-2',
    round: 28,
    name: 'Focused Health 302',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-10-03T18:00:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-03T19:05:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Race', startUtc: '2026-10-03T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-charlotte-2',
    round: 29,
    name: 'Blue Cross NC 300',
    circuitId: 'charlotte-motor-speedway-roval',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-10-10T14:30:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-10T15:35:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Race', startUtc: '2026-10-10T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-phoenix-2',
    round: 30,
    name: 'Timberland PRO 200',
    circuitId: 'phoenix-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-10-17T18:00:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-17T19:05:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Race', startUtc: '2026-10-17T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-talladega-2',
    round: 31,
    name: 'The Progress Group 250',
    circuitId: 'talladega-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-24T15:00:00Z', durationMinutes: 90 },
      { type: 'race', label: 'Race', startUtc: '2026-10-24T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-martinsville-2',
    round: 32,
    name: 'NASCAR O\'Reilly Auto Parts Series Race at Martinsville',
    circuitId: 'martinsville-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-10-30T19:00:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-30T20:05:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Race', startUtc: '2026-10-31T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-homestead',
    round: 33,
    name: 'NASCAR O\'Reilly Auto Parts Series Championship Race',
    circuitId: 'homestead-miami-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-11-06T21:00:00Z', durationMinutes: 50 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-11-07T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-11-07T22:00:00Z', durationMinutes: 180 },
    ],
  },
]
