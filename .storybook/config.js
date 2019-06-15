import { configure } from '@storybook/react'
import { resolve } from 'path'

// automatically import all files named stories.js in src/
const req = require.context('root/src', true, /stories\.tsx$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
