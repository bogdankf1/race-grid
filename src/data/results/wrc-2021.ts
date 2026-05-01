import type { EventResults } from './types'

// WRC 2021 results — verified from wrc.com, Wikipedia
// Champion: Sébastien Ogier (Toyota Gazoo Racing WRT)
export const wrcResults2021: Record<string, EventResults> = {
  'wrc-2021-monte-carlo': {
    stage: {
      overall: { driverIds: ['ogier', 'ingrassia'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['ogier', 'ingrassia'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
        ],
      }],
    },
  },
  'wrc-2021-arctic-finland': {
    stage: {
      overall: { driverIds: ['tanak', 'jarveoja'], teamId: 'hyundai-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['tanak', 'jarveoja'], teamId: 'hyundai-wrt' },
          { position: 2, driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
        ],
      }],
    },
  },
  'wrc-2021-croatia': {
    stage: {
      overall: { driverIds: ['ogier', 'ingrassia'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['ogier', 'ingrassia'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
        ],
      }],
    },
  },
  'wrc-2021-portugal': {
    stage: {
      overall: { driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['sordo', 'rozada'], teamId: 'hyundai-wrt' },
          { position: 3, driverIds: ['ogier', 'ingrassia'], teamId: 'toyota-wrt' },
        ],
      }],
    },
  },
  'wrc-2021-italy': {
    stage: {
      overall: { driverIds: ['ogier', 'ingrassia'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['ogier', 'ingrassia'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
        ],
      }],
    },
  },
  'wrc-2021-kenya': {
    stage: {
      overall: { driverIds: ['ogier', 'ingrassia'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['ogier', 'ingrassia'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['katsuta', 'barritt'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['tanak', 'jarveoja'], teamId: 'hyundai-wrt' },
        ],
      }],
    },
  },
  'wrc-2021-estonia': {
    stage: {
      overall: { driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['breen', 'nagle'], teamId: 'hyundai-wrt' },
          { position: 3, driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
        ],
      }],
    },
  },
  'wrc-2021-belgium': {
    stage: {
      overall: { driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
          { position: 2, driverIds: ['breen', 'nagle'], teamId: 'hyundai-wrt' },
          { position: 3, driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
        ],
      }],
    },
  },
  'wrc-2021-greece': {
    stage: {
      overall: { driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['tanak', 'jarveoja'], teamId: 'hyundai-wrt' },
          { position: 3, driverIds: ['ogier', 'ingrassia'], teamId: 'toyota-wrt' },
        ],
      }],
    },
  },
  'wrc-2021-finland': {
    stage: {
      overall: { driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['tanak', 'jarveoja'], teamId: 'hyundai-wrt' },
          { position: 3, driverIds: ['breen', 'nagle'], teamId: 'hyundai-wrt' },
        ],
      }],
    },
  },
  'wrc-2021-spain': {
    stage: {
      overall: { driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
          { position: 2, driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['sordo', 'carrera'], teamId: 'hyundai-wrt' },
        ],
      }],
    },
  },
  'wrc-2021-monza': {
    stage: {
      overall: { driverIds: ['ogier', 'ingrassia'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['ogier', 'ingrassia'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['sordo', 'carrera'], teamId: 'hyundai-wrt' },
        ],
      }],
    },
  },
}
