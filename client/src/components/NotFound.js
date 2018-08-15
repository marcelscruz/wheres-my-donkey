// ***** React ***** //
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <div>
    <h1>404 - Page not found</h1>
    <Link to="/">Go back to your donkeys</Link>
  </div>
)

export default NotFound
