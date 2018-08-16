// ***** React ***** //
import React, { Component } from 'react'

// ***** Components ***** //
import Gallery from './Gallery'
import Header from './Header'
import Modal from './Modal'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Gallery />
        <Modal />
      </div>
    )
  }
}

export default App
