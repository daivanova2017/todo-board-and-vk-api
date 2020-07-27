const initialState = {
  boards: [],
}

export function listOfBoardsReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_BOARDS':
      return { ...state, boards: action.payload }
    default:
      return state
  }
}
