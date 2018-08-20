// ***** React ***** //
import React, { Component } from 'react'

// ***** Redux ***** //
import { connect } from 'react-redux'
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

    if (tag !== '') {
      try {
        const response = await getPhotos(tag, 1) // Return array of photos
        const photos = response.data.photo

        this.props.setPhotos(photos) // Clear store and add fetched photos
        this.props.setNextPage(2) // Set next group of photos to be fetched
        this.props.setTag(tag) // Set new tag to be fetched
      } catch (error) {
        // TODO ############################################
        console.log(error)
      }
    }
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.onSubmit}>
          <div className="search-box">
            <input
              className="search-box__input"
              onChange={this.onSearchChange}
              placeholder="Want something else?"
              type="text"
              value={this.state.search}
            />
            <FontAwesomeIcon icon={faSearch} className="search-box__icon" />
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setPhotos: photos => dispatch(setPhotos(photos)),
  setNextPage: page => dispatch(setNextPage(page)),
  setTag: tag => dispatch(setTag(tag)),
})

export default connect(
  undefined,
  mapDispatchToProps,
)(Search)
