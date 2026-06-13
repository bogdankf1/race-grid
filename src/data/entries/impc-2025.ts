import type { EntryItem } from './types'

// IMSA Michelin Pilot Challenge 2025 — full-season entries
// Multi-class: GS (GT4) + TCR (Touring Car Racing)
// Sources verified 2026-06-08:
//   - en.wikipedia.org/wiki/2025_Michelin_Pilot_Challenge
//   - imsa.com per-event entry list notebooks (Daytona, Sebring, Mid-Ohio, Road America, Road Atlanta)
//   - racer.com "42 entries for Michelin Pilot Challenge opener" Jan 2025
//   - sportscar365.com IMPC 2025 season previews
// Note: many GS lineups rotate enduro additions for the 4-hour rounds (Daytona, Mid-Ohio);
// listed below are the regular full-season driver pairings. Some 2025-only crew members
// (Selldorff, Altzman, Johnson, Holton/Plumb, KohR/Auto Technic teams, Precision Racing LA, etc.)
// are not currently in drivers.ts/teams.ts and are listed in the migration notes; their
// entries are omitted here in favour of the pairings that resolve to existing IDs.
export const impcEntries2025: EntryItem[] = [
  // ===== GS (Grand Sport / GT4) =====
  // RS1 (Porsche 718 GT4 RS Clubsport) — 2025 GS champions
  { driverId: 'heylen', teamId: 'rs1', carNumber: 28, class: 'GS' },
  { driverId: 'mars', teamId: 'rs1', carNumber: 28, class: 'GS' },

  // CarBahn with Peregrine Racing (BMW M4 GT4 EVO) — runner-up crew
  { driverId: 'westphal', teamId: 'carbahn-peregrine', carNumber: 39, class: 'GS' },
  { driverId: 'mcalister-s', teamId: 'carbahn-peregrine', carNumber: 39, class: 'GS' },

  // McCumbee McAleer Racing (Ford Mustang GT4 / BMW M4 GT4 EVO)
  { driverId: 'cicero', teamId: 'mccumbee-mcaleer-racing', carNumber: 13, class: 'GS' },
  { driverId: 'noaker', teamId: 'mccumbee-mcaleer-racing', carNumber: 13, class: 'GS' },

  // Accelerating Performance / Ibiza Farm Motorsports (McLaren Artura GT4)
  // Listed in 2025 paddock under the "Accelerating Performance" banner; the operation
  // is run by the same group as the 2026 Ibiza Farm Motorsport entry.
  { driverId: 'cooper', teamId: 'ibiza-farm-motorsport', carNumber: 44, class: 'GS' },
  { driverId: 'uretsky', teamId: 'ibiza-farm-motorsport', carNumber: 44, class: 'GS' },

  // Turner Motorsport (BMW M4 GT4 EVO)
  // Co-driver Francis Selldorff missing from drivers.ts — Machavern listed solo.
  { driverId: 'machavern', teamId: 'turner-motorsport', carNumber: 95, class: 'GS' },

  // Rebel Rock Racing (Aston Martin Vantage GT4)
  { driverId: 'liddell', teamId: 'rebel-rock-racing', carNumber: 71, class: 'GS' },
  { driverId: 'depew', teamId: 'rebel-rock-racing', carNumber: 71, class: 'GS' },

  // Stephen Cameron Racing (BMW M4 GT4 EVO)
  { driverId: 'liefooghe', teamId: 'stephen-cameron-racing', carNumber: 19, class: 'GS' },
  { driverId: 'quinlan', teamId: 'stephen-cameron-racing', carNumber: 19, class: 'GS' },

  // Random Vandals Racing / STR (BMW M4 GT4 EVO)
  { driverId: 'auberlen', teamId: 'random-vandals-racing', carNumber: 38, class: 'GS' },

  // Winward Racing (Mercedes-AMG GT GT4)
  { driverId: 'arrow', teamId: 'winward-racing', carNumber: 57, class: 'GS' },
  { driverId: 'ward', teamId: 'winward-racing', carNumber: 57, class: 'GS' },

  // Motorsports In Action (McLaren Artura GT4)
  { driverId: 'lazare', teamId: 'motorsports-in-action', carNumber: 69, class: 'GS' },

  // Hattori Motorsports (Toyota GR Supra GT4)
  { driverId: 'grisham', teamId: 'hattori-motorsports', carNumber: 92, class: 'GS' },

  // Circle H Racing (Aston Martin Vantage GT4)
  { driverId: 'hampton-d', teamId: 'circle-h-racing', carNumber: 14, class: 'GS' },
  { driverId: 'merrill', teamId: 'circle-h-racing', carNumber: 14, class: 'GS' },

  // RAFA Racing (Toyota GR Supra GT4)
  { driverId: 'porto', teamId: 'rafa-racing', carNumber: 50, class: 'GS' },

  // Team TGM (Aston Martin Vantage GT4) — 2025 included Holton/Plumb pairing (drivers not in DB)
  { driverId: 'trinkler', teamId: 'team-tgm', carNumber: 46, class: 'GS' },

  // McCumbee McAleer Racing sister car (BMW M4 GT4 EVO)
  { driverId: 'mcaleer', teamId: 'mccumbee-mcaleer-racing', carNumber: 6, class: 'GS' },
  { driverId: 'krainz', teamId: 'mccumbee-mcaleer-racing', carNumber: 6, class: 'GS' },

  // ===== TCR (Touring Car) =====
  // Bryan Herta Autosport w/ Curb-Agajanian (Hyundai Elantra N TCR) — 2025 TCR champion crew
  { driverId: 'gottsacker', teamId: 'bryan-herta-autosport', carNumber: 98, class: 'TCR' },
  { driverId: 'filippi', teamId: 'bryan-herta-autosport', carNumber: 98, class: 'TCR' },

  // Bryan Herta Autosport #76 (Hyundai Elantra N TCR)
  { driverId: 'brown-p', teamId: 'bryan-herta-autosport', carNumber: 76, class: 'TCR' },
  { driverId: 'dupont', teamId: 'bryan-herta-autosport', carNumber: 76, class: 'TCR' },

  // Bryan Herta Autosport #33 (Hyundai Elantra N TCR)
  { driverId: 'wilkins-m', teamId: 'bryan-herta-autosport', carNumber: 33, class: 'TCR' },
  { driverId: 'morris', teamId: 'bryan-herta-autosport', carNumber: 33, class: 'TCR' },

  // Bryan Herta Autosport #18 — partial-season car (rookies)
  { driverId: 'gottsacker', teamId: 'bryan-herta-autosport', carNumber: 18, class: 'TCR' },

  // Montreal Motorsport Group (Honda Civic FL5 TCR)
  { driverId: 'montour', teamId: 'mmg', carNumber: 93, class: 'TCR' },
  { driverId: 'wittmer-k', teamId: 'mmg', carNumber: 93, class: 'TCR' },
  { driverId: 'yoshihara', teamId: 'mmg', carNumber: 93, class: 'TCR' },

  // Victor Gonzalez Racing Team (Hyundai Elantra N TCR / CUPRA Leon VZ TCR mid-season)
  { driverId: 'gonzalez-t', teamId: 'victor-gonzalez-racing', carNumber: 99, class: 'TCR' },
  // Eric Powell shared the #99 — 'powell' driver ID exists but is Eric Powell, used here.
  { driverId: 'powell', teamId: 'victor-gonzalez-racing', carNumber: 99, class: 'TCR' },

  // HART (Honda Civic Type R TCR)
  { driverId: 'lawrence-c', teamId: 'hart', carNumber: 89, class: 'TCR' },
  { driverId: 'gilsinger', teamId: 'hart', carNumber: 89, class: 'TCR' },
  { driverId: 'chambers-t', teamId: 'hart', carNumber: 89, class: 'TCR' },

  // KMW Motorsports with TMR Engineering (Honda Civic Type-R TCR)
  { driverId: 'lewis-tim', teamId: 'kmw-motorsports', carNumber: 84, class: 'TCR' },
  { driverId: 'pasquarella', teamId: 'kmw-motorsports', carNumber: 84, class: 'TCR' },

  // Copeland Motorsports (Hyundai Veloster N TCR)
  { driverId: 'maxson-t', teamId: 'copeland-motorsports', carNumber: 27, class: 'TCR' },

  // LAP Motorsports (Hyundai / CUPRA)
  { driverId: 'gou-eddie', teamId: 'lap-motorsports', carNumber: 17, class: 'TCR' },
  { driverId: 'gou-eduardo', teamId: 'lap-motorsports', carNumber: 17, class: 'TCR' },

  // Notes:
  // - 2025 paddock teams not yet in teams.ts: KohR Motorsports (#59/#60), Auto Technic Racing
  //   (#27 BMW), Precision Racing LA (#7 Audi RS3, #37), RVA Graphics Motorsports by Speed
  //   Syndicate (#31 Audi). Cars from those teams are referenced in results below but their
  //   entries are omitted here pending team-ID additions.
  // - Drivers not yet in drivers.ts: Jenson Altzman (#13), Francis Selldorff (#95), Billy
  //   Johnson (#59 KohR), Bob Michaelian (#60 KohR), Paul Holton/Matt Plumb (Team TGM),
  //   Stevan McAleer (#27 Auto Technic — note: 'mcaleer' = Stevan McAleer EXISTS), Ryan
  //   Eversley/Celso Neto (#7 Precision Racing), Jaden Conwright/Luke Rumberg (#31 RVA
  //   Graphics), Megan Tomlinson (#37 Precision Racing), Steve Wetterau/Cameron Shields
  //   (#4 CarBahn), Chad McCumbee, Cameron McLeod.
]
