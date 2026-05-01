import type { EventResults } from './types'

// Super GT 2022 results — verified from supergt.net, motorsport.com
// GT500 class winners only (primary class)
// Champion: Hiramine/Baguette (Team Impul, #12)
export const supergtResults2022: Record<string, EventResults> = {
  'supergt-2022-okayama': {
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
  'supergt-2022-fuji-1': {
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
  'supergt-2022-suzuka-1': {
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
  'supergt-2022-fuji-2': {
    race: {
      overall: { driverIds: ['fenestraz', 'miyata'], teamId: 'tgr-deloitte-toms' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['fenestraz', 'miyata'], teamId: 'tgr-deloitte-toms' },
        ],
      }],
    },
  },
  'supergt-2022-suzuka-2': {
    race: {
      overall: { driverIds: ['hiramine', 'baguette'], teamId: 'team-impul' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['hiramine', 'baguette'], teamId: 'team-impul' },
        ],
      }],
    },
  },
  'supergt-2022-sugo': {
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
  'supergt-2022-autopolis': {
    race: {
      overall: { driverIds: ['tsukakoshi', 'matsushita'], teamId: 'astemo-honda' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['tsukakoshi', 'matsushita'], teamId: 'astemo-honda' },
        ],
      }],
    },
  },
  'supergt-2022-motegi': {
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
}
