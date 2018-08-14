// ***** React ***** //
import React, { Component } from 'react'

// ***** Components ***** //
import Gallery from './Gallery'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Gallery />
      </div>
    )
  }
}

export default App
