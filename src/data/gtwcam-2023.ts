import { RaceEvent } from '@/lib/types'

// GT World Challenge America 2023 — 7 events
// Source: Wikipedia / gt-world-challenge-america.com
// DST 2023: Mar 12 – Nov 5
export const gtwcam2023: RaceEvent[] = [
  {
    id: 'gtwcam-2023-sonoma',
    round: 1,
    name: 'Sonoma Raceway',
    circuitId: 'sonoma-raceway',
    sessions: [
      // Friday 31 Mar (PDT UTC-7)
      { type: 'practice', label: 'Free Practice', startUtc: '2023-03-31T17:00:00Z', durationMinutes: 60 },
      // Saturday 1 Apr
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-01T17:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2023-04-01T21:00:00Z', durationMinutes: 90 },
      // Sunday 2 Apr
      { type: 'race', label: 'Race 2', startUtc: '2023-04-02T20:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'gtwcam-2023-nola',
    round: 2,
    name: 'NOLA Motorsports Park',
    circuitId: 'nola-motorsports-park',
    sessions: [
      // Friday 28 Apr (CDT UTC-5)
      { type: 'practice', label: 'Free Practice', startUtc: '2023-04-28T15:00:00Z', durationMinutes: 60 },
      // Saturday 29 Apr
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-04-29T15:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2023-04-29T19:00:00Z', durationMinutes: 90 },
      // Sunday 30 Apr
      { type: 'race', label: 'Race 2', startUtc: '2023-04-30T18:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'gtwcam-2023-cota',
    round: 3,
    name: 'Circuit of the Americas',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      // Friday 19 May (CDT UTC-5)
      { type: 'practice', label: 'Free Practice', startUtc: '2023-05-19T15:00:00Z', durationMinutes: 60 },
      // Saturday 20 May
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-05-20T15:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2023-05-20T19:00:00Z', durationMinutes: 90 },
      // Sunday 21 May
      { type: 'race', label: 'Race 2', startUtc: '2023-05-21T18:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'gtwcam-2023-vir',
    round: 4,
    name: 'Virginia International Raceway',
    circuitId: 'virginia-international-raceway',
    sessions: [
      // Friday 16 Jun (EDT UTC-4)
      { type: 'practice', label: 'Free Practice', startUtc: '2023-06-16T14:00:00Z', durationMinutes: 60 },
      // Saturday 17 Jun
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-06-17T14:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2023-06-17T18:30:00Z', durationMinutes: 90 },
      // Sunday 18 Jun
      { type: 'race', label: 'Race 2', startUtc: '2023-06-18T17:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'gtwcam-2023-road-america',
    round: 5,
    name: 'Road America',
    circuitId: 'road-america',
    sessions: [
      // Friday 18 Aug (CDT UTC-5)
      { type: 'practice', label: 'Free Practice', startUtc: '2023-08-18T15:00:00Z', durationMinutes: 60 },
      // Saturday 19 Aug
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-08-19T15:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2023-08-19T19:00:00Z', durationMinutes: 90 },
      // Sunday 20 Aug
      { type: 'race', label: 'Race 2', startUtc: '2023-08-20T18:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'gtwcam-2023-sebring',
    round: 6,
    name: 'Sebring International Raceway',
    circuitId: 'sebring-international-raceway',
    sessions: [
      // Friday 22 Sep (EDT UTC-4)
      { type: 'practice', label: 'Free Practice', startUtc: '2023-09-22T14:00:00Z', durationMinutes: 60 },
      // Saturday 23 Sep
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-09-23T14:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2023-09-23T18:30:00Z', durationMinutes: 90 },
      // Sunday 24 Sep
      { type: 'race', label: 'Race 2', startUtc: '2023-09-24T17:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'gtwcam-2023-indianapolis',
    round: 7,
    name: 'Indianapolis 8 Hour',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      // Friday 6 Oct (EDT UTC-4)
      { type: 'practice', label: 'Free Practice', startUtc: '2023-10-06T14:00:00Z', durationMinutes: 60 },
      // Saturday 7 Oct
      { type: 'qualifying', label: 'Qualifying', startUtc: '2023-10-07T14:00:00Z', durationMinutes: 30 },
      // Sunday 8 Oct — 8-hour endurance race, ~10:00 local = 14:00 UTC
      { type: 'endurance', label: 'Indianapolis 8 Hour', startUtc: '2023-10-08T14:00:00Z', durationMinutes: 480 },
    ],
  },
]
