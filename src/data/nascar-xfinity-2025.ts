import { RaceEvent } from '@/lib/types'

// NASCAR Xfinity Series 2025 — 33 points races
// Sources: en.wikipedia.org/wiki/2025_NASCAR_Xfinity_Series, nascar.com/nascar-xfinity-series/2025/schedule, espn.com/racing/schedule/_/series/xfinity/year/2025
// Race start times converted from ET to UTC (ET = UTC-5 standard, UTC-4 during DST; DST in US ran Mar 9 – Nov 2, 2025).
// Qualifying placed roughly 90 min – 3 hours before race start (sourced from race weekend schedules).
export const nascarXfinity2025: RaceEvent[] = [
  {
    id: 'nascar-xfinity-2025-daytona',
    round: 1,
    name: 'United Rentals 300',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-02-14T22:35:00Z', durationMinutes: 60 },
      { type: 'race', label: 'United Rentals 300', startUtc: '2025-02-15T22:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-atlanta',
    round: 2,
    name: 'Bennett Transportation & Logistics 250',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-02-21T22:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Bennett Transportation & Logistics 250', startUtc: '2025-02-22T22:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-cota',
    round: 3,
    name: 'Focused Health 250',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-02-28T20:35:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Focused Health 250', startUtc: '2025-03-01T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-phoenix',
    round: 4,
    name: 'GOVX 200',
    circuitId: 'phoenix-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-03-07T22:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'GOVX 200', startUtc: '2025-03-08T22:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-las-vegas',
    round: 5,
    name: 'The LiUNA!',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      // DST in effect from Mar 9 — ET = UTC-4
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-03-14T22:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'The LiUNA!', startUtc: '2025-03-15T20:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-homestead',
    round: 6,
    name: 'Hard Rock Bet 300',
    circuitId: 'homestead-miami-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-03-21T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Hard Rock Bet 300', startUtc: '2025-03-22T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-martinsville',
    round: 7,
    name: 'US Marine Corps 250',
    circuitId: 'martinsville-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-03-28T21:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'US Marine Corps 250', startUtc: '2025-03-29T21:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-darlington',
    round: 8,
    name: 'Sport Clips Haircuts VFW Help A Hero 200',
    circuitId: 'darlington-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-04-04T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Sport Clips Haircuts VFW Help A Hero 200', startUtc: '2025-04-05T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-bristol',
    round: 9,
    name: 'SciAps 300',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-04-11T21:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'SciAps 300', startUtc: '2025-04-12T21:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-rockingham',
    round: 10,
    name: 'North Carolina Education Lottery 250',
    circuitId: 'rockingham-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-04-18T21:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'North Carolina Education Lottery 250', startUtc: '2025-04-19T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-talladega',
    round: 11,
    name: 'Ag-Pro 300',
    circuitId: 'talladega-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-04-25T20:35:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Ag-Pro 300', startUtc: '2025-04-26T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-texas',
    round: 12,
    name: "Andy's Frozen Custard 300",
    circuitId: 'texas-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-02T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: "Andy's Frozen Custard 300", startUtc: '2025-05-03T18:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-charlotte',
    round: 13,
    name: 'BetMGM 300',
    circuitId: 'charlotte-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-23T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'BetMGM 300', startUtc: '2025-05-24T20:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-nashville',
    round: 14,
    name: 'Tennessee Lottery 250',
    circuitId: 'nashville-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-30T22:35:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Tennessee Lottery 250', startUtc: '2025-05-31T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-mexico',
    round: 15,
    name: 'The Chilango 150',
    circuitId: 'autodromo-hermanos-rodriguez',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-06-13T22:35:00Z', durationMinutes: 60 },
      { type: 'race', label: 'The Chilango 150', startUtc: '2025-06-14T20:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-pocono',
    round: 16,
    name: 'Explore the Pocono Mountains 250',
    circuitId: 'pocono-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-06-20T20:35:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Explore the Pocono Mountains 250', startUtc: '2025-06-21T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-atlanta-2',
    round: 17,
    name: 'Focused Health 250',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-06-27T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Focused Health 250', startUtc: '2025-06-27T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-chicago',
    round: 18,
    name: 'The Loop 110',
    circuitId: 'chicago-street-course',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-04T22:35:00Z', durationMinutes: 60 },
      { type: 'race', label: 'The Loop 110', startUtc: '2025-07-05T20:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-sonoma',
    round: 19,
    name: 'Pit Boss/FoodMaxx 250',
    circuitId: 'sonoma-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-11T22:35:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Pit Boss/FoodMaxx 250', startUtc: '2025-07-12T20:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-dover',
    round: 20,
    name: 'BetRivers 200',
    circuitId: 'dover-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-18T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'BetRivers 200', startUtc: '2025-07-19T20:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-indianapolis',
    round: 21,
    name: 'Pennzoil 250',
    circuitId: 'indianapolis-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-25T21:35:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Pennzoil 250', startUtc: '2025-07-26T20:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-iowa',
    round: 22,
    name: 'Hy-Vee PERKS 250',
    circuitId: 'iowa-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-01T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Hy-Vee PERKS 250', startUtc: '2025-08-02T20:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-watkins-glen',
    round: 23,
    name: 'Mission 200 at The Glen',
    circuitId: 'watkins-glen-international',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-08T20:35:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Mission 200 at The Glen', startUtc: '2025-08-09T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-daytona-2',
    round: 24,
    name: 'Wawa 250',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-21T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Wawa 250', startUtc: '2025-08-22T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-portland',
    round: 25,
    name: 'Pacific Office Automation 147',
    circuitId: 'portland-international-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-29T22:35:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Pacific Office Automation 147', startUtc: '2025-08-30T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-wwtr',
    round: 26,
    name: 'Nu Way 200 Sauced by Blue Hog',
    circuitId: 'world-wide-technology-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-09-05T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Nu Way 200', startUtc: '2025-09-06T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-bristol-night',
    round: 27,
    name: 'Food City 300',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-09-11T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Food City 300', startUtc: '2025-09-12T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-kansas',
    round: 28,
    name: 'Kansas Lottery 300',
    circuitId: 'kansas-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-09-26T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Kansas Lottery 300', startUtc: '2025-09-27T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-charlotte-roval',
    round: 29,
    name: 'Blue Cross NC 250',
    circuitId: 'charlotte-motor-speedway-roval',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-10-03T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Blue Cross NC 250', startUtc: '2025-10-04T21:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-las-vegas-2',
    round: 30,
    name: 'Focused Health 302',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-10-10T23:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Focused Health 302', startUtc: '2025-10-11T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-talladega-2',
    round: 31,
    name: 'United Rentals 250',
    circuitId: 'talladega-superspeedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-10-17T20:35:00Z', durationMinutes: 60 },
      { type: 'race', label: 'United Rentals 250', startUtc: '2025-10-18T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-martinsville-2',
    round: 32,
    name: 'IAA and Ritchie Bros. 250',
    circuitId: 'martinsville-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-10-24T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'IAA and Ritchie Bros. 250', startUtc: '2025-10-25T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2025-phoenix-championship',
    round: 33,
    name: 'NASCAR Xfinity Series Championship Race',
    circuitId: 'phoenix-raceway',
    sessions: [
      // DST ended Nov 2; race day Nov 1 still DST → ET = UTC-4
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-10-31T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Championship Race', startUtc: '2025-11-01T23:30:00Z', durationMinutes: 180 },
    ],
  },
]
