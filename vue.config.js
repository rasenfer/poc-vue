const packageConf = require('./package.json');
const apiMock = require('./api/apiMock.js');
process.env.VUE_APP_VERSION = packageConf.version;

module.exports = {
    pluginOptions: {
        'serve-api-mocks': apiMock,
    },
    publicPath: './',
    assetsDir: 'assets'
}