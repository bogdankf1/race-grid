import { RaceEvent } from '@/lib/types'

// IMSA WeatherTech SportsCar Championship 2026 — 11 rounds, no calendar changes during the season
// Source: imsa.com event pages ("Event Schedule", times listed in ET, converted to UTC)
// Race times are the green flag (IMSA lists the broadcast/grid window ~5 min earlier)
export const imsa2026: RaceEvent[] = [
  {
    id: 'imsa-2026-daytona',
    round: 1,
    name: 'Rolex 24 At Daytona',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'practice', label: 'Roar Test', startUtc: '2026-01-16T16:00:00Z', durationMinutes: 480 },
      { type: 'practice', label: 'Practice 1', startUtc: '2026-01-22T15:05:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-01-22T19:10:00Z', durationMinutes: 75 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-01-22T23:15:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 3', startUtc: '2026-01-23T16:05:00Z', durationMinutes: 75 },
      { type: 'endurance', label: 'Rolex 24 At Daytona', startUtc: '2026-01-24T18:40:00Z', durationMinutes: 1440 },
    ],
  },
  {
    id: 'imsa-2026-sebring',
    round: 2,
    name: 'Mobil 1 Twelve Hours of Sebring',
    circuitId: 'sebring-international-raceway',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-03-19T14:05:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-03-19T20:00:00Z', durationMinutes: 105 },
      { type: 'practice', label: 'Practice 3', startUtc: '2026-03-19T23:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-20T15:25:00Z', durationMinutes: 75 },
      { type: 'endurance', label: '12 Hours of Sebring', startUtc: '2026-03-21T14:10:00Z', durationMinutes: 720 },
    ],
  },
  {
    id: 'imsa-2026-long-beach',
    round: 3,
    name: 'Acura Grand Prix of Long Beach',
    circuitId: 'streets-of-long-beach',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-04-17T16:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-04-17T20:10:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-18T00:25:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2026-04-18T20:05:00Z', durationMinutes: 100 },
    ],
  },
  {
    id: 'imsa-2026-laguna-seca',
    round: 4,
    name: 'StubHub Monterey SportsCar Championship',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-05-01T22:20:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-05-02T16:55:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-02T22:15:00Z', durationMinutes: 55 },
      { type: 'race', label: 'Race', startUtc: '2026-05-03T20:10:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2026-detroit',
    round: 5,
    name: 'Chevrolet Detroit Sports Car Classic',
    circuitId: 'streets-of-detroit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-05-29T12:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-05-29T15:30:00Z', durationMinutes: 120 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-29T20:50:00Z', durationMinutes: 35 },
      { type: 'practice', label: 'Practice 3', startUtc: '2026-05-30T15:10:00Z', durationMinutes: 20 },
      { type: 'race', label: 'Race', startUtc: '2026-05-30T20:10:00Z', durationMinutes: 100 },
    ],
  },
  {
    id: 'imsa-2026-watkins-glen',
    round: 6,
    name: "Sahlen's Six Hours of The Glen",
    circuitId: 'watkins-glen-international',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-06-26T15:25:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-06-27T14:05:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-27T22:15:00Z', durationMinutes: 75 },
      { type: 'endurance', label: '6 Hours at The Glen', startUtc: '2026-06-28T16:10:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'imsa-2026-ctmp',
    round: 7,
    name: 'Chevrolet Grand Prix at CTMP',
    circuitId: 'canadian-tire-motorsport-park',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-07-10T17:55:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-07-11T14:35:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-11T20:00:00Z', durationMinutes: 65 },
      { type: 'race', label: 'Race', startUtc: '2026-07-12T18:05:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2026-road-america',
    round: 8,
    name: 'Motul SportsCar Endurance Grand Prix',
    circuitId: 'road-america',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-07-31T16:25:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-08-01T14:50:00Z', durationMinutes: 105 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-01T20:25:00Z', durationMinutes: 75 },
      { type: 'endurance', label: '6 Hours of Road America', startUtc: '2026-08-02T15:40:00Z', durationMinutes: 360 },
    ],
  },
  {
    id: 'imsa-2026-vir',
    round: 9,
    name: 'Michelin GT Challenge at VIR',
    circuitId: 'virginia-international-raceway',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-08-21T19:10:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-08-22T14:30:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-22T20:50:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Race', startUtc: '2026-08-23T16:10:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2026-indianapolis',
    round: 10,
    name: 'TireRack.com Battle on the Bricks',
    circuitId: 'indianapolis-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-09-18T19:25:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-09-19T14:45:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-19T21:05:00Z', durationMinutes: 75 },
      { type: 'race', label: 'Race', startUtc: '2026-09-20T19:10:00Z', durationMinutes: 160 },
    ],
  },
  {
    id: 'imsa-2026-petit-le-mans',
    round: 11,
    name: 'Motul Petit Le Mans',
    circuitId: 'michelin-raceway-road-atlanta',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-10-01T14:40:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-10-01T19:20:00Z', durationMinutes: 105 },
      { type: 'practice', label: 'Practice 3', startUtc: '2026-10-01T23:30:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-02T18:20:00Z', durationMinutes: 75 },
      { type: 'endurance', label: 'Petit Le Mans 10h', startUtc: '2026-10-03T16:10:00Z', durationMinutes: 600 },
    ],
  },
]
