import React from 'react'

const Photo = ({ id, farm, secret, server }) => (
  <img
    src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
    alt=""
  />
)

export default Photo
