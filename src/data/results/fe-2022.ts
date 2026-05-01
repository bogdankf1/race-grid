import type { EventResults } from './types'

// Formula E Season 8 (2021-22) results — verified from Wikipedia, fiaformulae.com
// Champion: Stoffel Vandoorne (Mercedes-EQ)
export const feResults2022: Record<string, EventResults> = {
  'fe-2022-diriyah-1': {
    race: {
      overall: { driverIds: ['de-vries'], teamId: 'mercedes-fe' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['de-vries'], teamId: 'mercedes-fe' },
          { position: 2, driverIds: ['vandoorne'], teamId: 'mercedes-fe' },
          { position: 3, driverIds: ['j-dennis'], teamId: 'andretti-fe' },
        ],
      }],
    },
  },
  'fe-2022-diriyah-2': {
    race: {
      overall: { driverIds: ['mortara'], teamId: 'maserati-msg' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mortara'], teamId: 'maserati-msg' },
          { position: 2, driverIds: ['frijns'], teamId: 'envision-racing' },
          { position: 3, driverIds: ['de-vries'], teamId: 'mercedes-fe' },
        ],
      }],
    },
  },
  'fe-2022-mexico-city': {
    race: {
      overall: { driverIds: ['wehrlein'], teamId: 'porsche-fe' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['wehrlein'], teamId: 'porsche-fe' },
          { position: 2, driverIds: ['lotterer'], teamId: 'porsche-fe' },
          { position: 3, driverIds: ['vergne'], teamId: 'ds-penske' },
        ],
      }],
    },
  },
  'fe-2022-rome-1': {
    race: {
      overall: { driverIds: ['m-evans'], teamId: 'jaguar-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['m-evans'], teamId: 'jaguar-racing' },
          { position: 2, driverIds: ['frijns'], teamId: 'envision-racing' },
          { position: 3, driverIds: ['vergne'], teamId: 'ds-penske' },
        ],
      }],
    },
  },
  'fe-2022-rome-2': {
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
  'fe-2022-monaco': {
    race: {
      overall: { driverIds: ['vandoorne'], teamId: 'mercedes-fe' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vandoorne'], teamId: 'mercedes-fe' },
          { position: 2, driverIds: ['m-evans'], teamId: 'jaguar-racing' },
          { position: 3, driverIds: ['vergne'], teamId: 'ds-penske' },
        ],
      }],
    },
  },
  'fe-2022-berlin-1': {
    race: {
      overall: { driverIds: ['mortara'], teamId: 'maserati-msg' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mortara'], teamId: 'maserati-msg' },
          { position: 2, driverIds: ['vergne'], teamId: 'ds-penske' },
          { position: 3, driverIds: ['vandoorne'], teamId: 'mercedes-fe' },
        ],
      }],
    },
  },
  'fe-2022-berlin-2': {
    race: {
      overall: { driverIds: ['de-vries'], teamId: 'mercedes-fe' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['de-vries'], teamId: 'mercedes-fe' },
          { position: 2, driverIds: ['mortara'], teamId: 'maserati-msg' },
          { position: 3, driverIds: ['di-grassi'], teamId: 'maserati-msg' },
        ],
      }],
    },
  },
  'fe-2022-jakarta': {
    race: {
      overall: { driverIds: ['m-evans'], teamId: 'jaguar-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['m-evans'], teamId: 'jaguar-racing' },
          { position: 2, driverIds: ['vergne'], teamId: 'ds-penske' },
          { position: 3, driverIds: ['mortara'], teamId: 'maserati-msg' },
        ],
      }],
    },
  },
  'fe-2022-marrakesh': {
    race: {
      overall: { driverIds: ['mortara'], teamId: 'maserati-msg' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mortara'], teamId: 'maserati-msg' },
          { position: 2, driverIds: ['da-costa'], teamId: 'ds-penske' },
          { position: 3, driverIds: ['m-evans'], teamId: 'jaguar-racing' },
        ],
      }],
    },
  },
  'fe-2022-new-york-1': {
    race: {
      overall: { driverIds: ['n-cassidy'], teamId: 'envision-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['n-cassidy'], teamId: 'envision-racing' },
          { position: 2, driverIds: ['di-grassi'], teamId: 'maserati-msg' },
          { position: 3, driverIds: ['frijns'], teamId: 'envision-racing' },
        ],
      }],
    },
  },
  'fe-2022-new-york-2': {
    race: {
      overall: { driverIds: ['da-costa'], teamId: 'ds-penske' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['da-costa'], teamId: 'ds-penske' },
          { position: 2, driverIds: ['vandoorne'], teamId: 'mercedes-fe' },
          { position: 3, driverIds: ['m-evans'], teamId: 'jaguar-racing' },
        ],
      }],
    },
  },
  'fe-2022-london-1': {
    race: {
      overall: { driverIds: ['j-dennis'], teamId: 'andretti-fe' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['j-dennis'], teamId: 'andretti-fe' },
          { position: 2, driverIds: ['vandoorne'], teamId: 'mercedes-fe' },
          { position: 3, driverIds: ['n-cassidy'], teamId: 'envision-racing' },
        ],
      }],
    },
  },
  'fe-2022-london-2': {
    race: {
      overall: { driverIds: ['di-grassi'], teamId: 'maserati-msg' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['di-grassi'], teamId: 'maserati-msg' },
          { position: 2, driverIds: ['vandoorne'], teamId: 'mercedes-fe' },
          { position: 3, driverIds: ['j-dennis'], teamId: 'andretti-fe' },
        ],
      }],
    },
  },
  'fe-2022-seoul-1': {
    race: {
      overall: { driverIds: ['m-evans'], teamId: 'jaguar-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['m-evans'], teamId: 'jaguar-racing' },
          { position: 2, driverIds: ['rowland'], teamId: 'mahindra-racing' },
          { position: 3, driverIds: ['di-grassi'], teamId: 'maserati-msg' },
        ],
      }],
    },
  },
  'fe-2022-seoul-2': {
    race: {
      overall: { driverIds: ['mortara'], teamId: 'maserati-msg' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mortara'], teamId: 'maserati-msg' },
          { position: 2, driverIds: ['vandoorne'], teamId: 'mercedes-fe' },
          { position: 3, driverIds: ['da-costa'], teamId: 'ds-penske' },
        ],
      }],
    },
  },
}
