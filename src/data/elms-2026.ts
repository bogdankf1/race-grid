import { RaceEvent } from '@/lib/types'

// European Le Mans Series 2026 season calendar
// Source: europeanlemansseries.com — provisional 2026 schedule
export const elms2026: RaceEvent[] = [
  {
    id: 'elms-2026-barcelona',
    round: 1,
    name: '4 Hours of Barcelona',
    circuit: 'Circuit de Barcelona-Catalunya',
    country: 'Spain',
    countryCode: 'ES',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-04-17T09:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-04-17T14:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-04-18T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Barcelona', startUtc: '2026-04-19T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2026-le-castellet',
    round: 2,
    name: '4 Hours of Le Castellet',
    circuit: 'Circuit Paul Ricard',
    country: 'France',
    countryCode: 'FR',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-05-29T09:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-05-29T14:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-05-30T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Le Castellet', startUtc: '2026-05-31T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2026-imola',
    round: 3,
    name: '4 Hours of Imola',
    circuit: 'Autodromo Enzo e Dino Ferrari',
    country: 'Italy',
    countryCode: 'IT',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-07-10T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-07-10T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-07-11T09:00:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Imola', startUtc: '2026-07-12T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2026-spa',
    round: 4,
    name: '4 Hours of Spa',
    circuit: 'Circuit de Spa-Francorchamps',
    country: 'Belgium',
    countryCode: 'BE',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-09-18T09:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-09-18T14:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-09-19T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Spa', startUtc: '2026-09-20T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2026-portimao',
    round: 5,
    name: '4 Hours of Portimão',
    circuit: 'Algarve International Circuit',
    country: 'Portugal',
    countryCode: 'PT',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2026-10-16T09:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2026-10-16T14:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2026-10-17T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Portimão', startUtc: '2026-10-18T10:00:00Z', durationMinutes: 240 },
    ],
  },
]
