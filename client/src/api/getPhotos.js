// ***** Libraries ***** //
import axios from 'axios'

export default (tag = 'donkey', nextPage) => {
  const headers = {
    Accept: 'application/json',
  }

  return new Promise((resolve, reject) => {
    axios
      .get('/api/v1/photos', {
        headers,
        params: {
          tag,
          nextPage,
        },
      })
      .then(res => {
        resolve(res)
      })
      .catch(e => {
        reject(e)
      })
  })
}
