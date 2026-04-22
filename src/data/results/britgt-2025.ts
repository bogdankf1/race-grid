import type { EventResults } from './types'

// British GT Championship 2025 results
export const britgtResults2025: Record<string, EventResults> = {
  'britgt-2025-donington-1': {
    endurance: {
      overall: { driverIds: ['dawson', 'jewiss'], teamId: 'two-seas-motorsport' },
      classes: [{
        className: 'GT3',
        podium: [
          { position: 1, driverIds: ['dawson', 'jewiss'], teamId: 'two-seas-motorsport' },
          { position: 2, driverIds: ['martin-a', 'mitchell-s'], teamId: 'barwell-motorsport' },
          { position: 3, driverIds: ['gotz', 'tse'], teamId: 'two-seas-motorsport' },
        ],
      }],
    },
  },
  'britgt-2025-silverstone': {
    endurance: {
      overall: { driverIds: ['harper', 'leung'], teamId: 'paradine-competition' },
      classes: [{
        className: 'GT3',
        podium: [
          { position: 1, driverIds: ['harper', 'leung'], teamId: 'paradine-competition' },
          { position: 2, driverIds: ['dawson', 'jewiss'], teamId: 'two-seas-motorsport' },
          { position: 3, driverIds: ['kirchhofer', 'tillbrook'], teamId: 'optimum-motorsport' },
        ],
      }],
    },
  },
  'britgt-2025-oulton-park': {
    race: {
      overall: { driverIds: ['gotz', 'tse'], teamId: 'two-seas-motorsport' },
      classes: [{
        className: 'GT3',
        podium: [
          { position: 1, driverIds: ['gotz', 'tse'], teamId: 'two-seas-motorsport' },
          { position: 2, driverIds: ['clutton', 'orange-s'], teamId: 'orange-racing' },
          { position: 3, driverIds: ['garlick', 'ip'], teamId: 'bridger-motorsport' },
        ],
      }],
    },
  },
  'britgt-2025-spa': {
    endurance: {
      overall: { driverIds: ['adam-j', 'petrobelli'], teamId: 'blackthorn-racing' },
      classes: [{
        className: 'GT3',
        podium: [
          { position: 1, driverIds: ['adam-j', 'petrobelli'], teamId: 'blackthorn-racing' },
          { position: 2, driverIds: ['kirchhofer', 'tillbrook'], teamId: 'optimum-motorsport' },
          { position: 3, driverIds: ['cook-h', 'collard'], teamId: 'barwell-motorsport' },
        ],
      }],
    },
  },
  'britgt-2025-snetterton': {
    race: {
      overall: { driverIds: ['gotz', 'tse'], teamId: 'two-seas-motorsport' },
      classes: [{
        className: 'GT3',
        podium: [
          { position: 1, driverIds: ['gotz', 'tse'], teamId: 'two-seas-motorsport' },
          { position: 2, driverIds: ['martin-a', 'mitchell-s'], teamId: 'barwell-motorsport' },
          { position: 3, driverIds: ['cook-h', 'collard'], teamId: 'barwell-motorsport' },
        ],
      }],
    },
  },
  'britgt-2025-brands-hatch': {
    endurance: {
      overall: { driverIds: ['dawson', 'jewiss'], teamId: 'two-seas-motorsport' },
      classes: [{
        className: 'GT3',
        podium: [
          { position: 1, driverIds: ['dawson', 'jewiss'], teamId: 'two-seas-motorsport' },
          { position: 2, driverIds: ['kirchhofer', 'tillbrook'], teamId: 'optimum-motorsport' },
          { position: 3, driverIds: ['cook-h', 'collard'], teamId: 'barwell-motorsport' },
        ],
      }],
    },
  },
  'britgt-2025-donington-2': {
    endurance: {
      overall: { driverIds: ['martin-a', 'mitchell-s'], teamId: 'barwell-motorsport' },
      classes: [{
        className: 'GT3',
        podium: [
          { position: 1, driverIds: ['martin-a', 'mitchell-s'], teamId: 'barwell-motorsport' },
          { position: 2, driverIds: ['cook-h', 'collard'], teamId: 'barwell-motorsport' },
          { position: 3, driverIds: ['gotz', 'tse'], teamId: 'two-seas-motorsport' },
        ],
      }],
    },
  },
}
