import { RaceEvent } from '@/lib/types'

// 2026 Dakar Rally — January 3–17, Saudi Arabia (Yanbu → Yanbu)
// Source: dakar.com, motorsport.com, racingnews365.com
export const dakar2026: RaceEvent[] = [
  {
    id: 'dakar-2026',
    round: 1,
    name: '2026 Dakar Rally',
    circuitId: 'saudi-arabia-dakar',
    sessions: [
      { type: 'stage', label: 'Prologue: Yanbu – Yanbu (23 km SS)', startUtc: '2026-01-03T06:00:00Z', durationMinutes: 120 },
      { type: 'stage', label: 'Stage 1: Yanbu – Yanbu (305 km SS)', startUtc: '2026-01-04T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 2: Yanbu – AlUla (400 km SS)', startUtc: '2026-01-05T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 3: AlUla – AlUla (422 km SS)', startUtc: '2026-01-06T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 4: AlUla – AlUla (451 km SS) [Marathon]', startUtc: '2026-01-07T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 5: AlUla – Hail (356 km SS)', startUtc: '2026-01-08T06:00:00Z', durationMinutes: 420 },
      { type: 'stage', label: 'Stage 6: Hail – Riyadh (331 km SS)', startUtc: '2026-01-09T06:00:00Z', durationMinutes: 480 },
      // Jan 10: Rest day in Riyadh
      { type: 'stage', label: 'Stage 7: Riyadh – Wadi Ad Dawasir (462 km SS)', startUtc: '2026-01-11T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 8: Wadi Ad Dawasir – Wadi Ad Dawasir (481 km SS)', startUtc: '2026-01-12T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 9: Wadi Ad Dawasir – Bisha (418 km SS) [Marathon]', startUtc: '2026-01-13T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 10: Bisha – Bisha (371 km SS)', startUtc: '2026-01-14T06:00:00Z', durationMinutes: 420 },
      { type: 'stage', label: 'Stage 11: Bisha – Al Henakiyah (347 km SS)', startUtc: '2026-01-15T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 12: Al Henakiyah – Yanbu (310 km SS)', startUtc: '2026-01-16T06:00:00Z', durationMinutes: 420 },
      { type: 'stage', label: 'Stage 13: Yanbu – Yanbu (105 km SS)', startUtc: '2026-01-17T06:00:00Z', durationMinutes: 180 },
    ],
  },
]
