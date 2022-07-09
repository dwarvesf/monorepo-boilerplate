const withTM = require('next-transpile-modules')([
  '@monorepo-boilerplate/ui',
  '@monorepo-boilerplate/api',
  '@monorepo-boilerplate/utils',
])

module.exports = withTM({
  reactStrictMode: true,
})
