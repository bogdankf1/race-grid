import type { EventResults } from './types'

// WRC 2025 results — verified from wrc.com, en.wikipedia.org, motorsport.com
export const wrcResults2025: Record<string, EventResults> = {
  'wrc-2025-monte-carlo': {
    stage: {
      overall: { driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['fourmaux', 'coria'], teamId: 'hyundai-wrt' },
          { position: 3, driverIds: ['evans', 'martin'], teamId: 'toyota-wrt' },
        ],
      }],
    },
  },
  'wrc-2025-sweden': {
    stage: {
      overall: { driverIds: ['evans', 'martin'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['evans', 'martin'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['katsuta', 'johnston'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['Tanak', 'Jarveoja'], teamId: 'hyundai-wrt' },
        ],
      }],
    },
  },
  'wrc-2025-kenya': {
    stage: {
      overall: { driverIds: ['evans', 'martin'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['evans', 'martin'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['Tanak', 'Jarveoja'], teamId: 'hyundai-wrt' },
          { position: 3, driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
        ],
      }],
    },
  },
  'wrc-2025-canary-islands': {
    stage: {
      overall: { driverIds: ['Rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['Rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['evans', 'martin'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
        ],
      }],
    },
  },
  'wrc-2025-portugal': {
    stage: {
      overall: { driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['Rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['Tanak', 'Jarveoja'], teamId: 'hyundai-wrt' },
        ],
      }],
    },
  },
  'wrc-2025-italy': {
    stage: {
      overall: { driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['evans', 'martin'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['Rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
        ],
      }],
    },
  },
  'wrc-2025-greece': {
    stage: {
      overall: { driverIds: ['Tanak', 'Jarveoja'], teamId: 'hyundai-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['Tanak', 'Jarveoja'], teamId: 'hyundai-wrt' },
          { position: 2, driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['Rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
        ],
      }],
    },
  },
  'wrc-2025-estonia': {
    stage: {
      overall: { driverIds: ['solberg', 'edmondson'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['solberg', 'edmondson'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['Tanak', 'Jarveoja'], teamId: 'hyundai-wrt' },
          { position: 3, driverIds: ['Rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
        ],
      }],
    },
  },
  'wrc-2025-finland': {
    stage: {
      overall: { driverIds: ['Rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['Rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['evans', 'martin'], teamId: 'toyota-wrt' },
        ],
      }],
    },
  },
  'wrc-2025-paraguay': {
    stage: {
      overall: { driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['evans', 'martin'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['Rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
        ],
      }],
    },
  },
  'wrc-2025-chile': {
    stage: {
      overall: { driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['Rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['evans', 'martin'], teamId: 'toyota-wrt' },
        ],
      }],
    },
  },
  'wrc-2025-central-europe': {
    stage: {
      overall: { driverIds: ['Rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['Rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['evans', 'martin'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['Tanak', 'Jarveoja'], teamId: 'hyundai-wrt' },
        ],
      }],
    },
  },
  'wrc-2025-japan': {
    stage: {
      overall: { driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
          { position: 2, driverIds: ['Rovanpera', 'halttunen'], teamId: 'toyota-wrt' },
          { position: 3, driverIds: ['evans', 'martin'], teamId: 'toyota-wrt' },
        ],
      }],
    },
  },
  'wrc-2025-saudi-arabia': {
    stage: {
      overall: { driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['neuville', 'wydaeghe'], teamId: 'hyundai-wrt' },
          { position: 2, driverIds: ['fourmaux', 'coria'], teamId: 'hyundai-wrt' },
          { position: 3, driverIds: ['ogier', 'landais'], teamId: 'toyota-wrt' },
        ],
      }],
    },
  },
}
