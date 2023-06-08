const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

function parseWebpackCliEnv(env, options) {
    return Object.keys(options).reduce((acc, curr) => ({
        [curr]: env[curr] ?? options[curr],
        ...acc
    }), {});
}

function setupHtmlPlugin(env) {
    const defaultMinify = {
        collapseWhitespace: !env.WEBPACK_SERVE,
        removeComments: !env.WEBPACK_SERVE,
        removeRedundantAttributes: true,
        useShortDoctype: true
    };
    const minify = parseWebpackCliEnv(env, defaultMinify);
    return new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
        filename: 'index.html',
        inject: 'body',
        scriptLoading: 'module',
        minify
    });
}

const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

const baseWebpackConfig = (env) => ({
    context: src,
    target: 'web',
    mode: env.WEBPACK_SERVE ? 'development' : 'production',
    entry: './index.jsx',
    output: {
        path: dist,
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js',
        clean: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
        alias: {
            '@core': src
        }
    },
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                },
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    minChunks: 1,
                    reuseExistingChunk: true,
                    enforce: true
                }
            }
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        setupHtmlPlugin(env),
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css',
            chunkFilename: 'styles.[contenthash].css'
        }),
        new CleanWebpackPlugin
    ]
});

module.exports = {
    parseWebpackCliEnv,
    baseWebpackConfig,
    DIST: dist
};
