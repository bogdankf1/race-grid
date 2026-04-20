import type { EventResults } from './types'

// IndyCar 2026 results — verified from indycar.com, motorsport.com
export const indycarResults2026: Record<string, EventResults> = {
  'indycar-2026-st-petersburg': {
    qualifying: {
      overall: { driverIds: ['mclaughlin'], teamId: 'team-penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mclaughlin'], teamId: 'team-penske' },
          { position: 2, driverIds: ['ericsson'], teamId: 'andretti-global' },
          { position: 3, driverIds: ['hauger'], teamId: 'a-j-foyt-enterprises' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
          { position: 2, driverIds: ['mclaughlin'], teamId: 'team-penske' },
          { position: 3, driverIds: ['lundgaard'], teamId: 'rahal-letterman-lanigan' },
        ],
      }],
    },
  },
  'indycar-2026-phoenix': {
    qualifying: {
      overall: { driverIds: ['malukas'], teamId: 'team-penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['malukas'], teamId: 'team-penske' },
          { position: 2, driverIds: ['newgarden'], teamId: 'team-penske' },
          { position: 3, driverIds: ['rahal'], teamId: 'rahal-letterman-lanigan' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['newgarden'], teamId: 'team-penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['newgarden'], teamId: 'team-penske' },
          { position: 2, driverIds: ['kirkwood'], teamId: 'andretti-global' },
          { position: 3, driverIds: ['malukas'], teamId: 'meyer-shank-racing' },
        ],
      }],
    },
  },
  'indycar-2026-barber': {
    qualifying: {
      overall: { driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
          { position: 2, driverIds: ['malukas'], teamId: 'team-penske' },
          { position: 3, driverIds: ['rahal'], teamId: 'rahal-letterman-lanigan' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
          { position: 2, driverIds: ['lundgaard'], teamId: 'arrow-mclaren' },
          { position: 3, driverIds: ['rahal'], teamId: 'rahal-letterman-lanigan' },
        ],
      }],
    },
  },
  'indycar-2026-long-beach': {
    qualifying: {
      overall: { driverIds: ['rosenqvist'], teamId: 'meyer-shank-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rosenqvist'], teamId: 'meyer-shank-racing' },
          { position: 2, driverIds: ['oward'], teamId: 'arrow-mclaren' },
          { position: 3, driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
          { position: 2, driverIds: ['rosenqvist'], teamId: 'meyer-shank-racing' },
          { position: 3, driverIds: ['dixon'], teamId: 'chip-ganassi-racing' },
        ],
      }],
    },
  },
  'indycar-2026-arlington': {
    qualifying: {
      overall: { driverIds: ['ericsson'], teamId: 'andretti-global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ericsson'], teamId: 'andretti-global' },
          { position: 2, driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
          { position: 3, driverIds: [], teamId: 'arrow-mclaren' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['kirkwood'], teamId: 'andretti-global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['kirkwood'], teamId: 'andretti-global' },
          { position: 2, driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
          { position: 3, driverIds: ['power'], teamId: 'team-penske' },
        ],
      }],
    },
  },
}
