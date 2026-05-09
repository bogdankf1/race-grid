import type { EventResults } from './types'

export const supergtResults2026: Record<string, EventResults> = {
  'supergt-2026-okayama': {
    qualifying: {
      overall: { driverIds: ['oyu', 'r-kobayashi'], teamId: 'keeper-cerumo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['oyu', 'r-kobayashi'], teamId: 'keeper-cerumo' },
          { position: 2, driverIds: ['tsuboi', 'yamashita'], teamId: 'tgr-au-toms' },
          { position: 3, driverIds: ['kotaka', 'koyama'], teamId: 'apr' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['oyu', 'r-kobayashi'], teamId: 'keeper-cerumo' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['oyu', 'r-kobayashi'], teamId: 'keeper-cerumo' }] }],
    },
  },
  'supergt-2026-fuji-1': {
    qualifying: {
      overall: { driverIds: ['fukuzumi', 'oshima'], teamId: 'tgr-eneos-rookie' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fukuzumi', 'oshima'], teamId: 'tgr-eneos-rookie' },
          { position: 2, driverIds: ['tsuboi', 'yamashita'], teamId: 'tgr-au-toms' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['tsuboi', 'yamashita'], teamId: 'tgr-au-toms' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['tsuboi', 'yamashita'], teamId: 'tgr-au-toms' },
          { position: 2, driverIds: ['fukuzumi', 'oshima'], teamId: 'tgr-eneos-rookie' },
          { position: 3, driverIds: ['chiyo', 'takaboshi'], teamId: 'nismo' },
        ],
      }],
    },
  },
}
