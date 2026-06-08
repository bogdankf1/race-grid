import type { EventResults } from './types'

// Porsche Mobil 1 Supercup 2024 results
// Sources:
//   - Wikipedia: 2024 Porsche Supercup
//   - newsroom.porsche.com / motorsports.porsche.com (per-round race reports)
//   - racing.porsche.com results archive
// Verified: June 2026 (season concluded with Monza on 1 September 2024)
// Champion: Larry ten Voorde (Schumacher CLRT) — 5 wins, 168 pts
export const porscheSupercupResults2024: Record<string, EventResults> = {
  'porsche-supercup-2024-imola': {
    qualifying: {
      overall: { driverIds: ['ten-voorde'], teamId: 'schumacher-clrt' },
    },
    race: {
      overall: { driverIds: ['ten-voorde'], teamId: 'schumacher-clrt' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ten-voorde'], teamId: 'schumacher-clrt' },
          { position: 2, driverIds: ['harry-king'], teamId: 'bwt-lechner-racing' },
          { position: 3, driverIds: ['marvin-klein'], teamId: 'schumacher-clrt' },
        ],
      }],
    },
  },
  'porsche-supercup-2024-monaco': {
    qualifying: {
      overall: { driverIds: ['ten-voorde'], teamId: 'schumacher-clrt' },
    },
    race: {
      overall: { driverIds: ['ten-voorde'], teamId: 'schumacher-clrt' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ten-voorde'], teamId: 'schumacher-clrt' },
          { position: 2, driverIds: ['harry-king'], teamId: 'bwt-lechner-racing' },
          { position: 3, driverIds: ['masters-k'], teamId: 'ombra-racing' },
        ],
      }],
    },
  },
  'porsche-supercup-2024-spielberg': {
    qualifying: {
      overall: { driverIds: ['marvin-klein'], teamId: 'schumacher-clrt' },
    },
    race: {
      overall: { driverIds: ['ten-voorde'], teamId: 'schumacher-clrt' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ten-voorde'], teamId: 'schumacher-clrt' },
          { position: 2, driverIds: ['marvin-klein'], teamId: 'schumacher-clrt' },
          { position: 3, driverIds: ['masters-k'], teamId: 'ombra-racing' },
        ],
      }],
    },
  },
  'porsche-supercup-2024-silverstone': {
    qualifying: {
      overall: { driverIds: ['ten-voorde'], teamId: 'schumacher-clrt' },
    },
    race: {
      overall: { driverIds: ['ten-voorde'], teamId: 'schumacher-clrt' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ten-voorde'], teamId: 'schumacher-clrt' },
          { position: 2, driverIds: ['marvin-klein'], teamId: 'schumacher-clrt' },
          { position: 3, driverIds: ['robert-de-haan'], teamId: 'bwt-lechner-racing' },
        ],
      }],
    },
  },
  'porsche-supercup-2024-hungaroring': {
    qualifying: {
      overall: { driverIds: ['harry-king'], teamId: 'bwt-lechner-racing' },
    },
    race: {
      overall: { driverIds: ['harry-king'], teamId: 'bwt-lechner-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['harry-king'], teamId: 'bwt-lechner-racing' },
          { position: 2, driverIds: ['marvin-klein'], teamId: 'schumacher-clrt' },
          { position: 3, driverIds: ['masters-k'], teamId: 'ombra-racing' },
        ],
      }],
    },
  },
  'porsche-supercup-2024-spa': {
    qualifying: {
      overall: { driverIds: ['marvin-klein'], teamId: 'schumacher-clrt' },
    },
    race: {
      overall: { driverIds: ['marvin-klein'], teamId: 'schumacher-clrt' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['marvin-klein'], teamId: 'schumacher-clrt' },
          { position: 2, driverIds: ['van-eijndhoven'], teamId: 'gp-elite' },
          { position: 3, driverIds: ['masters-k'], teamId: 'ombra-racing' },
        ],
      }],
    },
  },
  'porsche-supercup-2024-zandvoort': {
    qualifying: {
      overall: { driverIds: ['ten-voorde'], teamId: 'schumacher-clrt' },
    },
    race: {
      overall: { driverIds: ['ten-voorde'], teamId: 'schumacher-clrt' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ten-voorde'], teamId: 'schumacher-clrt' },
          { position: 2, driverIds: ['jaap-van-lagen'], teamId: 'dinamic-motorsport' },
          { position: 3, driverIds: ['robert-de-haan'], teamId: 'bwt-lechner-racing' },
        ],
      }],
    },
  },
  'porsche-supercup-2024-monza': {
    qualifying: {
      overall: { driverIds: ['robert-de-haan'], teamId: 'bwt-lechner-racing' },
    },
    race: {
      overall: { driverIds: ['ghiretti'], teamId: 'schumacher-clrt' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ghiretti'], teamId: 'schumacher-clrt' },
          { position: 2, driverIds: ['robert-de-haan'], teamId: 'bwt-lechner-racing' },
          { position: 3, driverIds: ['masters-k'], teamId: 'ombra-racing' },
        ],
      }],
    },
  },
}
