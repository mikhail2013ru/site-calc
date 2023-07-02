const path = require('path')

module.exports = {
    entry: {
        main: './js/controller.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'eval-source-map'
}