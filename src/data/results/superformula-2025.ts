import { EventResults } from './types'

// Super Formula 2025 results — verified from superformula.net, motorsport.com, honda.racing, dive-bomb.com
// Double-headers at most weekends; overall result shows the main/last race winner
export const superformulaResults2025: Record<string, EventResults> = {
  'sf-2025-suzuka-1': {
    qualifying: {
      overall: { drivers: ['Nojiri'], team: 'Team MUGEN' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Nojiri'], team: 'Team MUGEN' },
        ],
      }],
    },
    // Rd 1: Ohta won Race 1, Rd 2: Makino won Race 2
    race: {
      overall: { drivers: ['Ohta'], team: 'DOCOMO Team Dandelion Racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, drivers: ['Ohta'], team: 'DOCOMO Team Dandelion Racing' },
          { position: 2, drivers: ['Makino'], team: 'DOCOMO Team Dandelion Racing' },
        ],
      }],
    },
  },
  'sf-2025-motegi': {
    qualifying: {
      overall: { drivers: ['Makino'], team: 'DOCOMO Team Dandelion Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Makino'], team: 'DOCOMO Team Dandelion Racing' },
        ],
      }],
    },
    // Rd 3: Makino won Race 1, Rd 4: Ohta won Race 2
    race: {
      overall: { drivers: ['Makino'], team: 'DOCOMO Team Dandelion Racing' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, drivers: ['Makino'], team: 'DOCOMO Team Dandelion Racing' },
          { position: 2, drivers: ['Ohta'], team: 'DOCOMO Team Dandelion Racing' },
        ],
      }],
    },
  },
  'sf-2025-autopolis': {
    qualifying: {
      overall: { drivers: ['Nojiri'], team: 'Team MUGEN' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Nojiri'], team: 'Team MUGEN' },
        ],
      }],
    },
    // Rd 5: Tsuboi won
    race: {
      overall: { drivers: ['Tsuboi'], team: 'VANTELIN Team TOM\'S' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Tsuboi'], team: 'VANTELIN Team TOM\'S' },
          { position: 2, drivers: ['Nojiri'], team: 'Team MUGEN' },
        ],
      }],
    },
  },
  'sf-2025-fuji-1': {
    qualifying: {
      overall: { drivers: ['Nojiri'], team: 'Team MUGEN' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Nojiri'], team: 'Team MUGEN' },
        ],
      }],
    },
    // Rd 6: Tsuboi won, Rd 7: Fenestraz declared winner (rain abandonment, half points)
    race: {
      overall: { drivers: ['Tsuboi'], team: 'VANTELIN Team TOM\'S' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, drivers: ['Tsuboi'], team: 'VANTELIN Team TOM\'S' },
          { position: 2, drivers: ['Fenestraz'], team: 'KONDO Racing' },
        ],
      }],
    },
  },
  'sf-2025-sugo': {
    qualifying: {
      overall: { drivers: ['Iwasa'], team: 'Team MUGEN' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Iwasa'], team: 'Team MUGEN' },
        ],
      }],
    },
    // Rd 8: Iwasa won (maiden victory, wet race)
    race: {
      overall: { drivers: ['Iwasa'], team: 'Team MUGEN' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Iwasa'], team: 'Team MUGEN' },
          { position: 2, drivers: ['Fenestraz'], team: 'KONDO Racing' },
          { position: 3, drivers: ['Fukuzumi'], team: 'DOCOMO Team Dandelion Racing' },
        ],
      }],
    },
  },
  'sf-2025-fuji-2': {
    qualifying: {
      overall: { drivers: ['Fenestraz'], team: 'VANTELIN Team TOM\'S' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Fenestraz'], team: 'VANTELIN Team TOM\'S' },
        ],
      }],
    },
    // Rd 9: Fraga won (maiden victory), Rd 10 postponed to Suzuka due to rain
    race: {
      overall: { drivers: ['Fraga'], team: 'Nakajima Racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Fraga'], team: 'Nakajima Racing' },
        ],
      }],
    },
  },
  'sf-2025-suzuka-2': {
    qualifying: {
      overall: { drivers: ['Iwasa'], team: 'Team MUGEN' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Iwasa'], team: 'Team MUGEN' },
        ],
      }],
    },
    // Rd 11: Nojiri won, Rd 12: Iwasa won (clinched championship)
    race: {
      overall: { drivers: ['Iwasa'], team: 'Team MUGEN' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, drivers: ['Nojiri'], team: 'Team MUGEN' },
          { position: 2, drivers: ['Iwasa'], team: 'Team MUGEN' },
        ],
      }],
    },
  },
}
