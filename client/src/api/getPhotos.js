// ***** Libraries ***** //
import axios from 'axios'

// Reach API to fetch photos
export default (tag = 'donkey', nextPage) => {
  const headers = {
    Accept: 'application/json',
  }

  const params = {
    tag,
    nextPage,
  }

  return new Promise((resolve, reject) => {
    axios
      .get('/api/v1/photos', {
        headers,
        params,
      })
      .then(res => {
        resolve(res)
      })
      .catch(e => {
        reject(e)
      })
  })
}
