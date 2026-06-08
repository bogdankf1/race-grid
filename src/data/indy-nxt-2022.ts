import { RaceEvent } from '@/lib/types'

// Indy Lights presented by Cooper Tires 2022 calendar — 14 races at 11 meetings
// (first year of IndyCar/Penske Entertainment ownership; series rebranded as
// Indy NXT for 2023).
// Source: Wikipedia "2022 Indy Lights", indycar.com archives, motorsport.com/indylights/schedule/2022.
// Verified 2026-06-07.
// Times converted from ET to UTC (EST = UTC-5 to Mar 12; EDT = UTC-4 from Mar 13 to Nov 5).
// Session start times reflect documented IndyCar weekend timetables; where only the date
// was reliably published the time is a best-effort approximation aligned with the support window.
// Champion: Linus Lundqvist (HMD Motorsports/Dale Coyne Racing) — 7 wins.
export const indyNxt2022: RaceEvent[] = [
  {
    id: 'indy-nxt-2022-st-petersburg',
    round: 1,
    name: 'Indy Lights Grand Prix of St. Petersburg',
    circuitId: 'streets-of-st-petersburg',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-02-26T18:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-02-27T16:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2022-barber',
    round: 2,
    name: 'Indy Lights Grand Prix of Alabama',
    circuitId: 'barber-motorsports-park',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-30T16:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-05-01T15:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2022-indianapolis-gp-1',
    round: 3,
    name: 'Indy Lights Grand Prix of Indianapolis — Race 1',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-13T13:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2022-05-13T19:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2022-indianapolis-gp-2',
    round: 4,
    name: 'Indy Lights Grand Prix of Indianapolis — Race 2',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      { type: 'race', label: 'Race 2', startUtc: '2022-05-14T15:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2022-detroit-1',
    round: 5,
    name: 'Indy Lights Detroit Grand Prix — Race 1',
    circuitId: 'belle-isle-street-circuit',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-03T13:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2022-06-04T13:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2022-detroit-2',
    round: 6,
    name: 'Indy Lights Detroit Grand Prix — Race 2',
    circuitId: 'belle-isle-street-circuit',
    sessions: [
      { type: 'race', label: 'Race 2', startUtc: '2022-06-05T13:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2022-road-america',
    round: 7,
    name: 'Indy Lights Grand Prix at Road America',
    circuitId: 'road-america',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-11T15:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-06-12T15:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2022-mid-ohio',
    round: 8,
    name: 'Indy Lights Grand Prix at Mid-Ohio',
    circuitId: 'mid-ohio-sports-car-course',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-02T15:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-07-03T15:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2022-iowa',
    round: 9,
    name: 'Indy Lights at Iowa Speedway',
    circuitId: 'iowa-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-22T22:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-07-23T16:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2022-nashville',
    round: 10,
    name: 'Indy Lights Music City Grand Prix',
    circuitId: 'nashville-street-circuit',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-08-06T15:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-08-07T16:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2022-gateway',
    round: 11,
    name: 'Indy Lights at World Wide Technology Raceway',
    circuitId: 'world-wide-technology-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-08-19T22:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-08-20T22:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2022-portland',
    round: 12,
    name: 'Indy Lights Grand Prix of Portland',
    circuitId: 'portland-international-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-03T23:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2022-09-04T17:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2022-laguna-seca-1',
    round: 13,
    name: 'Indy Lights Grand Prix of Monterey — Race 1',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-10T15:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2022-09-10T20:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2022-laguna-seca-2',
    round: 14,
    name: 'Indy Lights Grand Prix of Monterey — Race 2',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      { type: 'race', label: 'Race 2', startUtc: '2022-09-11T17:30:00Z', durationMinutes: 45 },
    ],
  },
]
