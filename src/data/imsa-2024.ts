import { RaceEvent } from '@/lib/types'

// IMSA WeatherTech SportsCar Championship 2024
// Source: imsa.com official 2024 schedule, Wikipedia
// All US events: ET(Jan-Mar9)=UTC-5, EDT(Mar10+)=UTC-4, CDT=UTC-5, PDT=UTC-7
// DST starts Mar 10 2024, ends Nov 3 2024
export const imsa2024: RaceEvent[] = [
  {
    id: 'imsa-2024-daytona',
    round: 1,
    name: 'Rolex 24 At Daytona',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'practice', label: 'Roar Test', startUtc: '2024-01-19T14:00:00Z', durationMinutes: 480 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-01-21T18:25:00Z', durationMinutes: 60 },
      { type: 'endurance', label: 'Rolex 24 At Daytona', startUtc: '2024-01-27T18:40:00Z', durationMinutes: 1440 },
    ],
  },
  {
    id: 'imsa-2024-sebring',
    round: 2,
    name: 'Mobil 1 Twelve Hours of Sebring',
    circuitId: 'sebring-international-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-03-14T15:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-15T16:50:00Z', durationMinutes: 60 },
      { type: 'endurance', label: '12 Hours of Sebring', startUtc: '2024-03-16T13:40:00Z', durationMinutes: 720 },
    ],
  },
  {
    id: 'imsa-2024-long-beach',
    round: 3,
    name: 'Acura Grand Prix of Long Beach',
    circuitId: 'streets-of-long-beach',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-04-19T19:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-20T17:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2024-04-20T20:35:00Z', durationMinutes: 100 },
    ],
  },
  {
    id: 'imsa-2024-laguna-seca',
    round: 4,
    name: 'Motul Course de Monterey',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-05-11T18:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-11T22:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2024-05-12T22:10:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2024-detroit',
    round: 5,
    name: 'Chevrolet Detroit Sports Car Classic',
    circuitId: 'streets-of-detroit',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-05-31T15:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-31T21:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2024-06-01T19:10:00Z', durationMinutes: 100 },
    ],
  },
  {
    id: 'imsa-2024-watkins-glen',
    round: 6,
    name: "Sahlen's Six Hours of The Glen",
    circuitId: 'watkins-glen-international',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-06-21T14:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-22T16:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: 'Six Hours of The Glen', startUtc: '2024-06-23T15:10:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'imsa-2024-ctmp',
    round: 7,
    name: 'Chevrolet Grand Prix at CTMP',
    circuitId: 'canadian-tire-motorsport-park',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-07-12T14:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-13T20:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2024-07-14T15:05:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2024-road-america',
    round: 8,
    name: 'IMSA SportsCar Weekend',
    circuitId: 'road-america',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-08-02T15:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-03T20:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2024-08-04T19:10:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2024-vir',
    round: 9,
    name: 'Michelin GT Challenge at VIR',
    circuitId: 'virginia-international-raceway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-08-23T14:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-24T19:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2024-08-25T16:10:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2024-indianapolis',
    round: 10,
    name: 'TireRack.com Battle on the Bricks',
    circuitId: 'indianapolis-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-09-20T15:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-21T20:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: 'Battle on the Bricks', startUtc: '2024-09-22T15:40:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'imsa-2024-petit-le-mans',
    round: 11,
    name: 'Motul Petit Le Mans',
    circuitId: 'michelin-raceway-road-atlanta',
    sessions: [
      { type: 'practice', label: 'Practice', startUtc: '2024-10-10T14:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-10-11T16:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: 'Petit Le Mans 10h', startUtc: '2024-10-12T16:10:00Z', durationMinutes: 600 },
    ],
  },
]
