import type { EventResults } from './types'

// Super Formula 2023 results — verified from superformula.net, motorsport.com
// Champion: Ritomo Miyata (Vantelin Team TOM'S)
// Double-headers at Fuji (Rds 1-2) and Suzuka (Rds 8-9).
export const superformulaResults2023: Record<string, EventResults> = {
  'sf-2023-fuji-1': {
    // Rd 1: Lawson won Race 1, Rd 2: Nojiri won Race 2
    race: {
      overall: { driverIds: ['lawson'], teamId: 'team-mugen' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['lawson'], teamId: 'team-mugen' },
          { position: 2, driverIds: ['nojiri'], teamId: 'team-mugen' },
        ],
      }],
    },
  },
  'sf-2023-suzuka-1': {
    // Rd 3: Miyata won
    race: {
      overall: { driverIds: ['miyata'], teamId: 'vantelin-toms' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['miyata'], teamId: 'vantelin-toms' },
        ],
      }],
    },
  },
  'sf-2023-autopolis': {
    // Rd 4: Lawson won
    race: {
      overall: { driverIds: ['lawson'], teamId: 'team-mugen' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lawson'], teamId: 'team-mugen' },
        ],
      }],
    },
  },
  'sf-2023-sugo': {
    // Rd 5: Miyata won
    race: {
      overall: { driverIds: ['miyata'], teamId: 'vantelin-toms' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['miyata'], teamId: 'vantelin-toms' },
        ],
      }],
    },
  },
  'sf-2023-fuji-2': {
    // Rd 6: Lawson won
    race: {
      overall: { driverIds: ['lawson'], teamId: 'team-mugen' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lawson'], teamId: 'team-mugen' },
        ],
      }],
    },
  },
  'sf-2023-motegi': {
    // Rd 7: Nojiri won
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
  'sf-2023-suzuka-2': {
    // Rd 8: Nojiri won Race 1, Rd 9: Ohta won Race 2
    race: {
      overall: { driverIds: ['nojiri'], teamId: 'team-mugen' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['nojiri'], teamId: 'team-mugen' },
          { position: 2, driverIds: ['ohta'], teamId: 'docomo-dandelion' },
        ],
      }],
    },
  },
}
