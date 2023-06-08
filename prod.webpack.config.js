const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const { baseWebpackConfig } = require('./base.webpack.config');

module.exports = (env) => {
    const baseConfig = baseWebpackConfig(env);
    const prodConfig = {
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    test: /\.js(\?.*)?$/i,
                    exclude: /\/node_modules/,
                    parallel: true
                }),
                new CssMinimizerPlugin({
                    parallel: true
                })
            ]
        }
    }
    return merge(baseConfig, prodConfig);
};
