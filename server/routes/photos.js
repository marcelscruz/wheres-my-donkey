// ***** Libraries ***** //
const axios = require('axios')

// ***** Keys ***** //
const flickrKey = require('../config/keys').flickrKey

// Endpoint to fetch photos from Flickr
module.exports = app => {
  app.get('/api/v1/photos', (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    let { tag, nextPage } = req.query

    // Request parameters
    const apiKey = `api_key=${flickrKey}`
    const extras = 'extras=owner_name,description'
    const format = 'format=json'
    const method = 'method=flickr.photos.search'
    const noJsonCallback = 'nojsoncallback=1'
    const page = `page=${nextPage}`
    const perPage = 'per_page=20'
    const tags = `tags=${tag}`

    axios
      .get(
        `https://api.flickr.com/services/rest/?${apiKey}&${extras}&${format}&${method}&${noJsonCallback}&${page}&${perPage}&${tags}`,
      )
      .then(apiResponse => {
        if (!apiResponse.data) {
          return res.status(404).send()
        }

        const photosMetadata = apiResponse.data.photos

        res.send(photosMetadata)
      })
      .catch(e => {
        res.status(400).send()
        console.log(e)
      })
  })
}
