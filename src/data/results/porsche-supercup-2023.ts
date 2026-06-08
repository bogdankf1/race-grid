import type { EventResults } from './types'

// Porsche Mobil 1 Supercup 2023 results
// Sources:
//   - Wikipedia: 2023 Porsche Supercup
//   - newsroom.porsche.com / motorsports.porsche.com (per-round race reports)
//   - racing.porsche.com results archive
// Verified: June 2026 (season concluded with Monza on 3 September 2023)
// Champion: Bastian Buus (BWT Lechner Racing) — 1 win, 122 pts; youngest Supercup champion (age 20).
export const porscheSupercupResults2023: Record<string, EventResults> = {
  'porsche-supercup-2023-monaco': {
    qualifying: {
      overall: { driverIds: ['ten-voorde'], teamId: 'gp-elite' },
    },
    race: {
      overall: { driverIds: ['harry-king'], teamId: 'bwt-lechner-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['harry-king'], teamId: 'bwt-lechner-racing' },
          { position: 2, driverIds: ['ten-voorde'], teamId: 'gp-elite' },
          { position: 3, driverIds: ['buus'], teamId: 'bwt-lechner-racing' },
        ],
      }],
    },
  },
  'porsche-supercup-2023-spielberg': {
    qualifying: {
      overall: { driverIds: ['ten-voorde'], teamId: 'gp-elite' },
    },
    race: {
      overall: { driverIds: ['buus'], teamId: 'bwt-lechner-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['buus'], teamId: 'bwt-lechner-racing' },
          { position: 2, driverIds: ['ten-voorde'], teamId: 'gp-elite' },
          { position: 3, driverIds: ['kohler'], teamId: 'huber-racing' },
        ],
      }],
    },
  },
  'porsche-supercup-2023-silverstone': {
    qualifying: {
      overall: { driverIds: ['boccolacci'], teamId: 'clrt' },
    },
    race: {
      // First-lap chaos took out pole-sitter Boccolacci, Buus, ten Voorde and King.
      // 17-year-old guest driver Robert de Haan (Richardson Racing) finished 2nd.
      overall: { driverIds: ['alexander-fach'], teamId: 'fach-auto-tech' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['alexander-fach'], teamId: 'fach-auto-tech' },
          { position: 2, driverIds: ['robert-de-haan'], teamId: 'richardson-racing' },
          { position: 3, driverIds: ['ghiretti'], teamId: 'martinet-by-almeras' },
        ],
      }],
    },
  },
  'porsche-supercup-2023-hungaroring': {
    qualifying: {
      overall: { driverIds: ['harry-king'], teamId: 'bwt-lechner-racing' },
    },
    race: {
      overall: { driverIds: ['harry-king'], teamId: 'bwt-lechner-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['harry-king'], teamId: 'bwt-lechner-racing' },
          { position: 2, driverIds: ['boccolacci'], teamId: 'clrt' },
          { position: 3, driverIds: ['buus'], teamId: 'bwt-lechner-racing' },
        ],
      }],
    },
  },
  'porsche-supercup-2023-spa': {
    qualifying: {
      overall: { driverIds: ['schuring'], teamId: 'fach-auto-tech' },
    },
    race: {
      overall: { driverIds: ['schuring'], teamId: 'fach-auto-tech' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['schuring'], teamId: 'fach-auto-tech' },
          { position: 2, driverIds: ['buus'], teamId: 'bwt-lechner-racing' },
          { position: 3, driverIds: ['boccolacci'], teamId: 'clrt' },
        ],
      }],
    },
  },
  'porsche-supercup-2023-zandvoort-1': {
    qualifying: {
      overall: { driverIds: ['schuring'], teamId: 'fach-auto-tech' },
    },
    race: {
      // First ever all-Dutch podium in Porsche Supercup history.
      overall: { driverIds: ['schuring'], teamId: 'fach-auto-tech' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['schuring'], teamId: 'fach-auto-tech' },
          { position: 2, driverIds: ['hartog'], teamId: 'gp-elite' },
          { position: 3, driverIds: ['ten-voorde'], teamId: 'gp-elite' },
        ],
      }],
    },
  },
  'porsche-supercup-2023-zandvoort-2': {
    qualifying: {
      overall: { driverIds: ['hartog'], teamId: 'gp-elite' },
    },
    race: {
      overall: { driverIds: ['hartog'], teamId: 'gp-elite' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['hartog'], teamId: 'gp-elite' },
          { position: 2, driverIds: ['buus'], teamId: 'bwt-lechner-racing' },
          { position: 3, driverIds: ['ten-voorde'], teamId: 'gp-elite' },
        ],
      }],
    },
  },
  'porsche-supercup-2023-monza': {
    qualifying: {
      overall: { driverIds: ['harry-king'], teamId: 'bwt-lechner-racing' },
    },
    race: {
      overall: { driverIds: ['harry-king'], teamId: 'bwt-lechner-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['harry-king'], teamId: 'bwt-lechner-racing' },
          { position: 2, driverIds: ['ten-voorde'], teamId: 'gp-elite' },
          { position: 3, driverIds: ['iaquinta'], teamId: 'huber-racing' },
        ],
      }],
    },
  },
}
