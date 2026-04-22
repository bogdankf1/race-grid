import type { EventResults } from './types'

// GT World Challenge America 2025 results
export const gtwcamResults2025: Record<string, EventResults> = {
  'gtwcam-2025-sonoma': {
    race: {
      overall: { driverIds: ['koch', 'de-phillippi'], teamId: 'random-vandals-racing' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['koch', 'de-phillippi'], teamId: 'random-vandals-racing' },
          { position: 2, driverIds: ['sedgwick', 'heylen'], teamId: 'rs1' },
          { position: 3, driverIds: ['stephens', 'grenier'], teamId: 'jmf-motorsports' },
        ],
      }],
    },
  },
  'gtwcam-2025-cota': {
    race: {
      overall: { driverIds: ['ellis-p', 'burton-j'], teamId: 'regulator-racing' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['ellis-p', 'burton-j'], teamId: 'regulator-racing' },
          { position: 2, driverIds: ['stephens', 'grenier'], teamId: 'jmf-motorsports' },
          { position: 3, driverIds: ['sedgwick', 'heylen'], teamId: 'rs1' },
        ],
      }],
    },
  },
  'gtwcam-2025-sebring': {
    race: {
      overall: { driverIds: ['koch', 'de-phillippi'], teamId: 'random-vandals-racing' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['koch', 'de-phillippi'], teamId: 'random-vandals-racing' },
          { position: 2, driverIds: ['heylen', 'sedgwick'], teamId: 'rs1' },
          { position: 3, driverIds: ['stephens', 'grenier'], teamId: 'jmf-motorsports' },
        ],
      }],
    },
  },
  'gtwcam-2025-vir': {
    race: {
      overall: { driverIds: ['sedgwick', 'heylen'], teamId: 'rs1' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['sedgwick', 'heylen'], teamId: 'rs1' },
          { position: 2, driverIds: ['stephens', 'grenier'], teamId: 'jmf-motorsports' },
          { position: 3, driverIds: ['koch', 'de-phillippi'], teamId: 'random-vandals-racing' },
        ],
      }],
    },
  },
  'gtwcam-2025-road-america': {
    race: {
      overall: { driverIds: ['stephens', 'grenier'], teamId: 'jmf-motorsports' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['stephens', 'grenier'], teamId: 'jmf-motorsports' },
          { position: 2, driverIds: ['koch', 'de-phillippi'], teamId: 'random-vandals-racing' },
          { position: 3, driverIds: ['sedgwick', 'heylen'], teamId: 'rs1' },
        ],
      }],
    },
  },
  'gtwcam-2025-barber': {
    race: {
      overall: { driverIds: ['stephens', 'grenier'], teamId: 'jmf-motorsports' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['stephens', 'grenier'], teamId: 'jmf-motorsports' },
          { position: 2, driverIds: ['sedgwick', 'heylen'], teamId: 'rs1' },
          { position: 3, driverIds: ['koch', 'de-phillippi'], teamId: 'random-vandals-racing' },
        ],
      }],
    },
  },
  'gtwcam-2025-indianapolis': {
    endurance: {
      overall: { driverIds: ['van-der-linde-k', 'weerts', 'rossi'], teamId: 'team-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['van-der-linde-k', 'weerts', 'rossi'], teamId: 'team-wrt' },
          { position: 2, driverIds: ['engel', 'martin-m', 'kalender'], teamId: 'gruppem-racing' },
          { position: 3, driverIds: ['marciello', 'farfus', 'al-zubair'], teamId: 'team-wrt' },
        ],
      }],
    },
  },
}
