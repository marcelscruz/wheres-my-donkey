import React from 'react'
import PropTypes from 'prop-types'

const Loading = ({ size }) => (
  <div className={`loader--${size}`}>
    <img src={`/images/loader-${size}.gif`} alt="Loading..." />
  </div>
)

Loading.propTypes = {
  size: PropTypes.string.isRequired,
}

export default Loading
