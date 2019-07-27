const Parcel = require('parcel-bundler')
const { resolve } = require('path')

const cacheDir = resolve(__dirname, '..', '.cache')
const entrypoint = resolve(process.cwd(), '.', 'src', 'index.html')
const outDir = resolve(__dirname, '..', '.tmp')
const port = process.env.PORT || 1234

function start() {
  new Parcel(entrypoint, { cacheDir, outDir }).serve(port)
}

module.exports = start
