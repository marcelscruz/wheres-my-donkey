const axios = require('axios')

const flickrKey = require('../config/keys').flickrKey

module.exports = app => {
  app.get('/api/v1/photos', (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    let { tag, nextPage } = req.query

    console.log(tag)
    console.log(nextPage)
    // console.log(req.headers)

    // Request parameters
    const method = 'method=flickr.photos.search'
    const apiKey = `api_key=${flickrKey}`
    const tags = `tags=${tag}`
    const perPage = 'per_page=10'
    const format = 'format=json'
    const noJsonCallback = 'nojsoncallback=1'
    const page = `page=${nextPage}`

    axios
      .get(
        `https://api.flickr.com/services/rest/?${method}&${apiKey}&${tags}&${perPage}&${format}&${noJsonCallback}&${page}`,
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
