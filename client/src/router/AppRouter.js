// ***** React ***** //
import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'

// ***** Libraries ***** //
import createHistory from 'history/createBrowserHistory'

// ***** Components ***** //
// // import About from '../components/About'
import App from '../components/App'

export const history = createHistory()

// Define app routes
const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={App} exact={true} />
      {/* <Route path="/about" component={About} /> */}
    </Switch>
  </Router>
)

export default AppRouter
