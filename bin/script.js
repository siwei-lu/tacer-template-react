#!/usr/bin/env node
const readdir = require('fs').readdirSync
const { resolve, join } = require('path')

const scriptsPath = resolve(__dirname, '../scripts')
const scripts = readdir(scriptsPath)

const targetName = process.argv[2]
if (scripts.indexOf(`${targetName}.js`) === -1) {
  throw new Error(`No method named ${targetName}!`)
}

const targetPath = join(scriptsPath, targetName)
const target = require(targetPath)
target()
