import type { EventResults } from './types'

// IMSA 2026 results — verified from imsa.com, motorsport.com
export const imsaResults2026: Record<string, EventResults> = {
  'imsa-2026-daytona': {
    qualifying: {
      overall: { driverIds: ['bamber'], teamId: 'meyer-shank-racing' },
      classes: [{
        className: 'GTP',
        podium: [
          { position: 1, driverIds: ['bamber'], teamId: 'meyer-shank-racing' },
          { position: 2, driverIds: ['aitken'], teamId: 'wayne-taylor-racing' },
          { position: 3, driverIds: ['nasr'], teamId: 'porsche-penske' },
        ],
      }],
    },
    endurance: {
      overall: { driverIds: ['nasr', 'andlauer', 'heinrich'], teamId: 'porsche-penske' },
      classes: [
        {
          className: 'GTP',
          podium: [
            { position: 1, driverIds: ['nasr', 'andlauer', 'heinrich'], teamId: 'porsche-penske' },
            { position: 2, driverIds: ['aitken'], teamId: 'whelen-engineering' },
            { position: 3, driverIds: ['farfus'], teamId: 'team-wrt' },
          ],
        },
        {
          className: 'LMP2',
          podium: [
            { position: 1, driverIds: ['kurtz', 'quinn', 'sowery', 'jakobsen'], teamId: 'crowdstrike-racing' },
          ],
        },
        {
          className: 'GTD Pro',
          podium: [
            { position: 1, driverIds: ['verhagen', 'de-phillippi', 'hesse', 'harper'], teamId: 'paul-miller-racing' },
          ],
        },
        {
          className: 'GTD',
          podium: [
            { position: 1, driverIds: ['ellis', 'ward', 'dontje', 'auer'], teamId: 'winward-racing' },
          ],
        },
      ],
    },
  },
  'imsa-2026-sebring': {
    qualifying: {
      overall: { driverIds: ['aitken'], teamId: 'whelen-engineering' },
      classes: [{
        className: 'GTP',
        podium: [
          { position: 1, driverIds: ['aitken'], teamId: 'whelen-engineering' },
          { position: 2, driverIds: ['blomqvist'], teamId: 'meyer-shank-racing' },
          { position: 3, driverIds: ['albuquerque'], teamId: 'wayne-taylor-racing' },
        ],
      }],
    },
    endurance: {
      overall: { driverIds: ['nasr', 'andlauer', 'heinrich'], teamId: 'porsche-penske' },
      classes: [
        {
          className: 'GTP',
          podium: [
            { position: 1, driverIds: ['nasr', 'andlauer', 'heinrich'], teamId: 'porsche-penske' },
            { position: 2, driverIds: ['estre'], teamId: 'porsche-penske' },
          ],
        },
      ],
    },
  },
  'imsa-2026-long-beach': {
    qualifying: {
      overall: { driverIds: ['yelloly'], teamId: 'meyer-shank-racing' },
      classes: [{
        className: 'GTP',
        podium: [
          { position: 1, driverIds: ['yelloly'], teamId: 'meyer-shank-racing' },
          { position: 2, driverIds: ['wittmann'], teamId: 'team-wrt' },
          { position: 3, driverIds: ['deletraz'], teamId: 'wayne-taylor-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['van-der-zande', 'yelloly'], teamId: 'meyer-shank-racing' },
      classes: [
        {
          className: 'GTP',
          podium: [
            { position: 1, driverIds: ['van-der-zande', 'yelloly'], teamId: 'meyer-shank-racing' },
            { position: 2, driverIds: ['aitken', 'vesti'], teamId: 'action-express-racing' },
            { position: 3, driverIds: ['vanthoor', 'estre'], teamId: 'porsche-penske' },
          ],
        },
        {
          className: 'GTD',
          podium: [
            { position: 1, driverIds: ['telitz', 'pedersen'], teamId: 'vasser-sullivan' },
          ],
        },
      ],
    },
  },
}
