const modernConfig = require('./webpack.configurator').getModernConfig(false);

console.log(modernConfig);
module.exports = modernConfig;