import { RaceEvent } from '@/lib/types'

// GT World Challenge America 2024 — 7 events
// Source: Wikipedia / gt-world-challenge-america.com
// DST 2024: Mar 10 – Nov 3
export const gtwcam2024: RaceEvent[] = [
  {
    id: 'gtwcam-2024-sonoma',
    round: 1,
    name: 'Sonoma Raceway',
    circuitId: 'sonoma-raceway',
    sessions: [
      // Friday 5 Apr (PDT UTC-7)
      { type: 'practice', label: 'Free Practice', startUtc: '2024-04-05T17:00:00Z', durationMinutes: 60 },
      // Saturday 6 Apr
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-04-06T17:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2024-04-06T21:00:00Z', durationMinutes: 90 },
      // Sunday 7 Apr
      { type: 'race', label: 'Race 2', startUtc: '2024-04-07T20:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'gtwcam-2024-sebring',
    round: 2,
    name: 'Sebring International Raceway',
    circuitId: 'sebring-international-raceway',
    sessions: [
      // Friday 3 May (EDT UTC-4)
      { type: 'practice', label: 'Free Practice', startUtc: '2024-05-03T14:00:00Z', durationMinutes: 60 },
      // Saturday 4 May
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-04T14:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2024-05-04T18:30:00Z', durationMinutes: 90 },
      // Sunday 5 May
      { type: 'race', label: 'Race 2', startUtc: '2024-05-05T17:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'gtwcam-2024-cota',
    round: 3,
    name: 'Circuit of the Americas',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      // Friday 17 May (CDT UTC-5)
      { type: 'practice', label: 'Free Practice', startUtc: '2024-05-17T15:00:00Z', durationMinutes: 60 },
      // Saturday 18 May
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-05-18T15:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2024-05-18T19:00:00Z', durationMinutes: 90 },
      // Sunday 19 May
      { type: 'race', label: 'Race 2', startUtc: '2024-05-19T18:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'gtwcam-2024-vir',
    round: 4,
    name: 'Virginia International Raceway',
    circuitId: 'virginia-international-raceway',
    sessions: [
      // Friday 19 Jul (EDT UTC-4)
      { type: 'practice', label: 'Free Practice', startUtc: '2024-07-19T14:00:00Z', durationMinutes: 60 },
      // Saturday 20 Jul
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-07-20T14:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2024-07-20T18:30:00Z', durationMinutes: 90 },
      // Sunday 21 Jul
      { type: 'race', label: 'Race 2', startUtc: '2024-07-21T17:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'gtwcam-2024-road-america',
    round: 5,
    name: 'Road America',
    circuitId: 'road-america',
    sessions: [
      // Friday 16 Aug (CDT UTC-5)
      { type: 'practice', label: 'Free Practice', startUtc: '2024-08-16T15:00:00Z', durationMinutes: 60 },
      // Saturday 17 Aug
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-08-17T15:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2024-08-17T19:00:00Z', durationMinutes: 90 },
      // Sunday 18 Aug
      { type: 'race', label: 'Race 2', startUtc: '2024-08-18T18:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'gtwcam-2024-barber',
    round: 6,
    name: 'Barber Motorsports Park',
    circuitId: 'barber-motorsports-park',
    sessions: [
      // Friday 6 Sep (CDT UTC-5)
      { type: 'practice', label: 'Free Practice', startUtc: '2024-09-06T15:00:00Z', durationMinutes: 60 },
      // Saturday 7 Sep
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-09-07T15:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2024-09-07T19:00:00Z', durationMinutes: 90 },
      // Sunday 8 Sep
      { type: 'race', label: 'Race 2', startUtc: '2024-09-08T18:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'gtwcam-2024-indianapolis',
    round: 7,
    name: 'Indianapolis 8 Hour',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      // Friday 4 Oct (EDT UTC-4)
      { type: 'practice', label: 'Free Practice', startUtc: '2024-10-04T14:00:00Z', durationMinutes: 60 },
      // Saturday 5 Oct
      { type: 'qualifying', label: 'Qualifying', startUtc: '2024-10-05T14:00:00Z', durationMinutes: 30 },
      // Sunday 6 Oct — 8-hour endurance race, ~10:00 local = 14:00 UTC
      { type: 'endurance', label: 'Indianapolis 8 Hour', startUtc: '2024-10-06T14:00:00Z', durationMinutes: 480 },
    ],
  },
]
