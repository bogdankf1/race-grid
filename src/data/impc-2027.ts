import { RaceEvent } from '@/lib/types'

// IMSA Michelin Pilot Challenge 2027 — 10 rounds (Laguna Seca dropped, Lime Rock Park returns).
// Source: imsa.com/michelinpilotchallenge/2027-schedule. Session times are NOT yet published — all sessions are shown as TBA with placeholder times based on the 2026 weekend.
export const impc2027: RaceEvent[] = [
  {
    id: 'impc-2027-daytona',
    round: 1,
    name: 'BMW M Endurance Challenge at Daytona',
    circuitId: 'daytona-international-speedway',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-01-27T20:00:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-01-28T13:45:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-01-28T18:15:00Z', durationMinutes: 35, tba: true },
      { type: 'endurance', label: 'BMW M Endurance Challenge', startUtc: '2027-01-29T18:45:00Z', durationMinutes: 240, tba: true },
    ],
  },
  {
    id: 'impc-2027-sebring',
    round: 2,
    name: 'Alan Jay Automotive Network 120',
    circuitId: 'sebring-international-raceway',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-03-17T15:25:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-03-18T12:00:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-03-18T18:10:00Z', durationMinutes: 35, tba: true },
      { type: 'race', label: 'Alan Jay Automotive Network 120', startUtc: '2027-03-19T18:00:00Z', durationMinutes: 120, tba: true },
    ],
  },
  {
    id: 'impc-2027-mid-ohio',
    round: 3,
    name: 'O\'Reilly Auto Parts 4 Hours of Mid-Ohio',
    circuitId: 'mid-ohio-sports-car-course',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-06-11T19:25:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-06-12T14:45:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-06-12T20:40:00Z', durationMinutes: 35, tba: true },
      { type: 'endurance', label: '4 Hours of Mid-Ohio', startUtc: '2027-06-13T16:15:00Z', durationMinutes: 240, tba: true },
    ],
  },
  {
    id: 'impc-2027-watkins-glen',
    round: 4,
    name: 'LP Building Solutions 120 At The Glen',
    circuitId: 'watkins-glen-international',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-06-24T18:55:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-06-25T13:15:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-06-25T21:10:00Z', durationMinutes: 35, tba: true },
      { type: 'race', label: 'LP Building Solutions 120', startUtc: '2027-06-26T17:05:00Z', durationMinutes: 120, tba: true },
    ],
  },
  {
    id: 'impc-2027-ctmp',
    round: 5,
    name: 'Canadian Tire Motorsport Park 120',
    circuitId: 'canadian-tire-motorsport-park',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-07-09T14:15:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-07-09T20:45:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-07-10T12:00:00Z', durationMinutes: 35, tba: true },
      { type: 'race', label: 'CTMP 120', startUtc: '2027-07-10T17:25:00Z', durationMinutes: 120, tba: true },
    ],
  },
  {
    id: 'impc-2027-road-america',
    round: 6,
    name: 'Road America 120',
    circuitId: 'road-america',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-08-05T18:15:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-08-06T13:20:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-08-06T18:55:00Z', durationMinutes: 35, tba: true },
      { type: 'race', label: 'Road America 120', startUtc: '2027-08-07T17:50:00Z', durationMinutes: 120, tba: true },
    ],
  },
  {
    id: 'impc-2027-vir',
    round: 7,
    name: 'Virginia Is For Racing Lovers Grand Prix',
    circuitId: 'virginia-international-raceway',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-08-20T14:40:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-08-20T21:30:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-08-21T12:00:00Z', durationMinutes: 35, tba: true },
      { type: 'race', label: 'VIR 120', startUtc: '2027-08-21T18:15:00Z', durationMinutes: 120, tba: true },
    ],
  },
  {
    id: 'impc-2027-indianapolis',
    round: 8,
    name: 'Indianapolis Motor Speedway 120',
    circuitId: 'indianapolis-motor-speedway',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-09-17T14:40:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-09-17T21:50:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-09-18T12:00:00Z', durationMinutes: 35, tba: true },
      { type: 'race', label: 'Indianapolis 120', startUtc: '2027-09-18T18:30:00Z', durationMinutes: 120, tba: true },
    ],
  },
  {
    id: 'impc-2027-lime-rock',
    round: 9,
    name: 'Lime Rock Park 120',
    circuitId: 'lime-rock-park',
    // Returns to the calendar (headline round, FCP Euro Northeast Grand Prix) — placeholder times follow the Road America weekend
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-09-23T18:15:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-09-24T13:20:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-09-24T18:55:00Z', durationMinutes: 35, tba: true },
      { type: 'race', label: 'Lime Rock Park 120', startUtc: '2027-09-25T17:50:00Z', durationMinutes: 120, tba: true },
    ],
  },
  {
    id: 'impc-2027-road-atlanta',
    round: 10,
    name: 'Fox Factory 120',
    circuitId: 'michelin-raceway-road-atlanta',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2027-10-06T16:25:00Z', durationMinutes: 60, tba: true },
      { type: 'practice', label: 'Practice 2', startUtc: '2027-10-07T12:35:00Z', durationMinutes: 60, tba: true },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2027-10-07T22:25:00Z', durationMinutes: 35, tba: true },
      { type: 'race', label: 'Fox Factory 120', startUtc: '2027-10-08T15:40:00Z', durationMinutes: 120, tba: true },
    ],
  },
]
