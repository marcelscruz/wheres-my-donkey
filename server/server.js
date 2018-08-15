// ***** Node ***** //
const path = require('path')

// ***** Libraries ***** //
const express = require('express')

const app = express()

// Serve client static files in production
const publicPath = path.join(__dirname, '../client/build')
app.use(express.static(publicPath))

// API endpoints
require('./routes/photos')(app)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})

module.exports = { app }
