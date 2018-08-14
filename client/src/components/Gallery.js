// ***** React ***** //
import React, { Component } from 'react'

// ***** Libraries ***** //
import axios from 'axios'
import _ from 'lodash'

// ***** Components ***** //
import Photo from './Photo'

class Gallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photos: [],
    }
  }

  renderPhotos = () => {
    const { photos } = this.state

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
    const photos = []

    axios
      .get('/api/v1/photos')
      .then(res => {
        console.log(res.data)

        res.data.photo.forEach(photo => {
          photos.push(photo)
        })

        this.setState({
          photos,
        })
      })
      .catch(e => {
        console.log(e)
      })
  }

  render() {
    const { photos } = this.state

    return (
      <div>
        <h1>gallery</h1>
        {photos.length !== 0 ? this.renderPhotos() : 'fetching photos'}
      </div>
    )
  }
}

export default Gallery
