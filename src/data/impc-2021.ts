import { RaceEvent } from '@/lib/types'

// IMSA Michelin Pilot Challenge 2021
// Multi-class: GS (GT Sport, GT4 cars) + TCR (Touring Car Racing)
// Sources verified 2026-06-08:
//   - en.wikipedia.org/wiki/2021_Michelin_Pilot_Challenge
//   - imsa.com/michelinpilotchallenge/imsa-michelin-pilot-challenge-2021-schedule/
//   - racer.com / sportscar365.com per-round race recaps
// All session times in UTC. ET conversion: EST = UTC-5 (Jan, Nov 7+); EDT = UTC-4 (Mar 14 – Nov 7).
// CDT = UTC-5 (Road America); PDT = UTC-7 (Laguna Seca in September).
// 2021 had 10 rounds. Daytona (R1, 4H) and Watkins Glen 240 (R4, 4H) were endurance rounds.
// All others were 2-hour sprints. The originally scheduled Canadian Tire Motorsport Park
// round and the Laguna Seca April date were cancelled / rescheduled (Laguna moved to
// the September WeatherTech weekend). Session start times are estimates aligned to the
// IMSA weekend schedule pattern when not explicitly published.
export const impc2021: RaceEvent[] = [
  {
    id: 'impc-2021-daytona',
    round: 1,
    name: 'BMW Endurance Challenge at Daytona',
    circuitId: 'daytona-international-speedway',
    sessions: [
      // EST = UTC-5
      { type: 'practice', label: 'Practice 1', startUtc: '2021-01-28T17:30:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2021-01-28T21:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-01-29T15:15:00Z', durationMinutes: 30 },
      { type: 'endurance', label: 'BMW Endurance Challenge', startUtc: '2021-01-29T17:15:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'impc-2021-sebring',
    round: 2,
    name: 'Alan Jay Automotive Network 120',
    circuitId: 'sebring-international-raceway',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2021-03-17T17:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-03-18T13:35:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Alan Jay Automotive Network 120', startUtc: '2021-03-18T16:15:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2021-mid-ohio',
    round: 3,
    name: 'Mid-Ohio 120',
    circuitId: 'mid-ohio-sports-car-course',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2021-05-14T17:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-15T13:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Mid-Ohio 120', startUtc: '2021-05-15T19:05:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2021-watkins-glen-240',
    round: 4,
    name: 'Tioga Downs Casino Resort 240 at The Glen',
    circuitId: 'watkins-glen-international',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2021-06-25T17:35:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-26T13:45:00Z', durationMinutes: 30 },
      { type: 'endurance', label: 'Tioga Downs Casino Resort 240', startUtc: '2021-06-26T17:35:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'impc-2021-watkins-glen-120',
    round: 5,
    name: 'Watkins Glen International 120',
    circuitId: 'watkins-glen-international',
    sessions: [
      // EDT = UTC-4 — race confirmed 2:35 PM ET Friday
      { type: 'practice', label: 'Practice', startUtc: '2021-07-01T17:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-02T13:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Watkins Glen 120', startUtc: '2021-07-02T18:35:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2021-lime-rock',
    round: 6,
    name: 'Lime Rock Park 120',
    circuitId: 'lime-rock-park',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2021-07-16T17:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-17T13:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Lime Rock Park 120', startUtc: '2021-07-17T17:35:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2021-road-america',
    round: 7,
    name: 'Road America 120',
    circuitId: 'road-america',
    sessions: [
      // CDT = UTC-5
      { type: 'practice', label: 'Practice', startUtc: '2021-08-06T18:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-07T14:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Road America 120', startUtc: '2021-08-07T19:05:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2021-laguna-seca',
    round: 8,
    name: 'WeatherTech Raceway Laguna Seca 120',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      // PDT = UTC-7
      { type: 'practice', label: 'Practice', startUtc: '2021-09-10T18:35:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-11T15:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Laguna Seca 120', startUtc: '2021-09-11T19:35:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2021-vir',
    round: 9,
    name: 'Virginia is for Racing Lovers Grand Prix',
    circuitId: 'virginia-international-raceway',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2021-10-09T13:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-09T19:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'VIR Grand Prix', startUtc: '2021-10-10T17:10:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2021-road-atlanta',
    round: 10,
    name: 'Fox Factory 120',
    circuitId: 'michelin-raceway-road-atlanta',
    sessions: [
      // EST = UTC-5 (DST ended Nov 7, 2021)
      { type: 'practice', label: 'Practice', startUtc: '2021-11-11T16:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-11-12T14:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Fox Factory 120', startUtc: '2021-11-12T18:05:00Z', durationMinutes: 120 },
    ],
  },
]
