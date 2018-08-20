// ***** React ***** //
import React, { Component } from 'react'

// ***** Redux ***** //
import { connect } from 'react-redux'
import { errorFetchingPhotos } from '../actions/error'
import { addPhotos } from '../actions/photos'
import { setNextPage } from '../actions/search'

// ***** Libraries ***** //
import _ from 'lodash'

// ***** API ***** //
import getPhotos from '../api/getPhotos'

// ***** Components ***** //
import Photo from './Photo'
import Loading from './Loading'

export class Gallery extends Component {
  state = {
    loadingMore: false,
  }

  // Fetch photos from Flickr API
  fetchPhotos = async () => {
    const { errorFetchingPhotos, page, tag } = this.props

    try {
      const response = await getPhotos(tag, page) // Return array of photos
      const photos = response.data.photo

      this.props.addPhotos(photos) // Add fetched photos in the store
      this.props.setNextPage(page + 1) // Set next group of photos to be fetched

      this.setState({
        loadingMore: false,
      })
    } catch (error) {
      errorFetchingPhotos()
    }
  }

  // Render fetched photos
  renderPhotos = () => {
    const { photos } = this.props

    return (
      <div>
        {photos.map(photo => {
          return <Photo key={photo.id} {...photo} />
        })}
      </div>
    )
  }

  // Render button to load more photos
  renderLoadMoreButton = () => {
    return (
      <button
        className="button__load-more"
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

  componentDidMount() {
    const { photos } = this.props

    // Fetch photos only on first render, not when returning from About
    _.isEmpty(photos) && this.fetchPhotos()
  }

  render() {
    const { error, photos } = this.props
    const { loadingMore } = this.state

    if (error) {
      return (
        <div className="gallery">
          <div className="gallery__error-message">
            <h2>Error loading photos, please refresh the page.</h2>
          </div>
        </div>
      )
    } else {
      return (
        <div className="gallery">
          {_.isEmpty(photos) ? <Loading size="large" /> : this.renderPhotos()}
          <div className="gallery__load-more">
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
}

const mapStateToProps = state => ({
  error: state.error,
  page: state.search.page,
  photos: state.photos,
  tag: state.search.tag,
})

const mapDispatchToProps = dispatch => ({
  addPhotos: photos => dispatch(addPhotos(photos)),
  errorFetchingPhotos: () => dispatch(errorFetchingPhotos(true)),
  setNextPage: page => dispatch(setNextPage(page)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Gallery)
