import { RaceEvent } from '@/lib/types'

// IMSA WeatherTech SportsCar Championship 2021
// Source: imsa.com, motorsport.com, Wikipedia
// DST 2021: starts Mar 14, ends Nov 7
// EST=UTC-5, EDT=UTC-4, CDT=UTC-5, PDT=UTC-7
export const imsa2021: RaceEvent[] = [
  {
    id: 'imsa-2021-daytona',
    round: 1,
    name: 'Rolex 24 At Daytona',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'practice', label: 'Roar Test', startUtc: '2021-01-22T14:00:00Z', durationMinutes: 480 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-01-24T19:05:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Rolex 24 At Daytona', startUtc: '2021-01-30T20:40:00Z', durationMinutes: 1440 },
    ],
  },
  {
    id: 'imsa-2021-sebring',
    round: 2,
    name: 'Mobil 1 Twelve Hours of Sebring',
    circuitId: 'sebring-international-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-03-18T15:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-03-19T16:50:00Z', durationMinutes: 60 },
      { type: 'endurance', label: '12 Hours of Sebring', startUtc: '2021-03-20T14:10:00Z', durationMinutes: 720 },
    ],
  },
  {
    id: 'imsa-2021-mid-ohio',
    round: 3,
    name: 'Acura Sports Car Challenge',
    circuitId: 'mid-ohio-sports-car-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-05-15T14:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-15T20:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-05-16T19:00:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2021-detroit',
    round: 4,
    name: 'Detroit Grand Prix',
    circuitId: 'belle-isle-street-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-06-11T15:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-11T21:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-06-12T21:10:00Z', durationMinutes: 100 },
    ],
  },
  {
    id: 'imsa-2021-watkins-glen-6h',
    round: 5,
    name: "Sahlen's Six Hours of The Glen",
    circuitId: 'watkins-glen-international',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-06-25T14:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-26T16:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: 'Six Hours of The Glen', startUtc: '2021-06-27T14:40:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'imsa-2021-watkins-glen-240',
    round: 6,
    name: 'WeatherTech 240 at The Glen',
    circuitId: 'watkins-glen-international',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-07-01T14:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-01T20:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-07-02T22:10:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2021-lime-rock',
    round: 7,
    name: 'Northeast Grand Prix',
    circuitId: 'lime-rock-park',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-07-16T14:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-16T19:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-07-17T19:10:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2021-road-america',
    round: 8,
    name: 'IMSA SportsCar Weekend',
    circuitId: 'road-america',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-08-06T15:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-07T20:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-08-08T19:40:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2021-laguna-seca',
    round: 9,
    name: 'Hyundai Monterey Sports Car Championship',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-09-11T18:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-11T22:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-09-12T23:10:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2021-long-beach',
    round: 10,
    name: 'Acura Grand Prix of Long Beach',
    circuitId: 'streets-of-long-beach',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-09-24T19:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-25T17:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-09-25T21:05:00Z', durationMinutes: 100 },
    ],
  },
  {
    id: 'imsa-2021-vir',
    round: 11,
    name: 'Michelin GT Challenge at VIR',
    circuitId: 'virginia-international-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-10-08T14:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-08T19:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2021-10-09T16:10:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2021-petit-le-mans',
    round: 12,
    name: 'Motul Petit Le Mans',
    circuitId: 'michelin-raceway-road-atlanta',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2021-11-11T14:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-11-12T16:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: 'Petit Le Mans 10h', startUtc: '2021-11-13T17:10:00Z', durationMinutes: 600 },
    ],
  },
]
