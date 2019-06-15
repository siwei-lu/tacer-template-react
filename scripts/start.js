const Parcel = require('parcel-bundler')
const { resolve } = require('path')

const cacheDir = resolve(__dirname, '../.cache')
const indexPath = `${process.cwd()}/index.html`

function start() {
  new Parcel(indexPath, {
    cacheDir,
  }).serve()
}

module.exports = start
