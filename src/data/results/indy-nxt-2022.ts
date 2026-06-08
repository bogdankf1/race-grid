import type { EventResults } from './types'

// Indy Lights 2022 results — full season (14 rounds, last season before the Indy NXT rebrand)
// Sources: indylights.com archives, Wikipedia "2022 Indy Lights",
// motorsport.com/indylights/results/2022, racer.com race reports.
// Verified 2026-06-07. Only race podiums and pole sitters are recorded.
// Champion: Linus Lundqvist (HMD Motorsports with Dale Coyne Racing) — 5 wins.
export const indyNxtResults2022: Record<string, EventResults> = {
  'indy-nxt-2022-st-petersburg': {
    qualifying: {
      // Hunter McElrea took maiden Indy Lights pole on debut; Rasmussen led until fuel issue on penultimate lap.
      overall: { driverIds: ['mcelrea'], teamId: 'andretti-autosport' },
    },
    race: {
      overall: { driverIds: ['brabham-m'], teamId: 'andretti-autosport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['brabham-m'], teamId: 'andretti-autosport' },
          { position: 2, driverIds: ['pedersen-b'], teamId: 'global-racing-group' },
          { position: 3, driverIds: ['lundqvist'], teamId: 'hmd-dale-coyne' },
        ],
      }],
    },
  },
  'indy-nxt-2022-barber': {
    qualifying: {
      overall: { driverIds: ['lundqvist'], teamId: 'hmd-dale-coyne' },
    },
    race: {
      overall: { driverIds: ['lundqvist'], teamId: 'hmd-dale-coyne' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lundqvist'], teamId: 'hmd-dale-coyne' },
          { position: 2, driverIds: ['pedersen-b'], teamId: 'global-racing-group' },
          { position: 3, driverIds: ['robb'], teamId: 'andretti-autosport' },
        ],
      }],
    },
  },
  'indy-nxt-2022-indianapolis-gp-1': {
    qualifying: {
      overall: { driverIds: ['lundqvist'], teamId: 'hmd-dale-coyne' },
    },
    race: {
      // Frost takes maiden NXT win after Lundqvist-Rasmussen first-lap clash.
      overall: { driverIds: ['frost'], teamId: 'hmd-dale-coyne' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['frost'], teamId: 'hmd-dale-coyne' },
          { position: 2, driverIds: ['mcelrea'], teamId: 'andretti-autosport' },
          { position: 3, driverIds: ['robb'], teamId: 'andretti-autosport' },
        ],
      }],
    },
  },
  'indy-nxt-2022-indianapolis-gp-2': {
    qualifying: {
      overall: { driverIds: ['lundqvist'], teamId: 'hmd-dale-coyne' },
    },
    race: {
      overall: { driverIds: ['lundqvist'], teamId: 'hmd-dale-coyne' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lundqvist'], teamId: 'hmd-dale-coyne' },
          { position: 2, driverIds: ['rasmussen'], teamId: 'andretti-autosport' },
          { position: 3, driverIds: ['robb'], teamId: 'andretti-autosport' },
        ],
      }],
    },
  },
  'indy-nxt-2022-detroit-1': {
    qualifying: {
      overall: { driverIds: ['lundqvist'], teamId: 'hmd-dale-coyne' },
    },
    race: {
      overall: { driverIds: ['lundqvist'], teamId: 'hmd-dale-coyne' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lundqvist'], teamId: 'hmd-dale-coyne' },
          { position: 2, driverIds: ['pedersen-b'], teamId: 'global-racing-group' },
          { position: 3, driverIds: ['brabham-m'], teamId: 'andretti-autosport' },
        ],
      }],
    },
  },
  'indy-nxt-2022-detroit-2': {
    qualifying: {
      overall: { driverIds: ['lundqvist'], teamId: 'hmd-dale-coyne' },
    },
    race: {
      // Lundqvist completed a Detroit sweep, leading every lap of both races.
      overall: { driverIds: ['lundqvist'], teamId: 'hmd-dale-coyne' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lundqvist'], teamId: 'hmd-dale-coyne' },
          { position: 2, driverIds: ['mcelrea'], teamId: 'andretti-autosport' },
          { position: 3, driverIds: ['robb'], teamId: 'andretti-autosport' },
        ],
      }],
    },
  },
  'indy-nxt-2022-road-america': {
    qualifying: {
      overall: { driverIds: ['robb'], teamId: 'andretti-autosport' },
    },
    race: {
      // Rasmussen led home an all-Andretti podium after a multi-hour red flag.
      overall: { driverIds: ['rasmussen'], teamId: 'andretti-autosport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rasmussen'], teamId: 'andretti-autosport' },
          { position: 2, driverIds: ['robb'], teamId: 'andretti-autosport' },
          { position: 3, driverIds: ['mcelrea'], teamId: 'andretti-autosport' },
        ],
      }],
    },
  },
  'indy-nxt-2022-mid-ohio': {
    qualifying: {
      overall: { driverIds: ['mcelrea'], teamId: 'andretti-autosport' },
    },
    race: {
      overall: { driverIds: ['mcelrea'], teamId: 'andretti-autosport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mcelrea'], teamId: 'andretti-autosport' },
          { position: 2, driverIds: ['brabham-m'], teamId: 'andretti-autosport' },
          { position: 3, driverIds: ['lundqvist'], teamId: 'hmd-dale-coyne' },
        ],
      }],
    },
  },
  'indy-nxt-2022-iowa': {
    qualifying: {
      overall: { driverIds: ['mcelrea'], teamId: 'andretti-autosport' },
    },
    race: {
      // McElrea wins after Lundqvist (1st on road) is penalised 3 places for Brabham clash.
      overall: { driverIds: ['mcelrea'], teamId: 'andretti-autosport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mcelrea'], teamId: 'andretti-autosport' },
          { position: 2, driverIds: ['rasmussen'], teamId: 'andretti-autosport' },
          { position: 3, driverIds: ['brabham-m'], teamId: 'andretti-autosport' },
        ],
      }],
    },
  },
  'indy-nxt-2022-nashville': {
    qualifying: {
      // Qualifying cancelled due to weather; grid set on points (Lundqvist on pole).
      overall: { driverIds: ['lundqvist'], teamId: 'hmd-dale-coyne' },
    },
    race: {
      overall: { driverIds: ['lundqvist'], teamId: 'hmd-dale-coyne' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lundqvist'], teamId: 'hmd-dale-coyne' },
          { position: 2, driverIds: ['robb'], teamId: 'andretti-autosport' },
          { position: 3, driverIds: ['mcelrea'], teamId: 'andretti-autosport' },
        ],
      }],
    },
  },
  'indy-nxt-2022-gateway': {
    qualifying: {
      overall: { driverIds: ['lundqvist'], teamId: 'hmd-dale-coyne' },
    },
    race: {
      // Brabham passed Lundqvist on lap 72 of 75 for his second win of the season.
      overall: { driverIds: ['brabham-m'], teamId: 'andretti-autosport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['brabham-m'], teamId: 'andretti-autosport' },
          { position: 2, driverIds: ['lundqvist'], teamId: 'hmd-dale-coyne' },
          { position: 3, driverIds: ['pedersen-b'], teamId: 'global-racing-group' },
        ],
      }],
    },
  },
  'indy-nxt-2022-portland': {
    qualifying: {
      overall: { driverIds: ['pedersen-b'], teamId: 'global-racing-group' },
    },
    race: {
      // Pedersen's first Indy Lights win — led all 35 laps from pole.
      overall: { driverIds: ['pedersen-b'], teamId: 'global-racing-group' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pedersen-b'], teamId: 'global-racing-group' },
          { position: 2, driverIds: ['brabham-m'], teamId: 'andretti-autosport' },
          { position: 3, driverIds: ['lundqvist'], teamId: 'hmd-dale-coyne' },
        ],
      }],
    },
  },
  'indy-nxt-2022-laguna-seca-1': {
    qualifying: {
      overall: { driverIds: ['robb'], teamId: 'andretti-autosport' },
    },
    race: {
      // Robb dominates Race 1; Lundqvist clinches the title with 2nd place.
      overall: { driverIds: ['robb'], teamId: 'andretti-autosport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['robb'], teamId: 'andretti-autosport' },
          { position: 2, driverIds: ['lundqvist'], teamId: 'hmd-dale-coyne' },
          { position: 3, driverIds: ['rasmussen'], teamId: 'andretti-autosport' },
        ],
      }],
    },
  },
  'indy-nxt-2022-laguna-seca-2': {
    qualifying: {
      overall: { driverIds: ['rasmussen'], teamId: 'andretti-autosport' },
    },
    race: {
      // Rasmussen leads lights-to-flag for an all-Andretti podium sweep in the season finale.
      overall: { driverIds: ['rasmussen'], teamId: 'andretti-autosport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rasmussen'], teamId: 'andretti-autosport' },
          { position: 2, driverIds: ['robb'], teamId: 'andretti-autosport' },
          { position: 3, driverIds: ['brabham-m'], teamId: 'andretti-autosport' },
        ],
      }],
    },
  },
}
