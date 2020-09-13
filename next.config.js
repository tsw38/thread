const path = require('path')

module.exports = {
    webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
        // console.log(
        //     'hehehehe',
        //     config.module.rules[1],
        //     JSON.stringify(config.module.rules[1], null, 4)
        // )
        config.resolve.modules.push(
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'src/components')
        )

        config.resolve.alias['components'] = path.resolve(
            __dirname,
            'src/components'
        )

        // Important: return the modified config
        return config
    },
}
