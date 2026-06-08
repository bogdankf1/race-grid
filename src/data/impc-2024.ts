import { RaceEvent } from '@/lib/types'

// IMSA Michelin Pilot Challenge 2024
// Multi-class: GS (GT Sport, GT4 cars) + TCR (Touring Car Racing)
// Sources verified 2026-06-08:
//   - en.wikipedia.org/wiki/2024_Michelin_Pilot_Challenge
//   - imsa.com/michelinpilotchallenge/imsa-michelin-pilot-challenge-2024-schedule/
//   - racer.com / sportscar365.com / dailysportscar.com per-event reports
//   - imsa.com news pages for qualifying and race recaps
// All session times in UTC. ET conversion: EST = UTC-5 (Jan–early-Mar, Nov–Dec); EDT = UTC-4 (Mar 10 – Nov 3, 2024).
// Daytona and Mid-Ohio are 4-hour endurance rounds; the remaining 8 events are 2-hour sprint races.
// Times were approximated from official IMSA schedules where exact minute-by-minute timetables are not archived.
export const impc2024: RaceEvent[] = [
  {
    id: 'impc-2024-daytona',
    round: 1,
    name: 'BMW M Endurance Challenge at Daytona',
    circuitId: 'daytona-international-speedway-road-course',
    sessions: [
      // EST = UTC-5
      { type: 'practice', label: 'Practice 1', startUtc: '2024-01-24T20:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2024-01-25T14:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-01-25T18:15:00Z', durationMinutes: 30 },
      { type: 'endurance', label: 'BMW M Endurance Challenge', startUtc: '2024-01-26T17:45:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'impc-2024-sebring',
    round: 2,
    name: 'Alan Jay Automotive Network 120',
    circuitId: 'sebring-international-raceway',
    sessions: [
      // EDT = UTC-4 (DST started Mar 10)
      { type: 'practice', label: 'Practice', startUtc: '2024-03-14T17:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-14T22:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Alan Jay Automotive Network 120', startUtc: '2024-03-15T17:05:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2024-laguna-seca',
    round: 3,
    name: 'WeatherTech Raceway Laguna Seca 120',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      // PDT = UTC-7
      { type: 'practice', label: 'Practice 1', startUtc: '2024-05-10T16:10:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2024-05-10T20:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-11T00:40:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Laguna Seca 120', startUtc: '2024-05-11T19:45:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2024-mid-ohio',
    round: 4,
    name: "O'Reilly Auto Parts 4 Hours of Mid-Ohio",
    circuitId: 'mid-ohio-sports-car-course',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2024-06-07T17:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-08T19:00:00Z', durationMinutes: 35 },
      { type: 'endurance', label: '4 Hours of Mid-Ohio', startUtc: '2024-06-09T16:15:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'impc-2024-watkins-glen',
    round: 5,
    name: 'The Esses 120',
    circuitId: 'watkins-glen-international',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2024-06-21T13:15:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-21T21:10:00Z', durationMinutes: 30 },
      { type: 'race', label: 'The Esses 120', startUtc: '2024-06-22T17:05:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2024-ctmp',
    round: 6,
    name: 'Canadian Tire Motorsport Park 120',
    circuitId: 'canadian-tire-motorsport-park',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2024-07-12T14:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-12T20:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'CTMP 120', startUtc: '2024-07-13T17:05:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2024-road-america',
    round: 7,
    name: 'Road America 120',
    circuitId: 'road-america',
    sessions: [
      // CDT = UTC-5
      { type: 'practice', label: 'Practice', startUtc: '2024-08-02T15:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-02T21:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Road America 120', startUtc: '2024-08-03T17:05:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2024-vir',
    round: 8,
    name: 'Virginia Is For Racing Lovers Grand Prix',
    circuitId: 'virginia-international-raceway',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2024-08-23T13:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-23T19:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'VIR 120', startUtc: '2024-08-24T17:10:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2024-indianapolis',
    round: 9,
    name: 'Indianapolis Motor Speedway 120',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2024-09-20T14:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-20T20:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Indianapolis 120', startUtc: '2024-09-21T17:10:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2024-road-atlanta',
    round: 10,
    name: 'Fox Factory 120',
    circuitId: 'michelin-raceway-road-atlanta',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2024-10-10T13:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-10-11T19:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Fox Factory 120', startUtc: '2024-10-11T17:05:00Z', durationMinutes: 120 },
    ],
  },
]
