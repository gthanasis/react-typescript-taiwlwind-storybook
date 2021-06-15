const path = require('path')
const custom = require('../config/webpack.dev');
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // extract css to files
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer') // help tailwindcss to work


module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-knobs"
    ],
    "core": {
        "builder": "webpack5"
    },
    webpackFinal: (config) => {
        config.module.rules.unshift(// Styles: Inject CSS into the head with source maps
            {
                test: /\.(css|scss|sass)$/,
                exclude: [
                    path.resolve(__dirname, '../src/stories')
                ],
                use: [
                    'style-loader',
                    { loader: 'css-loader' },
                    'sass-loader'
                ],
            },)
        console.log(path.resolve(__dirname, '../src/stories'))
        return config
    }
}
