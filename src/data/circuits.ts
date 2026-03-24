export interface CircuitInfo {
  length: string       // e.g. "5.278 km"
  turns: number
  type: 'permanent' | 'street' | 'oval' | 'mixed'
  lapRecord?: string   // e.g. "1:27.097 (Verstappen, 2023)"
}

// Keyed by circuit name (must match RaceEvent.circuit)
const CIRCUITS: Record<string, CircuitInfo> = {
  // F1 circuits
  'Albert Park Circuit': { length: '5.278 km', turns: 14, type: 'street' },
  'Shanghai International Circuit': { length: '5.451 km', turns: 16, type: 'permanent' },
  'Suzuka International Racing Course': { length: '5.807 km', turns: 18, type: 'permanent' },
  'Miami International Autodrome': { length: '5.412 km', turns: 19, type: 'street' },
  'Circuit Gilles Villeneuve': { length: '4.361 km', turns: 14, type: 'street' },
  'Circuit de Monaco': { length: '3.337 km', turns: 19, type: 'street' },
  'Circuit de Barcelona-Catalunya': { length: '4.657 km', turns: 16, type: 'permanent' },
  'Red Bull Ring': { length: '4.318 km', turns: 10, type: 'permanent' },
  'Silverstone Circuit': { length: '5.891 km', turns: 18, type: 'permanent' },
  'Circuit de Spa-Francorchamps': { length: '7.004 km', turns: 19, type: 'permanent' },
  'Hungaroring': { length: '4.381 km', turns: 14, type: 'permanent' },
  'Circuit Zandvoort': { length: '4.259 km', turns: 14, type: 'permanent' },
  'Autodromo Nazionale Monza': { length: '5.793 km', turns: 11, type: 'permanent' },
  'Madring Circuit': { length: '5.473 km', turns: 16, type: 'street' },
  'Baku City Circuit': { length: '6.003 km', turns: 20, type: 'street' },
  'Marina Bay Street Circuit': { length: '4.940 km', turns: 19, type: 'street' },
  'Circuit of the Americas': { length: '5.513 km', turns: 20, type: 'permanent' },
  'Autodromo Hermanos Rodriguez': { length: '4.304 km', turns: 17, type: 'permanent' },
  'Autodromo Jose Carlos Pace': { length: '4.309 km', turns: 15, type: 'permanent' },
  'Las Vegas Strip Circuit': { length: '6.201 km', turns: 17, type: 'street' },
  'Lusail International Circuit': { length: '5.419 km', turns: 16, type: 'permanent' },
  'Yas Marina Circuit': { length: '5.281 km', turns: 16, type: 'permanent' },

  // WEC circuits
  'Autodromo Enzo e Dino Ferrari': { length: '4.909 km', turns: 19, type: 'permanent' },
  'Circuit de la Sarthe': { length: '13.626 km', turns: 38, type: 'mixed' },
  'Fuji Speedway': { length: '4.563 km', turns: 16, type: 'permanent' },
  'Bahrain International Circuit': { length: '5.412 km', turns: 15, type: 'permanent' },

  // IndyCar circuits
  'Streets of St. Petersburg': { length: '2.890 km', turns: 14, type: 'street' },
  'Phoenix Raceway': { length: '1.609 km', turns: 4, type: 'oval' },
  'Streets of Arlington': { length: '3.400 km', turns: 16, type: 'street' },
  'Barber Motorsports Park': { length: '3.862 km', turns: 15, type: 'permanent' },
  'Streets of Long Beach': { length: '3.167 km', turns: 11, type: 'street' },
  'Indianapolis Motor Speedway (Road Course)': { length: '3.925 km', turns: 14, type: 'permanent' },
  'Indianapolis Motor Speedway (Oval)': { length: '4.023 km', turns: 4, type: 'oval' },
  'Streets of Detroit': { length: '3.068 km', turns: 13, type: 'street' },
  'World Wide Technology Raceway': { length: '2.012 km', turns: 4, type: 'oval' },
  'Road America': { length: '6.515 km', turns: 14, type: 'permanent' },
  'Mid-Ohio Sports Car Course': { length: '3.634 km', turns: 13, type: 'permanent' },
  'Nashville Superspeedway': { length: '2.173 km', turns: 4, type: 'oval' },
  'Portland International Raceway': { length: '3.166 km', turns: 12, type: 'permanent' },
  'Streets of Markham': { length: '3.200 km', turns: 14, type: 'street' },
  'Streets of Washington, D.C.': { length: '3.100 km', turns: 12, type: 'street' },
  'Milwaukee Mile': { length: '1.609 km', turns: 4, type: 'oval' },
  'WeatherTech Raceway Laguna Seca': { length: '3.602 km', turns: 11, type: 'permanent' },

  // NASCAR circuits
  'Daytona International Speedway': { length: '4.023 km', turns: 4, type: 'oval' },
  'Atlanta Motor Speedway': { length: '2.530 km', turns: 4, type: 'oval' },
  'Las Vegas Motor Speedway': { length: '2.414 km', turns: 4, type: 'oval' },
  'Darlington Raceway': { length: '2.212 km', turns: 4, type: 'oval' },
  'Martinsville Speedway': { length: '0.847 km', turns: 4, type: 'oval' },
  'Bristol Motor Speedway': { length: '0.859 km', turns: 4, type: 'oval' },
  'Kansas Speedway': { length: '2.414 km', turns: 4, type: 'oval' },
  'Talladega Superspeedway': { length: '4.281 km', turns: 4, type: 'oval' },
  'Texas Motor Speedway': { length: '2.414 km', turns: 4, type: 'oval' },
  'Watkins Glen International': { length: '5.430 km', turns: 11, type: 'permanent' },
  'Charlotte Motor Speedway': { length: '2.414 km', turns: 4, type: 'oval' },
  'Charlotte Motor Speedway (ROVAL)': { length: '3.670 km', turns: 17, type: 'mixed' },
  'Michigan International Speedway': { length: '3.219 km', turns: 4, type: 'oval' },
  'Pocono Raceway': { length: '4.023 km', turns: 3, type: 'oval' },
  'San Diego Street Course': { length: '3.100 km', turns: 14, type: 'street' },
  'Sonoma Raceway': { length: '3.862 km', turns: 12, type: 'permanent' },
  'Chicagoland Speedway': { length: '2.414 km', turns: 4, type: 'oval' },
  'North Wilkesboro Speedway': { length: '1.017 km', turns: 4, type: 'oval' },
  'Indianapolis Motor Speedway': { length: '4.023 km', turns: 4, type: 'oval' },
  'Iowa Speedway': { length: '1.432 km', turns: 4, type: 'oval' },
  'Richmond Raceway': { length: '1.207 km', turns: 4, type: 'oval' },
  'New Hampshire Motor Speedway': { length: '1.683 km', turns: 4, type: 'oval' },
  'Homestead-Miami Speedway': { length: '2.414 km', turns: 4, type: 'oval' },

  // NLS / DTM / GTWC shared
  'Nurburgring Nordschleife': { length: '25.378 km', turns: 73, type: 'permanent' },
  'Nurburgring': { length: '5.148 km', turns: 15, type: 'permanent' },
  'Hockenheimring': { length: '4.574 km', turns: 17, type: 'permanent' },
  'Lausitzring': { length: '4.534 km', turns: 14, type: 'permanent' },
  'Norisring': { length: '2.300 km', turns: 5, type: 'street' },
  'Motorsport Arena Oschersleben': { length: '3.667 km', turns: 14, type: 'permanent' },
  'Sachsenring': { length: '3.671 km', turns: 14, type: 'permanent' },

  // GTWC
  'Circuit Paul Ricard': { length: '5.842 km', turns: 15, type: 'permanent' },
  'Brands Hatch': { length: '3.908 km', turns: 9, type: 'permanent' },
  'Misano World Circuit': { length: '4.226 km', turns: 16, type: 'permanent' },
  'Circuit de Nevers Magny-Cours': { length: '4.411 km', turns: 17, type: 'permanent' },
  'Algarve International Circuit': { length: '4.653 km', turns: 15, type: 'permanent' },

  // IMSA
  'Sebring International Raceway': { length: '6.020 km', turns: 17, type: 'permanent' },
  'Canadian Tire Motorsport Park': { length: '3.957 km', turns: 10, type: 'permanent' },
  'VIRginia International Raceway': { length: '5.263 km', turns: 17, type: 'permanent' },
  'Michelin Raceway Road Atlanta': { length: '4.088 km', turns: 12, type: 'permanent' },

  // Super GT / Super Formula
  'Okayama International Circuit': { length: '3.703 km', turns: 13, type: 'permanent' },
  'Sportsland Sugo': { length: '3.737 km', turns: 13, type: 'permanent' },
  'Autopolis': { length: '4.674 km', turns: 18, type: 'permanent' },
  'Twin Ring Motegi': { length: '4.801 km', turns: 14, type: 'permanent' },

  // IGTC
  'Mount Panorama Circuit': { length: '6.213 km', turns: 23, type: 'permanent' },

  // Supercars
  'Sydney Motorsport Park': { length: '3.930 km', turns: 12, type: 'permanent' },
  'Taupo Motorsport Park': { length: '3.500 km', turns: 11, type: 'permanent' },
  'Symmons Plains Raceway': { length: '2.410 km', turns: 7, type: 'permanent' },
  'Townsville Street Circuit': { length: '2.860 km', turns: 13, type: 'street' },
  'Hidden Valley Raceway': { length: '2.870 km', turns: 10, type: 'permanent' },
  'Sandown Raceway': { length: '3.100 km', turns: 8, type: 'permanent' },
  'Surfers Paradise Street Circuit': { length: '2.960 km', turns: 12, type: 'street' },
  'Adelaide Street Circuit': { length: '3.220 km', turns: 14, type: 'street' },
}

const TYPE_LABELS: Record<string, Record<string, string>> = {
  en: { permanent: 'Race track', street: 'Street circuit', oval: 'Oval', mixed: 'Mixed layout' },
  uk: { permanent: 'Гоночна траса', street: 'Міська траса', oval: 'Овал', mixed: 'Змішана траса' },
}

export function getCircuitInfo(circuitName: string): CircuitInfo | null {
  return CIRCUITS[circuitName] ?? null
}

export function getCircuitTypeLabel(type: string, locale: string): string {
  return TYPE_LABELS[locale]?.[type] ?? TYPE_LABELS.en[type] ?? type
}
