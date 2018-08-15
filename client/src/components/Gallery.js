// ***** React ***** //
import React, { Component } from 'react'

// ***** Redux ***** //
import { connect } from 'react-redux'
import { setPhotos } from '../actions/photos'

// ***** Libraries ***** //
import _ from 'lodash'

// ***** Components ***** //
import Photo from './Photo'

// ***** API ***** //
import getPhotos from '../api/getPhotos'

class Gallery extends Component {
  renderPhotos = () => {
    const { photos } = this.props

    return (
      <div>
        {photos.map(photo => {
          const photoData = _.pick(photo, ['id', 'farm', 'secret', 'server'])

          return (
            <div key={photo.id}>
              <Photo {...photoData} />
            </div>
          )
        })}
      </div>
    )
  }

  async componentDidMount() {
    const response = await getPhotos()
    const photos = response.data.photo

    this.props.setPhotos(photos)
  }

  render() {
    const { photos } = this.props

    return (
      <div>{photos.length !== 0 ? this.renderPhotos() : 'fetching photos'}</div>
    )
  }
}

const mapStateToProps = state => ({
  photos: state.photos,
})

const mapDispatchToProps = dispatch => ({
  setPhotos: photos => dispatch(setPhotos(photos)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Gallery)
