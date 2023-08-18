const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: path.resolve(__dirname, "src", "index.js")
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "js/[name].[contenthash].js",
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        }),
    ],
    devServer: {
        port: 8080,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.(css|scss|sass)$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".scss", ".sass", ".css", ".jpg", ".jpeg", ".png", ".svg"]
    }
}