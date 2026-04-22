import { RaceEvent } from '@/lib/types'

// GT World Challenge America 2026 — 7 rounds (6 × 3-hour + 1 × 8-hour)
// Source: gt-world-challenge-america.com (official event timetables)
export const gtwcam2026: RaceEvent[] = [
  {
    id: 'gtwcam-2026-sonoma',
    round: 1,
    name: 'Sonoma 3 Hours',
    circuitId: 'sonoma-raceway',
    sessions: [
      // Friday 27 Mar (PDT UTC-7)
      { type: 'practice', label: 'Practice 1', startUtc: '2026-03-27T23:00:00Z', durationMinutes: 60 },
      // Saturday 28 Mar
      { type: 'practice', label: 'Practice 2', startUtc: '2026-03-28T18:00:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 3', startUtc: '2026-03-28T21:15:00Z', durationMinutes: 60 },
      // Sunday 29 Mar
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-03-29T15:50:00Z', durationMinutes: 30 },
      { type: 'endurance', label: '3 Hours of Sonoma', startUtc: '2026-03-29T20:45:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'gtwcam-2026-cota',
    round: 2,
    name: 'COTA 3 Hours',
    circuitId: 'circuit-of-the-americas',
    sessions: [
      // Friday 24 Apr (CDT UTC-5)
      { type: 'practice', label: 'Practice 1', startUtc: '2026-04-24T19:00:00Z', durationMinutes: 60 },
      // Saturday 25 Apr
      { type: 'practice', label: 'Practice 2', startUtc: '2026-04-25T15:25:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 3', startUtc: '2026-04-25T19:15:00Z', durationMinutes: 60 },
      // Sunday 26 Apr
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-04-26T13:50:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-04-26T14:10:00Z', durationMinutes: 15 },
      { type: 'endurance', label: '3 Hours of COTA', startUtc: '2026-04-26T17:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'gtwcam-2026-sebring',
    round: 3,
    name: 'Sebring 3 Hours',
    circuitId: 'sebring-international-raceway',
    sessions: [
      // Friday 8 May (EDT UTC-4)
      { type: 'practice', label: 'Practice 1', startUtc: '2026-05-08T23:00:00Z', durationMinutes: 60 },
      // Saturday 9 May
      { type: 'practice', label: 'Practice 2', startUtc: '2026-05-09T12:55:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-09T18:10:00Z', durationMinutes: 30 },
      { type: 'endurance', label: '3 Hours of Sebring', startUtc: '2026-05-09T21:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'gtwcam-2026-road-atlanta',
    round: 4,
    name: 'Road Atlanta 3 Hours',
    circuitId: 'michelin-raceway-road-atlanta',
    sessions: [
      // Friday 12 Jun (EDT UTC-4)
      { type: 'practice', label: 'Practice 1', startUtc: '2026-06-12T18:00:00Z', durationMinutes: 60 },
      // Saturday 13 Jun
      { type: 'practice', label: 'Practice 2', startUtc: '2026-06-13T14:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-06-13T18:00:00Z', durationMinutes: 30 },
      // Sunday 14 Jun
      { type: 'endurance', label: '3 Hours of Road Atlanta', startUtc: '2026-06-14T17:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'gtwcam-2026-road-america',
    round: 5,
    name: 'Road America 3 Hours',
    circuitId: 'road-america',
    sessions: [
      // Friday 28 Aug (CDT UTC-5)
      { type: 'practice', label: 'Practice 1', startUtc: '2026-08-28T18:00:00Z', durationMinutes: 60 },
      // Saturday 29 Aug
      { type: 'practice', label: 'Practice 2', startUtc: '2026-08-29T14:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-08-29T18:00:00Z', durationMinutes: 30 },
      // Sunday 30 Aug
      { type: 'endurance', label: '3 Hours of Road America', startUtc: '2026-08-30T17:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'gtwcam-2026-barber',
    round: 6,
    name: 'Barber 3 Hours',
    circuitId: 'barber-motorsports-park',
    sessions: [
      // Friday 25 Sep (CDT UTC-5)
      { type: 'practice', label: 'Practice 1', startUtc: '2026-09-25T18:00:00Z', durationMinutes: 60 },
      // Saturday 26 Sep
      { type: 'practice', label: 'Practice 2', startUtc: '2026-09-26T14:30:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-26T18:00:00Z', durationMinutes: 30 },
      // Sunday 27 Sep
      { type: 'endurance', label: '3 Hours of Barber', startUtc: '2026-09-27T17:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'gtwcam-2026-indianapolis',
    round: 7,
    name: 'Indianapolis 8 Hour',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      // Thursday 8 Oct (EDT UTC-4)
      { type: 'practice', label: 'Practice 1', startUtc: '2026-10-08T16:00:00Z', durationMinutes: 90 },
      // Friday 9 Oct
      { type: 'practice', label: 'Practice 2', startUtc: '2026-10-09T14:00:00Z', durationMinutes: 90 },
      // Saturday 10 Oct
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-10T14:00:00Z', durationMinutes: 30 },
      // Sunday 11 Oct
      { type: 'endurance', label: 'Indianapolis 8 Hour', startUtc: '2026-10-11T15:00:00Z', durationMinutes: 480 },
    ],
  },
]
