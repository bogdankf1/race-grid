import { RaceEvent } from '@/lib/types'

// IndyCar Series 2023 calendar — 17 races
// Source: indycar.com, motorsport.com, Wikipedia
// Times converted to UTC. DST starts Mar 12 2023.
// EST=UTC-5, EDT=UTC-4, CDT=UTC-5, PDT=UTC-7
export const indycar2023: RaceEvent[] = [
  {
    id: 'indycar-2023-st-petersburg',
    round: 1,
    name: 'Firestone Grand Prix of St. Petersburg',
    circuitId: 'streets-of-st-petersburg',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-03-03T19:45:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-03-04T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-03-05T17:20:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2023-texas',
    round: 2,
    name: 'PPG 375',
    circuitId: 'texas-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-04-01T18:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-01T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-04-02T17:10:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2023-long-beach',
    round: 3,
    name: 'Acura Grand Prix of Long Beach',
    circuitId: 'streets-of-long-beach',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-04-14T22:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-15T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-04-16T19:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2023-barber',
    round: 4,
    name: "Children's of Alabama Indy Grand Prix",
    circuitId: 'barber-motorsports-park',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-04-28T19:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-29T18:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-04-30T19:15:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2023-indianapolis-gp',
    round: 5,
    name: 'GMR Grand Prix',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-05-12T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-05-12T20:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-05-13T19:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2023-indy500',
    round: 6,
    name: '107th Indianapolis 500',
    circuitId: 'indianapolis-motor-speedway-oval',
    sessions: [
      { type: 'practice', label: 'Practice - Opening Day', startUtc: '2023-05-16T15:00:00Z', durationMinutes: 360 },
      { type: 'qualifying', label: 'Qualifying - Day 1', startUtc: '2023-05-20T15:00:00Z', durationMinutes: 360 },
      { type: 'qualifying', label: 'Qualifying - Day 2', startUtc: '2023-05-21T15:00:00Z', durationMinutes: 300 },
      { type: 'race', label: 'Indianapolis 500', startUtc: '2023-05-28T16:30:00Z', durationMinutes: 200 },
    ],
  },
  {
    id: 'indycar-2023-detroit',
    round: 7,
    name: 'Chevrolet Detroit Grand Prix',
    circuitId: 'streets-of-detroit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-06-02T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-03T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-06-04T19:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2023-road-america',
    round: 8,
    name: 'Sonsio Grand Prix at Road America',
    circuitId: 'road-america',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-06-16T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-17T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-06-18T17:15:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2023-mid-ohio',
    round: 9,
    name: 'Honda Indy 200 at Mid-Ohio',
    circuitId: 'mid-ohio-sports-car-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-06-30T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-01T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-07-02T17:45:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2023-toronto',
    round: 10,
    name: 'Honda Indy Toronto',
    circuitId: 'exhibition-place',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-07-14T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-15T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-07-16T17:45:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2023-iowa-1',
    round: 11,
    name: 'Hy-Vee Homefront 250',
    circuitId: 'iowa-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-07-21T18:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-22T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 1', startUtc: '2023-07-22T20:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'indycar-2023-iowa-2',
    round: 12,
    name: 'Hy-Vee One Step 250',
    circuitId: 'iowa-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-23T16:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2023-07-23T19:30:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'indycar-2023-nashville',
    round: 13,
    name: 'Big Machine Music City Grand Prix',
    circuitId: 'nashville-street-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-08-04T18:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-05T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-08-06T17:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2023-indianapolis-gp2',
    round: 14,
    name: 'Gallagher Grand Prix',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-08-11T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-11T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-08-12T18:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2023-wwtr',
    round: 15,
    name: 'Bommarito Automotive Group 500',
    circuitId: 'world-wide-technology-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-08-25T18:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-26T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-08-27T20:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2023-portland',
    round: 16,
    name: 'Grand Prix of Portland',
    circuitId: 'portland-international-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-09-01T19:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-02T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-09-03T22:15:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2023-laguna-seca',
    round: 17,
    name: 'Firestone Grand Prix of Monterey',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-09-08T19:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-09T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2023-09-10T21:30:00Z', durationMinutes: 120 },
    ],
  },
]
