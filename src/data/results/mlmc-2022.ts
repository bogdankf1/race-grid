import type { EventResults } from './types'

// Michelin Le Mans Cup 2022 results
// Source: en.wikipedia.org/wiki/2022_Le_Mans_Cup — verified April 2026
export const mlmcResults2022: Record<string, EventResults> = {
  'mlmc-2022-le-castellet': {
    endurance: {
      overall: { driverIds: ['dillmann', 'mattschull'], teamId: 'racing-spirit-of-leman' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['dillmann', 'mattschull'], teamId: 'racing-spirit-of-leman' },
            { position: 2, driverIds: ['hunt-f', 'siljehaug'], teamId: 'reiter-engineering' },
            { position: 3, driverIds: ['noble-c', 'wells'], teamId: 'nielsen-racing' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['jensen-k', 'poulsen-k'], teamId: 'gmb-motorsport' },
            { position: 2, driverIds: ['pattrick', 'nouet'], teamId: 'bullitt-racing' },
            { position: 3, driverIds: ['forgione', 'montermini'], teamId: 'af-corse' },
          ],
        },
      ],
    },
  },
  'mlmc-2022-imola': {
    endurance: {
      overall: { driverIds: ['jakobsen', 'smith-maurice'], teamId: 'cool-racing' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['jakobsen', 'smith-maurice'], teamId: 'cool-racing' },
            { position: 2, driverIds: ['latorre', 'patterson'], teamId: 'united-autosports' },
            { position: 3, driverIds: ['bukhantsov', 'winslow'], teamId: 'dkr-engineering' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['birch', 'moller'], teamId: 'gmb-motorsport' },
            { position: 2, driverIds: ['robin-a', 'robin-m'], teamId: 'team-wrt' },
            { position: 3, driverIds: ['babini', 'busnelli'], teamId: 'ebimotors' },
          ],
        },
      ],
    },
  },
  'mlmc-2022-le-mans': {
    endurance: {
      overall: { driverIds: ['dillmann', 'mattschull'], teamId: 'racing-spirit-of-leman' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['dillmann', 'mattschull'], teamId: 'racing-spirit-of-leman' },
            { position: 2, driverIds: ['de-sadeleer', 'rousset'], teamId: 'mv2s-racing' },
            { position: 3, driverIds: ['noble-c', 'wells'], teamId: 'nielsen-racing' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['babini', 'busnelli'], teamId: 'ebimotors' },
            { position: 2, driverIds: ['forgione', 'montermini'], teamId: 'af-corse' },
            { position: 3, driverIds: ['pattrick', 'hasse-clot'], teamId: 'bullitt-racing' },
          ],
        },
      ],
    },
  },
  'mlmc-2022-monza': {
    endurance: {
      overall: { driverIds: ['dillmann', 'mattschull'], teamId: 'racing-spirit-of-leman' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['dillmann', 'mattschull'], teamId: 'racing-spirit-of-leman' },
            { position: 2, driverIds: ['hunt-f', 'siljehaug'], teamId: 'reiter-engineering' },
            { position: 3, driverIds: ['jakobsen', 'smith-maurice'], teamId: 'cool-racing' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['pedersen-l', 'pedersen-m'], teamId: 'gmb-motorsport' },
            { position: 2, driverIds: ['forgione', 'montermini'], teamId: 'af-corse' },
            { position: 3, driverIds: ['babini', 'busnelli'], teamId: 'ebimotors' },
          ],
        },
      ],
    },
  },
  'mlmc-2022-spa': {
    endurance: {
      overall: { driverIds: ['droux-d', 'sanjuan'], teamId: 'graff-racing' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['droux-d', 'sanjuan'], teamId: 'graff-racing' },
            { position: 2, driverIds: ['hunt-f', 'siljehaug'], teamId: 'reiter-engineering' },
            { position: 3, driverIds: ['skelton', 'wolff-j'], teamId: 'racing-spirit-of-leman' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['birch', 'moller'], teamId: 'gmb-motorsport' },
            { position: 2, driverIds: ['pattrick', 'hasse-clot'], teamId: 'bullitt-racing' },
            { position: 3, driverIds: ['babini', 'busnelli'], teamId: 'ebimotors' },
          ],
        },
      ],
    },
  },
  'mlmc-2022-portimao': {
    endurance: {
      overall: { driverIds: ['hunt-f', 'siljehaug'], teamId: 'reiter-engineering' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['hunt-f', 'siljehaug'], teamId: 'reiter-engineering' },
            { position: 2, driverIds: ['dillmann', 'mattschull'], teamId: 'racing-spirit-of-leman' },
            { position: 3, driverIds: ['talkanitsa-sr', 'talkanitsa-jr'], teamId: 'at-racing' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['cozzolino', 'koizumi'], teamId: 'af-corse' },
            { position: 2, driverIds: ['birch', 'moller'], teamId: 'gmb-motorsport' },
            { position: 3, driverIds: ['jensen-k', 'poulsen-k'], teamId: 'gmb-motorsport' },
          ],
        },
      ],
    },
  },
}
