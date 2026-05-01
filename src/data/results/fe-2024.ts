import type { EventResults } from './types'

// Formula E Season 10 (2023-24) results — verified from Wikipedia, fiaformulae.com
// Champion: Pascal Wehrlein (Porsche)
export const feResults2024: Record<string, EventResults> = {
  'fe-2024-mexico-city': {
    race: {
      overall: { driverIds: ['wehrlein'], teamId: 'porsche-fe' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['wehrlein'], teamId: 'porsche-fe' },
          { position: 2, driverIds: ['buemi'], teamId: 'envision-racing' },
          { position: 3, driverIds: ['n-cassidy'], teamId: 'jaguar-racing' },
        ],
      }],
    },
  },
  'fe-2024-diriyah-1': {
    race: {
      overall: { driverIds: ['j-dennis'], teamId: 'andretti-fe' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['j-dennis'], teamId: 'andretti-fe' },
          { position: 2, driverIds: ['vergne'], teamId: 'ds-penske' },
          { position: 3, driverIds: ['n-cassidy'], teamId: 'jaguar-racing' },
        ],
      }],
    },
  },
  'fe-2024-diriyah-2': {
    race: {
      overall: { driverIds: ['n-cassidy'], teamId: 'jaguar-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['n-cassidy'], teamId: 'jaguar-racing' },
          { position: 2, driverIds: ['frijns'], teamId: 'envision-racing' },
          { position: 3, driverIds: ['rowland'], teamId: 'nissan-fe' },
        ],
      }],
    },
  },
  'fe-2024-sao-paulo': {
    race: {
      overall: { driverIds: ['sam-bird'], teamId: 'neom-mclaren-fe' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sam-bird'], teamId: 'neom-mclaren-fe' },
          { position: 2, driverIds: ['m-evans'], teamId: 'jaguar-racing' },
          { position: 3, driverIds: ['rowland'], teamId: 'nissan-fe' },
        ],
      }],
    },
  },
  'fe-2024-tokyo': {
    race: {
      overall: { driverIds: ['gunther'], teamId: 'maserati-msg' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gunther'], teamId: 'maserati-msg' },
          { position: 2, driverIds: ['rowland'], teamId: 'nissan-fe' },
          { position: 3, driverIds: ['j-dennis'], teamId: 'andretti-fe' },
        ],
      }],
    },
  },
  'fe-2024-misano-1': {
    race: {
      overall: { driverIds: ['rowland'], teamId: 'nissan-fe' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rowland'], teamId: 'nissan-fe' },
          { position: 2, driverIds: ['j-dennis'], teamId: 'andretti-fe' },
          { position: 3, driverIds: ['n-cassidy'], teamId: 'jaguar-racing' },
        ],
      }],
    },
  },
  'fe-2024-misano-2': {
    race: {
      overall: { driverIds: ['wehrlein'], teamId: 'porsche-fe' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['wehrlein'], teamId: 'porsche-fe' },
          { position: 2, driverIds: ['j-dennis'], teamId: 'andretti-fe' },
          { position: 3, driverIds: ['n-cassidy'], teamId: 'jaguar-racing' },
        ],
      }],
    },
  },
  'fe-2024-monaco': {
    race: {
      overall: { driverIds: ['m-evans'], teamId: 'jaguar-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['m-evans'], teamId: 'jaguar-racing' },
          { position: 2, driverIds: ['n-cassidy'], teamId: 'jaguar-racing' },
          { position: 3, driverIds: ['vandoorne'], teamId: 'ds-penske' },
        ],
      }],
    },
  },
  'fe-2024-berlin-1': {
    race: {
      overall: { driverIds: ['n-cassidy'], teamId: 'jaguar-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['n-cassidy'], teamId: 'jaguar-racing' },
          { position: 2, driverIds: ['rowland'], teamId: 'nissan-fe' },
          { position: 3, driverIds: ['vergne'], teamId: 'ds-penske' },
        ],
      }],
    },
  },
  'fe-2024-berlin-2': {
    race: {
      overall: { driverIds: ['da-costa'], teamId: 'porsche-fe' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['da-costa'], teamId: 'porsche-fe' },
          { position: 2, driverIds: ['rowland'], teamId: 'nissan-fe' },
          { position: 3, driverIds: ['j-dennis'], teamId: 'andretti-fe' },
        ],
      }],
    },
  },
  'fe-2024-shanghai-1': {
    race: {
      overall: { driverIds: ['m-evans'], teamId: 'jaguar-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['m-evans'], teamId: 'jaguar-racing' },
          { position: 2, driverIds: ['j-dennis'], teamId: 'andretti-fe' },
          { position: 3, driverIds: ['n-cassidy'], teamId: 'jaguar-racing' },
        ],
      }],
    },
  },
  'fe-2024-shanghai-2': {
    race: {
      overall: { driverIds: ['da-costa'], teamId: 'porsche-fe' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['da-costa'], teamId: 'porsche-fe' },
          { position: 2, driverIds: ['jake-hughes'], teamId: 'neom-mclaren-fe' },
          { position: 3, driverIds: ['nato'], teamId: 'andretti-fe' },
        ],
      }],
    },
  },
  'fe-2024-portland-1': {
    race: {
      overall: { driverIds: ['da-costa'], teamId: 'porsche-fe' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['da-costa'], teamId: 'porsche-fe' },
          { position: 2, driverIds: ['frijns'], teamId: 'envision-racing' },
          { position: 3, driverIds: ['vergne'], teamId: 'ds-penske' },
        ],
      }],
    },
  },
  'fe-2024-portland-2': {
    race: {
      overall: { driverIds: ['da-costa'], teamId: 'porsche-fe' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['da-costa'], teamId: 'porsche-fe' },
          { position: 2, driverIds: ['frijns'], teamId: 'envision-racing' },
          { position: 3, driverIds: ['n-cassidy'], teamId: 'jaguar-racing' },
        ],
      }],
    },
  },
  'fe-2024-london-1': {
    race: {
      overall: { driverIds: ['wehrlein'], teamId: 'porsche-fe' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['wehrlein'], teamId: 'porsche-fe' },
          { position: 2, driverIds: ['m-evans'], teamId: 'jaguar-racing' },
          { position: 3, driverIds: ['gunther'], teamId: 'maserati-msg' },
        ],
      }],
    },
  },
  'fe-2024-london-2': {
    race: {
      overall: { driverIds: ['rowland'], teamId: 'nissan-fe' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rowland'], teamId: 'nissan-fe' },
          { position: 2, driverIds: ['jake-hughes'], teamId: 'neom-mclaren-fe' },
          { position: 3, driverIds: ['m-evans'], teamId: 'jaguar-racing' },
        ],
      }],
    },
  },
}
