const packageConf = require('./package.json');
const apiMock = require('./api/apiMock.js');
const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
process.env.VUE_APP_VERSION = packageConf.version;
module.exports = {
  pluginOptions: {
    'serve-api-mocks': apiMock,
  },
  publicPath: './',
  assetsDir: 'assets',
  configureWebpack: {
    resolve: {
      plugins: [new DirectoryNamedWebpackPlugin()],
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vue: {
            test: /[\\/]node_modules[\\/](vue|vuex|vue-types|vue-router|vue-loader)[\\/]/,
            name: 'chunk-vue',
          },
          utils: {
            test: /[\\/]node_modules[\\/](lodash|util|axios)[\\/]/,
            name: 'chunk-utils',
          },
          bootstrap: {
            test: /[\\/]node_modules[\\/](bootstrap|)[\\/]/,
            name: 'chunk-bootstrap',
          },
          jquery: {
            test: /[\\/]node_modules[\\/](jquery)[\\/]/,
            name: 'chunk-jquery',
          },
          polyfill: {
            test: /[\\/]node_modules[\\/](core-js|whatwg-fetch)[\\/]/,
            name: 'chunk-polyfill',
          },
        },
      },
    },
  },
};
