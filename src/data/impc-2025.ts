import { RaceEvent } from '@/lib/types'

// IMSA Michelin Pilot Challenge 2025
// Multi-class: GS (GT Sport, GT4 cars) + TCR (Touring Car Racing)
// Sources verified 2026-06-08:
//   - en.wikipedia.org/wiki/2025_Michelin_Pilot_Challenge
//   - imsa.com/michelinpilotchallenge/ (2025 results, schedule and entry list notebooks)
//   - sportscar365.com IMPC archive 2025 (race reports, qualifying recaps)
//   - racer.com, frontstretch.com, dailysportscar.com per-event reports
// All session times in UTC. ET conversion: EST = UTC-5 (Jan–Mar 8, Nov–Dec); EDT = UTC-4 (Mar 9 – Nov 1).
// Daytona and Mid-Ohio are 4-hour endurance rounds; the remaining 8 events are 2-hour sprint races.
export const impc2025: RaceEvent[] = [
  {
    id: 'impc-2025-daytona',
    round: 1,
    name: 'BMW M Endurance Challenge at Daytona',
    circuitId: 'daytona-international-speedway',
    sessions: [
      // EST = UTC-5
      { type: 'practice', label: 'Practice 1', startUtc: '2025-01-22T20:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2025-01-23T13:45:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-01-23T18:15:00Z', durationMinutes: 30 },
      { type: 'endurance', label: 'BMW M Endurance Challenge', startUtc: '2025-01-24T18:45:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'impc-2025-sebring',
    round: 2,
    name: 'Alan Jay Automotive Network 120',
    circuitId: 'sebring-international-raceway',
    sessions: [
      // EDT = UTC-4 (DST started Mar 9)
      { type: 'practice', label: 'Practice', startUtc: '2025-03-13T17:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-03-13T22:00:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Alan Jay Automotive Network 120', startUtc: '2025-03-14T19:10:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2025-laguna-seca',
    round: 3,
    name: 'WeatherTech Raceway Laguna Seca 120',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      // PDT = UTC-7
      { type: 'practice', label: 'Practice 1', startUtc: '2025-05-09T16:10:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2025-05-09T20:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-10T00:40:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Laguna Seca 120', startUtc: '2025-05-10T19:45:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2025-mid-ohio',
    round: 4,
    name: "O'Reilly Auto Parts 4 Hours of Mid-Ohio",
    circuitId: 'mid-ohio-sports-car-course',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2025-06-06T17:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-06-07T13:30:00Z', durationMinutes: 35 },
      { type: 'endurance', label: '4 Hours of Mid-Ohio', startUtc: '2025-06-08T16:15:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'impc-2025-watkins-glen',
    round: 5,
    name: 'LP Building Solutions 120 At The Glen',
    circuitId: 'watkins-glen-international',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2025-06-20T13:15:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-06-20T21:10:00Z', durationMinutes: 35 },
      { type: 'race', label: 'LP Building Solutions 120', startUtc: '2025-06-21T17:05:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2025-ctmp',
    round: 6,
    name: 'Canadian Tire Motorsport Park 120',
    circuitId: 'canadian-tire-motorsport-park',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2025-07-11T14:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-11T20:00:00Z', durationMinutes: 35 },
      { type: 'race', label: 'CTMP 120', startUtc: '2025-07-12T17:05:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2025-road-america',
    round: 7,
    name: 'Road America 120',
    circuitId: 'road-america',
    sessions: [
      // CDT = UTC-5
      { type: 'practice', label: 'Practice', startUtc: '2025-08-01T15:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-01T22:55:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Road America 120', startUtc: '2025-08-02T17:05:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2025-vir',
    round: 8,
    name: 'Virginia Is For Racing Lovers Grand Prix',
    circuitId: 'virginia-international-raceway',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2025-08-22T13:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-22T19:30:00Z', durationMinutes: 35 },
      { type: 'race', label: 'VIR 120', startUtc: '2025-08-23T17:10:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2025-indianapolis',
    round: 9,
    name: 'Indianapolis Motor Speedway 120',
    circuitId: 'indianapolis-motor-speedway',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2025-09-19T14:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-09-19T20:00:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Indianapolis 120', startUtc: '2025-09-20T17:10:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2025-road-atlanta',
    round: 10,
    name: 'Fox Factory 120',
    circuitId: 'michelin-raceway-road-atlanta',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2025-10-09T13:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-10-09T19:00:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Fox Factory 120', startUtc: '2025-10-10T17:05:00Z', durationMinutes: 120 },
    ],
  },
]
