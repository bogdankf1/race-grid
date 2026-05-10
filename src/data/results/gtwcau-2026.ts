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
  'gtwcau-2026-the-bend': {
    qualifying: {
      overall: { driverIds: ['pires-s', 'leitch'], teamId: 'geyer-valmont-tigani' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pires-s', 'leitch'], teamId: 'geyer-valmont-tigani' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['leitch', 'pires-s'], teamId: 'geyer-valmont-tigani' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['leitch', 'pires-s'], teamId: 'geyer-valmont-tigani' },
          { position: 2, driverIds: ['randle', 'rosser'], teamId: 'castrol-team-brm' },
          { position: 3, driverIds: ['evans-j', 'schutte'], teamId: 'argt' },
        ],
      }],
    },
  },
}
