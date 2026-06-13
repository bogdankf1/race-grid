import { RaceEvent } from '@/lib/types'

// IMSA Michelin Pilot Challenge 2026
// Multi-class: GS (GT Sport, GT4 cars) + TCR (Touring Car Racing)
// Sources verified 2026-06-08:
//   - en.wikipedia.org/wiki/2026_Michelin_Pilot_Challenge
//   - imsa.com/michelinpilotchallenge/imsa-michelin-pilot-challenge-2026-schedule/
//   - sportscar365.com/imsa/impc/ten-rounds-on-unchanged-2026-pilot-challenge-calendar/
//   - Per-event IMSA news pages and NBC Sports schedule pages
// All session times in UTC. ET conversion: EST = UTC-5 (Jan–early-Mar, Nov–Dec); EDT = UTC-4 (Mar 8 – Nov 1).
// Daytona and Mid-Ohio are 4-hour endurance rounds; the remaining 8 events are 2-hour sprint races.
export const impc2026: RaceEvent[] = [
  {
    id: 'impc-2026-daytona',
    round: 1,
    name: 'BMW M Endurance Challenge at Daytona',
    circuitId: 'daytona-international-speedway',
    sessions: [
      // EST = UTC-5
      { type: 'practice', label: 'Practice 1', startUtc: '2026-01-21T20:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-01-22T13:45:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-01-22T18:15:00Z', durationMinutes: 30 },
      { type: 'endurance', label: 'BMW M Endurance Challenge', startUtc: '2026-01-23T18:45:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'impc-2026-sebring',
    round: 2,
    name: 'Alan Jay Automotive Network 120',
    circuitId: 'sebring-international-raceway',
    sessions: [
      // EDT = UTC-4 (DST started Mar 8)
      { type: 'practice', label: 'Practice', startUtc: '2026-03-18T17:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-19T19:00:00Z', durationMinutes: 40 },
      { type: 'race', label: 'Alan Jay Automotive Network 120', startUtc: '2026-03-20T18:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2026-laguna-seca',
    round: 3,
    name: 'WeatherTech Raceway Laguna Seca 120',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice 1', startUtc: '2026-05-01T16:10:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-05-01T20:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-02T00:40:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Laguna Seca 120', startUtc: '2026-05-02T19:45:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2026-mid-ohio',
    round: 4,
    name: "O'Reilly Auto Parts 4 Hours of Mid-Ohio",
    circuitId: 'mid-ohio-sports-car-course',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2026-06-05T17:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-06T19:00:00Z', durationMinutes: 35 },
      { type: 'endurance', label: '4 Hours of Mid-Ohio', startUtc: '2026-06-07T16:15:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'impc-2026-watkins-glen',
    round: 5,
    name: 'LP Building Solutions 120 At The Glen',
    circuitId: 'watkins-glen-international',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2026-06-26T13:15:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-26T21:10:00Z', durationMinutes: 35 },
      { type: 'race', label: 'LP Building Solutions 120', startUtc: '2026-06-27T17:05:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2026-ctmp',
    round: 6,
    name: 'Canadian Tire Motorsport Park 120',
    circuitId: 'canadian-tire-motorsport-park',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2026-07-10T14:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-10T20:00:00Z', durationMinutes: 35 },
      { type: 'race', label: 'CTMP 120', startUtc: '2026-07-11T17:05:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2026-road-america',
    round: 7,
    name: 'Road America 120',
    circuitId: 'road-america',
    sessions: [
      // CDT = UTC-5
      { type: 'practice', label: 'Practice', startUtc: '2026-07-31T15:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-31T21:30:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Road America 120', startUtc: '2026-08-01T17:05:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2026-vir',
    round: 8,
    name: 'Virginia Is For Racing Lovers Grand Prix',
    circuitId: 'virginia-international-raceway',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2026-08-21T13:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-21T19:30:00Z', durationMinutes: 35 },
      { type: 'race', label: 'VIR 120', startUtc: '2026-08-22T17:10:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2026-indianapolis',
    round: 9,
    name: 'Indianapolis Motor Speedway 120',
    circuitId: 'indianapolis-motor-speedway',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2026-09-18T14:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-18T20:00:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Indianapolis 120', startUtc: '2026-09-19T17:10:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2026-road-atlanta',
    round: 10,
    name: 'Fox Factory 120',
    circuitId: 'michelin-raceway-road-atlanta',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2026-10-01T13:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-02T19:00:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Fox Factory 120', startUtc: '2026-10-03T17:05:00Z', durationMinutes: 120 },
    ],
  },
]
