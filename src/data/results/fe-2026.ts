import type { EventResults } from './types'

// Formula E Season 12 (2025-26) results — verified from fiaformulae.com
export const feResults2026: Record<string, EventResults> = {
  'fe-2026-sao-paulo': {
    race: {
      overall: { driverIds: ['j-dennis'], teamId: 'andretti-fe' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['j-dennis'], teamId: 'andretti-fe' },
          { position: 2, driverIds: ['rowland'], teamId: 'nissan-fe' },
          { position: 3, driverIds: ['n-cassidy'], teamId: 'citroen-racing-fe' },
        ],
      }],
    },
  },
  'fe-2026-mexico-city': {
    race: {
      overall: { driverIds: ['n-cassidy'], teamId: 'citroen-racing-fe' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['n-cassidy'], teamId: 'citroen-racing-fe' },
          { position: 2, driverIds: ['mortara'], teamId: 'mahindra-racing' },
          { position: 3, driverIds: ['rowland'], teamId: 'nissan-fe' },
        ],
      }],
    },
  },
  'fe-2026-miami': {
    race: {
      overall: { driverIds: ['m-evans'], teamId: 'jaguar-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['m-evans'], teamId: 'jaguar-racing' },
          { position: 2, driverIds: ['n-muller'], teamId: 'porsche-fe' },
          { position: 3, driverIds: ['wehrlein'], teamId: 'porsche-fe' },
        ],
      }],
    },
  },
  'fe-2026-jeddah-1': {
    race: {
      overall: { driverIds: ['wehrlein'], teamId: 'porsche-fe' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['wehrlein'], teamId: 'porsche-fe' },
          { position: 2, driverIds: ['mortara'], teamId: 'mahindra-racing' },
          { position: 3, driverIds: ['m-evans'], teamId: 'jaguar-racing' },
        ],
      }],
    },
  },
  'fe-2026-jeddah-2': {
    race: {
      overall: { driverIds: ['da-costa'], teamId: 'jaguar-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['da-costa'], teamId: 'jaguar-racing' },
          { position: 2, driverIds: ['buemi'], teamId: 'envision-racing' },
          { position: 3, driverIds: ['rowland'], teamId: 'nissan-fe' },
        ],
      }],
    },
  },
  'fe-2026-madrid': {
    race: {
      overall: { driverIds: ['da-costa'], teamId: 'jaguar-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['da-costa'], teamId: 'jaguar-racing' },
          { position: 2, driverIds: ['m-evans'], teamId: 'jaguar-racing' },
          { position: 3, driverIds: ['wehrlein'], teamId: 'porsche-fe' },
        ],
      }],
    },
  },
}
