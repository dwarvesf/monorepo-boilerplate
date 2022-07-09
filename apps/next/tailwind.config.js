const config = require('@monorepo-boilerplate/config/tailwind.config')

config.content = [
  './components/**/*.{js,ts,jsx,tsx}',
  './pages/**/*.{js,ts,jsx,tsx}',
  '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
]

module.exports = config
