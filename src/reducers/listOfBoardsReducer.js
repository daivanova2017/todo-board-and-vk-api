const initialState = {
  boards: localStorage.getItem('boards')
    ? JSON.parse(localStorage.getItem('boards'))
    : [],
}

export function listOfBoardsReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_BOARDS':
      localStorage.setItem('boards', JSON.stringify(action.payload))
      return { ...state, boards: action.payload }
    default:
      return state
  }
}
