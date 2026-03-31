import type { EventResults } from './types'

// WRC 2026 results — verified from wrc.com, dirtfish.com
export const wrcResults2026: Record<string, EventResults> = {
  'wrc-2026-monte-carlo': {
    stage: {
      overall: { driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-gazoo-racing' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-gazoo-racing' },
          { position: 2, driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
          { position: 3, driverIds: ['evans', 'martin'], teamId: 'toyota-gazoo-racing' },
        ],
      }],
    },
  },
  'wrc-2026-sweden': {
    stage: {
      overall: { driverIds: ['tanak', 'jarveoja'], teamId: 'hyundai-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['tanak', 'jarveoja'], teamId: 'hyundai-wrt' },
          { position: 2, driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-gazoo-racing' },
          { position: 3, driverIds: ['fourmaux', 'coria'], teamId: 'hyundai-wrt' },
        ],
      }],
    },
  },
  'wrc-2026-kenya': {
    stage: {
      overall: { driverIds: ['katsuta', 'johnston'], teamId: 'toyota-gazoo-racing' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['katsuta', 'johnston'], teamId: 'toyota-gazoo-racing' },
          { position: 2, driverIds: ['fourmaux', 'coria'], teamId: 'hyundai-wrt' },
          { position: 3, driverIds: ['pajari'], teamId: 'toyota-gazoo-racing' },
        ],
      }],
    },
  },
}
