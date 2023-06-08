const { merge } = require('webpack-merge');

const { baseWebpackConfig, parseWebpackCliEnv, DIST } = require('./base.webpack.config');

function setupDevServer(env) {
    const defaultOptions = {
        port: 4200,
        open: false,
        hot: true,
        compress: true,
        liveReload: true,
        historyApiFallback: true
    };
    const customOptions = parseWebpackCliEnv(env, defaultOptions);
    return {
        ...customOptions,
        static: {
            directory: DIST,
            publicPath: '/'
        }
    };
}

module.exports = (env) => {
    const baseConfig = baseWebpackConfig(env);
    const devConfig = {
        devtool: 'inline-source-map',
        devServer: setupDevServer(env),
    };
    return merge(baseConfig, devConfig);
};
