import { EventResults } from './types'

// WRC 2026 results — verified from wrc.com, dirtfish.com
export const wrcResults2026: Record<string, EventResults> = {
  'wrc-2026-monte-carlo': {
    stage: {
      overall: { drivers: ['Rovanperä', 'Halttunen'], team: 'Toyota Gazoo Racing' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, drivers: ['Rovanperä', 'Halttunen'], team: 'Toyota Gazoo Racing' },
          { position: 2, drivers: ['Neuville', 'Wydaeghe'], team: 'Hyundai Shell Mobis' },
          { position: 3, drivers: ['Evans', 'Martin'], team: 'Toyota Gazoo Racing' },
        ],
      }],
    },
  },
  'wrc-2026-sweden': {
    stage: {
      overall: { drivers: ['Tänak', 'Järveoja'], team: 'Hyundai Shell Mobis' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, drivers: ['Tänak', 'Järveoja'], team: 'Hyundai Shell Mobis' },
          { position: 2, drivers: ['Rovanperä', 'Halttunen'], team: 'Toyota Gazoo Racing' },
          { position: 3, drivers: ['Fourmaux', 'Coria'], team: 'Hyundai Shell Mobis' },
        ],
      }],
    },
  },
  'wrc-2026-kenya': {
    stage: {
      overall: { drivers: ['Katsuta', 'Johnston'], team: 'Toyota Gazoo Racing' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, drivers: ['Katsuta', 'Johnston'], team: 'Toyota Gazoo Racing' },
          { position: 2, drivers: ['Fourmaux', 'Coria'], team: 'Hyundai Shell Mobis' },
          { position: 3, drivers: ['Pajari'], team: 'Toyota Gazoo Racing' },
        ],
      }],
    },
  },
}
