const { getDefaultConfig } = require('expo/metro-config');
const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.sourceExts.push('cjs');  // allow commonjs modules
defaultConfig.resolver.unstable_enablePackageExports = false;  // fix ESM export bug

module.exports = defaultConfig;
