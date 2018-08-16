// ***** React ***** //
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// const Photo = ({ id, farm, owner, ownername, secret, server, title }) => (
//   <div className="photo">
//     <img
//       src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
//       alt={title}
//       className="image"
//     />
//     <div className="photo__data">
//       <div className="owner">
//         <a href={`https://www.flickr.com/people/${owner}/`} target="_blank">
//           by {ownername}
//         </a>
//       </div>
//     </div>
//   </div>
// )

class Photo extends Component {
  state = {
    active: false,
  }

  onToggleClass = () => {
    const currentState = this.state.active
    console.log('toggle', currentState)
    this.setState({ active: !currentState })
  }

  render() {
    const { id, farm, owner, ownername, secret, server, title } = this.props
    const { active } = this.state

    return (
      <div
        className={`photo ${active ? 'lightbox' : ''}`}
        onClick={this.onToggleClass}
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
    )
  }
}

Photo.propTypes = {
  id: PropTypes.string.isRequired,
  farm: PropTypes.number.isRequired,
  secret: PropTypes.string.isRequired,
  server: PropTypes.string.isRequired,
}

export default Photo
