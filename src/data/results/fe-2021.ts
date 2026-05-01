import type { EventResults } from './types'

// Formula E Season 7 (2020-21) results — verified from Wikipedia, fiaformulae.com
// Champion: Nyck de Vries (Mercedes-EQ)
export const feResults2021: Record<string, EventResults> = {
  'fe-2021-diriyah-1': {
    race: {
      overall: { driverIds: ['de-vries'], teamId: 'mercedes-fe' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['de-vries'], teamId: 'mercedes-fe' },
          { position: 2, driverIds: ['vandoorne'], teamId: 'mercedes-fe' },
          { position: 3, driverIds: ['sam-bird'], teamId: 'jaguar-racing' },
        ],
      }],
    },
  },
  'fe-2021-diriyah-2': {
    race: {
      overall: { driverIds: ['sam-bird'], teamId: 'jaguar-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sam-bird'], teamId: 'jaguar-racing' },
          { position: 2, driverIds: ['de-vries'], teamId: 'mercedes-fe' },
          { position: 3, driverIds: ['m-evans'], teamId: 'jaguar-racing' },
        ],
      }],
    },
  },
  'fe-2021-rome-1': {
    race: {
      overall: { driverIds: ['m-evans'], teamId: 'jaguar-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['m-evans'], teamId: 'jaguar-racing' },
          { position: 2, driverIds: ['vergne'], teamId: 'ds-penske' },
          { position: 3, driverIds: ['frijns'], teamId: 'envision-racing' },
        ],
      }],
    },
  },
  'fe-2021-rome-2': {
    race: {
      overall: { driverIds: ['de-vries'], teamId: 'mercedes-fe' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['de-vries'], teamId: 'mercedes-fe' },
          { position: 2, driverIds: ['vandoorne'], teamId: 'mercedes-fe' },
          { position: 3, driverIds: ['mortara'], teamId: 'maserati-msg' },
        ],
      }],
    },
  },
  'fe-2021-valencia-1': {
    race: {
      overall: { driverIds: ['frijns'], teamId: 'envision-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['frijns'], teamId: 'envision-racing' },
          { position: 2, driverIds: ['de-vries'], teamId: 'mercedes-fe' },
          { position: 3, driverIds: ['sims'], teamId: 'mahindra-racing' },
        ],
      }],
    },
  },
  'fe-2021-valencia-2': {
    race: {
      overall: { driverIds: ['j-dennis'], teamId: 'andretti-fe' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['j-dennis'], teamId: 'andretti-fe' },
          { position: 2, driverIds: ['lotterer'], teamId: 'porsche-fe' },
          { position: 3, driverIds: ['lynn'], teamId: 'mahindra-racing' },
        ],
      }],
    },
  },
  'fe-2021-monaco': {
    race: {
      overall: { driverIds: ['vandoorne'], teamId: 'mercedes-fe' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vandoorne'], teamId: 'mercedes-fe' },
          { position: 2, driverIds: ['da-costa'], teamId: 'ds-penske' },
          { position: 3, driverIds: ['di-grassi'], teamId: 'maserati-msg' },
        ],
      }],
    },
  },
  'fe-2021-puebla-1': {
    race: {
      overall: { driverIds: ['rowland'], teamId: 'nissan-fe' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rowland'], teamId: 'nissan-fe' },
          { position: 2, driverIds: ['di-grassi'], teamId: 'maserati-msg' },
          { position: 3, driverIds: ['rast'], teamId: 'maserati-msg' },
        ],
      }],
    },
  },
  'fe-2021-puebla-2': {
    race: {
      overall: { driverIds: ['rast'], teamId: 'maserati-msg' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rast'], teamId: 'maserati-msg' },
          { position: 2, driverIds: ['mortara'], teamId: 'maserati-msg' },
          { position: 3, driverIds: ['gunther'], teamId: 'andretti-fe' },
        ],
      }],
    },
  },
  'fe-2021-new-york-1': {
    race: {
      overall: { driverIds: ['nato'], teamId: 'maserati-msg' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nato'], teamId: 'maserati-msg' },
          { position: 2, driverIds: ['gunther'], teamId: 'andretti-fe' },
          { position: 3, driverIds: ['sam-bird'], teamId: 'jaguar-racing' },
        ],
      }],
    },
  },
  'fe-2021-new-york-2': {
    race: {
      overall: { driverIds: ['m-evans'], teamId: 'jaguar-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['m-evans'], teamId: 'jaguar-racing' },
          { position: 2, driverIds: ['sam-bird'], teamId: 'jaguar-racing' },
          { position: 3, driverIds: ['j-dennis'], teamId: 'andretti-fe' },
        ],
      }],
    },
  },
  'fe-2021-london-1': {
    race: {
      overall: { driverIds: ['m-evans'], teamId: 'jaguar-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['m-evans'], teamId: 'jaguar-racing' },
          { position: 2, driverIds: ['j-dennis'], teamId: 'andretti-fe' },
          { position: 3, driverIds: ['lynn'], teamId: 'mahindra-racing' },
        ],
      }],
    },
  },
  'fe-2021-london-2': {
    race: {
      overall: { driverIds: ['lynn'], teamId: 'mahindra-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lynn'], teamId: 'mahindra-racing' },
          { position: 2, driverIds: ['frijns'], teamId: 'envision-racing' },
          { position: 3, driverIds: ['rast'], teamId: 'maserati-msg' },
        ],
      }],
    },
  },
  'fe-2021-berlin-1': {
    race: {
      overall: { driverIds: ['rast'], teamId: 'maserati-msg' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rast'], teamId: 'maserati-msg' },
          { position: 2, driverIds: ['di-grassi'], teamId: 'maserati-msg' },
          { position: 3, driverIds: ['nato'], teamId: 'maserati-msg' },
        ],
      }],
    },
  },
  'fe-2021-berlin-2': {
    race: {
      overall: { driverIds: ['di-grassi'], teamId: 'maserati-msg' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['di-grassi'], teamId: 'maserati-msg' },
          { position: 2, driverIds: ['nato'], teamId: 'maserati-msg' },
          { position: 3, driverIds: ['rast'], teamId: 'maserati-msg' },
        ],
      }],
    },
  },
}
