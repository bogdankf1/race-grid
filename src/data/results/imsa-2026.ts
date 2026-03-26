import { EventResults } from './types'

// IMSA 2026 results — verified from imsa.com, motorsport.com
export const imsaResults2026: Record<string, EventResults> = {
  'imsa-2026-daytona': {
    endurance: {
      overall: { drivers: ['Nasr', 'Andlauer', 'Heinrich'], team: 'Porsche Penske Motorsport' },
      classes: [
        {
          className: 'GTP',
          podium: [
            { position: 1, drivers: ['Nasr', 'Andlauer', 'Heinrich'], team: 'Porsche Penske Motorsport' },
            { position: 2, drivers: ['Aitken'], team: 'Whelen Cadillac' },
            { position: 3, drivers: ['Farfus'], team: 'Team WRT BMW' },
          ],
        },
        {
          className: 'LMP2',
          podium: [
            { position: 1, drivers: ['Kurtz', 'Quinn', 'Sowery', 'Jakobsen'], team: 'CrowdStrike Racing' },
          ],
        },
        {
          className: 'GTD Pro',
          podium: [
            { position: 1, drivers: ['Verhagen', 'De Phillippi', 'Hesse', 'Harper'], team: 'Paul Miller Racing BMW' },
          ],
        },
        {
          className: 'GTD',
          podium: [
            { position: 1, drivers: ['Ellis', 'Ward', 'Dontje', 'Auer'], team: 'Winward Racing Mercedes' },
          ],
        },
      ],
    },
  },
  'imsa-2026-sebring': {
    endurance: {
      overall: { drivers: ['Nasr', 'Andlauer', 'Heinrich'], team: 'Porsche Penske Motorsport' },
      classes: [
        {
          className: 'GTP',
          podium: [
            { position: 1, drivers: ['Nasr', 'Andlauer', 'Heinrich'], team: 'Porsche Penske Motorsport' },
            { position: 2, drivers: ['Estre'], team: 'Porsche Penske Motorsport' },
          ],
        },
      ],
    },
  },
}
