import type { EntryItem } from './types'

// IMSA Michelin Pilot Challenge 2023 — full-season entries
// Multi-class: GS (GT4) + TCR (Touring Car Racing)
// Sources verified 2026-06-08:
//   - en.wikipedia.org/wiki/2023_Michelin_Pilot_Challenge
//   - sportscar365.com / dailysportscar.com / racer.com per-event reports
//   - imsa.com news archives 2023
//   - Team announcements (chadmccumbee.com, winwardracingusa.com, bryanhertaautosport.com,
//     teamtgm.com, wrightmotorsports.com, harrygottsackerracing.com)
// Listed below are the regular full-season driver pairings; enduro additions for the
// 4-hour rounds (Daytona, Indianapolis) rotate and are not all enumerated here.
export const impcEntries2023: EntryItem[] = [
  // ===== GS (Grand Sport / GT4) =====
  // Turner Motorsport (BMW M4 GT4) — eventual GS Drivers/Teams Champions
  { driverId: 'barletta', teamId: 'turner-motorsport', carNumber: 96, class: 'GS' },
  { driverId: 'foley', teamId: 'turner-motorsport', carNumber: 96, class: 'GS' },

  // Rebel Rock Racing (Aston Martin Vantage AMR GT4) — championship runners-up
  { driverId: 'liddell', teamId: 'rebel-rock-racing', carNumber: 71, class: 'GS' },
  { driverId: 'depew', teamId: 'rebel-rock-racing', carNumber: 71, class: 'GS' },

  // Murillo Racing (Mercedes-AMG GT GT4)
  { driverId: 'murillo', teamId: 'murillo-racing', carNumber: 72, class: 'GS' },
  { driverId: 'szymczak', teamId: 'murillo-racing', carNumber: 72, class: 'GS' },

  // RS1 (Porsche 718 Cayman GT4 RS Clubsport)
  { driverId: 'filgueiras', teamId: 'rs1', carNumber: 28, class: 'GS' },
  { driverId: 'mcaleer', teamId: 'rs1', carNumber: 28, class: 'GS' },

  // Wright Motorsports (Porsche 718 Cayman GT4 RS Clubsport) — Pilot Challenge entry
  { driverId: 'adelson', teamId: 'wright-motorsports', carNumber: 120, class: 'GS' },
  { driverId: 'skeer', teamId: 'wright-motorsports', carNumber: 120, class: 'GS' },

  // BGB Motorsports (Porsche 718 Cayman GT4 RS Clubsport)
  { driverId: 'collingwood', teamId: 'bgb-motorsports', carNumber: 83, class: 'GS' },
  { driverId: 'pumpelly', teamId: 'bgb-motorsports', carNumber: 83, class: 'GS' },

  // McCumbee McAleer Racing with AEROSPORT (Ford Mustang GT4)
  { driverId: 'altzman', teamId: 'mccumbee-mcaleer-racing', carNumber: 13, class: 'GS' },
  { driverId: 'mccumbee', teamId: 'mccumbee-mcaleer-racing', carNumber: 13, class: 'GS' },

  // Team TGM (Aston Martin Vantage GT4)
  { driverId: 'plumb-h', teamId: 'team-tgm', carNumber: 64, class: 'GS' },
  { driverId: 'plumb', teamId: 'team-tgm', carNumber: 46, class: 'GS' },

  // PF Racing (Ford Mustang GT4) — Daytona winners
  { driverId: 'burton-h', teamId: 'pf-racing', carNumber: 42, class: 'GS' },
  { driverId: 'smith', teamId: 'pf-racing', carNumber: 42, class: 'GS' },

  // Winward Racing (Mercedes-AMG GT4)
  { driverId: 'morad-d', teamId: 'winward-racing', carNumber: 57, class: 'GS' },
  { driverId: 'ward', teamId: 'winward-racing', carNumber: 57, class: 'GS' },

  // Hattori Motorsports (Toyota GR Supra GT4) — branded "TGR Hattori Motorsports" in 2023
  { driverId: 'johnson-b', teamId: 'hattori-motorsports', carNumber: 50, class: 'GS' },
  { driverId: 'thompson-p', teamId: 'hattori-motorsports', carNumber: 50, class: 'GS' },

  // Motorsports in Action (McLaren Artura GT4) — round 11 winners
  { driverId: 'filsinger', teamId: 'motorsports-in-action', carNumber: 69, class: 'GS' },
  { driverId: 'lazare', teamId: 'motorsports-in-action', carNumber: 69, class: 'GS' },

  // ===== TCR (Touring Car) =====
  // Bryan Herta Autosport with Curb-Agajanian (Hyundai Elantra N TCR)
  // #33 — eventual TCR Drivers Champions Gottsacker / Wickens
  { driverId: 'gottsacker', teamId: 'bryan-herta-autosport', carNumber: 33, class: 'TCR' },
  { driverId: 'wickens', teamId: 'bryan-herta-autosport', carNumber: 33, class: 'TCR' },
  // #98 — Filippi / Wilkins, 3 wins, runners-up
  { driverId: 'filippi', teamId: 'bryan-herta-autosport', carNumber: 98, class: 'TCR' },
  { driverId: 'wilkins-m', teamId: 'bryan-herta-autosport', carNumber: 98, class: 'TCR' },
  // #77 — Hagler / Lewis (Michael)
  { driverId: 'hagler', teamId: 'bryan-herta-autosport', carNumber: 77, class: 'TCR' },
  { driverId: 'lewis-m', teamId: 'bryan-herta-autosport', carNumber: 77, class: 'TCR' },

  // Unitronic JDC-Miller Motorsports (Audi RS3 LMS TCR)
  { driverId: 'miller-c', teamId: 'unitronic-jdc-miller-motorsports', carNumber: 17, class: 'TCR' },
  { driverId: 'taylor-mikey', teamId: 'unitronic-jdc-miller-motorsports', carNumber: 17, class: 'TCR' },

  // KMW Motorsports with TMR Engineering (Hyundai Veloster N TCR / Elantra)
  { driverId: 'block', teamId: 'kmw-motorsports', carNumber: 5, class: 'TCR' },
  { driverId: 'lewis-tim', teamId: 'kmw-motorsports', carNumber: 5, class: 'TCR' },

  // Road Shagger Racing (Audi RS3 LMS TCR) — Daytona winners
  { driverId: 'ernstone', teamId: 'road-shagger-racing', carNumber: 61, class: 'TCR' },
  { driverId: 'morley', teamId: 'road-shagger-racing', carNumber: 61, class: 'TCR' },

  // Atlanta Speedwerks / Hyundai customer (Hyundai Elantra N TCR)
  { driverId: 'brown-p', teamId: 'atlanta-speedwerks', carNumber: 99, class: 'TCR' },
  { driverId: 'rockwell', teamId: 'atlanta-speedwerks', carNumber: 99, class: 'TCR' },

  // Copeland Motorsports (Hyundai Veloster N TCR)
  { driverId: 'deily', teamId: 'copeland-motorsports', carNumber: 27, class: 'TCR' },
  { driverId: 'maxson-t', teamId: 'copeland-motorsports', carNumber: 27, class: 'TCR' },

  // VGRT / Victor Gonzalez Racing Team (CUPRA Leon Competición TCR)
  { driverId: 'gonzalez-v', teamId: 'victor-gonzalez-racing', carNumber: 73, class: 'TCR' },
  { driverId: 'wittmer-k', teamId: 'victor-gonzalez-racing', carNumber: 73, class: 'TCR' },

  // L.A. Honda World Racing (Honda Civic FK7 TCR) — Daytona TCR pole sitter
  { driverId: 'pombo', teamId: 'la-honda-world-racing', carNumber: 37, class: 'TCR' },
  { driverId: 'eversley', teamId: 'la-honda-world-racing', carNumber: 37, class: 'TCR' },

  // Bigham / Jaskol entry (TCR)
  { driverId: 'bigham', teamId: 'kmw-motorsports', carNumber: 84, class: 'TCR' },
  { driverId: 'jaskol', teamId: 'kmw-motorsports', carNumber: 84, class: 'TCR' },

  // Dupont / Looijmans (TCR) — full-season pairing
  { driverId: 'dupont', teamId: 'bryan-herta-autosport', carNumber: 18, class: 'TCR' },
  { driverId: 'looijmans', teamId: 'bryan-herta-autosport', carNumber: 18, class: 'TCR' },
]
