// ***** React ***** //
import React from 'react'
import PropTypes from 'prop-types'

export const Photo = props => {
  const { photo, toggleModal } = props
  const { id, farm, owner, ownername, secret, server, title } = photo

  return (
    <div
      className="photo"
      onClick={() => {
        toggleModal(photo)
      }}
    >
      <img
        src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
        alt={title}
        className="photo__image"
      />
      <div className="photo__caption">{title}</div>
      <div className="photo__owner">
        by{' '}
        <a
          href={`https://www.flickr.com/photos/${owner}/${id}`}
          target="_blank"
        >
          {ownername}
        </a>
      </div>
    </div>
  )
}

Photo.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    farm: PropTypes.number.isRequired,
    owner: PropTypes.string.isRequired,
    ownername: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired,
    server: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  toggleModal: PropTypes.func.isRequired,
}

export default Photo
