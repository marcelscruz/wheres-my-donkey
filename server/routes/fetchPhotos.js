const axios = require('axios')

const flickrKey = require('../config/keys').flickrKey

module.exports = app => {
  app.get('/api/v1/photos', (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    let tag = 'donkey'
    let pageNumber = 1

    // Request parameters
    const method = 'method=flickr.photos.search'
    const apiKey = `api_key=${flickrKey}`
    const tags = `tags=${tag}`
    const perPage = 'per_page=10'
    const format = 'format=json'
    const noJsonCallback = 'nojsoncallback=1'
    const page = `page=${pageNumber}`

    axios
      .get(
        `https://api.flickr.com/services/rest/?${method}&${apiKey}&${tags}&${perPage}&${format}&${noJsonCallback}&${page}`,
      )
      .then(apiResponse => {
        if (!apiResponse.data) {
          return res.status(404).send()
        }

        const photos = apiResponse.data.photos
        console.log(JSON.stringify(photos, undefined, 2))
        res.send(photos)
      })
      .catch(e => {
        res.status(400).send()
        console.log(e)
      })
  })
}
