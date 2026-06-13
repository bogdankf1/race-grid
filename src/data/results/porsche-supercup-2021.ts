import type { EventResults } from './types'

// Porsche Mobil 1 Supercup 2021 results
// Sources:
//   - Wikipedia: 2021 Porsche Supercup
//   - newsroom.porsche.com / motorsports.porsche.com (per-round race reports)
//   - racing.porsche.com results archive
// Verified: June 2026 (season concluded with Monza double-header on 12 September 2021)
// Champion: Larry ten Voorde (Team GP Elite) — 4 wins, 155 pts; second consecutive title
// Hungaroring (round 4): guest driver Marvin Klein crossed the line first but was DSQ
// for insufficient fuel — ten Voorde inherited the win.
export const porscheSupercupResults2021: Record<string, EventResults> = {
  'porsche-supercup-2021-monaco': {
    qualifying: {
      overall: { driverIds: ['ten-voorde'], teamId: 'gp-elite' },
    },
    race: {
      overall: { driverIds: ['ten-voorde'], teamId: 'gp-elite' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ten-voorde'], teamId: 'gp-elite' },
          { position: 2, driverIds: ['evans-j'], teamId: 'martinet-by-almeras' },
          { position: 3, driverIds: ['boccolacci'], teamId: 'martinet-by-almeras' },
        ],
      }],
    },
  },
  'porsche-supercup-2021-spielberg-1': {
    qualifying: {
      overall: { driverIds: ['ten-voorde'], teamId: 'gp-elite' },
    },
    race: {
      overall: { driverIds: ['ten-voorde'], teamId: 'gp-elite' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ten-voorde'], teamId: 'gp-elite' },
          { position: 2, driverIds: ['guven'], teamId: 'bwt-lechner-racing' },
          { position: 3, driverIds: ['kohler'], teamId: 'nebulus-racing-huber' },
        ],
      }],
    },
  },
  'porsche-supercup-2021-spielberg-2': {
    qualifying: {
      overall: { driverIds: ['pereira'], teamId: 'bwt-lechner-racing' },
    },
    race: {
      overall: { driverIds: ['evans-j'], teamId: 'martinet-by-almeras' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['evans-j'], teamId: 'martinet-by-almeras' },
          { position: 2, driverIds: ['pereira'], teamId: 'bwt-lechner-racing' },
          { position: 3, driverIds: ['ten-voorde'], teamId: 'gp-elite' },
        ],
      }],
    },
  },
  'porsche-supercup-2021-hungaroring': {
    qualifying: {
      overall: { driverIds: ['marvin-klein'], teamId: 'clrt' },
    },
    race: {
      overall: { driverIds: ['ten-voorde'], teamId: 'gp-elite' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ten-voorde'], teamId: 'gp-elite' },
          { position: 2, driverIds: ['evans-j'], teamId: 'martinet-by-almeras' },
          { position: 3, driverIds: ['latorre-f'], teamId: 'clrt' },
        ],
      }],
    },
  },
  'porsche-supercup-2021-spa': {
    qualifying: {
      overall: { driverIds: ['ten-voorde'], teamId: 'gp-elite' },
    },
    race: {
      overall: { driverIds: ['pereira'], teamId: 'bwt-lechner-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pereira'], teamId: 'bwt-lechner-racing' },
          { position: 2, driverIds: ['guven'], teamId: 'bwt-lechner-racing' },
          { position: 3, driverIds: ['heinrich'], teamId: 'nebulus-racing-huber' },
        ],
      }],
    },
  },
  'porsche-supercup-2021-zandvoort': {
    qualifying: {
      overall: { driverIds: ['heinrich'], teamId: 'nebulus-racing-huber' },
    },
    race: {
      overall: { driverIds: ['heinrich'], teamId: 'nebulus-racing-huber' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['heinrich'], teamId: 'nebulus-racing-huber' },
          { position: 2, driverIds: ['kohler'], teamId: 'nebulus-racing-huber' },
          { position: 3, driverIds: ['iaquinta'], teamId: 'dinamic-motorsport' },
        ],
      }],
    },
  },
  'porsche-supercup-2021-monza-1': {
    qualifying: {
      overall: { driverIds: ['guven'], teamId: 'bwt-lechner-racing' },
    },
    race: {
      overall: { driverIds: ['guven'], teamId: 'bwt-lechner-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['guven'], teamId: 'bwt-lechner-racing' },
          { position: 2, driverIds: ['boccolacci'], teamId: 'martinet-by-almeras' },
          { position: 3, driverIds: ['ten-voorde'], teamId: 'gp-elite' },
        ],
      }],
    },
  },
  'porsche-supercup-2021-monza-2': {
    qualifying: {
      overall: { driverIds: ['ten-voorde'], teamId: 'gp-elite' },
    },
    race: {
      overall: { driverIds: ['ten-voorde'], teamId: 'gp-elite' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ten-voorde'], teamId: 'gp-elite' },
          { position: 2, driverIds: ['heinrich'], teamId: 'nebulus-racing-huber' },
          { position: 3, driverIds: ['guven'], teamId: 'bwt-lechner-racing' },
        ],
      }],
    },
  },
}
