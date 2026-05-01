import type { EventResults } from './types'

// Michelin Le Mans Cup 2021 results
// Source: en.wikipedia.org/wiki/2021_Michelin_Le_Mans_Cup — verified April 2026
export const mlmcResults2021: Record<string, EventResults> = {
  'mlmc-2021-barcelona': {
    endurance: {
      overall: { driverIds: ['andrews-s', 'kraut'], teamId: 'united-autosports' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['andrews-s', 'kraut'], teamId: 'united-autosports' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['andlauer', 'leutwiler'], teamId: 'pzoberer-tft' },
          ],
        },
      ],
    },
  },
  'mlmc-2021-le-castellet': {
    endurance: {
      overall: { driverIds: ['noble-c', 'wells'], teamId: 'nielsen-racing' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['noble-c', 'wells'], teamId: 'nielsen-racing' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['mastronardi', 'sargeant'], teamId: 'iron-lynx' },
          ],
        },
      ],
    },
  },
  'mlmc-2021-monza': {
    endurance: {
      overall: { driverIds: ['andrews-s', 'kraut'], teamId: 'united-autosports' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['andrews-s', 'kraut'], teamId: 'united-autosports' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['lancieri', 'ruberti'], teamId: 'iron-lynx' },
          ],
        },
      ],
    },
  },
  'mlmc-2021-le-mans': {
    endurance: {
      overall: { driverIds: ['noble-c', 'wells'], teamId: 'nielsen-racing' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['noble-c', 'wells'], teamId: 'nielsen-racing' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['penttinen', 'sargeant'], teamId: 'iron-lynx' },
          ],
        },
      ],
    },
  },
  'mlmc-2021-spa': {
    endurance: {
      overall: { driverIds: ['doquin', 'skelton'], teamId: 'cool-racing' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['doquin', 'skelton'], teamId: 'cool-racing' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['lancieri', 'ruberti'], teamId: 'iron-lynx' },
          ],
        },
      ],
    },
  },
  'mlmc-2021-portimao': {
    endurance: {
      overall: { driverIds: ['beche', 'loggie'], teamId: 'phoenix-racing' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['beche', 'loggie'], teamId: 'phoenix-racing' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['lancieri', 'ruberti'], teamId: 'iron-lynx' },
          ],
        },
      ],
    },
  },
}
