import { RaceEvent } from '@/lib/types'

// IMSA WeatherTech SportsCar Championship 2025
// Source: imsa.com official 2025 schedule
export const imsa2025: RaceEvent[] = [
  {
    id: 'imsa-2025-daytona',
    round: 1,
    name: 'Rolex 24 At Daytona',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'practice', label: 'Roar Test', startUtc: '2025-01-17T14:00:00Z', durationMinutes: 480 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-01-23T19:05:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Rolex 24 At Daytona', startUtc: '2025-01-25T18:40:00Z', durationMinutes: 1440 },
    ],
  },
  {
    id: 'imsa-2025-sebring',
    round: 2,
    name: '12 Hours of Sebring',
    circuitId: 'sebring-international-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-03-13T15:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-03-14T16:00:00Z', durationMinutes: 60 },
      { type: 'endurance', label: '12 Hours of Sebring', startUtc: '2025-03-15T15:10:00Z', durationMinutes: 720 },
    ],
  },
  {
    id: 'imsa-2025-long-beach',
    round: 3,
    name: 'Acura Grand Prix of Long Beach',
    circuitId: 'streets-of-long-beach',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-04-11T19:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-04-12T17:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2025-04-12T22:00:00Z', durationMinutes: 100 },
    ],
  },
  {
    id: 'imsa-2025-laguna-seca',
    round: 4,
    name: 'Monterey SportsCar Championship',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-05-10T18:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-10T22:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2025-05-11T19:10:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2025-detroit',
    round: 5,
    name: 'Chevrolet Detroit Sports Car Classic',
    circuitId: 'streets-of-detroit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-05-30T15:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-30T21:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2025-05-31T18:10:00Z', durationMinutes: 100 },
    ],
  },
  {
    id: 'imsa-2025-watkins-glen',
    round: 6,
    name: "Sahlen's Six Hours of The Glen",
    circuitId: 'watkins-glen-international',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-06-20T14:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-06-21T16:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: 'Six Hours of The Glen', startUtc: '2025-06-22T16:10:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'imsa-2025-ctmp',
    round: 7,
    name: 'Chevrolet Grand Prix at CTMP',
    circuitId: 'canadian-tire-motorsport-park',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-07-11T14:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-12T20:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2025-07-13T18:05:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2025-road-america',
    round: 8,
    name: 'SportsCar Grand Prix',
    circuitId: 'road-america',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-08-01T15:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-02T20:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2025-08-03T18:10:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2025-vir',
    round: 9,
    name: 'Virginia Is For Racing Lovers Grand Prix',
    circuitId: 'virginia-international-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-08-22T14:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-23T19:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2025-08-24T18:20:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2025-indianapolis',
    round: 10,
    name: 'Battle on the Bricks',
    circuitId: 'indianapolis-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-09-19T15:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-09-20T20:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: 'Battle on the Bricks', startUtc: '2025-09-21T15:40:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'imsa-2025-petit-le-mans',
    round: 11,
    name: 'Motul Petit Le Mans',
    circuitId: 'michelin-raceway-road-atlanta',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2025-10-09T14:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-10-10T16:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: 'Petit Le Mans 10h', startUtc: '2025-10-11T16:10:00Z', durationMinutes: 600 },
    ],
  },
]
