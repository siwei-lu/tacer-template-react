const Parcel = require('parcel-bundler')
const { resolve } = require('path')

const cacheDir = resolve(__dirname, '..', '.cache')
const entrypoint = resolve(process.cwd(), 'src', 'index.html')

function build() {
  new Parcel(entrypoint, {
    cacheDir,
    watch: false,
    minify: true,
    sourceMaps: false,
  })
    .bundle()
    .catch(() => process.exit(1))
}

module.exports = build
