import type { EventResults } from './types'

// Michelin Le Mans Cup 2024 results
// Source: en.wikipedia.org/wiki/2024_Le_Mans_Cup — verified April 2026
export const mlmcResults2024: Record<string, EventResults> = {
  'mlmc-2024-barcelona': {
    endurance: {
      overall: { driverIds: ['foster-t', 'moller'], teamId: 'high-class-racing' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['foster-t', 'moller'], teamId: 'high-class-racing' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['balzan', 'kurzejewski'], teamId: 'af-corse' },
          ],
        },
      ],
    },
  },
  'mlmc-2024-le-castellet': {
    endurance: {
      overall: { driverIds: ['chila', 'droux-d'], teamId: 'cool-racing' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['chila', 'droux-d'], teamId: 'cool-racing' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['balzan', 'kurzejewski'], teamId: 'af-corse' },
          ],
        },
      ],
    },
  },
  'mlmc-2024-le-mans': {
    endurance: {
      overall: { driverIds: ['kratz', 'weiss-l'], teamId: 'wtm-rinaldi' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['kratz', 'weiss-l'], teamId: 'wtm-rinaldi' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['fumanelli', 'jousset'], teamId: 'kessel-racing' },
          ],
        },
      ],
    },
  },
  'mlmc-2024-spa': {
    endurance: {
      overall: { driverIds: ['jensen-t', 'stone-b'], teamId: 'bretton-racing' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['jensen-t', 'stone-b'], teamId: 'bretton-racing' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['agostini', 'toledo'], teamId: 'af-corse' },
          ],
        },
      ],
    },
  },
  'mlmc-2024-mugello': {
    endurance: {
      overall: { driverIds: ['david-h', 'michal'], teamId: 'r-ace-gp' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['david-h', 'michal'], teamId: 'r-ace-gp' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['balzan', 'kurzejewski'], teamId: 'af-corse' },
          ],
        },
      ],
    },
  },
  'mlmc-2024-portimao': {
    endurance: {
      overall: { driverIds: ['gudmundsson', 'noble-c'], teamId: 'team-thor' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['gudmundsson', 'noble-c'], teamId: 'team-thor' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['balzan', 'kurzejewski'], teamId: 'af-corse' },
          ],
        },
      ],
    },
  },
}
