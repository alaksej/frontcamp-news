const modernConfig = require('./webpack.configurator').getModernConfig(true);

console.log(modernConfig);
module.exports = modernConfig;