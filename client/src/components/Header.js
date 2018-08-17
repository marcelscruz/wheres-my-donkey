// ***** React ***** //
import React from 'react'

// ***** Components ***** //
import Search from './Search'

const Header = () => (
  <div className="header">
    <div className="header__container">
      <h1 className="header__h1">Where's My Donkey?</h1>
      <Search />
    </div>
  </div>
)

export default Header
