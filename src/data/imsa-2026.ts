import { RaceEvent } from '@/lib/types'

// IMSA WeatherTech SportsCar Championship 2026
// Source: imsa.com official schedule
export const imsa2026: RaceEvent[] = [
  {
    id: 'imsa-2026-daytona',
    round: 1,
    name: 'Rolex 24 At Daytona',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'practice', label: 'Roar Test', startUtc: '2026-01-15T14:00:00Z', durationMinutes: 480 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-01-22T21:15:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Rolex 24 At Daytona', startUtc: '2026-01-24T18:40:00Z', durationMinutes: 1440 },
    ],
  },
  {
    id: 'imsa-2026-sebring',
    round: 2,
    name: '12 Hours of Sebring',
    circuitId: 'sebring-international-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-03-19T15:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-20T16:00:00Z', durationMinutes: 60 },
      { type: 'endurance', label: '12 Hours of Sebring', startUtc: '2026-03-21T14:40:00Z', durationMinutes: 720 },
    ],
  },
  {
    id: 'imsa-2026-long-beach',
    round: 3,
    name: 'Grand Prix of Long Beach',
    circuitId: 'streets-of-long-beach',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-04-17T19:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-18T17:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2026-04-18T22:10:00Z', durationMinutes: 100 },
    ],
  },
  {
    id: 'imsa-2026-laguna-seca',
    round: 4,
    name: 'WeatherTech Raceway Laguna Seca',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-05-02T18:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-02T22:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2026-05-03T19:10:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2026-detroit',
    round: 5,
    name: 'Detroit Grand Prix',
    circuitId: 'streets-of-detroit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-05-29T15:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-29T21:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2026-05-30T18:10:00Z', durationMinutes: 100 },
    ],
  },
  {
    id: 'imsa-2026-watkins-glen',
    round: 6,
    name: '6 Hours at The Glen',
    circuitId: 'watkins-glen-international',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-06-26T14:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-27T16:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: '6 Hours at The Glen', startUtc: '2026-06-28T14:40:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'imsa-2026-ctmp',
    round: 7,
    name: 'Chevrolet Grand Prix at CTMP',
    circuitId: 'canadian-tire-motorsport-park',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-07-11T14:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-11T20:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2026-07-12T16:10:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2026-road-america',
    round: 8,
    name: 'Motul SportsCar Grand Prix',
    circuitId: 'road-america',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-07-29T15:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-29T20:30:00Z', durationMinutes: 30 },
      { type: 'endurance', label: '6 Hours of Road America', startUtc: '2026-07-30T15:40:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'imsa-2026-vir',
    round: 9,
    name: 'VIRginia International Raceway',
    circuitId: 'virginia-international-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-08-19T14:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-19T19:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2026-08-20T15:10:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2026-indianapolis',
    round: 10,
    name: 'Indianapolis Motor Speedway',
    circuitId: 'indianapolis-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-09-17T15:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-17T20:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2026-09-18T16:10:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2026-petit-le-mans',
    round: 11,
    name: 'Motul Petit Le Mans',
    circuitId: 'michelin-raceway-road-atlanta',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2026-10-01T14:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-02T16:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: 'Petit Le Mans 10h', startUtc: '2026-10-03T15:10:00Z', durationMinutes: 600 },
    ],
  },
]
