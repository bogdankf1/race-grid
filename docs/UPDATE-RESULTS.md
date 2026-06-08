# Update Race Results

This runbook is executed manually via Claude Code. It finds sessions that finished since the last update and adds their official results.

> **Start in a worktree.** When running this by hand, kick off with `/new-session "update results"` first so all changes land in an isolated worktree (our default parallelized workflow — see CLAUDE.md). Then run `/update-results` inside it.

---

## Procedure

### 1. Identify finished sessions without results

Read `src/data/series-registry.ts` to get all series. For each series, scan events and find sessions where:
- Session type is `race`, `endurance`, `sprint`, `sprint_qualifying`, `qualifying`, `hyperpole`, or `stage`
- Session `startUtc + durationMinutes` is in the past (already finished)
- No result exists yet in `src/data/results/<series>-2026.ts`

**Important:** Results are needed for ALL these session types, not just races:
- **Qualifying** — pole position + top 3
- **Sprint Qualifying** (F1) — sprint pole + top 3
- **Hyperpole** (WEC) — pole + top 3
- **Sprint** (F1) — winner + podium
- **Race / Endurance** — winner + podium + class winners + fastest lap (F1)
- **Stage** (WRC) — overall rally winner + podium (only for the final stage session of each rally)

### 2. Search for results from official sources

For each finished session without a result, search **official sources first**:

| Series | Primary source |
|--------|---------------|
| F1 | formula1.com/en/results |
| F1 Academy | f1academy.com/Standings, f1academy.com/Racing/Schedule | Wikipedia "20XX F1 Academy season" |
| F2 | fiaformula2.com/Results |
| F3 | fiaformula3.com/Results |
| IndyCar | indycar.com/Results |
| Indy NXT | indynxt.com/Standings, indynxt.com/Schedule | Wikipedia "20XX Indy NXT season" |
| Moto2 | motogp.com/en/calendar/{year}/moto2 | Wikipedia "20XX Moto2 World Championship" |
| Moto3 | motogp.com/en/calendar/{year}/moto3 | Wikipedia "20XX Moto3 World Championship" |
| NASCAR | nascar.com/results |
| NASCAR Xfinity | nascar.com/standings/nascar-xfinity-series | Wikipedia "20XX NASCAR Xfinity Series" |
| NASCAR Craftsman Truck | nascar.com/standings/nascar-craftsman-truck-series | Wikipedia "20XX NASCAR Craftsman Truck Series" |
| Porsche Supercup | porsche.com motorsport / pitwall.app/series/porsche-mobil-1-supercup | Wikipedia "20XX Porsche Supercup" |
| WEC | fiawec.com/en/results |
| IMSA | imsa.com/results |
| IMSA Michelin Pilot Challenge | imsa.com/imsa-michelin-pilot-challenge/results | Wikipedia "20XX IMSA Michelin Pilot Challenge season" — multi-class (GS + TCR) |
| ELMS | europeanlemansseries.com results |
| MLMC | lemanscup.com results |
| IGTC | intercontinentalgtchallenge.com/results |
| WRC | wrc.com/en/results |
| Dakar | dakar.com/en/rankings |
| DTM | dtm.com/en/results |
| GTWC | gt-world-challenge-europe.com/results |
| GTWC America | gt-world-challenge-america.com/results |
| GTWC Asia | gt-world-challenge-asia.com/results |
| British GT | britishgt.com/results |
| GTWC Australia | gt-world-challenge-australia.com/results |
| NLS | nuerburgring-langstrecken-serie.de results page |
| Super GT | supergt.net/en/results |
| Super Formula | superformula.net/en/results |
| Supercars | supercars.com/results |
| MotoGP | motogp.com/en/results |
| Formula E | fiaformulae.com/en/results |
| 24H Series | 24hseries.com/race-results |
| FIA Rallycross (`wrx`) | fiaworldrallycross.com (2021–2025 World RX) / fia-rallycross.com (Euro RX from 2026) |
| Special Events (`special`) | N/A — calendar-only series (Goodwood, Pikes Peak, Le Mans Classic, etc.); no championship results to track |

Fallback: `WebSearch` for `"<event name> <year> official results"`

Extract: winner driver(s), winner team, podium (P1-P3), fastest lap (F1 only)
- For endurance races (WEC, IMSA, ELMS, MLMC, IGTC, NLS, 24H Series): find overall winner and class winners if available
- For WRC: find overall rally winner (driver + co-driver + team)
- For Dakar: find overall car category winner (driver + co-driver + team)
- For MotoGP: find race winner + podium (sprint and main race)
- For Formula E: find race winner + podium
- For qualifying/hyperpole: find pole position and top 3

### 3. Update result files

Add results to the appropriate file in `src/data/results/`:
- `f1-2026.ts`, `nascar-2026.ts`, `indycar-2026.ts`, etc.
- If a file doesn't exist for a series yet, create it following the pattern of existing files
- Import it in `src/data/results/index.ts`

Result data structure — each event can have multiple session type results:
```typescript
'<event-id>': {
  // Qualifying result (pole + top 3)
  qualifying: {
    overall: { drivers: ['PoleDriver'], team: 'Team Name' },
    classes: [{
      className: 'Top 3',
      podium: [
        { position: 1, drivers: ['PoleDriver'], team: '...' },
        { position: 2, drivers: ['P2'], team: '...' },
        { position: 3, drivers: ['P3'], team: '...' },
      ],
    }],
  },
  // Sprint qualifying (F1 sprint weekends only)
  sprint_qualifying: {
    overall: { drivers: ['SprintPoleDriver'], team: 'Team' },
    classes: [{ className: 'Top 3', podium: [...] }],
  },
  // Sprint race (F1 only)
  sprint: {
    overall: { drivers: ['SprintWinner'], team: 'Team' },
    classes: [{ className: 'Top 3', podium: [...] }],
  },
  // Main race / endurance
  race: {
    overall: { drivers: ['Winner1', 'Winner2'], team: 'Team Name' },
    classes: [{
      className: 'Overall' | 'Hypercar' | 'LMGT3' | 'GTP' | 'Classification',
      podium: [
        { position: 1, drivers: [...], team: '...' },
        { position: 2, drivers: [...], team: '...' },
        { position: 3, drivers: [...], team: '...' },
      ],
    }],
    fastestLap: 'DriverName',  // F1 only
  },
  // WRC overall rally result (keyed as 'stage')
  stage: {
    overall: { drivers: ['Driver', 'CoDriver'], team: 'Team' },
    classes: [{ className: 'Overall', podium: [...] }],
  },
},
```

### 4. Build and verify

```
npx next build
```

### 5. Commit changes

If any results were added, commit with message:
```
Update race results: <list of events updated>
```

---

## Important notes

- **Only add verified results.** If a result is provisional or under protest, note it but still add the official classification.
- **Event IDs must match** the IDs in the calendar data files exactly.
- **Session types must match** — use `race`, `endurance`, `sprint`, `sprint_qualifying`, `qualifying`, `hyperpole`, or `stage`.
- **Every finished session needs a result** — qualifying (pole + top 3), sprint qualifying (F1), sprints, races, endurance, and stages. Don't skip qualifying sessions.
- **Driver names:** Use the common English spelling (e.g., "Verstappen" not "Max Emilian Verstappen").
- **For F1 sprint weekends:** Add results for `sprint_qualifying`, `qualifying`, `sprint`, and `race` — all four session types.
- **For WRC:** Results go under the `stage` session type (the overall rally result, not individual stage results). Only one result per rally, keyed to the `stage` type — the dedup logic ensures it only shows once.
- **For endurance series with classes:** Include class results in the `classes` array. Use official class names (e.g., "Hypercar", "LMGT3", "LMP2", "GT3", "GT4", "GTP", "GTD Pro", "GTD", "Pro-Am", "Am", "Silver").
- **For multi-class series, fetch each class's result separately.** The applicable series are: **WEC** (Hypercar + LMGT3), **IMSA** (GTP + LMP2 + GTD Pro + GTD), **ELMS** (LMP2 + LMP3 + LMGT3), **MLMC** (LMP3 + GT3), **IGTC** (Pro + Silver + Am), **24H Series** (GT3 + GT4 + TCR), **GTWC Europe** (Pro + Gold + Silver + Bronze), **GTWC America / Asia / Australia** (Pro + Pro-Am + Am variants), **British GT** (GT3 + GT4), **Super GT** (GT500 + GT300). For each finished event, the official site usually publishes a per-class podium — populate one `classes` entry per class. Don't conflate them under "Overall" only.
- **For feeder series sharing a parent weekend** (Moto2/Moto3 on MotoGP weekends, NASCAR Xfinity/Truck on Cup weekends, Indy NXT on IndyCar weekends, F1 Academy and Porsche Supercup on F1 weekends): cross-reference the parent series' calendar file before WebSearching — the dates are already in the repo and only the per-series session times differ.
- **For qualifying:** Use `className: 'Top 3'` for the podium. The UI shows "Pole position" label for qualifying results automatically.
- **Cancelled events:** If a race/session was cancelled (e.g., weather), remove the session from the calendar data file rather than leaving it without a result.
