module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            //use: ['babel-loader']

        }]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        filename: './lib/snow.js',
        libraryTarget: 'umd',
        library: 'snow',
    },
    optimization: {},
    plugins: [
    ]

}
