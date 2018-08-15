const express = require('express')
const path = require('path')

const app = express()

const publicPath = path.join(__dirname, '../client/build')
app.use(express.static(publicPath))

require('./routes/getPhotos')(app)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})

module.exports = { app }
