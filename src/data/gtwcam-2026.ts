import { RaceEvent } from '@/lib/types'

// GT World Challenge America 2026 — 7 rounds (6 × 3-hour + 1 × 8-hour)
// Source: gt-world-challenge-america.com (official event timetables — GMT column, re-verified Oct 2026)
// Thursday paid test sessions omitted (except Indianapolis 8 Hour, consistent with IGTC data)
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
      { type: 'practice', label: 'Practice 1', startUtc: '2026-04-24T21:20:00Z', durationMinutes: 60 },
      // Saturday 25 Apr
      { type: 'practice', label: 'Practice 2', startUtc: '2026-04-25T15:25:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 3', startUtc: '2026-04-25T19:30:00Z', durationMinutes: 60 },
      // Sunday 26 Apr
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-26T13:45:00Z', durationMinutes: 35 },
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
      { type: 'practice', label: 'Practice 2', startUtc: '2026-05-09T12:50:00Z', durationMinutes: 60 },
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
      { type: 'practice', label: 'Practice 1', startUtc: '2026-06-12T21:05:00Z', durationMinutes: 60 },
      // Saturday 13 Jun
      { type: 'practice', label: 'Practice 2', startUtc: '2026-06-13T14:45:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 3', startUtc: '2026-06-13T17:45:00Z', durationMinutes: 60 },
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-06-13T21:25:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-06-13T21:45:00Z', durationMinutes: 15 },
      // Sunday 14 Jun
      { type: 'endurance', label: '3 Hours of Road Atlanta', startUtc: '2026-06-14T18:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'gtwcam-2026-road-america',
    round: 5,
    name: 'Road America 3 Hours',
    circuitId: 'road-america',
    sessions: [
      // Friday 28 Aug (CDT UTC-5)
      { type: 'practice', label: 'Practice 1', startUtc: '2026-08-28T22:00:00Z', durationMinutes: 60 },
      // Saturday 29 Aug
      { type: 'practice', label: 'Practice 2', startUtc: '2026-08-29T15:55:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 3', startUtc: '2026-08-29T19:25:00Z', durationMinutes: 60 },
      // Sunday 30 Aug
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-08-30T14:10:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-08-30T14:30:00Z', durationMinutes: 15 },
      { type: 'endurance', label: '3 Hours of Road America', startUtc: '2026-08-30T19:00:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'gtwcam-2026-barber',
    round: 6,
    name: 'Barber 3 Hours',
    circuitId: 'barber-motorsports-park',
    sessions: [
      // Friday 25 Sep (CDT UTC-5)
      { type: 'practice', label: 'Practice 1', startUtc: '2026-09-25T21:45:00Z', durationMinutes: 60 },
      // Saturday 26 Sep
      { type: 'practice', label: 'Practice 2', startUtc: '2026-09-26T15:15:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Practice 3', startUtc: '2026-09-26T19:50:00Z', durationMinutes: 60 },
      // Sunday 27 Sep
      { type: 'qualifying', label: 'Qualifying 1', startUtc: '2026-09-27T13:30:00Z', durationMinutes: 15 },
      { type: 'qualifying', label: 'Qualifying 2', startUtc: '2026-09-27T13:50:00Z', durationMinutes: 15 },
      { type: 'endurance', label: '3 Hours of Barber', startUtc: '2026-09-27T17:30:00Z', durationMinutes: 180 },
    ],
  },
  {
    id: 'gtwcam-2026-indianapolis',
    round: 7,
    name: 'Indianapolis 8 Hour',
    circuitId: 'indianapolis-motor-speedway-road-course',
    sessions: [
      // Wednesday 7 Oct (EDT UTC-4) — test session
      { type: 'practice', label: 'Test Session 1', startUtc: '2026-10-07T19:25:00Z', durationMinutes: 60 },
      // Thursday 8 Oct
      { type: 'practice', label: 'Test Session 2', startUtc: '2026-10-08T14:45:00Z', durationMinutes: 60 },
      { type: 'practice', label: 'Free Practice', startUtc: '2026-10-08T23:00:00Z', durationMinutes: 60 },
      // Friday 9 Oct — Q1 15:35 / Q2 15:57 / Q3 16:20 local, Pole Shootout 17:35 local
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-09T19:35:00Z', durationMinutes: 65 },
      { type: 'qualifying', label: 'Pole Shootout', startUtc: '2026-10-09T21:35:00Z', durationMinutes: 30 },
      // Saturday 10 Oct — race 12:30 local = 16:30Z
      { type: 'endurance', label: 'Indianapolis 8 Hour', startUtc: '2026-10-10T16:30:00Z', durationMinutes: 480 },
    ],
  },
]
