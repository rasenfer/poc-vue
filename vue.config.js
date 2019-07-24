const packageConf = require('./package.json');

process.env.VUE_APP_VERSION = packageConf.version;

module.exports = {
    "publicPath": "./",
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
    }
}