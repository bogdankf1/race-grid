import { RaceEvent } from '@/lib/types'

// IndyCar Series 2021 calendar — 16 races
// Source: indycar.com, motorsport.com, Wikipedia
// Times converted to UTC from ET broadcast times. DST starts Mar 14 2021.
// EDT=UTC-4
// Toronto cancelled due to COVID-19.
export const indycar2021: RaceEvent[] = [
  {
    id: 'indycar-2021-barber',
    round: 1,
    name: 'Honda Indy Grand Prix of Alabama',
    circuitId: 'barber-motorsports-park',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-04-16T19:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-04-17T18:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-04-18T18:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2021-st-petersburg',
    round: 2,
    name: 'Firestone Grand Prix of St. Petersburg',
    circuitId: 'streets-of-st-petersburg',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-04-23T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-04-24T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-04-25T16:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2021-texas-1',
    round: 3,
    name: 'Genesys 300',
    circuitId: 'texas-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-04-30T18:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-04-30T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 1', startUtc: '2021-05-01T23:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2021-texas-2',
    round: 4,
    name: 'XPEL 375',
    circuitId: 'texas-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-02T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2021-05-02T21:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2021-indianapolis-gp',
    round: 5,
    name: 'GMR Grand Prix',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-05-14T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-14T20:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-05-15T18:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2021-indy500',
    round: 6,
    name: '105th Indianapolis 500',
    circuitId: 'indianapolis-motor-speedway-oval',
    sessions: [
      { type: 'practice', label: 'Practice - Opening Day', startUtc: '2021-05-18T15:00:00Z', durationMinutes: 360 },
      { type: 'qualifying', label: 'Qualifying - Day 1', startUtc: '2021-05-22T15:00:00Z', durationMinutes: 360 },
      { type: 'qualifying', label: 'Qualifying - Day 2', startUtc: '2021-05-23T15:00:00Z', durationMinutes: 300 },
      { type: 'race', label: 'Indianapolis 500', startUtc: '2021-05-30T16:20:00Z', durationMinutes: 200 },
    ],
  },
  {
    id: 'indycar-2021-detroit-1',
    round: 7,
    name: 'Chevrolet Detroit Grand Prix - Race 1',
    circuitId: 'belle-isle-street-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-06-11T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-11T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 1', startUtc: '2021-06-12T18:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2021-detroit-2',
    round: 8,
    name: 'Chevrolet Detroit Grand Prix - Race 2',
    circuitId: 'belle-isle-street-circuit',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-13T14:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race 2', startUtc: '2021-06-13T16:40:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2021-road-america',
    round: 9,
    name: 'REV Group Grand Prix at Road America',
    circuitId: 'road-america',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-06-18T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-19T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-06-20T15:40:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2021-mid-ohio',
    round: 10,
    name: 'Honda Indy 200 at Mid-Ohio',
    circuitId: 'mid-ohio-sports-car-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-07-02T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-03T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-07-04T16:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2021-nashville',
    round: 11,
    name: 'Big Machine Music City Grand Prix',
    circuitId: 'nashville-street-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-08-06T18:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-07T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-08-08T21:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2021-indianapolis-gp2',
    round: 12,
    name: 'Big Machine Spiked Coolers Grand Prix',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-08-13T16:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-13T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-08-14T16:45:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2021-wwtr',
    round: 13,
    name: 'Bommarito Automotive Group 500',
    circuitId: 'world-wide-technology-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-08-20T18:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-21T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-08-22T00:40:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2021-portland',
    round: 14,
    name: 'Grand Prix of Portland',
    circuitId: 'portland-international-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-09-10T19:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-11T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-09-12T19:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2021-laguna-seca',
    round: 15,
    name: 'Firestone Grand Prix of Monterey',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-09-17T19:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-18T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-09-19T16:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'indycar-2021-long-beach',
    round: 16,
    name: 'Acura Grand Prix of Long Beach',
    circuitId: 'streets-of-long-beach',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-09-24T22:00:00Z', durationMinutes: 75 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-25T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Race', startUtc: '2021-09-26T16:30:00Z', durationMinutes: 120 },
    ],
  },
]
