import { RaceEvent } from '@/lib/types'

// NASCAR Xfinity Series (2026 NASCAR O'Reilly Auto Parts Series) — 33 points races
// Sources: en.wikipedia.org/wiki/2026_NASCAR_O'Reilly_Auto_Parts_Series, espn.com/racing/schedule/_/series/xfinity, nascar.com
// Times converted from ET to UTC (ET = UTC-5 in winter, UTC-4 during DST; DST starts Mar 8 2026 in US)
// Xfinity races are typically run on Saturdays at common afternoon TV slots; qualifying is Friday or Saturday morning.
export const nascarXfinity2026: RaceEvent[] = [
  {
    id: 'nascar-xfinity-2026-daytona',
    round: 1,
    name: 'United Rentals 300',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-02-13T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'United Rentals 300', startUtc: '2026-02-14T22:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-atlanta',
    round: 2,
    name: 'Bennett Transportation & Logistics 250',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-02-21T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Bennett Transportation & Logistics 250', startUtc: '2026-02-21T22:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-cota',
    round: 3,
    name: 'Focused Health 250',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-02-28T17:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Focused Health 250', startUtc: '2026-02-28T22:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-phoenix',
    round: 4,
    name: 'GOVX 200',
    circuitId: 'phoenix-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-07T19:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'GOVX 200', startUtc: '2026-03-07T22:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-las-vegas',
    round: 5,
    name: 'The LiUNA!',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-14T19:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'The LiUNA!', startUtc: '2026-03-14T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-darlington',
    round: 6,
    name: 'Sport Clips Haircuts VFW 200',
    circuitId: 'darlington-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-21T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Sport Clips Haircuts VFW 200', startUtc: '2026-03-21T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-martinsville',
    round: 7,
    name: 'NFPA 250',
    circuitId: 'martinsville-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-28T16:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'NFPA 250', startUtc: '2026-03-28T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-rockingham',
    round: 8,
    name: 'North Carolina Education Lottery 250',
    circuitId: 'rockingham-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-04T16:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'North Carolina Education Lottery 250', startUtc: '2026-04-04T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-bristol',
    round: 9,
    name: 'Suburban Propane 300',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-10T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Suburban Propane 300', startUtc: '2026-04-11T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-kansas',
    round: 10,
    name: 'Kansas Lottery 300',
    circuitId: 'kansas-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-18T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Kansas Lottery 300', startUtc: '2026-04-18T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-talladega',
    round: 11,
    name: 'Ag-Pro 300',
    circuitId: 'talladega-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-25T16:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Ag-Pro 300', startUtc: '2026-04-25T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-texas',
    round: 12,
    name: "Andy's Frozen Custard 340",
    circuitId: 'texas-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-02T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: "Andy's Frozen Custard 340", startUtc: '2026-05-02T21:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-watkins-glen',
    round: 13,
    name: 'Mission 200 at The Glen',
    circuitId: 'watkins-glen-international',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-09T15:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Mission 200 at The Glen', startUtc: '2026-05-09T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-dover',
    round: 14,
    name: 'BetRivers 200',
    circuitId: 'dover-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-16T15:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'BetRivers 200', startUtc: '2026-05-16T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-charlotte',
    round: 15,
    name: 'Charbroil 300',
    circuitId: 'charlotte-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-23T16:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Charbroil 300', startUtc: '2026-05-23T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-nashville',
    round: 16,
    name: 'Sports Illustrated Resorts 250',
    circuitId: 'nashville-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-30T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Sports Illustrated Resorts 250', startUtc: '2026-05-30T22:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-pocono',
    round: 17,
    name: 'MillerTech Battery 250',
    circuitId: 'pocono-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-13T15:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'MillerTech Battery 250', startUtc: '2026-06-13T20:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-san-diego',
    round: 18,
    name: 'United Rentals Driven to Serve 250',
    circuitId: 'san-diego-street-course',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-20T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'United Rentals Driven to Serve 250', startUtc: '2026-06-20T22:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-sonoma',
    round: 19,
    name: 'Pit Boss/FoodMaxx 250',
    circuitId: 'sonoma-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-27T17:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Pit Boss/FoodMaxx 250', startUtc: '2026-06-27T22:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-chicagoland',
    round: 20,
    name: 'Chicagoland Race',
    circuitId: 'chicagoland-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-04T15:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-07-04T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-atlanta-2',
    round: 21,
    name: 'Focused Health 250',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-11T18:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Focused Health 250', startUtc: '2026-07-11T22:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-indianapolis',
    round: 22,
    name: 'Pennzoil 250',
    circuitId: 'indianapolis-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-25T15:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Pennzoil 250', startUtc: '2026-07-25T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-iowa',
    round: 23,
    name: 'Hy-Vee PERKS 250',
    circuitId: 'iowa-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-08T16:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Hy-Vee PERKS 250', startUtc: '2026-08-08T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-daytona-2',
    round: 24,
    name: 'Wawa 250',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-28T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Wawa 250', startUtc: '2026-08-28T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-darlington-2',
    round: 25,
    name: 'Darlington Playoff Race',
    circuitId: 'darlington-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-05T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-09-05T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-wwtr',
    round: 26,
    name: 'WWTR Playoff Race',
    circuitId: 'world-wide-technology-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-12T17:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-09-12T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-bristol-night',
    round: 27,
    name: 'Bristol Night Playoff Race',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-18T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-09-18T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-las-vegas-2',
    round: 28,
    name: 'Las Vegas Playoff Race',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-03T18:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-10-03T22:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-charlotte-2',
    round: 29,
    name: 'Charlotte ROVAL Playoff Race',
    circuitId: 'charlotte-motor-speedway-roval',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-10T16:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-10-10T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-phoenix-2',
    round: 30,
    name: 'Phoenix Playoff Race',
    circuitId: 'phoenix-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-17T19:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-10-17T22:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-talladega-2',
    round: 31,
    name: 'Talladega Playoff Race',
    circuitId: 'talladega-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-24T16:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-10-24T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-martinsville-2',
    round: 32,
    name: 'Martinsville Playoff Race',
    circuitId: 'martinsville-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-31T16:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2026-10-31T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2026-homestead',
    round: 33,
    name: 'Hard Rock Bet 300',
    circuitId: 'homestead-miami-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-11-07T17:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Hard Rock Bet 300', startUtc: '2026-11-07T20:00:00Z', durationMinutes: 180 },
    ],
  },
]
