import type { EventResults } from './types'

// Formula E Season 9 (2022-23) results — verified from Wikipedia, fiaformulae.com
// Champion: Jake Dennis (Avalanche Andretti)
export const feResults2023: Record<string, EventResults> = {
  'fe-2023-mexico-city': {
    race: {
      overall: { driverIds: ['j-dennis'], teamId: 'andretti-fe' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['j-dennis'], teamId: 'andretti-fe' },
          { position: 2, driverIds: ['wehrlein'], teamId: 'porsche-fe' },
          { position: 3, driverIds: ['jake-hughes'], teamId: 'neom-mclaren-fe' },
        ],
      }],
    },
  },
  'fe-2023-diriyah-1': {
    race: {
      overall: { driverIds: ['wehrlein'], teamId: 'porsche-fe' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['wehrlein'], teamId: 'porsche-fe' },
          { position: 2, driverIds: ['j-dennis'], teamId: 'andretti-fe' },
          { position: 3, driverIds: ['buemi'], teamId: 'envision-racing' },
        ],
      }],
    },
  },
  'fe-2023-diriyah-2': {
    race: {
      overall: { driverIds: ['wehrlein'], teamId: 'porsche-fe' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['wehrlein'], teamId: 'porsche-fe' },
          { position: 2, driverIds: ['j-dennis'], teamId: 'andretti-fe' },
          { position: 3, driverIds: ['rast'], teamId: 'neom-mclaren-fe' },
        ],
      }],
    },
  },
  'fe-2023-hyderabad': {
    race: {
      overall: { driverIds: ['vergne'], teamId: 'ds-penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vergne'], teamId: 'ds-penske' },
          { position: 2, driverIds: ['n-cassidy'], teamId: 'envision-racing' },
          { position: 3, driverIds: ['da-costa'], teamId: 'porsche-fe' },
        ],
      }],
    },
  },
  'fe-2023-cape-town': {
    race: {
      overall: { driverIds: ['da-costa'], teamId: 'porsche-fe' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['da-costa'], teamId: 'porsche-fe' },
          { position: 2, driverIds: ['n-cassidy'], teamId: 'envision-racing' },
          { position: 3, driverIds: ['vergne'], teamId: 'ds-penske' },
        ],
      }],
    },
  },
  'fe-2023-sao-paulo': {
    race: {
      overall: { driverIds: ['m-evans'], teamId: 'jaguar-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['m-evans'], teamId: 'jaguar-racing' },
          { position: 2, driverIds: ['n-cassidy'], teamId: 'envision-racing' },
          { position: 3, driverIds: ['sam-bird'], teamId: 'jaguar-racing' },
        ],
      }],
    },
  },
  'fe-2023-berlin-1': {
    race: {
      overall: { driverIds: ['m-evans'], teamId: 'jaguar-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['m-evans'], teamId: 'jaguar-racing' },
          { position: 2, driverIds: ['sam-bird'], teamId: 'jaguar-racing' },
          { position: 3, driverIds: ['gunther'], teamId: 'maserati-msg' },
        ],
      }],
    },
  },
  'fe-2023-berlin-2': {
    race: {
      overall: { driverIds: ['n-cassidy'], teamId: 'envision-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['n-cassidy'], teamId: 'envision-racing' },
          { position: 2, driverIds: ['vergne'], teamId: 'ds-penske' },
          { position: 3, driverIds: ['sam-bird'], teamId: 'jaguar-racing' },
        ],
      }],
    },
  },
  'fe-2023-monaco': {
    race: {
      overall: { driverIds: ['n-cassidy'], teamId: 'envision-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['n-cassidy'], teamId: 'envision-racing' },
          { position: 2, driverIds: ['j-dennis'], teamId: 'andretti-fe' },
          { position: 3, driverIds: ['m-evans'], teamId: 'jaguar-racing' },
        ],
      }],
    },
  },
  'fe-2023-jakarta-1': {
    race: {
      overall: { driverIds: ['wehrlein'], teamId: 'porsche-fe' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['wehrlein'], teamId: 'porsche-fe' },
          { position: 2, driverIds: ['j-dennis'], teamId: 'andretti-fe' },
          { position: 3, driverIds: ['fenestraz'], teamId: 'nissan-fe' },
        ],
      }],
    },
  },
  'fe-2023-jakarta-2': {
    race: {
      overall: { driverIds: ['gunther'], teamId: 'maserati-msg' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gunther'], teamId: 'maserati-msg' },
          { position: 2, driverIds: ['j-dennis'], teamId: 'andretti-fe' },
          { position: 3, driverIds: ['m-evans'], teamId: 'jaguar-racing' },
        ],
      }],
    },
  },
  'fe-2023-portland': {
    race: {
      overall: { driverIds: ['n-cassidy'], teamId: 'envision-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['n-cassidy'], teamId: 'envision-racing' },
          { position: 2, driverIds: ['j-dennis'], teamId: 'andretti-fe' },
          { position: 3, driverIds: ['da-costa'], teamId: 'porsche-fe' },
        ],
      }],
    },
  },
  'fe-2023-rome-1': {
    race: {
      overall: { driverIds: ['m-evans'], teamId: 'jaguar-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['m-evans'], teamId: 'jaguar-racing' },
          { position: 2, driverIds: ['n-cassidy'], teamId: 'envision-racing' },
          { position: 3, driverIds: ['fenestraz'], teamId: 'nissan-fe' },
        ],
      }],
    },
  },
  'fe-2023-rome-2': {
    race: {
      overall: { driverIds: ['j-dennis'], teamId: 'andretti-fe' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['j-dennis'], teamId: 'andretti-fe' },
          { position: 2, driverIds: ['nato'], teamId: 'nissan-fe' },
          { position: 3, driverIds: ['sam-bird'], teamId: 'jaguar-racing' },
        ],
      }],
    },
  },
  'fe-2023-london-1': {
    race: {
      overall: { driverIds: ['m-evans'], teamId: 'jaguar-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['m-evans'], teamId: 'jaguar-racing' },
          { position: 2, driverIds: ['da-costa'], teamId: 'porsche-fe' },
          { position: 3, driverIds: ['j-dennis'], teamId: 'andretti-fe' },
        ],
      }],
    },
  },
  'fe-2023-london-2': {
    race: {
      overall: { driverIds: ['n-cassidy'], teamId: 'envision-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['n-cassidy'], teamId: 'envision-racing' },
          { position: 2, driverIds: ['m-evans'], teamId: 'jaguar-racing' },
          { position: 3, driverIds: ['j-dennis'], teamId: 'andretti-fe' },
        ],
      }],
    },
  },
}
