import { EventResults } from './types'

// NASCAR 2026 results — verified from nascar.com, motorsport.com
export const nascarResults2026: Record<string, EventResults> = {
  'nascar-2026-daytona-500': {
    race: {
      overall: { drivers: ['Reddick'], team: '23XI Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Reddick'], team: '23XI Racing' },
          { position: 2, drivers: ['Stenhouse Jr.'], team: 'JTG Daugherty Racing' },
          { position: 3, drivers: ['Logano'], team: 'Team Penske' },
        ],
      }],
    },
  },
  'nascar-2026-atlanta': {
    race: {
      overall: { drivers: ['Reddick'], team: '23XI Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Reddick'], team: '23XI Racing' },
          { position: 2, drivers: ['Briscoe'], team: 'Stewart-Haas Racing' },
          { position: 3, drivers: ['Chastain'], team: 'Trackhouse Racing' },
        ],
      }],
    },
  },
  'nascar-2026-cota': {
    race: {
      overall: { drivers: ['Reddick'], team: '23XI Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Reddick'], team: '23XI Racing' },
          { position: 2, drivers: ['van Gisbergen'], team: 'Trackhouse Racing' },
          { position: 3, drivers: ['Bell'], team: 'Joe Gibbs Racing' },
        ],
      }],
    },
  },
  'nascar-2026-phoenix': {
    race: {
      overall: { drivers: ['Blaney'], team: 'Team Penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Blaney'], team: 'Team Penske' },
          { position: 2, drivers: ['Bell'], team: 'Joe Gibbs Racing' },
          { position: 3, drivers: ['Larson'], team: 'Hendrick Motorsports' },
        ],
      }],
    },
  },
  'nascar-2026-las-vegas': {
    race: {
      overall: { drivers: ['Hamlin'], team: 'Joe Gibbs Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Hamlin'], team: 'Joe Gibbs Racing' },
          { position: 2, drivers: ['Elliott'], team: 'Hendrick Motorsports' },
          { position: 3, drivers: ['Byron'], team: 'Hendrick Motorsports' },
        ],
      }],
    },
  },
  'nascar-2026-darlington': {
    race: {
      overall: { drivers: ['Reddick'], team: '23XI Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Reddick'], team: '23XI Racing' },
          { position: 2, drivers: ['Keselowski'], team: 'RFK Racing' },
          { position: 3, drivers: ['Blaney'], team: 'Team Penske' },
        ],
      }],
    },
  },
}
