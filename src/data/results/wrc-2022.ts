import type { EventResults } from './types'

// WRC 2022 results — verified from wrc.com, Wikipedia
// Champion: Kalle Rovanperä (Toyota Gazoo Racing WRT)
export const wrcResults2022: Record<string, EventResults> = {
  'wrc-2022-monte-carlo': {
    stage: {
      overall: { driverIds: ['s-loeb', 'galmiche'], teamId: 'm-sport-ford' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['s-loeb', 'galmiche'], teamId: 'm-sport-ford' },
          { position: 2, driverIds: ['ogier', 'veillas'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
        ],
      }],
    },
  },
  'wrc-2022-sweden': {
    stage: {
      overall: { driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
          { position: 3, driverIds: ['tanak', 'jarveoja'], teamId: 'hyundai-wrt' },
        ],
      }],
    },
  },
  'wrc-2022-croatia': {
    stage: {
      overall: { driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['tanak', 'jarveoja'], teamId: 'hyundai-wrt' },
          { position: 3, driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
        ],
      }],
    },
  },
  'wrc-2022-portugal': {
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
  'wrc-2022-italy': {
    stage: {
      overall: { driverIds: ['tanak', 'jarveoja'], teamId: 'hyundai-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['tanak', 'jarveoja'], teamId: 'hyundai-wrt' },
          { position: 2, driverIds: ['lappi', 'ferm'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['katsuta', 'johnston'], teamId: 'toyota-wrt' },
        ],
      }],
    },
  },
  'wrc-2022-kenya': {
    stage: {
      overall: { driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['katsuta', 'johnston'], teamId: 'toyota-wrt' },
        ],
      }],
    },
  },
  'wrc-2022-estonia': {
    stage: {
      overall: { driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['tanak', 'jarveoja'], teamId: 'hyundai-wrt' },
          { position: 3, driverIds: ['lappi', 'ferm'], teamId: 'toyota-wrt' },
        ],
      }],
    },
  },
  'wrc-2022-finland': {
    stage: {
      overall: { driverIds: ['tanak', 'jarveoja'], teamId: 'hyundai-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['tanak', 'jarveoja'], teamId: 'hyundai-wrt' },
          { position: 2, driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['lappi', 'ferm'], teamId: 'toyota-wrt' },
        ],
      }],
    },
  },
  'wrc-2022-belgium': {
    stage: {
      overall: { driverIds: ['tanak', 'jarveoja'], teamId: 'hyundai-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['tanak', 'jarveoja'], teamId: 'hyundai-wrt' },
          { position: 2, driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['lappi', 'ferm'], teamId: 'toyota-wrt' },
        ],
      }],
    },
  },
  'wrc-2022-greece': {
    stage: {
      overall: { driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
          { position: 2, driverIds: ['sordo', 'carrera'], teamId: 'hyundai-wrt' },
          { position: 3, driverIds: ['tanak', 'jarveoja'], teamId: 'hyundai-wrt' },
        ],
      }],
    },
  },
  'wrc-2022-new-zealand': {
    stage: {
      overall: { driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['tanak', 'jarveoja'], teamId: 'hyundai-wrt' },
          { position: 3, driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
        ],
      }],
    },
  },
  'wrc-2022-spain': {
    stage: {
      overall: { driverIds: ['ogier', 'veillas'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['ogier', 'veillas'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
        ],
      }],
    },
  },
  'wrc-2022-japan': {
    stage: {
      overall: { driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
          { position: 2, driverIds: ['tanak', 'jarveoja'], teamId: 'hyundai-wrt' },
          { position: 3, driverIds: ['katsuta', 'johnston'], teamId: 'toyota-wrt' },
        ],
      }],
    },
  },
}
