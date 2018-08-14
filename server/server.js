const express = require('express')

const app = express()
const port = process.env.PORT | 5000

require('./routes/getPhotos')(app)

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})

module.exports = { app }
