// ***** React ***** //
import React from 'react'
// import { Link } from 'react-router-dom'

// ***** Components ***** //
import Search from './Search'

const Header = () => (
  <div className="header">
    <h1>Where's My Donkey?</h1>
    <Search />
    {/* <Link to="/about">About</Link> */}
  </div>
)

export default Header
