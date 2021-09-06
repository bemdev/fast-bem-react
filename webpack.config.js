var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
// var LiveReloadPlugin = require('webpack-livereload-plugin');

const MODE =
    process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    mode: MODE,
    target: 'node',
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),
    },
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             vendor: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name: 'vendors',
    //                 chunks: 'all',
    //             },
    //         },
    //     },
    // },
    stats: { preset: 'minimal' },
    resolve: {
        modules: ['node_modules', 'src/components', 'libs'],
        extensions: ['.jsx', '.js', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['transform-react-jsx'],
                    },
                },
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
        // new LiveReloadPlugin({
        //     appendScriptTag: true,
        // }),
    ],
};