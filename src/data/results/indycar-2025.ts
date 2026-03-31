import type { EventResults } from './types'

// IndyCar 2025 results — verified from indycar.com, en.wikipedia.org, motorsport.com
export const indycarResults2025: Record<string, EventResults> = {
  'indycar-2025-st-petersburg': {
    qualifying: {
      overall: { driverIds: ['mclaughlin'], teamId: 'team-penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mclaughlin'], teamId: 'team-penske' },
          { position: 2, driverIds: ['dixon'], teamId: 'chip-ganassi-racing' },
          { position: 3, driverIds: ['newgarden'], teamId: 'team-penske' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
          { position: 2, driverIds: ['dixon'], teamId: 'chip-ganassi-racing' },
          { position: 3, driverIds: ['newgarden'], teamId: 'team-penske' },
        ],
      }],
    },
  },
  'indycar-2025-thermal': {
    qualifying: {
      overall: { driverIds: [], teamId: 'arrow-mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: [], teamId: 'arrow-mclaren' },
          { position: 2, driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
          { position: 3, driverIds: ['lundgaard'], teamId: 'arrow-mclaren' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
          { position: 2, driverIds: [], teamId: 'arrow-mclaren' },
          { position: 3, driverIds: ['lundgaard'], teamId: 'arrow-mclaren' },
        ],
      }],
    },
  },
  'indycar-2025-long-beach': {
    qualifying: {
      overall: { driverIds: ['kirkwood'], teamId: 'andretti-global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['kirkwood'], teamId: 'andretti-global' },
          { position: 2, driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
          { position: 3, driverIds: ['lundgaard'], teamId: 'arrow-mclaren' },
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
          { position: 3, driverIds: ['lundgaard'], teamId: 'arrow-mclaren' },
        ],
      }],
    },
  },
  'indycar-2025-barber': {
    qualifying: {
      overall: { driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
          { position: 2, driverIds: ['mclaughlin'], teamId: 'team-penske' },
          { position: 3, driverIds: ['lundgaard'], teamId: 'arrow-mclaren' },
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
          { position: 3, driverIds: ['lundgaard'], teamId: 'arrow-mclaren' },
        ],
      }],
    },
  },
  'indycar-2025-indianapolis-gp': {
    qualifying: {
      overall: { driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
          { position: 2, driverIds: [], teamId: 'arrow-mclaren' },
          { position: 3, driverIds: ['power'], teamId: 'team-penske' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
          { position: 2, driverIds: [], teamId: 'arrow-mclaren' },
          { position: 3, driverIds: ['power'], teamId: 'team-penske' },
        ],
      }],
    },
  },
  'indycar-2025-indy500': {
    qualifying: {
      overall: { driverIds: ['shwartzman'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['shwartzman'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
          { position: 3, driverIds: [], teamId: 'arrow-mclaren' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
          { position: 2, driverIds: ['malukas'], teamId: 'a-j-foyt-enterprises' },
          { position: 3, driverIds: [], teamId: 'arrow-mclaren' },
        ],
      }],
    },
  },
  'indycar-2025-detroit': {
    qualifying: {
      overall: { driverIds: ['herta'], teamId: 'andretti-global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['herta'], teamId: 'andretti-global' },
          { position: 2, driverIds: ['kirkwood'], teamId: 'andretti-global' },
          { position: 3, driverIds: ['ferrucci'], teamId: 'a-j-foyt-enterprises' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['kirkwood'], teamId: 'andretti-global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['kirkwood'], teamId: 'andretti-global' },
          { position: 2, driverIds: ['ferrucci'], teamId: 'a-j-foyt-enterprises' },
          { position: 3, driverIds: ['herta'], teamId: 'andretti-global' },
        ],
      }],
    },
  },
  'indycar-2025-wwtr': {
    qualifying: {
      overall: { driverIds: ['power'], teamId: 'team-penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['power'], teamId: 'team-penske' },
          { position: 2, driverIds: [], teamId: 'arrow-mclaren' },
          { position: 3, driverIds: ['kirkwood'], teamId: 'andretti-global' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['kirkwood'], teamId: 'andretti-global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['kirkwood'], teamId: 'andretti-global' },
          { position: 2, driverIds: [], teamId: 'arrow-mclaren' },
          { position: 3, driverIds: ['rasmussen'], teamId: 'ed-carpenter-racing' },
        ],
      }],
    },
  },
  'indycar-2025-road-america': {
    qualifying: {
      overall: { driverIds: ['foster'], teamId: 'rahal-letterman-lanigan' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['foster'], teamId: 'rahal-letterman-lanigan' },
          { position: 2, driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
          { position: 3, driverIds: ['rosenqvist'], teamId: 'meyer-shank-racing' },
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
          { position: 3, driverIds: ['ferrucci'], teamId: 'a-j-foyt-enterprises' },
        ],
      }],
    },
  },
  'indycar-2025-mid-ohio': {
    qualifying: {
      overall: { driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
          { position: 2, driverIds: ['dixon'], teamId: 'chip-ganassi-racing' },
          { position: 3, driverIds: ['lundgaard'], teamId: 'arrow-mclaren' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['dixon'], teamId: 'chip-ganassi-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['dixon'], teamId: 'chip-ganassi-racing' },
          { position: 2, driverIds: ['lundgaard'], teamId: 'arrow-mclaren' },
          { position: 3, driverIds: ['herta'], teamId: 'andretti-global' },
        ],
      }],
    },
  },
  'indycar-2025-iowa-1': {
    qualifying: {
      overall: { driverIds: ['newgarden'], teamId: 'team-penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['newgarden'], teamId: 'team-penske' },
          { position: 2, driverIds: [], teamId: 'arrow-mclaren' },
          { position: 3, driverIds: ['power'], teamId: 'team-penske' },
        ],
      }],
    },
    race: {
      overall: { driverIds: [], teamId: 'arrow-mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: [], teamId: 'arrow-mclaren' },
          { position: 2, driverIds: ['newgarden'], teamId: 'team-penske' },
          { position: 3, driverIds: ['power'], teamId: 'team-penske' },
        ],
      }],
    },
  },
  'indycar-2025-iowa-2': {
    qualifying: {
      overall: { driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
          { position: 2, driverIds: ['dixon'], teamId: 'chip-ganassi-racing' },
          { position: 3, driverIds: ['armstrong'], teamId: 'meyer-shank-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
          { position: 2, driverIds: ['dixon'], teamId: 'chip-ganassi-racing' },
          { position: 3, driverIds: ['armstrong'], teamId: 'meyer-shank-racing' },
        ],
      }],
    },
  },
  'indycar-2025-toronto': {
    qualifying: {
      overall: { driverIds: ['herta'], teamId: 'andretti-global' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['herta'], teamId: 'andretti-global' },
          { position: 2, driverIds: [], teamId: 'arrow-mclaren' },
          { position: 3, driverIds: ['veekay'], teamId: 'dale-coyne-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: [], teamId: 'arrow-mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: [], teamId: 'arrow-mclaren' },
          { position: 2, driverIds: ['veekay'], teamId: 'dale-coyne-racing' },
          { position: 3, driverIds: ['simpson'], teamId: 'chip-ganassi-racing' },
        ],
      }],
    },
  },
  'indycar-2025-laguna-seca': {
    qualifying: {
      overall: { driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
          { position: 2, driverIds: ['lundgaard'], teamId: 'arrow-mclaren' },
          { position: 3, driverIds: ['herta'], teamId: 'andretti-global' },
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
          { position: 3, driverIds: ['herta'], teamId: 'andretti-global' },
        ],
      }],
    },
  },
  'indycar-2025-portland': {
    qualifying: {
      overall: { driverIds: ['lundgaard'], teamId: 'arrow-mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lundgaard'], teamId: 'arrow-mclaren' },
          { position: 2, driverIds: [], teamId: 'arrow-mclaren' },
          { position: 3, driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['power'], teamId: 'team-penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['power'], teamId: 'team-penske' },
          { position: 2, driverIds: ['lundgaard'], teamId: 'arrow-mclaren' },
          { position: 3, driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
        ],
      }],
    },
  },
  'indycar-2025-milwaukee': {
    qualifying: {
      overall: { driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
          { position: 2, driverIds: ['rasmussen'], teamId: 'ed-carpenter-racing' },
          { position: 3, driverIds: ['newgarden'], teamId: 'team-penske' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['rasmussen'], teamId: 'ed-carpenter-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rasmussen'], teamId: 'ed-carpenter-racing' },
          { position: 2, driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
          { position: 3, driverIds: ['newgarden'], teamId: 'team-penske' },
        ],
      }],
    },
  },
  'indycar-2025-nashville': {
    qualifying: {
      overall: { driverIds: [], teamId: 'arrow-mclaren' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: [], teamId: 'arrow-mclaren' },
          { position: 2, driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
          { position: 3, driverIds: ['mclaughlin'], teamId: 'team-penske' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['newgarden'], teamId: 'team-penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['newgarden'], teamId: 'team-penske' },
          { position: 2, driverIds: ['palou'], teamId: 'chip-ganassi-racing' },
          { position: 3, driverIds: ['mclaughlin'], teamId: 'team-penske' },
        ],
      }],
    },
  },
}
