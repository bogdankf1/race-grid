# Entries Audit: 2021-2025

Generated: 2026-04-23

All 24 series have calendar/event data for 2021-2025 (except GTWC Asia which starts 2022). Entry files, however, are heavily incomplete. This document catalogs every gap.

---

## Coverage Matrix

Shows driver count per file. **---** = no file exists.

| Series | 2021 | 2022 | 2023 | 2024 | 2025 | Status |
|--------|------|------|------|------|------|--------|
| F1 | --- | 21 | 22 | 23 | 12 | 2025 incomplete (missing 8 drivers) |
| F2 | --- | --- | --- | --- | 10 | 2025 heavily incomplete (missing 12) |
| F3 | --- | --- | --- | --- | 30 | 2025 complete |
| Formula E | --- | --- | --- | --- | 22 | 2025 complete |
| MotoGP | --- | --- | --- | --- | 18 | 2025 incomplete (missing 4) |
| IndyCar | --- | --- | --- | --- | 18 | 2025 incomplete (missing ~9) |
| NASCAR | --- | --- | --- | --- | 29 | 2025 incomplete (missing ~7) |
| WEC | --- | --- | --- | --- | 79 | 2025 incomplete (missing ~20-30) |
| ELMS | --- | --- | --- | --- | 22 | 2025 heavily incomplete (missing ~23) |
| IMSA | --- | --- | --- | --- | 43 | 2025 incomplete (missing ~12) |
| WRC | --- | --- | --- | --- | 16 | 2025 acceptable (Rally1 focus) |
| DTM | --- | --- | --- | --- | 13 | 2025 incomplete (missing ~7) |
| GTWC Europe | --- | --- | --- | --- | 31 | 2025 incomplete (Pro only, missing ~24) |
| IGTC | --- | --- | --- | --- | 20 | 2025 incomplete (missing ~10) |
| NLS | --- | --- | --- | --- | 23 | 2025 incomplete (missing ~7-10) |
| Super GT | --- | --- | --- | --- | 23 | 2025 incomplete (GT500 only, missing ~5) |
| Super Formula | --- | --- | --- | --- | 8 | 2025 heavily incomplete (missing 14) |
| Supercars | --- | --- | --- | --- | 15 | 2025 incomplete (missing ~9) |
| Dakar | --- | --- | --- | --- | 18 | 2025 acceptable (podium focus) |
| MLMC | --- | --- | --- | --- | --- | No files for any year |
| GTWC America | --- | --- | --- | --- | --- | No files for any year |
| GTWC Asia | N/A | --- | --- | --- | --- | No files for any year (series starts 2022) |
| British GT | --- | --- | --- | --- | --- | No files for any year |
| GTWC Australia | --- | --- | --- | --- | --- | No files for any year |

---

## Summary Statistics

- **Total possible slots:** 119 (24 series x 5 years, minus GTWC Asia 2021)
- **Files that exist:** 22
- **Files missing:** 97
- **Coverage:** 18.5%

### By year

| Year | Files | Missing |
|------|-------|---------|
| 2021 | 0 / 24 | ALL series |
| 2022 | 1 / 24 | All except F1 |
| 2023 | 1 / 24 | All except F1 |
| 2024 | 1 / 24 | All except F1 |
| 2025 | 19 / 24 | MLMC, GTWC America, GTWC Asia, British GT, GTWC Australia |

---

## Part 1: Existing Files — Completeness Audit

### Complete / Acceptable

| File | Drivers | Expected | Verdict |
|------|---------|----------|---------|
| f1-2022.ts | 21 | 22 | Near-complete (20 regulars + Hulkenberg sub) |
| f1-2023.ts | 22 | 22 | Complete (includes mid-season replacements) |
| f1-2024.ts | 23 | 23 | Complete (includes Colapinto, Bearman subs) |
| f3-2025.ts | 30 | 30 | Complete |
| fe-2025.ts | 22 | 22 | Complete |
| wrc-2025.ts | 16 | ~16-18 | Acceptable (Rally1 focus) |
| dakar-2025.ts | 18 | varies | Acceptable (podium/top finishers convention) |

### Incomplete (need more drivers added)

| File | Drivers | Expected | Missing |
|------|---------|----------|---------|
| f1-2025.ts | 12 | 20 | Aston Martin (Alonso, Stroll), Alpine (Gasly, Doohan), Haas (Ocon, Bearman), Tsunoda (RB), Bortoleto (Sauber) |
| f2-2025.ts | 10 | 22 | ~12 drivers missing across teams |
| motogp-2025.ts | 18 | 22 | ~4 riders missing |
| indycar-2025.ts | 18 | ~27 | ~9 full-time entries missing |
| nascar-2025.ts | 29 | ~36 | ~7 drivers missing |
| wec-2025.ts | 79 | ~100+ | ~20-30 LMGT3 / partial crews missing |
| imsa-2025.ts | 43 | ~55+ | ~12+ GTD class entries missing |
| elms-2025.ts | 22 | ~45+ | ~23 entries missing (only ~50% of grid) |
| dtm-2025.ts | 13 | ~20 | ~7 drivers from full grid missing |
| gtwc-2025.ts | 31 | ~55+ | ~24 entries missing (Pro class only) |
| igtc-2025.ts | 20 | ~30+ | ~10+ cross-event entries missing |
| nls-2025.ts | 23 | ~30+ | ~7-10 SP9 entries missing |
| supergt-2025.ts | 23 | ~28 | ~5 GT500 drivers missing |
| superformula-2025.ts | 8 | ~22 | 14 drivers missing (~64% of grid) |
| supercars-2025.ts | 15 | ~24 | ~9 full-time drivers missing |

---

## Part 2: Missing Files — Full Breakdown

### 2021 (0 files exist, 24 needed)

Every series needs a 2021 entry file:
- F1, F2, F3, Formula E, MotoGP
- IndyCar, NASCAR
- WEC, ELMS, IMSA, MLMC
- WRC, Dakar
- DTM, GTWC Europe, IGTC, NLS, British GT
- Super GT, Super Formula, Supercars
- GTWC America, GTWC Australia

### 2022 (1 file exists, 23 needed)

Only F1 exists. Missing:
- F2, F3, Formula E, MotoGP
- IndyCar, NASCAR
- WEC, ELMS, IMSA, MLMC
- WRC, Dakar
- DTM, GTWC Europe, IGTC, NLS, British GT
- Super GT, Super Formula, Supercars
- GTWC America, GTWC Asia, GTWC Australia

### 2023 (1 file exists, 23 needed)

Only F1 exists. Same list as 2022.

### 2024 (1 file exists, 23 needed)

Only F1 exists. Same list as 2022.

### 2025 (19 files exist, 5 missing)

Missing entry files:
- MLMC (Michelin Le Mans Cup)
- GTWC America (GT World Challenge America)
- GTWC Asia (GT World Challenge Asia)
- British GT (British GT Championship)
- GTWC Australia (GT World Challenge Australia)

---

## Part 3: Priority Recommendations

### Priority 1 — Fix incomplete 2025 files
These exist but are heavily incomplete:
1. **F1 2025** — only 12/20 drivers (easy fix, well-known grid)
2. **Super Formula 2025** — only 8/22 drivers
3. **F2 2025** — only 10/22 drivers
4. **ELMS 2025** — only 22/~45 drivers

### Priority 2 — Create missing 2025 files
5 series have no 2025 entries at all:
- MLMC, GTWC America, GTWC Asia, British GT, GTWC Australia

### Priority 3 — Fill 2024 entries
Only F1 has 2024 entries. The other 23 series need 2024 files.
Suggested order: F2, F3, FE, MotoGP, IndyCar, NASCAR (most popular/accessible first)

### Priority 4 — Fill 2023 entries
Same as 2024 — only F1 exists.

### Priority 5 — Fill 2022 entries
Same as 2024 — only F1 exists.

### Priority 6 — Fill 2021 entries
No entries exist for any series. Lowest priority since it's the oldest year.

---

## Estimated Work

| Task | Files to create/fix | Est. drivers to add |
|------|-------------------|-------------------|
| Fix incomplete 2025 | 15 files | ~200 drivers |
| Create missing 2025 | 5 files | ~200 drivers |
| Create all 2024 | 23 files | ~600 drivers |
| Create all 2023 | 23 files | ~600 drivers |
| Create all 2022 | 23 files | ~600 drivers |
| Create all 2021 | 24 files | ~600 drivers |
| **Total** | **113 files** | **~2,800 drivers** |
