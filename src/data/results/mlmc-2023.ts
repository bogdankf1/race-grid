import type { EventResults } from './types'

// Michelin Le Mans Cup 2023 results
// Source: en.wikipedia.org/wiki/2023_Le_Mans_Cup — verified April 2026
export const mlmcResults2023: Record<string, EventResults> = {
  'mlmc-2023-barcelona': {
    endurance: {
      overall: { driverIds: ['gerbi', 'henrion-g'], teamId: 'team-virage' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['gerbi', 'henrion-g'], teamId: 'team-virage' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['hasse-clot', 'robin-a'], teamId: 'racing-spirit-of-leman' },
          ],
        },
      ],
    },
  },
  'mlmc-2023-le-mans': {
    endurance: {
      overall: { driverIds: ['bell-matt', 'melsom'], teamId: 'nielsen-racing' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['bell-matt', 'melsom'], teamId: 'nielsen-racing' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['hesse-m', 'whale'], teamId: 'team-wrt' },
          ],
        },
      ],
    },
  },
  'mlmc-2023-le-castellet': {
    endurance: {
      overall: { driverIds: ['gerbi', 'henrion-g'], teamId: 'team-virage' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['gerbi', 'henrion-g'], teamId: 'team-virage' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['kujala', 'rindone'], teamId: 'leipert-motorsport' },
          ],
        },
      ],
    },
  },
  'mlmc-2023-aragon': {
    endurance: {
      overall: { driverIds: ['bell-matt', 'melsom'], teamId: 'nielsen-racing' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['bell-matt', 'melsom'], teamId: 'nielsen-racing' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['cozzolino', 'koizumi'], teamId: 'af-corse' },
          ],
        },
      ],
    },
  },
  'mlmc-2023-spa': {
    endurance: {
      overall: { driverIds: ['boyd', 'schauerman'], teamId: 'united-autosports' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['boyd', 'schauerman'], teamId: 'united-autosports' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['cole-m', 'fielding'], teamId: 'steller-motorsport' },
          ],
        },
      ],
    },
  },
  'mlmc-2023-portimao': {
    endurance: {
      overall: { driverIds: ['skelton', 'wells'], teamId: 'nielsen-racing' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['skelton', 'wells'], teamId: 'nielsen-racing' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['abril-v', 'hamaguchi'], teamId: 'iron-lynx' },
          ],
        },
      ],
    },
  },
}
