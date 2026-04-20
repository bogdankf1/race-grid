import { RaceEvent } from '@/lib/types'

// IndyCar Series 2022 calendar — 17 races
// Source: indycar.com, motorsport.com, Wikipedia
// Times converted to UTC. DST starts Mar 13 2022.
// EST=UTC-5, EDT=UTC-4, CDT=UTC-5, PDT=UTC-7
export const indycar2022: RaceEvent[] = [
  {
    id: 'indycar-2022-st-petersburg',
    round: 1,
    name: 'Firestone Grand Prix of St. Petersburg',
    circuitId: 'streets-of-st-petersburg',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-02-25T19:45:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-02-26T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-02-27T17:25:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2022-texas',
    round: 2,
    name: 'XPEL 375',
    circuitId: 'texas-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-03-19T18:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-03-19T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-03-20T17:40:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2022-long-beach',
    round: 3,
    name: 'Acura Grand Prix of Long Beach',
    circuitId: 'streets-of-long-beach',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-04-08T22:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-09T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-04-10T22:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2022-barber',
    round: 4,
    name: 'Honda Indy Grand Prix of Alabama',
    circuitId: 'barber-motorsports-park',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-04-29T19:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-30T18:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-05-01T18:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2022-indianapolis-gp',
    round: 5,
    name: 'GMR Grand Prix',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-05-13T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-13T20:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-05-14T19:20:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2022-indy500',
    round: 6,
    name: '106th Indianapolis 500',
    circuitId: 'indianapolis-motor-speedway-oval',
    sessions: [
      { type: 'practice', label: 'Practice - Opening Day', startUtc: '2022-05-17T15:00:00Z', durationMinutes: 360 },
      { type: 'qualifying', label: 'Qualifying - Day 1', startUtc: '2022-05-21T15:00:00Z', durationMinutes: 360 },
      { type: 'qualifying', label: 'Qualifying - Day 2', startUtc: '2022-05-22T15:00:00Z', durationMinutes: 300 },
      { type: 'race', label: 'Indianapolis 500', startUtc: '2022-05-29T16:30:00Z', durationMinutes: 200 },
    ],
  },
  {
    id: 'indycar-2022-detroit',
    round: 7,
    name: 'Chevrolet Detroit Grand Prix',
    circuitId: 'belle-isle-street-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-06-03T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-04T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-06-05T19:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2022-road-america',
    round: 8,
    name: 'Sonsio Grand Prix at Road America',
    circuitId: 'road-america',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-06-10T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-11T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-06-12T17:35:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2022-mid-ohio',
    round: 9,
    name: 'Honda Indy 200 at Mid-Ohio',
    circuitId: 'mid-ohio-sports-car-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-07-01T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-02T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-07-03T16:45:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2022-toronto',
    round: 10,
    name: 'Honda Indy Toronto',
    circuitId: 'exhibition-place',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-07-15T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-16T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-07-17T19:15:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2022-iowa-1',
    round: 11,
    name: 'Hy-VeeDeals.com 250',
    circuitId: 'iowa-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-07-22T18:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-23T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 1', startUtc: '2022-07-23T20:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'indycar-2022-iowa-2',
    round: 12,
    name: 'Hy-Vee Salute to Farmers 300',
    circuitId: 'iowa-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-24T16:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2022-07-24T19:30:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'indycar-2022-indianapolis-gp2',
    round: 13,
    name: 'Gallagher Grand Prix',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-07-29T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-29T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-07-30T16:20:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2022-nashville',
    round: 14,
    name: 'Big Machine Music City Grand Prix',
    circuitId: 'nashville-street-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-08-05T18:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-08-06T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-08-07T19:15:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2022-wwtr',
    round: 15,
    name: 'Bommarito Automotive Group 500',
    circuitId: 'world-wide-technology-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-08-19T18:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-08-20T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-08-20T23:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2022-portland',
    round: 16,
    name: 'Grand Prix of Portland',
    circuitId: 'portland-international-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-09-02T19:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-03T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-09-04T22:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2022-laguna-seca',
    round: 17,
    name: 'Firestone Grand Prix of Monterey',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-09-09T19:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-10T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2022-09-11T22:30:00Z', durationMinutes: 120 },
    ],
  },
]
