import type { EntryItem } from './types'

// IMSA Michelin Pilot Challenge 2024 — full-season entries
// Multi-class: GS (GT4) + TCR (Touring Car Racing)
// Sources verified 2026-06-08:
//   - en.wikipedia.org/wiki/2024_Michelin_Pilot_Challenge
//   - imsa.com per-event entry list notebooks
//   - sportscar365.com / racer.com / dailysportscar.com season previews and recaps
// Note: many GT4 cars rotate enduro additions for the 4-hour rounds; listed below
// are the regular driver pairings that appeared in the bulk of the 2024 races.
export const impcEntries2024: EntryItem[] = [
  // ===== GS (Grand Sport / GT4) =====
  // Kellymoss with Riley (Porsche 718 GT4 RS Clubsport) — debut season, season-opening Daytona win
  { driverId: 'dickinson', teamId: 'kellymoss', carNumber: 91, class: 'GS' },
  { driverId: 'mccarthy-m', teamId: 'kellymoss', carNumber: 91, class: 'GS' },
  { driverId: 'golan', teamId: 'kellymoss', carNumber: 91, class: 'GS' },

  // Rebel Rock Racing (Aston Martin Vantage GT4 Evo) — Sebring winners
  { driverId: 'liddell', teamId: 'rebel-rock-racing', carNumber: 71, class: 'GS' },
  { driverId: 'depew', teamId: 'rebel-rock-racing', carNumber: 71, class: 'GS' },

  // Motorsports in Action (McLaren Artura GT4) — Laguna Seca winners
  { driverId: 'lazare', teamId: 'motorsports-in-action', carNumber: 69, class: 'GS' },
  { driverId: 'de-quesada', teamId: 'motorsports-in-action', carNumber: 69, class: 'GS' },

  // Archangel Motorsports (Aston Martin Vantage GT4) — Mid-Ohio winners
  { driverId: 'coleman-t', teamId: 'archangel-motorsports', carNumber: 88, class: 'GS' },
  { driverId: 'telitz', teamId: 'archangel-motorsports', carNumber: 88, class: 'GS' },

  // Team TGM (Aston Martin Vantage GT4) — 2024 GS champions
  { driverId: 'plumb', teamId: 'team-tgm', carNumber: 46, class: 'GS' },
  { driverId: 'holton', teamId: 'team-tgm', carNumber: 46, class: 'GS' },
  { driverId: 'trinkler', teamId: 'team-tgm', carNumber: 46, class: 'GS' },

  // RennSport1 (Porsche 718 GT4 RS Clubsport) — CTMP & Road America winners
  { driverId: 'hindman', teamId: 'rennsport1', carNumber: 28, class: 'GS' },
  { driverId: 'mcaleer', teamId: 'rennsport1', carNumber: 28, class: 'GS' },

  // BGB Motorsports (Porsche 718 Cayman GT4 RS Clubsport) — VIR winners
  { driverId: 'collingwood', teamId: 'bgb-motorsports', carNumber: 38, class: 'GS' },
  { driverId: 'pumpelly', teamId: 'bgb-motorsports', carNumber: 38, class: 'GS' },

  // CarBahn with Peregrine Racing (BMW M4 GT4) — Indianapolis winners
  { driverId: 'mcalister-s', teamId: 'carbahn-peregrine', carNumber: 39, class: 'GS' },
  { driverId: 'westphal', teamId: 'carbahn-peregrine', carNumber: 39, class: 'GS' },

  // Turner Motorsport (BMW M4 GT4)
  { driverId: 'machavern', teamId: 'turner-motorsport', carNumber: 95, class: 'GS' },
  { driverId: 'megennis', teamId: 'turner-motorsport', carNumber: 95, class: 'GS' },
  { driverId: 'foley', teamId: 'turner-motorsport', carNumber: 96, class: 'GS' },
  { driverId: 'selldorff', teamId: 'turner-motorsport', carNumber: 96, class: 'GS' },

  // Winward Racing (Mercedes-AMG GT GT4)
  { driverId: 'ward', teamId: 'winward-racing', carNumber: 57, class: 'GS' },
  { driverId: 'morad-d', teamId: 'winward-racing', carNumber: 57, class: 'GS' },
  { driverId: 'ellis-p', teamId: 'winward-racing', carNumber: 57, class: 'GS' },

  // van der Steur Racing (Aston Martin Vantage GT4) — Sebring runners-up
  { driverId: 'van-der-steur', teamId: 'van-der-steur-racing', carNumber: 19, class: 'GS' },
  { driverId: 'hasse-clot', teamId: 'van-der-steur-racing', carNumber: 19, class: 'GS' },

  // KohR Motorsports (Ford Mustang GT4) — VIR third place
  { driverId: 'mars', teamId: 'kohr-motorsports', carNumber: 59, class: 'GS' },
  { driverId: 'michaelian', teamId: 'kohr-motorsports', carNumber: 59, class: 'GS' },

  // Circle H Racing (Aston Martin Vantage GT4) — partial season
  { driverId: 'hampton-d', teamId: 'circle-h-racing', carNumber: 14, class: 'GS' },
  { driverId: 'merrill', teamId: 'circle-h-racing', carNumber: 14, class: 'GS' },

  // Random Vandals Racing (BMW M4 GT4)
  { driverId: 'koch', teamId: 'random-vandals-racing', carNumber: 92, class: 'GS' },
  { driverId: 'auberlen', teamId: 'random-vandals-racing', carNumber: 92, class: 'GS' },
  { driverId: 'samantha-tan', teamId: 'random-vandals-racing', carNumber: 92, class: 'GS' },

  // ===== TCR (Touring Car) =====
  // Unitronic / JDC-Miller MotorSports (Audi RS3 LMS TCR) — 2024 TCR champions
  { driverId: 'miller-c', teamId: 'unitronic-jdc-miller-motorsports', carNumber: 17, class: 'TCR' },
  { driverId: 'taylor-mikey', teamId: 'unitronic-jdc-miller-motorsports', carNumber: 17, class: 'TCR' },

  // Bryan Herta Autosport (Hyundai Elantra N TCR) — multi-car effort
  { driverId: 'brown-p', teamId: 'bryan-herta-autosport', carNumber: 76, class: 'TCR' },
  { driverId: 'dupont', teamId: 'bryan-herta-autosport', carNumber: 76, class: 'TCR' },
  { driverId: 'gottsacker', teamId: 'bryan-herta-autosport', carNumber: 33, class: 'TCR' },
  { driverId: 'wickens', teamId: 'bryan-herta-autosport', carNumber: 33, class: 'TCR' },
  { driverId: 'filippi', teamId: 'bryan-herta-autosport', carNumber: 98, class: 'TCR' },
  { driverId: 'wilkins-m', teamId: 'bryan-herta-autosport', carNumber: 98, class: 'TCR' },
  { driverId: 'hagler', teamId: 'bryan-herta-autosport', carNumber: 77, class: 'TCR' },
  { driverId: 'morris', teamId: 'bryan-herta-autosport', carNumber: 77, class: 'TCR' },

  // KMW Motorsports with TMR Engineering (Alfa Romeo Giulietta Veloce TCR) — Road America winners
  { driverId: 'tally', teamId: 'kmw-motorsports', carNumber: 5, class: 'TCR' },
  { driverId: 'lewis-tim', teamId: 'kmw-motorsports', carNumber: 5, class: 'TCR' },

  // Montreal Motorsport Group (Honda Civic Type R FL5 TCR) — VIR winners
  { driverId: 'wittmer-k', teamId: 'mmg', carNumber: 93, class: 'TCR' },
  { driverId: 'yoshihara', teamId: 'mmg', carNumber: 93, class: 'TCR' },

  // HART (Honda Civic FK7 TCR)
  { driverId: 'gilsinger', teamId: 'hart', carNumber: 89, class: 'TCR' },
  { driverId: 'lawrence-c', teamId: 'hart', carNumber: 89, class: 'TCR' },

  // StarCom Racing (Hyundai Elantra N TCR) — debut at Sebring with podium
  { driverId: 'lally', teamId: 'starcom-racing', carNumber: 12, class: 'TCR' },
  { driverId: 'tucker-n', teamId: 'starcom-racing', carNumber: 12, class: 'TCR' },

  // Victor Gonzalez Racing Team (Hyundai Elantra N TCR)
  { driverId: 'gonzalez-t', teamId: 'victor-gonzalez-racing', carNumber: 99, class: 'TCR' },
]
