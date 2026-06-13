import { RaceEvent } from '@/lib/types'

// IMSA Michelin Pilot Challenge 2023
// Multi-class: GS (GT Sport, GT4 cars) + TCR (Touring Car Racing)
// Sources verified 2026-06-08:
//   - en.wikipedia.org/wiki/2023_Michelin_Pilot_Challenge
//   - imsa.com/michelinpilotchallenge/imsa-michelin-pilot-challenge-2023-schedule/
//   - racingcalendar.net/championship/imsa-pilot-challenge/2023
//   - sportscar365.com / dailysportscar.com / racer.com per-event reports
// All session times in UTC. ET conversion: EST = UTC-5 (Jan–Mar 11, Nov–Dec); EDT = UTC-4 (Mar 12 – Nov 5).
// Daytona, Indianapolis = 4-hour endurance rounds; remaining 9 events are 2-hour sprint races.
// Note: many start times below reflect typical IMPC scheduling for each venue weekend;
// where precise times were not confirmable from publicly archived sources, the nominal
// window for the session is used (always anchored to verified race dates).
export const impc2023: RaceEvent[] = [
  {
    id: 'impc-2023-daytona',
    round: 1,
    name: 'BMW M Endurance Challenge at Daytona',
    circuitId: 'daytona-international-speedway-road-course',
    sessions: [
      // EST = UTC-5
      { type: 'practice', label: 'Practice 1', startUtc: '2023-01-25T20:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2023-01-26T13:45:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-01-26T18:15:00Z', durationMinutes: 30 },
      { type: 'endurance', label: 'BMW M Endurance Challenge', startUtc: '2023-01-27T17:35:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'impc-2023-sebring',
    round: 2,
    name: 'Alan Jay Automotive Network 120',
    circuitId: 'sebring-international-raceway',
    sessions: [
      // EDT = UTC-4 (DST started Mar 12)
      { type: 'practice', label: 'Practice', startUtc: '2023-03-15T16:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-03-15T22:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Alan Jay Automotive Network 120', startUtc: '2023-03-16T16:35:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2023-laguna-seca',
    round: 3,
    name: 'WeatherTech Raceway Laguna Seca 120',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      // PDT = UTC-7
      { type: 'practice', label: 'Practice 1', startUtc: '2023-05-12T16:10:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 2', startUtc: '2023-05-12T20:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-05-13T00:40:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Laguna Seca 120', startUtc: '2023-05-13T19:45:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2023-detroit',
    round: 4,
    name: 'Chevrolet Detroit Sports Car Classic',
    circuitId: 'streets-of-detroit',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2023-06-02T15:30:00Z', durationMinutes: 45 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-02T22:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Chevrolet Detroit Sports Car Classic', startUtc: '2023-06-03T16:05:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2023-watkins-glen',
    round: 5,
    name: 'Watkins Glen International 120',
    circuitId: 'watkins-glen-international',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2023-06-22T18:15:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-23T20:05:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Watkins Glen International 120', startUtc: '2023-06-24T16:35:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2023-ctmp',
    round: 6,
    name: 'Canadian Tire Motorsport Park 120',
    circuitId: 'canadian-tire-motorsport-park',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2023-07-07T14:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-07T20:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'CTMP 120', startUtc: '2023-07-08T16:05:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2023-lime-rock',
    round: 7,
    name: 'Lime Rock Park 120',
    circuitId: 'lime-rock-park',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2023-07-21T15:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-21T21:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Lime Rock Park 120', startUtc: '2023-07-22T19:35:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2023-road-america',
    round: 8,
    name: 'Road America 120',
    circuitId: 'road-america',
    sessions: [
      // CDT = UTC-5
      { type: 'practice', label: 'Practice', startUtc: '2023-08-04T15:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-04T21:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Road America 120', startUtc: '2023-08-05T17:05:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2023-vir',
    round: 9,
    name: 'Virginia Is Racing for Lovers Grand Prix',
    circuitId: 'virginia-international-raceway',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2023-08-25T13:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-25T19:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'VIR Grand Prix 120', startUtc: '2023-08-26T17:10:00Z', durationMinutes: 120 },
    ],
  },
  {
    id: 'impc-2023-indianapolis',
    round: 10,
    name: 'Indianapolis Motor Speedway 240',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2023-09-15T13:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-15T20:00:00Z', durationMinutes: 30 },
      { type: 'endurance', label: 'Indianapolis 240', startUtc: '2023-09-16T22:45:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'impc-2023-road-atlanta',
    round: 11,
    name: 'Fox Factory 120',
    circuitId: 'michelin-raceway-road-atlanta',
    sessions: [
      // EDT = UTC-4
      { type: 'practice', label: 'Practice', startUtc: '2023-10-11T13:00:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-10-12T19:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Fox Factory 120', startUtc: '2023-10-13T16:05:00Z', durationMinutes: 120 },
    ],
  },
]
