const legacyConfig = require('./webpack.configurator').getLegacyConfig(true);

console.log(legacyConfig);
module.exports = legacyConfig;