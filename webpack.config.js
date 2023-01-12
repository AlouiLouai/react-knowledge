const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    devtool: 'inline-source-map',
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        })
    ],
    module: {
        // exclude node_modules
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(json)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './'
                    }
                }
            }
        ],
    },
    // pass all js files through Babel
    resolve: {
        extensions: ["*", ".js"],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "build")
        },
        port: 3000,
    }
};