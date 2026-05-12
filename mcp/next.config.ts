import type { NextConfig } from 'next'

// The MCP project lives in `mcp/` but imports race-grid data from `../src/`.
// `experimental.externalDir` permits TypeScript path aliases that resolve
// outside this Next.js project root. Vercel's "Include files outside the
// root directory" setting must also be enabled for the parent files to be
// uploaded into the build.
//
// Explicitly setting `output` to `undefined` defends against any tooling that
// might otherwise inherit `output: "export"` from the parent race-grid config
// (the parent uses static export; this MCP project must remain server-side).
const nextConfig: NextConfig = {
  output: undefined,
  experimental: {
    externalDir: true,
  },
}

export default nextConfig
