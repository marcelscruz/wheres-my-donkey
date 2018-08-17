// ***** React ***** //
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => (
  <div className="footer">
    <span>
      Created with{' '}
      <span role="img" aria-label="coffee" className="emoji">
        ☕️
      </span>{' '}
      by <Link to="/about">Marcel Cruz</Link>
    </span>
  </div>
)

export default Footer
