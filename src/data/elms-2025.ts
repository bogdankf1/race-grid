import { RaceEvent } from '@/lib/types'

// European Le Mans Series 2025 season calendar — 6 rounds
// Source: europeanlemansseries.com, en.wikipedia.org/wiki/2025_European_Le_Mans_Series — verified March 2026
export const elms2025: RaceEvent[] = [
  {
    id: 'elms-2025-barcelona',
    round: 1,
    name: '4 Hours of Barcelona',
    circuit: 'Circuit de Barcelona-Catalunya',
    country: 'Spain',
    countryCode: 'ES',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2025-04-04T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2025-04-04T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-04-05T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Barcelona', startUtc: '2025-04-06T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2025-le-castellet',
    round: 2,
    name: '4 Hours of Le Castellet',
    circuit: 'Circuit Paul Ricard',
    country: 'France',
    countryCode: 'FR',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2025-05-02T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2025-05-02T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-05-03T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Le Castellet', startUtc: '2025-05-04T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2025-imola',
    round: 3,
    name: '4 Hours of Imola',
    circuit: 'Autodromo Enzo e Dino Ferrari',
    country: 'Italy',
    countryCode: 'IT',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2025-07-04T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2025-07-04T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-07-05T09:00:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Imola', startUtc: '2025-07-06T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2025-spa',
    round: 4,
    name: '4 Hours of Spa',
    circuit: 'Circuit de Spa-Francorchamps',
    country: 'Belgium',
    countryCode: 'BE',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2025-08-22T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2025-08-22T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-08-23T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Spa', startUtc: '2025-08-24T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2025-silverstone',
    round: 5,
    name: 'Goodyear 4 Hours of Silverstone',
    circuit: 'Silverstone Circuit',
    country: 'United Kingdom',
    countryCode: 'GB',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2025-09-12T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2025-09-12T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-09-13T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Silverstone', startUtc: '2025-09-14T10:00:00Z', durationMinutes: 240 },
    ],
  },
  {
    id: 'elms-2025-portimao',
    round: 6,
    name: '4 Hours of Portimão',
    circuit: 'Algarve International Circuit',
    country: 'Portugal',
    countryCode: 'PT',
    sessions: [
      { type: 'practice', label: 'Practice 1', startUtc: '2025-10-16T08:00:00Z', durationMinutes: 90 },
      { type: 'practice', label: 'Practice 2', startUtc: '2025-10-16T13:00:00Z', durationMinutes: 90 },
      { type: 'qualifying', label: 'Qualifying', startUtc: '2025-10-17T09:30:00Z', durationMinutes: 20 },
      { type: 'endurance', label: '4 Hours of Portimão', startUtc: '2025-10-18T10:00:00Z', durationMinutes: 240 },
    ],
  },
]
