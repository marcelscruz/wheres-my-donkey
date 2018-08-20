// ***** React ***** //
import React from 'react'
import PropTypes from 'prop-types'

// ***** Redux ***** //
import { connect } from 'react-redux'
import { toggleModal } from '../actions/modal'

export const Photo = props => {
  const {
    id,
    farm,
    owner,
    ownername,
    secret,
    server,
    title,
    toggleModal,
  } = props
  return (
    <div
      className="photo"
      onClick={() => {
        toggleModal(props)
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
  id: PropTypes.string.isRequired,
  farm: PropTypes.number.isRequired,
  owner: PropTypes.string.isRequired,
  ownername: PropTypes.string.isRequired,
  secret: PropTypes.string.isRequired,
  server: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  toggleModal: id => dispatch(toggleModal(id)),
})

export default connect(
  undefined,
  mapDispatchToProps,
)(Photo)
