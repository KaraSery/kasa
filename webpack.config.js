const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = true
module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    target: ['web', 'es2020'],
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: {
                    plugins: [
                        isDevelopment && require.resolve('react-refresh/babel')
                    ],
                    presets: ["@babel/env"]
                }
            },
            {
                test: /\.scss?$/,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
        path: path.resolve(__dirname, "public/dist/"),
        publicPath: "/public/dist/",
        filename: "index.js",
    },
    devtool: 'inline-source-map',
    devServer: {
        static: ['./public/dist', './public/'],
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Kasa',
            template: './src/index.html',
        }),
        isDevelopment && new ReactRefreshWebpackPlugin(),
    ],
};