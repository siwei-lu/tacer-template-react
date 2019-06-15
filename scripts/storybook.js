const { resolve } = require('path')
const { execFile } = require('child_process')

const start = resolve(__dirname, '../node_modules/.bin/start-storybook')
const storybookDir = resolve(__dirname, '../.storybook')

function storybook() {
  const task = execFile(start, ['-c', storybookDir, '-p', '6006'], {
    cwd: process.cwd(),
  })

  task.stdout.pipe(process.stdout)
  task.stderr.pipe(process.stderr)
}

module.exports = storybook
