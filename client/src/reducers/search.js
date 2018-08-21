// Search Reducer

const searchReducerDefaultState = {
  page: 1,
  tag: 'donkey',
}

export default (state = searchReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_NEXT_PAGE':
      return { ...state, page: action.page }
    case 'SET_TAG':
      return { ...state, tag: action.tag }
    default:
      return state
  }
}
