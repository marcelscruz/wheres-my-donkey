// ***** React ***** //
import React from 'react'
// import { Link } from 'react-router-dom'

// ***** Components ***** //
import Search from './Search'

const Header = () => (
  <div className="header">
    <div className="header__container">
      <h1>Where's My Donkey?</h1>
      <Search />
      {/* <Link to="/about">About</Link> */}
    </div>
  </div>
)

export default Header
