const initialState = {
  boards: localStorage.getItem('boards')
    ? JSON.parse(localStorage.getItem('boards'))
    : [],
}

export function listOfBoardsReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_BOARDS':
      return { ...state, boards: action.payload }
    default:
      return state
  }
}
