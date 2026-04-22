import { RaceEvent } from '@/lib/types'

// GT World Challenge America 2021 — 7 events
// Source: Wikipedia / gt-world-challenge-america.com
// DST 2021: Mar 14 – Nov 7
export const gtwcam2021: RaceEvent[] = [
  {
    id: 'gtwcam-2021-sonoma',
    round: 1,
    name: 'Sonoma Raceway',
    circuitId: 'sonoma-raceway',
    sessions: [
      // Friday 5 Mar (PST UTC-8, before DST)
      { type: 'practice', label: 'Free Practice', startUtc: '2021-03-05T18:00:00Z', durationMinutes: 60 },
      // Saturday 6 Mar
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-03-06T18:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2021-03-06T22:00:00Z', durationMinutes: 90 },
      // Sunday 7 Mar
      { type: 'race', label: 'Race 2', startUtc: '2021-03-07T21:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'gtwcam-2021-cota',
    round: 2,
    name: 'Circuit of the Americas',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      // Friday 30 Apr (CDT UTC-5)
      { type: 'practice', label: 'Free Practice', startUtc: '2021-04-30T15:00:00Z', durationMinutes: 60 },
      // Saturday 1 May
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-05-01T15:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2021-05-01T19:00:00Z', durationMinutes: 90 },
      // Sunday 2 May
      { type: 'race', label: 'Race 2', startUtc: '2021-05-02T18:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'gtwcam-2021-vir',
    round: 3,
    name: 'Virginia International Raceway',
    circuitId: 'virginia-international-raceway',
    sessions: [
      // Friday 4 Jun (EDT UTC-4)
      { type: 'practice', label: 'Free Practice', startUtc: '2021-06-04T14:00:00Z', durationMinutes: 60 },
      // Saturday 5 Jun
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-06-05T14:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2021-06-05T18:30:00Z', durationMinutes: 90 },
      // Sunday 6 Jun
      { type: 'race', label: 'Race 2', startUtc: '2021-06-06T17:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'gtwcam-2021-road-america',
    round: 4,
    name: 'Road America',
    circuitId: 'road-america',
    sessions: [
      // Friday 27 Aug (CDT UTC-5)
      { type: 'practice', label: 'Free Practice', startUtc: '2021-08-27T15:00:00Z', durationMinutes: 60 },
      // Saturday 28 Aug
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-08-28T15:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2021-08-28T19:00:00Z', durationMinutes: 90 },
      // Sunday 29 Aug
      { type: 'race', label: 'Race 2', startUtc: '2021-08-29T18:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'gtwcam-2021-watkins-glen',
    round: 5,
    name: 'Watkins Glen International',
    circuitId: 'watkins-glen-international',
    sessions: [
      // Friday 17 Sep (EDT UTC-4)
      { type: 'practice', label: 'Free Practice', startUtc: '2021-09-17T14:00:00Z', durationMinutes: 60 },
      // Saturday 18 Sep
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-09-18T14:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2021-09-18T18:30:00Z', durationMinutes: 90 },
      // Sunday 19 Sep
      { type: 'race', label: 'Race 2', startUtc: '2021-09-19T17:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'gtwcam-2021-sebring',
    round: 6,
    name: 'Sebring International Raceway',
    circuitId: 'sebring-international-raceway',
    sessions: [
      // Friday 1 Oct (EDT UTC-4)
      { type: 'practice', label: 'Free Practice', startUtc: '2021-10-01T14:00:00Z', durationMinutes: 60 },
      // Saturday 2 Oct
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-02T14:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2021-10-02T18:30:00Z', durationMinutes: 90 },
      // Sunday 3 Oct
      { type: 'race', label: 'Race 2', startUtc: '2021-10-03T17:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'gtwcam-2021-indianapolis',
    round: 7,
    name: 'Indianapolis 8 Hour',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      // Friday 15 Oct (EDT UTC-4)
      { type: 'practice', label: 'Free Practice', startUtc: '2021-10-15T14:00:00Z', durationMinutes: 60 },
      // Saturday 16 Oct
      { type: 'qualifying', label: 'Qualifying', startUtc: '2021-10-16T14:00:00Z', durationMinutes: 30 },
      // Sunday 17 Oct — 8-hour endurance race, ~10:00 local = 14:00 UTC
      { type: 'endurance', label: 'Indianapolis 8 Hour', startUtc: '2021-10-17T14:00:00Z', durationMinutes: 480 },
    ],
  },
]
