// ***** React ***** //
import React, { Component } from 'react'

// ***** Redux ***** //
import { connect } from 'react-redux'
import { setPhotos } from '../actions/photos'
import { setNextPage, setTag } from '../actions/search'

// ***** API ***** //
import getPhotos from '../api/getPhotos'

class Search extends Component {
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

    const response = await getPhotos(tag, 1) // Return array of photos
    const photos = response.data.photo

    this.props.setPhotos(photos) // Clear store and add fetched photos
    this.props.setNextPage(2) // Set next group of photos to be loaded
    this.props.setTag(tag) // Set new tag to be fetched

    // Clear search input
    this.setState({
      search: '',
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            autoFocus={true}
            onChange={this.onSearchChange}
            placeholder="Not donkeys? :("
            type="text"
            value={this.state.search}
          />
        </form>

        <button onClick={this.onSubmit}>Search</button>
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
