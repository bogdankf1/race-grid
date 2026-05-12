import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { ensureLoaded } from './data-bridge'
import { listSeriesTool } from './tools/list-series'
import { getCalendarTool } from './tools/get-calendar'
import { getNextRaceTool } from './tools/get-next-race'
import { getRaceResultsTool } from './tools/get-race-results'
import { getStandingsTool } from './tools/get-standings'
import { getCircuitTool } from './tools/get-circuit'
import { searchRacesTool } from './tools/search-races'

const TOOLS = [
  listSeriesTool,
  getCalendarTool,
  getNextRaceTool,
  getRaceResultsTool,
  getStandingsTool,
  getCircuitTool,
  searchRacesTool,
] as const

// Wires every Race Grid tool onto an McpServer instance. Shared by the stdio
// entrypoint (Claude Desktop, Cursor) and the HTTP/SSE route (Vercel).
export function registerTools(server: McpServer): void {
  for (const tool of TOOLS) {
    server.tool(
      tool.name,
      tool.description,
      // The MCP SDK accepts a zod raw-shape object as the input schema.
      tool.schema as Record<string, unknown>,
      async (args: unknown) => {
        await ensureLoaded()
        // Each tool's handler validates its own args against the same schema.
        return (tool.handler as (a: unknown) => Promise<unknown>)(args) as never
      },
    )
  }
}

export const SERVER_INFO = {
  name: 'race-grid',
  version: '0.1.0',
} as const
