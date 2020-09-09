const path = require('path');

module.exports = {
    webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
        config.resolve.modules.push(
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'src/components')
        );

        // Important: return the modified config
        return config;
    },
};
