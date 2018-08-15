// ***** React ***** //
import React from 'react'
import PropTypes from 'prop-types'

const Photo = ({ id, farm, owner, ownername, secret, server, title }) => (
  <div className="photo">
    <img
      src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
      alt={title}
    />
    {/* <a href={`https://www.flickr.com/people/${owner}/`} target="_blank">
      by {ownername}
    </a> */}
  </div>
)

Photo.propTypes = {
  id: PropTypes.string.isRequired,
  farm: PropTypes.number.isRequired,
  secret: PropTypes.string.isRequired,
  server: PropTypes.string.isRequired,
}

export default Photo
