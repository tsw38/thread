const path = require('path')

module.exports = {
    webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
        config.module.rules[1].oneOf.forEach((rule) => {
            if (Array.isArray(rule.use)) {
                rule.use.forEach((useRule) => {
                    if (typeof useRule.options.modules === 'object') {
                        useRule.options.modules = true
                    }
                })
            }
        })

        config.resolve.modules = ['src', ...config.resolve.modules]

        config.resolve.alias['components'] = path.resolve(
            __dirname,
            'src/components'
        )

        // Important: return the modified config
        return config
    },
}
