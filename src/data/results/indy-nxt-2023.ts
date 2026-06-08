import type { EventResults } from './types'

// Indy NXT by Firestone 2023 results — full season (14 rounds)
// Sources: indynxt.com/Results archives, Wikipedia "2023 Indy NXT",
// motorsport.com/indylights/results/2023, racer.com race reports.
// Verified 2026-06-07. Only race podiums and pole sitters are recorded.
// Champion: Christian Rasmussen (HMD Motorsports with Dale Coyne Racing) — 5 wins.
export const indyNxtResults2023: Record<string, EventResults> = {
  'indy-nxt-2023-st-petersburg': {
    qualifying: {
      overall: { driverIds: ['foster'], teamId: 'andretti-autosport' },
    },
    race: {
      // Frost takes the lead on a late restart for his second career win.
      overall: { driverIds: ['frost'], teamId: 'hmd-dale-coyne' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['frost'], teamId: 'hmd-dale-coyne' },
          { position: 2, driverIds: ['siegel'], teamId: 'hmd-dale-coyne' },
          { position: 3, driverIds: ['abel'], teamId: 'abel-motorsports' },
        ],
      }],
    },
  },
  'indy-nxt-2023-barber': {
    qualifying: {
      overall: { driverIds: ['rasmussen'], teamId: 'hmd-dale-coyne' },
    },
    race: {
      overall: { driverIds: ['rasmussen'], teamId: 'hmd-dale-coyne' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rasmussen'], teamId: 'hmd-dale-coyne' },
          { position: 2, driverIds: ['siegel'], teamId: 'hmd-dale-coyne' },
          { position: 3, driverIds: ['sowery-t'], teamId: 'hmd-motorsports' },
        ],
      }],
    },
  },
  'indy-nxt-2023-indianapolis-gp-1': {
    qualifying: {
      overall: { driverIds: ['nannini'], teamId: 'juncos-hollinger' },
    },
    race: {
      overall: { driverIds: ['nannini'], teamId: 'juncos-hollinger' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nannini'], teamId: 'juncos-hollinger' },
          { position: 2, driverIds: ['foster'], teamId: 'andretti-autosport' },
          { position: 3, driverIds: ['simpson'], teamId: 'hmd-motorsports' },
        ],
      }],
    },
  },
  'indy-nxt-2023-detroit-1': {
    qualifying: {
      overall: { driverIds: ['foster'], teamId: 'andretti-autosport' },
    },
    race: {
      // Reece Gold's maiden Indy NXT win on the new downtown Detroit street circuit.
      overall: { driverIds: ['gold-r'], teamId: 'hmd-dale-coyne' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gold-r'], teamId: 'hmd-dale-coyne' },
          { position: 2, driverIds: ['jones-jg'], teamId: 'cape-motorsports' },
          { position: 3, driverIds: ['francis-jr'], teamId: 'hmd-force-indy' },
        ],
      }],
    },
  },
  'indy-nxt-2023-detroit-2': {
    qualifying: {
      overall: { driverIds: ['foster'], teamId: 'andretti-autosport' },
    },
    race: {
      overall: { driverIds: ['siegel'], teamId: 'hmd-dale-coyne' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['siegel'], teamId: 'hmd-dale-coyne' },
          { position: 2, driverIds: ['rasmussen'], teamId: 'hmd-dale-coyne' },
          { position: 3, driverIds: ['foster'], teamId: 'andretti-autosport' },
        ],
      }],
    },
  },
  'indy-nxt-2023-road-america': {
    qualifying: {
      overall: { driverIds: ['simpson'], teamId: 'hmd-motorsports' },
    },
    race: {
      overall: { driverIds: ['siegel'], teamId: 'hmd-dale-coyne' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['siegel'], teamId: 'hmd-dale-coyne' },
          { position: 2, driverIds: ['gold-r'], teamId: 'hmd-dale-coyne' },
          { position: 3, driverIds: ['abel'], teamId: 'abel-motorsports' },
        ],
      }],
    },
  },
  'indy-nxt-2023-mid-ohio': {
    qualifying: {
      overall: { driverIds: ['rasmussen'], teamId: 'hmd-dale-coyne' },
    },
    race: {
      overall: { driverIds: ['foster'], teamId: 'andretti-autosport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['foster'], teamId: 'andretti-autosport' },
          { position: 2, driverIds: ['simpson'], teamId: 'hmd-motorsports' },
          { position: 3, driverIds: ['rasmussen'], teamId: 'hmd-dale-coyne' },
        ],
      }],
    },
  },
  'indy-nxt-2023-iowa': {
    qualifying: {
      overall: { driverIds: ['abel'], teamId: 'abel-motorsports' },
    },
    race: {
      overall: { driverIds: ['rasmussen'], teamId: 'hmd-dale-coyne' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rasmussen'], teamId: 'hmd-dale-coyne' },
          { position: 2, driverIds: ['abel'], teamId: 'abel-motorsports' },
          { position: 3, driverIds: ['lindh'], teamId: 'juncos-hollinger' },
        ],
      }],
    },
  },
  'indy-nxt-2023-nashville': {
    qualifying: {
      overall: { driverIds: ['rasmussen'], teamId: 'hmd-dale-coyne' },
    },
    race: {
      overall: { driverIds: ['rasmussen'], teamId: 'hmd-dale-coyne' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rasmussen'], teamId: 'hmd-dale-coyne' },
          { position: 2, driverIds: ['abel'], teamId: 'abel-motorsports' },
          { position: 3, driverIds: ['foster'], teamId: 'andretti-autosport' },
        ],
      }],
    },
  },
  'indy-nxt-2023-indianapolis-gp-2': {
    qualifying: {
      overall: { driverIds: ['mcelrea'], teamId: 'andretti-autosport' },
    },
    race: {
      // Andretti Autosport 1-2-3 on the IMS road course.
      overall: { driverIds: ['mcelrea'], teamId: 'andretti-autosport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mcelrea'], teamId: 'andretti-autosport' },
          { position: 2, driverIds: ['roe'], teamId: 'andretti-autosport' },
          { position: 3, driverIds: ['foster'], teamId: 'andretti-autosport' },
        ],
      }],
    },
  },
  'indy-nxt-2023-gateway': {
    qualifying: {
      overall: { driverIds: ['rasmussen'], teamId: 'hmd-dale-coyne' },
    },
    race: {
      // Rasmussen's fourth win of the season on the WWTR oval.
      overall: { driverIds: ['rasmussen'], teamId: 'hmd-dale-coyne' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rasmussen'], teamId: 'hmd-dale-coyne' },
          { position: 2, driverIds: ['foster'], teamId: 'andretti-autosport' },
          { position: 3, driverIds: ['mcelrea'], teamId: 'andretti-autosport' },
        ],
      }],
    },
  },
  'indy-nxt-2023-portland': {
    qualifying: {
      overall: { driverIds: ['foster'], teamId: 'andretti-autosport' },
    },
    race: {
      overall: { driverIds: ['foster'], teamId: 'andretti-autosport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['foster'], teamId: 'andretti-autosport' },
          { position: 2, driverIds: ['siegel'], teamId: 'hmd-dale-coyne' },
          { position: 3, driverIds: ['frost'], teamId: 'hmd-dale-coyne' },
        ],
      }],
    },
  },
  'indy-nxt-2023-laguna-seca-1': {
    qualifying: {
      overall: { driverIds: ['mcelrea'], teamId: 'andretti-autosport' },
    },
    race: {
      overall: { driverIds: ['mcelrea'], teamId: 'andretti-autosport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mcelrea'], teamId: 'andretti-autosport' },
          { position: 2, driverIds: ['rasmussen'], teamId: 'hmd-dale-coyne' },
          { position: 3, driverIds: ['foster'], teamId: 'andretti-autosport' },
        ],
      }],
    },
  },
  'indy-nxt-2023-laguna-seca-2': {
    qualifying: {
      overall: { driverIds: ['rasmussen'], teamId: 'hmd-dale-coyne' },
    },
    race: {
      // Rasmussen seals his fifth win and the inaugural Indy NXT championship.
      overall: { driverIds: ['rasmussen'], teamId: 'hmd-dale-coyne' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rasmussen'], teamId: 'hmd-dale-coyne' },
          { position: 2, driverIds: ['mcelrea'], teamId: 'andretti-autosport' },
          { position: 3, driverIds: ['foster'], teamId: 'andretti-autosport' },
        ],
      }],
    },
  },
}
