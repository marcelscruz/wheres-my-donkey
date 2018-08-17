// ***** React ***** //
import React from 'react'
import PropTypes from 'prop-types'

// ***** Redux ***** //
import { connect } from 'react-redux'
import { toggleModal } from '../actions/modal'

const Photo = props => {
  const { id, farm, owner, ownername, secret, server, title } = props
  return (
    <div
      className="photo"
      onClick={() => {
        props.toggleModal(props)
      }}
    >
      <img
        src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
        alt={title}
        className="image"
      />
      <div className="caption">{title}</div>
      <div className="owner">
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
  secret: PropTypes.string.isRequired,
  server: PropTypes.string.isRequired,
}

const mapDispatchToProps = dispatch => ({
  toggleModal: id => dispatch(toggleModal(id)),
})

export default connect(
  undefined,
  mapDispatchToProps,
)(Photo)
