import type { EventResults } from './types'

// GT World Challenge Asia 2026 results
export const gtwcasiaResults2026: Record<string, EventResults> = {
  'gtwcasia-2026-mandalika': {
    // Race 1: Gelael (Garage 75), Race 2: Hartog/Xu Liu (Phantom Global)
    race: {
      overall: { driverIds: ['gelael'], teamId: 'garage-75' },
      classes: [{
        className: 'Race Winners',
        podium: [
          { position: 1, driverIds: ['gelael'], teamId: 'garage-75' },
          { position: 2, driverIds: ['hartog', 'xu-liu'], teamId: 'phantom-global-racing' },
        ],
      }],
    },
  },
  'gtwcasia-2026-sepang': {
    race: {
      overall: { driverIds: ['lu-wei', 'picariello'], teamId: 'origine-motorsport' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['lu-wei', 'picariello'], teamId: 'origine-motorsport' },
          { position: 2, driverIds: ['xu-liu', 'boccolacci'], teamId: 'phantom-global-racing' },
          { position: 3, driverIds: ['huang-ruohan', 'ghiretti'], teamId: 'absolute-racing' },
        ],
      }],
    },
  },
}
