import { RaceEvent } from '@/lib/types'

// NASCAR Xfinity Series 2023 — 33 points races
// Sources: en.wikipedia.org/wiki/2023_NASCAR_Xfinity_Series, per-race Wikipedia entries, espn.com/racing/schedule/_/series/xfinity/year/2023
// Race start times converted from ET to UTC (ET = UTC-5 standard, UTC-4 during DST; DST in US ran Mar 12 – Nov 5, 2023).
// Round 2 (Auto Club Fontana) was the final Xfinity race at the 2.0-mile configuration.
// Round 14 (Sonoma) was the inaugural NXS race at Sonoma Raceway.
// Round 16 (Chicago Street) was the inaugural NXS street race; ran only 25 laps before being called for severe rain/flash flood.
// Round 12 (Charlotte) was postponed from Sat May 27 to Mon May 29 by rain.
// Verification date: 2026-06-08.
export const nascarXfinity2023: RaceEvent[] = [
  {
    id: 'nascar-xfinity-2023-daytona',
    round: 1,
    name: "Beef. It's What's for Dinner. 300",
    circuitId: 'daytona-international-speedway',
    sessions: [
      // Qualifying Fri Feb 17 17:00 ET = 22:00 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-02-17T22:00:00Z', durationMinutes: 60 },
      // Race Sat Feb 18 17:00 ET = 22:00 UTC
      { type: 'race', label: "Beef. It's What's for Dinner. 300", startUtc: '2023-02-18T22:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-fontana',
    round: 2,
    name: 'Production Alliance Group 300',
    circuitId: 'auto-club-speedway',
    sessions: [
      // Qualifying scheduled Sat Feb 25 — race postponed to Feb 26 by rain
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-02-25T20:35:00Z', durationMinutes: 60 },
      // Race Sun Feb 26 17:00 PST = 01:00 UTC Mon
      { type: 'race', label: 'Production Alliance Group 300', startUtc: '2023-02-27T01:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-las-vegas',
    round: 3,
    name: 'Alsco Uniforms 300',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      // Qualifying Sat Mar 4 13:30 PST = 21:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-03-04T21:30:00Z', durationMinutes: 60 },
      // Race Sat Mar 4 16:30 ET = 21:30 UTC
      { type: 'race', label: 'Alsco Uniforms 300', startUtc: '2023-03-04T21:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-phoenix',
    round: 4,
    name: 'United Rentals 200',
    circuitId: 'phoenix-raceway',
    sessions: [
      // Qualifying Sat Mar 11 12:30 MST = 19:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-03-11T19:30:00Z', durationMinutes: 60 },
      // Race Sat Mar 11 16:30 ET = 21:30 UTC (pre-DST; ET = UTC-5)
      { type: 'race', label: 'United Rentals 200', startUtc: '2023-03-11T21:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-atlanta',
    round: 5,
    name: 'RAPTOR King of Tough 250',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      // DST in effect from Mar 12 — ET = UTC-4 from this point
      // Qualifying Sat Mar 18 12:05 ET = 16:05 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-03-18T16:05:00Z', durationMinutes: 60 },
      // Race Sat Mar 18 17:00 ET = 21:00 UTC
      { type: 'race', label: 'RAPTOR King of Tough 250', startUtc: '2023-03-18T21:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-cota',
    round: 6,
    name: 'Pit Boss 250',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      // Qualifying Sat Mar 25 11:35 CDT = 16:35 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-03-25T16:35:00Z', durationMinutes: 60 },
      // Race Sat Mar 25 14:30 CDT = 19:30 UTC
      { type: 'race', label: 'Pit Boss 250', startUtc: '2023-03-25T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-richmond',
    round: 7,
    name: 'ToyotaCare 250',
    circuitId: 'richmond-raceway',
    sessions: [
      // Qualifying Sat Apr 1 10:30 ET = 14:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-01T14:30:00Z', durationMinutes: 60 },
      // Race Sat Apr 1 13:30 ET = 17:30 UTC
      { type: 'race', label: 'ToyotaCare 250', startUtc: '2023-04-01T17:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-martinsville',
    round: 8,
    name: 'Call 811.com Before You Dig. Know What\'s Below. 250',
    circuitId: 'martinsville-speedway',
    sessions: [
      // Qualifying Sat Apr 15 11:30 ET = 15:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-15T15:30:00Z', durationMinutes: 60 },
      // Race Sat Apr 15 14:30 ET = 18:30 UTC
      { type: 'race', label: 'Call 811 Before You Dig 250', startUtc: '2023-04-15T18:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-talladega',
    round: 9,
    name: 'Ag-Pro 300',
    circuitId: 'talladega-superspeedway',
    sessions: [
      // Qualifying Sat Apr 22 11:30 CDT = 16:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-22T16:30:00Z', durationMinutes: 60 },
      // Race Sat Apr 22 16:00 ET = 20:00 UTC
      { type: 'race', label: 'Ag-Pro 300', startUtc: '2023-04-22T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-dover',
    round: 10,
    name: 'A-GAME 200',
    circuitId: 'dover-motor-speedway',
    sessions: [
      // Qualifying Sat Apr 29 09:30 ET = 13:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-29T13:30:00Z', durationMinutes: 60 },
      // Race Sat Apr 29 13:30 ET = 17:30 UTC
      { type: 'race', label: 'A-GAME 200', startUtc: '2023-04-29T17:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-darlington',
    round: 11,
    name: "Shriners Children's 200",
    circuitId: 'darlington-raceway',
    sessions: [
      // Qualifying Sat May 13 11:05 ET = 15:05 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-05-13T15:05:00Z', durationMinutes: 60 },
      // Race Sat May 13 15:30 ET = 19:30 UTC
      { type: 'race', label: "Shriners Children's 200", startUtc: '2023-05-13T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-charlotte',
    round: 12,
    name: 'Alsco Uniforms 300',
    circuitId: 'charlotte-motor-speedway',
    sessions: [
      // Qualifying Fri May 26 — race originally Sat May 27 postponed by rain to Mon May 29
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-05-26T20:05:00Z', durationMinutes: 60 },
      // Race Mon May 29 13:00 ET = 17:00 UTC
      { type: 'race', label: 'Alsco Uniforms 300', startUtc: '2023-05-29T17:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-portland',
    round: 13,
    name: 'Pacific Office Automation 147',
    circuitId: 'portland-international-raceway',
    sessions: [
      // Qualifying Sat Jun 3 12:30 PDT = 19:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-03T19:30:00Z', durationMinutes: 60 },
      // Race Sat Jun 3 16:30 PDT = 23:30 UTC
      { type: 'race', label: 'Pacific Office Automation 147', startUtc: '2023-06-03T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-sonoma',
    round: 14,
    name: 'DoorDash 250',
    circuitId: 'sonoma-raceway',
    sessions: [
      // Inaugural NXS Sonoma race. Qualifying Sat Jun 10 12:30 PDT = 19:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-10T19:30:00Z', durationMinutes: 60 },
      // Race Sat Jun 10 16:00 PDT = 23:00 UTC
      { type: 'race', label: 'DoorDash 250', startUtc: '2023-06-10T23:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-nashville',
    round: 15,
    name: 'Tennessee Lottery 250',
    circuitId: 'nashville-superspeedway',
    sessions: [
      // Qualifying Sat Jun 24 09:30 ET = 13:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-24T13:30:00Z', durationMinutes: 60 },
      // Race Sat Jun 24 15:00 ET = 19:00 UTC
      { type: 'race', label: 'Tennessee Lottery 250', startUtc: '2023-06-24T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-chicago',
    round: 16,
    name: 'The Loop 121',
    circuitId: 'chicago-street-course',
    sessions: [
      // Inaugural NXS street race. Qualifying Sat Jul 1 13:30 CDT = 18:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-01T18:30:00Z', durationMinutes: 60 },
      // Race Sat Jul 1 16:30 CDT = 21:30 UTC; called after 25 laps due to flash flood
      { type: 'race', label: 'The Loop 121', startUtc: '2023-07-01T21:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-atlanta-2',
    round: 17,
    name: 'Alsco Uniforms 250',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      // Qualifying Sat Jul 8 09:30 ET = 13:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-08T13:30:00Z', durationMinutes: 60 },
      // Race Sat Jul 8 15:00 ET = 19:00 UTC
      { type: 'race', label: 'Alsco Uniforms 250', startUtc: '2023-07-08T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-new-hampshire',
    round: 18,
    name: 'Ambetter Health 200',
    circuitId: 'new-hampshire-motor-speedway',
    sessions: [
      // Qualifying Fri Jul 14 18:00 ET = 22:00 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-14T22:00:00Z', durationMinutes: 60 },
      // Race Sat Jul 15 14:30 ET = 18:30 UTC
      { type: 'race', label: 'Ambetter Health 200', startUtc: '2023-07-15T18:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-pocono',
    round: 19,
    name: 'Explore the Pocono Mountains 225',
    circuitId: 'pocono-raceway',
    sessions: [
      // Qualifying Sat Jul 22 09:30 ET = 13:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-22T13:30:00Z', durationMinutes: 60 },
      // Race Sat Jul 22 15:00 ET = 19:00 UTC
      { type: 'race', label: 'Explore the Pocono Mountains 225', startUtc: '2023-07-22T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-road-america',
    round: 20,
    name: 'Road America 180',
    circuitId: 'road-america',
    sessions: [
      // Qualifying Sat Jul 29 11:30 CDT = 16:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-07-29T16:30:00Z', durationMinutes: 60 },
      // Race Sat Jul 29 15:00 CDT = 20:00 UTC
      { type: 'race', label: 'Road America 180', startUtc: '2023-07-29T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-michigan',
    round: 21,
    name: 'Cabo Wabo 250',
    circuitId: 'michigan-international-speedway',
    sessions: [
      // Qualifying Sat Aug 5 09:30 ET = 13:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-05T13:30:00Z', durationMinutes: 60 },
      // Race Sat Aug 5 15:30 ET = 19:30 UTC
      { type: 'race', label: 'Cabo Wabo 250', startUtc: '2023-08-05T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-indianapolis-rc',
    round: 22,
    name: 'Pennzoil 150',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      // Qualifying Sat Aug 12 12:30 ET = 16:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-12T16:30:00Z', durationMinutes: 60 },
      // Race Sat Aug 12 16:00 ET = 20:00 UTC
      { type: 'race', label: 'Pennzoil 150', startUtc: '2023-08-12T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-watkins-glen',
    round: 23,
    name: "Shriners Children's 200 at The Glen",
    circuitId: 'watkins-glen-international',
    sessions: [
      // Qualifying Sat Aug 19 11:05 ET = 15:05 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-19T15:05:00Z', durationMinutes: 60 },
      // Race Sat Aug 19 15:00 ET = 19:00 UTC
      { type: 'race', label: "Shriners Children's 200 at The Glen", startUtc: '2023-08-19T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-daytona-2',
    round: 24,
    name: 'Wawa 250',
    circuitId: 'daytona-international-speedway',
    sessions: [
      // Qualifying Fri Aug 25 16:00 ET = 20:00 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-25T20:00:00Z', durationMinutes: 60 },
      // Race Fri Aug 25 19:30 ET = 23:30 UTC
      { type: 'race', label: 'Wawa 250', startUtc: '2023-08-25T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-darlington-2',
    round: 25,
    name: 'Sport Clips Haircuts VFW Help A Hero 200',
    circuitId: 'darlington-raceway',
    sessions: [
      // Qualifying Sat Sep 2 12:05 ET = 16:05 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-02T16:05:00Z', durationMinutes: 60 },
      // Race Sat Sep 2 15:30 ET = 19:30 UTC (start of playoffs)
      { type: 'race', label: 'Sport Clips Haircuts VFW 200', startUtc: '2023-09-02T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-kansas',
    round: 26,
    name: 'Kansas Lottery 300',
    circuitId: 'kansas-speedway',
    sessions: [
      // Qualifying Sat Sep 9 10:35 CDT = 15:35 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-09T15:35:00Z', durationMinutes: 60 },
      // Race Sat Sep 9 15:00 CDT = 20:00 UTC
      { type: 'race', label: 'Kansas Lottery 300', startUtc: '2023-09-09T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-bristol',
    round: 27,
    name: 'Food City 300',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      // Qualifying Fri Sep 15 16:35 ET = 20:35 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-15T20:35:00Z', durationMinutes: 60 },
      // Race Fri Sep 15 19:30 ET = 23:30 UTC
      { type: 'race', label: 'Food City 300', startUtc: '2023-09-15T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-texas',
    round: 28,
    name: "Andy's Frozen Custard 300",
    circuitId: 'texas-motor-speedway',
    sessions: [
      // Qualifying Sat Sep 23 11:35 CDT = 16:35 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-23T16:35:00Z', durationMinutes: 60 },
      // Race Sat Sep 23 14:30 CDT = 19:30 UTC
      { type: 'race', label: "Andy's Frozen Custard 300", startUtc: '2023-09-23T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-charlotte-roval',
    round: 29,
    name: 'Drive for the Cure 250',
    circuitId: 'charlotte-motor-speedway-roval',
    sessions: [
      // Qualifying Sat Oct 7 11:05 ET = 15:05 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-10-07T15:05:00Z', durationMinutes: 60 },
      // Race Sat Oct 7 15:00 ET = 19:00 UTC
      { type: 'race', label: 'Drive for the Cure 250', startUtc: '2023-10-07T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-las-vegas-2',
    round: 30,
    name: 'Alsco Uniforms 302',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      // Qualifying Sat Oct 14 14:35 PDT = 21:35 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-10-14T21:35:00Z', durationMinutes: 60 },
      // Race Sat Oct 14 15:30 PDT = 22:30 UTC
      { type: 'race', label: 'Alsco Uniforms 302', startUtc: '2023-10-14T22:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-homestead',
    round: 31,
    name: 'Contender Boats 300',
    circuitId: 'homestead-miami-speedway',
    sessions: [
      // Qualifying Sat Oct 21 09:05 ET = 13:05 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-10-21T13:05:00Z', durationMinutes: 60 },
      // Race Sat Oct 21 15:00 ET = 19:00 UTC
      { type: 'race', label: 'Contender Boats 300', startUtc: '2023-10-21T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-martinsville-2',
    round: 32,
    name: 'Dead On Tools 250',
    circuitId: 'martinsville-speedway',
    sessions: [
      // Qualifying Sat Oct 28 12:35 ET = 16:35 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-10-28T16:35:00Z', durationMinutes: 60 },
      // Race Sat Oct 28 15:00 ET = 19:00 UTC
      { type: 'race', label: 'Dead On Tools 250', startUtc: '2023-10-28T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2023-phoenix-championship',
    round: 33,
    name: 'NASCAR Xfinity Series Championship Race',
    circuitId: 'phoenix-raceway',
    sessions: [
      // DST ended Nov 5; race day Nov 4 (DST still in effect)
      // Qualifying Sat Nov 4 11:05 MST = 18:05 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-11-04T18:05:00Z', durationMinutes: 60 },
      // Race Sat Nov 4 15:00 MST = 22:00 UTC
      { type: 'race', label: 'Championship Race', startUtc: '2023-11-04T22:00:00Z', durationMinutes: 180 },
    ],
  },
]
