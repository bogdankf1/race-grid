import { RaceEvent } from '@/lib/types'

// NASCAR Xfinity Series 2021 — 33 points races
// Sources: en.wikipedia.org/wiki/2021_NASCAR_Xfinity_Series, per-race Wikipedia entries, espn.com/racing/schedule/_/series/xfinity/year/2021
// Race start times converted from ET to UTC (ET = UTC-5 standard, UTC-4 during DST; DST in 2021 ran Mar 14 – Nov 7).
// Many 2021 races had qualifying cancelled by the COVID-era "competition-based formula" — the qualifying slot is still
// kept to maintain a consistent event structure across the season; pole sitters credited by NASCAR appear in results.
// Verification date: 2026-06-07.
export const nascarXfinity2021: RaceEvent[] = [
  {
    id: 'nascar-xfinity-2021-daytona',
    round: 1,
    name: "Beef. It's What's for Dinner. 300",
    circuitId: 'daytona-international-speedway',
    sessions: [
      // Pole set by 2020 owner points formula; race Sat Feb 13 17:00 ET = 22:00 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-02-12T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: "Beef. It's What's for Dinner. 300", startUtc: '2021-02-13T22:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-daytona-rc',
    round: 2,
    name: 'Super Start Batteries 188',
    circuitId: 'daytona-international-speedway-road-course',
    sessions: [
      // Sat Feb 20 17:30 ET = 22:30 UTC; lineup set by formula
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-02-19T22:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Super Start Batteries 188', startUtc: '2021-02-20T22:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-homestead',
    round: 3,
    name: 'Contender Boats 250',
    circuitId: 'homestead-miami-speedway',
    sessions: [
      // Sat Feb 27 15:30 ET = 20:30 UTC; lineup set by formula
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-02-26T20:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Contender Boats 250', startUtc: '2021-02-27T20:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-las-vegas',
    round: 4,
    name: 'Alsco Uniforms 300',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      // Sat Mar 6 16:30 ET = 21:30 UTC; lineup set by formula
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-03-05T21:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Alsco Uniforms 300', startUtc: '2021-03-06T21:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-phoenix',
    round: 5,
    name: 'Call 811 Before You Dig 200',
    circuitId: 'phoenix-raceway',
    sessions: [
      // Sat Mar 13 16:30 ET = 21:30 UTC; lineup set by formula
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-03-12T21:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Call 811 Before You Dig 200', startUtc: '2021-03-13T21:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-atlanta',
    round: 6,
    name: 'EchoPark 250',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      // DST in effect from Mar 14 — ET = UTC-4 from this point
      // Sat Mar 20 16:30 ET = 20:30 UTC; lineup set by formula
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-03-19T20:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'EchoPark 250', startUtc: '2021-03-20T20:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-martinsville',
    round: 7,
    name: 'Cook Out 250',
    circuitId: 'martinsville-speedway',
    sessions: [
      // Fri Apr 9 19:30 ET = 23:30 UTC; lineup set by formula
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-04-08T23:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Cook Out 250', startUtc: '2021-04-09T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-talladega',
    round: 8,
    name: 'Ag-Pro 300',
    circuitId: 'talladega-superspeedway',
    sessions: [
      // Sat Apr 24 16:00 ET = 20:00 UTC; rain-shortened to 90 laps; lineup set by formula
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-04-23T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Ag-Pro 300', startUtc: '2021-04-24T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-darlington',
    round: 9,
    name: 'Steakhouse Elite 200',
    circuitId: 'darlington-raceway',
    sessions: [
      // Sat May 8 15:30 ET = 19:30 UTC; lineup set by formula
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-07T19:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Steakhouse Elite 200', startUtc: '2021-05-08T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-dover',
    round: 10,
    name: 'Drydene 200',
    circuitId: 'dover-motor-speedway',
    sessions: [
      // Sat May 15 13:30 ET = 17:30 UTC; lineup set by formula
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-14T17:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Drydene 200', startUtc: '2021-05-15T17:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-cota',
    round: 11,
    name: 'Pit Boss 250',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      // First Xfinity COTA race; qualifying held Sat May 22 morning; race Sat May 22 14:30 CST = 19:30 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-22T15:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Pit Boss 250', startUtc: '2021-05-22T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-charlotte',
    round: 12,
    name: 'Alsco Uniforms 300',
    circuitId: 'charlotte-motor-speedway',
    sessions: [
      // Sat May 29 20:00 ET = 00:00 UTC (Sun); qualifying Fri 18:35 ET = 22:35 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-28T22:35:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Alsco Uniforms 300', startUtc: '2021-05-30T00:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-mid-ohio',
    round: 13,
    name: 'B&L Transport 170',
    circuitId: 'mid-ohio-sports-car-course',
    sessions: [
      // Sat Jun 5 15:00 ET = 19:00 UTC; lineup set by formula
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-05T15:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'B&L Transport 170', startUtc: '2021-06-05T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-texas',
    round: 14,
    name: 'Alsco Uniforms 250',
    circuitId: 'texas-motor-speedway',
    sessions: [
      // Sat Jun 12 16:30 ET / 15:30 CST = 20:30 UTC; lineup set by formula
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-11T20:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Alsco Uniforms 250', startUtc: '2021-06-12T20:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-nashville',
    round: 15,
    name: 'Tennessee Lottery 250',
    circuitId: 'nashville-superspeedway',
    sessions: [
      // Inaugural Nashville Superspeedway Xfinity race after rebuild
      // Sat Jun 19 17:00 ET = 21:00 UTC; qualifying Fri afternoon
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-18T21:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Tennessee Lottery 250', startUtc: '2021-06-19T21:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-pocono',
    round: 16,
    name: 'Pocono Green 225',
    circuitId: 'pocono-raceway',
    sessions: [
      // Sun Jun 27 13:00 ET = 17:00 UTC; lineup set by formula
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-26T17:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Pocono Green 225', startUtc: '2021-06-27T17:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-road-america',
    round: 17,
    name: 'Henry 180',
    circuitId: 'road-america',
    sessions: [
      // Sat Jul 3 15:30 ET = 19:30 UTC; qualifying Sat morning
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-03T15:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Henry 180', startUtc: '2021-07-03T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-atlanta-2',
    round: 18,
    name: 'Credit Karma Money 250',
    circuitId: 'atlanta-motor-speedway',
    sessions: [
      // Sat Jul 10 15:00 ET = 19:00 UTC; lineup set by formula
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-09T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Credit Karma Money 250', startUtc: '2021-07-10T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-new-hampshire',
    round: 19,
    name: 'Ambetter Get Vaccinated 200',
    circuitId: 'new-hampshire-motor-speedway',
    sessions: [
      // Sat Jul 17 15:30 ET = 19:30 UTC; lineup set by formula
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-07-16T19:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Ambetter Get Vaccinated 200', startUtc: '2021-07-17T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-watkins-glen',
    round: 20,
    name: 'Skrewball Peanut Butter Whiskey 200 at The Glen',
    circuitId: 'watkins-glen-international',
    sessions: [
      // Sat Aug 7 15:00 ET = 19:00 UTC; lineup set by formula
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-07T15:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Skrewball Peanut Butter Whiskey 200 at The Glen', startUtc: '2021-08-07T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-indianapolis-rc',
    round: 21,
    name: 'Pennzoil 150 at the Brickyard',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      // Sat Aug 14 16:00 ET = 20:00 UTC
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-14T15:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Pennzoil 150', startUtc: '2021-08-14T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-michigan',
    round: 22,
    name: 'New Holland 250',
    circuitId: 'michigan-international-speedway',
    sessions: [
      // Sat Aug 21 15:30 ET = 19:30 UTC; lineup set by formula
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-20T19:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'New Holland 250', startUtc: '2021-08-21T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-daytona-2',
    round: 23,
    name: 'Wawa 250',
    circuitId: 'daytona-international-speedway',
    sessions: [
      // Fri Aug 27 19:30 ET = 23:30 UTC; race delayed by rain to Sat Aug 28
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-27T19:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Wawa 250', startUtc: '2021-08-27T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-darlington-2',
    round: 24,
    name: 'Sport Clips Haircuts VFW Help A Hero 200',
    circuitId: 'darlington-raceway',
    sessions: [
      // Sat Sep 4 15:00 ET = 19:00 UTC; lineup set by formula
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-03T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Sport Clips Haircuts VFW Help A Hero 200', startUtc: '2021-09-04T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-richmond',
    round: 25,
    name: 'Go Bowling 250',
    circuitId: 'richmond-raceway',
    sessions: [
      // Sat Sep 11 15:00 ET = 19:00 UTC; lineup set by formula
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-10T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Go Bowling 250', startUtc: '2021-09-11T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-bristol',
    round: 26,
    name: 'Food City 300',
    circuitId: 'bristol-motor-speedway',
    sessions: [
      // Fri Sep 17 19:30 ET = 23:30 UTC; lineup set by formula
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-17T23:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Food City 300', startUtc: '2021-09-17T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-las-vegas-2',
    round: 27,
    name: 'Alsco Uniforms 302',
    circuitId: 'las-vegas-motor-speedway',
    sessions: [
      // Sat Sep 25 19:30 ET = 23:30 UTC; lineup set by formula
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-24T23:30:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Alsco Uniforms 302', startUtc: '2021-09-25T23:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-talladega-2',
    round: 28,
    name: 'Sparks 300',
    circuitId: 'talladega-superspeedway',
    sessions: [
      // Sat Oct 2 16:00 ET = 20:00 UTC; shortened by darkness to 107 laps
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-01T20:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Sparks 300', startUtc: '2021-10-02T20:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-charlotte-roval',
    round: 29,
    name: 'Drive for the Cure 250',
    circuitId: 'charlotte-motor-speedway-roval',
    sessions: [
      // Sat Oct 9 15:00 ET = 19:00 UTC; lineup set by formula
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-08T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Drive for the Cure 250', startUtc: '2021-10-09T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-texas-2',
    round: 30,
    name: "Andy's Frozen Custard 335",
    circuitId: 'texas-motor-speedway',
    sessions: [
      // Sat Oct 16 15:30 ET = 19:30 UTC; lineup set by formula
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-15T19:30:00Z', durationMinutes: 60 },
      { type: 'race', label: "Andy's Frozen Custard 335", startUtc: '2021-10-16T19:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-kansas',
    round: 31,
    name: 'Kansas Lottery 300',
    circuitId: 'kansas-speedway',
    sessions: [
      // Sat Oct 23 15:00 ET / 14:00 CST = 19:00 UTC; lineup set by formula
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-22T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Kansas Lottery 300', startUtc: '2021-10-23T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-martinsville-2',
    round: 32,
    name: 'Dead On Tools 250',
    circuitId: 'martinsville-speedway',
    sessions: [
      // Sat Oct 30 15:00 ET = 19:00 UTC; lineup set by formula
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-29T19:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Dead On Tools 250', startUtc: '2021-10-30T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'nascar-xfinity-2021-phoenix-championship',
    round: 33,
    name: 'NASCAR Xfinity Series Championship Race',
    circuitId: 'phoenix-raceway',
    sessions: [
      // DST ended Nov 7; race Sat Nov 6 17:00 ET = 21:00 UTC
      // Qualifying Fri Nov 5; this race featured single-car qualifying, Cindric on pole
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-11-05T22:00:00Z', durationMinutes: 60 },
      { type: 'race', label: 'Championship Race', startUtc: '2021-11-06T21:00:00Z', durationMinutes: 180 },
    ],
  },
]
