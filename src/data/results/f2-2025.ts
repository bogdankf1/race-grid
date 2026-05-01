import type { EventResults } from './types'

// FIA Formula 2 2025 results — verified from Wikipedia
// Champion: Leonardo Fornaroli (Invicta Racing)
// Melbourne Feature Race cancelled due to heavy rain
export const f2Results2025: Record<string, EventResults> = {
  'f2-2025-melbourne': {
    sprint: {
      overall: { driverIds: ['durksen'], teamId: 'aix-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['durksen'], teamId: 'aix-racing' },
        ],
      }],
    },
  },
  'f2-2025-bahrain': {
    sprint: {
      overall: { driverIds: ['p-marti'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['p-marti'], teamId: 'campos-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['dunne'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['dunne'], teamId: 'rodin-motorsport' },
          { position: 2, driverIds: ['browning'], teamId: 'hitech' },
          { position: 3, driverIds: ['martins'], teamId: 'art-grand-prix' },
        ],
      }],
    },
  },
  'f2-2025-jeddah': {
    sprint: {
      overall: { driverIds: ['lindblad'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lindblad'], teamId: 'campos-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['verschoor'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['verschoor'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['martins'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['crawford'], teamId: 'dams' },
        ],
      }],
    },
  },
  'f2-2025-imola': {
    sprint: {
      overall: { driverIds: ['crawford'], teamId: 'dams' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['crawford'], teamId: 'dams' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['dunne'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['dunne'], teamId: 'rodin-motorsport' },
          { position: 2, driverIds: ['browning'], teamId: 'hitech' },
          { position: 3, driverIds: ['beganovic'], teamId: 'hitech' },
        ],
      }],
    },
  },
  'f2-2025-monaco': {
    sprint: {
      overall: { driverIds: ['k-maini'], teamId: 'dams' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['k-maini'], teamId: 'dams' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['crawford'], teamId: 'dams' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['crawford'], teamId: 'dams' },
          { position: 2, driverIds: ['fornaroli'], teamId: 'invicta-racing' },
          { position: 3, driverIds: ['montoya-s'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
  'f2-2025-barcelona': {
    sprint: {
      overall: { driverIds: ['verschoor'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['verschoor'], teamId: 'mp-motorsport' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['lindblad'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lindblad'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['montoya-s'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['verschoor'], teamId: 'mp-motorsport' },
        ],
      }],
    },
  },
  'f2-2025-spielberg': {
    sprint: {
      overall: { driverIds: ['p-marti'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['p-marti'], teamId: 'campos-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['verschoor'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['verschoor'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['dunne'], teamId: 'rodin-motorsport' },
          { position: 3, driverIds: ['crawford'], teamId: 'dams' },
        ],
      }],
    },
  },
  'f2-2025-silverstone': {
    sprint: {
      overall: { driverIds: ['fornaroli'], teamId: 'invicta-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fornaroli'], teamId: 'invicta-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['crawford'], teamId: 'dams' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['crawford'], teamId: 'dams' },
          { position: 2, driverIds: ['dunne'], teamId: 'rodin-motorsport' },
          { position: 3, driverIds: ['browning'], teamId: 'hitech' },
        ],
      }],
    },
  },
  'f2-2025-spa': {
    sprint: {
      overall: { driverIds: ['fornaroli'], teamId: 'invicta-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fornaroli'], teamId: 'invicta-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['stanek'], teamId: 'invicta-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['stanek'], teamId: 'invicta-racing' },
          { position: 2, driverIds: ['miyata'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['browning'], teamId: 'hitech' },
        ],
      }],
    },
  },
  'f2-2025-budapest': {
    sprint: {
      overall: { driverIds: ['p-marti'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['p-marti'], teamId: 'campos-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['fornaroli'], teamId: 'invicta-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fornaroli'], teamId: 'invicta-racing' },
          { position: 2, driverIds: ['stanek'], teamId: 'invicta-racing' },
          { position: 3, driverIds: ['crawford'], teamId: 'dams' },
        ],
      }],
    },
  },
  'f2-2025-monza': {
    sprint: {
      overall: { driverIds: ['fornaroli'], teamId: 'invicta-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fornaroli'], teamId: 'invicta-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['browning'], teamId: 'hitech' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['browning'], teamId: 'hitech' },
          { position: 2, driverIds: ['p-marti'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['villagomez'], teamId: 'van-amersfoort-racing' },
        ],
      }],
    },
  },
  'f2-2025-baku': {
    sprint: {
      overall: { driverIds: ['beganovic'], teamId: 'hitech' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['beganovic'], teamId: 'hitech' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['crawford'], teamId: 'dams' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['crawford'], teamId: 'dams' },
          { position: 2, driverIds: ['durksen'], teamId: 'aix-racing' },
          { position: 3, driverIds: ['beganovic'], teamId: 'hitech' },
        ],
      }],
    },
  },
  'f2-2025-lusail': {
    sprint: {
      overall: { driverIds: ['verschoor'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['verschoor'], teamId: 'mp-motorsport' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['martins'], teamId: 'art-grand-prix' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['martins'], teamId: 'art-grand-prix' },
          { position: 2, driverIds: ['fornaroli'], teamId: 'invicta-racing' },
          { position: 3, driverIds: ['beganovic'], teamId: 'hitech' },
        ],
      }],
    },
  },
  'f2-2025-abu-dhabi': {
    sprint: {
      overall: { driverIds: ['browning'], teamId: 'hitech' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['browning'], teamId: 'hitech' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['stanek'], teamId: 'invicta-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['stanek'], teamId: 'invicta-racing' },
          { position: 2, driverIds: ['crawford'], teamId: 'dams' },
          { position: 3, driverIds: ['durksen'], teamId: 'aix-racing' },
        ],
      }],
    },
  },
}
