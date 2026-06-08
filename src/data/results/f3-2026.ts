import type { EventResults } from './types'

// FIA Formula 3 2026 results — verified from fiaformula3.com, Wikipedia
export const f3Results2026: Record<string, EventResults> = {
  'f3-2026-monaco': {
    qualifying: {
      overall: { driverIds: ['nael'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nael'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['slater'], teamId: 'trident' },
          { position: 3, driverIds: ['rivera-e'], teamId: 'campos-racing' },
        ],
      }],
    },
    sprint: {
      // On-the-road winner Hiyu Yamakoshi disqualified in post-race scrutineering;
      // Xie inherited the win (official classification).
      overall: { driverIds: ['xie'], teamId: 'dams' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['xie'], teamId: 'dams' },
          { position: 2, driverIds: ['del-pino'], teamId: 'van-amersfoort-racing' },
          { position: 3, driverIds: ['clerot'], teamId: 'rodin-motorsport' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['badoer'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['badoer'], teamId: 'rodin-motorsport' },
          { position: 2, driverIds: ['nael'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['slater'], teamId: 'trident' },
        ],
      }],
    },
  },
  'f3-2026-melbourne': {
    qualifying: {
      overall: { driverIds: ['ugochukwu'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ugochukwu'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['del-pino'], teamId: 'van-amersfoort-racing' },
          { position: 3, driverIds: ['slater'], teamId: 'trident' },
        ],
      }],
    },
    sprint: {
      overall: { driverIds: ['ugochukwu'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ugochukwu'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['kato'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['del-pino'], teamId: 'van-amersfoort-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['ugochukwu'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ugochukwu'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['slater'], teamId: 'trident' },
          { position: 3, driverIds: ['del-pino'], teamId: 'van-amersfoort-racing' },
        ],
      }],
    },
  },
}
