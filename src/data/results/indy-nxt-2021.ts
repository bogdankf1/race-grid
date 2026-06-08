import type { EventResults } from './types'

// Indy Lights 2021 results — full season (20 races / 10 weekends)
// Sources: indylights.com archives, Wikipedia "2021 Indy Lights",
// motorsport.com/indylights/results/2021. Verified 2026-06-07.
// Only race podiums and pole sitters are recorded. Champion Kyle Kirkwood took 10 wins.
export const indyNxtResults2021: Record<string, EventResults> = {
  'indy-nxt-2021-barber-1': {
    qualifying: {
      overall: { driverIds: ['lundqvist'], teamId: 'global-racing-group' },
    },
    race: {
      overall: { driverIds: ['lundqvist'], teamId: 'global-racing-group' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lundqvist'], teamId: 'global-racing-group' },
          { position: 2, driverIds: ['frost'], teamId: 'andretti-autosport' },
          { position: 3, driverIds: ['megennis'], teamId: 'andretti-autosport' },
        ],
      }],
    },
  },
  'indy-nxt-2021-barber-2': {
    qualifying: {
      overall: { driverIds: ['malukas'], teamId: 'hmd-motorsports' },
    },
    race: {
      overall: { driverIds: ['malukas'], teamId: 'hmd-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['malukas'], teamId: 'hmd-motorsports' },
          { position: 2, driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
          { position: 3, driverIds: ['pedersen-b'], teamId: 'global-racing-group' },
        ],
      }],
    },
  },
  'indy-nxt-2021-st-petersburg-1': {
    qualifying: {
      overall: { driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
    },
    race: {
      overall: { driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
          { position: 2, driverIds: ['sowery-t'], teamId: 'juncos-racing' },
          { position: 3, driverIds: ['bogle'], teamId: 'carlin' },
        ],
      }],
    },
  },
  'indy-nxt-2021-st-petersburg-2': {
    qualifying: {
      overall: { driverIds: ['malukas'], teamId: 'hmd-motorsports' },
    },
    race: {
      overall: { driverIds: ['malukas'], teamId: 'hmd-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['malukas'], teamId: 'hmd-motorsports' },
          { position: 2, driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
          { position: 3, driverIds: ['robb'], teamId: 'juncos-racing' },
        ],
      }],
    },
  },
  'indy-nxt-2021-indianapolis-gp-1': {
    qualifying: {
      overall: { driverIds: ['lundqvist'], teamId: 'global-racing-group' },
    },
    race: {
      overall: { driverIds: ['lundqvist'], teamId: 'global-racing-group' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lundqvist'], teamId: 'global-racing-group' },
          { position: 2, driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
          { position: 3, driverIds: ['pedersen-b'], teamId: 'global-racing-group' },
        ],
      }],
    },
  },
  'indy-nxt-2021-indianapolis-gp-2': {
    qualifying: {
      overall: { driverIds: ['malukas'], teamId: 'hmd-motorsports' },
    },
    race: {
      overall: { driverIds: ['malukas'], teamId: 'hmd-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['malukas'], teamId: 'hmd-motorsports' },
          { position: 2, driverIds: ['pedersen-b'], teamId: 'global-racing-group' },
          { position: 3, driverIds: ['robb'], teamId: 'juncos-racing' },
        ],
      }],
    },
  },
  'indy-nxt-2021-detroit-1': {
    qualifying: {
      overall: { driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
    },
    race: {
      overall: { driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
          { position: 2, driverIds: ['lundqvist'], teamId: 'global-racing-group' },
          { position: 3, driverIds: ['defrancesco'], teamId: 'andretti-steinbrenner' },
        ],
      }],
    },
  },
  'indy-nxt-2021-detroit-2': {
    qualifying: {
      overall: { driverIds: ['lundqvist'], teamId: 'global-racing-group' },
    },
    race: {
      overall: { driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
          { position: 2, driverIds: ['malukas'], teamId: 'hmd-motorsports' },
          { position: 3, driverIds: ['megennis'], teamId: 'andretti-autosport' },
        ],
      }],
    },
  },
  'indy-nxt-2021-road-america-1': {
    qualifying: {
      overall: { driverIds: ['frost'], teamId: 'andretti-autosport' },
    },
    race: {
      overall: { driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
          { position: 2, driverIds: ['bogle'], teamId: 'carlin' },
          { position: 3, driverIds: ['pedersen-b'], teamId: 'global-racing-group' },
        ],
      }],
    },
  },
  'indy-nxt-2021-road-america-2': {
    qualifying: {
      overall: { driverIds: ['frost'], teamId: 'andretti-autosport' },
    },
    race: {
      overall: { driverIds: ['malukas'], teamId: 'hmd-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['malukas'], teamId: 'hmd-motorsports' },
          { position: 2, driverIds: ['megennis'], teamId: 'andretti-autosport' },
          { position: 3, driverIds: ['pedersen-b'], teamId: 'global-racing-group' },
        ],
      }],
    },
  },
  'indy-nxt-2021-mid-ohio-1': {
    qualifying: {
      overall: { driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
    },
    race: {
      overall: { driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
          { position: 2, driverIds: ['megennis'], teamId: 'andretti-autosport' },
          { position: 3, driverIds: ['lundqvist'], teamId: 'global-racing-group' },
        ],
      }],
    },
  },
  'indy-nxt-2021-mid-ohio-2': {
    qualifying: {
      overall: { driverIds: ['frost'], teamId: 'andretti-autosport' },
    },
    race: {
      overall: { driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
          { position: 2, driverIds: ['frost'], teamId: 'andretti-autosport' },
          { position: 3, driverIds: ['pedersen-b'], teamId: 'global-racing-group' },
        ],
      }],
    },
  },
  'indy-nxt-2021-gateway-1': {
    qualifying: {
      overall: { driverIds: ['malukas'], teamId: 'hmd-motorsports' },
    },
    race: {
      overall: { driverIds: ['malukas'], teamId: 'hmd-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['malukas'], teamId: 'hmd-motorsports' },
          { position: 2, driverIds: ['lundqvist'], teamId: 'global-racing-group' },
          { position: 3, driverIds: ['robb'], teamId: 'juncos-racing' },
        ],
      }],
    },
  },
  'indy-nxt-2021-gateway-2': {
    qualifying: {
      overall: { driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
    },
    race: {
      overall: { driverIds: ['malukas'], teamId: 'hmd-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['malukas'], teamId: 'hmd-motorsports' },
          { position: 2, driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
          { position: 3, driverIds: ['pedersen-b'], teamId: 'global-racing-group' },
        ],
      }],
    },
  },
  'indy-nxt-2021-portland-1': {
    qualifying: {
      overall: { driverIds: ['malukas'], teamId: 'hmd-motorsports' },
    },
    race: {
      overall: { driverIds: ['malukas'], teamId: 'hmd-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['malukas'], teamId: 'hmd-motorsports' },
          { position: 2, driverIds: ['megennis'], teamId: 'andretti-autosport' },
          { position: 3, driverIds: ['lundqvist'], teamId: 'global-racing-group' },
        ],
      }],
    },
  },
  'indy-nxt-2021-portland-2': {
    qualifying: {
      overall: { driverIds: ['malukas'], teamId: 'hmd-motorsports' },
    },
    race: {
      overall: { driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
          { position: 2, driverIds: ['pedersen-b'], teamId: 'global-racing-group' },
          { position: 3, driverIds: ['lundqvist'], teamId: 'global-racing-group' },
        ],
      }],
    },
  },
  'indy-nxt-2021-laguna-seca-1': {
    qualifying: {
      overall: { driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
    },
    race: {
      overall: { driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
          { position: 2, driverIds: ['megennis'], teamId: 'andretti-autosport' },
          { position: 3, driverIds: ['pedersen-b'], teamId: 'global-racing-group' },
        ],
      }],
    },
  },
  'indy-nxt-2021-laguna-seca-2': {
    qualifying: {
      overall: { driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
    },
    race: {
      overall: { driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
          { position: 2, driverIds: ['robb'], teamId: 'juncos-racing' },
          { position: 3, driverIds: ['lundqvist'], teamId: 'global-racing-group' },
        ],
      }],
    },
  },
  'indy-nxt-2021-mid-ohio-finale-1': {
    qualifying: {
      overall: { driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
    },
    race: {
      overall: { driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['kirkwood'], teamId: 'andretti-autosport' },
          { position: 2, driverIds: ['robb'], teamId: 'juncos-hollinger' },
          { position: 3, driverIds: ['lundqvist'], teamId: 'global-racing-group' },
        ],
      }],
    },
  },
  'indy-nxt-2021-mid-ohio-finale-2': {
    qualifying: {
      overall: { driverIds: ['malukas'], teamId: 'hmd-motorsports' },
    },
    race: {
      overall: { driverIds: ['lundqvist'], teamId: 'global-racing-group' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lundqvist'], teamId: 'global-racing-group' },
          { position: 2, driverIds: ['defrancesco'], teamId: 'andretti-steinbrenner' },
          { position: 3, driverIds: ['robb'], teamId: 'juncos-hollinger' },
        ],
      }],
    },
  },
}
