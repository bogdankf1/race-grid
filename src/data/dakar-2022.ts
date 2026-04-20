import { RaceEvent } from '@/lib/types'

// 2022 Dakar Rally — January 1–14, Saudi Arabia (Jeddah → Jeddah)
// Prologue (Stage 1A) + 12 stages, rest day Jan 8 in Riyadh
// Source: dakar.com, toyotagazooracing.com, motorsport.com
export const dakar2022: RaceEvent[] = [
  {
    id: 'dakar-2022',
    round: 1,
    name: '2022 Dakar Rally',
    circuitId: 'saudi-arabia-dakar',
    sessions: [
      { type: 'stage', label: 'Prologue: Jeddah – Ha\'il (19 km SS)', startUtc: '2022-01-01T06:00:00Z', durationMinutes: 120 },
      { type: 'stage', label: 'Stage 1B: Ha\'il – Ha\'il (333 km SS)', startUtc: '2022-01-02T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 2: Ha\'il – Al Artawiyah (338 km SS)', startUtc: '2022-01-03T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 3: Al Artawiyah – Al Qaysumah (255 km SS)', startUtc: '2022-01-04T06:00:00Z', durationMinutes: 420 },
      { type: 'stage', label: 'Stage 4: Al Qaysumah – Riyadh (465 km SS)', startUtc: '2022-01-05T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 5: Riyadh – Riyadh (395 km SS)', startUtc: '2022-01-06T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 6: Riyadh – Riyadh (348 km SS)', startUtc: '2022-01-07T06:00:00Z', durationMinutes: 480 },
      // Jan 8: Rest day in Riyadh
      { type: 'stage', label: 'Stage 7: Riyadh – Al Dawadimi (402 km SS)', startUtc: '2022-01-09T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 8: Al Dawadimi – Wadi Ad Dawasir (394 km SS)', startUtc: '2022-01-10T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 9: Wadi Ad Dawasir – Wadi Ad Dawasir (287 km SS)', startUtc: '2022-01-11T06:00:00Z', durationMinutes: 420 },
      { type: 'stage', label: 'Stage 10: Wadi Ad Dawasir – Bisha (375 km SS)', startUtc: '2022-01-12T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 11: Bisha – Bisha (346 km SS) [Marathon]', startUtc: '2022-01-13T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 12: Bisha – Jeddah (164 km SS)', startUtc: '2022-01-14T06:00:00Z', durationMinutes: 180 },
    ],
  },
]
