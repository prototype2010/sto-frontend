const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { merge } = require('webpack-merge')

const paths = require('./paths')
const common = require('./webpack.common')

console.log(process.env)
const ROOT_PATH = process.env.NODE_ENV === 'production' ? '/sto-frontend' : '/'

module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    entry: './src/index.js',
    output: {
        path: paths.build,
        publicPath: ROOT_PATH,
        filename: 'script.js',
        assetModuleFilename: `./${ROOT_PATH}/[hash][ext][query]`
        /* chunks version
         filename: 'js/[name].[contenthash].bundle.js',
         */
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: false,
                            modules: false,
                        },
                    },
                    {
                        loader: 'resolve-url-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    }
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        // Extracts CSS into separate files
        new MiniCssExtractPlugin({
            filename: 'styles.css',

            /* chunks version
            filename: 'styles/[name].[contenthash].css',
            chunkFilename: '[id].css',  chunks version
            */
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerPlugin(), '...'],
        /* chunks version
        runtimeChunk: { chunks version
            name: 'runtime',
        },
         */
    },
    performance: {
        hints: 'warning',
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
})