const { getDefaultConfig } = require('expo/metro-config')
const { withNativeWind } = require('nativewind/metro')
const path = require('path')

const projectRoot = __dirname
const repoRoot = path.resolve(projectRoot, '..')

const config = getDefaultConfig(projectRoot)

// The mobile app reuses the web app's non-visual layer (types, series registry,
// calendar data, timezone/i18n helpers) directly from the repo's src/, plus
// the series logo assets from public/logos.
config.watchFolders = [path.join(repoRoot, 'src'), path.join(repoRoot, 'public')]

// Render the web app's SVG logos as components via react-native-svg.
config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer/expo')
config.resolver.assetExts = config.resolver.assetExts.filter((ext) => ext !== 'svg')
config.resolver.sourceExts = [...config.resolver.sourceExts, 'svg']

// NOTE: app.json sets experiments.onDemandFilesystem=false — Expo's on-demand
// filesystem is scoped to the project root and would hide the shared repo src/.

// Alias resolution:
//   @/...  -> <repo>/src/...   (shared web data layer — same alias the web app uses)
//   ~/...  -> <mobile>/src/... (mobile-only code)
const defaultResolveRequest = config.resolver.resolveRequest
config.resolver.resolveRequest = (context, moduleName, platform) => {
  let target = moduleName
  if (moduleName.startsWith('@/')) {
    target = path.join(repoRoot, 'src', moduleName.slice(2))
  } else if (moduleName.startsWith('~/')) {
    target = path.join(projectRoot, 'src', moduleName.slice(2))
  }
  const resolve = defaultResolveRequest ?? context.resolveRequest
  return resolve(context, target, platform)
}

// Shared modules must resolve npm packages from the mobile app's node_modules
// (the repo root also has node_modules, but with web-only packages).
config.resolver.nodeModulesPaths = [path.join(projectRoot, 'node_modules')]

module.exports = withNativeWind(config, { input: './src/global.css' })
