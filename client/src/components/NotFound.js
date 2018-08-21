// ***** React ***** //
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <div className="not-found">
    <h1 className="not-found__message">404 - Page not found</h1>
    <Link to="/">
      <span className="not-found__button">Go back to your donkeys</span>
    </Link>
  </div>
)

export default NotFound
