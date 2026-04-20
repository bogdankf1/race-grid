import { RaceEvent } from '@/lib/types'

// 2021 Dakar Rally — January 3–15, Saudi Arabia (Jeddah → Jeddah)
// Prologue Jan 2 + 12 stages, rest day Jan 9 in Ha'il
// Source: dakar.com, toyotagazooracing.com, nbcsports.com
export const dakar2021: RaceEvent[] = [
  {
    id: 'dakar-2021',
    round: 1,
    name: '2021 Dakar Rally',
    circuitId: 'saudi-arabia-dakar',
    sessions: [
      { type: 'stage', label: 'Prologue: Jeddah – Jeddah (11 km SS)', startUtc: '2021-01-02T06:00:00Z', durationMinutes: 120 },
      { type: 'stage', label: 'Stage 1: Jeddah – Bisha (277 km SS)', startUtc: '2021-01-03T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 2: Bisha – Wadi Ad-Dawasir (457 km SS)', startUtc: '2021-01-04T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 3: Wadi Ad-Dawasir – Wadi Ad-Dawasir (403 km SS)', startUtc: '2021-01-05T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 4: Wadi Ad-Dawasir – Riyadh (337 km SS)', startUtc: '2021-01-06T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 5: Riyadh – Buraydah (419 km SS)', startUtc: '2021-01-07T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 6: Buraydah – Ha\'il (485 km SS)', startUtc: '2021-01-08T06:00:00Z', durationMinutes: 480 },
      // Jan 9: Rest day in Ha'il
      { type: 'stage', label: 'Stage 7: Ha\'il – Sakaka (471 km SS)', startUtc: '2021-01-10T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 8: Sakaka – Neom (375 km SS)', startUtc: '2021-01-11T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 9: Neom – Neom (465 km SS)', startUtc: '2021-01-12T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 10: Neom – AlUla (342 km SS)', startUtc: '2021-01-13T06:00:00Z', durationMinutes: 420 },
      { type: 'stage', label: 'Stage 11: AlUla – Yanbu (511 km SS)', startUtc: '2021-01-14T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 12: Yanbu – Jeddah (225 km SS)', startUtc: '2021-01-15T06:00:00Z', durationMinutes: 180 },
    ],
  },
]
