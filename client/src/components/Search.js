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

  onSearchChange = e => {
    const search = e.target.value
    this.setState({
      search,
    })
  }

  onSubmit = async e => {
    e.preventDefault()

    const tag = this.state.search

    const response = await getPhotos(tag, 1)
    const photos = response.data.photo

    this.props.setPhotos(photos)
    this.props.setNextPage(2)
    this.props.setTag(tag)

    console.log(this.state.search)

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
            placeholder="We don't think it's necessary, but you can search for something else"
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
