const { execSync } = require('child_process')
const { resolve } = require('path')
const config = resolve(__dirname, '../jest.config.js')

function test() {
  execSync(`jest --watch -c ${config}`, { stdio: 'inherit' })
}

module.exports = test
