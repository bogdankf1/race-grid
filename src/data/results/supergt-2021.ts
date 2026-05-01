import type { EventResults } from './types'

// Super GT 2021 results — verified from supergt.net, motorsport.com
// GT500 class winners only (primary class)
// Champion: Sekiguchi/Tsuboi (TGR Team au TOM'S, #36)
export const supergtResults2021: Record<string, EventResults> = {
  'supergt-2021-okayama': {
    race: {
      overall: { driverIds: ['oshima', 'yamashita'], teamId: 'tgr-eneos-rookie' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['oshima', 'yamashita'], teamId: 'tgr-eneos-rookie' },
        ],
      }],
    },
  },
  'supergt-2021-fuji-1': {
    race: {
      overall: { driverIds: ['baguette', 'tsukakoshi'], teamId: 'astemo-honda' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['baguette', 'tsukakoshi'], teamId: 'astemo-honda' },
        ],
      }],
    },
  },
  'supergt-2021-suzuka': {
    race: {
      overall: { driverIds: ['yamamoto', 'makino'], teamId: 'stanley-kunimitsu' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['yamamoto', 'makino'], teamId: 'stanley-kunimitsu' },
        ],
      }],
    },
  },
  'supergt-2021-motegi-1': {
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
  'supergt-2021-sugo': {
    race: {
      overall: { driverIds: ['hiramine', 'matsushita'], teamId: 'team-impul' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['hiramine', 'matsushita'], teamId: 'team-impul' },
        ],
      }],
    },
  },
  'supergt-2021-autopolis': {
    race: {
      overall: { driverIds: ['nojiri', 'fukuzumi'], teamId: 'arta-mugen' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['nojiri', 'fukuzumi'], teamId: 'arta-mugen' },
        ],
      }],
    },
  },
  'supergt-2021-motegi-2': {
    race: {
      overall: { driverIds: ['nojiri', 'fukuzumi'], teamId: 'arta-mugen' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['nojiri', 'fukuzumi'], teamId: 'arta-mugen' },
        ],
      }],
    },
  },
  'supergt-2021-fuji-2': {
    race: {
      overall: { driverIds: ['sekiguchi', 'tsuboi'], teamId: 'tgr-au-toms' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['sekiguchi', 'tsuboi'], teamId: 'tgr-au-toms' },
        ],
      }],
    },
  },
}
