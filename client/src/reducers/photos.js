// Photos Reducer

const photosReducerDefaultState = []

export default (state = photosReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_PHOTOS':
      return [...state, ...action.photos]
    case 'SET_PHOTOS':
      return action.photos
    default:
      return state
  }
}
