import type { EventResults } from './types'

// GT World Challenge Asia 2024 results
export const gtwcasiaResults2024: Record<string, EventResults> = {
  'gtwcasia-2024-sepang': {
    race: {
      overall: { driverIds: ['heinrich', 'lu-wei'], teamId: 'origine-motorsport' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['heinrich', 'lu-wei'], teamId: 'origine-motorsport' },
        ],
      }],
    },
  },
  'gtwcasia-2024-buriram': {
    race: {
      overall: { driverIds: ['lu-wei', 'pilet'], teamId: 'origine-motorsport' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['lu-wei', 'pilet'], teamId: 'origine-motorsport' },
        ],
      }],
    },
  },
  'gtwcasia-2024-fuji': {
    race: {
      overall: { driverIds: ['xu-liu', 'picariello'], teamId: 'absolute-racing' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['xu-liu', 'picariello'], teamId: 'absolute-racing' },
        ],
      }],
    },
  },
  'gtwcasia-2024-suzuka': {
    race: {
      overall: { driverIds: ['gounon', 'zhou-b'], teamId: 'climax-racing' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['gounon', 'zhou-b'], teamId: 'climax-racing' },
        ],
      }],
    },
  },
  'gtwcasia-2024-okayama': {
    race: {
      overall: { driverIds: ['liberati', 'bian-ye'], teamId: 'vsr-racing' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['liberati', 'bian-ye'], teamId: 'vsr-racing' },
        ],
      }],
    },
  },
  'gtwcasia-2024-shanghai': {
    race: {
      overall: { driverIds: ['ye-hongli', 'yuan-bo'], teamId: 'origine-motorsport' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['ye-hongli', 'yuan-bo'], teamId: 'origine-motorsport' },
        ],
      }],
    },
  },
}
