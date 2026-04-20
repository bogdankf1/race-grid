import { RaceEvent } from '@/lib/types'

// IndyCar Series 2024 calendar — 17 races
// Source: indycar.com official schedule, motorsport.com, Wikipedia
// Times converted to UTC. DST starts Mar 10 2024.
// ET=UTC-5 (pre-DST), EDT=UTC-4, CDT=UTC-5, PDT=UTC-7
export const indycar2024: RaceEvent[] = [
  {
    id: 'indycar-2024-st-petersburg',
    round: 1,
    name: 'Firestone Grand Prix of St. Petersburg',
    circuitId: 'streets-of-st-petersburg',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-03-08T19:45:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-09T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-03-10T16:15:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2024-long-beach',
    round: 2,
    name: 'Acura Grand Prix of Long Beach',
    circuitId: 'streets-of-long-beach',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-04-19T22:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-20T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-04-21T16:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2024-barber',
    round: 3,
    name: "Children's of Alabama Indy Grand Prix",
    circuitId: 'barber-motorsports-park',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-04-26T19:30:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-27T18:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-04-28T16:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2024-indianapolis-gp',
    round: 4,
    name: 'Sonsio Grand Prix',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-05-10T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-10T20:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-05-11T19:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2024-indy500',
    round: 5,
    name: '108th Indianapolis 500',
    circuitId: 'indianapolis-motor-speedway-oval',
    sessions: [
      { type: 'practice', label: 'Practice - Opening Day', startUtc: '2024-05-14T15:00:00Z', durationMinutes: 360 },
      { type: 'qualifying', label: 'Qualifying - Day 1', startUtc: '2024-05-18T15:00:00Z', durationMinutes: 360 },
      { type: 'qualifying', label: 'Qualifying - Day 2', startUtc: '2024-05-19T15:00:00Z', durationMinutes: 300 },
      { type: 'race', label: 'Indianapolis 500', startUtc: '2024-05-26T16:38:00Z', durationMinutes: 200 },
    ],
  },
  {
    id: 'indycar-2024-detroit',
    round: 6,
    name: 'Chevrolet Detroit Grand Prix',
    circuitId: 'streets-of-detroit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-05-31T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-01T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-06-02T16:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2024-road-america',
    round: 7,
    name: 'XPEL Grand Prix at Road America',
    circuitId: 'road-america',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-06-07T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-08T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-06-09T18:35:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2024-laguna-seca',
    round: 8,
    name: 'Firestone Grand Prix of Monterey',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-06-21T19:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-22T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-06-23T19:15:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2024-mid-ohio',
    round: 9,
    name: 'Honda Indy 200 at Mid-Ohio',
    circuitId: 'mid-ohio-sports-car-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-07-05T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-06T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-07-07T17:45:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2024-iowa-1',
    round: 10,
    name: 'Hy-Vee Homefront 250',
    circuitId: 'iowa-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-07-12T18:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-13T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 1', startUtc: '2024-07-14T00:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'indycar-2024-iowa-2',
    round: 11,
    name: 'Hy-Vee One Step 250',
    circuitId: 'iowa-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-14T14:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2024-07-14T16:15:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'indycar-2024-toronto',
    round: 12,
    name: 'Ontario Honda Dealers Indy Toronto',
    circuitId: 'exhibition-place',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-07-19T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-20T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-07-21T17:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2024-wwtr',
    round: 13,
    name: 'Bommarito Automotive Group 500',
    circuitId: 'world-wide-technology-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-08-16T18:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-17T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-08-17T21:15:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2024-portland',
    round: 14,
    name: 'Grand Prix of Portland',
    circuitId: 'portland-international-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-08-23T19:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-24T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-08-25T16:20:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2024-milwaukee-1',
    round: 15,
    name: 'Hy-Vee Milwaukee Mile 250 - Race 1',
    circuitId: 'milwaukee-mile',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-08-30T18:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-31T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 1', startUtc: '2024-08-31T21:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'indycar-2024-milwaukee-2',
    round: 16,
    name: 'Hy-Vee Milwaukee Mile 250 - Race 2',
    circuitId: 'milwaukee-mile',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-01T15:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2024-09-01T17:50:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'indycar-2024-nashville',
    round: 17,
    name: 'Big Machine Music City Grand Prix',
    circuitId: 'nashville-superspeedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-09-13T18:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-14T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2024-09-15T18:30:00Z', durationMinutes: 120 },
    ],
  },
]
