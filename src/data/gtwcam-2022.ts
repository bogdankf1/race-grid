import { RaceEvent } from '@/lib/types'

// GT World Challenge America 2022 — 7 events
// Source: Wikipedia / gt-world-challenge-america.com
// DST 2022: Mar 13 – Nov 6
export const gtwcam2022: RaceEvent[] = [
  {
    id: 'gtwcam-2022-sonoma',
    round: 1,
    name: 'Sonoma Raceway',
    circuitId: 'sonoma-raceway',
    sessions: [
      // Friday 15 Apr (PDT UTC-7)
      { type: 'practice', label: 'Free Practice', startUtc: '2022-04-15T17:00:00Z', durationMinutes: 60 },
      // Saturday 16 Apr
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-04-16T17:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2022-04-16T21:00:00Z', durationMinutes: 90 },
      // Sunday 17 Apr
      { type: 'race', label: 'Race 2', startUtc: '2022-04-17T20:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'gtwcam-2022-nola',
    round: 2,
    name: 'NOLA Motorsports Park',
    circuitId: 'nola-motorsports-park',
    sessions: [
      // Friday 20 May (CDT UTC-5)
      { type: 'practice', label: 'Free Practice', startUtc: '2022-05-20T15:00:00Z', durationMinutes: 60 },
      // Saturday 21 May
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-05-21T15:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2022-05-21T19:00:00Z', durationMinutes: 90 },
      // Sunday 22 May
      { type: 'race', label: 'Race 2', startUtc: '2022-05-22T18:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'gtwcam-2022-vir',
    round: 3,
    name: 'Virginia International Raceway',
    circuitId: 'virginia-international-raceway',
    sessions: [
      // Friday 17 Jun (EDT UTC-4)
      { type: 'practice', label: 'Free Practice', startUtc: '2022-06-17T14:00:00Z', durationMinutes: 60 },
      // Saturday 18 Jun
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-06-18T14:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2022-06-18T18:30:00Z', durationMinutes: 90 },
      // Sunday 19 Jun
      { type: 'race', label: 'Race 2', startUtc: '2022-06-19T17:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'gtwcam-2022-watkins-glen',
    round: 4,
    name: 'Watkins Glen International',
    circuitId: 'watkins-glen-international',
    sessions: [
      // Friday 22 Jul (EDT UTC-4)
      { type: 'practice', label: 'Free Practice', startUtc: '2022-07-22T14:00:00Z', durationMinutes: 60 },
      // Saturday 23 Jul
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-07-23T14:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2022-07-23T18:30:00Z', durationMinutes: 90 },
      // Sunday 24 Jul
      { type: 'race', label: 'Race 2', startUtc: '2022-07-24T17:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'gtwcam-2022-road-america',
    round: 5,
    name: 'Road America',
    circuitId: 'road-america',
    sessions: [
      // Friday 19 Aug (CDT UTC-5)
      { type: 'practice', label: 'Free Practice', startUtc: '2022-08-19T15:00:00Z', durationMinutes: 60 },
      // Saturday 20 Aug
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-08-20T15:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2022-08-20T19:00:00Z', durationMinutes: 90 },
      // Sunday 21 Aug
      { type: 'race', label: 'Race 2', startUtc: '2022-08-21T18:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'gtwcam-2022-sebring',
    round: 6,
    name: 'Sebring International Raceway',
    circuitId: 'sebring-international-raceway',
    sessions: [
      // Friday 23 Sep (EDT UTC-4)
      { type: 'practice', label: 'Free Practice', startUtc: '2022-09-23T14:00:00Z', durationMinutes: 60 },
      // Saturday 24 Sep
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-09-24T14:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2022-09-24T18:30:00Z', durationMinutes: 90 },
      // Sunday 25 Sep
      { type: 'race', label: 'Race 2', startUtc: '2022-09-25T17:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'gtwcam-2022-indianapolis',
    round: 7,
    name: 'Indianapolis 8 Hour',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      // Friday 7 Oct (EDT UTC-4)
      { type: 'practice', label: 'Free Practice', startUtc: '2022-10-07T14:00:00Z', durationMinutes: 60 },
      // Saturday 8 Oct
      { type: 'qualifying', label: 'Qualifying', startUtc: '2022-10-08T14:00:00Z', durationMinutes: 30 },
      // Sunday 9 Oct — 8-hour endurance race, ~10:00 local = 14:00 UTC
      { type: 'endurance', label: 'Indianapolis 8 Hour', startUtc: '2022-10-09T14:00:00Z', durationMinutes: 480 },
    ],
  },
]
