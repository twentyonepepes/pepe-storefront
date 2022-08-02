const { resolve } = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require("webpack");
// const { path } = require("app-root-path");

module.exports = ()=>{
    return {
        target:"web",
        mode: process.env.NODE_ENV || "development",
        entry:"./src/app/index.jsx",
        plugins: [
            // new webpack.DefinePlugin({
                // "process.env": JSON.stringify(process.env)
            // }),
            // new webpack.EnvironmentPlugin(['NODE_ENV', 'PRODUCT_SERVER_URL','IMAGE_SERVER_URL','ORDER_FULFILLMENT_URL']),
            new MiniCssExtractPlugin()
        ],
        watch: true,
        context: resolve(__dirname),
        // externals: [nodeExternals()],
        output: {
            filename: 'client.js',
            path: resolve(__dirname, "bin")
        },
        node: {
            __dirname: false
        },
        resolve: {
            // root: path,
            // modules:[ path, "node_modules"],
            extensions: ['.js', '.jsx'],
        },
        devtool: "none",
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react'
                            ],
                            "plugins":[
                                "@babel/transform-runtime"
                            ],
                        }
                    }
                },
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
                // {
                //     test: /\.css$/,
                //     loader: ExtractTextPlugin.extract(
                //     {
                //         fallbackLoader: 'style-loader',
                //         loader: 'css-loader'
                //     })
                //     // use: [{ loader: 'css-loader', options: { onlyLocals: true} }]
                // },
                // {
                //     test: /\.less$/i,
                //     // use: [ 'style-loader', 'css-loader!less-loader']
                //     // loader: "style-loader!less-loader", // compiles Less to CSS
                //     loader: ExtractTextPlugin.extract(
                //     {
                //         fallbackLoader: 'style-loader',
                //         loader: 'css-loader!less-loader'
                //     })
                // },
            ]
        },
        devServer: {

            // historyApiFallback: true,
            historyApiFallback: false,
            contentBase: resolve(__dirname, "public"),
            port: process.env.PORT || 9999
            
        }
    };
}