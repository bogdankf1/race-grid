import type { EventResults } from './types'

// Formula E Season 12 (2025-26) results — verified from fiaformulae.com
export const feResults2026: Record<string, EventResults> = {
  'fe-2026-sao-paulo': {
    qualifying: {
      overall: { driverIds: ['wehrlein'], teamId: 'porsche-fe' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['wehrlein'], teamId: 'porsche-fe' },
        ],
      }],
    },
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
    qualifying: {
      overall: { driverIds: ['buemi'], teamId: 'envision-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['buemi'], teamId: 'envision-racing' },
        ],
      }],
    },
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
    qualifying: {
      overall: { driverIds: ['n-muller'], teamId: 'porsche-fe' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['n-muller'], teamId: 'porsche-fe' },
        ],
      }],
    },
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
    qualifying: {
      overall: { driverIds: ['mortara'], teamId: 'mahindra-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mortara'], teamId: 'mahindra-racing' },
        ],
      }],
    },
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
    qualifying: {
      overall: { driverIds: ['mortara'], teamId: 'mahindra-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mortara'], teamId: 'mahindra-racing' },
        ],
      }],
    },
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
  'fe-2026-berlin-1': {
    qualifying: {
      overall: { driverIds: ['mortara'], teamId: 'mahindra-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mortara'], teamId: 'mahindra-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['n-muller'], teamId: 'porsche-fe' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['n-muller'], teamId: 'porsche-fe' },
          { position: 2, driverIds: ['n-cassidy'], teamId: 'citroen-racing-fe' },
          { position: 3, driverIds: ['rowland'], teamId: 'nissan-fe' },
        ],
      }],
    },
  },
  'fe-2026-madrid': {
    qualifying: {
      overall: { driverIds: ['n-cassidy'], teamId: 'citroen-racing-fe' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['n-cassidy'], teamId: 'citroen-racing-fe' },
        ],
      }],
    },
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
  'fe-2026-berlin-2': {
    qualifying: {
      overall: { driverIds: ['mortara'], teamId: 'mahindra-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mortara'], teamId: 'mahindra-racing' },
          { position: 2, driverIds: ['wehrlein'], teamId: 'porsche-fe' },
          { position: 3, driverIds: ['rowland'], teamId: 'nissan-fe' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['m-evans'], teamId: 'jaguar-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['m-evans'], teamId: 'jaguar-racing' },
          { position: 2, driverIds: ['rowland'], teamId: 'nissan-fe' },
          { position: 3, driverIds: ['wehrlein'], teamId: 'porsche-fe' },
        ],
      }],
    },
  },
  'fe-2026-monaco-1': {
    qualifying: {
      overall: { driverIds: ['ticktum'], teamId: 'cupra-kiro' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ticktum'], teamId: 'cupra-kiro' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['de-vries'], teamId: 'mahindra-racing' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['de-vries'], teamId: 'mahindra-racing' },
          { position: 2, driverIds: ['m-evans'], teamId: 'jaguar-racing' },
          { position: 3, driverIds: ['p-marti'], teamId: 'cupra-kiro' },
        ],
      }],
    },
  },
  'fe-2026-monaco-2': {
    qualifying: {
      overall: { driverIds: ['ticktum'], teamId: 'cupra-kiro' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ticktum'], teamId: 'cupra-kiro' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['rowland'], teamId: 'nissan-fe' },
      classes: [{
        className: 'Classification',
        podium: [
          { position: 1, driverIds: ['rowland'], teamId: 'nissan-fe' },
          { position: 2, driverIds: ['drugovich'], teamId: 'andretti-fe' },
          { position: 3, driverIds: ['da-costa'], teamId: 'jaguar-racing' },
        ],
      }],
    },
  },
}
