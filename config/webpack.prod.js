const webpackMerge = require('webpack-merge');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const commonConfig = require('./webpack.common.js');

module.exports = function getWebpackProductionConfig() {
    return webpackMerge(commonConfig, {
        mode: 'production',

        module: {
            rules: [
                /**
                 * Extract and compile SCSS files to external CSS file
                 *
                 * See: https://webpack.js.org/loaders/sass-loader/#in-production
                 */
                {
                    test: /\.(scss|css)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        },

        plugins: [
            /**
             * Plugin: ExtractTextPlugin
             * Description: Extracts imported CSS files into external stylesheet
             *
             * See: https://webpack.js.org/plugins/extract-text-webpack-plugin/
             */
            new MiniCssExtractPlugin()
        ],

        optimization: {
            minimizer: [
                /**
                 * A JavaScript parser and mangler/compressor toolkit for ES6+.
                 */
                new TerserJSPlugin({
                    terserOptions: {
                        output: {
                            comments: false
                        }
                    }
                }),


                /**
                 * A Webpack plugin to optimize \ minimize CSS assets.
                 * It will search for CSS assets during the Webpack build
                 * and will optimize \ minimize the CSS
                 * (by default it uses cssnano but a custom CSS processor can be specified).
                 */
                new OptimizeCSSAssetsPlugin({})
            ]
        }
    });
};
