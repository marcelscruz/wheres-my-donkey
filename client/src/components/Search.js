// ***** React ***** //
import React, { Component } from 'react'

// ***** Redux ***** //
import { connect } from 'react-redux'
import { errorFetchingPhotos } from '../actions/error'
import { setPhotos } from '../actions/photos'
import { setNextPage, setTag } from '../actions/search'

// ***** API ***** //
import getPhotos from '../api/getPhotos'

// ***** Icons ***** //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export class Search extends Component {
  state = {
    search: '',
  }

  // Put search input into state
  onSearchChange = e => {
    const search = e.target.value

    this.setState({
      search,
    })
  }

  // Handle new search
  onSubmit = async e => {
    e.preventDefault()

    const tag = this.state.search
    const { errorFetchingPhotos, setNextPage, setPhotos, setTag } = this.props

    if (tag !== '') {
      try {
        const response = await getPhotos(tag, 1) // Return array of photos
        const photos = response.data.photo

        setPhotos(photos) // Clear store and add fetched photos
        setNextPage(2) // Set next group of photos to be fetched
        setTag(tag) // Set new tag to be fetched

        this.refs.input.blur() // Remove focus from input field
      } catch (error) {
        errorFetchingPhotos() // Render error message
      }
    }
  }

  render() {
    const { search } = this.state

    return (
      <div className="search">
        <form onSubmit={this.onSubmit}>
          <div className="search-box">
            <input
              className="search-box__input"
              onChange={this.onSearchChange}
              placeholder="Want something else?"
              ref="input"
              type="text"
              value={search}
            />
            <FontAwesomeIcon icon={faSearch} className="search-box__icon" />
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  errorFetchingPhotos: () => dispatch(errorFetchingPhotos(true)),
  setPhotos: photos => dispatch(setPhotos(photos)),
  setNextPage: page => dispatch(setNextPage(page)),
  setTag: tag => dispatch(setTag(tag)),
})

export default connect(
  undefined,
  mapDispatchToProps,
)(Search)
