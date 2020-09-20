const path = require('path')

module.exports = {
    webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
        //TODO: clean this to just overwrite the rule, not modify
        config.module.rules[1].oneOf.forEach((rule) => {
            if (Array.isArray(rule.use)) {
                rule.use.forEach((useRule) => {
                    if (/(?<!post)css\-loader/.test(useRule.loader)) {
                        useRule.options.modules = {
                            localIdentName: '[local]',
                        }
                    }
                })
            }
        })
        // config.module.rules[0].oneOf.forEach((rule) => {
        //     if (Array.isArray(rule.use)) {
        //         rule.use.forEach((useRule) => {
        //             if (typeof useRule.options.modules === 'object') {
        //                 useRule.options.modules = {
        //                     localIdentName: '[local]-[emoji]',
        //                 }
        //             }
        //         })
        //     }
        // })

        config.resolve.modules = ['src', ...config.resolve.modules]

        config.resolve.alias['components'] = path.resolve(
            __dirname,
            'src/components'
        )

        config.resolve.alias['utils'] = path.resolve(__dirname, 'src/utils')

        // Important: return the modified config
        return config
    },
}
