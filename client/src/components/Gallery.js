// ***** React ***** //
import React, { Component } from 'react'

// ***** Redux ***** //
import { connect } from 'react-redux'
import { addPhotos } from '../actions/photos'
import { setNextPage } from '../actions/search'

// ***** Libraries ***** //
import _ from 'lodash'

// ***** API ***** //
import getPhotos from '../api/getPhotos'

// ***** Components ***** //
import Photo from './Photo'

class Gallery extends Component {
  // Fetch photos from Flickr API
  fetchPhotos = async () => {
    const { page, tag } = this.props

    const response = await getPhotos(tag, page) // Return array of photos
    const photos = response.data.photo

    this.props.addPhotos(photos) // Add fetched photos in the store
    this.props.setNextPage(page + 1) // Set next group of photos to be fetched
  }

  // Render fetched photos
  renderPhotos = () => {
    const { photos } = this.props

    // Pass only necessary properties to Photo and render it
    return (
      <div>
        {photos.map(photo => {
          const photoMetadata = _.pick(photo, [
            'id',
            'farm',
            'owner',
            'ownername',
            'secret',
            'server',
            'title',
          ])

          return (
            <div key={photo.id}>
              <Photo {...photoMetadata} />
            </div>
          )
        })}
      </div>
    )
  }

  componentDidMount() {
    const { photos } = this.props

    // Load photos only on first render, not when returning from About
    _.isEmpty(photos) && this.fetchPhotos()
  }

  render() {
    const { photos } = this.props

    return (
      <div>
        <div>{_.isEmpty(photos) ? 'Fetching photos' : this.renderPhotos()}</div>
        <button onClick={this.fetchPhotos}>Load more</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  page: state.search.page,
  photos: state.photos,
  tag: state.search.tag,
})

const mapDispatchToProps = dispatch => ({
  addPhotos: photos => dispatch(addPhotos(photos)),
  setNextPage: page => dispatch(setNextPage(page)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Gallery)
