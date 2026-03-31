import type { EventResults } from './types'

// Super GT 2025 results — verified from supergt.net, motorsport.com, dailysportscar.com
// GT500 class winners only (primary class)
export const supergtResults2025: Record<string, EventResults> = {
  'supergt-2025-okayama': {
    qualifying: {
      overall: { driverIds: ['fukuzumi'], teamId: 'tgr-eneos-rookie' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['fukuzumi'], teamId: 'tgr-eneos-rookie' }] }],
    },
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
  'supergt-2025-fuji-1': {
    qualifying: {
      overall: { driverIds: ['ishiura', 'oyu'], teamId: 'keeper-cerumo' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['ishiura', 'oyu'], teamId: 'keeper-cerumo' }] }],
    },
    race: {
      overall: { driverIds: ['ishiura', 'oyu'], teamId: 'keeper-cerumo' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['ishiura', 'oyu'], teamId: 'keeper-cerumo' },
        ],
      }],
    },
  },
  'supergt-2025-sepang': {
    qualifying: {
      overall: { driverIds: ['kunimoto'], teamId: 'tgr-wedssport-bandoh' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['kunimoto'], teamId: 'tgr-wedssport-bandoh' }] }],
    },
    race: {
      overall: { driverIds: ['alesi', 'sasahara'], teamId: 'tgr-deloitte-toms' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['alesi', 'sasahara'], teamId: 'tgr-deloitte-toms' },
        ],
      }],
    },
  },
  'supergt-2025-fuji-2': {
    qualifying: {
      overall: { driverIds: ['ishiura', 'oyu'], teamId: 'keeper-cerumo' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['ishiura', 'oyu'], teamId: 'keeper-cerumo' }] }],
    },
    // Sprint format — Race 2 GT500 winner: Fukuzumi
    race: {
      overall: { driverIds: ['fukuzumi'], teamId: 'eneos-x-prime' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['fukuzumi'], teamId: 'eneos-x-prime' },
          { position: 2, driverIds: ['yamashita'], teamId: 'tgr-au-toms' },
          { position: 3, driverIds: ['ishiura'], teamId: 'keeper-cerumo' },
        ],
      }],
    },
  },
  'supergt-2025-suzuka': {
    qualifying: {
      overall: { driverIds: ['otsu', 'sato'], teamId: 'arta-mugen' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['otsu', 'sato'], teamId: 'arta-mugen' }] }],
    },
    race: {
      // #23 NISMO Z won
      overall: { driverIds: ['matsuda', 'quintarelli'], teamId: 'nismo' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['matsuda', 'quintarelli'], teamId: 'nismo' },
        ],
      }],
    },
  },
  'supergt-2025-sugo': {
    qualifying: {
      overall: { driverIds: ['otsu', 'sato'], teamId: 'arta-mugen' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['otsu', 'sato'], teamId: 'arta-mugen' }] }],
    },
    race: {
      overall: { driverIds: ['matsuda', 'natori'], teamId: 'kondo-racing-nissan' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['matsuda', 'natori'], teamId: 'kondo-racing-nissan' },
          { position: 2, driverIds: ['sekiguchi', 'fenestraz'], teamId: 'denso-kobelco-sard' },
          { position: 3, driverIds: ['tsukakoshi', 'koide'], teamId: 'astemo-honda' },
        ],
      }],
    },
  },
  'supergt-2025-autopolis': {
    qualifying: {
      overall: { driverIds: ['sasaki', 'miyake'], teamId: 'nddp-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['sasaki', 'miyake'], teamId: 'nddp-racing' }] }],
    },
    race: {
      // Stanley Team Kunimitsu Honda Civic won
      overall: { driverIds: ['yamamoto', 'makino'], teamId: 'stanley-kunimitsu' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['yamamoto', 'makino'], teamId: 'stanley-kunimitsu' },
        ],
      }],
    },
  },
  'supergt-2025-motegi': {
    qualifying: {
      overall: { driverIds: ['ishiura', 'oyu'], teamId: 'keeper-cerumo' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['ishiura', 'oyu'], teamId: 'keeper-cerumo' }] }],
    },
    race: {
      // #100 STANLEY CIVIC TYPE R-GT won again, Honda 1-2-3
      overall: { driverIds: ['yamamoto', 'makino'], teamId: 'stanley-kunimitsu' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, driverIds: ['yamamoto', 'makino'], teamId: 'stanley-kunimitsu' },
          { position: 2, driverIds: ['izawa', 'okusa'], teamId: 'modulo-honda' },
          { position: 3, driverIds: ['otsu', 'sato'], teamId: 'arta-mugen' },
        ],
      }],
    },
  },
}
