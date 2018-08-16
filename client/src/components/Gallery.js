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
import Loading from './Loading'

class Gallery extends Component {
  state = {
    loadingMore: false,
  }

  // Fetch photos from Flickr API
  fetchPhotos = async () => {
    const { page, tag } = this.props

    const response = await getPhotos(tag, page) // Return array of photos
    const photos = response.data.photo

    this.props.addPhotos(photos) // Add fetched photos in the store
    this.props.setNextPage(page + 1) // Set next group of photos to be fetched

    this.setState({
      loadingMore: false,
    })
  }

  renderLoadMoreButton = () => {
    return (
      <button
        onClick={() => {
          this.setState({
            loadingMore: true,
          })
          this.fetchPhotos()
        }}
      >
        Load more
      </button>
    )
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

          return <Photo key={photo.id} {...photoMetadata} />
        })}
      </div>
    )
  }

  componentDidMount() {
    const { photos } = this.props

    // Fetch photos only on first render, not when returning from About
    _.isEmpty(photos) && this.fetchPhotos()
  }

  render() {
    const { photos } = this.props
    const { loadingMore } = this.state

    return (
      <div className="gallery">
        <div className="gallery__container">
          {_.isEmpty(photos) ? <Loading size="large" /> : this.renderPhotos()}
        </div>
        <div className="load-more">
          {loadingMore ? (
            <Loading size="small" />
          ) : (
            !_.isEmpty(photos) && this.renderLoadMoreButton()
          )}
        </div>
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
