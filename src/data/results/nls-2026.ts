import { EventResults } from './types'

// NLS 2026 results — verified from motorsport.com, gpfans.com
// NLS1 was cancelled due to weather conditions
// NLS2: Verstappen/Gounon/Juncadella won on track but were DSQ'd post-race for tyre rule breach
export const nlsResults2026: Record<string, EventResults> = {
  'nls-2026-2': {
    qualifying: {
      overall: { drivers: ['Verstappen'], team: 'Mercedes-AMG Team Verstappen Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Verstappen'], team: 'Mercedes-AMG Team Verstappen Racing' },
          { position: 2, drivers: ['Haase'], team: 'Audi Sport' },
          { position: 3, drivers: ['Marciello'], team: 'ROWE Racing BMW' },
        ],
      }],
    },
    endurance: {
      overall: { drivers: ['Verstappen', 'Gounon', 'Juncadella'], team: 'Mercedes-AMG Team Verstappen Racing' },
    },
  },
}
