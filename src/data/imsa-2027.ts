import { RaceEvent } from '@/lib/types'

// IMSA WeatherTech SportsCar Championship 2027 — 11 rounds (plus the Roar Before the Rolex 24 test, 22-24 Jan)
// Source: imsa.com/weathertech/2027-schedule (dates published; event timetables still "Placeholder" on imsa.com).
// Session times are NOT yet published — all sessions are shown as TBA with placeholder times based on the 2026 weekend.
export const imsa2027: RaceEvent[] = [
  {
    id: 'imsa-2027-daytona',
    round: 1,
    name: 'Rolex 24 At Daytona',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'practice', label: 'Roar Test', startUtc: '2027-01-22T16:00:00Z', durationMinutes: 480, tba: true },
      { type: 'practice', label: 'Practice 1', startUtc: '2027-01-28T15:05:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-01-28T19:10:00Z', durationMinutes: 75, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-01-28T23:15:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 3', startUtc: '2027-01-29T16:05:00Z', durationMinutes: 75, tba: true },
      { type: 'endurance', label: 'Rolex 24 At Daytona', startUtc: '2027-01-30T18:40:00Z', durationMinutes: 1440, tba: true },
    ],
  },
  {
    id: 'imsa-2027-sebring',
    round: 2,
    name: 'Mobil 1 Twelve Hours of Sebring',
    circuitId: 'sebring-international-raceway',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-03-18T14:05:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-03-18T20:00:00Z', durationMinutes: 105, tba: true },
      { type: 'practice', label: 'Practice 3', startUtc: '2027-03-18T23:45:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-03-19T15:25:00Z', durationMinutes: 75, tba: true },
      { type: 'endurance', label: '12 Hours of Sebring', startUtc: '2027-03-20T14:10:00Z', durationMinutes: 720, tba: true },
    ],
  },
  {
    id: 'imsa-2027-long-beach',
    round: 3,
    name: 'Acura Grand Prix of Long Beach',
    circuitId: 'streets-of-long-beach',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-04-16T16:00:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-04-16T20:10:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-04-17T00:25:00Z', durationMinutes: 35, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-04-17T20:05:00Z', durationMinutes: 100, tba: true },
    ],
  },
  {
    id: 'imsa-2027-laguna-seca',
    round: 4,
    name: 'WeatherTech Raceway Laguna Seca',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-04-30T22:20:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-05-01T16:55:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-05-01T22:15:00Z', durationMinutes: 55, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-05-02T20:10:00Z', durationMinutes: 160, tba: true },
    ],
  },
  {
    id: 'imsa-2027-detroit',
    round: 5,
    name: 'Chevrolet Detroit Grand Prix presented by Lear',
    circuitId: 'streets-of-detroit',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-06-04T12:00:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-06-04T15:30:00Z', durationMinutes: 120, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-06-04T20:50:00Z', durationMinutes: 35, tba: true },
      { type: 'practice', label: 'Practice 3', startUtc: '2027-06-05T15:10:00Z', durationMinutes: 20, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-06-05T20:10:00Z', durationMinutes: 100, tba: true },
    ],
  },
  {
    id: 'imsa-2027-watkins-glen',
    round: 6,
    name: 'Sahlen\'s Six Hours of The Glen',
    circuitId: 'watkins-glen-international',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-06-25T15:25:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-06-26T14:05:00Z', durationMinutes: 105, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-06-26T22:15:00Z', durationMinutes: 75, tba: true },
      { type: 'endurance', label: '6 Hours at The Glen', startUtc: '2027-06-27T16:10:00Z', durationMinutes: 360, tba: true },
    ],
  },
  {
    id: 'imsa-2027-ctmp',
    round: 7,
    name: 'Chevrolet Grand Prix at CTMP',
    circuitId: 'canadian-tire-motorsport-park',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-07-09T17:55:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-07-10T14:35:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-07-10T20:00:00Z', durationMinutes: 65, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-07-11T18:05:00Z', durationMinutes: 160, tba: true },
    ],
  },
  {
    id: 'imsa-2027-road-america',
    round: 8,
    name: 'Motul SportsCar Endurance Grand Prix',
    circuitId: 'road-america',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-08-06T16:25:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-08-07T14:50:00Z', durationMinutes: 105, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-08-07T20:25:00Z', durationMinutes: 75, tba: true },
      { type: 'endurance', label: '6 Hours of Road America', startUtc: '2027-08-08T15:40:00Z', durationMinutes: 360, tba: true },
    ],
  },
  {
    id: 'imsa-2027-vir',
    round: 9,
    name: 'Michelin GT Challenge at VIR',
    circuitId: 'virginia-international-raceway',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-08-20T19:10:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-08-21T14:30:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-08-21T20:50:00Z', durationMinutes: 35, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-08-22T16:10:00Z', durationMinutes: 160, tba: true },
    ],
  },
  {
    id: 'imsa-2027-indianapolis',
    round: 10,
    name: 'TireRack.com Battle on the Bricks',
    circuitId: 'indianapolis-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-09-17T19:25:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-09-18T14:45:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-09-18T21:05:00Z', durationMinutes: 75, tba: true },
      { type: 'race', label: 'Race', startUtc: '2027-09-19T19:10:00Z', durationMinutes: 160, tba: true },
    ],
  },
  {
    id: 'imsa-2027-petit-le-mans',
    round: 11,
    name: 'Motul Petit Le Mans',
    circuitId: 'michelin-raceway-road-atlanta',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-10-07T14:40:00Z', durationMinutes: 90, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-10-07T19:20:00Z', durationMinutes: 105, tba: true },
      { type: 'practice', label: 'Practice 3', startUtc: '2027-10-07T23:30:00Z', durationMinutes: 90, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-10-08T18:20:00Z', durationMinutes: 75, tba: true },
      { type: 'endurance', label: 'Petit Le Mans 10h', startUtc: '2027-10-09T16:10:00Z', durationMinutes: 600, tba: true },
    ],
  },
]
