#!/usr/bin/env node
const { resolve } = require('path')
const generate = require('tacer-seed').default

const path = resolve(__dirname, '../template.zip')

generate('tacer-template-react', path, process.argv[2])
