const initialState = {
  names: [],
}

export function boardsReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_BOARD_NAME':
      return { ...state, names: [...state.names, action.payload] }
    case 'ADD_BOARD':
      return {
        ...state,
        [action.payload]: { name: action.payload, lists: [] },
      }
    case 'ADD_LIST_TO_BOARD':
      const boardID = action.id
      const boardState = state[boardID]

      boardState.lists.push({ name: action.payload })
      return {
        ...state,
        [boardID]: boardState,
      }
    default:
      return state
  }
}
