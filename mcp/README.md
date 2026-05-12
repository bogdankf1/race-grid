# Race Grid MCP

A public **Model Context Protocol** server for motorsport. Connect any MCP-aware AI client — Claude Desktop, Cursor, Windsurf, Claude Code, the OpenAI Responses API — and your assistant can answer:

- *"When is the next F1 race in my timezone?"*
- *"Who won the 2024 24 Hours of Le Mans, overall and per class?"*
- *"List every IMSA round at Daytona since 2021."*
- *"What's the IndyCar driver standings right now?"*
- *"Give me every May 2026 race weekend across all series."*

Backed by the same data that powers [race-grid.app](https://race-grid.app) — 27 racing series, 2021–2026 seasons, 90+ circuits, full session-level UTC timestamps.

---

## Connect

The server speaks two transports. Pick whichever your client supports.

| Transport | Endpoint |
|---|---|
| Streamable HTTP | `https://race-grid-mcp.vercel.app/mcp` |
| Server-Sent Events (SSE) | `https://race-grid-mcp.vercel.app/sse` |

Live at [`race-grid-mcp.vercel.app`](https://race-grid-mcp.vercel.app).

### Claude Desktop

Edit `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows):

```json
{
  "mcpServers": {
    "race-grid": {
      "url": "https://race-grid-mcp.vercel.app/mcp"
    }
  }
}
```

Restart Claude Desktop. The tools appear in the slash-command palette.

### Cursor

`Cursor → Settings → MCP → Add new MCP server`:

- **Name:** `race-grid`
- **Transport:** `Streamable HTTP`
- **URL:** `https://race-grid-mcp.vercel.app/mcp`

### Claude Code

Add to `.claude/settings.json` in any project:

```json
{
  "mcpServers": {
    "race-grid": {
      "url": "https://race-grid-mcp.vercel.app/mcp"
    }
  }
}
```

### Local stdio (development)

For local iteration or air-gapped use:

```bash
git clone https://github.com/<you>/race-grid.git
cd race-grid/mcp
npm install
npm run stdio
```

Then point any stdio MCP client at `npx tsx <abs-path>/mcp/src/stdio.ts`.

---

## Tools

All seven tools return JSON in `content[0].text`. Pass JSON parameters in tool-call args.

### `list_series`
List all 27 racing series and the years available. Call this first to discover valid `series_id` values.

No arguments.

### `get_calendar`
Full race calendar for one series and one season.

| Argument | Type | Notes |
|---|---|---|
| `series_id` | string | e.g. `"f1"`, `"wec"`, `"nascar"` |
| `year` | number | 2021–2026 |

### `get_next_race`
The next upcoming race relative to now.

| Argument | Type | Notes |
|---|---|---|
| `series_id` | string? | Omit to search across all series |
| `timezone` | string? | IANA tz (e.g. `"Europe/Kyiv"`) — returns localized race-start time |

### `get_race_results`
Race results — overall podium, class podiums (endurance), fastest lap.

| Argument | Type | Notes |
|---|---|---|
| `series_id` | string | |
| `year` | number | |
| `event_id` | string? | Omit for full-season results |

### `get_standings`
Driver and constructor championship tables.

| Argument | Type | Notes |
|---|---|---|
| `series_id` | string | NLS has no consolidated table |
| `year` | number | |

### `get_circuit`
Circuit metadata — length, turn count, layout type.

| Argument | Type | Notes |
|---|---|---|
| `circuit_id` | string | e.g. `"circuit-de-monaco"` (find ids via `get_calendar`) |

### `search_races`
Find races in a date window with optional filters.

| Argument | Type | Notes |
|---|---|---|
| `from_date` | string | ISO date or datetime |
| `to_date` | string | ISO date or datetime |
| `country` | string? | Case-insensitive name (e.g. `"Italy"`) |
| `country_code` | string? | ISO alpha-2 (e.g. `"IT"`) — takes precedence over `country` |
| `series_ids` | string[]? | Restrict to specific series |

---

## Deploy your own

This server lives at `mcp/` inside the [race-grid repo](https://github.com/bogdankf1/race-grid).

1. Push the repo to GitHub.
2. Create a new Vercel project pointing at the same repo.
3. **Set Root Directory to `mcp/`** in Vercel project settings.
4. Deploy. Vercel auto-detects Next.js.

No environment variables required — the server is fully read-only against bundled data.

---

## Publish to MCP registries

Once deployed, list the server so other people can discover it.

### Smithery — [smithery.ai](https://smithery.ai)

Easiest: go to **[smithery.ai/new](https://smithery.ai/new)** and paste your deployment URL. Smithery auto-scans the endpoint for metadata. No manifest file required for a public HTTP server.

### Official MCP Registry — [registry.modelcontextprotocol.io](https://registry.modelcontextprotocol.io)

Driven by the [`mcp-publisher`](https://github.com/modelcontextprotocol/registry) CLI and a `server.json` manifest. This repo has [`mcp/server.json`](./server.json) ready to publish — both `remotes[].url` entries already point at `race-grid-mcp.vercel.app`:

```bash
# One-time: install the publisher CLI
brew install mcp-publisher          # macOS
# or download from https://github.com/modelcontextprotocol/registry/releases

cd mcp
mcp-publisher login github           # authenticates the io.github.bogdankf1/* namespace
mcp-publisher publish                # reads ./server.json
```

The namespace `io.github.bogdankf1/race-grid` is locked to the GitHub user who authenticates, so only the repo owner can publish updates.

### PulseMCP — [pulsemcp.com](https://www.pulsemcp.com)

Community directory. Submit via the **Submit a server** form on the site — no manifest file needed, they index from the repo + deployment URL.

---

## Development

```bash
cd mcp
npm install
npm run dev          # Next.js dev server on :3030 — visit http://localhost:3030
npm run inspector    # MCP Inspector UI over stdio for tool-by-tool testing
```

The data layer is imported directly from `../src/data` via tsconfig path aliases. Updating race-grid data files → redeploy this project to publish the new data.

---

## License

Same as the parent race-grid project.
