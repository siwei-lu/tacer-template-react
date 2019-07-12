const Parcel = require('parcel-bundler')
const { resolve } = require('path')

const cacheDir = resolve(__dirname, '../.cache')
const entrypoint = resolve(process.cwd(), './src/index.html')
const port = process.env.SERVE_PORT || 1234

function start() {
  new Parcel(entrypoint, { cacheDir }).serve(port)
}

module.exports = start
