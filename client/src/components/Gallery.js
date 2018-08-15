// ***** React ***** //
import React, { Component } from 'react'

// ***** Redux ***** //
import { connect } from 'react-redux'
import { addPhotos } from '../actions/photos'
import { setNextPage } from '../actions/search'

// ***** Libraries ***** //
import _ from 'lodash'

// ***** Components ***** //
import Photo from './Photo'

// ***** API ***** //
import getPhotos from '../api/getPhotos'

class Gallery extends Component {
  loadPhotos = async () => {
    const { page, tag } = this.props

    const response = await getPhotos(tag, page)
    const photos = response.data.photo

    this.props.addPhotos(photos)
    this.props.setNextPage(page + 1)
  }

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

  componentDidMount() {
    const { photos } = this.props

    _.isEmpty(photos) && this.loadPhotos()
  }

  render() {
    const { photos } = this.props

    return (
      <div>
        <div>
          {!_.isEmpty(photos) ? this.renderPhotos() : 'fetching photos'}
        </div>
        <button onClick={this.loadPhotos}>Load more</button>
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
