// ***** React ***** //
import React from 'react'
import PropTypes from 'prop-types'

// ***** Redux ***** //
import { connect } from 'react-redux'
import { toggleModal } from '../actions/modal'

// ***** Libraries ***** //
import Fade from 'react-reveal/Fade'

const Photo = props => {
  const { id, farm, owner, ownername, secret, server, title } = props
  return (
    <Fade bottom>
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
          <a
            href={`https://www.flickr.com/photos/${owner}/${id}`}
            target="_blank"
          >
            by {ownername}
          </a>
        </div>
      </div>
    </Fade>
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
