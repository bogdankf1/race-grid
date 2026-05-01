import type { EventResults } from './types'

// Super GT 2023 results — verified from supergt.net, motorsport.com
// GT500 class winners only (primary class)
// Champion: Tsuboi/Miyata (TGR Team au TOM'S, #36)
export const supergtResults2023: Record<string, EventResults> = {
  'supergt-2023-okayama': {
    race: {
      overall: { driverIds: ['matsuda', 'quintarelli'], teamId: 'nismo' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['matsuda', 'quintarelli'], teamId: 'nismo' },
        ],
      }],
    },
  },
  'supergt-2023-fuji-1': {
    race: {
      overall: { driverIds: ['tsuboi', 'miyata'], teamId: 'tgr-au-toms' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['tsuboi', 'miyata'], teamId: 'tgr-au-toms' },
        ],
      }],
    },
  },
  'supergt-2023-suzuka-1': {
    race: {
      overall: { driverIds: ['kunimoto', 'sakaguchi'], teamId: 'tgr-wedssport-bandoh' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['kunimoto', 'sakaguchi'], teamId: 'tgr-wedssport-bandoh' },
        ],
      }],
    },
  },
  'supergt-2023-fuji-2': {
    race: {
      overall: { driverIds: ['chiyo', 'takaboshi'], teamId: 'nddp-racing' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['chiyo', 'takaboshi'], teamId: 'nddp-racing' },
        ],
      }],
    },
  },
  'supergt-2023-suzuka-2': {
    race: {
      overall: { driverIds: ['fukuzumi', 'otsu'], teamId: 'arta-mugen' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['fukuzumi', 'otsu'], teamId: 'arta-mugen' },
        ],
      }],
    },
  },
  'supergt-2023-sugo': {
    race: {
      overall: { driverIds: ['nojiri', 'oyu'], teamId: 'arta-mugen' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['nojiri', 'oyu'], teamId: 'arta-mugen' },
        ],
      }],
    },
  },
  'supergt-2023-autopolis': {
    race: {
      overall: { driverIds: ['tsuboi', 'miyata'], teamId: 'tgr-au-toms' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['tsuboi', 'miyata'], teamId: 'tgr-au-toms' },
        ],
      }],
    },
  },
  'supergt-2023-motegi': {
    race: {
      overall: { driverIds: ['tsuboi', 'miyata'], teamId: 'tgr-au-toms' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['tsuboi', 'miyata'], teamId: 'tgr-au-toms' },
        ],
      }],
    },
  },
}
