import type { EventResults } from './types'

// FIA Formula 2 2024 results — verified from Wikipedia
// Champion: Gabriel Bortoleto (Invicta Racing)
export const f2Results2024: Record<string, EventResults> = {
  'f2-2024-bahrain': {
    sprint: {
      overall: { driverIds: ['maloney'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['maloney'], teamId: 'rodin-motorsport' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['maloney'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['maloney'], teamId: 'rodin-motorsport' },
          { position: 2, driverIds: ['p-marti'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['aron'], teamId: 'hitech' },
        ],
      }],
    },
  },
  'f2-2024-saudi-arabia': {
    sprint: {
      overall: { driverIds: ['hauger'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hauger'], teamId: 'mp-motorsport' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['e-fittipaldi'], teamId: 'van-amersfoort-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['e-fittipaldi'], teamId: 'van-amersfoort-racing' },
          { position: 2, driverIds: ['k-maini'], teamId: 'invicta-racing' },
          { position: 3, driverIds: ['hauger'], teamId: 'mp-motorsport' },
        ],
      }],
    },
  },
  'f2-2024-australia': {
    sprint: {
      overall: { driverIds: ['stanek'], teamId: 'trident' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['stanek'], teamId: 'trident' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['hadjar'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hadjar'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['aron'], teamId: 'hitech' },
          { position: 3, driverIds: ['maloney'], teamId: 'rodin-motorsport' },
        ],
      }],
    },
  },
  'f2-2024-emilia-romagna': {
    sprint: {
      overall: { driverIds: ['colapinto'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['colapinto'], teamId: 'mp-motorsport' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['hadjar'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hadjar'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['bortoleto'], teamId: 'invicta-racing' },
          { position: 3, driverIds: ['durksen'], teamId: 'aix-racing' },
        ],
      }],
    },
  },
  'f2-2024-monaco': {
    sprint: {
      overall: { driverIds: ['barnard'], teamId: 'aix-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['barnard'], teamId: 'aix-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['o-sullivan'], teamId: 'art-grand-prix' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['o-sullivan'], teamId: 'art-grand-prix' },
          { position: 2, driverIds: ['hadjar'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['aron'], teamId: 'hitech' },
        ],
      }],
    },
  },
  'f2-2024-spain': {
    sprint: {
      overall: { driverIds: ['martins'], teamId: 'art-grand-prix' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['martins'], teamId: 'art-grand-prix' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['crawford'], teamId: 'dams' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['crawford'], teamId: 'dams' },
          { position: 2, driverIds: ['colapinto'], teamId: 'mp-motorsport' },
          { position: 3, driverIds: ['correa'], teamId: 'dams' },
        ],
      }],
    },
  },
  'f2-2024-austria': {
    sprint: {
      overall: { driverIds: ['bearman'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bearman'], teamId: 'prema-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['bortoleto'], teamId: 'invicta-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bortoleto'], teamId: 'invicta-racing' },
          { position: 2, driverIds: ['colapinto'], teamId: 'mp-motorsport' },
          { position: 3, driverIds: ['hadjar'], teamId: 'campos-racing' },
        ],
      }],
    },
  },
  'f2-2024-great-britain': {
    sprint: {
      overall: { driverIds: ['antonelli'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['antonelli'], teamId: 'prema-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['hadjar'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hadjar'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['maloney'], teamId: 'rodin-motorsport' },
          { position: 3, driverIds: ['crawford'], teamId: 'dams' },
        ],
      }],
    },
  },
  'f2-2024-hungary': {
    sprint: {
      overall: { driverIds: ['k-maini'], teamId: 'invicta-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['k-maini'], teamId: 'invicta-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['antonelli'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['antonelli'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['aron'], teamId: 'hitech' },
          { position: 3, driverIds: ['bortoleto'], teamId: 'invicta-racing' },
        ],
      }],
    },
  },
  'f2-2024-belgium': {
    sprint: {
      overall: { driverIds: ['o-sullivan'], teamId: 'art-grand-prix' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['o-sullivan'], teamId: 'art-grand-prix' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['hadjar'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hadjar'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['bortoleto'], teamId: 'invicta-racing' },
          { position: 3, driverIds: ['crawford'], teamId: 'dams' },
        ],
      }],
    },
  },
  'f2-2024-italy': {
    sprint: {
      overall: { driverIds: ['bearman'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bearman'], teamId: 'prema-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['bortoleto'], teamId: 'invicta-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bortoleto'], teamId: 'invicta-racing' },
          { position: 2, driverIds: ['maloney'], teamId: 'rodin-motorsport' },
          { position: 3, driverIds: ['k-maini'], teamId: 'invicta-racing' },
        ],
      }],
    },
  },
  'f2-2024-azerbaijan': {
    sprint: {
      overall: { driverIds: ['durksen'], teamId: 'aix-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['durksen'], teamId: 'aix-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['verschoor'], teamId: 'trident' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['verschoor'], teamId: 'trident' },
          { position: 2, driverIds: ['martins'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['antonelli'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
  'f2-2024-qatar': {
    sprint: {
      overall: { driverIds: ['bearman'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bearman'], teamId: 'prema-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['aron'], teamId: 'hitech' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['aron'], teamId: 'hitech' },
          { position: 2, driverIds: ['hadjar'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['bortoleto'], teamId: 'invicta-racing' },
        ],
      }],
    },
  },
  'f2-2024-abu-dhabi': {
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
      overall: { driverIds: ['durksen'], teamId: 'aix-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['durksen'], teamId: 'aix-racing' },
          { position: 2, driverIds: ['bortoleto'], teamId: 'invicta-racing' },
          { position: 3, driverIds: ['martins'], teamId: 'art-grand-prix' },
        ],
      }],
    },
  },
}
