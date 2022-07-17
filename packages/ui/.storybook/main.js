const path = require('path')

module.exports = {
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    'storybook-addon-next-router',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  webpackFinal: async (config) => {
    // Resolve mjs files from libs
    // Here we need the absolute paths to our other libs that the ui package depends on
    config.module.rules.push({
      test: /\.mjs$/,
      include: [
        /node_modules/,
        path.join(__dirname, '../../utils'),
        path.join(__dirname, '../../api'),
      ],
      type: 'javascript/auto',
    })

    return config
  },
}
