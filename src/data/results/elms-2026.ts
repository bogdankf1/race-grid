import type { EventResults } from './types'

export const elmsResults2026: Record<string, EventResults> = {
  'elms-2026-barcelona': {
    qualifying: {
      overall: { driverIds: ['de-gerus'], teamId: 'inter-europol' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['de-gerus'], teamId: 'inter-europol' }] }],
    },
    endurance: {
      overall: { driverIds: ['masson', 'gray', 'rousset'], teamId: 'forestier-racing-panis' },
      classes: [{
        className: 'LMP2',
        podium: [
          { position: 1, driverIds: ['masson', 'gray', 'rousset'], teamId: 'forestier-racing-panis' },
          { position: 2, driverIds: ['de-gerus'], teamId: 'inter-europol' },
          { position: 3, driverIds: ['hanley'], teamId: 'united-autosports' },
        ],
      }],
    },
  },
}
