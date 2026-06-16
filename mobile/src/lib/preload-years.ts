// Statically register every historical season at startup. The registry's own
// loadYear() uses dynamic import(), which Metro's lazy dev bundling cannot
// serve for modules outside the project root — static imports sidestep that
// entirely (the data is part of the bundle either way).

import { events2021 } from '@/data/events/year-2021'
import { events2022 } from '@/data/events/year-2022'
import { events2023 } from '@/data/events/year-2023'
import { events2024 } from '@/data/events/year-2024'
import { events2025 } from '@/data/events/year-2025'
import { registerYearData } from '@/data/series-registry'

registerYearData(2021, events2021)
registerYearData(2022, events2022)
registerYearData(2023, events2023)
registerYearData(2024, events2024)
registerYearData(2025, events2025)
