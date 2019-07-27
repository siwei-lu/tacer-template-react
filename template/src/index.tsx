import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Index from './containers/Index'

render(
  <Router>
    <Switch>
      <Route path="/" component={Index} exact />
    </Switch>
  </Router>,
  document.getElementById('app')
)
