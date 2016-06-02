function readFile (path) {
    return require('fs').readFileSync(path, 'utf8')
}
function babelrc () {
    return JSON.parse(readFile(__dirname + '/.babelrc'))
}

module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: babelrc(),
            },
        ],
    },
}
