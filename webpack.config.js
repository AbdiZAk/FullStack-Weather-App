const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    entry: ["./public/js/weather.js", './views/index.ejs', "./public/css/main.css"],
    output: {
        path: path.resolve(__dirname, "./public/dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules, routes)/,
                use: "babel-loader",
            },
            {
                test: /\.css$/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader, options: {
                        publicPath: "/dist"
                    },
                },
                "css-loader",
                ],
            },
            {
                test: /\.svg$/,
                use: "svg-inline-loader",
            },
            {
                test: /\.ejs/,
                use: "ejs-webpack-loader"
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '!!ejs-webpack-loader!./views/index.ejs',
            filename: 'index.html',
            publicPath: "/dist",
            scriptLoading: "defer",
            hash: "true"
        }),
        new MiniCssExtractPlugin({
            filename: "main.css"
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPartialsPlugin({
            path: './views/partials/navbar.ejs',
            inject: true,
            location: "navbar",
            priority: "replace",
        }),

        new HtmlWebpackPartialsPlugin({
            path: './views/partials/head.ejs',
            inject: true,
            location: "header",
            priority: "replace"
        })

    ],
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
};

module.exports = config