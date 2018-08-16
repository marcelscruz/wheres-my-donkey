// ***** React ***** //
import React from 'react'
// import { Link } from 'react-router-dom'

// ***** Libraries ***** //
import Fade from 'react-reveal/Fade'

// ***** Components ***** //
import Search from './Search'

const Header = () => (
  <Fade>
    <div className="header">
      <div className="header__container">
        <h1>Where's My Donkey?</h1>
        <Search />
        {/* <Link to="/about">About</Link> */}
      </div>
    </div>
  </Fade>
)

export default Header
