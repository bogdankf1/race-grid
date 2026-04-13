import { RaceEvent } from '@/lib/types'

// 2025 Dakar Rally — January 3–17, Saudi Arabia (Bisha → Shubaytah)
// Source: dakar.com, motorsport.com, toyotagazooracing.com, nbcsports.com
export const dakar2025: RaceEvent[] = [
  {
    id: 'dakar-2025',
    round: 1,
    name: '2025 Dakar Rally',
    circuitId: 'saudi-arabia-dakar',
    sessions: [
      { type: 'stage', label: 'Prologue: Bisha – Bisha (29 km SS)', startUtc: '2025-01-03T06:00:00Z', durationMinutes: 120 },
      { type: 'stage', label: 'Stage 1: Bisha – Bisha (413 km SS)', startUtc: '2025-01-04T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 2: Bisha – Bisha (967 km SS) [48H Chrono]', startUtc: '2025-01-05T06:00:00Z', durationMinutes: 1440 },
      { type: 'stage', label: 'Stage 3: Bisha – Al Henakiyah (495 km SS)', startUtc: '2025-01-07T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 4: Al Henakiyah – AlUla (415 km SS) [Marathon]', startUtc: '2025-01-08T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 5: AlUla – Hail (428 km SS)', startUtc: '2025-01-09T06:00:00Z', durationMinutes: 480 },
      // Jan 10: Rest day in Hail
      { type: 'stage', label: 'Stage 6: Hail – Al Duwadimi (604 km SS)', startUtc: '2025-01-11T06:00:00Z', durationMinutes: 540 },
      { type: 'stage', label: 'Stage 7: Al Duwadimi – Al Duwadimi (478 km SS)', startUtc: '2025-01-12T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 8: Al Duwadimi – Riyadh (487 km SS)', startUtc: '2025-01-13T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 9: Riyadh – Haradh (357 km SS)', startUtc: '2025-01-14T06:00:00Z', durationMinutes: 420 },
      { type: 'stage', label: 'Stage 10: Haradh – Shubaytah (120 km SS)', startUtc: '2025-01-15T06:00:00Z', durationMinutes: 240 },
      { type: 'stage', label: 'Stage 11: Shubaytah – Shubaytah (275 km SS)', startUtc: '2025-01-16T06:00:00Z', durationMinutes: 420 },
      { type: 'stage', label: 'Stage 12: Shubaytah – Shubaytah (61 km SS)', startUtc: '2025-01-17T06:00:00Z', durationMinutes: 180 },
    ],
  },
]
