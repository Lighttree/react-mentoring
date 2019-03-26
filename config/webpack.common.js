const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    module: {
        rules: [
            /**
             * Babel loader in order to support ES6 features.
             * A Babel 'ENV' preset can automatically determine the Babel plugins
             * and polyfills you need based on your supported environments.
             *
             * See: https://webpack.js.org/loaders/babel-loader/
             *      https://github.com/babel/babel-preset-env
             *      https://babeljs.io/docs/en/babel-preset-react#docsNav
             */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },

    plugins: [
        /*
         * Plugin: HtmlWebpackPlugin
         * Description: Simplifies creation of HTML files to serve your webpack bundles.
         * This is especially useful for webpack bundles that include a hash in the filename
         * which changes every compilation.
         *
         * See: https://github.com/ampedandwired/html-webpack-plugin
         */
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico',
            hash: true
        })
    ]
};
