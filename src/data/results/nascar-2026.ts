import type { EventResults } from './types'

// NASCAR 2026 results — verified from nascar.com, motorsport.com
export const nascarResults2026: Record<string, EventResults> = {
  'nascar-2026-daytona-500': {
    race: {
      overall: { driverIds: ['reddick'], teamId: '23xi-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['reddick'], teamId: '23xi-racing' },
          { position: 2, driverIds: ['stenhouse-jr'], teamId: 'jtg-daugherty-racing' },
          { position: 3, driverIds: ['logano'], teamId: 'team-penske' },
        ],
      }],
    },
  },
  'nascar-2026-atlanta': {
    race: {
      overall: { driverIds: ['reddick'], teamId: '23xi-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['reddick'], teamId: '23xi-racing' },
          { position: 2, driverIds: ['briscoe'], teamId: 'stewart-haas-racing' },
          { position: 3, driverIds: ['chastain'], teamId: 'trackhouse-racing' },
        ],
      }],
    },
  },
  'nascar-2026-cota': {
    race: {
      overall: { driverIds: ['reddick'], teamId: '23xi-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['reddick'], teamId: '23xi-racing' },
          { position: 2, driverIds: ['van-gisbergen'], teamId: 'trackhouse-racing' },
          { position: 3, driverIds: ['bell'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-2026-phoenix': {
    race: {
      overall: { driverIds: ['blaney'], teamId: 'team-penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['blaney'], teamId: 'team-penske' },
          { position: 2, driverIds: ['bell'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['larson'], teamId: 'hendrick-motorsports' },
        ],
      }],
    },
  },
  'nascar-2026-las-vegas': {
    race: {
      overall: { driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['elliott'], teamId: 'hendrick-motorsports' },
          { position: 3, driverIds: ['byron'], teamId: 'hendrick-motorsports' },
        ],
      }],
    },
  },
  'nascar-2026-darlington': {
    race: {
      overall: { driverIds: ['reddick'], teamId: '23xi-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['reddick'], teamId: '23xi-racing' },
          { position: 2, driverIds: ['keselowski'], teamId: 'rfk-racing' },
          { position: 3, driverIds: ['blaney'], teamId: 'team-penske' },
        ],
      }],
    },
  },
  'nascar-2026-martinsville': {
    qualifying: {
      overall: { driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['byron'], teamId: 'hendrick-motorsports' },
          { position: 3, driverIds: ['berry'], teamId: 'stewart-haas-racing' },
        ],
      }],
    },
  },
}
