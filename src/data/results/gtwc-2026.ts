import type { EventResults } from './types'

export const gtwcResults2026: Record<string, EventResults> = {
  'gtwc-2026-brands-hatch': {
    qualifying: {
      overall: { driverIds: ['buus', 'feller'], teamId: 'lionspeed' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['buus', 'feller'], teamId: 'lionspeed' },
        ],
      }],
    },
    // Race 1: Buus/Feller (Lionspeed), Race 2: Buus/Feller (Lionspeed)
    race: {
      overall: { driverIds: ['buus', 'feller'], teamId: 'lionspeed' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['buus', 'feller'], teamId: 'lionspeed' },
          { position: 2, driverIds: ['buus', 'feller'], teamId: 'lionspeed' },
        ],
      }],
    },
  },
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
