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
  'elms-2026-le-castellet': {
    qualifying: {
      overall: { driverIds: ['masson'], teamId: 'forestier-racing-panis' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['masson'], teamId: 'forestier-racing-panis' },
          { position: 2, driverIds: ['saucy'], teamId: 'united-autosports' },
        ],
      }],
    },
    endurance: {
      overall: { driverIds: ['peebles', 'saucy', 'hanley'], teamId: 'united-autosports' },
      classes: [
        {
          className: 'LMP2',
          podium: [
            { position: 1, driverIds: ['peebles', 'saucy', 'hanley'], teamId: 'united-autosports' },
          ],
        },
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['bukhantsov', 'chou', 'cubides-olarte'], teamId: 'inter-europol' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['jaubert-m', 'serra', 't-kimura'], teamId: 'kessel-racing' },
          ],
        },
      ],
    },
  },
}
