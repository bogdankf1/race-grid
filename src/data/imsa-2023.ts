import { RaceEvent } from '@/lib/types'

// IMSA WeatherTech SportsCar Championship 2023
// Source: imsa.com, motorsport.com, Wikipedia
// DST 2023: starts Mar 12, ends Nov 5
// EST=UTC-5, EDT=UTC-4, CDT=UTC-5, PDT=UTC-7
export const imsa2023: RaceEvent[] = [
  {
    id: 'imsa-2023-daytona',
    round: 1,
    name: 'Rolex 24 At Daytona',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'practice', label: 'Roar Test', startUtc: '2023-01-20T14:00:00Z', durationMinutes: 480 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-01-22T18:25:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Rolex 24 At Daytona', startUtc: '2023-01-28T18:40:00Z', durationMinutes: 1440 },
    ],
  },
  {
    id: 'imsa-2023-sebring',
    round: 2,
    name: 'Mobil 1 Twelve Hours of Sebring',
    circuitId: 'sebring-international-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-03-16T15:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-03-17T16:50:00Z', durationMinutes: 60 },
      { type: 'endurance', label: '12 Hours of Sebring', startUtc: '2023-03-18T14:10:00Z', durationMinutes: 720 },
    ],
  },
  {
    id: 'imsa-2023-long-beach',
    round: 3,
    name: 'Acura Grand Prix of Long Beach',
    circuitId: 'streets-of-long-beach',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-04-14T19:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-15T17:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2023-04-15T21:05:00Z', durationMinutes: 100 },
    ],
  },
  {
    id: 'imsa-2023-laguna-seca',
    round: 4,
    name: 'Motul Course de Monterey',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-05-13T18:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-05-13T22:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2023-05-14T19:10:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2023-watkins-glen',
    round: 5,
    name: "Sahlen's Six Hours of The Glen",
    circuitId: 'watkins-glen-international',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-06-23T14:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-24T16:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: 'Six Hours of The Glen', startUtc: '2023-06-25T14:40:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'imsa-2023-ctmp',
    round: 6,
    name: 'Chevrolet Grand Prix at CTMP',
    circuitId: 'canadian-tire-motorsport-park',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-07-07T14:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-08T20:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2023-07-09T16:05:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2023-lime-rock',
    round: 7,
    name: 'FCP Euro Northeast Grand Prix',
    circuitId: 'lime-rock-park',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-07-21T14:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-21T19:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2023-07-22T16:10:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2023-road-america',
    round: 8,
    name: 'IMSA SportsCar Weekend',
    circuitId: 'road-america',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-08-04T15:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-05T20:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2023-08-06T16:10:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2023-vir',
    round: 9,
    name: 'Michelin GT Challenge at VIR',
    circuitId: 'virginia-international-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-08-25T14:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-26T19:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2023-08-27T18:10:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2023-indianapolis',
    round: 10,
    name: 'Battle on the Bricks',
    circuitId: 'indianapolis-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-09-15T15:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-16T20:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2023-09-17T17:10:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2023-petit-le-mans',
    round: 11,
    name: 'Motul Petit Le Mans',
    circuitId: 'michelin-raceway-road-atlanta',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2023-10-12T14:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-10-13T16:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: 'Petit Le Mans 10h', startUtc: '2023-10-14T15:40:00Z', durationMinutes: 600 },
    ],
  },
]
