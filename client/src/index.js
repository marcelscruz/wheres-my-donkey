// ***** Legacy browsers support ***** //
import 'airbnb-browser-shims'

// ***** React ***** //
import React from 'react'
import ReactDOM from 'react-dom'

// ***** Redux ***** //
import { Provider } from 'react-redux'
import store from './store/store'

// ***** Styles ***** //
import './styles/index.scss'

// ***** Routes ***** //
import AppRouter from './router/AppRouter'

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
