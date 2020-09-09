const path = require('path');

module.exports = {
  "stories": [
    path.resolve(__dirname, '../src/**/*.stories.mdx'),
    path.resolve(__dirname, '../src/**/*.stories.{js,jsx,ts,tsx}'),
  ],
  "addons": [
    "@storybook/addon-links",
    '@storybook/addon-controls',
    "@storybook/addon-essentials",
  ],
  webpackFinal: async (config, { configType }) => {
    //   console.warn({modules: config.resolve.modules})
    config.resolve.modules.push(
        path.resolve(__dirname, '../src')
    );

    config.resolve.alias.styles = path.resolve(__dirname, '../src/styles');
    config.resolve.alias.fonts = path.resolve(__dirname, '../public/fonts');

    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.module.rules.push();

    // Return the altered config
    return config;
  },
}