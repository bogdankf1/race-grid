import { RaceEvent } from '@/lib/types'

// Indy NXT by Firestone 2023 calendar — 14 rounds (rebranded from "Indy Lights"
// after Penske Entertainment's 2022 acquisition; Firestone replaced Cooper Tires as title tyre).
// Source: Wikipedia "2023 Indy NXT", indynxt.com archives, motorsport.com/indylights/schedule/2023.
// Verified 2026-06-07.
// Times converted from ET to UTC (EST = UTC-5 to Mar 11; EDT = UTC-4 from Mar 12 to Nov 4).
// Session start times reflect documented IndyCar weekend timetables; where only the date
// was reliably published the time is a best-effort approximation aligned with the support window.
// Champion: Christian Rasmussen (HMD Motorsports with Dale Coyne Racing) — 5 wins.
export const indyNxt2023: RaceEvent[] = [
  {
    id: 'indy-nxt-2023-st-petersburg',
    round: 1,
    name: 'Indy NXT Grand Prix of St. Petersburg',
    circuitId: 'streets-of-st-petersburg',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-03-04T18:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2023-03-05T15:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2023-barber',
    round: 2,
    name: 'Indy NXT Grand Prix of Alabama',
    circuitId: 'barber-motorsports-park',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-29T16:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2023-04-30T15:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2023-indianapolis-gp-1',
    round: 3,
    name: 'Indy NXT Grand Prix of Indianapolis',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-05-12T15:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2023-05-13T15:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2023-detroit-1',
    round: 4,
    name: 'Indy NXT Detroit Grand Prix — Race 1',
    circuitId: 'streets-of-detroit',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-02T15:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2023-06-03T14:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2023-detroit-2',
    round: 5,
    name: 'Indy NXT Detroit Grand Prix — Race 2',
    circuitId: 'streets-of-detroit',
    sessions: [
      { type: 'race', label: 'Race 2', startUtc: '2023-06-04T14:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2023-road-america',
    round: 6,
    name: 'Indy NXT Grand Prix at Road America',
    circuitId: 'road-america',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-17T15:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2023-06-18T15:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2023-mid-ohio',
    round: 7,
    name: 'Indy NXT Grand Prix at Mid-Ohio',
    circuitId: 'mid-ohio-sports-car-course',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-01T15:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2023-07-02T15:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2023-iowa',
    round: 8,
    name: 'Indy NXT at Iowa Speedway',
    circuitId: 'iowa-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-21T22:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2023-07-22T17:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2023-nashville',
    round: 9,
    name: 'Indy NXT Music City Grand Prix',
    circuitId: 'nashville-street-circuit',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-05T15:30:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2023-08-06T16:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2023-indianapolis-gp-2',
    round: 10,
    name: 'Indy NXT Grand Prix of Indianapolis (August)',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-11T15:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2023-08-11T22:00:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2023-gateway',
    round: 11,
    name: 'Indy NXT OUTFRONT Showdown at World Wide Technology Raceway',
    circuitId: 'world-wide-technology-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-25T22:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2023-08-26T22:00:00Z', durationMinutes: 60 },
    ],
  },
  {
    id: 'indy-nxt-2023-portland',
    round: 12,
    name: 'Indy NXT Grand Prix of Portland',
    circuitId: 'portland-international-raceway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-02T23:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race', startUtc: '2023-09-03T17:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2023-laguna-seca-1',
    round: 13,
    name: 'Indy NXT Grand Prix of Monterey — Race 1',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-09T15:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2023-09-09T20:30:00Z', durationMinutes: 45 },
    ],
  },
  {
    id: 'indy-nxt-2023-laguna-seca-2',
    round: 14,
    name: 'Indy NXT Grand Prix of Monterey — Race 2',
    circuitId: 'weathertech-raceway-laguna-seca',
    sessions: [
      { type: 'race', label: 'Race 2', startUtc: '2023-09-10T17:30:00Z', durationMinutes: 45 },
    ],
  },
]
