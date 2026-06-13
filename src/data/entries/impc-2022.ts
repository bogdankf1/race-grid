import type { EntryItem } from './types'

// IMSA Michelin Pilot Challenge 2022 — full-season entries
// Multi-class: GS (GT4) + TCR (Touring Car Racing)
// Sources verified 2026-06-08:
//   - en.wikipedia.org/wiki/2022_Michelin_Pilot_Challenge
//   - imsa.com per-event entry list notebooks
//   - sportscar365.com / dailysportscar.com season previews
// Note: many GS pairings rotated for the 4-hour rounds at Daytona and Road America.
// Listed below are the regular full-season pairings; enduro third drivers are added
// in the results file where they shared a podium.
export const impcEntries2022: EntryItem[] = [
  // ===== GS (Grand Sport / GT4) =====
  // VOLT Racing (Aston Martin Vantage AMR GT4) — 2022 GS champions
  { driverId: 'brynjolfsson', teamId: 'volt-racing', carNumber: 7, class: 'GS' },
  { driverId: 'hindman', teamId: 'volt-racing', carNumber: 7, class: 'GS' },

  // Murillo Racing (Mercedes-AMG GT4)
  { driverId: 'foss', teamId: 'murillo-racing', carNumber: 56, class: 'GS' },
  { driverId: 'koch', teamId: 'murillo-racing', carNumber: 56, class: 'GS' },
  { driverId: 'mosing', teamId: 'murillo-racing', carNumber: 56, class: 'GS' },
  { driverId: 'miller-marc', teamId: 'murillo-racing', carNumber: 56, class: 'GS' },
  { driverId: 'murillo', teamId: 'murillo-racing', carNumber: 72, class: 'GS' },
  { driverId: 'szymczak', teamId: 'murillo-racing', carNumber: 72, class: 'GS' },

  // Turner Motorsport (BMW M4 GT4)
  { driverId: 'auberlen', teamId: 'turner-motorsport', carNumber: 95, class: 'GS' },
  { driverId: 'machavern', teamId: 'turner-motorsport', carNumber: 95, class: 'GS' },
  { driverId: 'barletta', teamId: 'turner-motorsport', carNumber: 96, class: 'GS' },
  { driverId: 'foley', teamId: 'turner-motorsport', carNumber: 96, class: 'GS' },

  // Rebel Rock Racing (Chevrolet Camaro GT4.R)
  { driverId: 'depew', teamId: 'rebel-rock-racing', carNumber: 71, class: 'GS' },
  { driverId: 'liddell', teamId: 'rebel-rock-racing', carNumber: 71, class: 'GS' },
  { driverId: 'cooper', teamId: 'rebel-rock-racing', carNumber: 71, class: 'GS' },

  // McCann Racing (Porsche 718 Cayman GT4 RS Clubsport)
  { driverId: 'davis-a', teamId: 'mccann-racing', carNumber: 8, class: 'GS' },
  { driverId: 'mccann', teamId: 'mccann-racing', carNumber: 8, class: 'GS' },

  // NOLASPORT (Porsche 718 Cayman GT4 RS Clubsport)
  { driverId: 'jason-hart', teamId: 'nolasport', carNumber: 47, class: 'GS' },
  { driverId: 'travis-m', teamId: 'nolasport', carNumber: 47, class: 'GS' },

  // Team TGM (Porsche 718 Cayman GT4 RS Clubsport)
  { driverId: 'plumb-h', teamId: 'team-tgm', carNumber: 46, class: 'GS' },
  { driverId: 'plumb', teamId: 'team-tgm', carNumber: 46, class: 'GS' },
  { driverId: 'giovanis', teamId: 'team-tgm', carNumber: 64, class: 'GS' },
  { driverId: 'trinkler', teamId: 'team-tgm', carNumber: 64, class: 'GS' },

  // Stephen Cameron Racing (BMW M4 GT4)
  { driverId: 'liefooghe', teamId: 'stephen-cameron-racing', carNumber: 43, class: 'GS' },
  { driverId: 'quinlan', teamId: 'stephen-cameron-racing', carNumber: 43, class: 'GS' },

  // Capstone Motorsports (Mercedes-AMG GT4)
  { driverId: 'ferrara', teamId: 'capstone-motorsports', carNumber: 11, class: 'GS' },
  { driverId: 'wilson-k', teamId: 'capstone-motorsports', carNumber: 11, class: 'GS' },

  // CarBahn with Peregrine Racing (Porsche 718 Cayman GT4 RS Clubsport)
  { driverId: 'mcquarrie', teamId: 'carbahn-peregrine', carNumber: 93, class: 'GS' },
  { driverId: 'gandhi', teamId: 'carbahn-peregrine', carNumber: 93, class: 'GS' },
  { driverId: 'siegel-m', teamId: 'carbahn-peregrine', carNumber: 93, class: 'GS' },
  { driverId: 'dyer', teamId: 'carbahn-peregrine', carNumber: 93, class: 'GS' },

  // BGB Motorsports (Porsche 718 Cayman GT4 RS Clubsport)
  { driverId: 'collingwood', teamId: 'bgb-motorsports', carNumber: 83, class: 'GS' },
  { driverId: 'pumpelly', teamId: 'bgb-motorsports', carNumber: 83, class: 'GS' },
  { driverId: 'tecce', teamId: 'bgb-motorsports', carNumber: 83, class: 'GS' },

  // Black Swan Racing (Porsche 718 Cayman GT4 RS Clubsport)
  { driverId: 'bleekemolen', teamId: 'black-swan-racing', carNumber: 540, class: 'GS' },
  { driverId: 'pappas', teamId: 'black-swan-racing', carNumber: 540, class: 'GS' },
  { driverId: 'bleekemolen-s', teamId: 'black-swan-racing', carNumber: 540, class: 'GS' },

  // KohR Motorsports (Ford Mustang GT4)
  { driverId: 'johnson-b', teamId: 'kohr-motorsports', carNumber: 59, class: 'GS' },
  { driverId: 'michaelian', teamId: 'kohr-motorsports', carNumber: 59, class: 'GS' },
  { driverId: 'mars', teamId: 'kohr-motorsports', carNumber: 60, class: 'GS' },
  { driverId: 'stacy', teamId: 'kohr-motorsports', carNumber: 60, class: 'GS' },

  // FCP Euro by Ricca Autosport (Mercedes-AMG GT4)
  { driverId: 'andrusko', teamId: 'fcp-euro', carNumber: 55, class: 'GS' },
  { driverId: 'skeen', teamId: 'fcp-euro', carNumber: 55, class: 'GS' },

  // PF Racing (Ford Mustang GT4)
  { driverId: 'pesek', teamId: 'pf-racing', carNumber: 40, class: 'GS' },
  { driverId: 'mccumbee', teamId: 'pf-racing', carNumber: 40, class: 'GS' },
  { driverId: 'hand', teamId: 'pf-racing', carNumber: 40, class: 'GS' },
  { driverId: 'marcelli', teamId: 'pf-racing', carNumber: 877, class: 'GS' },
  { driverId: 'monk', teamId: 'pf-racing', carNumber: 877, class: 'GS' },

  // TGR Riley Motorsports (Toyota GR Supra GT4)
  { driverId: 'najri', teamId: 'tgr-riley-motorsports', carNumber: 14, class: 'GS' },
  { driverId: 'camilo', teamId: 'tgr-riley-motorsports', carNumber: 14, class: 'GS' },
  { driverId: 'jakos', teamId: 'tgr-riley-motorsports', carNumber: 14, class: 'GS' },

  // Riley Motorsports (Mercedes-AMG GT4)
  { driverId: 'andrews-s', teamId: 'riley-motorsports', carNumber: 21, class: 'GS' },

  // RS1 (Porsche 718 Cayman GT4 RS Clubsport)
  { driverId: 'mcaleer', teamId: 'rs1', carNumber: 28, class: 'GS' },
  { driverId: 'filgueiras', teamId: 'rs1', carNumber: 28, class: 'GS' },

  // ===== TCR (Touring Car) =====
  // Bryan Herta Autosport with Curb-Agajanian (Hyundai Elantra N TCR) — 2022 TCR champions
  { driverId: 'hagler', teamId: 'bryan-herta-autosport', carNumber: 1, class: 'TCR' },
  { driverId: 'lewis-m', teamId: 'bryan-herta-autosport', carNumber: 1, class: 'TCR' },
  { driverId: 'wickens', teamId: 'bryan-herta-autosport', carNumber: 33, class: 'TCR' },
  { driverId: 'wilkins-m', teamId: 'bryan-herta-autosport', carNumber: 33, class: 'TCR' },
  { driverId: 'chase-p', teamId: 'bryan-herta-autosport', carNumber: 77, class: 'TCR' },
  { driverId: 'gottsacker', teamId: 'bryan-herta-autosport', carNumber: 98, class: 'TCR' },
  { driverId: 'maxson-t', teamId: 'bryan-herta-autosport', carNumber: 77, class: 'TCR' },
  { driverId: 'filippi', teamId: 'bryan-herta-autosport', carNumber: 77, class: 'TCR' },

  // Michael Johnson Racing with BHA (Hyundai Elantra N TCR)
  { driverId: 'johnson-m', teamId: 'michael-johnson-racing', carNumber: 54, class: 'TCR' },
  { driverId: 'simpson-stephen', teamId: 'michael-johnson-racing', carNumber: 54, class: 'TCR' },

  // KMW Motorsports with TMR Engineering (Alfa Romeo Giulietta Veloce TCR)
  { driverId: 'block', teamId: 'kmw-motorsports', carNumber: 5, class: 'TCR' },
  { driverId: 'lewis-tim', teamId: 'kmw-motorsports', carNumber: 5, class: 'TCR' },

  // Belgard & Techniseal Racing (Audi RS3 LMS TCR)
  { driverId: 'rockwell', teamId: 'belgard-techniseal-racing', carNumber: 15, class: 'TCR' },
  { driverId: 'dupont', teamId: 'belgard-techniseal-racing', carNumber: 15, class: 'TCR' },
  { driverId: 'brown-p', teamId: 'belgard-techniseal-racing', carNumber: 15, class: 'TCR' },

  // Unitronic JDC-Miller MotorSports (Audi RS3 LMS TCR)
  { driverId: 'miller-c', teamId: 'unitronic-jdc-miller-motorsports', carNumber: 17, class: 'TCR' },
  { driverId: 'taylor-mikey', teamId: 'unitronic-jdc-miller-motorsports', carNumber: 17, class: 'TCR' },

  // Van Der Steur Racing (Hyundai Veloster N TCR)
  { driverId: 'van-der-steur', teamId: 'van-der-steur-racing', carNumber: 19, class: 'TCR' },
  { driverId: 'gonzalez-t', teamId: 'van-der-steur-racing', carNumber: 19, class: 'TCR' },

  // LA Honda World Racing (Honda Civic Type R TCR)
  { driverId: 'eversley', teamId: 'la-honda-world-racing', carNumber: 73, class: 'TCR' },
  { driverId: 'lamarra', teamId: 'la-honda-world-racing', carNumber: 73, class: 'TCR' },
  { driverId: 'pombo', teamId: 'la-honda-world-racing', carNumber: 37, class: 'TCR' },

  // HART (Honda Civic Type R TCR)
  { driverId: 'gilsinger', teamId: 'hart', carNumber: 89, class: 'TCR' },
  { driverId: 'eich', teamId: 'hart', carNumber: 89, class: 'TCR' },

  // Victor Gonzalez Racing Team (Honda Civic Type R TCR)
  { driverId: 'gonzalez-v', teamId: 'victor-gonzalez-racing', carNumber: 99, class: 'TCR' },
  { driverId: 'wittmer-k', teamId: 'victor-gonzalez-racing', carNumber: 99, class: 'TCR' },

  // Road Shagger Racing (Audi RS3 LMS TCR)
  { driverId: 'ernstone', teamId: 'road-shagger-racing', carNumber: 61, class: 'TCR' },
]
