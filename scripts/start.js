const Parcel = require('parcel-bundler')
const express = require('express')
const proxy = require('http-proxy-middleware')
const { resolve } = require('path')

const cwd = process.cwd()
const cacheDir = resolve(__dirname, '..', '.cache')
const entrypoint = resolve(cwd, '.', 'src', 'index.html')
const outDir = resolve(__dirname, '..', '.tmp')
const port = process.env.PORT || 1234
const pkg = require(resolve(cwd, 'package.json'))

const app = express()

const proxyConfig = pkg.proxy
if (proxyConfig) {
  Object.entries(([k, v]) => app.use(k, proxy(v, { changeOrigin: true })))
}

function start() {
  const bundler = new Parcel(entrypoint, { cacheDir, outDir })
  app.use(bundler.middleware()).listen(port)
}

module.exports = start
