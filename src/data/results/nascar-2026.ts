import type { EventResults } from './types'

// NASCAR 2026 results — verified from nascar.com, motorsport.com
export const nascarResults2026: Record<string, EventResults> = {
  'nascar-2026-daytona-500': {
    qualifying: {
      overall: { driverIds: ['busch'], teamId: 'richard-childress-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['busch'], teamId: 'richard-childress-racing' }] }],
    },
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
    qualifying: {
      overall: { driverIds: ['reddick'], teamId: '23xi-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['reddick'], teamId: '23xi-racing' }] }],
    },
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
    qualifying: {
      overall: { driverIds: ['reddick'], teamId: '23xi-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['reddick'], teamId: '23xi-racing' }] }],
    },
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
    qualifying: {
      overall: { driverIds: ['logano'], teamId: 'team-penske' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['logano'], teamId: 'team-penske' }] }],
    },
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
    qualifying: {
      overall: { driverIds: ['bell'], teamId: 'joe-gibbs-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['bell'], teamId: 'joe-gibbs-racing' }] }],
    },
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
    qualifying: {
      overall: { driverIds: ['reddick'], teamId: '23xi-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['reddick'], teamId: '23xi-racing' }] }],
    },
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
    race: {
      overall: { driverIds: ['elliott'], teamId: 'hendrick-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['elliott'], teamId: 'hendrick-motorsports' },
          { position: 2, driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['logano'], teamId: 'team-penske' },
        ],
      }],
    },
  },
  'nascar-2026-bristol': {
    qualifying: {
      overall: { driverIds: ['blaney'], teamId: 'team-penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['blaney'], teamId: 'team-penske' },
          { position: 2, driverIds: ['reddick'], teamId: '23xi-racing' },
          { position: 3, driverIds: ['briscoe'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
          { position: 2, driverIds: ['blaney'], teamId: 'team-penske' },
          { position: 3, driverIds: ['larson'], teamId: 'hendrick-motorsports' },
        ],
      }],
    },
  },
  'nascar-2026-texas': {
    qualifying: {
      overall: { driverIds: ['hocevar'], teamId: 'spire-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hocevar'], teamId: 'spire-motorsports' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['logano'], teamId: 'team-penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['logano'], teamId: 'team-penske' },
          { position: 2, driverIds: ['chastain'], teamId: 'trackhouse-racing' },
          { position: 3, driverIds: ['blaney'], teamId: 'team-penske' },
        ],
      }],
    },
  },
  'nascar-2026-talladega': {
    qualifying: {
      overall: { driverIds: ['reddick'], teamId: '23xi-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['reddick'], teamId: '23xi-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['hocevar'], teamId: 'spire-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hocevar'], teamId: 'spire-motorsports' },
          { position: 2, driverIds: ['buescher'], teamId: 'rfk-racing' },
          { position: 3, driverIds: ['bowman'], teamId: 'hendrick-motorsports' },
        ],
      }],
    },
  },
  'nascar-2026-kansas': {
    qualifying: {
      overall: { driverIds: ['reddick'], teamId: '23xi-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['reddick'], teamId: '23xi-racing' },
          { position: 2, driverIds: ['hamlin'], teamId: 'joe-gibbs-racing' },
          { position: 3, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['reddick'], teamId: '23xi-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['reddick'], teamId: '23xi-racing' },
          { position: 2, driverIds: ['larson'], teamId: 'hendrick-motorsports' },
          { position: 3, driverIds: ['briscoe'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
  'nascar-2026-watkins-glen': {
    qualifying: {
      overall: { driverIds: ['van-gisbergen'], teamId: 'trackhouse-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['van-gisbergen'], teamId: 'trackhouse-racing' },
          { position: 2, driverIds: ['mcdowell'], teamId: 'spire-motorsports' },
          { position: 3, driverIds: ['cindric'], teamId: 'team-penske' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['van-gisbergen'], teamId: 'trackhouse-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['van-gisbergen'], teamId: 'trackhouse-racing' },
          { position: 2, driverIds: ['mcdowell'], teamId: 'spire-motorsports' },
          { position: 3, driverIds: ['gibbs'], teamId: 'joe-gibbs-racing' },
        ],
      }],
    },
  },
}
