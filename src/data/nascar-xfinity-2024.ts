import { RaceEvent } from '@/lib/types'

// NASCAR Xfinity Series 2024 — 33 points races
// Sources: en.wikipedia.org/wiki/2024_NASCAR_Xfinity_Series, per-race Wikipedia entries, espn.com/racing/schedule/_/series/xfinity/year/2024
// Race start times converted from ET to UTC (ET = UTC-5 standard, UTC-4 during DST; DST in US ran Mar 10 – Nov 3, 2024).
// Round 1 (Daytona) was postponed from Sat Feb 17 to Mon Feb 19 by rain; the dates below reflect the actual run.
// Qualifying placed roughly 90 min – 3 hours before race start (sourced from race weekend schedules); a few rounds had qualifying rained out and started by NASCAR formula.
// Verification date: 2026-06-07.
export const nascarXfinity2024: RaceEvent[] = [
  {
    id: 'nascar-xfinity-2024-daytona',
    round: 1,
    name: 'United Rentals 300',
    circuitId: 'daytona-international-speedway',
    sessions: [
      // Qualifying held Sat Feb 17 13:30 ET (rain pushed race to Mon Feb 19 21:00 ET)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-02-17T18:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'United Rentals 300', startUtc: '2024-02-20T02:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-atlanta',
    round: 2,
    name: 'RAPTOR King of Tough 250',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-02-23T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'RAPTOR King of Tough 250', startUtc: '2024-02-24T22:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-las-vegas',
    round: 3,
    name: 'The LiUNA!',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      // Qualifying Fri Mar 1 16:05 PST = 00:05 UTC Sat Mar 2
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-02T00:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'The LiUNA!', startUtc: '2024-03-02T22:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-phoenix',
    round: 4,
    name: 'Call811.com Every Dig. Every Time. 200',
    circuitId: 'phoenix-raceway',
    sessions: [
      // Qualifying Sat Mar 9 11:00 MST = 18:00 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-09T18:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Call811.com 200', startUtc: '2024-03-09T21:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-cota',
    round: 5,
    name: 'Focused Health 250',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      // DST in effect from Mar 10 — ET = UTC-4 from this point
      // Qualifying Fri Mar 22 17:00 CST = 23:00 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-22T23:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Focused Health 250', startUtc: '2024-03-23T21:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-richmond',
    round: 6,
    name: 'ToyotaCare 250',
    circuitId: 'richmond-raceway',
    sessions: [
      // Qualifying Sat Mar 30 09:05 ET = 13:05 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-03-30T13:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'ToyotaCare 250', startUtc: '2024-03-30T17:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-martinsville',
    round: 7,
    name: 'DUDE Wipes 250',
    circuitId: 'martinsville-speedway',
    sessions: [
      // Qualifying Fri Apr 5 17:40 ET = 21:40 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-05T21:40:00Z', durationMinutes: 60 },
      { type: 'race', label: 'DUDE Wipes 250', startUtc: '2024-04-06T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-texas',
    round: 8,
    name: "Andy's Frozen Custard 300",
    circuitId: 'texas-motor-speedway',
    sessions: [
      // Qualifying Fri Apr 12 17:30 CST = 22:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-12T22:30:00Z', durationMinutes: 60 },
      { type: 'race', label: "Andy's Frozen Custard 300", startUtc: '2024-04-13T17:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-talladega',
    round: 9,
    name: 'Ag-Pro 300',
    circuitId: 'talladega-superspeedway',
    sessions: [
      // Qualifying Fri Apr 19 16:30 CST = 21:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-19T21:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Ag-Pro 300', startUtc: '2024-04-20T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-dover',
    round: 10,
    name: 'BetRivers 200',
    circuitId: 'dover-motor-speedway',
    sessions: [
      // Qualifying Fri Apr 26 15:30 ET = 19:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-26T19:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'BetRivers 200', startUtc: '2024-04-27T17:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-darlington',
    round: 11,
    name: 'Crown Royal Purple Bag Project 200',
    circuitId: 'darlington-raceway',
    sessions: [
      // Qualifying rained out May 10; lineup set by formula. Placeholder slot kept for app consistency.
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-10T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Crown Royal Purple Bag Project 200', startUtc: '2024-05-11T17:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-charlotte',
    round: 12,
    name: 'BetMGM 300',
    circuitId: 'charlotte-motor-speedway',
    sessions: [
      // Qualifying Fri May 24 16:05 ET = 20:05 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-24T20:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'BetMGM 300', startUtc: '2024-05-25T17:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-portland',
    round: 13,
    name: 'Pacific Office Automation 147',
    circuitId: 'portland-international-raceway',
    sessions: [
      // Qualifying Sat Jun 1 09:00 PST = 16:00 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-01T16:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Pacific Office Automation 147', startUtc: '2024-06-01T20:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-sonoma',
    round: 14,
    name: 'Zip Buy Now, Pay Later 250',
    circuitId: 'sonoma-raceway',
    sessions: [
      // Qualifying Sat Jun 8 12:30 PST = 19:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-08T19:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Zip Buy Now, Pay Later 250', startUtc: '2024-06-09T00:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-iowa',
    round: 15,
    name: 'Hy-Vee PERKS 250',
    circuitId: 'iowa-speedway',
    sessions: [
      // Qualifying cancelled due to weather; lineup set by formula. Placeholder slot kept for app consistency.
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-14T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Hy-Vee PERKS 250', startUtc: '2024-06-15T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-new-hampshire',
    round: 16,
    name: 'SciAps 200',
    circuitId: 'new-hampshire-motor-speedway',
    sessions: [
      // Qualifying cancelled due to weather; lineup set by formula. Placeholder slot kept for app consistency.
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-22T15:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'SciAps 200', startUtc: '2024-06-22T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-nashville',
    round: 17,
    name: 'Tennessee Lottery 250',
    circuitId: 'nashville-superspeedway',
    sessions: [
      // Qualifying Sat Jun 29 11:30 ET = 15:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-06-29T15:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Tennessee Lottery 250', startUtc: '2024-06-29T21:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-chicago',
    round: 18,
    name: 'The Loop 110',
    circuitId: 'chicago-street-course',
    sessions: [
      // Qualifying Sat Jul 6 10:30 CST = 15:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-06T15:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'The Loop 110', startUtc: '2024-07-06T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-pocono',
    round: 19,
    name: 'Explore the Pocono Mountains 225',
    circuitId: 'pocono-raceway',
    sessions: [
      // Qualifying Sat Jul 13 10:30 ET = 14:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-13T14:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Explore the Pocono Mountains 225', startUtc: '2024-07-13T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-indianapolis',
    round: 20,
    name: 'Pennzoil 250',
    circuitId: 'indianapolis-motor-speedway',
    sessions: [
      // Qualifying Sat Jul 20 12:05 ET = 16:05 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-20T16:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Pennzoil 250', startUtc: '2024-07-20T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-michigan',
    round: 21,
    name: 'Cabo Wabo 250',
    circuitId: 'michigan-international-speedway',
    sessions: [
      // Qualifying Fri Aug 16 16:00 ET = 20:00 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-16T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Cabo Wabo 250', startUtc: '2024-08-17T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-daytona-2',
    round: 22,
    name: 'Wawa 250 Powered by Coca-Cola',
    circuitId: 'daytona-international-speedway',
    sessions: [
      // Qualifying Fri Aug 23 15:00 ET = 19:00 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-23T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Wawa 250', startUtc: '2024-08-23T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-darlington-2',
    round: 23,
    name: 'Sport Clips Haircuts VFW 200',
    circuitId: 'darlington-raceway',
    sessions: [
      // Qualifying Sat Aug 31 11:05 ET = 15:05 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-31T15:05:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Sport Clips Haircuts VFW 200', startUtc: '2024-08-31T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-atlanta-2',
    round: 24,
    name: 'Focused Health 250',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      // Qualifying Sat Sep 7 11:00 ET = 15:00 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-07T15:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Focused Health 250', startUtc: '2024-09-07T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-watkins-glen',
    round: 25,
    name: 'Mission 200 at The Glen',
    circuitId: 'watkins-glen-international',
    sessions: [
      // Qualifying Sat Sep 14 10:30 ET = 14:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-14T14:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Mission 200 at The Glen', startUtc: '2024-09-14T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-bristol',
    round: 26,
    name: 'Food City 300',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      // Qualifying Fri Sep 20 15:10 ET = 19:10 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-20T19:10:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Food City 300', startUtc: '2024-09-20T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-kansas',
    round: 27,
    name: 'Kansas Lottery 300',
    circuitId: 'kansas-speedway',
    sessions: [
      // Qualifying Sat Sep 28 11:35 CST = 16:35 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-28T16:35:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Kansas Lottery 300', startUtc: '2024-09-28T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-talladega-2',
    round: 28,
    name: 'United Rentals 250',
    circuitId: 'talladega-superspeedway',
    sessions: [
      // Qualifying Sat Oct 5 morning CST; approx 16:00 UTC.
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-10-05T16:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'United Rentals 250', startUtc: '2024-10-05T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-charlotte-roval',
    round: 29,
    name: 'Drive for the Cure 250',
    circuitId: 'charlotte-motor-speedway-roval',
    sessions: [
      // Qualifying Sat Oct 12 11:00 ET = 15:00 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-10-12T15:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Drive for the Cure 250', startUtc: '2024-10-12T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-las-vegas-2',
    round: 30,
    name: 'Ambetter Health 302',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      // Qualifying Fri Oct 18 15:10 PST = 22:10 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-10-18T22:10:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Ambetter Health 302', startUtc: '2024-10-19T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-homestead',
    round: 31,
    name: 'Credit One NASCAR Amex Credit Card 300',
    circuitId: 'homestead-miami-speedway',
    sessions: [
      // Qualifying Fri Oct 25 16:40 ET = 20:40 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-10-25T20:40:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Credit One NASCAR Amex Credit Card 300', startUtc: '2024-10-26T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-martinsville-2',
    round: 32,
    name: 'National Debt Relief 250',
    circuitId: 'martinsville-speedway',
    sessions: [
      // Qualifying Fri Nov 1 16:10 ET = 20:10 UTC (DST still in effect through Nov 3)
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-11-01T20:10:00Z', durationMinutes: 60 },
      { type: 'race', label: 'National Debt Relief 250', startUtc: '2024-11-02T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2024-phoenix-championship',
    round: 33,
    name: 'NASCAR Xfinity Series Championship Race',
    circuitId: 'phoenix-raceway',
    sessions: [
      // DST ended Nov 3; race day Nov 9 → ET = UTC-5
      // Qualifying Sat Nov 9 14:00 MST = 21:00 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-11-09T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Championship Race', startUtc: '2024-11-10T00:30:00Z', durationMinutes: 180 },
    ],
  },
]
