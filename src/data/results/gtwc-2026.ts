import type { EventResults } from './types'

export const gtwcResults2026: Record<string, EventResults> = {
  'gtwc-2026-paul-ricard': {
    qualifying: {
      overall: { driverIds: ['stolz'], teamId: 'mann-filter' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['stolz'], teamId: 'mann-filter' },
          { position: 2, driverIds: ['drudi'], teamId: 'comtoyou-racing' },
          { position: 3, driverIds: ['loake'], teamId: 'garage-59' },
        ],
      }],
    },
    endurance: {
      overall: { driverIds: ['sorensen', 'thiim', 'drudi'], teamId: 'comtoyou-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sorensen', 'thiim', 'drudi'], teamId: 'comtoyou-racing' },
          { position: 2, driverIds: ['engel', 'stolz', 'auer'], teamId: 'mann-filter' },
          { position: 3, driverIds: ['goethe', 'prette', 'fleming'], teamId: 'garage-59' },
        ],
      }],
    },
  },
}
