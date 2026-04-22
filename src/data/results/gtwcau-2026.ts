import type { EventResults } from './types'

// GT World Challenge Australia 2026 results
export const gtwcauResults2026: Record<string, EventResults> = {
  'gtwcau-2026-phillip-island': {
    race: {
      overall: { driverIds: ['ojeda', 'lucchitti'], teamId: 'move-my-wheels-tigani' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['ojeda', 'lucchitti'], teamId: 'move-my-wheels-tigani' },
          { position: 2, driverIds: ['evans-j', 'schutte'], teamId: 'arise-racing-gt' },
          { position: 3, driverIds: ['wood', 'brooks'], teamId: 'wolfbrook-motorsport' },
        ],
      }],
    },
  },
}
