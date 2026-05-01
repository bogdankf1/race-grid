import type { EventResults } from './types'

// Super Formula 2021 results — verified from superformula.net, motorsport.com
// Champion: Tomoki Nojiri (Team Mugen)
// All single-race weekends this season.
export const superformulaResults2021: Record<string, EventResults> = {
  'sf-2021-fuji': {
    // Rd 1: Nojiri won
    race: {
      overall: { driverIds: ['nojiri'], teamId: 'team-mugen' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nojiri'], teamId: 'team-mugen' },
        ],
      }],
    },
  },
  'sf-2021-suzuka-1': {
    // Rd 2: Nojiri won
    race: {
      overall: { driverIds: ['nojiri'], teamId: 'team-mugen' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nojiri'], teamId: 'team-mugen' },
        ],
      }],
    },
  },
  'sf-2021-autopolis': {
    // Rd 3: Alesi won
    race: {
      overall: { driverIds: ['alesi'], teamId: 'vantelin-toms' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['alesi'], teamId: 'vantelin-toms' },
        ],
      }],
    },
  },
  'sf-2021-sugo': {
    // Rd 4: Fukuzumi won
    race: {
      overall: { driverIds: ['fukuzumi'], teamId: 'docomo-dandelion' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fukuzumi'], teamId: 'docomo-dandelion' },
        ],
      }],
    },
  },
  'sf-2021-motegi-1': {
    // Rd 5: Nojiri won
    race: {
      overall: { driverIds: ['nojiri'], teamId: 'team-mugen' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nojiri'], teamId: 'team-mugen' },
        ],
      }],
    },
  },
  'sf-2021-motegi-2': {
    // Rd 6: Hiroki Otsu won
    race: {
      overall: { driverIds: ['otsu'], teamId: 'team-mugen' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['otsu'], teamId: 'team-mugen' },
        ],
      }],
    },
  },
  'sf-2021-suzuka-2': {
    // Rd 7: Fukuzumi won
    race: {
      overall: { driverIds: ['fukuzumi'], teamId: 'docomo-dandelion' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fukuzumi'], teamId: 'docomo-dandelion' },
        ],
      }],
    },
  },
}
