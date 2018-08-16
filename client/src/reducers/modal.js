// Modal Reducer

const modalReducerDefaultState = null

export default (state = modalReducerDefaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return action.id
    default:
      return state
  }
}
