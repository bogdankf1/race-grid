import type { EventResults } from './types'

// Super Formula 2022 results — verified from superformula.net, motorsport.com
// Champion: Tomoki Nojiri (Team Mugen)
// Double-headers at Fuji (Rds 1-2), Motegi (Rds 7-8), Suzuka (Rds 9-10).
export const superformulaResults2022: Record<string, EventResults> = {
  'sf-2022-fuji-1': {
    // Rd 1: Hirakawa won Race 1, Rd 2: Nojiri won Race 2
    race: {
      overall: { driverIds: ['hirakawa'], teamId: 'team-impul' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['hirakawa'], teamId: 'team-impul' },
          { position: 2, driverIds: ['nojiri'], teamId: 'team-mugen' },
        ],
      }],
    },
  },
  'sf-2022-suzuka-1': {
    // Rd 3: Matsushita won
    race: {
      overall: { driverIds: ['matsushita'], teamId: 'san-ei-gen-bmax' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['matsushita'], teamId: 'san-ei-gen-bmax' },
        ],
      }],
    },
  },
  'sf-2022-autopolis': {
    // Rd 4: Hirakawa won
    race: {
      overall: { driverIds: ['hirakawa'], teamId: 'team-impul' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hirakawa'], teamId: 'team-impul' },
        ],
      }],
    },
  },
  'sf-2022-sugo': {
    // Rd 5: Fenestraz won
    race: {
      overall: { driverIds: ['fenestraz'], teamId: 'kondo-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fenestraz'], teamId: 'kondo-racing' },
        ],
      }],
    },
  },
  'sf-2022-fuji-2': {
    // Rd 6: Sasahara won
    race: {
      overall: { driverIds: ['sasahara'], teamId: 'team-mugen' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sasahara'], teamId: 'team-mugen' },
        ],
      }],
    },
  },
  'sf-2022-motegi': {
    // Rd 7: Yamamoto won Race 1, Rd 8: Sekiguchi won Race 2
    race: {
      overall: { driverIds: ['yamamoto'], teamId: 'ponos-nakajima' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['yamamoto'], teamId: 'ponos-nakajima' },
          { position: 2, driverIds: ['sekiguchi'], teamId: 'team-impul' },
        ],
      }],
    },
  },
  'sf-2022-suzuka-2': {
    // Rd 9: Sasahara won Race 1, Rd 10: Nojiri won Race 2
    race: {
      overall: { driverIds: ['sasahara'], teamId: 'team-mugen' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['sasahara'], teamId: 'team-mugen' },
          { position: 2, driverIds: ['nojiri'], teamId: 'team-mugen' },
        ],
      }],
    },
  },
}
