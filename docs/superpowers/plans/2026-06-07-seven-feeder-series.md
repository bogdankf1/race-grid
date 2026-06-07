# Seven Feeder Series (2026) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add seven new feeder/support series to Race Grid for 2026 only — Porsche Mobil 1 Supercup, F1 Academy, Moto2, Moto3, Indy NXT, NASCAR Xfinity, NASCAR Craftsman Truck — with full calendar, drivers, teams, entries, results, standings, broadcasts, registry, and logo.

**Architecture:** Each series follows the existing `docs/ADD-NEW-SERIES.md` runbook end-to-end. Five of the seven are "support series" whose calendars piggyback on an existing parent series (F1 / MotoGP / IndyCar / NASCAR Cup), so date verification is trivial — cross-reference the existing parent calendar file before WebSearching. Per-series tasks are independent at the file level (different `<series>-2026.ts` files) but converge on shared files (`drivers.ts`, `teams.ts`, `series-registry.ts`, `broadcasts.ts`, `circuits.ts`) — execute sequentially.

**Tech Stack:** Next.js 15 (App Router, static export), React 19, TypeScript, vitest. No new runtime dependencies.

**Data integrity rule (re-emphasized by user):** "All data should be accurate, absolutely clear, absolutely true. Nothing should be fictional." For each row added (calendar event, driver, team, entry, result, standings) — verify from at least one official source. If a 2026 round hasn't been raced yet, skip results; if a roster spot isn't publicly announced, skip the entry; if a broadcast deal isn't published for a country, leave it empty.

**Scope (in):**
- Seven new series, 2026 season only
- Each series: logo, registry, calendar, circuits (new ones), drivers, teams, entries, results (completed rounds), standings, broadcasts, docs updates
- Series filter group placement
- Runbook/skill updates referencing the new series

**Scope (out):**
- Historical years (2021–2025) — explicitly deferred per user authorization
- Multi-class on these series — none are multi-class
- UI changes — none required (auto-generated pages handle everything)

---

## File Structure

**Modify (shared files — sequential edits across all tasks):**
- `src/data/series-registry.ts` — 7 new SERIES_META entries + 7 new EVENTS_2026 keys + 7 imports + group placements
- `src/data/drivers.ts` — ~200 new driver IDs (rosters across all 7 series)
- `src/data/teams.ts` — ~50 new team IDs
- `src/data/circuits.ts` — possibly a few new venue circuits not yet in repo
- `src/data/broadcasts.ts` — 7 new series broadcast entries
- `src/data/entries/index.ts` — 7 new imports + 7 new ALL_ENTRIES keys
- `src/data/results/index.ts` — 7 new imports + 7 new spreads
- `src/data/standings/index.ts` — 7 new imports + 7 new ALL_STANDINGS keys
- `src/components/SeriesLogo.tsx` — 7 new LOGO_MAP entries

**Modify (docs/skills):**
- `docs/UPDATE-RESULTS.md` — sources table + per-series notes
- `docs/UPDATE-STANDINGS.md` — sources table + per-series notes
- `docs/VERIFY-SEASON-DATA.md` — verification checklist
- `docs/ADD-NEW-SERIES.md` — fix outdated reference to `SeriesFilterDropdown.tsx` (groups actually live in `series-registry.ts:SERIES_GROUPS`)
- `.claude/skills/update-results/SKILL.md` — series-list update
- `.claude/skills/update-standings/SKILL.md` — series-list update
- `CLAUDE.md` — series count + filter groups

**Create (per-series, 4 files each × 7 series = 28 new files):**
- `public/logos/<id>.svg`
- `src/data/<id>-2026.ts` — calendar
- `src/data/entries/<id>-2026.ts`
- `src/data/results/<id>-2026.ts`
- `src/data/standings/<id>-2026.ts`

---

## Series-specific reference table

This table is the **source of truth** for IDs, colors, groups, and calendar parents. Tasks 1–7 each reference one row. The implementer MUST verify color hex, calendar dates, and roster from official sources before committing — values here are starting hints.

| Series | ID | shortName | Color | textColor | Group | Calendar parent | Wikipedia slug |
|---|---|---|---|---|---|---|---|
| Porsche Mobil 1 Supercup | `porsche-supercup` | PSC | `#D5001C` | `#fff` | gt | `f1` (selected F1 weekends) | `Porsche_Supercup` |
| F1 Academy | `f1-academy` | F1A | `#FF6B9D` | `#fff` | openwheel | `f1` (selected F1 weekends) | `F1_Academy` |
| Moto2 | `moto2` | M2 | `#0066CC` | `#fff` | motorcycle | `motogp` (every MotoGP weekend) | `Moto2` |
| Moto3 | `moto3` | M3 | `#FF6900` | `#fff` | motorcycle | `motogp` (every MotoGP weekend) | `Moto3` |
| Indy NXT | `indy-nxt` | NXT | `#A6CE39` | `#000` | openwheel | `indycar` (~14 of 17 weekends) | `Indy_NXT` |
| NASCAR Xfinity | `nascar-xfinity` | XFIN | `#FFCD00` | `#000` | stock | `nascar` (~32 of 33 weekends) | `NASCAR_Xfinity_Series` |
| NASCAR Craftsman Truck | `nascar-truck` | TRUCK | `#0033A0` | `#fff` | stock | `nascar` (selected weekends) | `NASCAR_Craftsman_Truck_Series` |

**Source URLs to feed each implementer (verify before use):**
- Porsche Supercup: `porsche.com/international/motorsportandevents/motorsport/championships/supercup/`, `pitwall.app/series/porsche-mobil-1-supercup`, Wikipedia "2026 Porsche Supercup"
- F1 Academy: `f1academy.com/Standings`, `f1academy.com/Racing/Schedule`, Wikipedia "2026 F1 Academy season"
- Moto2: `motogp.com/en/calendar/2026/moto2`, `motogp.com/en/standings/2026/moto2`, Wikipedia "2026 Moto2 World Championship"
- Moto3: `motogp.com/en/calendar/2026/moto3`, `motogp.com/en/standings/2026/moto3`, Wikipedia "2026 Moto3 World Championship"
- Indy NXT: `indynxt.com/Schedule/2026`, `indynxt.com/Standings`, Wikipedia "2026 Indy NXT by Firestone season"
- NASCAR Xfinity: `nascar.com/standings/nascar-xfinity-series`, `nascar.com/schedule/xfinity-series/`, Wikipedia "2026 NASCAR Xfinity Series"
- NASCAR Truck: `nascar.com/standings/nascar-craftsman-truck-series`, Wikipedia "2026 NASCAR Craftsman Truck Series"

---

## Phase 1 — Docs and runbooks

### Task 0: Update runbooks and skills to reference the seven new series

**Goal:** Before implementers touch data, the runbook tables (UPDATE-RESULTS.md, UPDATE-STANDINGS.md, VERIFY-SEASON-DATA.md) and skill files must list the seven new series with their primary sources, so future maintenance flows (`/update-results`, `/update-standings`) can pick them up automatically. Also fix the outdated `SeriesFilterDropdown.tsx` reference in ADD-NEW-SERIES.md (groups actually live in `series-registry.ts:SERIES_GROUPS`).

**Files:**
- Modify: `docs/UPDATE-RESULTS.md` — add 7 rows to the sources table
- Modify: `docs/UPDATE-STANDINGS.md` — add 7 rows to the sources table; mark which have constructor/manufacturer standings (NASCAR Xfinity has Manufacturers; Truck has Manufacturers; Moto2/Moto3 have Constructors; F1 Academy has Teams; Porsche Supercup is one-make so no constructors)
- Modify: `docs/VERIFY-SEASON-DATA.md` — add 7 series to the verification checklist
- Modify: `docs/ADD-NEW-SERIES.md` — fix step 7 to point at `src/data/series-registry.ts:SERIES_GROUPS` (currently incorrectly says `src/components/SeriesFilterDropdown.tsx`)
- Modify: `.claude/skills/update-results/SKILL.md` — extend the "Multi-class series" line into a "Feeder series" line noting that Moto2/Moto3 share MotoGP weekends, Xfinity/Truck share NASCAR Cup weekends, Indy NXT shares IndyCar, F1 Academy + Porsche Supercup share F1
- Modify: `.claude/skills/update-standings/SKILL.md` — same feeder-series guidance
- Modify: `CLAUDE.md` — bump the series count from 27 to 34; add the 7 new IDs to the series-groups section

- [ ] **Step 1: Patch UPDATE-RESULTS.md sources table**

Open `docs/UPDATE-RESULTS.md`. Find the table that lists `| Series | Primary source |` (around line 28). Add these rows, alphabetized within their natural group:

```markdown
| F1 Academy | f1academy.com/Standings, f1academy.com/Racing/Schedule | Wikipedia "20XX F1 Academy season" |
| Porsche Supercup | porsche.com motorsport / pitwall.app/series/porsche-mobil-1-supercup | Wikipedia "20XX Porsche Supercup" |
| Moto2 | motogp.com/en/calendar/{year}/moto2 | Wikipedia "20XX Moto2 World Championship" |
| Moto3 | motogp.com/en/calendar/{year}/moto3 | Wikipedia "20XX Moto3 World Championship" |
| Indy NXT | indynxt.com/Standings, indynxt.com/Schedule | Wikipedia "20XX Indy NXT season" |
| NASCAR Xfinity | nascar.com/standings/nascar-xfinity-series | Wikipedia "20XX NASCAR Xfinity Series" |
| NASCAR Craftsman Truck | nascar.com/standings/nascar-craftsman-truck-series | Wikipedia "20XX NASCAR Craftsman Truck Series" |
```

Then, in the "Important notes" section, add this line after the existing "multi-class series" bullet:

```markdown
- **For feeder series sharing a parent weekend** (Moto2/Moto3 on MotoGP weekends, NASCAR Xfinity/Truck on Cup weekends, Indy NXT on IndyCar weekends, F1 Academy and Porsche Supercup on F1 weekends): cross-reference the parent series' calendar file before WebSearching — the dates are already in the repo and only the per-series session times differ.
```

- [ ] **Step 2: Patch UPDATE-STANDINGS.md sources table**

Open `docs/UPDATE-STANDINGS.md`. Add the seven rows to the sources table the same way as Step 1 (it has the same column shape).

In the "Series-specific notes" subsection labeled "Series WITH constructor/manufacturer standings", add: `**Moto2** — "Constructors" championship`, `**Moto3** — "Constructors" championship`, `**F1 Academy** — "Teams" championship`, `**NASCAR Xfinity** — "Manufacturers" championship`, `**NASCAR Truck** — "Manufacturers" championship`.

In "Series WITHOUT constructor standings", add `**Porsche Supercup** — One-make championship (Drivers only)`, `**Indy NXT** — Drivers only`.

Append a new section "Feeder series" after "Multi-class series":

```markdown
### Feeder series

Several series in the data layer are "feeders" whose calendars piggyback on a parent series. When updating standings:
- **Moto2**, **Moto3**: race every MotoGP weekend. Source: motogp.com/en/standings/{year}/moto2 (or moto3)
- **NASCAR Xfinity**: races ~32 of 33 NASCAR Cup weekends. Source: nascar.com/standings/nascar-xfinity-series
- **NASCAR Craftsman Truck**: races a subset of Cup weekends + standalone events. Source: nascar.com/standings/nascar-craftsman-truck-series
- **Indy NXT**: races ~14 of 17 IndyCar weekends. Source: indynxt.com/Standings
- **F1 Academy**: races at selected F1 weekends (~7 rounds). Source: f1academy.com/Standings
- **Porsche Supercup**: races at selected European F1 weekends (~7 rounds). Source: porsche.com motorsport / pitwall.app

When refreshing a parent series' standings, also check whether its feeders need a refresh.
```

- [ ] **Step 3: Patch VERIFY-SEASON-DATA.md**

Open `docs/VERIFY-SEASON-DATA.md`. Find the verification checklist (likely a numbered or bulleted list of series to check). Add seven items at the appropriate alphabetical or grouped position:

```markdown
- [ ] F1 Academy — verify calendar against f1academy.com/Racing/Schedule and Wikipedia
- [ ] Porsche Supercup — verify calendar against porsche.com motorsport
- [ ] Moto2 — verify calendar against motogp.com/en/calendar/{year}/moto2
- [ ] Moto3 — verify calendar against motogp.com/en/calendar/{year}/moto3
- [ ] Indy NXT — verify calendar against indynxt.com/Schedule
- [ ] NASCAR Xfinity — verify calendar against nascar.com/schedule/xfinity-series
- [ ] NASCAR Craftsman Truck — verify calendar against nascar.com/schedule/craftsman-truck-series
```

If VERIFY-SEASON-DATA.md uses a different structure (e.g., a table or per-series subsections), follow its existing style.

- [ ] **Step 4: Fix ADD-NEW-SERIES.md step 7**

Open `docs/ADD-NEW-SERIES.md`. Find step 7 ("Add to filter dropdown") that says "Edit `src/components/SeriesFilterDropdown.tsx`". Replace that line with:

```markdown
### 7. Add to filter group

Edit `src/data/series-registry.ts` — add the series ID to the appropriate group in the `SERIES_GROUPS` array (the runbook previously pointed at a separate component; the source of truth is now the registry):
```

Update the surrounding example code block to reference `SERIES_GROUPS` not `GROUPS`.

- [ ] **Step 5: Update `.claude/skills/update-results/SKILL.md`**

Open `.claude/skills/update-results/SKILL.md`. After the existing "Multi-class series" paragraph, add:

```markdown
**Feeder series** (Moto2, Moto3, NASCAR Xfinity, NASCAR Truck, Indy NXT, F1 Academy, Porsche Supercup): each rides at the same venues as a parent series already in the app. Before WebSearching, cross-reference the parent calendar file in `src/data/<parent>-2026.ts` to confirm round dates; only the per-feeder session times need to be fetched.
```

- [ ] **Step 6: Update `.claude/skills/update-standings/SKILL.md`**

Same pattern — add a "Feeder series" paragraph after the "Multi-class series" one, with the same content but adapted to standings (parent series' standings reflect Cup/MotoGP/IndyCar/F1 drivers; the feeder has its own driver pool).

- [ ] **Step 7: Update `CLAUDE.md`**

Open `CLAUDE.md`. Find the line "Race Grid is a motorsport calendar web app ... showing race schedules for 27 racing series" and change `27` to `34`.

Find the "Series groups (for filter dropdown)" section. Update each group with the new IDs:
- Open Wheel: add `F1 Academy`, `Indy NXT`
- GT / Touring: add `Porsche Supercup`
- Stock Car: add `NASCAR Xfinity`, `NASCAR Truck`
- Motorcycle: add `Moto2`, `Moto3` (rename group label from current single-series wording if needed)

Add the seven series to the existing "Series IDs" parenthetical lists where applicable.

- [ ] **Step 8: Verify**

```bash
npx tsc --noEmit
```

Expected: clean (no code touched in this task — only docs).

- [ ] **Step 9: Commit**

```bash
git add docs/UPDATE-RESULTS.md docs/UPDATE-STANDINGS.md docs/VERIFY-SEASON-DATA.md docs/ADD-NEW-SERIES.md .claude/skills/update-results/SKILL.md .claude/skills/update-standings/SKILL.md CLAUDE.md
git commit -m "Document seven new feeder series in runbooks and skills"
```

---

## Phase 2 — Per-series implementation

Each of Tasks 1–7 follows the same template, parameterized by the series. The implementer MUST follow `docs/ADD-NEW-SERIES.md` end-to-end for one series.

### Shared task template (referenced by Tasks 1–7)

For each per-series task, the subagent must:

1. **Read the runbook** at `docs/ADD-NEW-SERIES.md` for the full procedure.
2. **Cross-reference the parent calendar** (e.g., for Moto2 → `src/data/motogp-2026.ts`) to extract the round dates. The feeder runs at the same venues on the same weekend.
3. **Logo** — Create `public/logos/<id>.svg`. If no official SVG is easily extractable, use a tasteful styled-text SVG (the codebase already has examples like the existing series logos). Register in `src/components/SeriesLogo.tsx:LOGO_MAP`.
4. **Circuits** — Most venues already exist in `src/data/circuits.ts` (since the feeder shares circuits with the parent). If a new venue appears (e.g., a NASCAR Xfinity standalone round at a track not on the Cup calendar), add it.
5. **Drivers** — Add all confirmed full-season drivers to `src/data/drivers.ts` alphabetically. Use kebab-case IDs. Include only verified roster members; if a seat is TBA per the official source, skip it.
6. **Teams** — Same procedure for `src/data/teams.ts`.
7. **Calendar** — Create `src/data/<id>-2026.ts`. Each event:
   - `id`: `<series>-2026-<location-slug>`
   - `round`: sequential
   - `name`: official event name
   - `circuitId`: must match `circuits.ts`
   - `sessions`: session times in UTC, verified from official source. Session types: `race`, `qualifying`, `sprint`, `practice` per existing series.
8. **Series registry** — Add to `src/data/series-registry.ts`:
   - Import line at top
   - Entry in `SERIES_META`
   - Entry in `EVENTS_2026`
   - ID in the appropriate `SERIES_GROUPS` row (see the reference table at the top of this plan)
9. **Broadcasts** — Add an entry to `src/data/broadcasts.ts`. Use WebSearch to find broadcast partners per country (US, UA, GB, DE, PL, AU, BR, JP, CO). Empty array `[]` if no broadcaster is publicly known.
10. **Entries** — Create `src/data/entries/<id>-2026.ts`. Register in `src/data/entries/index.ts`.
11. **Results** — Create `src/data/results/<id>-2026.ts`. Populate with verified results for completed 2026 rounds (today is 2026-06-07; most series have 3-10+ completed rounds). Register in `src/data/results/index.ts`.
12. **Standings** — Create `src/data/standings/<id>-2026.ts`. Populate top-10 drivers (and top-N teams/constructors if applicable). Register in `src/data/standings/index.ts`.
13. **Verify** — `npx tsc --noEmit && npx vitest run && npx next build`. All must pass.
14. **Commit** — One commit per series, message: `Add <Series Name> 2026 with calendar, roster, results, and standings`.

**Data integrity rules (re-stated, MUST follow):**
- All session times in UTC. Convert carefully from local times.
- Never fabricate. If a row can't be verified, skip and note in a comment.
- Driver/team IDs are lowercase kebab-case (`olli-caldwell`, `prema-racing`).
- Reuse existing driver/team IDs where possible (NASCAR drivers and Moto2/Moto3 graduates often already exist in the data layer from the parent series).

---

### Task 1: Porsche Mobil 1 Supercup 2026

**Files (per shared template):**
- Create: `public/logos/porsche-supercup.svg`
- Create: `src/data/porsche-supercup-2026.ts`
- Create: `src/data/entries/porsche-supercup-2026.ts`
- Create: `src/data/results/porsche-supercup-2026.ts`
- Create: `src/data/standings/porsche-supercup-2026.ts`
- Modify: `src/data/drivers.ts`, `src/data/teams.ts`, `src/data/circuits.ts` (if needed), `src/data/series-registry.ts`, `src/data/broadcasts.ts`, `src/components/SeriesLogo.tsx`, `src/data/entries/index.ts`, `src/data/results/index.ts`, `src/data/standings/index.ts`

**Series-specific parameters:**
- ID: `porsche-supercup`
- shortName: `PSC`
- color: `#D5001C` (verify against official 2026 brand asset)
- textColor: `#fff`
- group: `gt`
- Wikipedia slug: `Porsche_Supercup`
- Calendar parent: F1 (selected European F1 weekends — typically Monaco, Spain, Austria, Hungary, Belgium, Netherlands, Italy)
- Sources: `porsche.com/international/motorsportandevents/motorsport/championships/supercup/`, `pitwall.app/series/porsche-mobil-1-supercup`, Wikipedia "2026 Porsche Supercup"

**Constructors:** none — one-make championship. `constructors: []` in standings.

**Implementer additional guidance:**
- Single race per F1 weekend (Sunday morning, before F1 race). Typical session set: Free Practice (Friday), Qualifying (Saturday), Race (Sunday).
- ~7-8 rounds per season. Verify the 2026 calendar against Porsche official.
- Drivers field is ~32 cars. Capture full-season entrants only.
- Cross-reference: `src/data/f1-2026.ts` for circuit IDs at Monaco, Spain (Catalunya), Austria (Red Bull Ring), Hungary (Hungaroring), Belgium (Spa), Netherlands (Zandvoort), Italy (Monza).

- [ ] **Step 1: Run the shared template** above for Porsche Supercup 2026.
- [ ] **Step 2: Commit** with message `Add Porsche Supercup 2026 with calendar, roster, results, and standings`.

---

### Task 2: F1 Academy 2026

**Series-specific parameters:**
- ID: `f1-academy`
- shortName: `F1A`
- color: `#FF6B9D` (verify against official 2026 brand — F1 Academy uses pink as a primary accent)
- textColor: `#fff`
- group: `openwheel`
- Wikipedia slug: `F1_Academy`
- Calendar parent: F1 (subset of F1 weekends — typically Jeddah, Miami, Montreal, Zandvoort, Singapore, Las Vegas, Qatar in recent years)
- Sources: `f1academy.com/Racing/Schedule`, `f1academy.com/Standings`, Wikipedia "2026 F1 Academy season"

**Constructors:** Yes — "Teams" championship exists. Include in standings.

**Implementer additional guidance:**
- ~7 rounds per season, each with 2 races (Race 1 + Race 2). Typical session set: Free Practice (Friday), Qualifying (Friday/Saturday), Race 1 (Saturday), Race 2 (Sunday).
- ~15-20 confirmed drivers (5 teams × 3 cars + wild-card seats).
- Many drivers may already exist in `drivers.ts` from feeder coverage in earlier years — check before adding.
- Cross-reference `src/data/f1-2026.ts` for circuit IDs (Jeddah Corniche Circuit, Miami International Autodrome, etc.).
- Teams are F1 partners: Aston Martin, Mercedes, McLaren, Williams, Ferrari, Red Bull, Alpine, Audi, etc. — verify the 2026 team-driver pairings from official F1 Academy site.

- [ ] **Step 1: Run the shared template** for F1 Academy 2026.
- [ ] **Step 2: Commit** with message `Add F1 Academy 2026 with calendar, roster, results, and standings`.

---

### Task 3: Moto2 2026

**Series-specific parameters:**
- ID: `moto2`
- shortName: `M2`
- color: `#0066CC`
- textColor: `#fff`
- group: `motorcycle`
- Wikipedia slug: `Moto2`
- Calendar parent: MotoGP (every MotoGP weekend — ~22 rounds in 2026)
- Sources: `motogp.com/en/calendar/2026/moto2`, `motogp.com/en/standings/2026/moto2`, Wikipedia "2026 Moto2 World Championship"

**Constructors:** Yes — "Constructors" championship (Boscoscuro, Forward, Kalex). Include in standings.

**Implementer additional guidance:**
- Single race per weekend (no sprints in Moto2). Typical sessions: FP1 (Friday morning), Practice (Friday afternoon), Q1+Q2 (Saturday), Warm-up (Sunday), Race (Sunday — mid-day local).
- Cross-reference `src/data/motogp-2026.ts` for round dates and circuit IDs.
- Riders: ~30 full-season + occasional wild-cards. Capture full-season only.
- Teams: ~14 teams typical. Many will already be partial entries in `teams.ts` if they also field MotoGP riders (rare but check).
- Note: Moto2 uses a spec-Triumph engine — the "Constructors" championship in this context is about chassis manufacturers (Boscoscuro, Forward, Kalex), not engine.

- [ ] **Step 1: Run the shared template** for Moto2 2026.
- [ ] **Step 2: Commit** with message `Add Moto2 2026 with calendar, roster, results, and standings`.

---

### Task 4: Moto3 2026

**Series-specific parameters:**
- ID: `moto3`
- shortName: `M3`
- color: `#FF6900`
- textColor: `#fff`
- group: `motorcycle`
- Wikipedia slug: `Moto3`
- Calendar parent: MotoGP (every MotoGP weekend)
- Sources: `motogp.com/en/calendar/2026/moto3`, `motogp.com/en/standings/2026/moto3`, Wikipedia "2026 Moto3 World Championship"

**Constructors:** Yes — "Constructors" championship (KTM, Honda, GASGAS, Husqvarna, CFMOTO).

**Implementer additional guidance:**
- Same structure as Moto2. Single race per weekend. Sessions earlier in the day than Moto2.
- ~30 riders, ~12-14 teams.
- Cross-reference `src/data/motogp-2026.ts` for dates and circuits.

- [ ] **Step 1: Run the shared template** for Moto3 2026.
- [ ] **Step 2: Commit** with message `Add Moto3 2026 with calendar, roster, results, and standings`.

---

### Task 5: Indy NXT 2026

**Series-specific parameters:**
- ID: `indy-nxt`
- shortName: `NXT`
- color: `#A6CE39`
- textColor: `#000`
- group: `openwheel`
- Wikipedia slug: `Indy_NXT`
- Calendar parent: IndyCar (~14 of 17 IndyCar weekends)
- Sources: `indynxt.com/Schedule/2026`, `indynxt.com/Standings`, Wikipedia "2026 Indy NXT by Firestone season"

**Constructors:** No — series uses spec Dallara chassis. `constructors: []` in standings.

**Implementer additional guidance:**
- Most rounds support an IndyCar weekend. Typical session set: Practice (Thursday/Friday), Qualifying (Friday/Saturday), Race (Saturday or Sunday). The Indy NXT race is typically run before the IndyCar race.
- ~15 full-season drivers, ~6-8 teams.
- Cross-reference `src/data/indycar-2026.ts` for dates and circuit IDs.
- Notable 2026 drivers likely include: Lochie Hughes, Caio Collet, Salvador de Alba, Jamie Chadwick.

- [ ] **Step 1: Run the shared template** for Indy NXT 2026.
- [ ] **Step 2: Commit** with message `Add Indy NXT 2026 with calendar, roster, results, and standings`.

---

### Task 6: NASCAR Xfinity Series 2026

**Series-specific parameters:**
- ID: `nascar-xfinity`
- shortName: `XFIN`
- color: `#FFCD00`
- textColor: `#000`
- group: `stock`
- Wikipedia slug: `NASCAR_Xfinity_Series`
- Calendar parent: NASCAR Cup (~32 of 33 Cup weekends)
- Sources: `nascar.com/schedule/xfinity-series/`, `nascar.com/standings/nascar-xfinity-series`, Wikipedia "2026 NASCAR Xfinity Series"

**Constructors:** Yes — "Manufacturers" championship (Chevrolet, Ford, Toyota).

**Implementer additional guidance:**
- Saturday race at almost every Cup weekend. Sessions: Practice (varies), Qualifying (Friday or Saturday), Race (Saturday).
- ~33 races. Cross-reference `src/data/nascar-2026.ts` for dates and circuit IDs.
- Many Cup drivers run select Xfinity races as guests — capture only full-season regulars in the entries file.
- ~30-40 full-season drivers, ~30+ teams.

- [ ] **Step 1: Run the shared template** for NASCAR Xfinity 2026.
- [ ] **Step 2: Commit** with message `Add NASCAR Xfinity 2026 with calendar, roster, results, and standings`.

---

### Task 7: NASCAR Craftsman Truck Series 2026

**Series-specific parameters:**
- ID: `nascar-truck`
- shortName: `TRUCK`
- color: `#0033A0`
- textColor: `#fff`
- group: `stock`
- Wikipedia slug: `NASCAR_Craftsman_Truck_Series`
- Calendar parent: NASCAR Cup (subset, ~18 of 23 rounds piggyback Cup; rest are standalone)
- Sources: `nascar.com/schedule/craftsman-truck-series`, `nascar.com/standings/nascar-craftsman-truck-series`, Wikipedia "2026 NASCAR Craftsman Truck Series"

**Constructors:** Yes — "Manufacturers" championship (Chevrolet, Ford, Toyota; sometimes RAM enters).

**Implementer additional guidance:**
- ~23 races. Some are standalone (e.g., Eldora dirt race, IRP Truck Race). Cross-reference `src/data/nascar-2026.ts` for shared Cup weekends, but verify any standalone events from official NASCAR Truck schedule.
- ~30-40 full-season drivers, ~25 teams.
- May share circuits with Cup; add any standalone-only circuits if missing.

- [ ] **Step 1: Run the shared template** for NASCAR Truck 2026.
- [ ] **Step 2: Commit** with message `Add NASCAR Craftsman Truck 2026 with calendar, roster, results, and standings`.

---

## Phase 3 — Integration and verification

### Task 8: Final integration

- [ ] **Step 1: Run the full test suite**

```bash
npx vitest run
```

Expected: all tests pass (the existing 43 tests cover the data layer generically and should continue passing).

- [ ] **Step 2: Type-check**

```bash
npx tsc --noEmit
```

Expected: clean.

- [ ] **Step 3: Build**

```bash
npx next build
```

Expected: build succeeds. Output should now show ~34 series in the static export (up from 27).

- [ ] **Step 4: Spot-check series count**

```bash
grep -c "id: '" src/data/series-registry.ts
```

Expected: 34 entries in SERIES_META (27 existing + 7 new).

- [ ] **Step 5: Verify driver/team count sanity**

```bash
grep -c "^  '" src/data/drivers.ts
grep -c "^  '" src/data/teams.ts
```

Record the new totals in the commit message. Note: many feeder-series drivers/teams may have already existed (NASCAR cross-overs, MotoGP graduates), so the added count is likely 150-200 drivers and 40-60 teams, not the maximum.

- [ ] **Step 6: Spot-check filter groups**

```bash
grep -A 12 "SERIES_GROUPS" src/data/series-registry.ts
```

Confirm:
- `openwheel` includes `f1-academy` and `indy-nxt`
- `gt` includes `porsche-supercup`
- `stock` includes `nascar-xfinity` and `nascar-truck`
- `motorcycle` includes `moto2` and `moto3`

- [ ] **Step 7: Commit summary if any final touches**

If any small cleanup commits were needed during integration (e.g., a missed import), commit them with message: `Final integration touches for seven feeder series`.

- [ ] **Step 8: Push the branch**

```bash
git push origin feat/multi-class-standings
```

The branch already exists on origin; this updates it. The PR (or future PR) will now show the combined multi-class work + seven feeder series.

If the user wants the feeder work on a separate branch, that's a different decision — wait for their instruction before pushing to a new branch.

---

## Self-Review

**1. Spec coverage check (against the user's stated scope):**

- "Update all MD files to reflect that we need to support these series" — Task 0 covers docs/UPDATE-RESULTS.md, docs/UPDATE-STANDINGS.md, docs/VERIFY-SEASON-DATA.md, docs/ADD-NEW-SERIES.md, CLAUDE.md, and both `.claude/skills/*` ✓
- "Implement all the work related to 2026" for all 7 series — Tasks 1-7 cover each series end-to-end per `docs/ADD-NEW-SERIES.md` ✓
- "2021-2025 backfill is authorized to be planned later" — out of scope, explicitly noted ✓
- "All data accurate, no fabrication" — re-emphasized in the data-integrity rule at the top and in the shared template ✓
- "Follow existing patterns" — shared template references `docs/ADD-NEW-SERIES.md` directly ✓
- "Use subagents, use superpowers" — execution will use subagent-driven-development; final task references push ✓

**2. Placeholder scan:**

The reference table at the top intentionally calls some hex colors "verify against official 2026 brand asset" — that's a verification instruction, not a TODO. The series-specific parameter sections give exact starting values. The "Notable 2026 drivers likely include" line in Indy NXT is a hint, not a roster; the implementer must verify the full grid.

No "TBD" / "TODO" / "implement later" markers. No "see Task N" without inline code. No undefined types or functions referenced.

**3. Type consistency:**

Filenames, field names, and IDs are consistent across tasks. Series IDs use the same form everywhere: `porsche-supercup`, `f1-academy`, `moto2`, `moto3`, `indy-nxt`, `nascar-xfinity`, `nascar-truck`. The shared template centralizes the procedure so per-task drift is minimal.

**4. Critical sanity check:**

This is a lot of work — 7 series × full ADD-NEW-SERIES.md procedure each. Each per-series task is large (one subagent doing 30-60 minutes of multi-file work). Risk mitigations baked into the plan:
- Calendar dates are cheap (piggyback parent series — no original date verification needed)
- Most circuits already exist
- Many drivers/teams already exist (NASCAR Cup drivers overlap heavily with Xfinity/Truck)
- Per-series commits keep history reviewable
- Shared template is short — each per-series task has thin custom scope

If a subagent reports BLOCKED or DONE_WITH_CONCERNS for a specific series, that single task can be re-dispatched without affecting the others.
