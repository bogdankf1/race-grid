import { EventResults } from './types'

// NLS 2025 results — verified from nuerburgring-langstrecken-serie.de, 51gt3.com, motorsport.com
// Note: Only events with verified results are included
export const nlsResults2025: Record<string, EventResults> = {
  'nls-2025-9': {
    // NLS 9 — 57. ADAC Barbarossapreis (27 Sep 2025)
    // Andlauer/Sturm won in Porsche 911 GT3 R
    endurance: {
      overall: { drivers: ['Andlauer', 'Sturm'], team: 'Porsche 911 GT3 R' },
    },
  },
}
