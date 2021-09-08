const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

const webpack = require('webpack');

const MODE =
    process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    mode: MODE,
    entry: './src/index.jsx',
    watch: MODE === 'development',
    output: {
        path: path.resolve(__dirname, 'build'),
    },
    performance: {
        hints: false,
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: { removeAll: true },
                        },
                    ],
                },
            }),
            new UglifyJsPlugin({
                extractComments: false,
                uglifyOptions: {
                    compress: { inline: true },
                },
            }),
        ],
    },
    stats: { preset: 'minimal' },
    resolve: {
        modules: ['node_modules', 'src/components', 'libs'],
        extensions: ['.jsx', '.js', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['transform-react-jsx'],
                    },
                },
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                    },
                  },
                ],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, { loader: 'css-loader' }],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new LiveReloadPlugin({ useSourceHash: true }),
        new webpack.DefinePlugin({ production: MODE == 'production' }),
        // new CleanWebpackPlugin(),
    ],
};