import { EventResults } from './types'

// Super GT 2025 results — verified from supergt.net, motorsport.com, dailysportscar.com
// GT500 class winners only (primary class)
export const supergtResults2025: Record<string, EventResults> = {
  'supergt-2025-okayama': {
    qualifying: {
      overall: { drivers: ['Fukuzumi'], team: 'TGR Team ENEOS ROOKIE #14' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Fukuzumi'], team: 'TGR Team ENEOS ROOKIE #14' }] }],
    },
    race: {
      overall: { drivers: ['Tsuboi', 'Yamashita'], team: 'TGR Team au TOM\'S' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, drivers: ['Tsuboi', 'Yamashita'], team: 'TGR Team au TOM\'S' },
        ],
      }],
    },
  },
  'supergt-2025-fuji-1': {
    qualifying: {
      overall: { drivers: ['Ishiura', 'Oyu'], team: 'KeePer CERUMO #38' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Ishiura', 'Oyu'], team: 'KeePer CERUMO #38' }] }],
    },
    race: {
      overall: { drivers: ['Ishiura', 'Oyu'], team: 'KeePer CERUMO' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, drivers: ['Ishiura', 'Oyu'], team: 'KeePer CERUMO' },
        ],
      }],
    },
  },
  'supergt-2025-sepang': {
    qualifying: {
      overall: { drivers: ['Kunimoto'], team: 'TGR Team WedsSport Bandoh #19' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Kunimoto'], team: 'TGR Team WedsSport Bandoh #19' }] }],
    },
    race: {
      overall: { drivers: ['Alesi', 'Sasahara'], team: 'TGR Team Deloitte TOM\'S' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, drivers: ['Alesi', 'Sasahara'], team: 'TGR Team Deloitte TOM\'S' },
        ],
      }],
    },
  },
  'supergt-2025-fuji-2': {
    qualifying: {
      overall: { drivers: ['Ishiura', 'Oyu'], team: 'KeePer CERUMO #38' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Ishiura', 'Oyu'], team: 'KeePer CERUMO #38' }] }],
    },
    // Sprint format — Race 2 GT500 winner: Fukuzumi
    race: {
      overall: { drivers: ['Fukuzumi'], team: 'ENEOS X PRIME' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, drivers: ['Fukuzumi'], team: 'ENEOS X PRIME' },
          { position: 2, drivers: ['Yamashita'], team: 'TGR Team au TOM\'S' },
          { position: 3, drivers: ['Ishiura'], team: 'KeePer CERUMO' },
        ],
      }],
    },
  },
  'supergt-2025-suzuka': {
    qualifying: {
      overall: { drivers: ['Otsu', 'Sato'], team: 'ARTA MUGEN Honda #16' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Otsu', 'Sato'], team: 'ARTA MUGEN Honda #16' }] }],
    },
    race: {
      // #23 NISMO Z won
      overall: { drivers: ['Matsuda', 'Quintarelli'], team: 'NISMO' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, drivers: ['Matsuda', 'Quintarelli'], team: 'NISMO' },
        ],
      }],
    },
  },
  'supergt-2025-sugo': {
    qualifying: {
      overall: { drivers: ['Otsu', 'Sato'], team: 'ARTA MUGEN Honda #16' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Otsu', 'Sato'], team: 'ARTA MUGEN Honda #16' }] }],
    },
    race: {
      overall: { drivers: ['Matsuda', 'Natori'], team: 'Kondo Racing Nissan' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, drivers: ['Matsuda', 'Natori'], team: 'Kondo Racing Nissan' },
          { position: 2, drivers: ['Sekiguchi', 'Fenestraz'], team: 'DENSO KOBELCO SARD' },
          { position: 3, drivers: ['Tsukakoshi', 'Koide'], team: 'Astemo Honda' },
        ],
      }],
    },
  },
  'supergt-2025-autopolis': {
    qualifying: {
      overall: { drivers: ['Sasaki', 'Miyake'], team: 'NDDP Racing Nissan #3' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Sasaki', 'Miyake'], team: 'NDDP Racing Nissan #3' }] }],
    },
    race: {
      // Stanley Team Kunimitsu Honda Civic won
      overall: { drivers: ['Yamamoto', 'Makino'], team: 'Stanley Team Kunimitsu Honda' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, drivers: ['Yamamoto', 'Makino'], team: 'Stanley Team Kunimitsu Honda' },
        ],
      }],
    },
  },
  'supergt-2025-motegi': {
    qualifying: {
      overall: { drivers: ['Ishiura', 'Oyu'], team: 'KeePer CERUMO #38' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Ishiura', 'Oyu'], team: 'KeePer CERUMO #38' }] }],
    },
    race: {
      // #100 STANLEY CIVIC TYPE R-GT won again, Honda 1-2-3
      overall: { drivers: ['Yamamoto', 'Makino'], team: 'Stanley Team Kunimitsu Honda' },
      classes: [{
        className: 'GT500',
        podium: [
          { position: 1, drivers: ['Yamamoto', 'Makino'], team: 'Stanley Team Kunimitsu Honda' },
          { position: 2, drivers: ['Izawa', 'Okusa'], team: 'Modulo Honda' },
          { position: 3, drivers: ['Otsu', 'Sato'], team: 'ARTA MUGEN Honda' },
        ],
      }],
    },
  },
}
