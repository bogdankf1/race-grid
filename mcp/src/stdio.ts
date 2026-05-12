// Stdio entry-point for the Race Grid MCP server.
// Connect from Claude Desktop / Cursor / any stdio-capable MCP client.

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { registerTools, SERVER_INFO } from './server'

async function main() {
  const server = new McpServer(SERVER_INFO)
  registerTools(server)
  const transport = new StdioServerTransport()
  await server.connect(transport)
  // Server runs until stdin closes. No further output to stdout — MCP protocol
  // owns stdout. Log to stderr only.
  process.stderr.write('[race-grid-mcp] stdio server ready\n')
}

main().catch((err) => {
  process.stderr.write(`[race-grid-mcp] fatal: ${err?.stack ?? err}\n`)
  process.exit(1)
})
