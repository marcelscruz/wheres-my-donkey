// ***** Libraries ***** //
import axios from 'axios'

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export default () => {
  return new Promise((resolve, reject) => {
    axios
      .get('/api/v1/photos', headers)
      .then(res => {
        resolve(res)
      })
      .catch(e => {
        reject(e)
      })
  })
}
