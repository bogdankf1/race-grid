import type { EventResults } from './types'

// Michelin Le Mans Cup 2025 results
// Source: en.wikipedia.org/wiki/2025_Le_Mans_Cup — verified April 2026
export const mlmcResults2025: Record<string, EventResults> = {
  'mlmc-2025-barcelona': {
    endurance: {
      overall: { driverIds: ['droux-d', 'oltramare'], teamId: 'clx-motorsport' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['droux-d', 'oltramare'], teamId: 'clx-motorsport' },
          ],
        },
        {
          className: 'LMP3 Pro/Am',
          podium: [
            { position: 1, driverIds: ['parrow', 'peebles'], teamId: 'rinaldi-racing' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['cuhadaroglu', 'fumanelli'], teamId: 'kessel-racing' },
          ],
        },
      ],
    },
  },
  'mlmc-2025-le-castellet': {
    endurance: {
      overall: { driverIds: ['provost', 'rodella'], teamId: 'clx-motorsport' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['provost', 'rodella'], teamId: 'clx-motorsport' },
          ],
        },
        {
          className: 'LMP3 Pro/Am',
          podium: [
            { position: 1, driverIds: ['lemoine', 'trojani'], teamId: 'ans-motorsport' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['sager', 'van-der-steur'], teamId: 'code-racing' },
          ],
        },
      ],
    },
  },
  'mlmc-2025-le-mans': {
    endurance: {
      overall: { driverIds: ['closmenil', 'jensen-t'], teamId: 'clx-motorsport' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['closmenil', 'jensen-t'], teamId: 'clx-motorsport' },
          ],
        },
        {
          className: 'LMP3 Pro/Am',
          podium: [
            { position: 1, driverIds: ['aust', 'fernandez-laser'], teamId: 'rinaldi-racing' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['bartone', 'jans'], teamId: 'getspeed' },
          ],
        },
      ],
    },
  },
  'mlmc-2025-spa': {
    endurance: {
      overall: { driverIds: ['david-h', 'schwarze'], teamId: 'r-ace-gp' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['david-h', 'schwarze'], teamId: 'r-ace-gp' },
          ],
        },
        {
          className: 'LMP3 Pro/Am',
          podium: [
            { position: 1, driverIds: ['de-doncker', 'henrion-g'], teamId: 'motorsport98' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['cuhadaroglu', 'fumanelli'], teamId: 'kessel-racing' },
          ],
        },
      ],
    },
  },
  'mlmc-2025-silverstone': {
    endurance: {
      overall: { driverIds: ['david-h', 'schwarze'], teamId: 'r-ace-gp' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['david-h', 'schwarze'], teamId: 'r-ace-gp' },
          ],
        },
        {
          className: 'LMP3 Pro/Am',
          podium: [
            { position: 1, driverIds: ['woodward', 'winslow'], teamId: '23events-racing' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['ickx', 'garcia-marta'], teamId: 'iron-dames' },
          ],
        },
      ],
    },
  },
  'mlmc-2025-portimao': {
    endurance: {
      overall: { driverIds: ['david-h', 'schwarze'], teamId: 'r-ace-gp' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['david-h', 'schwarze'], teamId: 'r-ace-gp' },
          ],
        },
        {
          className: 'LMP3 Pro/Am',
          podium: [
            { position: 1, driverIds: ['de-doncker', 'henrion-g'], teamId: 'motorsport98' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['cuhadaroglu', 'fumanelli'], teamId: 'kessel-racing' },
          ],
        },
      ],
    },
  },
}
