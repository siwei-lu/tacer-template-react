const Parcel = require('parcel-bundler')
const { resolve } = require('path')

const cacheDir = resolve(__dirname, '../.cache')
const entrypoint = resolve(process.cwd(), './src/index.html')

function buld() {
  new Parcel(entrypoint, {
    cacheDir,
    watch: false,
    minify: true,
    sourceMaps: false,
  }).bundle()
}

module.exports = buld
