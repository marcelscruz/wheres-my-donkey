// Photos Reducer

const photosReducerDefaultState = []

export default (state = photosReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_PHOTOS':
      return action.photos
    default:
      return state
  }
}
