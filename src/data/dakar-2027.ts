import { RaceEvent } from '@/lib/types'

// 2027 Dakar Rally — January 1–15, Saudi Arabia (KAEC → KAEC), route announced by the organiser
// Source: dakar.com/en/overall-route. Daily start times are not published yet — all stages are TBA
// with a 06:00 UTC placeholder (as in previous editions).
export const dakar2027: RaceEvent[] = [
  {
    id: 'dakar-2027',
    round: 1,
    name: '2027 Dakar Rally',
    circuitId: 'saudi-arabia-dakar',
    sessions: [
      { type: 'stage', label: 'Prologue: KAEC – KAEC (30 km SS)', startUtc: '2027-01-01T06:00:00Z', durationMinutes: 120, tba: true },
      { type: 'stage', label: 'Stage 1: KAEC – Yanbu (350 km)', startUtc: '2027-01-02T06:00:00Z', durationMinutes: 480, tba: true },
      { type: 'stage', label: 'Stage 2: Yanbu – AlUla (310 km)', startUtc: '2027-01-03T06:00:00Z', durationMinutes: 480, tba: true },
      { type: 'stage', label: 'Stage 3: AlUla – Hail (480 km)', startUtc: '2027-01-04T06:00:00Z', durationMinutes: 480, tba: true },
      { type: 'stage', label: 'Stage 4: Hail – Hail (380 km)', startUtc: '2027-01-05T06:00:00Z', durationMinutes: 480, tba: true },
      { type: 'stage', label: 'Stage 5: Hail – Al Duwadimi (480 km)', startUtc: '2027-01-06T06:00:00Z', durationMinutes: 480, tba: true },
      { type: 'stage', label: 'Stage 6: Al Duwadimi – Marathon Refuge (440 km) [Marathon]', startUtc: '2027-01-07T06:00:00Z', durationMinutes: 480, tba: true },
      { type: 'stage', label: 'Stage 7: Marathon Refuge – Bisha (430 km) [Marathon]', startUtc: '2027-01-08T06:00:00Z', durationMinutes: 480, tba: true },
      // Jan 9: Rest day in Bisha
      { type: 'stage', label: 'Stage 8: Bisha – Bisha (460 km)', startUtc: '2027-01-10T06:00:00Z', durationMinutes: 480, tba: true },
      { type: 'stage', label: 'Stage 9: Bisha – Wadi Ad-Dawasir (460 km)', startUtc: '2027-01-11T06:00:00Z', durationMinutes: 480, tba: true },
      { type: 'stage', label: 'Stage 10: Wadi Ad-Dawasir – Bisha (515 km)', startUtc: '2027-01-12T06:00:00Z', durationMinutes: 480, tba: true },
      { type: 'stage', label: 'Stage 11: Bisha – Al Bahah (480 km) [Marathon]', startUtc: '2027-01-13T06:00:00Z', durationMinutes: 480, tba: true },
      { type: 'stage', label: 'Stage 12: Al Bahah – KAEC (455 km) [Marathon]', startUtc: '2027-01-14T06:00:00Z', durationMinutes: 480, tba: true },
      { type: 'stage', label: 'Stage 13: KAEC – KAEC (50 km)', startUtc: '2027-01-15T06:00:00Z', durationMinutes: 120, tba: true },
    ],
  },
]
