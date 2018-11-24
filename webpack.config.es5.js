const legacyConfig = require('./webpack.configurator').getLegacyConfig(false);

console.log(legacyConfig);
module.exports = legacyConfig;