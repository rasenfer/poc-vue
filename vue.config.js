const packageConf = require('./package.json');

process.env.VUE_APP_VERSION = packageConf.version;

module.exports = {
    "publicPath": "./"
}