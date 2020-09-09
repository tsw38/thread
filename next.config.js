const path = require('path');

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.resolve.modules.push(
            path.resolve(__dirname, 'src'),
        );

        // Important: return the modified config
        return config
    },
  }