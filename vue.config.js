const packageConf = require('./package.json');

process.env.VUE_APP_VERSION = packageConf.version;

module.exports = {
    pluginOptions: {
        "serve-api-mocks": {
            base: "/api",
            routes: [
                {
                    method: "PUT",
                    path: "/*",
                    callback(req, res) {
                        res
                            .status(200)
                            .send("OK")
                            .end();
                    },
                },
            ],
        },
    },

    chainWebpack: config => {
        // disable cache for prod only, remove the if to disable it everywhere
        // if (process.env.NODE_ENV === 'production') {
        config.module.rule('vue').uses.delete('cache-loader');
        config.module.rule('js').uses.delete('cache-loader');
        config.module.rule('ts').uses.delete('cache-loader');
        config.module.rule('tsx').uses.delete('cache-loader');
        // }
    },

    publicPath: './',
    assetsDir: 'assets',
    runtimeCompiler: true
}