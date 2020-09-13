const path = require('path')
const withSass = require('@zeit/next-sass')

console.warn({withSass: withSass({cssModules: true}).webpack({})})

module.exports = {
    stories: [
        path.resolve(__dirname, '../src/**/*.stories.mdx'),
        path.resolve(__dirname, '../src/**/*.stories.{js,jsx,ts,tsx}'),
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-controls',
    ],
    webpackFinal: async (config, {configType}) => {
        //   console.warn({modules: config.resolve.modules})
        config.resolve.modules.push(path.resolve(__dirname, '../src'))

        config.resolve.alias.styles = path.resolve(__dirname, '../src/styles')
        config.resolve.alias.fonts = path.resolve(__dirname, '../public/fonts')
        config.resolve.alias.Link = path.resolve(
            __dirname,
            '../src/stories/common/Link'
        )
        console.log(config.resolve.alias)
        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../'),
        })

        // Return the altered config
        return config
    },
}
