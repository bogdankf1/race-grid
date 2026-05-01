import type { EventResults } from './types'

// Super Formula 2024 results — verified from superformula.net, motorsport.com
// Champion: Sho Tsuboi (Vantelin Team TOM'S)
// Double-headers at Fuji (Rds 6-7) and Suzuka (Rds 8-9).
export const superformulaResults2024: Record<string, EventResults> = {
  'sf-2024-suzuka-1': {
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
  'sf-2024-autopolis': {
    // Rd 2: Makino won
    race: {
      overall: { driverIds: ['makino'], teamId: 'docomo-dandelion' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['makino'], teamId: 'docomo-dandelion' },
        ],
      }],
    },
  },
  'sf-2024-sugo': {
    // Rd 3: Nojiri won
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
  'sf-2024-fuji-1': {
    // Rd 4: Tsuboi won
    race: {
      overall: { driverIds: ['tsuboi'], teamId: 'vantelin-toms' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['tsuboi'], teamId: 'vantelin-toms' },
        ],
      }],
    },
  },
  'sf-2024-motegi': {
    // Rd 5: Makino won
    race: {
      overall: { driverIds: ['makino'], teamId: 'docomo-dandelion' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['makino'], teamId: 'docomo-dandelion' },
        ],
      }],
    },
  },
  'sf-2024-fuji-2': {
    // Rd 6: Tsuboi won Race 1, Rd 7: Tsuboi won Race 2
    race: {
      overall: { driverIds: ['tsuboi'], teamId: 'vantelin-toms' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['tsuboi'], teamId: 'vantelin-toms' },
          { position: 2, driverIds: ['tsuboi'], teamId: 'vantelin-toms' },
        ],
      }],
    },
  },
  'sf-2024-suzuka-2': {
    // Rd 8: Ohta won Race 1, Rd 9: Ohta won Race 2
    race: {
      overall: { driverIds: ['ohta'], teamId: 'docomo-dandelion' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['ohta'], teamId: 'docomo-dandelion' },
          { position: 2, driverIds: ['ohta'], teamId: 'docomo-dandelion' },
        ],
      }],
    },
  },
}
