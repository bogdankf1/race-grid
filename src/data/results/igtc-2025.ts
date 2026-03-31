import type { EventResults } from './types'

// IGTC 2025 results — verified from intercontinentalgtchallenge.com, sportscar365.com, motorsport.com
export const igtcResults2025: Record<string, EventResults> = {
  'igtc-2025-bathurst': {
    qualifying: {
      overall: { driverIds: ['auer', 'goetz', 'ojeda'], teamId: 'craft-bamboo' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['auer', 'goetz', 'ojeda'], teamId: 'craft-bamboo' }] }],
    },
    endurance: {
      overall: { driverIds: ['k-van-der-linde', 's-van-der-linde', 'farfus'], teamId: 'team-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['k-van-der-linde', 's-van-der-linde', 'farfus'], teamId: 'team-wrt' },
          { position: 2, driverIds: ['marciello'], teamId: 'team-wrt' },
          { position: 3, driverIds: ['gounon'], teamId: 'sunenergy1-racing' },
        ],
      }],
    },
  },
  'igtc-2025-nurburgring': {
    qualifying: {
      overall: { driverIds: ['estre', 'preining', 'guven'], teamId: 'manthey' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['estre', 'preining', 'guven'], teamId: 'manthey' }] }],
    },
    // N24 — ROWE Racing BMW won after Manthey Porsche post-race penalty
    endurance: {
      overall: { driverIds: ['farfus', 'krohn', 'marciello', 'k-van-der-linde'], teamId: 'rowe-racing' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['farfus', 'krohn', 'marciello', 'k-van-der-linde'], teamId: 'rowe-racing' },
        ],
      }],
    },
  },
  'igtc-2025-spa': {
    qualifying: {
      overall: { driverIds: ['kirchhofer'], teamId: 'garage-59' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['kirchhofer'], teamId: 'garage-59' }] }],
    },
    // 24 Hours of Spa — also counts as GTWC Endurance
    endurance: {
      overall: { driverIds: ['bortolotti', 'pepper', 'engstler'], teamId: 'grasser-racing' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['bortolotti', 'pepper', 'engstler'], teamId: 'grasser-racing' },
        ],
      }],
    },
  },
  'igtc-2025-suzuka': {
    qualifying: {
      overall: { driverIds: ['k-van-der-linde', 'marciello', 'weerts'], teamId: 'team-wrt' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['k-van-der-linde', 'marciello', 'weerts'], teamId: 'team-wrt' }] }],
    },
    endurance: {
      overall: { driverIds: ['k-van-der-linde', 'marciello', 'weerts'], teamId: 'team-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['k-van-der-linde', 'marciello', 'weerts'], teamId: 'team-wrt' },
        ],
      }],
    },
  },
  'igtc-2025-indianapolis': {
    qualifying: {
      overall: { driverIds: ['gounon', 'martin', 'hodenius'], teamId: 'lone-star-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['gounon', 'martin', 'hodenius'], teamId: 'lone-star-racing' }] }],
    },
    endurance: {
      overall: { driverIds: ['k-van-der-linde', 'rossi', 'weerts'], teamId: 'team-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['k-van-der-linde', 'rossi', 'weerts'], teamId: 'team-wrt' },
        ],
      }],
    },
  },
}
