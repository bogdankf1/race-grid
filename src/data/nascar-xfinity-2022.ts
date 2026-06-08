import { RaceEvent } from '@/lib/types'

// NASCAR Xfinity Series 2022 — 33 points races
// Sources: en.wikipedia.org/wiki/2022_NASCAR_Xfinity_Series, per-race Wikipedia entries, espn.com/racing/schedule/_/series/xfinity/year/2022
// Race start times converted from ET to UTC (ET = UTC-5 standard, UTC-4 during DST; DST in US ran Mar 13 – Nov 6, 2022).
// Round 2 (Auto Club Fontana) was the final Xfinity race at the 2.0-mile configuration before its rebuild.
// Round 23 (Daytona Aug) was split across Aug 26–27 due to inclement weather.
// Verification date: 2026-06-08.
export const nascarXfinity2022: RaceEvent[] = [
  {
    id: 'nascar-xfinity-2022-daytona',
    round: 1,
    name: "Beef. It's What's for Dinner. 300",
    circuitId: 'daytona-international-speedway',
    sessions: [
      // Qualifying Fri Feb 18 16:35 ET = 21:35 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-02-18T21:35:00Z', durationMinutes: 60 },
      // Race Sat Feb 19 17:00 ET = 22:00 UTC
      { type: 'race', label: "Beef. It's What's for Dinner. 300", startUtc: '2022-02-19T22:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-fontana',
    round: 2,
    name: 'Production Alliance Group 300',
    circuitId: 'auto-club-speedway',
    sessions: [
      // Qualifying Sat Feb 26 13:35 PST = 21:35 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-02-26T21:35:00Z', durationMinutes: 60 },
      // Race Sat Feb 26 17:00 PST = 01:00 UTC Sun
      { type: 'race', label: 'Production Alliance Group 300', startUtc: '2022-02-27T01:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-las-vegas',
    round: 3,
    name: 'Alsco Uniforms 300',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      // Qualifying Sat Mar 5 13:35 PST = 21:35 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-03-05T21:35:00Z', durationMinutes: 60 },
      // Race Sat Mar 5 17:30 ET = 22:30 UTC
      { type: 'race', label: 'Alsco Uniforms 300', startUtc: '2022-03-05T22:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-phoenix',
    round: 4,
    name: 'United Rentals 200',
    circuitId: 'phoenix-raceway',
    sessions: [
      // Qualifying Sat Mar 12 12:35 MST = 19:35 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-03-12T19:35:00Z', durationMinutes: 60 },
      // Race Sat Mar 12 16:30 ET = 21:30 UTC (pre-DST; ET = UTC-5)
      { type: 'race', label: 'United Rentals 200', startUtc: '2022-03-12T21:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-atlanta',
    round: 5,
    name: 'Nalley Cars 250',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      // DST in effect from Mar 13 — ET = UTC-4 from this point
      // Qualifying Sat Mar 19 10:30 ET = 14:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-03-19T14:30:00Z', durationMinutes: 60 },
      // Race Sat Mar 19 17:00 ET = 21:00 UTC
      { type: 'race', label: 'Nalley Cars 250', startUtc: '2022-03-19T21:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-cota',
    round: 6,
    name: 'Pit Boss 250',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      // Qualifying Sat Mar 26 11:35 CDT = 16:35 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-03-26T16:35:00Z', durationMinutes: 60 },
      // Race Sat Mar 26 15:30 CDT = 20:30 UTC
      { type: 'race', label: 'Pit Boss 250', startUtc: '2022-03-26T20:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-richmond',
    round: 7,
    name: 'ToyotaCare 250',
    circuitId: 'richmond-raceway',
    sessions: [
      // Qualifying Sat Apr 2 10:30 ET = 14:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-02T14:30:00Z', durationMinutes: 60 },
      // Race Sat Apr 2 13:30 ET = 17:30 UTC
      { type: 'race', label: 'ToyotaCare 250', startUtc: '2022-04-02T17:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-martinsville',
    round: 8,
    name: 'Call 811 Before You Dig 250',
    circuitId: 'martinsville-speedway',
    sessions: [
      // Qualifying Fri Apr 8 16:30 ET = 20:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-08T20:30:00Z', durationMinutes: 60 },
      // Race Fri Apr 8 20:30 ET = 00:30 UTC Sat
      { type: 'race', label: 'Call 811 Before You Dig 250', startUtc: '2022-04-09T00:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-talladega',
    round: 9,
    name: 'Ag-Pro 300',
    circuitId: 'talladega-superspeedway',
    sessions: [
      // Qualifying Sat Apr 23 11:30 CDT = 16:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-23T16:30:00Z', durationMinutes: 60 },
      // Race Sat Apr 23 16:00 ET = 20:00 UTC
      { type: 'race', label: 'Ag-Pro 300', startUtc: '2022-04-23T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-dover',
    round: 10,
    name: 'A-GAME 200',
    circuitId: 'dover-motor-speedway',
    sessions: [
      // Qualifying Sat Apr 30 09:30 ET = 13:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-30T13:30:00Z', durationMinutes: 60 },
      // Race Sat Apr 30 13:30 ET = 17:30 UTC
      { type: 'race', label: 'A-GAME 200', startUtc: '2022-04-30T17:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-darlington',
    round: 11,
    name: 'Mahindra ROXOR 200',
    circuitId: 'darlington-raceway',
    sessions: [
      // Qualifying cancelled by weather Sat May 7; lineup set by formula. Slot kept for app consistency.
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-07T15:00:00Z', durationMinutes: 60 },
      // Race Sat May 7 13:30 ET = 17:30 UTC
      { type: 'race', label: 'Mahindra ROXOR 200', startUtc: '2022-05-07T17:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-texas',
    round: 12,
    name: 'SRS Distribution 250',
    circuitId: 'texas-motor-speedway',
    sessions: [
      // Qualifying Sat May 21 10:35 CDT = 15:35 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-21T15:35:00Z', durationMinutes: 60 },
      // Race Sat May 21 13:30 ET = 17:30 UTC
      { type: 'race', label: 'SRS Distribution 250', startUtc: '2022-05-21T17:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-charlotte',
    round: 13,
    name: 'Alsco Uniforms 300',
    circuitId: 'charlotte-motor-speedway',
    sessions: [
      // Qualifying Sat May 28 11:30 ET = 15:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-28T15:30:00Z', durationMinutes: 60 },
      // Race Sat May 28 13:00 ET = 17:00 UTC
      { type: 'race', label: 'Alsco Uniforms 300', startUtc: '2022-05-28T17:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-portland',
    round: 14,
    name: 'Pacific Office Automation 147',
    circuitId: 'portland-international-raceway',
    sessions: [
      // Qualifying Sat Jun 4 ~12:30 PDT = 19:30 UTC; Round 2 cancelled by rain; pole awarded after Round 1
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-04T19:30:00Z', durationMinutes: 60 },
      // Race Sat Jun 4 16:30 PDT = 23:30 UTC
      { type: 'race', label: 'Pacific Office Automation 147', startUtc: '2022-06-04T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-nashville',
    round: 15,
    name: 'Tennessee Lottery 250',
    circuitId: 'nashville-superspeedway',
    sessions: [
      // Qualifying Sat Jun 25 09:30 ET = 13:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-25T13:30:00Z', durationMinutes: 60 },
      // Race Sat Jun 25 15:30 ET = 19:30 UTC
      { type: 'race', label: 'Tennessee Lottery 250', startUtc: '2022-06-25T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-road-america',
    round: 16,
    name: 'Henry 180',
    circuitId: 'road-america',
    sessions: [
      // Qualifying Sat Jul 2 12:30 CDT = 17:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-02T17:30:00Z', durationMinutes: 60 },
      // Race Sat Jul 2 15:00 CDT = 20:00 UTC
      { type: 'race', label: 'Henry 180', startUtc: '2022-07-02T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-atlanta-2',
    round: 17,
    name: 'Alsco Uniforms 250',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      // Qualifying Sat Jul 9 ~11:30 ET = 15:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-09T15:30:00Z', durationMinutes: 60 },
      // Race Sat Jul 9 15:00 ET = 19:00 UTC
      { type: 'race', label: 'Alsco Uniforms 250', startUtc: '2022-07-09T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-new-hampshire',
    round: 18,
    name: 'Ambetter Get Vaccinated 200',
    circuitId: 'new-hampshire-motor-speedway',
    sessions: [
      // Qualifying Sat Jul 16 ~10:30 ET = 14:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-16T14:30:00Z', durationMinutes: 60 },
      // Race Sat Jul 16 15:30 ET = 19:30 UTC
      { type: 'race', label: 'Ambetter Get Vaccinated 200', startUtc: '2022-07-16T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-pocono',
    round: 19,
    name: 'Explore the Pocono Mountains 225',
    circuitId: 'pocono-raceway',
    sessions: [
      // Qualifying Sat Jul 23 09:30 ET = 13:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-23T13:30:00Z', durationMinutes: 60 },
      // Race Sat Jul 23 15:00 ET = 19:00 UTC
      { type: 'race', label: 'Explore the Pocono Mountains 225', startUtc: '2022-07-23T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-indianapolis-rc',
    round: 20,
    name: 'Pennzoil 150',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      // Qualifying Sat Jul 30 12:30 ET = 16:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-30T16:30:00Z', durationMinutes: 60 },
      // Race Sat Jul 30 16:00 ET = 20:00 UTC
      { type: 'race', label: 'Pennzoil 150', startUtc: '2022-07-30T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-michigan',
    round: 21,
    name: 'New Holland 250',
    circuitId: 'michigan-international-speedway',
    sessions: [
      // Qualifying Sat Aug 6 09:30 ET = 13:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-08-06T13:30:00Z', durationMinutes: 60 },
      // Race Sat Aug 6 15:30 ET = 19:30 UTC
      { type: 'race', label: 'New Holland 250', startUtc: '2022-08-06T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-watkins-glen',
    round: 22,
    name: 'Go Bowling at The Glen',
    circuitId: 'watkins-glen-international',
    sessions: [
      // Qualifying Sat Aug 20 11:05 ET = 15:05 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-08-20T15:05:00Z', durationMinutes: 60 },
      // Race Sat Aug 20 15:00 ET = 19:00 UTC
      { type: 'race', label: 'Go Bowling at The Glen', startUtc: '2022-08-20T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-daytona-2',
    round: 23,
    name: 'Wawa 250',
    circuitId: 'daytona-international-speedway',
    sessions: [
      // Qualifying Fri Aug 26 16:00 ET = 20:00 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-08-26T20:00:00Z', durationMinutes: 60 },
      // Race scheduled Fri Aug 26 19:30 ET = 23:30 UTC; rain pushed completion to Sat Aug 27
      { type: 'race', label: 'Wawa 250', startUtc: '2022-08-26T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-darlington-2',
    round: 24,
    name: 'Sport Clips Haircuts VFW Help A Hero 200',
    circuitId: 'darlington-raceway',
    sessions: [
      // Qualifying Sat Sep 3 12:05 ET = 16:05 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-03T16:05:00Z', durationMinutes: 60 },
      // Race Sat Sep 3 15:30 ET = 19:30 UTC (start of playoffs)
      { type: 'race', label: 'Sport Clips Haircuts VFW 200', startUtc: '2022-09-03T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-kansas',
    round: 25,
    name: 'Kansas Lottery 300',
    circuitId: 'kansas-speedway',
    sessions: [
      // Qualifying Sat Sep 10 ~10:30 CDT = 15:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-10T15:30:00Z', durationMinutes: 60 },
      // Race Sat Sep 10 15:00 CDT = 20:00 UTC; rain-shortened to 93 laps
      { type: 'race', label: 'Kansas Lottery 300', startUtc: '2022-09-10T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-bristol',
    round: 26,
    name: 'Food City 300',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      // Qualifying Fri Sep 16 16:35 ET = 20:35 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-16T20:35:00Z', durationMinutes: 60 },
      // Race Fri Sep 16 19:30 ET = 23:30 UTC
      { type: 'race', label: 'Food City 300', startUtc: '2022-09-16T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-texas-2',
    round: 27,
    name: "Andy's Frozen Custard 300",
    circuitId: 'texas-motor-speedway',
    sessions: [
      // Qualifying Sat Sep 24 11:35 CDT = 16:35 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-24T16:35:00Z', durationMinutes: 60 },
      // Race Sat Sep 24 14:30 CDT = 19:30 UTC
      { type: 'race', label: "Andy's Frozen Custard 300", startUtc: '2022-09-24T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-talladega-2',
    round: 28,
    name: 'Sparks 300',
    circuitId: 'talladega-superspeedway',
    sessions: [
      // Qualifying Sat Oct 1 11:30 CDT = 16:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-01T16:30:00Z', durationMinutes: 60 },
      // Race Sat Oct 1 16:00 ET = 20:00 UTC
      { type: 'race', label: 'Sparks 300', startUtc: '2022-10-01T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-charlotte-roval',
    round: 29,
    name: 'Drive for the Cure 250',
    circuitId: 'charlotte-motor-speedway-roval',
    sessions: [
      // Qualifying Sat Oct 8 11:05 ET = 15:05 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-08T15:05:00Z', durationMinutes: 60 },
      // Race Sat Oct 8 15:00 ET = 19:00 UTC
      { type: 'race', label: 'Drive for the Cure 250', startUtc: '2022-10-08T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-las-vegas-2',
    round: 30,
    name: 'Alsco Uniforms 302',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      // Qualifying Sat Oct 15 14:35 PDT = 21:35 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-15T21:35:00Z', durationMinutes: 60 },
      // Race Sat Oct 15 15:30 PDT = 22:30 UTC
      { type: 'race', label: 'Alsco Uniforms 302', startUtc: '2022-10-15T22:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-homestead',
    round: 31,
    name: 'Contender Boats 300',
    circuitId: 'homestead-miami-speedway',
    sessions: [
      // Qualifying Sat Oct 22 09:05 ET = 13:05 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-22T13:05:00Z', durationMinutes: 60 },
      // Race Sat Oct 22 15:00 ET = 19:00 UTC
      { type: 'race', label: 'Contender Boats 300', startUtc: '2022-10-22T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-martinsville-2',
    round: 32,
    name: 'Dead On Tools 250',
    circuitId: 'martinsville-speedway',
    sessions: [
      // Qualifying Sat Oct 29 12:35 ET = 16:35 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-29T16:35:00Z', durationMinutes: 60 },
      // Race Sat Oct 29 15:00 ET = 19:00 UTC
      { type: 'race', label: 'Dead On Tools 250', startUtc: '2022-10-29T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2022-phoenix-championship',
    round: 33,
    name: 'NASCAR Xfinity Series Championship Race',
    circuitId: 'phoenix-raceway',
    sessions: [
      // DST ended Nov 6; race day Nov 5
      // Qualifying Sat Nov 5 12:05 MST = 19:05 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-11-05T19:05:00Z', durationMinutes: 60 },
      // Race Sat Nov 5 15:00 MST = 22:00 UTC
      { type: 'race', label: 'Championship Race', startUtc: '2022-11-05T22:00:00Z', durationMinutes: 180 },
    ],
  },
]
