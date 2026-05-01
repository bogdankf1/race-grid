import type { EventResults } from './types'

// WRC 2024 results — verified from wrc.com, Wikipedia
// Champion: Thierry Neuville (Hyundai Shell Mobis WRT)
export const wrcResults2024: Record<string, EventResults> = {
  'wrc-2024-monte-carlo': {
    stage: {
      overall: { driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
          { position: 2, driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
        ],
      }],
    },
  },
  'wrc-2024-sweden': {
    stage: {
      overall: { driverIds: ['lappi', 'ferm'], teamId: 'hyundai-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['lappi', 'ferm'], teamId: 'hyundai-wrt' },
          { position: 2, driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['fourmaux', 'coria'], teamId: 'm-sport-ford' },
        ],
      }],
    },
  },
  'wrc-2024-kenya': {
    stage: {
      overall: { driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['katsuta', 'johnston'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['fourmaux', 'coria'], teamId: 'm-sport-ford' },
        ],
      }],
    },
  },
  'wrc-2024-croatia': {
    stage: {
      overall: { driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
        ],
      }],
    },
  },
  'wrc-2024-portugal': {
    stage: {
      overall: { driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['tanak', 'jarveoja'], teamId: 'hyundai-wrt' },
          { position: 3, driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
        ],
      }],
    },
  },
  'wrc-2024-italy': {
    stage: {
      overall: { driverIds: ['tanak', 'jarveoja'], teamId: 'hyundai-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['tanak', 'jarveoja'], teamId: 'hyundai-wrt' },
          { position: 2, driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['sordo', 'carrera'], teamId: 'hyundai-wrt' },
        ],
      }],
    },
  },
  'wrc-2024-poland': {
    stage: {
      overall: { driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['fourmaux', 'coria'], teamId: 'm-sport-ford' },
        ],
      }],
    },
  },
  'wrc-2024-latvia': {
    stage: {
      overall: { driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['tanak', 'jarveoja'], teamId: 'hyundai-wrt' },
        ],
      }],
    },
  },
  'wrc-2024-finland': {
    stage: {
      overall: { driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
          { position: 3, driverIds: ['fourmaux', 'coria'], teamId: 'm-sport-ford' },
        ],
      }],
    },
  },
  'wrc-2024-greece': {
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
  'wrc-2024-chile': {
    stage: {
      overall: { driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['tanak', 'jarveoja'], teamId: 'hyundai-wrt' },
        ],
      }],
    },
  },
  'wrc-2024-central-europe': {
    stage: {
      overall: { driverIds: ['tanak', 'jarveoja'], teamId: 'hyundai-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['tanak', 'jarveoja'], teamId: 'hyundai-wrt' },
          { position: 2, driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
        ],
      }],
    },
  },
  'wrc-2024-japan': {
    stage: {
      overall: { driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['evans', 'scott-martin'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['fourmaux', 'coria'], teamId: 'm-sport-ford' },
        ],
      }],
    },
  },
}
