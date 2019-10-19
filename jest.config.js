const { resolve } = require('path')

const cwd = process.cwd()
const src = resolve(cwd, 'src')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: cwd,
  moduleNameMapper: {
    '^~/(.*)$': `${src}/$1`,
  },
}
