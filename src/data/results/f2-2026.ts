import type { EventResults } from './types'

// FIA Formula 2 2026 results — verified from fiaformula2.com, Wikipedia
export const f2Results2026: Record<string, EventResults> = {
  'f2-2026-melbourne': {
    qualifying: {
      overall: { driverIds: ['beganovic'], teamId: 'dams' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['beganovic'], teamId: 'dams' },
          { position: 2, driverIds: ['stenshorne'], teamId: 'rodin-motorsport' },
          { position: 3, driverIds: ['dunne'], teamId: 'rodin-motorsport' },
        ],
      }],
    },
    sprint: {
      overall: { driverIds: ['durksen'], teamId: 'invicta-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['durksen'], teamId: 'invicta-racing' },
          { position: 2, driverIds: ['leon-n'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['dunne'], teamId: 'rodin-motorsport' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['tsolov'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['tsolov'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['camara'], teamId: 'invicta-racing' },
          { position: 3, driverIds: ['van-hoepen'], teamId: 'trident' },
        ],
      }],
    },
  },
}
