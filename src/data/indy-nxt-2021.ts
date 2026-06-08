import { RaceEvent } from '@/lib/types'

// Indy Lights presented by Cooper Tires 2021 calendar — 20 races at 10 meetings
// (final season under Andersen Promotions before IndyCar/Penske Entertainment took over).
// Source: Wikipedia "2021 Indy Lights", indycar.com archives, motorsport.com/indylights/schedule/2021.
// Verified 2026-06-07.
// Times converted from ET to UTC (EDT = UTC-4 Apr-Oct). Session start times reflect documented
// IndyCar weekend timetables; where only the date was reliably published the time is a
// best-effort approximation aligned with the support-race window.
// Champion: Kyle Kirkwood (Andretti Autosport) — 10 wins, also Rookie of the Year.
export const indyNxt2021: RaceEvent[] = [
  {
    id: 'indy-nxt-2021-barber-1',
    round: 1,
    name: 'Indy Lights Grand Prix of Alabama — Race 1',
    circuitId: 'barber-motorsports-park',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-04-17T13:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2021-04-17T19:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2021-barber-2',
    round: 2,
    name: 'Indy Lights Grand Prix of Alabama — Race 2',
    circuitId: 'barber-motorsports-park',
    sessions: [
      { type: 'race', label: 'Race 2', startUtc: '2021-04-18T15:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2021-st-petersburg-1',
    round: 3,
    name: 'Indy Lights Grand Prix of St. Petersburg — Race 1',
    circuitId: 'streets-of-st-petersburg',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-04-24T14:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2021-04-24T18:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2021-st-petersburg-2',
    round: 4,
    name: 'Indy Lights Grand Prix of St. Petersburg — Race 2',
    circuitId: 'streets-of-st-petersburg',
    sessions: [
      { type: 'race', label: 'Race 2', startUtc: '2021-04-25T15:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2021-indianapolis-gp-1',
    round: 5,
    name: 'Indy Lights Grand Prix of Indianapolis — Race 1',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-14T13:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2021-05-14T19:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2021-indianapolis-gp-2',
    round: 6,
    name: 'Indy Lights Grand Prix of Indianapolis — Race 2',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      { type: 'race', label: 'Race 2', startUtc: '2021-05-15T15:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2021-detroit-1',
    round: 7,
    name: 'Indy Lights Grand Prix of Detroit — Race 1',
    circuitId: 'belle-isle-street-circuit',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-11T13:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2021-06-12T13:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2021-detroit-2',
    round: 8,
    name: 'Indy Lights Grand Prix of Detroit — Race 2',
    circuitId: 'belle-isle-street-circuit',
    sessions: [
      { type: 'race', label: 'Race 2', startUtc: '2021-06-13T13:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2021-road-america-1',
    round: 9,
    name: 'Indy Lights Grand Prix at Road America — Race 1',
    circuitId: 'road-america',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-19T13:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2021-06-19T19:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2021-road-america-2',
    round: 10,
    name: 'Indy Lights Grand Prix at Road America — Race 2',
    circuitId: 'road-america',
    sessions: [
      { type: 'race', label: 'Race 2', startUtc: '2021-06-20T15:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2021-mid-ohio-1',
    round: 11,
    name: 'Indy Lights Grand Prix at Mid-Ohio — Race 1',
    circuitId: 'mid-ohio-sports-car-course',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-03T13:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2021-07-03T19:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2021-mid-ohio-2',
    round: 12,
    name: 'Indy Lights Grand Prix at Mid-Ohio — Race 2',
    circuitId: 'mid-ohio-sports-car-course',
    sessions: [
      { type: 'race', label: 'Race 2', startUtc: '2021-07-04T15:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2021-gateway-1',
    round: 13,
    name: 'Indy Lights Oval Challenge of St. Louis — Race 1',
    circuitId: 'world-wide-technology-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-20T22:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2021-08-21T00:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2021-gateway-2',
    round: 14,
    name: 'Indy Lights Oval Challenge of St. Louis — Race 2',
    circuitId: 'world-wide-technology-raceway',
    sessions: [
      { type: 'race', label: 'Race 2', startUtc: '2021-08-21T22:30:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2021-portland-1',
    round: 15,
    name: 'Indy Lights Grand Prix of Portland — Race 1',
    circuitId: 'portland-international-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-11T16:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2021-09-11T22:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2021-portland-2',
    round: 16,
    name: 'Indy Lights Grand Prix of Portland — Race 2',
    circuitId: 'portland-international-raceway',
    sessions: [
      { type: 'race', label: 'Race 2', startUtc: '2021-09-12T17:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2021-laguna-seca-1',
    round: 17,
    name: 'Indy Lights Grand Prix of Monterey — Race 1',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-18T16:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2021-09-18T22:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2021-laguna-seca-2',
    round: 18,
    name: 'Indy Lights Grand Prix of Monterey — Race 2',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      { type: 'race', label: 'Race 2', startUtc: '2021-09-19T17:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2021-mid-ohio-finale-1',
    round: 19,
    name: 'Indy Lights Championship Weekend at Mid-Ohio — Race 1',
    circuitId: 'mid-ohio-sports-car-course',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-01T15:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2021-10-02T17:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2021-mid-ohio-finale-2',
    round: 20,
    name: 'Indy Lights Championship Weekend at Mid-Ohio — Race 2',
    circuitId: 'mid-ohio-sports-car-course',
    sessions: [
      { type: 'race', label: 'Race 2', startUtc: '2021-10-03T15:30:00Z', durationMinutes: 45 },
    ],
  },
]
