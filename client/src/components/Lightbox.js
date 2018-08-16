// ***** React ***** //
import React from 'react'
import PropTypes from 'prop-types'

// ***** Libraries ***** //
import moment from 'moment'

const Lightbox = ({ photoInfo, toggleModal }) => {
  console.log(photoInfo)
  console.log(toggleModal)

  const {
    id,
    dateupload,
    description,
    farm,
    ownername,
    secret,
    server,
    title,
  } = photoInfo

  const imageUrl = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`

  return (
    <div className="lightbox">
      <div
        className="lightbox__photo"
        style={{
          background: `url(${imageUrl}) no-repeat center center / contain`,
        }}
      />

      <div className="lightbox__info">
        <p className="title">{title ? title : 'Title not available'}</p>
        <p className="description">
          {description._content
            ? description._content
            : 'Description not available'}
        </p>
        <p className="upload">
          Uploaded by {ownername} on{' '}
          {moment.unix(dateupload).format('DD/MM/YYYY')}
        </p>
      </div>

      <div
        className="x"
        onClick={() => {
          toggleModal(null)
        }}
      />
    </div>
  )
}

Lightbox.propTypes = {
  photoInfo: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
}

export default Lightbox
