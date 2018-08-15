const request = require('supertest')

const { app } = require('../server')

describe('Server', () => {
  it('should successfully connect to Flickr API', done => {
    request(app)
      .get('/api/v1/photos')
      .expect(200)
      .end(done)
  })
})
