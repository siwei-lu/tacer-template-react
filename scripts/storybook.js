const { spawn } = require('child_process')
const { resolve } = require('path')

const config = resolve(__dirname, '../storybook')
const port = process.env.STORYBOOK_PORT || '6006'

function storybook() {
  spawn('start-storybook', ['-c', config, '-p', port], { stdio: 'inherit' })
}

module.exports = storybook
