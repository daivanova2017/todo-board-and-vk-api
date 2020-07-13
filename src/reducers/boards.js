const initialState = {
  names: [],
  lists: [],
}

export function boardsReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_BOARD_NAME':
      return { ...state, names: action.payload }

    case 'ADD_LIST_TO_BOARD':
      return { ...state, lists: action.payload }

    default:
      return state
  }
}
