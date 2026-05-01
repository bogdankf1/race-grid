import type { EventResults } from './types'

// Super GT 2024 results — verified from supergt.net, motorsport.com
// GT500 class winners only (primary class)
// Champion: Tsuboi/Yamashita (TGR Team au TOM'S, #36)
export const supergtResults2024: Record<string, EventResults> = {
  'supergt-2024-okayama': {
    race: {
      overall: { driverIds: ['tsuboi', 'yamashita'], teamId: 'tgr-au-toms' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['tsuboi', 'yamashita'], teamId: 'tgr-au-toms' },
        ],
      }],
    },
  },
  'supergt-2024-fuji-1': {
    race: {
      overall: { driverIds: ['takaboshi', 'miyake'], teamId: 'nddp-racing' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['takaboshi', 'miyake'], teamId: 'nddp-racing' },
        ],
      }],
    },
  },
  'supergt-2024-suzuka-1': {
    race: {
      overall: { driverIds: ['sasahara', 'alesi'], teamId: 'tgr-deloitte-toms' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['sasahara', 'alesi'], teamId: 'tgr-deloitte-toms' },
        ],
      }],
    },
  },
  'supergt-2024-fuji-2': {
    race: {
      overall: { driverIds: ['nojiri', 'matsushita'], teamId: 'arta-mugen' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['nojiri', 'matsushita'], teamId: 'arta-mugen' },
        ],
      }],
    },
  },
  'supergt-2024-sugo': {
    race: {
      overall: { driverIds: ['sasahara', 'alesi'], teamId: 'tgr-deloitte-toms' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['sasahara', 'alesi'], teamId: 'tgr-deloitte-toms' },
        ],
      }],
    },
  },
  'supergt-2024-autopolis': {
    race: {
      overall: { driverIds: ['sekiguchi', 'nakayama'], teamId: 'tgr-sard' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['sekiguchi', 'nakayama'], teamId: 'tgr-sard' },
        ],
      }],
    },
  },
  'supergt-2024-motegi': {
    race: {
      overall: { driverIds: ['tsuboi', 'yamashita'], teamId: 'tgr-au-toms' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['tsuboi', 'yamashita'], teamId: 'tgr-au-toms' },
        ],
      }],
    },
  },
  'supergt-2024-suzuka-2': {
    race: {
      overall: { driverIds: ['tsuboi', 'yamashita'], teamId: 'tgr-au-toms' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['tsuboi', 'yamashita'], teamId: 'tgr-au-toms' },
        ],
      }],
    },
  },
}
