const path = require('path');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin'); 

module.exports = {
    mode: 'development',
    devtool: 'eval', //hiddien-source-map
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    entry: {
        app: './client',
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react',
                ],
                plugins: [
                    'react-refresh/babel'
                ],
            },
        }],
    },
    plugins: [
        new ReactRefreshWebpackPlugin()
    ],
    output: {        
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',        
        publicPath: '/dist/',
    },
    devServer: {
        // static: {
        //     directory: path.join(__dirname, 'dist'),
        // },
        // static: {
        //     directory: path.join(__dirname, "./")
        // },
        // compress: true,
        devMiddleware: { publicPath: '/dist/' },
        static: { directory: path.resolve(__dirname) },
        hot: true, 
    }
};  
