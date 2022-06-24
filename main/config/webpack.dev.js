const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:3000/'
    },
    devServer: {
        port: 3000,
        historyApiFallback: {
            index: '/index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            filename: 'remoteEntry.js',
            remotes: {
                about: 'about@http://localhost:3001/remoteEntry.js',
                blog: 'blog@http://localhost:3002/remoteEntry.js',
                description: 'description@http://localhost:4200/remoteEntry.js'
            }
        })
    ]
}

module.exports = merge(commonConfig, devConfig)