import { RaceEvent } from '@/lib/types'

// IMSA WeatherTech SportsCar Championship 2022
// Source: imsa.com, motorsport.com, Wikipedia
// DST 2022: starts Mar 13, ends Nov 6
// EST=UTC-5, EDT=UTC-4, CDT=UTC-5, PDT=UTC-7
export const imsa2022: RaceEvent[] = [
  {
    id: 'imsa-2022-daytona',
    round: 1,
    name: 'Rolex 24 At Daytona',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'practice', label: 'Roar Test', startUtc: '2022-01-21T14:00:00Z', durationMinutes: 480 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-01-23T19:05:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Rolex 24 At Daytona', startUtc: '2022-01-29T18:40:00Z', durationMinutes: 1440 },
    ],
  },
  {
    id: 'imsa-2022-sebring',
    round: 2,
    name: 'Mobil 1 Twelve Hours of Sebring',
    circuitId: 'sebring-international-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-03-17T15:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-03-18T16:50:00Z', durationMinutes: 60 },
      { type: 'endurance', label: '12 Hours of Sebring', startUtc: '2022-03-19T14:10:00Z', durationMinutes: 720 },
    ],
  },
  {
    id: 'imsa-2022-long-beach',
    round: 3,
    name: 'Acura Grand Prix of Long Beach',
    circuitId: 'streets-of-long-beach',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-04-08T19:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-09T17:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-04-09T21:05:00Z', durationMinutes: 100 },
    ],
  },
  {
    id: 'imsa-2022-laguna-seca',
    round: 4,
    name: 'Hyundai Monterey Sports Car Championship',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-04-30T18:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-30T22:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-05-01T22:10:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2022-mid-ohio',
    round: 5,
    name: 'Lexus Grand Prix at Mid-Ohio',
    circuitId: 'mid-ohio-sports-car-course',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-05-14T14:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-14T20:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-05-15T18:10:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2022-detroit',
    round: 6,
    name: 'Detroit Grand Prix',
    circuitId: 'belle-isle-street-circuit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-06-03T15:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-03T21:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-06-04T19:10:00Z', durationMinutes: 100 },
    ],
  },
  {
    id: 'imsa-2022-watkins-glen',
    round: 7,
    name: "Sahlen's Six Hours of The Glen",
    circuitId: 'watkins-glen-international',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-06-24T14:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-25T16:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: 'Six Hours of The Glen', startUtc: '2022-06-26T14:40:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'imsa-2022-ctmp',
    round: 8,
    name: 'Chevrolet Grand Prix at CTMP',
    circuitId: 'canadian-tire-motorsport-park',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-07-01T14:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-02T20:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-07-03T19:05:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2022-lime-rock',
    round: 9,
    name: 'FCP Euro Northeast Grand Prix',
    circuitId: 'lime-rock-park',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-07-15T14:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-15T19:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-07-16T15:05:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2022-road-america',
    round: 10,
    name: 'IMSA Fastlane SportsCar Weekend',
    circuitId: 'road-america',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-08-05T15:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-08-06T20:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-08-07T16:40:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2022-vir',
    round: 11,
    name: 'Michelin GT Challenge at VIR',
    circuitId: 'virginia-international-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-08-26T14:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-08-27T19:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-08-28T18:10:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2022-petit-le-mans',
    round: 12,
    name: 'Motul Petit Le Mans',
    circuitId: 'michelin-raceway-road-atlanta',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2022-09-29T14:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-30T16:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: 'Petit Le Mans 10h', startUtc: '2022-10-01T16:10:00Z', durationMinutes: 600 },
    ],
  },
]
