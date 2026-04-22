# Verify & Update Season Data

This runbook re-checks **all racing series calendar data** in Race Grid against official sources and fixes any discrepancies. Run it whenever a real-world event may have affected the racing calendar (cancellations, date changes, new rounds added, geopolitical events, etc.).

---

## When to run

- A race or rally is **canceled, postponed, or rescheduled**
- A new round is **added** to a championship mid-season
- **Geopolitical events** affect a host country (war, sanctions, natural disaster)
- A circuit is **renamed** or a sponsor title changes
- At least once per month during the active season (March–December)
- Whenever a user reports incorrect data

---

## Step-by-step procedure

### 1. Identify all series to check

Read `src/data/series-registry.ts` to get the full list of active series. As of 2026 these are:

| ID | Series | Data file | Official source |
|----|--------|-----------|-----------------|
| `f1` | Formula 1 | `f1-2026.ts` | https://f1calendar.com/ or https://www.formula1.com/en/racing/2026 |
| `indycar` | IndyCar | `indycar-2026.ts` | https://www.indycar.com/Schedule |
| `nascar` | NASCAR Cup | `nascar-2026.ts` | https://www.nascar.com/nascar-cup-series/2026/schedule/ |
| `wec` | WEC | `wec-2026.ts` | https://www.fiawec.com/ or https://racingcalendar.net/championship/wec/2026 |
| `imsa` | IMSA | `imsa-2026.ts` | https://www.imsa.com/weathertech/weathertech-2026-schedule/ |
| `wrc` | WRC | `wrc-2026.ts` | https://www.wrc.com/en/calendar |
| `dtm` | DTM | `dtm-2026.ts` | https://www.motorsport.com/dtm/schedule/2026/ |
| `gtwc` | GTWC Europe | `gtwc-2026.ts` | https://www.gt-world-challenge-europe.com/calendar |
| `nls` | NLS | `nls-2026.ts` | https://www.nuerburgring-langstrecken-serie.de/language/en/calendar-nurburgring-langstrecken-serie-2026/ |
| `supergt` | Super GT | `supergt-2026.ts` | https://supergt.net/en/calendar or https://racingcalendar.net/championship/super-gt/2026 |
| `elms` | ELMS | `elms-2026.ts` | https://www.europeanlemansseries.com/season |
| `igtc` | IGTC | `igtc-2026.ts` | https://www.intercontinentalgtchallenge.com/calendar |
| `superformula` | Super Formula | `superformula-2026.ts` | https://racingcalendar.net/championship/super-formula/2026 |
| `supercars` | Supercars | `supercars-2026.ts` | https://www.supercars.com/2026/supercars-calendar |
| `mlmc` | Michelin Le Mans Cup | `mlmc-2026.ts` | https://www.lemanscup.com/en/season/2026 |
| `gtwcam` | GTWC America | `gtwcam-2026.ts` | https://www.gt-world-challenge-america.com/calendar |
| `gtwcasia` | GTWC Asia | `gtwcasia-2026.ts` | https://www.gt-world-challenge-asia.com/calendar |
| `britgt` | British GT | `britgt-2026.ts` | https://www.britishgt.com/calendar |
| `gtwcau` | GTWC Australia | `gtwcau-2026.ts` | https://www.gt-world-challenge-australia.com/calendar |

### 2. For EACH series, do the following

#### a) Fetch the official calendar
Use `WebSearch` and/or `WebFetch` against the official source URL listed above. Extract:
- All round numbers
- Exact event dates (practice through race)
- Circuit/venue names
- Event/race names

#### b) Read our data file
Read the corresponding `src/data/<series>-2026.ts` file.

#### c) Compare every entry
For each round, verify:
- **Race date** matches (accounting for UTC conversion — European events are UTC+1/+2, Japan UTC+9, Australia UTC+10/+11, US varies)
- **Circuit name** matches what we have in `src/data/circuits.ts`
- **Event name** is correct (sponsor names change — update if the official name has changed)
- **Round number** and **ordering** is correct
- **No missing rounds** — count the entries vs the official calendar
- **No extra rounds** — check for races that were canceled and should be removed

#### d) Fix discrepancies
If anything is wrong:
1. Edit the data file (`src/data/<series>-2026.ts`) with corrected dates/names
2. If a circuit was renamed or is new, update `src/data/circuits.ts`
3. If broadcast info changed, update `src/data/broadcasts.ts`

### 3. Check circuit data

Read `src/data/circuits.ts` and verify:
- Every circuit referenced by the calendar files has an entry
- No stale entries reference renamed circuits (search the calendar files for each circuit name)

### 4. Check broadcast data

Read `src/data/broadcasts.ts` and verify:
- Every series ID in the registry has broadcast entries for both `US` and `UA`
- URLs are still valid (quick spot-check — don't need to fetch every one)
- If broadcast deals have changed (new provider, dropped provider), update accordingly

### 5. Build and verify

After all changes:
```
npx next build
```
Ensure zero errors. The build will fail if there are TypeScript issues or broken imports.

### 6. Report

After completing the audit, provide a summary table:

```
| Series | Status | Changes made |
|--------|--------|-------------|
| F1     | OK / Fixed | description |
| ...    | ...    | ...         |
```

---

## Important notes

- **Never guess dates.** If you cannot find a confirmed date from an official source, note it as "TBC" in a code comment and inform the user.
- **UTC conversion matters.** A race at 3:00 PM local in Japan (UTC+9) is 06:00 UTC. A race at 2:30 PM ET (UTC-4 in summer) is 18:30 UTC. Double-check timezone math.
- **Session times are approximate.** We do not need exact-to-the-minute session start times for practice/qualifying. Race start times should be as accurate as possible.
- **Canceled races:** Remove the entry entirely rather than leaving it with a "canceled" flag (the app has no UI for canceled events).
- **Mid-season additions:** If a new round is added, insert it in the correct chronological position and adjust round numbers.
