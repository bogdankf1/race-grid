import { RaceEvent } from '@/lib/types'

// 2023 Dakar Rally — December 31, 2022 – January 15, 2023, Saudi Arabia (Sea Camp → Dammam)
// 14 stages + prologue, marathon stages 11-12 in Empty Quarter
// Source: dakar.com, toyotagazooracing.com, motorsport.com
export const dakar2023: RaceEvent[] = [
  {
    id: 'dakar-2023',
    round: 1,
    name: '2023 Dakar Rally',
    circuitId: 'saudi-arabia-dakar',
    sessions: [
      { type: 'stage', label: 'Prologue: Sea Camp – Sea Camp (11 km SS)', startUtc: '2022-12-31T06:00:00Z', durationMinutes: 120 },
      { type: 'stage', label: 'Stage 1: Sea Camp – Sea Camp (367 km SS)', startUtc: '2023-01-01T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 2: Sea Camp – AlUla (430 km SS)', startUtc: '2023-01-02T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 3: AlUla – Ha\'il (447 km SS)', startUtc: '2023-01-03T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 4: Ha\'il – Ha\'il (425 km SS)', startUtc: '2023-01-04T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 5: Ha\'il – Ha\'il (373 km SS)', startUtc: '2023-01-05T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 6: Ha\'il – Al Duwadimi (465 km SS)', startUtc: '2023-01-06T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 7: Al Duwadimi – Al Duwadimi (472 km SS)', startUtc: '2023-01-07T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 8: Al Duwadimi – Riyadh (398 km SS)', startUtc: '2023-01-08T06:00:00Z', durationMinutes: 480 },
      // Jan 9: Rest day in Riyadh
      { type: 'stage', label: 'Stage 9: Riyadh – Haradh (358 km SS)', startUtc: '2023-01-10T06:00:00Z', durationMinutes: 420 },
      { type: 'stage', label: 'Stage 10: Haradh – Shaybah (113 km SS)', startUtc: '2023-01-11T06:00:00Z', durationMinutes: 240 },
      { type: 'stage', label: 'Stage 11: Shaybah – Empty Quarter (275 km SS) [Marathon]', startUtc: '2023-01-12T06:00:00Z', durationMinutes: 420 },
      { type: 'stage', label: 'Stage 12: Empty Quarter – Shaybah (183 km SS) [Marathon]', startUtc: '2023-01-13T06:00:00Z', durationMinutes: 420 },
      { type: 'stage', label: 'Stage 13: Shaybah – Al-Hofuf (154 km SS)', startUtc: '2023-01-14T06:00:00Z', durationMinutes: 240 },
      { type: 'stage', label: 'Stage 14: Al-Hofuf – Dammam (136 km SS)', startUtc: '2023-01-15T06:00:00Z', durationMinutes: 180 },
    ],
  },
]
