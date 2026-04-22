import type { EventResults } from './types'

// GT World Challenge America 2026 results
export const gtwcamResults2026: Record<string, EventResults> = {
  'gtwcam-2026-sonoma': {
    qualifying: {
      overall: { driverIds: ['stephens', 'grenier'], teamId: 'jmf-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['stephens', 'grenier'], teamId: 'jmf-motorsports' },
        ],
      }],
    },
    endurance: {
      overall: { driverIds: ['stephens', 'grenier'], teamId: 'jmf-motorsports' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['stephens', 'grenier'], teamId: 'jmf-motorsports' },
          { position: 2, driverIds: ['perez-companc', 'schandorff'], teamId: 'af-corse-usa' },
          { position: 3, driverIds: ['washington-k', 'sargent-t'], teamId: 'gmg-racing' },
        ],
      }],
    },
  },
}
