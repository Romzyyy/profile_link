const path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/pages/index.astro',
    output: {
        path: path.resolve(__dirname, 'output'),
    },
}
