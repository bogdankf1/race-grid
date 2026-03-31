import type { EventResults } from './types'

// Super Formula 2025 results — verified from superformula.net, motorsport.com, honda.racing, dive-bomb.com
// Double-headers at most weekends; overall result shows the main/last race winner
export const superformulaResults2025: Record<string, EventResults> = {
  'sf-2025-suzuka-1': {
    qualifying: {
      overall: { driverIds: ['nojiri'], teamId: 'team-mugen' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nojiri'], teamId: 'team-mugen' },
        ],
      }],
    },
    // Rd 1: Ohta won Race 1, Rd 2: Makino won Race 2
    race: {
      overall: { driverIds: ['ohta'], teamId: 'docomo-dandelion' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['ohta'], teamId: 'docomo-dandelion' },
          { position: 2, driverIds: ['makino'], teamId: 'docomo-dandelion' },
        ],
      }],
    },
  },
  'sf-2025-motegi': {
    qualifying: {
      overall: { driverIds: ['makino'], teamId: 'docomo-dandelion' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['makino'], teamId: 'docomo-dandelion' },
        ],
      }],
    },
    // Rd 3: Makino won Race 1, Rd 4: Ohta won Race 2
    race: {
      overall: { driverIds: ['makino'], teamId: 'docomo-dandelion' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['makino'], teamId: 'docomo-dandelion' },
          { position: 2, driverIds: ['ohta'], teamId: 'docomo-dandelion' },
        ],
      }],
    },
  },
  'sf-2025-autopolis': {
    qualifying: {
      overall: { driverIds: ['nojiri'], teamId: 'team-mugen' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nojiri'], teamId: 'team-mugen' },
        ],
      }],
    },
    // Rd 5: Tsuboi won
    race: {
      overall: { driverIds: ['tsuboi'], teamId: 'vantelin-toms' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['tsuboi'], teamId: 'vantelin-toms' },
          { position: 2, driverIds: ['nojiri'], teamId: 'team-mugen' },
        ],
      }],
    },
  },
  'sf-2025-fuji-1': {
    qualifying: {
      overall: { driverIds: ['nojiri'], teamId: 'team-mugen' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nojiri'], teamId: 'team-mugen' },
        ],
      }],
    },
    // Rd 6: Tsuboi won, Rd 7: Fenestraz declared winner (rain abandonment, half points)
    race: {
      overall: { driverIds: ['tsuboi'], teamId: 'vantelin-toms' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['tsuboi'], teamId: 'vantelin-toms' },
          { position: 2, driverIds: ['fenestraz'], teamId: 'kondo-racing' },
        ],
      }],
    },
  },
  'sf-2025-sugo': {
    qualifying: {
      overall: { driverIds: ['iwasa'], teamId: 'team-mugen' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['iwasa'], teamId: 'team-mugen' },
        ],
      }],
    },
    // Rd 8: Iwasa won (maiden victory, wet race)
    race: {
      overall: { driverIds: ['iwasa'], teamId: 'team-mugen' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['iwasa'], teamId: 'team-mugen' },
          { position: 2, driverIds: ['fenestraz'], teamId: 'kondo-racing' },
          { position: 3, driverIds: ['fukuzumi'], teamId: 'docomo-dandelion' },
        ],
      }],
    },
  },
  'sf-2025-fuji-2': {
    qualifying: {
      overall: { driverIds: ['fenestraz'], teamId: 'vantelin-toms' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fenestraz'], teamId: 'vantelin-toms' },
        ],
      }],
    },
    // Rd 9: Fraga won (maiden victory), Rd 10 postponed to Suzuka due to rain
    race: {
      overall: { driverIds: ['fraga'], teamId: 'nakajima-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fraga'], teamId: 'nakajima-racing' },
        ],
      }],
    },
  },
  'sf-2025-suzuka-2': {
    qualifying: {
      overall: { driverIds: ['iwasa'], teamId: 'team-mugen' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['iwasa'], teamId: 'team-mugen' },
        ],
      }],
    },
    // Rd 11: Nojiri won, Rd 12: Iwasa won (clinched championship)
    race: {
      overall: { driverIds: ['iwasa'], teamId: 'team-mugen' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['nojiri'], teamId: 'team-mugen' },
          { position: 2, driverIds: ['iwasa'], teamId: 'team-mugen' },
        ],
      }],
    },
  },
}
