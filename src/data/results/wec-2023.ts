import type { EventResults } from './types'

// WEC 2023 Hypercar results — verified from fiawec.com, Wikipedia
// Champions: Buemi/Hartley/Hirakawa (Toyota #8)
// First year with Ferrari 499P Hypercar
export const wecResults2023: Record<string, EventResults> = {
  'wec-2023-sebring': {
    race: {
      overall: { driverIds: ['conway', 'kobayashi', 'jm-lopez'], teamId: 'toyota-gazoo-racing' },
      classes: [{ className: 'Hypercar', podium: [
        { position: 1, driverIds: ['conway', 'kobayashi', 'jm-lopez'], teamId: 'toyota-gazoo-racing' },
        { position: 2, driverIds: ['buemi', 'hartley', 'hirakawa'], teamId: 'toyota-gazoo-racing' },
        { position: 3, driverIds: ['fuoco', 'molina', 'nielsen'], teamId: 'ferrari-af-corse' },
      ] }],
    },
  },
  'wec-2023-portimao': {
    race: {
      overall: { driverIds: ['buemi', 'hartley', 'hirakawa'], teamId: 'toyota-gazoo-racing' },
      classes: [{ className: 'Hypercar', podium: [
        { position: 1, driverIds: ['buemi', 'hartley', 'hirakawa'], teamId: 'toyota-gazoo-racing' },
        { position: 2, driverIds: ['calado', 'giovinazzi', 'pier-guidi'], teamId: 'ferrari-af-corse' },
        { position: 3, driverIds: ['estre', 'vanthoor', 'lotterer'], teamId: 'porsche-penske' },
      ] }],
    },
  },
  'wec-2023-spa': {
    race: {
      overall: { driverIds: ['conway', 'kobayashi', 'jm-lopez'], teamId: 'toyota-gazoo-racing' },
      classes: [{ className: 'Hypercar', podium: [
        { position: 1, driverIds: ['conway', 'kobayashi', 'jm-lopez'], teamId: 'toyota-gazoo-racing' },
        { position: 2, driverIds: ['buemi', 'hartley', 'hirakawa'], teamId: 'toyota-gazoo-racing' },
        { position: 3, driverIds: ['calado', 'giovinazzi', 'pier-guidi'], teamId: 'ferrari-af-corse' },
      ] }],
    },
  },
  'wec-2023-le-mans': {
    race: {
      overall: { driverIds: ['calado', 'giovinazzi', 'pier-guidi'], teamId: 'ferrari-af-corse' },
      classes: [{ className: 'Hypercar', podium: [
        { position: 1, driverIds: ['calado', 'giovinazzi', 'pier-guidi'], teamId: 'ferrari-af-corse' },
        { position: 2, driverIds: ['buemi', 'hartley', 'hirakawa'], teamId: 'toyota-gazoo-racing' },
      ] }],
    },
  },
  'wec-2023-monza': {
    race: {
      overall: { driverIds: ['conway', 'kobayashi', 'jm-lopez'], teamId: 'toyota-gazoo-racing' },
      classes: [{ className: 'Hypercar', podium: [
        { position: 1, driverIds: ['conway', 'kobayashi', 'jm-lopez'], teamId: 'toyota-gazoo-racing' },
        { position: 2, driverIds: ['fuoco', 'molina', 'nielsen'], teamId: 'ferrari-af-corse' },
      ] }],
    },
  },
  'wec-2023-fuji': {
    race: {
      overall: { driverIds: ['conway', 'kobayashi', 'jm-lopez'], teamId: 'toyota-gazoo-racing' },
      classes: [{ className: 'Hypercar', podium: [
        { position: 1, driverIds: ['conway', 'kobayashi', 'jm-lopez'], teamId: 'toyota-gazoo-racing' },
      ] }],
    },
  },
  'wec-2023-bahrain': {
    race: {
      overall: { driverIds: ['buemi', 'hartley', 'hirakawa'], teamId: 'toyota-gazoo-racing' },
      classes: [{ className: 'Hypercar', podium: [
        { position: 1, driverIds: ['buemi', 'hartley', 'hirakawa'], teamId: 'toyota-gazoo-racing' },
      ] }],
    },
  },
}
