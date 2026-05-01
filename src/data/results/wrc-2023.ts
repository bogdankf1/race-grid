import type { EventResults } from './types'

// WRC 2023 results — verified from wrc.com, Wikipedia
// Champion: Kalle Rovanperä (Toyota Gazoo Racing WRT)
export const wrcResults2023: Record<string, EventResults> = {
  'wrc-2023-monte-carlo': {
    stage: {
      overall: { driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
        ],
      }],
    },
  },
  'wrc-2023-sweden': {
    stage: {
      overall: { driverIds: ['tanak', 'jarveoja'], teamId: 'm-sport-ford' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['tanak', 'jarveoja'], teamId: 'm-sport-ford' },
          { position: 2, driverIds: ['breen', 'fulton'], teamId: 'hyundai-wrt' },
          { position: 3, driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
        ],
      }],
    },
  },
  'wrc-2023-mexico': {
    stage: {
      overall: { driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
          { position: 3, driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
        ],
      }],
    },
  },
  'wrc-2023-croatia': {
    stage: {
      overall: { driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['tanak', 'jarveoja'], teamId: 'm-sport-ford' },
          { position: 3, driverIds: ['lappi', 'ferm'], teamId: 'hyundai-wrt' },
        ],
      }],
    },
  },
  'wrc-2023-portugal': {
    stage: {
      overall: { driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['sordo', 'carrera'], teamId: 'hyundai-wrt' },
          { position: 3, driverIds: ['lappi', 'ferm'], teamId: 'hyundai-wrt' },
        ],
      }],
    },
  },
  'wrc-2023-italy': {
    stage: {
      overall: { driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
          { position: 2, driverIds: ['lappi', 'ferm'], teamId: 'hyundai-wrt' },
          { position: 3, driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
        ],
      }],
    },
  },
  'wrc-2023-kenya': {
    stage: {
      overall: { driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
        ],
      }],
    },
  },
  'wrc-2023-estonia': {
    stage: {
      overall: { driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
          { position: 3, driverIds: ['lappi', 'ferm'], teamId: 'hyundai-wrt' },
        ],
      }],
    },
  },
  'wrc-2023-finland': {
    stage: {
      overall: { driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
          { position: 3, driverIds: ['katsuta', 'johnston'], teamId: 'toyota-wrt' },
        ],
      }],
    },
  },
  'wrc-2023-greece': {
    stage: {
      overall: { driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['sordo', 'carrera'], teamId: 'hyundai-wrt' },
        ],
      }],
    },
  },
  'wrc-2023-chile': {
    stage: {
      overall: { driverIds: ['tanak', 'jarveoja'], teamId: 'm-sport-ford' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['tanak', 'jarveoja'], teamId: 'm-sport-ford' },
          { position: 2, driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
          { position: 3, driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
        ],
      }],
    },
  },
  'wrc-2023-central-europe': {
    stage: {
      overall: { driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
          { position: 2, driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['tanak', 'jarveoja'], teamId: 'm-sport-ford' },
        ],
      }],
    },
  },
  'wrc-2023-japan': {
    stage: {
      overall: { driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
        ],
      }],
    },
  },
}
