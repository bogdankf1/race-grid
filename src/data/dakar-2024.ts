import { RaceEvent } from '@/lib/types'

// 2024 Dakar Rally — January 5–19, Saudi Arabia (AlUla → Yanbu)
// 48h Chrono stage (Stage 6) spans Jan 11-12 in the Empty Quarter
// Source: dakar.com, toyotagazooracing.com, motorsport.com
export const dakar2024: RaceEvent[] = [
  {
    id: 'dakar-2024',
    round: 1,
    name: '2024 Dakar Rally',
    circuitId: 'saudi-arabia-dakar',
    sessions: [
      { type: 'stage', label: 'Prologue: AlUla – AlUla (27 km SS)', startUtc: '2024-01-05T06:00:00Z', durationMinutes: 120 },
      { type: 'stage', label: 'Stage 1: AlUla – Al Henakiyah (414 km SS)', startUtc: '2024-01-06T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 2: Al Henakiyah – Al Duwadimi (463 km SS)', startUtc: '2024-01-07T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 3: Al Duwadimi – Al Salamiya (438 km SS)', startUtc: '2024-01-08T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 4: Al Salamiya – Al-Hofuf (415 km SS)', startUtc: '2024-01-09T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 5: Al-Hofuf – Shubaytah (382 km SS)', startUtc: '2024-01-10T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 6: Shubaytah – Shubaytah (584 km SS) [48H Chrono]', startUtc: '2024-01-11T06:00:00Z', durationMinutes: 1440 },
      // Jan 13: Rest day in Riyadh
      { type: 'stage', label: 'Stage 7: Riyadh – Al Duwadimi (487 km SS)', startUtc: '2024-01-14T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 8: Al Duwadimi – Hail (487 km SS)', startUtc: '2024-01-15T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 9: Hail – AlUla (434 km SS)', startUtc: '2024-01-16T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 10: AlUla – AlUla (390 km SS)', startUtc: '2024-01-17T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 11: AlUla – Yanbu (480 km SS)', startUtc: '2024-01-18T06:00:00Z', durationMinutes: 480 },
      { type: 'stage', label: 'Stage 12: Yanbu – Yanbu (175 km SS)', startUtc: '2024-01-19T06:00:00Z', durationMinutes: 180 },
    ],
  },
]
