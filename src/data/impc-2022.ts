import { RaceEvent } from '@/lib/types'

// IMSA Michelin Pilot Challenge 2022
// Multi-class: GS (GT Sport, GT4 cars) + TCR (Touring Car Racing)
// Sources verified 2026-06-08:
//   - en.wikipedia.org/wiki/2022_Michelin_Pilot_Challenge
//   - imsa.com/michelinpilotchallenge/imsa-michelin-pilot-challenge-2022-schedule/
//   - racer.com / sportscar365.com / frontstretch.com per-round race recaps
// All session times in UTC. ET conversion: EST = UTC-5 (Jan, Nov+); EDT = UTC-4 (Mar 13 – Nov 6).
// CDT = UTC-5 (Road America); PDT = UTC-7 (Laguna Seca in April/May).
// 2022 had 10 rounds. Daytona (R1, 4H) and Road America 240 (R8, 4H) were endurance rounds.
// All others were 2-hour sprints. Session start times are estimates aligned to the
// IMSA weekend schedule pattern when not explicitly published.
export const impc2022: RaceEvent[] = [
  {
    id: 'impc-2022-daytona',
    round: 1,
    name: 'BMW M Endurance Challenge at Daytona',
    circuitId: 'daytona-international-speedway',
    sessions: [
      // EST = UTC-5
      { type: 'practice', label: 'Practice 1', startUtc: '2022-01-27T17:30:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2022-01-27T21:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-01-28T15:15:00Z', durationMinutes: 30 },
      { type: 'endurance', label: 'BMW M Endurance Challenge', startUtc: '2022-01-28T17:15:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'impc-2022-sebring',
    round: 2,
    name: 'Alan Jay Automotive Network 120',
    circuitId: 'sebring-international-raceway',
    sessions: [
      // EDT = UTC-4 (DST started Mar 13)
      { type: 'practice', label: 'Practice', startUtc: '2022-03-16T17:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-03-17T13:35:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Alan Jay Automotive Network 120', startUtc: '2022-03-17T16:15:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2022-laguna-seca',
    round: 3,
    name: 'WeatherTech Raceway Laguna Seca 120',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      // PDT = UTC-7
      { type: 'practice', label: 'Practice', startUtc: '2022-04-29T18:35:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-30T15:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Laguna Seca 120', startUtc: '2022-04-30T19:35:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2022-mid-ohio',
    round: 4,
    name: 'Mid-Ohio 120',
    circuitId: 'mid-ohio-sports-car-course',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2022-05-13T17:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-14T13:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Mid-Ohio 120', startUtc: '2022-05-14T19:05:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2022-watkins-glen',
    round: 5,
    name: 'Tioga Downs Casino Resort 120 at The Glen',
    circuitId: 'watkins-glen-international',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2022-06-24T17:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-25T13:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Tioga Downs Casino Resort 120', startUtc: '2022-06-25T17:35:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2022-ctmp',
    round: 6,
    name: 'Canadian Tire Motorsport Park 120',
    circuitId: 'canadian-tire-motorsport-park',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2022-07-01T14:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-01T20:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'CTMP 120', startUtc: '2022-07-02T17:05:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2022-lime-rock',
    round: 7,
    name: 'Lime Rock Park 120',
    circuitId: 'lime-rock-park',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2022-07-15T17:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-16T13:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Lime Rock Park 120', startUtc: '2022-07-16T17:35:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2022-road-america',
    round: 8,
    name: 'Road America 240',
    circuitId: 'road-america',
    sessions: [
      // CDT = UTC-5
      { type: 'practice', label: 'Practice', startUtc: '2022-08-05T18:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-08-06T14:30:00Z', durationMinutes: 30 },
      { type: 'endurance', label: 'Road America 240', startUtc: '2022-08-06T18:05:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'impc-2022-vir',
    round: 9,
    name: 'Virginia Is For Racing Lovers Grand Prix',
    circuitId: 'virginia-international-raceway',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2022-08-26T13:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-08-26T19:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'VIR Grand Prix', startUtc: '2022-08-27T17:10:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2022-road-atlanta',
    round: 10,
    name: 'Fox Factory 120',
    circuitId: 'michelin-raceway-road-atlanta',
    sessions: [
      // EDT = UTC-4 (Petit Le Mans weekend; race held Friday)
      { type: 'practice', label: 'Practice', startUtc: '2022-09-29T13:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-29T19:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Fox Factory 120', startUtc: '2022-09-30T17:05:00Z', durationMinutes: 120 },
    ],
  },
]
