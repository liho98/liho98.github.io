const path = require('path')
const host = '0.0.0.0'
const port = 8080

module.exports = {
    lintOnSave: false,
    productionSourceMap: false,
    publicPath: process.env.NODE_ENV === 'production'
        ? '/profile/'
        : '/',
    // outputDir: path.resolve(__dirname, 'dist'),
    devServer: {
        host,
        port,
        public: `${host}:${port}`,
        disableHostCheck: true,
        https: false,
    }
}