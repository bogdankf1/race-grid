import { RaceEvent } from '@/lib/types'

// IMSA Michelin Pilot Challenge 2026
// Multi-class: GS (GT Sport, GT4 cars) + TCR (Touring Car Racing)
// Re-verified Oct 2026 against imsa.com per-event "Event Schedule" (ET converted to UTC). Earlier sources:
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
      { type: 'practice', label: 'Practice 1', startUtc: '2026-01-21T20:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-01-22T13:45:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-01-22T18:15:00Z', durationMinutes: 35 },
      { type: 'endurance', label: 'BMW M Endurance Challenge', startUtc: '2026-01-23T18:45:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'impc-2026-sebring',
    round: 2,
    name: 'Alan Jay Automotive Network 120',
    circuitId: 'sebring-international-raceway',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-03-18T15:25:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-03-19T12:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-19T18:10:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Alan Jay Automotive Network 120', startUtc: '2026-03-20T18:00:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2026-laguna-seca',
    round: 3,
    name: 'WeatherTech Raceway Laguna Seca 120',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
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
      { type: 'practice', label: 'Practice 1', startUtc: '2026-06-05T19:25:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-06-06T14:45:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-06T20:40:00Z', durationMinutes: 35 },
      { type: 'endurance', label: '4 Hours of Mid-Ohio', startUtc: '2026-06-07T16:15:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'impc-2026-watkins-glen',
    round: 5,
    name: 'LP Building Solutions 120 At The Glen',
    circuitId: 'watkins-glen-international',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-06-25T18:55:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-06-26T13:15:00Z', durationMinutes: 60 },
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
      { type: 'practice', label: 'Practice 1', startUtc: '2026-07-10T14:15:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-07-10T20:45:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-11T12:00:00Z', durationMinutes: 35 },
      { type: 'race', label: 'CTMP 120', startUtc: '2026-07-11T17:25:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2026-road-america',
    round: 7,
    name: 'Road America 120',
    circuitId: 'road-america',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-07-30T18:15:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-07-31T13:20:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-31T18:55:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Road America 120', startUtc: '2026-08-01T17:50:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2026-vir',
    round: 8,
    name: 'Virginia Is For Racing Lovers Grand Prix',
    circuitId: 'virginia-international-raceway',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-08-21T14:40:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-08-21T21:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-22T12:00:00Z', durationMinutes: 35 },
      { type: 'race', label: 'VIR 120', startUtc: '2026-08-22T18:15:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2026-indianapolis',
    round: 9,
    name: 'Indianapolis Motor Speedway 120',
    circuitId: 'indianapolis-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-09-18T14:40:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-09-18T21:50:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-19T12:00:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Indianapolis 120', startUtc: '2026-09-19T18:30:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2026-road-atlanta',
    round: 10,
    name: 'Fox Factory 120',
    circuitId: 'michelin-raceway-road-atlanta',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-09-30T16:25:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-10-01T12:35:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-01T22:25:00Z', durationMinutes: 35 },
      { type: 'race', label: 'Fox Factory 120', startUtc: '2026-10-02T15:40:00Z', durationMinutes: 120 },
    ],
  },
]
