// Photos Reducer

const errorReducerDefaultState = false

export default (state = errorReducerDefaultState, action) => {
  switch (action.type) {
    case 'ERROR_FETCHING_PHOTOS':
      return action.bool
    default:
      return state
  }
}
