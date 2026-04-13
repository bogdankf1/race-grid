import type { EventResults } from './types'

// Formula E Season 11 (2024-25) results — verified from fiaformulae.com / Wikipedia
export const feResults2025: Record<string, EventResults> = {
  'fe-2025-sao-paulo': {
    race: {
      overall: { driverIds: ['m-evans'], teamId: 'jaguar-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['m-evans'], teamId: 'jaguar-racing' },
          { position: 2, driverIds: ['da-costa'], teamId: 'porsche-fe' },
          { position: 3, driverIds: ['barnard'], teamId: 'neom-mclaren-fe' },
        ],
      }],
    },
  },
  'fe-2025-mexico-city': {
    race: {
      overall: { driverIds: ['rowland'], teamId: 'nissan-fe' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['rowland'], teamId: 'nissan-fe' },
          { position: 2, driverIds: ['da-costa'], teamId: 'porsche-fe' },
          { position: 3, driverIds: ['wehrlein'], teamId: 'porsche-fe' },
        ],
      }],
    },
  },
  'fe-2025-jeddah-1': {
    race: {
      overall: { driverIds: ['gunther'], teamId: 'ds-penske' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['gunther'], teamId: 'ds-penske' },
          { position: 2, driverIds: ['rowland'], teamId: 'nissan-fe' },
          { position: 3, driverIds: ['barnard'], teamId: 'neom-mclaren-fe' },
        ],
      }],
    },
  },
  'fe-2025-jeddah-2': {
    race: {
      overall: { driverIds: ['rowland'], teamId: 'nissan-fe' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['rowland'], teamId: 'nissan-fe' },
          { position: 2, driverIds: ['de-vries'], teamId: 'mahindra-racing' },
          { position: 3, driverIds: ['jake-hughes'], teamId: 'maserati-msg' },
        ],
      }],
    },
  },
  'fe-2025-miami': {
    race: {
      overall: { driverIds: ['wehrlein'], teamId: 'porsche-fe' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['wehrlein'], teamId: 'porsche-fe' },
          { position: 2, driverIds: ['di-grassi'], teamId: 'lola-yamaha-abt' },
          { position: 3, driverIds: ['da-costa'], teamId: 'porsche-fe' },
        ],
      }],
    },
  },
  'fe-2025-monaco-1': {
    race: {
      overall: { driverIds: ['rowland'], teamId: 'nissan-fe' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['rowland'], teamId: 'nissan-fe' },
          { position: 2, driverIds: ['de-vries'], teamId: 'mahindra-racing' },
          { position: 3, driverIds: ['j-dennis'], teamId: 'andretti-fe' },
        ],
      }],
    },
  },
  'fe-2025-monaco-2': {
    race: {
      overall: { driverIds: ['buemi'], teamId: 'envision-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['buemi'], teamId: 'envision-racing' },
          { position: 2, driverIds: ['rowland'], teamId: 'nissan-fe' },
          { position: 3, driverIds: ['n-cassidy'], teamId: 'jaguar-racing' },
        ],
      }],
    },
  },
  'fe-2025-tokyo-1': {
    race: {
      overall: { driverIds: ['vandoorne'], teamId: 'maserati-msg' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['vandoorne'], teamId: 'maserati-msg' },
          { position: 2, driverIds: ['rowland'], teamId: 'nissan-fe' },
          { position: 3, driverIds: ['barnard'], teamId: 'neom-mclaren-fe' },
        ],
      }],
    },
  },
  'fe-2025-tokyo-2': {
    race: {
      overall: { driverIds: ['rowland'], teamId: 'nissan-fe' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['rowland'], teamId: 'nissan-fe' },
          { position: 2, driverIds: ['wehrlein'], teamId: 'porsche-fe' },
          { position: 3, driverIds: ['ticktum'], teamId: 'cupra-kiro' },
        ],
      }],
    },
  },
  'fe-2025-shanghai-1': {
    race: {
      overall: { driverIds: ['gunther'], teamId: 'ds-penske' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['gunther'], teamId: 'ds-penske' },
          { position: 2, driverIds: ['ticktum'], teamId: 'cupra-kiro' },
          { position: 3, driverIds: ['barnard'], teamId: 'neom-mclaren-fe' },
        ],
      }],
    },
  },
  'fe-2025-shanghai-2': {
    race: {
      overall: { driverIds: ['n-cassidy'], teamId: 'jaguar-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['n-cassidy'], teamId: 'jaguar-racing' },
          { position: 2, driverIds: ['wehrlein'], teamId: 'porsche-fe' },
          { position: 3, driverIds: ['buemi'], teamId: 'envision-racing' },
        ],
      }],
    },
  },
  'fe-2025-jakarta': {
    race: {
      overall: { driverIds: ['ticktum'], teamId: 'cupra-kiro' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['ticktum'], teamId: 'cupra-kiro' },
          { position: 2, driverIds: ['mortara'], teamId: 'mahindra-racing' },
          { position: 3, driverIds: ['buemi'], teamId: 'envision-racing' },
        ],
      }],
    },
  },
  'fe-2025-berlin-1': {
    race: {
      overall: { driverIds: ['m-evans'], teamId: 'jaguar-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['m-evans'], teamId: 'jaguar-racing' },
          { position: 2, driverIds: ['mortara'], teamId: 'mahindra-racing' },
          { position: 3, driverIds: ['wehrlein'], teamId: 'porsche-fe' },
        ],
      }],
    },
  },
  'fe-2025-berlin-2': {
    race: {
      overall: { driverIds: ['n-cassidy'], teamId: 'jaguar-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['n-cassidy'], teamId: 'jaguar-racing' },
          { position: 2, driverIds: ['j-dennis'], teamId: 'andretti-fe' },
          { position: 3, driverIds: ['vergne'], teamId: 'ds-penske' },
        ],
      }],
    },
  },
  'fe-2025-london-1': {
    race: {
      overall: { driverIds: ['n-cassidy'], teamId: 'jaguar-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['n-cassidy'], teamId: 'jaguar-racing' },
          { position: 2, driverIds: ['de-vries'], teamId: 'mahindra-racing' },
          { position: 3, driverIds: ['wehrlein'], teamId: 'porsche-fe' },
        ],
      }],
    },
  },
  'fe-2025-london-2': {
    race: {
      overall: { driverIds: ['n-cassidy'], teamId: 'jaguar-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['n-cassidy'], teamId: 'jaguar-racing' },
          { position: 2, driverIds: ['de-vries'], teamId: 'mahindra-racing' },
          { position: 3, driverIds: ['buemi'], teamId: 'envision-racing' },
        ],
      }],
    },
  },
}
