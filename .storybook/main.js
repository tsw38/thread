const path = require('path')
// const nextConfig = require('../next.config')

//TODO: import next config, and only pass that instead of custom webpack
module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-controls',
    ],
    webpackFinal: async (config, arg2) => {
        config.module.rules.push({
            test: /\.scss$/i,
            use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2,
                        sourceMap: true,
                        onlyLocals: false,
                        modules: {
                            localIdentName: '[local]-[emoji]',
                        },
                    },
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        plugins: [require('autoprefixer')],
                        options: {
                            plugins: [['autoprefixer']],
                        },
                    },
                },
                // Compiles Sass to CSS
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                        sassOptions: {
                            indentWidth: 4,
                            includePaths: ['node_modules'],
                        },
                    },
                },
            ],
        })
        return config
        // return nextConfig.webpack(config, {})
    },
}
