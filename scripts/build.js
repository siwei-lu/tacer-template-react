const Parcel = require('parcel-bundler')
const { resolve } = require('path')

const cacheDir = resolve(__dirname, '../.cache')
const entrypoint = `${process.cwd()}/index.html`

function build() {
  const task = new Parcel(entrypoint, {
    cacheDir,
    watch: false,
    minify: true,
    sourceMaps: false,
  })

  task.bundle()
}

module.exports = build
