import type { EventResults } from './types'

// FIA Formula 3 2024 results — verified from Wikipedia
// Champion: Leonardo Fornaroli (Trident)
// Season: 10 rounds, sprint + feature race per weekend
export const f3Results2024: Record<string, EventResults> = {
  'f3-2024-bahrain': {
    sprint: {
      overall: { driverIds: ['lindblad'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lindblad'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['van-hoepen'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['fornaroli'], teamId: 'trident' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['browning'], teamId: 'hitech' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['browning'], teamId: 'hitech' },
          { position: 2, driverIds: ['meguetounif'], teamId: 'trident' },
          { position: 3, driverIds: ['tramnitz'], teamId: 'mp-motorsport' },
        ],
      }],
    },
  },
  'f3-2024-australia': {
    sprint: {
      overall: { driverIds: ['stenshorne'], teamId: 'hitech' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['stenshorne'], teamId: 'hitech' },
          { position: 2, driverIds: ['lindblad'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['van-hoepen'], teamId: 'art-grand-prix' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['beganovic'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['beganovic'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['mini'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['browning'], teamId: 'hitech' },
        ],
      }],
    },
  },
  'f3-2024-emilia-romagna': {
    sprint: {
      overall: { driverIds: ['goethe-o'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['goethe-o'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['noel-leon'], teamId: 'van-amersfoort-racing' },
          { position: 3, driverIds: ['tramnitz'], teamId: 'mp-motorsport' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['meguetounif'], teamId: 'trident' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['meguetounif'], teamId: 'trident' },
          { position: 2, driverIds: ['goethe-o'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['fornaroli'], teamId: 'trident' },
        ],
      }],
    },
  },
  'f3-2024-monaco': {
    sprint: {
      overall: { driverIds: ['tsolov'], teamId: 'art-grand-prix' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['tsolov'], teamId: 'art-grand-prix' },
          { position: 2, driverIds: ['tramnitz'], teamId: 'mp-motorsport' },
          { position: 3, driverIds: ['van-hoepen'], teamId: 'art-grand-prix' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['mini'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mini'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['mansell'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['browning'], teamId: 'hitech' },
        ],
      }],
    },
  },
  'f3-2024-spain': {
    sprint: {
      overall: { driverIds: ['boya'], teamId: 'campos-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['boya'], teamId: 'campos-racing' },
          { position: 2, driverIds: ['dunne'], teamId: 'mp-motorsport' },
          { position: 3, driverIds: ['goethe-o'], teamId: 'campos-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['lindblad'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lindblad'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['mansell'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['fornaroli'], teamId: 'trident' },
        ],
      }],
    },
  },
  'f3-2024-austria': {
    sprint: {
      overall: { driverIds: ['tsolov'], teamId: 'art-grand-prix' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['tsolov'], teamId: 'art-grand-prix' },
          { position: 2, driverIds: ['stenshorne'], teamId: 'hitech' },
          { position: 3, driverIds: ['mansell'], teamId: 'art-grand-prix' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['browning'], teamId: 'hitech' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['browning'], teamId: 'hitech' },
          { position: 2, driverIds: ['mini'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['beganovic'], teamId: 'prema-racing' },
        ],
      }],
    },
  },
  'f3-2024-great-britain': {
    sprint: {
      overall: { driverIds: ['lindblad'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lindblad'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['noel-leon'], teamId: 'van-amersfoort-racing' },
          { position: 3, driverIds: ['zagazeta'], teamId: 'rodin-motorsport' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['lindblad'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lindblad'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['mini'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['callum-voisin'], teamId: 'rodin-motorsport' },
        ],
      }],
    },
  },
  'f3-2024-hungary': {
    sprint: {
      overall: { driverIds: ['bedrin'], teamId: 'aix-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bedrin'], teamId: 'aix-racing' },
          { position: 2, driverIds: ['inthraphuvasak'], teamId: 'aix-racing' },
          { position: 3, driverIds: ['beganovic'], teamId: 'prema-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['tsolov'], teamId: 'art-grand-prix' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['tsolov'], teamId: 'art-grand-prix' },
          { position: 2, driverIds: ['van-hoepen'], teamId: 'art-grand-prix' },
          { position: 3, driverIds: ['noel-leon'], teamId: 'van-amersfoort-racing' },
        ],
      }],
    },
  },
  'f3-2024-belgium': {
    sprint: {
      overall: { driverIds: ['beganovic'], teamId: 'prema-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['beganovic'], teamId: 'prema-racing' },
          { position: 2, driverIds: ['mini'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['noel-leon'], teamId: 'van-amersfoort-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['callum-voisin'], teamId: 'rodin-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['callum-voisin'], teamId: 'rodin-motorsport' },
          { position: 2, driverIds: ['montoya-s'], teamId: 'campos-racing' },
          { position: 3, driverIds: ['fornaroli'], teamId: 'trident' },
        ],
      }],
    },
  },
  'f3-2024-italy': {
    sprint: {
      overall: { driverIds: ['tramnitz'], teamId: 'mp-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['tramnitz'], teamId: 'mp-motorsport' },
          { position: 2, driverIds: ['santiago-ramos'], teamId: 'trident' },
          { position: 3, driverIds: ['dunne'], teamId: 'mp-motorsport' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['meguetounif'], teamId: 'trident' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['meguetounif'], teamId: 'trident' },
          { position: 2, driverIds: ['mini'], teamId: 'prema-racing' },
          { position: 3, driverIds: ['fornaroli'], teamId: 'trident' },
        ],
      }],
    },
  },
}
