const { join } = require('path')
const cwd = process.cwd()

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
      },
    ],
  })

  config.resolve.extensions.push('.ts', '.tsx')
  config.resolve.alias.cwd = cwd

  config.resolve.plugins = config.resolve.plugins || []
  config.resolve.alias['~'] = join(cwd, 'src')

  return config
}
