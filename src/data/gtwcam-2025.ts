import { RaceEvent } from '@/lib/types'

// GT World Challenge America 2025 — 7 events
// Source: Wikipedia / gt-world-challenge-america.com
// DST 2025: Mar 9 – Nov 2
export const gtwcam2025: RaceEvent[] = [
  {
    id: 'gtwcam-2025-sonoma',
    round: 1,
    name: 'Sonoma Raceway',
    circuitId: 'sonoma-raceway',
    sessions: [
      // Friday 28 Mar (PDT UTC-7)
      { type: 'practice', label: 'Free Practice', startUtc: '2025-03-28T17:00:00Z', durationMinutes: 60 },
      // Saturday 29 Mar
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-03-29T17:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2025-03-29T21:00:00Z', durationMinutes: 90 },
      // Sunday 30 Mar
      { type: 'race', label: 'Race 2', startUtc: '2025-03-30T20:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'gtwcam-2025-cota',
    round: 2,
    name: 'Circuit of the Americas',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      // Friday 25 Apr (CDT UTC-5)
      { type: 'practice', label: 'Free Practice', startUtc: '2025-04-25T15:00:00Z', durationMinutes: 60 },
      // Saturday 26 Apr
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-04-26T15:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2025-04-26T19:00:00Z', durationMinutes: 90 },
      // Sunday 27 Apr
      { type: 'race', label: 'Race 2', startUtc: '2025-04-27T18:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'gtwcam-2025-sebring',
    round: 3,
    name: 'Sebring International Raceway',
    circuitId: 'sebring-international-raceway',
    sessions: [
      // Friday 16 May (EDT UTC-4)
      { type: 'practice', label: 'Free Practice', startUtc: '2025-05-16T14:00:00Z', durationMinutes: 60 },
      // Saturday 17 May
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-17T14:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2025-05-17T18:30:00Z', durationMinutes: 90 },
      // Sunday 18 May
      { type: 'race', label: 'Race 2', startUtc: '2025-05-18T17:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'gtwcam-2025-vir',
    round: 4,
    name: 'Virginia International Raceway',
    circuitId: 'virginia-international-raceway',
    sessions: [
      // Friday 18 Jul (EDT UTC-4)
      { type: 'practice', label: 'Free Practice', startUtc: '2025-07-18T14:00:00Z', durationMinutes: 60 },
      // Saturday 19 Jul
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-19T14:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2025-07-19T18:30:00Z', durationMinutes: 90 },
      // Sunday 20 Jul
      { type: 'race', label: 'Race 2', startUtc: '2025-07-20T17:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'gtwcam-2025-road-america',
    round: 5,
    name: 'Road America',
    circuitId: 'road-america',
    sessions: [
      // Friday 15 Aug (CDT UTC-5)
      { type: 'practice', label: 'Free Practice', startUtc: '2025-08-15T15:00:00Z', durationMinutes: 60 },
      // Saturday 16 Aug
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-16T15:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2025-08-16T19:00:00Z', durationMinutes: 90 },
      // Sunday 17 Aug
      { type: 'race', label: 'Race 2', startUtc: '2025-08-17T18:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'gtwcam-2025-barber',
    round: 6,
    name: 'Barber Motorsports Park',
    circuitId: 'barber-motorsports-park',
    sessions: [
      // Friday 5 Sep (CDT UTC-5)
      { type: 'practice', label: 'Free Practice', startUtc: '2025-09-05T15:00:00Z', durationMinutes: 60 },
      // Saturday 6 Sep
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-09-06T15:00:00Z', durationMinutes: 30 },
      { type: 'race', label: 'Race 1', startUtc: '2025-09-06T19:00:00Z', durationMinutes: 90 },
      // Sunday 7 Sep
      { type: 'race', label: 'Race 2', startUtc: '2025-09-07T18:00:00Z', durationMinutes: 90 },
    ],
  },
  {
    id: 'gtwcam-2025-indianapolis',
    round: 7,
    name: 'Indianapolis 8 Hour',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      // Friday 17 Oct (EDT UTC-4)
      { type: 'practice', label: 'Free Practice', startUtc: '2025-10-17T14:00:00Z', durationMinutes: 60 },
      // Saturday 18 Oct
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-10-18T14:00:00Z', durationMinutes: 30 },
      // Sunday 19 Oct — 8-hour endurance race, ~10:00 local = 14:00 UTC
      { type: 'endurance', label: 'Indianapolis 8 Hour', startUtc: '2025-10-19T14:00:00Z', durationMinutes: 480 },
    ],
  },
]
